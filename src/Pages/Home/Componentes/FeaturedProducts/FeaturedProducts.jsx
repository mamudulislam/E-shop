import React from 'react'
import Container from '../../../../Golobalcomponentes/Container'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';

const FeaturedProducts = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container>
                <div className='mt-[80px]'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-Poppins text-[36px] font-semibold text-black01'>
                            {t("Featured Products")}
                        </h3>
                        <Link to="/Product" className='flex items-center gap-x-2 font-Montserrat font-bold text-base text-orange group'>
                            {t("View All")}{" "}
                            <span className='group-hover:translate-x-2 transition-transform duration-400'>  <CgArrowLongRight size={30} /></span>
                        </Link>
                    </div>
                </div>
            </Container >
        </>
    )
}

export default FeaturedProducts