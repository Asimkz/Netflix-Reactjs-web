import React from 'react'
import css from '../HomePagebanner/HomePageBannner.css'
import sliderimg21 from '../../Images/MovieHorizontalCard.png'
import sliderimg22 from '../../Images/MovieHorizontalCard (10).png'
import sliderimg23 from '../../Images/MovieHorizontalCard (1).png'
import sliderimg24 from '../../Images/MovieHorizontalCard (11).png'
import sliderimg25 from '../../Images/MovieHorizontalCard (12).png'
import sliderimg26 from '../../Images/MovieHorizontalCard.png'
import sliderimg27 from '../../Images/MovieHorizontalCard (10).png'
import sliderimg28 from '../../Images/MovieHorizontalCard (1).png'
import sliderimg29 from '../../Images/MovieHorizontalCard (11).png'
import sliderimg30 from '../../Images/MovieHorizontalCard (12).png'
import MoviesSlider from '../MoviesSlider/MoviesSlider.jsx'
function NetflixOriginals() {
    return (
        <section className='trending-section'>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12">
                        <div className="MovieSlider-heading">
                            <h3>Trending</h3>
                        </div>
                        <MoviesSlider sliderimg1={sliderimg21} sliderimg2={sliderimg22} sliderimg3={sliderimg23} sliderimg4={sliderimg24} sliderimg5={sliderimg25} sliderimg6={sliderimg26} sliderimg7={sliderimg27} sliderimg8={sliderimg28} sliderimg9={sliderimg29} sliderimg10={sliderimg30} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NetflixOriginals