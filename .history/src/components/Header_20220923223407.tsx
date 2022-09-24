import Image from 'next/image'
import Logo from '../assets/logo.png'

export function Header(){
  return (
    <>
      <Image src={Logo} alt='' width='50rem' height='30%'/>
    </>
  )
}