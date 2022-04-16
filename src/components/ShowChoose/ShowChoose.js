import React from 'react';
import adult from '../../images/adult-blur-blurred-background-687824.png'
import fast from '../../images/icons/Group 204.png'
import alarm from '../../images/icons/Group 1133.png'
import car from '../../images/icons/Group 245.png'
import chef from '../../images/chef-cook-food-33614.png'
import running from '../../images/architecture-building-city-2047397.png'
import { BsArrowRightCircleFill } from 'react-icons/bs'
const ShowChoose = () => {
    return (
        <div className='container mx-auto mt-32'>
            <div>
                <h2 className='text-2xl'>Why you choose us</h2>
                <p className='w-2/5 mt-4'>Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at.Boy prosperous increasing surrounded.</p>
            </div>
            <div className='mt-24 grid grid-cols-3 gap-4'>
                <div>
                    <div className=''>
                        <img src={adult} alt="" />
                        <div className='flex items-start justify-start gap-4'>
                            <div className='mt-4'>
                                <img width={120} src={fast} alt="" />
                            </div>
                            <div className='mt-4'>
                                <h2 className='text-xl'>Fast delivery</h2>
                                <p className='my-3'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                                <div className='flex items-center gap-2 text-lg'>
                                    <h4 className='text-blue-500'>See more</h4>
                                    <BsArrowRightCircleFill className='text-green-500'></BsArrowRightCircleFill>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' '>
                        <img src={chef} alt="" />
                        <div className='flex items-start justify-start gap-4'>
                            <div className='mt-4'>
                                <img width={120} src={alarm} alt="" />
                            </div>
                            <div className='mt-4'>
                                <h2 className='text-xl'>A Good auto Responder</h2>
                                <p className='my-3'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                                <div className='flex items-center gap-2 text-lg'>
                                    <h4 className='text-blue-500'>See more</h4>
                                    <BsArrowRightCircleFill className='text-green-500'></BsArrowRightCircleFill>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <img src={running} alt="" />
                        <div className='flex items-start justify-start gap-4'>
                            <div className='mt-4'>
                                <img width={120} src={car} alt="" />
                            </div>
                            <div className='mt-4'>
                                <h2 className='text-xl'>Home delivery</h2>
                                <p className='my-3'>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                                <div className='flex items-center gap-2 text-lg'>
                                    <h4 className='text-blue-500'>See more</h4>
                                    <BsArrowRightCircleFill className='text-green-500'></BsArrowRightCircleFill>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowChoose;