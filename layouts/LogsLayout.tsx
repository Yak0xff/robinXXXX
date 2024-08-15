import { LogsCard } from '~/components/LogsCard'
import type { LogsLayoutProps } from '~/types/layout'
import { useTranslation } from 'next-i18next'

function LogsLayout({ logs, description }: LogsLayoutProps) {
  let { t } = useTranslation('common')
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <header className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {t('menu_logs_2')}
        </h1>
        <p className="text-base md:text-lg md:leading-7 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </header>
      <div className="container py-12">
        <div className="grid-cols-3 lg:grid">
          {logs.map((log) => (
            <LogsCard key={log.title} log={log} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogsLayout
