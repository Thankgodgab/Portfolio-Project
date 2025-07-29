import React from 'react'
import { IoDiamondOutline } from 'react-icons/io5'

function ServiceCardContent() {
  return (
    <div className="w-fit flex flex-col justify-between items-center">
        <div className="w-full flex items-center justify-between">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-accent group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-accent-secondary transition-all duration-300 ">
                <IoDiamondOutline size={24} />
            </div>
        </div>
    </div>
)
}

export default ServiceCardContent