import Image from 'next/image'


import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className=" bg-slate-900 pb-4 text-center">
      <header
  className="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
>
  <div
    className="relative z-30 p-5 text-2xl text-white rounded-xl"
  >
       <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-100 sm:text-7xl">
        Music{' '}
        <span className="relative whitespace-nowrap">
         
          <span className="relativetext-9xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            bg-gradient-to-r from-indigo-600 from-10% to-emerald-500 to-90%
            animate-text
            ">revenues</span>
        </span>{' '}
        made simple.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-300">
      Distribute your music automatically to TikTok, YouTube, Tidal, Spotify, Apple Music, and more. Monitor and share your revenues with other rights holders. 
      </p>
      <div className="mt-10 flex justify-center space-x-6">
        <ButtonLink href="/register">Get 3 months free</ButtonLink>
        <ButtonLink
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </ButtonLink>
      </div>
     
  </div>
</header>
      <div className="mt-4 lg:mt-8">
        <p className="font-display text-8xl tracking-tight font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent animate-text sm:text-3xl md:text-5xl">
         In partnership with
        </p>
        <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
          <li>
            <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
              <li className="flex">
                <Image
                  src={logoTransistor}
                  alt="Transistor"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image src={logoTuple} alt="Tuple" layout="fixed" unoptimized />
              </li>
              <li className="flex">
                <Image
                  src={logoStaticKit}
                  alt="StaticKit"
                  layout="fixed"
                  unoptimized
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
              <li className="flex">
                <Image
                  src={logoMirage}
                  alt="Mirage"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src={logoLaravel}
                  alt="Laravel"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image
                  src={logoStatamic}
                  alt="Statamic"
                  layout="fixed"
                  unoptimized
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
  
    </Container>
  )
}
