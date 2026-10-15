const linkClassName =
  'font-bold underline underline-offset-2 hover:no-underline focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900'

export default function Attribution() {
  return (
    <footer className="row-start-3 self-end text-center text-xs text-slate-900">
      Challenge by{' '}
      <a className={linkClassName} href="https://www.frontendmentor.io?ref=challenge">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a className={linkClassName} href="https://github.com/temivan">
        temivan
      </a>
      .
    </footer>
  )
}
