import React from 'react'

const PermStaffing = () => {
  return (
    <main className='sm:w-[100%] sm:mx-auto'>
    <section className='sm:mt-32 sm:flex sm:w-[90%] sm:mx-auto'>
      
          <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
                <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>
                    <h1 className='text-4xl text-left sm:text-5xl w-[75%] sm:w-[35%] sm:leading-[1.4] sm:mb-8'>
                    Permanent Staffing
                    </h1>
                    <p className='text-left sm:w-[98%] mt-4 sm:mt-0'>
                        provides dependable temporary staffing solutions that allow you to increase your staff strength without taking on full-time personnel, support overburdened employees at important moments, and keep projects going.
                    </p>
                </div>
          </div>
          <div className='sm:relative sm:right-[-15%] sm:w-[90%]'>
              <img className='w-[100%] h-auto' src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
          </div>
        
    </section>
    <section className='w-full my-12 sm:mt-20'>
    <div className='w-full mb-4 sm:mb-16'>
      <h2 className='text-3xl sm:text-4xl'>About service</h2>
    </div>
  
    <div style={{backgroundImage:"url(https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)"}} className='bg-cover bg-center w-full sm:h-[55vh]'>
      <div className='  flex flex-col w-full bg-black bg-opacity-[0.7] text-white sm:h-[55vh] sm:justify-center'>
        <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
          <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 '>
          Our Philosophy
          </h3>
        </div>
        <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
          <p className='text-left sm:w-[85%]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

          </p>
        </div>
      </div>
    </div>
  </section>
  </main>
  )
}

export default PermStaffing