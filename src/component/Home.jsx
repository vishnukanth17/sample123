import React from 'react'
import Product from './Product'

function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="https://www.hdnicewallpapers.com/Walls/Big/Alia%20Bhatt/Alia_Bhatt_5K_Actress_Wallpapers.jpg" className="card-img" alt="Bakground" height ="550px    "/>
                    <div class="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                        <h5 className="card-title display-3 fs-1 fw-bold mb-0 ">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-3 mb-0">
                            CHECKOUT ALL THE TRENDS
                        </p>
                        </div>
                        
                    </div>
            </div>
         <Product />
        </div>
    )
}

export default Home