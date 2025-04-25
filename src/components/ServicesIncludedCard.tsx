import React from 'react'
import BlueCheckMarkSvg from '@/assets/Svgs/blueCheckmark.svg'

type ServicesIncludedCardProps = {
    items: string[],
    svgIcon: string
}

const ServicesIncludedCard: React.FC<ServicesIncludedCardProps> = ({ items, svgIcon }) => {
    return (
        <div className='p-4 rounded-lg bg-[#FAFAFA]'>
            <div className="flex items-center space-x-3 mb-6">
                <div className='border w-[50px] bg-white h-[50px] p-2 border-gray-300 flex items-center justify-center rounded-lg'>
                    <img src={svgIcon} alt="" className="h-[30px]" />
                </div>
                <h3 className="text-[20px] font-[500] text-gray-900">What's Included</h3>
            </div>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                        <img src={BlueCheckMarkSvg} alt="" className="h-[20px]" />
                        <span className="text-gray-600">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesIncludedCard
