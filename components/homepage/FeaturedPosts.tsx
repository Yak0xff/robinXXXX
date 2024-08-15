import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { Link } from '~/components/Link'
import { BlogTags } from '~/components/blog/BlogTags'
import { FEATURED_POSTS } from '~/constant'
import type { BlogFrontMatter } from '~/types/mdx'
import { formatDate } from '~/utils/date'
import Twemoji from '../Twemoji'

export function FeaturedPosts({ posts }: { posts: BlogFrontMatter[] }) {
  let { t, i18n } = useTranslation()
  let lang = i18n.language

  return (
    <>
      {!posts.length && 'No posts found.'}
      {posts.slice(0, FEATURED_POSTS).map((frontMatter) => {
        let { slug, date, title, summary, tags, cover } = frontMatter
        return (
          <>
            <Link href={`/blog/${slug}`} key={slug} title={title}>
              <div key={slug} className="flex justify-center items-center p-4 ">
                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent shadow-nextjs dark:shadow-nextjs-dark">
                  <div className="relative">
                    <img
                      className="w-full h-64 object-cover"
                      src={cover}
                      alt={title}
                      width={1024}
                      height={532}
                    />

                    <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
                      <time dateTime={date}>{formatDate(date, 'zh-CN')}</time>
                    </div>
                  </div>
                  <div className="p-6">
                    <p
                      className="font-bold mb-2 tracking-tight first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
                    >
                      {title.slice(0, 18)}
                    </p>
                    <p className="text-gray-700 mb-4 dark:text-gray-400 ">
                      {summary.slice(0, 52)}......
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
      })}
    </>
  )
}
