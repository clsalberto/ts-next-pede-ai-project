import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'
import { LuCog, LuLock, LuPencil, LuUser } from 'react-icons/lu'

export interface SidebarLink {
  label: string
  route: string
  icon?: ComponentType<IconBaseProps>
}

export interface SidebarMenu {
  title: string
  menu: SidebarLink[]
  icon?: ComponentType<IconBaseProps>
}

export interface SidebarProps {
  data: SidebarMenu[]
}

export const sidebarData: SidebarMenu[] = [
  {
    title: 'Configurações',
    menu: [
      { label: 'Personalizar', route: '.', icon: LuPencil },
      { label: 'Permições', route: '.', icon: LuCog },
    ],
  },
  {
    title: 'Usuários',
    menu: [
      { label: 'Perfil', route: '.', icon: LuUser },
      { label: 'Alterar senha', route: '.', icon: LuLock },
    ],
  },
]
