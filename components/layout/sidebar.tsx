import Link from 'next/link'
import { Button, buttonVariants } from '~/components/ui/button'
import { SidebarProps } from '~/data/sidebar'
import { cn } from '~/lib/utils'
import { Icons } from '../icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Sidebar({ data }: SidebarProps) {
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
            <h2 className="text-xl font-extrabold text-primary">Pede aí!</h2>
          </SheetTitle>
          <SheetDescription>Seu pedido na palma da sua mão.</SheetDescription>
        </SheetHeader>
        {data && (
          <div className="space-y-4 py-4">
            {data.map(({ title, menu, icon: IconTitle }, i) => (
              <div key={i} className="px-3 py-2">
                <h2 className="mb-2 flex items-center gap-2 px-4 text-lg font-semibold tracking-tight">
                  {IconTitle && (
                    <IconTitle className="h-5 w-5 text-secondary-foreground/30" />
                  )}
                  {title}
                </h2>
                <div className="space-y-1">
                  {menu.map(({ label, icon: IconLink, route }, j) => (
                    <Link
                      href={route}
                      key={j}
                      className={cn(
                        buttonVariants({ variant: 'ghost' }),
                        'flex w-full items-center justify-start gap-2',
                      )}
                    >
                      {IconLink && (
                        <IconLink className="h-5 w-5 text-secondary-foreground/30" />
                      )}
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
