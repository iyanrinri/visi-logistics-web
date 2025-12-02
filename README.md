# Visi Logistics Web

A modern, premium logistics website built with **Next.js** and **pnpm**.

## Live Demo

You can view the deployed site here:

```
http://visilogistics.bromn.biz.id/
```

## Prerequisites

- **Node.js** (v20 or later) – recommended LTS version.
- **pnpm** – fast package manager. Install globally if you don't have it:
  ```bash
  npm i -g pnpm
  ```
- **Docker** (optional) – for containerised deployment.

## Getting Started (Local Development)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd visi-logistics-web
   ```
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Run the development server**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
pnpm build
```

The compiled output will be placed in the `.next` directory.

## Running the Production Build Locally

```bash
pnpm start
```

The app will listen on port **3000** by default.

## Docker Deployment (Using pnpm)

A multi‑stage Dockerfile is included in the project root. To build and run the container:

```bash
# Build the Docker image
docker build -t visi-logistics-web .

# Run the container (exposes port 3000)
docker run -p 3000:3000 visi-logistics-web
```

The application will be accessible at `http://localhost:3000` inside the container.

## Additional Scripts

- `pnpm lint` – run ESLint.
- `pnpm dev` – start development server with hot‑reloading.
- `pnpm build` – create an optimized production build.
- `pnpm start` – start the production server.

## Learn More

- **Next.js Documentation** – https://nextjs.org/docs
- **pnpm Documentation** – https://pnpm.io
- **Docker Documentation** – https://docs.docker.com/get-started/

---

Feel free to open issues or submit pull requests if you find bugs or have suggestions!
