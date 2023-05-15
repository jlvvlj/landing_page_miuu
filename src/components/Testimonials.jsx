import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      
      content:
        'Miuu is so easy to use I can’t help but wonder if it’s really not a dream.',
      author: {
        name: 'Sheryl Berge',
        role: 'Musician',
        image: avatarImage1,
      },
    },
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Amy Hahn',
        role: 'Musician',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Leland Kiehn',
        role: 'Musician',
        image: avatarImage5,
      },
    },
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Erin Powlowski',
        role: 'Musician',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Peter Renolds',
        role: 'Musician',
        image: avatarImage3,
      },
    },
    {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Amy Hahn',
        role: 'Musician',
        image: avatarImage4,
      },
    },
  ],
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-slate-800 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-display text-3xl tracking-tight text-slate-200 sm:text-4xl"
          >
            Loved by artists.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-200">
            We bring new life to musical rights management.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-slate-950 p-6 shadow-xl shadow-slate-900/10">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-200">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-200">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-100">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                          <Image src={testimonial.author.image} alt="" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
