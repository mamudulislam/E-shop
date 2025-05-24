import React, { useState } from 'react';
import Container from '../../../../Golobalcomponentes/Container';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CgArrowLongRight } from 'react-icons/cg';
import ProductCard from '../../../../Golobalcomponentes/ProductCard/ProductCard';
import { Featureddata } from '../FeaturedProducts/Featureddata';
import Allctagorimenu from '../../../../Golobalcomponentes/Heeadercomponentes/Menubar/Allcatagories/Allctagorimenu';
import { IoIosArrowDown } from 'react-icons/io';

const Newproductes = () => {
    const { t } = useTranslation();
    const [initialData, setInitialData] = useState(13);
    const loadData = () => {
        setInitialData((prev) => prev + 5);
    };

    return (
        <div>
            <Container>
                <div className='mt-[80px] mb-[80px]'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-Poppins text-[36px] font-semibold text-black01'>
                            {t("New Products")}
                        </h3>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <span className='font-Montserrat font-normal text-base'>
                                {t("Sort by")}
                            </span>
                            <div className='w-[150px]'>
                                <Allctagorimenu
                                    className="font-Montserrat font-bold text-base text-orange cursor-pointer w-full flex justify-between items-center"
                                    icons={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
                        {Featureddata?.slice(0, initialData)?.map((product) => (
                            <div key={product.id} className="px-2">
                                <ProductCard
                                    image={product?.imges}
                                    pCatagori={product?.pCatagori}
                                    pName={product?.pName}
                                    rate={product?.rate}
                                    totalrating={product?.totalrating}
                                    price={product?.price}
                                    pdiscout={product?.discout}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        onClick={loadData}
                        className="px-6 py-2 bg-orange text-white font-semibold rounded hover:bg-orange-dark transition"
                    >
                        {t("Load More")}
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default Newproductes;
