import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo.png'

export function Header(){
  return (
    <>
      <Image src={Logo} alt='' width='150rem' height='60rem'/>
      <nav>
        <Link href='/'> Track List</Link>
      </nav>
    </>
  )
}