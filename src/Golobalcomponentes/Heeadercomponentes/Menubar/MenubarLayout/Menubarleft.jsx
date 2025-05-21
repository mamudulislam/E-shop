import React from 'react'
import Allctagorimenu from '../Allcatagories/Allctagorimenu'
import Productsmenu from '../Productsmenu/Productsmenu'
import { Link } from 'react-router-dom'

const Menubarleft = () => {
    return (
        <>
            <div className='flex items-center gap-x-5'>
                <Allctagorimenu />
                <Productsmenu />
                <Link>Blog</Link>
                <Link>Contact</Link>
            </div >
        </>
    )
}

export default Menubarleft