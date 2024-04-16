import React from 'react'
import css from '../HomePagebanner/HomePageBannner.css'
import sliderimg41 from '../../Images/MoviePoster (5).png'
import sliderimg42 from '../../Images/MoviePoster (4).png'
import sliderimg43 from '../../Images/MoviePoster.png'
import sliderimg44 from '../../Images/MoviePoster (1).png'
import sliderimg45 from '../../Images/3e21e42becd10998cf1c12cca61dbafb.png'
import sliderimg46 from '../../Images/MoviePoster (5).png'
import sliderimg47 from '../../Images/MoviePoster (4).png'
import sliderimg48 from '../../Images/MoviePoster.png'
import sliderimg49 from '../../Images/MoviePoster (1).png'
import sliderimg50 from '../../Images/3e21e42becd10998cf1c12cca61dbafb.png'
import MoviesSlider from '../MoviesSlider/MoviesSlider.jsx'
function Top10() {
  return (
    <section className='trending-section'>
    <div className="container">
    <div className="row mt-5">
        <div className="col-lg-12">
            <div className="MovieSlider-heading">
                <h3>Today's Top 10 List in Turkey</h3>
            </div>
            <MoviesSlider sliderimg1={sliderimg41} sliderimg2={sliderimg42} sliderimg3={sliderimg43} sliderimg4={sliderimg44} sliderimg5={sliderimg45} sliderimg6={sliderimg46} sliderimg7={sliderimg47} sliderimg8={sliderimg48} sliderimg9={sliderimg49} sliderimg10={sliderimg50}/>
        </div>
       
    </div>
    </div>
    </section>
  )
}

export default Top10