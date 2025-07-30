function Card({ className, content }) {
  return (
    <div className={`${className} bg-white/5 backdrop-blur-md rounded-xl flex flex-col justify-between items-center p-6 group `}>
        {content}
    </div>
  )
}

export default Card