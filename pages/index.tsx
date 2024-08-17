import { PageSeo } from 'components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ProfileCard } from '~/components/ProfileCard'
import { Twemoji } from '~/components/Twemoji'
import { BlogLinks } from '~/components/homepage/BlogLinks'
// import { FeaturedImages } from '~/components/homepage/FeaturedImages'
// import { Photos } from '~/components/homepage/Photos'
import { FeaturedPosts } from '~/components/homepage/FeaturedPosts'
import { Greeting } from '~/components/homepage/Greeting'
import { Heading } from '~/components/homepage/Heading'
import { ShortDescription } from '~/components/homepage/ShortDescription'
import { TypedBios } from '~/components/homepage/TypedBios'
import { getAllFilesFrontMatter } from '~/libs/mdx.server'
import { Link } from '~/components/Link'
import { FEATURED_LOGS, FEATURED_POSTS } from '~/constant'
import { FeaturedLogs } from '~/components/homepage/FeaturedLogs'

export async function getStaticProps({ locale }) {
  let posts = getAllFilesFrontMatter(`${locale}/blog`)
  let logs = getAllFilesFrontMatter(`${locale}/logs`)
  return {
    props: {
      posts,
      logs,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Home({ posts, logs }) {
  let { t } = useTranslation('common')

  return (
    <>
      <PageSeo title={t('site_meta_data.title')} description={t('site_meta_data.description')} />
      <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-2 md:pt-4 xl:grid xl:grid-cols-3">
          <div className="md:pr-8 xl:col-span-2 space-y-6 md:space-y-8">
            <Greeting />
            <div className="text-base leading-7 md:text-lg md:leading-8 text-gray-600 dark:text-gray-400">
              <Heading />
              <TypedBios />
              <ShortDescription />
              <BlogLinks />
              <p className="my-8 flex">
                <span className="mr-2">
                  「{t('happy_reading')}」
                  <Twemoji emoji="clinking-beer-mugs" />
                </span>
              </p>
            </div>
          </div>
          <div className="hidden xl:block">
            <ProfileCard />
          </div>
        </div>
      </div>
      {/* <div>
        <Photos />
      </div> */}
      <div className="container max-w-full py-12">
        <div className="grid-cols-3 lg:grid">
          <FeaturedPosts posts={posts} />
        </div>
        {posts.length > FEATURED_POSTS && (
          <div className="flex justify-end text-base font-medium leading-6 py-4">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              <span data-umami-event="all-posts"> {t('blog.all_posts_title')} &rarr;</span>
            </Link>
          </div>
        )}
      </div>

      <div>
        <h3 className=" text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          {t('menu_logs_2')}
        </h3>
      </div>

      <div className="container max-w-full py-12">
        <div className="grid-cols-3 lg:grid">
          <FeaturedLogs logs={logs} />
        </div>
        {logs.length > FEATURED_LOGS && (
          <div className="flex justify-end text-base font-medium leading-6 py-4">
            <Link
              href="/logs"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all logs"
            >
              <span data-umami-event="all-posts"> {t('blog.all_posts_title')} &rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
