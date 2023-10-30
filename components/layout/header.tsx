'use client'

import { sidebarData } from '~/data/sidebar'
import { cn } from '~/lib/utils'
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
              <Sidebar data={sidebarData} />
              <h2 className="text-xl font-extrabold text-primary">Pede aí!</h2>
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
