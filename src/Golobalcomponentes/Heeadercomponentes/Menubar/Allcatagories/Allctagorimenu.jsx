import { Dropdown, Space } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { LuMenu } from 'react-icons/lu';
import { Catagoriesitems } from './Catagoriesitems';

const Allctagorimenu = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Dropdown menu={{ items: Catagoriesitems }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space className='font-Montserrat font-bold text-base text-white cursor-pointer'>
                        <LuMenu /> {t('All Categories')}
                    </Space>
                </a>
            </Dropdown>
        </div >
    )
}

export default Allctagorimenu;