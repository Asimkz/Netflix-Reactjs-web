import React from 'react'
import MoviesSlider from '../MoviesSlider/MoviesSlider'
import css from '../HomePagebanner/HomePageBannner.css'
import sliderimg1 from '../../Images/MovieHorizontalCard.png'
import sliderimg2 from '../../Images/MovieHorizontalCard (1).png'
import sliderimg3 from '../../Images/MovieHorizontalCard (2).png'
import sliderimg4 from '../../Images/MovieHorizontalCard (3).png'
import sliderimg5 from '../../Images/MovieHorizontalCard (4).png'
import sliderimg6 from '../../Images/MovieHorizontalCard.png'
import sliderimg7 from '../../Images/MovieHorizontalCard (1).png'
import sliderimg8 from '../../Images/MovieHorizontalCard (2).png'
import sliderimg9 from '../../Images/MovieHorizontalCard (3).png'
import sliderimg10 from '../../Images/MovieHorizontalCard (4).png'
function PopularOnNetflix() {
  return (
    <>
    <section className='trending-section'>
    <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div className="MovieSlider-heading">
                                <h3>Popular on Netflix</h3>
                            </div>
                            <MoviesSlider sliderimg1={sliderimg1} sliderimg2={sliderimg2} sliderimg3={sliderimg3} sliderimg4={sliderimg4} sliderimg5={sliderimg5} sliderimg6={sliderimg6} sliderimg7={sliderimg7} sliderimg8={sliderimg8} sliderimg9={sliderimg9} sliderimg10={sliderimg10}/>
                        </div>
                       
                    </div>
                    </div>
                    </section>
    </>
  )
}

export default PopularOnNetflix