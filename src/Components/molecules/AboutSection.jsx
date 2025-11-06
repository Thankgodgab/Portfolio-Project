import AboutContent from "../organisms/AboutContent"
import AboutProfile from "../organisms/AboutProfile"



function AboutSection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-2.5 md:px-[50px] py-[100px]">
        <div className="w-full flex items-center justify-center flex-col md:flex-row gap-10">
            
            {/* Profile Image */}
            <AboutProfile />

            {/* About Text */}
            <AboutContent />
        </div>
    </div>
  )
}

export default AboutSection