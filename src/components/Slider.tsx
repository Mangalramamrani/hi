import React from 'react'
import '../Styles/style.css'
import TechnologyCard from "@/components/TechnologyCard";
import TechnologyCardSvg1 from '@/assets/Svgs/TechnologyCardSvg1.svg'
import TechnologyCardSvg2 from '@/assets/Svgs/TechnologyCardSvg2.svg'
import TechnologyCardSvg3 from '@/assets/Svgs/TechnologyCardSvg3.svg'
import TechnologyCardSvg4 from '@/assets/Svgs/TechnologyCardSvg4.svg'
import TechnologyCardSvg5 from '@/assets/Svgs/TechnologyCardSvg5.svg'
import TechnologyCardSvg6 from '@/assets/Svgs/TechnologyCardSvg6.svg'
import TechnologyCardSvg7 from '@/assets/Svgs/TechnologyCardSvg7.svg'
import TechnologyCardSvg8 from '@/assets/Svgs/TechnologyCardSvg8.svg'
import TechnologyCardSvg9 from '@/assets/Svgs/TechnologyCardSvg9.svg'
import TechnologyCardSvg10 from '@/assets/Svgs/TechnologyCardSvg10.svg'
import TechnologyCardSvg11 from '@/assets/Svgs/TechnologyCardSvg11.svg'
import TechnologyCardSvg12 from '@/assets/Svgs/TechnologyCardSvg12.svg'
import TechnologyCardSvg13 from '@/assets/Svgs/TechnologyCardSvg13.svg'
import TechnologyCardSvg14 from '@/assets/Svgs/TechnologyCardSvg14.svg'
import TechnologyCardSvg15 from '@/assets/Svgs/TechnologyCardSvg15.svg'
import TechnologyCardSvg16 from '@/assets/Svgs/TechnologyCardSvg16.svg'

interface SliderProps {
  directionofscroll: string;
}

const Slider = ({ directionofscroll }: SliderProps) => {
    return (
        <section className="py-1 max-w-7xl mx-auto">
            <div className="overflow-hidden">
                <section className="py-1 max-w-7xl mx-auto">
                    <div className="logo-gradient-left" />
                    <div className={`logo-track flex ${directionofscroll} w-[500000px]`}>
                        <TechnologyCard image={TechnologyCardSvg1} />
                        <TechnologyCard image={TechnologyCardSvg2} />
                        <TechnologyCard image={TechnologyCardSvg3} />
                        <TechnologyCard image={TechnologyCardSvg4} />
                        <TechnologyCard image={TechnologyCardSvg5} />
                        <TechnologyCard image={TechnologyCardSvg6} />
                        <TechnologyCard image={TechnologyCardSvg7} />
                        <TechnologyCard image={TechnologyCardSvg8} />
                        <TechnologyCard image={TechnologyCardSvg9} />
                        <TechnologyCard image={TechnologyCardSvg10} />
                        <TechnologyCard image={TechnologyCardSvg11} />
                        <TechnologyCard image={TechnologyCardSvg12} />
                        <TechnologyCard image={TechnologyCardSvg13} />
                        <TechnologyCard image={TechnologyCardSvg14} />
                        <TechnologyCard image={TechnologyCardSvg15} />
                        <TechnologyCard image={TechnologyCardSvg16} />
                        <TechnologyCard image={TechnologyCardSvg1} />
                        <TechnologyCard image={TechnologyCardSvg2} />
                        <TechnologyCard image={TechnologyCardSvg3} />
                        <TechnologyCard image={TechnologyCardSvg4} />
                        <TechnologyCard image={TechnologyCardSvg5} />
                        <TechnologyCard image={TechnologyCardSvg6} />
                        <TechnologyCard image={TechnologyCardSvg7} />
                        <TechnologyCard image={TechnologyCardSvg8} />
                        <TechnologyCard image={TechnologyCardSvg9} />
                        <TechnologyCard image={TechnologyCardSvg10} />
                        <TechnologyCard image={TechnologyCardSvg11} />
                        <TechnologyCard image={TechnologyCardSvg12} />
                        <TechnologyCard image={TechnologyCardSvg13} />
                        <TechnologyCard image={TechnologyCardSvg14} />
                        <TechnologyCard image={TechnologyCardSvg15} />
                        <TechnologyCard image={TechnologyCardSvg16} />
                    </div>
                    <div className="logo-gradient-right" />
                </section>
            </div>
        </section>
    )
}

export default Slider