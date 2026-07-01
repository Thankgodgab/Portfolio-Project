/* eslint-disable no-unused-vars */
import CtaBtn from '../organisms/CtaBtn'
import SpanText from '../organisms/SpanText'
import SubTitle from '../organisms/SubTitle'
import heroImage from '../../assets/hero-img.png'
import { GoPlus } from 'react-icons/go'
import * as motion from "motion/react-client"
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-y-[40px] px-2.5 md:px-[50px]">
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            className="p-2.5 w-full md:w-2/4 flex flex-col gap-[40px] group">
                <div className="group w-full flex flex-col gap-4 items-center justify-start">
                    <SubTitle text="Hello, I am" />
                    <div className="w-full mb-2.5 h-[120px] lg:h-[200px]">
                        <h1 className="text-white font-semibold text-[30px] lg:text-[38px] xl:text-[54px] leading-[1.2em]">
                            <SpanText text="Gabriel Thankgod" />
                            <br />
                            <TypeAnimation
                                sequence={[
                                    'Software Developer',
                                    1000,
                                    'AI Automation Expert',
                                    1000,
                                    'Digital Solutions Professional',
                                    1000
                                ]}
                                wrapper="span"
                                speed={200}
                                style={{ display: 'inline-block', color: 'inherit' }}
                                repeat={Infinity}
                            />
                        </h1>
                    </div>
                    <div className="w-full text-white">
                        <p className="text-[16px] font-normal leading-[22px]">
                            I design and build high-performance websites, intelligent mobile applications, and AI-powered systems that help businesses across Nigeria and Africa operate smarter, grow faster, and stand out in a crowded digital landscape.
                        </p>
                    </div>
                </div>
                <div className="w-full flex gap-4 items-center justify-start">
                    <CtaBtn text="Work With Me" />
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            className="pl-4 pr-2.5 relative flex flex-col w-full md:w-2/4 h-full items-center justify-center">
                <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-[500px] mx-auto">
                    <img src={heroImage} className="w-full h-auto object-contain" alt="Profile picture" />
                </div>
                <div className="p-3 md:p-4 rounded-2xl bg-white flex gap-3 items-start justify-center text-primary absolute right-0 top-[40%] overflow-hidden group hover:bg-none transition-colors duration-500">
                    <span className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-r from-accent-secondary to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-1"></span>
                    <span className='text-[25px] md:text-[40px] font-bold relative z-1'>4+</span>
                    <span className='font-semibold text-[14px] md:text-[18px] relative z-1'>Years <br />Experience </span>
                </div>
                <div className="p-3 md:p-4 rounded-2xl bg-white flex flex-col gap-[4px] md:gap-3 items-start justify-center text-primary absolute left-0 top-[75%] overflow-hidden group hover:bg-none transition-colors duration-500">
                    <span className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-r from-accent-secondary to-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></span>
                    <span className='text-[16px] md:text-[22px] font-bold relative z-1'>Happy Clients</span>
                    <div className='relative z-1 flex w-full items-center justify-start'>
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        <div className="ml[-20px] w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        <div className="m[-20px] w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        <div className="ml[-20px] w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" className='w-full h-full object-cover' alt="Customer" />
                        </div>
                        {/* <div className="ml-[-15px] w-[40px] h-[40px] rounded-full overflow-hidden bg-gradient-to-r from-accent-secondary to-accent text-primary flex items-center justify-center">
                           <GoPlus size={30} />
                        </div> */}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero