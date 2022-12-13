function Header() {
  return (
    <header>
      <header>
        <nav className='relative bg-black'>
          <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6  md:space-x-10 lg:px-8'>
            <div className='flex justify-start lg:w-0 '>
              <a href='#'>
                <span className='sr-only'>Header</span>

                <h1 className='glitch font-bold italic text-xl text-white'>
                  <span aria-hidden='true'>*Tasksail</span>
                  *Tasksail
                  <span aria-hidden='true'>*Tasksail</span>
                </h1>
              </a>
            </div>

            <nav className=' space-x-10 flex'>
              <a
                href='#'
                className='text-xs glitch font-light text-white hover:text-stone-300'
              >
                About
              </a>
              <a
                href='#'
                className=' text-xs glitch font-light text-white hover:text-stone-300'
              >
                Blog
              </a>
              <a
                href='#'
                className='text-xs glitch font-light text-white hover:text-stone-300'
              >
                Pricing
              </a>
            </nav>
            <div className='items-center glitch italic justify-end md:flex  lg:w-0'>
              <a
                href='#'
                className=' inline-flex border-2 border-white items-center justify-center whitespace-nowrap rounded-md  bg-gradient-to-r  bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm'
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </header>
  )
}

export default Header
