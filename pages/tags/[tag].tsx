import { PageSeo } from 'components/SEO'
import fs from 'fs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import path from 'path'
import { ListLayout } from '~/layouts/ListLayout'
import { generateRss } from '~/libs/generate-rss'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import { getAllTags } from '~/libs/tags'
import type { BlogFrontMatter } from '~/types'
import { kebabCase } from '~/utils/string'
import { useTranslation } from 'next-i18next'
import { getCommon } from '~/libs/files'

export function getStaticPaths({ locale }) {
  let tags = getAllTags(`${locale}/blog`)
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({
  params,
  locale,
}: {
  params: { tag: string }
  locale: string
}) {
  let allPosts = getAllFilesFrontMatter(`${locale}/blog`)
  let filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  let root = process.cwd()
  let rss = generateRss(
    getCommon(locale).siteMetadata,
    filteredPosts,
    `tags/${params.tag}/feed.xml`
  )
  let rssPath = path.join(root, 'public', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)

  return {
    props: {
      posts: filteredPosts,
      tag: params.tag,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default function Tag({ posts, tag }: { posts: BlogFrontMatter[]; tag: string }) {
  let { t } = useTranslation('common')

  // Capitalize first letter and convert space to dash
  if (!tag) {
    return <div>${t('tag.noTagsFound')}</div>
  }
  let title = tag[0] + tag.split(' ').join('-').slice(1)

  return (
    <>
      <PageSeo
        title={`${tag} - ${t('site_meta_data.title')}`}
        description={`${tag} tag - ${t('site_meta_data.title')}`}
      />
      <ListLayout posts={posts} title={`Tag: #${title}`} />
    </>
  )
}
