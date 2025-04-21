import { type SiteConfig, siteConfig } from './lib/site-config'

type NotionPageType = 'hello' | 'studio' | 'team' | 'moozi-hello' | 'just-dodo'

const notionPageType: NotionPageType = process.env
  .NOTION_PAGE_TYPE as NotionPageType

const baseConfig: SiteConfig = {
  // the site's root Notion page (required)
  rootNotionPageId: 'dd4e4a0a7d1846d3ba20a46553e08395',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,
  author: 'team',

  // basic site info (required)
  name: 'Cuby notion page',
  domain: 'notion.cuby.world',

  // open graph metadata (optional)
  description: "Cuby team's notion page",
  manifest: '/cuby/manifest.json',

  // social usernames (optional)
  twitter: 'cuby_world',
  instagram: 'cuby_world',
  // github: 'cuby.world',
  // linkedin: 'cuby.world',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/kor': '9e4ca38bc1a24c49b213aeefd7167bf6'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
}

const helloConfig = {
  rootNotionPageId: 'dd4e4a0a7d1846d3ba20a46553e08395',
  name: 'Cuby notion page',
  domain: 'hello.cuby.world',
  author: 'Cuby team',
  description: "Cuby team's notion page",
  twitter: 'cuby_world',
  instagram: 'cuby_world'
}

const studioConfig = {
  rootNotionPageId: '6e29514486dd4b1dac83d202b6ff0786',
  name: 'CUBY STUDIO',
  domain: 'studio.cuby.world',

  author: 'Cuby team'
}

const teamConfig = {
  rootNotionPageId: '66e5a8fc71764ad4a3ebf6cfac77e9ac',
  name: 'Cuby TEAM page',
  domain: 'team.cuby.world',

  author: 'Cuby team'
}

const mooziHelloConfig = {
  rootNotionPageId: 'ade9cc7027d844b28339178493c540bc',
  name: 'Moozi notion page',
  domain: 'hello.moozi.me',

  author: 'Moozi team',

  // open graph metadata (optional)
  description: "Moozi team's notion page",
  manifest: '/moozi/manifest.json'
}
const justDodoConfig = {
  rootNotionPageId: '9dc14d5460f7492888b4c6bb3b4d42fe',
  name: 'Just-dodo notion page',
  domain: 'callmejustdodo.com',
  author: 'just-dodo',

  // open graph metadata (optional)
  description: "just-dodo's notion page",
  manifest: '/just-dodo/manifest.json'
}

// if notionPageType is hello, return baseConfig + helloConfig
// if notionPageType is studio, return baseConfig + studioConfig
// if notionPageType is team, return baseConfig + teamConfig
// else return baseConfig
const getSiteConfig: () => SiteConfig = () => {
  switch (notionPageType) {
    case 'hello':
      return { ...baseConfig, ...helloConfig }
    case 'studio':
      return { ...baseConfig, ...studioConfig }
    case 'team':
      return { ...baseConfig, ...teamConfig }
    case 'moozi-hello':
      return { ...baseConfig, ...mooziHelloConfig }
    case 'just-dodo':
      return { ...baseConfig, ...justDodoConfig }
    default:
      return baseConfig
  }
}

export default siteConfig(getSiteConfig())
