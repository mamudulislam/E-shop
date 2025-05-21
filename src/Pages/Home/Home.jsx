import React from 'react';
import Container from '../../Golobalcomponentes/Container';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Banner from './Componentes/Banner';

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container>
                {/* <h1>{t('this_is_home_pages')}</h1> */}
                <Banner />
            </Container>
        </>
    );
};

export default Home;
