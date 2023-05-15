import clsx from 'clsx'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'

function Plan({ name, price, description, href, features, featured = false }) {
  return (
    <section
      className={clsx('flex flex-col rounded-3xl px-6 sm:px-8', {
        'order-first bg-slate-800 py-8 lg:order-none': featured,
        'lg:py-8': !featured,
      })}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx('mt-2 text-base', {
          'text-white': featured,
          'text-slate-400': !featured,
        })}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        {price}
      </p>
      <ul
        className={clsx('order-last mt-10 space-y-3 text-sm', {
          'text-white': featured,
          'text-slate-200': !featured,
        })}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <svg
              aria-hidden="true"
              className={clsx('h-6 w-6 flex-none', {
                'fill-white stroke-white': featured,
                'fill-slate-400 stroke-slate-400': !featured,
              })}
            >
              <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                strokeWidth={0}
              />
              <circle
                cx={12}
                cy={12}
                r={8.25}
                fill="none"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="white"
        className="mt-8"
        aria-label={`Get started with ${name} plan for ${price}`}
      >
        Get started
      </ButtonLink>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <h2 id="pricing-title" className="sr-only">
        Pricing
      </h2>
      <Container>
        <div className="md:text-center">
          <p className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
           
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </p>
          <p className="mt-4 text-lg text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Starter"
            price="Free"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            href="/register"
            features={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            ]}
          />
          <Plan
            featured
            name="Base"
            price="$15"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing ."
            href="/register"
            features={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            ]}
          />
          <Plan
            name="Plus"
            price="$39"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing."
            href="/register"
            features={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
              'Lorem ipsum dolor sit amet, consectetur adipiscing ',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
