export let siteMetadata = {
  siteUrl: 'https://robinx.vercel.app/',
  siteRepo: 'https://github.com/Yak0xff/robinXXXX',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/logo.png',
  socialBanner: '/static/images/logo.png',
  email: 'robinchao2017@gmail.com',
  github: 'https://github.com/Yak0xff',
  x: 'https://x.com/zh_robin',
  // facebook: 'https://facebook.com/hta218',
  // youtube: 'https://www.youtube.com/@hta218_',
  linkedin: 'https://www.linkedin.com/in/yak0xff/',
  locale: 'en-US',
  analyticsURL: '',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false, // true | false
    umamiWebsiteId: '',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'Yak0xff',
    linkedin: 'yak0xff',
    x: 'zh_robin',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: 'Yak0xff/robinXXXX', // process.env.GISCUS_REPO
    repositoryId: 'R_kgDOMiCoMw', // process.env.GISCUS_REPOSITORY_ID
    category: 'General', // process.env.GISCUS_CATEGORY
    categoryId: 'DIC_kwDOMiCoM84Chint', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
