import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
  ],
  [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
  ],
  [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet.',
    }
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-200 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-200">
            If you can’t find what you’re looking for, email our team
            and we will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-200">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-200">{faq.answer}</p>
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
