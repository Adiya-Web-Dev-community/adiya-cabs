import React, { useRef } from 'react'
import merBizImg from '../assets/Meru-biz.jpg'
import svgUpgrade from '../assets/upgrade-svgrepo-com.svg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { merBizWhy, meruBizAdvantages, meruBizVersus, meruComprehensiveBusiness } from '../configs/meruBiz';
import { LiaArrowRightSolid, LiaArrowCircleRightSolid, LiaArrowAltCircleLeftSolid } from 'react-icons/lia'

const MeruBizz = () => {

  const navigationLeft = useRef(null)
  const navigationRight = useRef(null)



  return (



    <main

    >
      <section style={{ backgroundImage: `url(${ merBizImg })`, }} className='bg-cover '>
        <div className='min-h-auto w-fu bg-black/10 sm:p-4 lg:flex  min-h-[fit-content]	sm:h-[100vh] bg-cover mb-12'>
        {/* <div className='lg:w-3/4 xl:w-2/5  flex  justify-center flex-col items-center pt-12 ' >
          <img src={svgUpgrade} alt="" className='h-40' />
        </div> */}
        <div className=' flex flex-col justify-center items-center  w-full '>
            <h2 className='text-white/75 text-5xl  lg:text-6xl	 text-center mb-3'>
              Upgrade your business transportation.
            </h2>
            <p className='flex my-2 text-white  text-4xl lg:text-start w-3/5 mb-3 ' >Guaranteed journeys | Unlock savings of up to 57% | Connecting 7000+ destinations across 100+ cities</p>

          <div className='w-full h-16 mb-3'>
            <button className='bg-white mt-4  m-auto w-32 p-2 text-lg rounded md:mx-auto block mb-5 relative  transition ease-in duration-300   hover:bottom-[-0.2rem]'>
              Get Started
            </button>
          </div>
        </div>
        </div>
      </section>

      <section className='mb-12'>
        <div>
          <h2  className='text-gray-700 text-3xl lg:text-4xl text-center '>The <span className='text-red-500'>MeruBiz</span>  advantages</h2>
        </div>
        <div className=' flex justify-center'>
          <div className='w-4/5 bg-white rounded  p-3 '>
            <div className='grid lg:grid-cols-3 gap-2 sm:grid-cols-2'>
              {
                meruBizAdvantages.map((el, i) => {
                  return <div key={i} className=' border rounded mb-5 p-3 flex shadow-md   transition ease-in duration-300   items-center  hover:shadow-xl'
                  >
                    <div className='h-16 w-16 mr-2'>
                           <img src={el.icon} className='h-16 w-16 object-cover'/>
                    </div>
                    <h2 className='text-xl text-center text-gray-700'>{el.title}</h2>
                  </div>
                })
              } ...
            </div>
          </div>
        </div>
      </section>

      <section className=' bg-gray-100 p-4'>
        <div className='w-full sm:w-4/5 mx-auto'>
          <h2  className='text-gray-700 text-3xl lg:text-4xl text-center '>
            Our Comprehensive
            <span className='text-red-500'> Business</span> Travel
            Solutions
            and
            <span className='text-red-500'> Services</span>
          </h2>
          <p className='flex my-2   text-xl lg:text-start '>Access top-tier solutions designed to streamline the transportation requirements of your esteemed guests and workforce</p>
        </div>

        <div className=' flex justify-center mt-4 '>
          <div className='w-full sm:w-3/4  '>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              spaceBetween={20}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className='pl-4'
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

            >
              {
                meruComprehensiveBusiness.map((el, i) => {
                  return <SwiperSlide key={i} >
                    <div className='bg-white grid grid-cols-[1fr_12rem] p-4'>
                      <div className='  '>
                        <h2 className='text-gray-700 text-lg text-center	w-full lg:text-2xl	 lg:text-start  mb-3'>{el.title}</h2>
                        <p className=' text-center lg:text-start text-md lg:text-md'>
                          {el.description}
                        </p>
                      </div>
                      <div style={{ backgroundImage: `url(${ el.imagePath })`, }} className=' xl:w-40 xl:h-40 rounded sm:w-100  ml-3 sm:h-40 h-40 bg-cover   ' ></div>
                    </div>

                  </SwiperSlide>
                })
              }         
            </Swiper>
          </div>
        </div>
      </section>

      <section className='mb-12  bg-gray-100 pt-12' >

        <div className='sm:w-3/5 mx-auto   '>
          <h2  className='text-gray-700 text-3xl lg:text-4xl text-center '>
            What makes <span className='text-red-500'> MeruBiz?</span>
            the preferred choice
          </h2>
          <p className='flex my-2   text-xl lg:text-start ' >Keep your employees, admin team and stakeholders happy with MeruBiz.</p>
        </div>

        <div className=' flex justify-center mt-4 '>
          <div className='w-4/5  rounded   '>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={'auto'}
              pagination={{ clickable: true }}
              spaceBetween={3}
              onSwiper={(swiper) => console.log(swiper)}
      
              loop={true}
              centeredSlides={true}
              navigation={{
                prevEl: navigationLeft.current,
                nextEl: navigationRight.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationLeft.current;
                swiper.params.navigation.nextEl = navigationRight.current;
              }}
              
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
                           }}
            >
              {
                merBizWhy.map((el, i) => {
                  return <SwiperSlide key={i} className='h-full' >
                    <div className=' flex flex-col bg-white items-center m-0  min-h-[20rem] pb-8 mt-3 mb-7 delay-700	 cursor-pointer  border    rounded-md  p-2 relative '>
                        <div className='flex  w-full h-16 mb-4'>
                           <img src={el.pngIcon} className='h-16 w-16 object-cover'/>
                           <h2 className='text-gray-700	 text-xl	w-full mb-2 ml-4 text-center'>{el.title}</h2>
                        </div>
                      <ul className='text-md  w-full '>
                        {el.description.map((el2, i) =>
                            <li className='text-black-700 border p-2 my-1  hover:bg-blue-50  
                                            transition ease-in duration-300 
                            ' >{el2}</li>
                        )}
                      </ul>
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>

            <div className="flex items-center justify-center xl:justify-center  space-x-5">
              <div
                ref={navigationLeft}
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
              >
                <LiaArrowAltCircleLeftSolid className="text-3xl text-red-500" />
              </div>
              <div
                className="rounded-full group bg-white hover:bg-slate-100 duration-200 cursor-pointer p-5"
                ref={navigationRight}
              >
                <LiaArrowCircleRightSolid className="text-3xl text-red-500 " />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >


        <div className='sm:w-4/5 mx-auto  px-3 sm:p-0 overflow-x-scroll  '>
          <h2 className='text-gray-700	 text-4xl	 text-center mb-5 '>
            <span className='text-red-500'> MeruBiz </span>versus
            <span className='text-red-500'> alternative </span>options. 
          </h2>
          <p className='flex my-2   text-lg lg:text-start '   >Derived from market research and a sample analysis.</p>
           
          <table className='p-0 m-0 w-full my-4'>
        

            <thead className=' text-sm md:text-md lg:text-lg text-white' >
              <th className='font-normal bg-gray-500 p-2' >Evaluating services and their differences
              </th>
              <th className='font-normal p-2 bg-gray-500 '>MeruBizz.</th>
              <th className='font-normal p-2 bg-gray-500 '>App-driven operators..</th>
              <th className='font-normal p-2 bg-gray-500 '>Conventional operators.</th>
            </thead>
            <tbody  >
              {meruBizVersus.map((el) => {
                return <tr className='text-md   text-center  border-t-4 border-b-4 rounded shadow-md'>
                  <td className='  p-2'>{el.name}</td>
                  <td className='  p-2'>{el.meruBuz}</td>
                  <td className='  p-2'>{el.appBased}</td>
                  <td className='  p-2'>{el.appBased}</td>
                </tr>
              })}
            </tbody>
          </table> 
        </div>

      </section>
    </main>


  )
}



export default MeruBizz
