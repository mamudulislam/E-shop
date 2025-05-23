import React from 'react'
import Container from '../../../../Golobalcomponentes/Container'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import Productimg from '../../../../assets/Productimg/Productimg.webp'
import { Featureddata } from './Featureddata';
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
                    <div className='grid grid-cols-5 gap-x-5 '>{
                        Featureddata?.map((product) => (
                            <ProductCard key={product.id}
                                image={product?.imges}
                                pCatagori={product?.pCatagori}
                                pName={product?.pName}
                                rate={product?.rate}
                                totalrating={product?.totalrating}
                                price={product?.price}
                                pdiscout={product?.discout}
                            />
                        ))
                    }</div>

                </div>
            </Container >
        </>
    )
}

export default FeaturedProducts