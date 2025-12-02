# Dockerfile for Visi Logistics Web (Next.js) using pnpm
# ---------------------------------------------------------------
# Builder stage – install dependencies and build the app
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm globally
RUN npm i -g pnpm

# Copy only the manifest file for caching
COPY package.json ./

# Install all dependencies (including dev) needed for the build
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Build the Next.js application
RUN pnpm run build

# ---------------------------------------------------------------
# Production stage – run the built app with only production deps
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install pnpm globally in the runtime image
RUN npm i -g pnpm

# Copy the built output and public assets from the builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Copy package manifest for installing prod deps only
COPY --from=builder /app/package.json ./

# Install only production dependencies
RUN pnpm install --prod

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "start"]
