import profileImage from "../../assets/about-us-img-1.jpeg"


function AboutProfile() {
    return (
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden">
                <img src={profileImage} alt="Profile picture of Gabriel Thankgod" />
            </div>
        </div>
    )
}

export default AboutProfile