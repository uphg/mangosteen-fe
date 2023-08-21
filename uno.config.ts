import { Preset, defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
  ],
  rules: [
    ['shadow-card', { 'box-shadow': '0px 4px 20px 0px rgba(229,229,229,1)' }]
  ]
})
