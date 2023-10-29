import { IconBaseProps } from 'react-icons'
import { LuMenu, LuMoon, LuPizza, LuSun } from 'react-icons/lu'

export const Icons = {
  sun: (props: IconBaseProps) => <LuSun {...props} />,
  moon: (props: IconBaseProps) => <LuMoon {...props} />,
  menu: (props: IconBaseProps) => <LuMenu {...props} />,
  pizza: (props: IconBaseProps) => <LuPizza {...props} />,
}
