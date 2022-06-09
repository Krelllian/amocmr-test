import React from 'react'
import './Brands.scss'
import brand1 from '../../imgs/brands/MXM_1.svg'
import brand2 from '../../imgs/brands/UPP_6.svg'
import brand3 from '../../imgs/brands/Ellipse_5.svg'
import brand4 from '../../imgs/brands/FTT_4.svg'
import brand5 from '../../imgs/brands/Frame_3.svg'
import brand6 from '../../imgs/brands/ODE_2.svg'
import brand7 from '../../imgs/brands/MWC_7.svg'

const Brands = () => {
    const brandsLogos = [brand1, brand2, brand3, brand4, brand5, brand6, brand7,]

    return (
        <section className='brands'>
            <div className='brands-container container'>
                <h3 className='brands__title'>Наши партнёры</h3>
                <div className='brands__cards'>
                    {brandsLogos.map((logo) => <div className='brands__card'><img src={logo} alt='Brand logo'></img></div>)}
                </div>
            </div>
        </section>
    )
}

export default Brands