import React from 'react'
import css from '../HomePagebanner/HomePageBannner.css'
import sliderimg31 from '../../Images/MovieVerticalCard.png'
import sliderimg32 from '../../Images/MovieVerticalCard (1).png'
import sliderimg33 from '../../Images/MovieVerticalCard (2).png'
import sliderimg34 from '../../Images/MovieVerticalCard (3).png'
import sliderimg35 from '../../Images/MovieVerticalCard (4).png'
import sliderimg36 from '../../Images/MovieVerticalCard.png'
import sliderimg37 from '../../Images/MovieVerticalCard (1).png'
import sliderimg38 from '../../Images/MovieVerticalCard (2).png'
import sliderimg39 from '../../Images/MovieVerticalCard (3).png'
import sliderimg40 from '../../Images/MovieVerticalCard (4).png'
import MoviesSlider from '../MoviesSlider/MoviesSlider.jsx'
function ForthSlider() {
  return (
    <section className='trending-section'>
    <div className="container">
    <div className="row mt-5">
        <div className="col-lg-12">
            <div className="MovieSlider-heading">
                <h3>Netflix Originals</h3>
            </div>
            <MoviesSlider sliderimg1={sliderimg31} sliderimg2={sliderimg32} sliderimg3={sliderimg33} sliderimg4={sliderimg34} sliderimg5={sliderimg35} sliderimg6={sliderimg36} sliderimg7={sliderimg37} sliderimg8={sliderimg38} sliderimg9={sliderimg39} sliderimg10={sliderimg40}/>
        </div>
       
    </div>
    </div>
    </section>
  )
}

export default ForthSlider