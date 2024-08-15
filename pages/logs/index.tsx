import { PageSeo } from 'components/SEO'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LogsLayout from '~/layouts/LogsLayout'
import { getAllFilesFrontMatter } from '~/libs/mdx.server'
import type { LogsFrontMatter } from '~/types/mdx'

export async function getStaticProps({ locale }: { locale: string }) {
  let logs = getAllFilesFrontMatter(`${locale}/logs`)
  return {
    props: { logs, ...(await serverSideTranslations(locale, ['common'])) },
  }
}

export default function Log({ logs }: { logs: LogsFrontMatter[] }) {
  let { t } = useTranslation('common')
  let description = t('menu_logs_2')
  return (
    <>
      <PageSeo
        title={`Two Cities Log - ${t('site_meta_data.author')} - ${t('site_meta_data.title')}`}
        description={description}
      />
      <LogsLayout logs={logs} description={description} />
    </>
  )
}
