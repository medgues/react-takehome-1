import React from 'react'


export default function Navbar() {
  return (
    <header aria-label="Site Header" class="text-white">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="md:flex md:items-center md:gap-12">
        <a class="block text-white" href="/">
          <span class="sr-only">Home</span>
          <img src="https://img.icons8.com/pastel-glyph/64/000000/warning-triangle.png"/>
          {/* <img src="https://img.icons8.com/pastel-glyph/64/000000/warning-triangle.png" alt='logo'/> */}
        </a>
      </div>
      <div class="hidden md:block">
        <nav aria-label="Site Nav">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a
                class="text-white transition hover:text-violet-700"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                class="text-white transition hover:text-violet-700"
                href="/"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                class="text-white transition hover:text-violet-700"
                href="/"
              >
                Series
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
