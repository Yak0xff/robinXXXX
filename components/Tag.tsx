import Link from 'next/link'
import { kebabCase } from '~/utils/string'

export function Tag({ text }: { text: string }) {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-3 rounded-md bg-zinc-100  dark:bg-zinc-700 px-2 py-1 text-xs text-zinc-600 dark:text-zinc-100"
    >
      <span data-umami-event="tag">{text.split(' ').join('-')}</span>
    </Link>
  )
}
