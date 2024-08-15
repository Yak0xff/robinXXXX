import { MDXLayoutRenderer } from 'components/MDXComponents'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PageTitle } from '~/components/PageTitle'
import { getCommentConfigs } from '~/libs/comment.server'
import { formatSlug, getFiles } from '~/libs/files.server'
import { getFileBySlug } from '~/libs/mdx.server'
import type { MdxPageLayout } from '~/types/mdx'
import type { LogProps } from '~/types/page'

let DEFAULT_LAYOUT: MdxPageLayout = 'PostSimple'

export async function getStaticPaths({ locales }: { locales: string[] }) {
  let paths = []
  for (let locale of locales) {
    let logs = getFiles(`${locale}/logs`)
    for (let log of logs) {
      paths.push({
        params: {
          slug: formatSlug(log).split('/'),
        },
        locale: locale,
      })
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params, locale }) {
  let log = await getFileBySlug(locale, 'logs', params.slug.join('/'))
  let commentConfig = getCommentConfigs()
  return {
    props: { log, commentConfig, ...(await serverSideTranslations(locale, ['common'])) },
  }
}

export default function Log({ log, commentConfig }: LogProps) {
  let { mdxSource, frontMatter } = log

  return (
    <>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          type="logs"
          frontMatter={frontMatter}
          commentConfig={commentConfig}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under construction
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
