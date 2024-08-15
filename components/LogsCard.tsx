import type { LogsFrontMatter } from '~/types/mdx'
import { Link } from './Link'
import { BlogTags } from '~/components/blog/BlogTags'
import { formatDate } from '~/utils/date'

export function LogsCard({ log }: { log: LogsFrontMatter }) {
  let { tags, date, summary, title, slug, cover } = log

  let finalCover = cover ? cover : 'https://picsum.photos/id/19/200/300?random=2'

  return (
    <Link href={`/logs/${slug}`} key={slug} title={title}>
      <div key={slug} className="flex justify-center items-center p-4">
        <div className="flex h-full flex-col overflow-hidden rounded-lg border border-transparent shadow-nextjs dark:shadow-nextjs-dark">
          <div className="relative">
            <img
              className="w-full h-64 object-cover"
              src={finalCover}
              alt="Nature scene"
              width={1088}
              height={612}
            />

            <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
              <time dateTime={date}>{formatDate(date, 'zh-CN')}</time>
            </div>
          </div>
          <div className="p-6">
            <p className="font-bold mb-2 tracking-tight text-3xl text-slate-900 mr-3 float-left">
              {title.slice(0, 4)}
            </p>
            <p className="font-bold mb-2 tracking-tight">{title.slice(5, 18)}</p>
            <p className="text-gray-500 mb-4 dark:text-gray-400">{summary.slice(0, 60)}......</p>

            <div className="flex justify-between items-center">
              <BlogTags tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
