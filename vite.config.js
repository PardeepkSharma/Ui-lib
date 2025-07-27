// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "UiLib",
      fileName: (format) => `ui-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Don't bundle peer deps
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });
