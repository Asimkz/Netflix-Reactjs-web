import React from 'react'
import css from '../HomePagebanner/HomePageBannner.css'
import sliderimg61 from '../../Images/MoviePoster (7).png'
import sliderimg62 from '../../Images/MovieHorizontalCard (18).png'
import sliderimg63 from '../../Images/MovieHorizontalCard (19).png'
import sliderimg64 from '../../Images/MovieHorizontalCard (20).png'
import sliderimg65 from '../../Images/MovieHorizontalCard (21).png'
import sliderimg66 from '../../Images/MoviePoster (7).png'
import sliderimg67 from '../../Images/MovieHorizontalCard (18).png'
import sliderimg68 from '../../Images/MovieHorizontalCard (19).png'
import sliderimg69 from '../../Images/MovieHorizontalCard (20).png'
import sliderimg70 from '../../Images/MovieHorizontalCard (21).png'
import MoviesSlider from '../MoviesSlider/MoviesSlider.jsx'
function List() {
  return (
    <section className='trending-section'>
    <div className="container-fluid">
    <div className="row mt-5">
        <div className="col-lg-12">
            <div className="MovieSlider-heading">
                <h2>List</h2>
            </div>
            <MoviesSlider sliderimg1={sliderimg61} sliderimg2={sliderimg62} sliderimg3={sliderimg63} sliderimg4={sliderimg64} sliderimg5={sliderimg65} sliderimg6={sliderimg66} sliderimg7={sliderimg67} sliderimg8={sliderimg68} sliderimg9={sliderimg69} sliderimg10={sliderimg70}/>
        </div>
       
    </div>
    </div>
    </section>
  )
}

export default List