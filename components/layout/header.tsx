'use client'

import { useTranslation } from 'react-i18next'
import { sidebarData } from '~/data/sidebar'
import { cn } from '~/lib/utils'
import { ModeLanguage } from './mode-language'
import { ModeToggle } from './mode-toggle'
import { Sidebar } from './sidebar'

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string
}

export function Header({ className, ...props }: HeaderProps) {
  const { t } = useTranslation()

  return (
    <>
      <div {...props} className={cn('flex-col md:flex', className)}>
        <div className="border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <Sidebar data={sidebarData} />
              <h2 className="text-xl font-extrabold text-primary">
                {t('site.title')}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <ModeLanguage />
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
