import { siteMetadata } from '~/data/siteMetadata'
import { Link } from '../Link'
import { Twemoji } from '../Twemoji'
import { useTranslation } from 'next-i18next'

export function BlogLinks() {
  let { t } = useTranslation('common')

  return (
    <div className="flex flex-col space-y-1.5">
      <Link href="/blog" className="hover:underline">
        <Twemoji emoji="memo" />
        <span data-umami-event="home-link-blog" className="ml-1.5">
          {t('menu_blog_2')}
        </span>
      </Link>
      <Link href="/logs" className="hover:underline">
        <Twemoji emoji="dna" />
        <span data-umami-event="home-link-logs" className="ml-1.5">
          {t('menu_logs_2')}
        </span>
      </Link>
      <Link href="/projects" className="hover:underline">
        <Twemoji emoji="hammer-and-wrench" />
        <span data-umami-event="home-link-projects" className="ml-1.5">
          {t('menu_projects_2')}
        </span>
      </Link>
      <Link href="/about" className="hover:underline">
        <Twemoji emoji="face-with-monocle" />
        <span data-umami-event="home-link-about" className="ml-1.5">
          {t('menu_about_2')}
        </span>
      </Link>
      {/* <Link href="/resume" className="hover:underline">
        <Twemoji emoji="briefcase" />
        <span data-umami-event="home-link-resume" className="ml-1.5">
          {t('menu_resume_2')}
        </span>
      </Link> */}
      {/* <Link href={siteMetadata.analyticsURL} className="hover:underline">
        <Twemoji emoji="bar-chart" />
        <span data-umami-event="home-link-analytics" className="ml-1.5">
          {t('analytics')}
        </span>
      </Link> */}
    </div>
  )
}
