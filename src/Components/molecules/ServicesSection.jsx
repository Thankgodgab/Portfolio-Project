import CtaBtn from "../organisms/CtaBtn"
import SpanText from "../organisms/SpanText"
import SubTitle from "../organisms/SubTitle"
import CardCarousel from "./CardCarousel"
import { siteContent } from "../../constant/websiteContent"

// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"

function ServicesSection() {
  const { services } = siteContent;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2.5 md:px-[50px] py-[100px]">
        <div className="w-full flex flex-col md:flex-row gap-2">
            <motion.div 
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col gap-4">
                <SubTitle 
                text="What I Do" 
                title={services.title}
                titleSpan={services.titleSpan}
                />
                
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col gap-4">
              <p className="text-[18px] font-normal text-white leading-[24px]">
                {services.description}
              </p>
              <button className="w-fit">
                <CtaBtn text={services.buttonText} />
              </button>
            </motion.div>
        </div>


        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, scale: { type: "spring", stiffness: 100 } }}
        viewport={{ once: true }}
        className="w-full pt-[50px]">
          <CardCarousel />
        </motion.div>

        
        <div className="py-[53px] w-fit mx-auto text-center text-white font-normal text-[18px] leading-[24px]">
          <p>
            {services.footerTextStart}
            <a href={services.footerLink} className="font-semibold">
              <SpanText text={services.footerTextSpan} />
            </a>
          </p>
        </div>
    </div>
  )
}

export default ServicesSection