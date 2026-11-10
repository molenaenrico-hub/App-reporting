import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ASCII-only bundle: the minifier would otherwise turn escaped characters from
  // the Excel libraries (e.g. "�" in their text decoders) into raw characters,
  // which the Artifact publisher refuses as likely encoding damage.
  esbuild: { charset: 'ascii' },
  server: {
    host: true,
  },
});
