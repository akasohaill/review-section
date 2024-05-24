'use client'
import React from 'react'
import Star from './Star'
import Thumb from './Thumb'
import { X } from 'lucide-react'

const ReviewSection = () => {
    return (
        <div className="border-2 bg-white border-black-500 rounded-3xl md:mx-auto mx-3 my-10 max-w-md">
            <div className='m-2 cursor-pointer'>
                <X/>
            </div>
            <div className='flex  items-center flex-col md:mx-auto mx-2 my-5 gap-8'>
                <h1 className='md:text-4xl text-2xl font-bold'>Leave a review</h1>
                <div>
                    <div>
                        <h1 className='md:text-2xl text-xl font-medium'>Safety</h1>
                        <Star/>
                    </div>
                    <div className='my-3  rounded-lg max-w-2xl'>
                        <h1 className=' md:text-2xl text-xl font-medium'>Communication</h1>
                        <Star/>
                    </div>
                    <div className='my-3  rounded-lg max-w-2xl'>
                        <h1 className='md:text-2xl  text-xl font-medium'>Would you recommend Trausti?</h1>
                        <Thumb/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewSection
