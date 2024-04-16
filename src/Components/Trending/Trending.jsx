import React from 'react'
import css from '../HomePagebanner/HomePageBannner.css'
import sliderimg11 from '../../Images/MovieHorizontalCard (5).png'
import sliderimg12 from '../../Images/MovieHorizontalCard (6).png'
import sliderimg13 from '../../Images/MovieHorizontalCard (7).png'
import sliderimg14 from '../../Images/MovieHorizontalCard (8).png'
import sliderimg15 from '../../Images/MovieHorizontalCard (9).png'
import sliderimg16 from '../../Images/MovieHorizontalCard (5).png'
import sliderimg17 from '../../Images/MovieHorizontalCard (6).png'
import sliderimg18 from '../../Images/MovieHorizontalCard (7).png'
import sliderimg19 from '../../Images/MovieHorizontalCard (8).png'
import sliderimg20 from '../../Images/MovieHorizontalCard (9).png'
import MoviesSlider from '../MoviesSlider/MoviesSlider.jsx'
function Trending() {
  return (
    <section className='trending-section'>
    <div className="container">
    <div className="row mt-5">
        <div className="col-lg-12">
            <div className="MovieSlider-heading">
                <h3>Kemal, Keep Watching</h3>
            </div>
            <MoviesSlider sliderimg1={sliderimg11} sliderimg2={sliderimg12} sliderimg3={sliderimg13} sliderimg4={sliderimg14} sliderimg5={sliderimg15} sliderimg6={sliderimg16} sliderimg7={sliderimg17} sliderimg8={sliderimg18} sliderimg9={sliderimg19} sliderimg10={sliderimg20}/>
        </div>
       
    </div>
    </div>
    </section>
  )
}

export default Trending