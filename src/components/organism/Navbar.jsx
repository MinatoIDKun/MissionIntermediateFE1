import React from 'react'
import LogoVideoBelajar from '../../assets/images/logo-videobelajar.svg'

function Navbar() {

    return (
    <>
    <nav className='border-b-1 border-other-border bg-other-primaryBackground z-1000 fixed w-full'>
        <div className='flex h-24 ml-20 p-4'>
            <img
                src={LogoVideoBelajar}
                alt='logo-videobelajar'
            />
        </div>
    </nav>
    </>
    )
}    

export default Navbar