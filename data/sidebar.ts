import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'
import { LuCog, LuLock, LuPencil, LuUser } from 'react-icons/lu'

export interface SidebarLink {
  key: string
  route: string
  icon?: ComponentType<IconBaseProps>
}

export interface SidebarMenu {
  key: string
  menu: SidebarLink[]
}

export interface SidebarProps {
  data: SidebarMenu[]
}

export const sidebarData: SidebarMenu[] = [
  {
    key: 'sidebar.settings',
    menu: [
      { key: 'sidebar.personalize', route: '/', icon: LuPencil },
      { key: 'sidebar.permissions', route: '/', icon: LuCog },
    ],
  },
  {
    key: 'sidebar.users',
    menu: [
      { key: 'sidebar.profile', route: '/', icon: LuUser },
      { key: 'sidebar.change_password', route: '/', icon: LuLock },
    ],
  },
]
