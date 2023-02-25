import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <main className='w-[95%] sm:w-[100%] mx-auto sm:mx-auto h-fill my-12 sm:mt-32' id='#services'>
      <section className='w-[100%] sm:w-[88%] mx-auto sm:flex sm:flex-row sm:justify-center'>
        <div className='w-full sm:w-[50%] sm:justify-center sm:mx-auto flex flex-col'>
          <div className='w-full sm:w-fill sm:mx-auto sm:flex '>
            <h1 className='text-4xl text-left sm:text-5xl sm:w-[75%] sm:text-left'>Providing impactful services</h1>
          </div>
          <div className='w-full my-4 sm:my-12 sm:w-[75%]'>
            <p className='w-full text-left'>
            We enjoy the stature of being the first-ever tech-powered Workforce as a Solution platform that helps hire, manage talent as well as offer relevant gigs.
            </p>
          </div>
          <div className='w-full text-left mb-4 sm:w-[80%]'>
            <button className='sm:w-[32%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>view services</button>
          </div>
        </div>
        <div className='w-[100%] sm:w-[60%]  sm:relative sm:-right-[10%]'>
          <img className='rounded sm:w-[100%] ' src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-6 sm:mt-32 '>
        <div className='w-full sm:mb-12 sm:text-4xl'>
          <h1 className='text-4xl'>Our Services</h1>
        </div>
        <div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center'>
            <div className='w-full text-left sm:w-[100%]'>
              <h3 className='text-2xl sm:text-3xl'>Temporary staffing</h3>
            </div>
            <div className='w-full mt-2 sm:w-[70%] sm:mt-8'>
              <p className='text-left sm:w-full'>
              provides dependable temporary staffing solutions that allow you to increase your staff strength without taking on full-time personnel, support overburdened employees at important moments, and keep projects going.
              </p>
            </div>
            <div className='w-[100%] text-left mt-4 sm:mt-20'>
              <Link to="/services/tempStaff" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'><button className='sm:w-[25%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>Know more</button></Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[60%] sm:relative sm:right-[-10%]'>
            <img className='rounded sm:w-[100%] ' src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80" alt="" />
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 sm:mt-24  '>
        
        <div className='w-full sm:flex sm:flex-row-reverse sm:justify-center sm:w-[90%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[45%] sm:flex-col sm:flex sm:justify-center'>
            <div className='w-full text-left'>
              <h3 className='text-2xl sm:text-3xl sm:text-right'>Permanent staffing</h3>
            </div>
            <div className='w-full mt-2'>
              <p className='text-left sm:text-right'>
                Permanent staff onboarding and integration into a single company is a vital commitment. These commitments are made to trusted and qualified individuals thanks to our permanent employment solutions. Our professional specialists simply assist you in identifying and placing the perfect personnel. We leverage our years of experience to give you just the most carefully screened and qualified individuals for every area and sector.
              </p>
            </div>
            <div className='w-full text-left mt-4 sm:text-right '>
              <Link to="/services/permStaffing" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'><button className='sm:w-[25%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>Know more</button></Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[55%] sm:relative sm:left-[-10%]'>
            <img className='rounded sm:w-full' src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" />
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 sm:mt-24'>
        
        <div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
            <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center'>
              <div className='w-full text-left sm:w-[100%]'>
                <h3 className='text-2xl sm:text-3xl'>NEEM and NAPS</h3>
              </div>
              <div className='w-full mt-2 sm:w-[70%] sm:mt-8'>
                <p className='text-left sm:w-full'>
                  NEEM (The objective here is to develop “trainees” into a competent workforce, who could take the country ahead in the industrial world. World popular concept of “On-The-Job Training” is the basis of this program, targeting enhancement of employability among individuals who are pursuing graduation or have discontinued or completed a diploma or graduation in any technical or non-technical field.)
                </p>
              </div>
              <div className='w-full text-left mt-4 sm:mt-20'>
                <Link to="/services/neemNaps" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'><button className='sm:w-[25%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>Know more</button></Link>
              </div>
            </div>
            <div className='mt-4 sm:w-[60%] sm:relative sm:right-[-10%]'>
              <img className='rounded sm:w-[100%] ' src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>
          </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 sm:mt-24'>
        
      <div className='w-full sm:flex sm:flex-row-reverse sm:justify-center sm:w-[90%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[45%] sm:flex-col sm:flex sm:justify-center'>
            <div className='w-full text-left'>
              <h3 className='text-2xl sm:text-3xl sm:text-right'>3PL Warehousing</h3>
            </div>
            <div className='w-full mt-2'>
              <p className='text-left sm:text-right'>
                 We will pick, pack, and ship all of your items. Our 3PL services will connect your goods from your factories to your customers.
              </p>
            </div>
            <div className='w-full text-left mt-4 sm:text-right '>
              <Link to="/services/warehousing" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'><button className='sm:w-[25%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>Know more</button></Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[55%] sm:relative sm:left-[-10%]'>
            <img className='rounded sm:w-full' src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" />
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 mb-8  sm:mt-24'>
        
      <div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
            <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center'>
              <div className='w-full text-left sm:w-[100%]'>
                <h3 className='text-2xl sm:text-3xl'>Workforce Management (GIG)</h3>
              </div>
              <div className='w-full mt-2 sm:w-[70%] sm:mt-8'>
                <p className='text-left sm:w-full'>
                Project management involves managing and supervising the transfer of goods from manufacturing to retail to customers or business partners. Meraqui meticulously satisfies client requirements, schedules and manages a company's or organization's supply chain management.
                </p>
              </div>
              <div className='w-full text-left mt-4 sm:mt-20'>
                <Link to="/services/workforce" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'><button className='sm:w-[25%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>Know more</button></Link>
              </div>
            </div>
            <div className='mt-4 sm:w-[60%] sm:relative sm:right-[-10%]'>
              <img className='rounded sm:w-[100%] ' src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>
          </div>
      </section>
      
        <section className='sm:flex sm:flex-row sm:mt-12 sm:w-full'>
            <div className='sm:relative sm:left-[-18%] h-fill sm:w-[60%] sm:h-[65vh]'>
                <div  className='sm:relative sm:left-[20%] sm:h-[65vh] sm:w-[90%] bg-getInTouch h-[40vh] bg-center bg-cover w-[100%]'>
                    <div className='w-full sm:flex sm:flex-col sm:justify-center sm:h-[65vh] h-[40vh] bg-black bg-opacity-[0.6] sm:bg-opacity-[0.5] text-white'>
                        <div className='w-full sm:flex sm:justify-end sm:pr-24 py-4'>
                            <h2 className=' text-2xl sm:text-3xl sm:text-right sm:w-[85%]'>Get in touch with us. Let's <br /> talk!</h2>
                        </div>
                        <div className='w-full  sm:flex sm:justify-end sm:pr-24 py-4'>
                            <p className='w-[95%] text-[0.9rem] text-left ml-2  sm:text-left sm:w-[50%] sm:leading-[1.8]'>
                                We align our understanding according to your business needs and proactively initiate the HR processes to suit your requirements leveraging the power of Artificial Intelligence. We have a robust pan India presence in over 22 states, 55 cities, and are aiming to grow significantly in the times to come.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' my-8 w-full sm:w-[35%]'>
                <div className='w-full sm:w-[75%] flex justify-center '>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-bold h-[5vh] border-[1px] border-black' type="text" placeholder='Name' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-bold h-[5vh] border-[1px] border-black' type="text" placeholder='Designation' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-bold h-[5vh] border-[1px] border-black' type="text" placeholder='Organization' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-bold h-[5vh] border-[1px] border-black' type="email" placeholder='Official Email Id' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4  sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-bold h-[5vh] border-[1px] border-black' type="number" placeholder='Contact no.' name="" id="" />
                </div>
                <div className='w-full flex justify-center mt-4 sm:w-[75%]'>
                    <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-bold h-[5vh] border-[1px] border-black' type="text" placeholder='Enquiry type' name="" id="" />
                </div>
                <div className='w-[93%] mt-4 flex justify-end sm:justify-start'>
                    <button className='w-[40%] h-[5vh] bg-cyan-200 font-sans rounded' type='submit' >Submit</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Services