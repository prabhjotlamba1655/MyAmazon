import React from 'react';
import Product from './Product'
import './Home.css';
function Home() {
    return (
        <div className="home">
            <img className="home__banner"
               src="https://i1.wp.com/digiday.com/wp-content/uploads/2018/08/bannerart_081018_2.jpg?fit=1400%2C600&ssl=1" alt="banner"/>
       
            {/* Product id, title, price, rating, image */} 
            <div className="home__row">

                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
                <Product
                    id="12345532"
                    title="Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage)"
                    price={37990.00}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBcRl4X55mdGCA4XxxUaJ7cv9RAVnTHpwBig&usqp=CAU"
                />

                <Product
                    id="1422331"
                    title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
                    price={13999.49}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
                />
            
            </div>

            <div className="home__row">
            
                <Product
                    id="9921123"
                    title="boAt BassHeads 102 Wired Earphones with Immersive Audio, Multi-Function Button, in-line Microphone & Perfect Length Cable (Charcoal Black)"
                    price={499.99}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51fMwaNRSJL._AC_UL270_SR270,270_.jpg"
                />
                
                <Product
                    id="9172123"
                    title="Bosch 12 Place Settings Dishwasher (SMS66GI01I, Silver Inox)"
                    price={51200.35}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/416gayO86ZL._AC_US160_FMwebp_QL70_.jpg"
                />
                
                <Product
                    id="3673437"
                    title="Fresh Tomato 1kg"
                    price={40.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41+wxTKCfpL._SY250_.jpg"
                />

            </div>
            <div className="home__row">
                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />

                <Product
                    id="1422331"
                    title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
                    price={13999.49}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
                />
            
            </div>
            
            <div className="home__row">

                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />

                <Product
                    id="1422331"
                    title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
                    price={13999.49}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
                />
            
            </div>

            <div className="home__row">

                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />

                <Product
                    id="1422331"
                    title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
                    price={13999.49}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
                />

            </div>

            <div className="home__row">

                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />

                <Product
                    id="1422331"
                    title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
                    price={13999.49}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
                />

            </div>

            <div className="home__row">

                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
        
                <Product
                    id="1422331"
                    title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
                    price={13999.49}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
                />
                
            </div>

            <div className="home__row">
        
                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
                <Product
                    id="1212345"
                    title="Harry Potter and the Deadly Mystery - J.K. Rowling"
                    price={499.51}
                    rating={5}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDvR2FOBqHh-uXwIIiX7NhK-l3U19l82VsJA&usqp=CAU"
                />
        
                <Product
                    id="1422331"
                    title="Redmi 8A Dual (Midnight Grey, 3GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
                    price={13999.49}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71h%2BC9wJCjL._AC_UL270_SR270,270_.jpg"
                />
                
            </div>
        {/* Product */}
        </div>
    )
}

export default Home
