import React from 'react'
import GymManImage from "public/anastase-maragos-7kEpUPB8vNk-unsplash.jpg"
import Image from 'next/image'

const HeroPage = () => {
    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={GymManImage}
                    fill
                    alt='Gym man'
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className='flex items-center justify-center pt-64'>
                <h1 className="font-bold text-6xl text-white text-center px-4">Professional Gym Trainer</h1>
            </div>
        </div>
    )
}

export default HeroPage
