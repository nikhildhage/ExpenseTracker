# Base image: official Deno image (Deno 2.x). Pin a tag for reproducibility.
FROM denoland/deno:2.1.4

# The denoland/deno image already ships a non-root `deno` user.
# Running as non-root avoids host compromise if the app is exploited.
WORKDIR /app

# Copy manifests first so Docker can cache the dependency layer.
# package.json holds the deps; deno.json holds tasks; deno.lock pins versions.
COPY package.json deno.json deno.lock* ./

# Ensure the app dir is writable by the deno user, then install deps.
USER root
RUN chown -R deno:deno /app
USER deno

# `deno install` reads package.json and builds node_modules/
# (nodeModulesDir "auto" in deno.json) which Vite + React/MUI need.
RUN deno install

# Copy the rest of the source.
COPY --chown=deno:deno . .

# Build the production bundle into dist/.
RUN deno task build

# Vite dev server port.
EXPOSE 5173

# Run the dev server.
CMD ["deno", "task", "dev"]
