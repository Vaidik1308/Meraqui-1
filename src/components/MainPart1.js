import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube'







const MainPart1 = () => {
    const slides1 = [
        {
            url:require('../image/whyChooseUs/Logistics.jpg'),
            header:" 1000 workers required for your new plant? 1",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"Requirements Received"
        },
        {
            url:require('../image/whyChooseUs/NanoInvestments.jpg'),
            header:" 500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
            sub_header:"	Automation RE to Nodes"
        },
        {
            url:require('../image/whyChooseUs/NanoInvestments2.jpg'),
            header:" 30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
            sub_header:"	Line up on WMP "
        },
        {
            url:require('../image/whyChooseUs/Salary.jpg'),
            header:" National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
            sub_header:"	M Engine run for shortlisting "
        },
        {
            url:require('../image/whyChooseUs/Jobtraining.webp'),
            header:" 1000 workers required for your new plant? 5",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"	e-Handholding"
        },
        {
            url:require('../image/whyChooseUs/Unique.webp'),
            header:" 1000 workers required for your new plant? 6",
            body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header:"  Logistics at destination "
        },
    ]
    const slides2 = [
        {
            url:require('../image/whyChooseUs/Logistics.jpg'),
            header:" 500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:"500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 500 Sales rep on our platform in 4 hours?",
            body:"Cutting edge technology | end-to-end Hire & Manage Tech Platform",
        },
    ]
    const slides3 = [
        {
            url:require('../image/whyChooseUs/Logistics.jpg'),
            header:" 30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" 30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:"30M+ Happy Man Hours managed till date",
            body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
        },
    ]
    const slides4 = [
        {
            url:require('../image/whyChooseUs/Logistics.jpg'),
            header:"National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:"National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
        },
        {
            url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            header:" National player | Local flair",
            body:"With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs ",
        },
    ]
    
  return (
    <main className='flex flex-col w-full mx-2 font-bold sm:w-[85%] sm:mx-auto'>
         <section className='w-full mt-4 font-thin'>
            <h3 className='text-[1.5rem] sm:text-5xl sm:py-14'>Why choose Meraqui?</h3>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                        {slides1[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                        {slides1[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[0].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[1].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[2].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[3].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[4].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides1[5].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                        {slides2[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                        {slides2[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[0].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[1].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[2].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[3].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[4].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides2[5].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                        {slides3[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                        {slides3[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[0].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[1].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[2].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[3].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[4].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides3[5].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
        <section className='flex flex-row w-[95%] mx-auto  '>
            <div className=' w-[100%] flex flex-col justify-center'>
                <div className='flex w-[100%]'>
                    <p className='w-[100%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                        {slides4[0].header}
                    </p>
                </div>
                <div className='w-full mt-4 sm:mt-8'>
                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                        {slides4[0].body}
                    </p>
                </div>
            </div>
            <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[0].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[0].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[1].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[1].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[2].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[2].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[3].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[3].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[4].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[4].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                    <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <div className='w-[100%] sm:w-[95%] '>
                            <img src={slides4[5].url} alt="photo1" className='mt-2  w-[100%] flex  h-[20vh] sm:h-[65vh] sm:w-[90%] mr-2 opacity-[0.7] rounded'/>
                            <p className='relative top-[-15%] text-black left-[-15%] sm:top-[-10%] sm:left-[-30%] sm:font-bold z-[99] sm:text-3xl'>{slides1[5].sub_header}</p>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
        
            
            
            
        
        {/* <Swiper
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides2[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[40%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides2[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides2[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides2[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides2[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides2[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            
        </Swiper>
        <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides3[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides3[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides3[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[40%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides3[1].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides3[1].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides3[1].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides3[2].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides3[2].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides3[2].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides3[3].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides3[3].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides3[3].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides3[4].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides3[4].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides3[4].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides3[5].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides3[5].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides3[5].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            
        </Swiper>
        <Swiper 
        className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
        // install Swiper modules
        modules={[Navigation, Autoplay,Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true,hide:false }}
        scrollbar={{ draggable: true ,hide:false}}
        loop={true}
        autoplay
        
      >
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides4[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides4[0].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides4[0].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[40%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides4[1].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides4[1].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides4[1].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides4[2].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides4[2].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides4[2].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides4[3].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides4[3].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides4[3].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides4[4].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides4[4].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides4[4].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            <SwiperSlide className='flex flex-row w-[95%] mx-auto  mt-4'>
                        <section className='flex flex-row w-[95%] mx-auto  mt-4'>
                            <div className=' w-[60%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[95%] sm:w-[65%] text-left font-thin sm:text-4xl '>
                                        {slides4[5].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[85%] text-left sm:text-2xl  sm:font-normal text-[0.6rem]'>
                                        {slides4[5].body}
                                    </p>
                                </div>
                            </div>
                            <img src={slides4[5].url} alt="photo" className=' w-[35%] flex  h-[20vh] sm:h-[65vh] sm:w-[30%] mr-2 rounded'/>
                    </section>
            </SwiperSlide>
            
        </Swiper> */}
       
        
    </main>
  )
}

export default MainPart1