import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.png'
import { HeaderContainer } from '../styles/pages/app'

export function Header(){
  return (
    <HeaderContainer>
      <Image src={Logo} alt='' width='150rem' height='60rem'/>
      <nav>
        <Link href='/'> Track List</Link>
      </nav>
    </HeaderContainer>
  )
}