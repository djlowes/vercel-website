import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-5xl font-bold mb-4">
        I&apos;m <span className="text-primary">@djlowes</span>
      </h1>
      <h2 className="text-3xl mb-6">...a builder and a doer</h2>
      <p className="text-lg mb-8 text-foreground">
        This is a simple personal website template I have built for myself, and for others can use. I built this using{' '}
        <a
          href="https://nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-mono"
        >
          `Node.js`
        </a>
        ,{' '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-mono"
        >
          `Next.js`
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-mono"
        >
          `Tailwind CSS`
        </a>
        , and it's deployed using{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-mono"
        >
          Vercel
        </a>
        . I am using{' '}
        <a
          href="https://react-leaflet.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-mono"
        >
          `react-leaflet`
        </a>{' '}
        for the Travel page and{' '}
        <a
          href="https://react-icons.github.io/react-icons/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-mono"
        >
          `react-icons`
        </a>{' '}
        for basic design. If you want to create a blog page, follow{' '}
        <a
          href="https://www.sanmith.dev/blog/how-to-create-a-next-js-blog-with-sanity-as-a-headless-cms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          these instructions
        </a>
        . This was built on a 3.5hr flight from Austin to SF with the help of{' '}
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Claude
        </a>
        .
      </p>

      <p className="text-lg mb-8 text-foreground">
        To use this template, download from{' '}
        <a
          href="https://github.com/djlowes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center"
        >
          here <FaGithub className="ml-1 text-sm" />
        </a>
      </p>

      <p className="text-lg mb-8 text-foreground">
        The components found in this template represent my professional and personal passions and achievements. Explore
        if you wish.
      </p>
      <p className="text-lg mb-8 text-foreground">
        If you are a startup founder seeking seed investment and your business fits within my{' '}
        <Link href="/investing" className="text-primary hover:underline">
          investment thesis
        </Link>
        , please email me your pitch deck by clicking on the button below.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-8">
        <a
          href="https://github.com/djlowes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/djlowes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/djlowes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="mailto:me@djlowes.com"
          className="text-foreground hover:text-primary transition-colors"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <Link
        href="mailto:me@djlowes.com"
        className="bg-primary text-background px-6 py-3 rounded hover:bg-opacity-90 transition-colors"
      >
        Contact me
      </Link>
    </div>
  )
}
