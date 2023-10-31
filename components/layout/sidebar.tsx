'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Button, buttonVariants } from '~/components/ui/button'
import { SidebarProps } from '~/data/sidebar'
import { cn } from '~/lib/utils'
import { Icons } from '../icons'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Sidebar({ data }: SidebarProps) {
  const { t } = useTranslation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="icon" size="icon">
          <Icons.menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col justify-start">
        <SheetHeader className="mb-2 text-left">
          <SheetTitle className="flex items-center space-x-2">
            <h2 className="text-xl font-extrabold text-primary">
              {t('site.title')}
            </h2>
          </SheetTitle>
          <SheetDescription>{t('sidebar.description')}</SheetDescription>
        </SheetHeader>
        {data && (
          <SheetClose>
            <div className="space-y-4 py-4">
              {data.map(({ key, menu }, i) => (
                <div key={i} className="px-3 py-2">
                  <h2 className="mb-2 flex items-center gap-2 px-4 text-lg font-semibold tracking-tight">
                    {t(key)}
                  </h2>
                  <div className="space-y-1">
                    {menu.map(({ key, route, icon: Icon }, j) => (
                      <Link
                        href={route}
                        key={j}
                        className={cn(
                          buttonVariants({ variant: 'ghost' }),
                          'flex w-full items-center justify-start gap-2',
                        )}
                      >
                        {Icon && (
                          <Icon className="h-5 w-5 text-secondary-foreground/30" />
                        )}
                        {t(key)}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SheetClose>
        )}
      </SheetContent>
    </Sheet>
  )
}
