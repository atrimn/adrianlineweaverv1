function Hero() {
  return (
    <div className='relative bg-black pt-24'>
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-black' />
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative shadow-xl sm:overflow-hidden sm:rounded-2xl'>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
            <h1 className='text-center text-white glitch text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              <span
                aria-hidden='true'
                style={{ position: 'absolute', right: '0' }}
                className=' block text-white'
              >
                Creative Development
              </span>
              Creative Development
            </h1>
            <h1 className='text-center text-green-500 glitch text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              <span
                aria-hidden='true'
                style={{ position: 'absolute', right: '0' }}
                className=' block text-green-400'
              >
                Solutions
              </span>
              Solutions
            </h1>
            <p className='mx-auto mt-6 max-w-lg font-semibold text-center text-md text-white sm:max-w-3xl'>
              App Development can be a headache for small businesses. Tasksail
              sets out to elimate the complexity and make it easy for you to get
              your app up and running. Work with our team of experts to get the
              results you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
