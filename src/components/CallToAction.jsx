import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-900 py-32"
    >
   
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-4xl tracking-tight font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent animate-text sm:text-3xl md:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Take control of your music. We manage your rights for free the first 6 months.
          </p>
          <ButtonLink href="/register" color="blue" className="mt-10">
            Get 6 months free
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
