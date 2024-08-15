import { useTranslation } from 'next-i18next'
import type { BlogFrontMatter, LogsFrontMatter } from '~/types/mdx'
import { formatDate } from '~/utils/date'
import { Link } from './Link'
import { Tag } from './Tag'
import Twemoji from './Twemoji'
import { BlogTags } from './blog/BlogTags'

export function PostListItem({ frontMatter }: { frontMatter: BlogFrontMatter | LogsFrontMatter }) {
  let { slug, date, title, summary, tags, heading, type, cover } = frontMatter as BlogFrontMatter &
    LogsFrontMatter
  let { t, i18n } = useTranslation()
  let lang = i18n.language
  let isLogs = heading && type
  let category = isLogs ? 'logs' : 'blog'

  if (isLogs) {
    return (
      <li key={slug}>
        <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">{t('blog.published_on')}</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date, lang)}</time>
            </dd>
          </dl>
          <div className="space-y-3 xl:col-span-3">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold leading-8 tracking-tight">
                <Link href={`/${category}/${slug}`} className="text-gray-900 dark:text-gray-100">
                  <span data-umami-event="blog-title">{title}</span>
                </Link>
              </h3>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
          </div>
        </article>
      </li>
    )
  } else {
    return (
      <>
        <Link href={`/blog/${slug}`} key={slug} title={title}>
          <div key={slug} className="flex justify-center items-center p-4">
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent shadow-nextjs dark:shadow-nextjs-dark">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src={cover}
                  alt="Nature scene"
                  width={1088}
                  height={612}
                />

                <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                  <time dateTime={date}>{formatDate(date, 'zh-CN')}</time>
                </div>
              </div>
              <div className="p-6">
                <p className="font-bold mb-2 tracking-tight">{title.slice(0, 18)}</p>
                <p className="text-gray-500 mb-4 dark:text-gray-400">
                  {summary.slice(0, 60)}......
                </p>

                <div className="flex justify-between items-center">
                  <BlogTags tags={tags} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </>
    )
  }
}
