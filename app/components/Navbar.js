import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../images/djlowes.jpeg'

export default function Navbar() {
  return (
    <nav className="bg-background text-foreground p-4 sticky top-0 z-10">
      <div className="container mx-auto max-w-4xl flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={profilePic}
            alt="DJ Lowes"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xm font-medium text-primary">Home</span>
        </Link>
           <ul className="flex space-x-4">
          <li><Link href="/professional" className="hover:text-primary transition-colors">Professional</Link></li>
          <li><Link href="/personal" className="hover:text-primary transition-colors">Personal</Link></li>
          <li><Link href="/travel" className="hover:text-primary transition-colors">Travel</Link></li>
          <li><Link href="/investing" className="hover:text-primary transition-colors">Investing</Link></li>
        </ul>
      </div>
    </nav>
  )
}