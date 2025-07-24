
function CtaBtn({ text }) {
    return (
        <div className="py-[17px] px-[30px] text-[16px] text-primary font-semibold bg-gradient-to-r from-accent-secondary to-accent rounded-4xl hover:bg-gradient-to-r hover:from-accent hover:to-accent-secondary transition-colors duration-300 ease-in-out">
            {text}
        </div>
    )
}

export default CtaBtn