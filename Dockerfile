# -----------------------------------------------------------------------------
# Stage 1: Install Dependencies
# -----------------------------------------------------------------------------
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Setup PNPM
RUN corepack enable pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies (frozen lockfile untuk konsistensi)
RUN pnpm i --frozen-lockfile

# -----------------------------------------------------------------------------
# Stage 2: Build the App
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable pnpm

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry (optional)
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js
RUN pnpm run build

# -----------------------------------------------------------------------------
# Stage 3: Production Runner
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public folder (aset statis)
COPY --from=builder /app/public ./public

# Copy hasil build standalone
# Folder .next/standalone dibuat otomatis karena setting next.config.ts tadi
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]