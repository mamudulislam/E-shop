import React from 'react'
import Container from '../../Container'
import logo from '../../../assets/Logo/logo.png'
import Searchwhiteauthandcrt from './Searchwhiteauthandcrt'
const Navbar = () => {
    return (
        <Container>
            <div className='grid grid-cols-2 justify-between items-center py-[22px]'>
                <div>
                    <img src={logo} alt="logo is loading now....." />
                </div>
                <div>
                    <Searchwhiteauthandcrt />
                </div>
            </div>
        </Container>
    )
}

export default Navbar