import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressConfigs = {
  title: 'Quantum 264 Devblog',
  description: 'A place to hold all things related to Quantum 264',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation' },
      { text: 'Blog', link: '/blog' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Quantum-264' },
      { icon: 'github', link: 'https://github.com/gcoulby' },
    ],
  },
}

export default defineConfig(
  withSidebar(vitePressConfigs, [
    {
      documentRootPath: '/',
      scanStartPath: 'documentation',
      basePath: '/documentation/',
      resolvePath: '/documentation/',
      useTitleFromFrontmatter: true,
      sortMenusByFrontmatterDate: true,
      useTitleFromFileHeading: true,
      sortMenusOrderByDescending: true,
      frontmatterOrderDefaultValue: 0,
    },

    {
      documentRootPath: '/',
      scanStartPath: 'blog',
      basePath: '/blog/',
      resolvePath: '/blog/',
      useTitleFromFrontmatter: true,
      sortMenusByFrontmatterDate: true,
      sortMenusByFileDatePrefix: true,
      useTitleFromFileHeading: true,
      sortMenusOrderByDescending: true,
    },
  ])
)
