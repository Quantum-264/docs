// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import PageTitle from './components/PageTitle.vue'
import BlogTitle from './components/BlogTitle.vue'
import ColorPalette from './components/ColorPalette.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PageTitle', PageTitle)
    app.component('BlogTitle', BlogTitle)
    app.component('ColorPalette', ColorPalette)
  },
}
