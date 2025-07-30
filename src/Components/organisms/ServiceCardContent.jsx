import { IoIosArrowRoundForward } from 'react-icons/io'

function ServiceCardContent({ icon, title }) {
    return (
        <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full flex items-center justify-between">
                <div className="transition-all duration-300 ">
                    {icon}
                </div>
                <div className="w-[50px] h-[50px] bg-gradient-to-r from-accent-secondary to-accent rounded-full flex items-center justify-center">
                    <IoIosArrowRoundForward size={40} className='text-primary rotate-[-45deg] group-hover:rotate-0 transition-all duration-300' />
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <h2 className="text-[24px] text-white font-semibold">{title}</h2>
            </div>
        </div>
    )
}

export default ServiceCardContent