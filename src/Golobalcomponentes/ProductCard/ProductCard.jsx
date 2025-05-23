import React from 'react';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { getstar } from '../../Utils/genaretrating';
import { gotDiscounty } from '../../Utils/gotDiscounty';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaOpencart, FaRegHeart } from 'react-icons/fa';

const ProductCard = ({ image, pCatagori, pName, rate, totalrating, price, pdiscout }) => {
    return (
        <div className="group relative border border-transparent hover:border-black01 p-6 rounded-[10px] w-[285px]">
            <div className="relative w-full overflow-hidden h-[214px] rounded-[10px]">
                <img src={image} alt="product" className="w-full h-full object-cover" />
                <div className="absolute top-37 right-[24%] flex items-center space-x-2 p-2 
                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-300 ease-in-out">
                    <div className="w-10 h-10 border bg-white text-orange flex items-center justify-center rounded-full cursor-pointer hover:bg-orange hover:text-white transition duration-200">
                        <FaOpencart />
                    </div>
                    <div className="w-10 h-10 border bg-white text-orange flex items-center justify-center rounded-full cursor-pointer hover:bg-orange hover:text-white transition duration-200">
                        <FaRegHeart />
                    </div>
                    <div className="w-10 h-10 border bg-white text-orange flex items-center justify-center rounded-full cursor-pointer hover:bg-orange hover:text-white transition duration-200">
                        <IoShareSocialOutline />
                    </div>
                </div>

                {pdiscout && (
                    <div className="absolute top-2 right-5 w-fit py-1.5 px-5 bg-orange rounded-[5px]">
                        <span className="text-white font-Montserrat font-bold text-base">
                            {pdiscout}%
                        </span>
                    </div>
                )}
            </div>

            <div className="mt-4">
                <h5 className="font-Montserrat text-sm font-normal text-black01 uppercase tracking-[0.4px]">
                    {pCatagori}
                </h5>

                {pName?.length > 20 ? (
                    <Tooltip
                        placement="top"
                        color="#fff"
                        mouseEnterDelay={0.1}
                        title={
                            <span className="font-Poppins text-sm font-semibold text-black01 truncate">
                                {pName}
                            </span>
                        }
                    >
                        <Link to="/Product" className="font-Poppins text-xl font-semibold text-black01 truncate cursor-pointer  group-hover:text-orange">
                            {pName}
                        </Link>
                    </Tooltip>
                ) : (
                    <Link to="/Product" className="font-Poppins text-xl font-semibold text-black01 truncate">
                        {pName}
                    </Link>
                )}
                <div className='flex items-center gap-x-2 mt-2'>

                    {getstar(rate)}
                    <span className='font-Montserrat text-base font-normal text-black01'>({totalrating})</span>
                </div>
                <div>
                    <p className='font-Poppins text-2xl font-semibold text-black01 group-hover:text-orange transition-all ease-linear duration-100'>
                        {gotDiscounty(price, pdiscout)}
                    </p>
                </div>
            </div>
        </div >
    );
};

export default ProductCard;
