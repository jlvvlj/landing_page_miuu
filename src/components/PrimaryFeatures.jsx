import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: 'Studio',
    description:
      "Collaborate on projects and upload images, text and musical contributions.",
    image: screenshotPayroll,
  },
  {
    title: 'Contracts',
    description:
      "Choose from a range of standard contracts or set your own rules, split revenues among right holders.",
    image: screenshotExpenses,
  },
  {
    title: 'Wallet',
    description:
      "Get access to your balance, transfer funds to external accounts",
    image: screenshotVatReturns,
  },
  {
    title: 'Dashboard',
    description:
      'Dive into your revenue streams with a complete dashboard for all your projects.',
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative overflow-hidden bg-slate-800 pt-20 pb-28 sm:py-32"
    >
    
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2
            id="features-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Everything you need for your musical rights.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Collaborate, distribute and share your revenues on a single platform.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'bg-slate-900 group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        {
                          'bg-slate-900 lg:bg-slate-900/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
                            selectedIndex === featureIndex,
                          'hover:bg-slate-700/10 lg:hover:bg-slate-700/5':
                            selectedIndex !== featureIndex,
                        }
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            {
                              'text-blue-600 lg:text-white':
                                selectedIndex === featureIndex,
                              'text-blue-100 hover:text-white lg:text-white':
                                selectedIndex !== featureIndex,
                            }
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx('mt-2 hidden text-sm lg:block', {
                          'text-white': selectedIndex === featureIndex,
                          'text-blue-100 group-hover:text-white':
                            selectedIndex !== featureIndex,
                        })}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-slate-950/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-800 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        src={feature.image}
                        alt=""
                        layout="fill"
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
