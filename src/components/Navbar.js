import React from 'react'


export default function Navbar() {
  return (
    <header aria-label="Site Header" className="text-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-white" href="/">
          <span className="sr-only">Home</span>
          <img src="triangular.png" alt='logo'/>
        </a>
      </div>
      <div className="hidden md:block">
        <nav aria-label="Site Nav">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-white transition hover:text-violet-700"
                href="/"
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
  )
}
