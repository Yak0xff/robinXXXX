import type readingTime from 'reading-time'
// import type { BrandIconsMap } from '~/components/BrandIcon'
import type { TOC } from './server'

export type MdxPageLayout =
  | 'AuthorLayout'
  | 'ListLayout'
  | 'PostLayout'
  | 'PostSimple'
  | 'ResumeLayout'
  | 'LogsLayout'

export interface MdxFrontMatter {
  layout?: MdxPageLayout
  title: string
  name?: string
  date: string
  lastmod?: string
  tags: string[]
  draft?: boolean
  summary: string
  images?: string[] | string
  authors?: string[]
  slug: string
  cover?: string
}

export type ReadingTime = ReturnType<typeof readingTime>

export interface BlogFrontMatter extends MdxFrontMatter {
  readingTime: ReadingTime
  fileName: string
}

export interface LogsFrontMatter extends BlogFrontMatter {
  heading: string
  type: string
}

export interface AuthorFrontMatter extends MdxFrontMatter {
  avatar: string
  github?: string
}

export interface MdxFileData {
  mdxSource: string
  frontMatter: BlogFrontMatter
  toc: TOC[]
}

export interface MdxLayoutRendererProps {
  layout: MdxPageLayout
  mdxSource: string
  frontMatter: MdxFrontMatter
  [key: string]: any
}
