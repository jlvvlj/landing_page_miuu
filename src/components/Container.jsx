import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx(' w-screen min-w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
