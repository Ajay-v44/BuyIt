import React from 'react';
import Hero from '../components/Hero/hero';
import Popular from '../components/Popular/Popular';

import NewCollections from '../components/NewCollections/NewCollections';
import Offers from '../components/Offers/Offers';
import NewsLetter from '../components/NewsLetter/NewsLetter';

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    );
}

export default Shop;