import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: 'niviki-com-t-do-t-i-ch-nh-10f5e54221eb4b059bc5b5305da949ba',
  rootNotionPageId: 'ROA-eaaf90d4860146049a46aa4786d2987f',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,


  // basic site info (required)
  name: 'riverofart.COM - Decorate Fountain',
  domain: 'riverofart.com',
  author: 'Duy Dang',


  // open graph metadata (optional)
  description: 'Kiến tạo cảnh quan ngoại thất, chăm sóc nông nghiệp',


  // social usernames (optional)
  twitter: 'river_of_art',
  // github: 'transitive-bullshit',
  linkedin: 'Văn Duy Đặng',
 
  facebook: 'https://www.facebook.com/profile.php?id=100090728059751',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  youtube: 'https://www.youtube.com/@RiverOfArt/featured', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`


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
    // '/hoa-don-dien-tu-voi-blockchain-p1/': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/giai-phap-hoa-don-dien-tu-voi-blockchain-phan-2-the-mvp': '/9dd30a7b68af4b40a8ad3d6d9cb845f0',
    // '/phong-van-business-analyst-ba-ky-su-phan-1': '/60ebc3f1d53646119f703fe5d13df633'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Đèn',
      pageId: '59432e1a0cdf4effbb402701deff00a9'
    },    
    {
      title: 'Đầu phun nghệ thuật',
      pageId: '93331fa2964045248502bd314019c917'
    },    
    {
      title: 'Tưới cây',
      pageId: '8e761b9e7d1b4db1ae76bbc1e4f9aa1f'
    },    
    {
      title: 'About',
      pageId: '38979ee661fc4a5d8af2d7c32319ee0d'

    }
  ]
})
