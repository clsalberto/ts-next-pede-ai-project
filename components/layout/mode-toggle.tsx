'use client'

import { useTheme } from 'next-themes'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Icons } from '../icons'

export function ModeToggle() {
  const { setTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="icon" size="icon">
          <Icons.sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {t('mode.light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {t('mode.dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {t('mode.system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
