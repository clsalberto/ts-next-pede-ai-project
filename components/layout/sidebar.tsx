import { Button } from '~/components/ui/button'
import { Icons } from '../icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Sidebar() {
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
        Menu AQUI
      </SheetContent>
    </Sheet>
  )
}
