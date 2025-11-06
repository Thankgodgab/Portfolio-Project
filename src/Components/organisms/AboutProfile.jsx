import profileImage from "../../assets/about-us-img.png"


function AboutProfile() {
    return (
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <div className="w-full h-full">
                <img src={profileImage} alt="" />
            </div>
        </div>
    )
}

export default AboutProfile