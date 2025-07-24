import CtaBtn from '../organisms/CtaBtn'
import SpanText from '../organisms/SpanText'
import SubTitle from '../organisms/SubTitle'
import heroImage from '../../assets/hero-img.png'
import { GoPlus } from 'react-icons/go'
import * as motion from "motion/react-client"

function Hero() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-y-[40px] pb-[100px]">
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            className="p-2.5 w-full md:w-2/4 flex flex-col gap-[40px] group">
                <div className="group w-full flex flex-col gap-4 items-center justify-start">
                    <SubTitle text="Your Vision, My Design Expertise" />
                    <div className="w-full mb-2.5">
                        <h1 className="text-white font-semibold text-[38px] lg:text-[56px] xl:text-[72px] leading-[1.2em]">
                            <SpanText text="I'm Gabriel," />
                            <br />
                            Web Developer based in Nigeria
                        </h1>
                    </div>
                    <div className="w-full text-white">
                        <p className="text-[16px] font-normal leading-[22px]">
                            Hi, I’m Gabriel Thankgod, a passionate Web Developer and Real Estate Consultant based in the Nigeria. I specialize in crafting intuitive, user-centered designs that merge functionality with aesthetics, With a focus on creating seamless digital experiences.
                        </p>
                    </div>
                </div>
                <div className="w-full flex gap-4 items-center justify-start">
                    <CtaBtn text="Get Started" />
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}

            className="pl-4 pr-2.5 relative flex flex-col w-full md:w-2/4 h-full items-center justify-center">
                <div className="w-full h-full">
                    <img src={heroImage} alt="Profile picture" />
                </div>
                <div className="p-4 rounded-2xl bg-white flex gap-3 items-start justify-center text-primary absolute right-0 top-[200px] overflow-hidden group hover:bg-none transition-colors duration-500">
                    <span className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-r from-accent-secondary to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
                    <span className='text-[25px] md:text-[40px] font-bold relative z-10'>8+</span>
                    <span className='font-semibold text-[14px] md:text-[18px] relative z-10'>Years <br />Experience </span>
                </div>
                <div className="p-4 rounded-2xl bg-white flex flex-col gap-3 items-start justify-center text-primary absolute left-0 top-[200px] overflow-hidden group hover:bg-none transition-colors duration-500">
                    <span className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-r from-accent-secondary to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
                    <span className='text-[22px] font-bold relative z-10'>Real Customer</span>
                    <div className='relative z-10 flex w-full items-center justify-start'>
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        <div className="ml-[-30px] w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        <div className="ml-[-30px] w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        <div className="ml-[-30px] w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        <div className="ml-[-25px] w-[50px] h-[50px] rounded-full overflow-hidden bg-gradient-to-r from-accent-secondary to-accent text-primary flex items-center justify-center">
                           <GoPlus size={30} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero