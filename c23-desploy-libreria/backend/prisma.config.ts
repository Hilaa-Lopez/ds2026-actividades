import { defineConfig } from '@prisma/config';

export default defineConfig({
  orm: {
    adapter: {
      provider: 'pg',
    },
  },
});