import React from 'react'

interface TechnologyCardProps {
  image: string;
}

const TechnologyCard = ({image}: TechnologyCardProps) => {
  return (
    <div className='p-4 border border-[#BABABA] rounded-[24px] m-3 w-[80px] h-[80px]'>
      <img src={image} alt="Technology logo" className='h-[50px]' />
    </div>
  )
}

export default TechnologyCard