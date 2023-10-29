'use client'

import { cn } from '~/lib/utils'
import { Icons } from '../icons'
import { ModeToggle } from './mode-toggle'
import { Sidebar } from './sidebar'

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string
}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <>
      <div {...props} className={cn('flex-col md:flex', className)}>
        <div className="border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-2">
              <Sidebar />
              <Icons.pizza className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-extrabold text-primary">Pede aí!</h2>
            </div>
            <div className="flex items-center space-x-4">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
