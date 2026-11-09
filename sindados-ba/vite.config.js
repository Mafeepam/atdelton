import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCodespace = process.env.CODESPACES === 'true'
const codespaceName = process.env.CODESPACE_NAME
const forwardingDomain = process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
const codespaceHost =
  isCodespace && codespaceName && forwardingDomain
    ? `${codespaceName}-5173.${forwardingDomain}`
    : null

export default defineConfig({
  plugins: [react()],
  server: {
    host: isCodespace ? '0.0.0.0' : '127.0.0.1',
    port: 5173,
    strictPort: true,
    allowedHosts: codespaceHost ? [codespaceHost] : [],
  },
})
