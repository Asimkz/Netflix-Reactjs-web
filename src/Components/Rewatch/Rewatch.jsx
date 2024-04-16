import React from 'react'
import css from '../HomePagebanner/HomePageBannner.css'
import sliderimg51 from '../../Images/MovieHorizontalCard (13).png'
import sliderimg52 from '../../Images/MovieHorizontalCard (14).png'
import sliderimg53 from '../../Images/MovieHorizontalCard (15).png'
import sliderimg54 from '../../Images/MovieHorizontalCard (16).png'
import sliderimg55 from '../../Images/MovieHorizontalCard (17).png'
import sliderimg56 from '../../Images/MovieHorizontalCard (13).png'
import sliderimg57 from '../../Images/MovieHorizontalCard (14).png'
import sliderimg58 from '../../Images/MovieHorizontalCard (15).png'
import sliderimg59 from '../../Images/MovieHorizontalCard (16).png'
import sliderimg60 from '../../Images/MovieHorizontalCard (17).png'
import MoviesSlider from '../MoviesSlider/MoviesSlider.jsx'
function Rewatch() {
  return (
    <section className='trending-section'>
    <div className="container-fluid">
    <div className="row mt-5">
        <div className="col-lg-12">
            <div className="MovieSlider-heading">
                <h2>Rewatch</h2>
            </div>
            <MoviesSlider sliderimg1={sliderimg51} sliderimg2={sliderimg52} sliderimg3={sliderimg53} sliderimg4={sliderimg54} sliderimg5={sliderimg55} sliderimg6={sliderimg56} sliderimg7={sliderimg57} sliderimg8={sliderimg58} sliderimg9={sliderimg59} sliderimg10={sliderimg60}/>
        </div>
       
    </div>
    </div>
    </section>
  )
}

export default Rewatch