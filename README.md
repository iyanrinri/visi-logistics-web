# Visi Logistics Web

A modern logistics landing page rebuilt with **Vue 3**, **Vite**, and **Tailwind CSS**.

## Live Demo

You can view the deployed site here:

```
http://visilogistics.bromn.biz.id/
```

## Prerequisites

- **Node.js** (v20 or later) – recommended LTS version.
- **Docker** (optional) – for containerised deployment.

## Getting Started (Local Development)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd visi-logistics-web
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

```bash
npm run build
```

The compiled output will be placed in the `dist` directory.

## Running the Production Build Locally

```bash
npm run start
```

The preview server listens on port **3000** by default.

## Docker Deployment

A multi‑stage Dockerfile is included in the project root. To build and run the container:

```bash
# Build the Docker image
docker build -t visi-logistics-web .

# Run the container (exposes port 3000)
docker run -p 3000:3000 visi-logistics-web
```

The application will be accessible at `http://localhost:3000` inside the container.

## Additional Scripts

- `npm run lint` – run ESLint.
- `npm run dev` – start development server with hot-reloading.
- `npm run build` – create an optimized production build.
- `npm run start` – preview the production build.

## Learn More

- **Vue Documentation** – https://vuejs.org
- **Vite Documentation** – https://vite.dev
- **Docker Documentation** – https://docs.docker.com/get-started/

---

Feel free to open issues or submit pull requests if you find bugs or have suggestions!
