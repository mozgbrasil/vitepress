import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export const en = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/mozgbrasil/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2016-present Evan You'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guia',
      link: '/guide/what-is-mozg',
      activeMatch: '/guide/'
    },
    {
      text: 'Web Component',
      link: '/reference/web-component',
      activeMatch: '/reference/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/mozgbrasil/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/mozgbrasil/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introdução',
      collapsed: false,
      items: [
        { text: 'O que é Mozg?', link: 'what-is-mozg' },
        { text: 'Iniciando', link: 'getting-started' }
      ]
    },
    { text: 'Web Component', base: '/reference/', link: 'web-component' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Web Component', link: 'web-component' },
        {
          text: 'Default Component',
          base: '/reference/default-component-',
          items: [{ text: 'Simple Css Waves', link: 'simple-css-waves' }]
        }
      ]
    }
  ]
}
