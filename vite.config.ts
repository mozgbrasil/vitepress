import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Adicione o nome do elemento personalizado aqui
          isCustomElement: (tag) => tag === 'mozg-simple-css-waves'
        }
      }
    })
  ]
})
