export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
