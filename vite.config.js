import {defineConfig} from "vite"

const buildDate = new Date()
const appVersionDate = [
  buildDate.getUTCFullYear(),
  String(buildDate.getUTCMonth() + 1).padStart(2, "0"),
  String(buildDate.getUTCDate()).padStart(2, "0"),
].join("")

const injectAppVersionDate = () => ({
  name: "inject-app-version-date",
  transformIndexHtml: html => html.replaceAll("%APP_VERSION_DATE%", appVersionDate),
})

export default defineConfig({
  plugins: [injectAppVersionDate()],
  worker: {
    format: 'es' // Use ES modules in workers
  },
  build: {
    target: 'esnext'
  },
  define: {
    global: 'globalThis',
  }
})
