import React from 'react'
import { BsArrowDown } from "react-icons/bs";
import { Button } from '../form/form';
const Card = ({ imgurl, title, content }) => {
    return (
        <div className="card__container w-[40rem] cursor-pointer font-montserrat">
            <article className="card__article" >
                <div className="w-[350px] h-[16rem] relative">
                    <img src={imgurl} alt="image" className="card__img w-full h-full" />
                    <div className='w-full bg-black/30 absolute top-[0%] left-0 rounded-3xl p-4 h-[100%]  card-ovrlay '>
                        <h2 className='text-center text-xl text-white'>{title}</h2>
                        <p className='text-center text-md  text-white/90' >{content}</p>
                        <div className=' text-white/90 flex justify-center '>
                            <button className='flex border p-2 m-2' >
                                Hover Me
                                <BsArrowDown size={'25px'} className='-rotate-90 m-auto' />
                            </button>
                        </div>

                    </div>
                </div>


                <div className="card__data absolute text-center">
                    <h2 className="card__description my-2 font-montserrat text-xl">{title}</h2>
                    {/* <h2 className="card__title">{content} {content}</h2> */}
                    <Button classname={'w-[10rem] shadow-lg bg-blue-400 border text-white hover:bg-blue-500 '}>
                        Book Now
                     <BsArrowDown className={`cursor-pointer duration-200 -rotate-90 inline-block`} />
                    </Button>
                </div>

            </article>


        </div>
    )
}

export default Card



