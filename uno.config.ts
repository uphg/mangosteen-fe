import { Preset, defineConfig, toEscapedSelector, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
  ],
  rules: [
    ['shadow-card', { 'box-shadow': '0px 4px 20px 0px rgba(229,229,229,1)' }],
    [/^transition-bg-color?(?:-(\d+))?$/, ([, name], { rawSelector }) => {
      const selector = toEscapedSelector(rawSelector)

      return `${selector} {
        transition-property: background-color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: ${Number(name) ? `${name}ms;` : `0s` };
      }`
    }]
  ]
})
