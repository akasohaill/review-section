import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Star = () => {
  const [rating,setRating]=useState<number|null>(null)
  const [hover,setHover]=useState<number|null>(null)

  return (
    <div className='flex items-center flex-col'>
      <div className='flex items-center flex-row my-5 gap-4 cursor-pointer '>
        {
          ([...Array(5)]).map((item,index)=>{
            const currentRating=index+1;
            return (
              <label key={index}>
                <input className='hidden'
                type='radio'
                name='rating'
                value={currentRating}
                onClick={()=>setRating(currentRating)}
                />
                <FaStar
                size={50}
                color={currentRating <= (hover ??rating ??0)?"#ffc107":"#e4e5e9"}
                onMouseEnter={()=>setHover(currentRating)}
                onMouseLeave={()=>setHover(null)}
                onClick={()=>setRating(currentRating)}
                className='cursor-pointer'
                />
              </label>
            )
          })
        }
        
      </div>
      {/* <p className='text-base'>Your rating is {rating}</p> */}
    </div>
  )
}

export default Star

