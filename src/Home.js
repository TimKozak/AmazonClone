import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="000000001"
                        title="The lean startup" 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={5} 
                    />
                    <Product 
                        id="000000002"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whick, 5 Litre Glass Bowl"
                        price={239.0} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                        rating={4} 
                    
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="000000003"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
                        price={199.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                        rating={3} 
                    />
                    <Product 
                        id="000000004"
                        title="The lean startup" 
                        price={98.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={5} 
                    />
                    <Product 
                        id="000000005"
                        title="The lean startup" 
                        price={598.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={4} 
                    />
                </div>

                <div className="home__row">
                <Product 
                        id="000000006"
                        title="The lean startup" 
                        price={1094.98} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={4} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
