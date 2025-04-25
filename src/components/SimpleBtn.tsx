import React from 'react'
import { Link } from 'react-router-dom'

const SimpleBtn = (props: { value: string }) => {
  const { value } = props
  return (
    <div className="hidden md:flex">
      <Link
        to="/booking"
        className="border pl-[16px] text-black font-normal py-[8px] pr-[16px] rounded-full text-sm transition-colors flex items-center"
      >
        {value}
      </Link>
    </div>
  )
}

export default SimpleBtn