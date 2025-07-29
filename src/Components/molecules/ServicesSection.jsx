import CtaBtn from "../organisms/CtaBtn"
import SpanText from "../organisms/SpanText"
import SubTitle from "../organisms/SubTitle"
import CardCarousel from "./CardCarousel"

function ServicesSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2.5 py-[100px]">
        <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
                <SubTitle text="My Specialization" />
                <h2 className="text-[42px] text-white leading-[1.2em] font-semibold">
                  Innovative best design and 
                  <SpanText text=" development services" />
                </h2>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <p className="text-[18px] font-normal text-white leading-[24px]">
                As a skilled Product Designer, I offer a range of services tailored to help you create exceptional digital products and experiences.
              </p>
              <button className="w-fit">
                <CtaBtn text="View All Services" />
              </button>
            </div>
        </div>
        <div className="w-full">
          <CardCarousel />
        </div>
    </div>
  )
}

export default ServicesSection