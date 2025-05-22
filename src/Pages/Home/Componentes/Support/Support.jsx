import { Supportdata } from './Supportdata';

const Support = () => {
    return (
        <div className='grid grid-cols-4 gap-x-40 mt-20'>
            {
                Supportdata?.map((item, index) => {
                    const Icons = item.icon
                    return (
                        <div className='flex items-center gap-x-5' key={index}>
                            <span className='text-black01'>
                                <Icons />
                            </span>
                            <div>
                                <h5 className='font-Montserrat font-bold text-base text-black01'>{item.title}</h5>
                                <p className='font-Montserrat font-normal text-base text-black01'>{item.subtitle}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Support;
