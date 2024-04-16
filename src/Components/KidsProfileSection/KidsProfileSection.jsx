import React from 'react'
import css from './KidsProfileSection.css'
import kidsimages from '../../Images/kids-images.png'
function KidsProfileSection() {
    return (
        <>
            <section className='KidsProfileSection'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="KidsProfileSection-img">
                                <img className='img-fluid' src={kidsimages} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="KidsProfileSection-heading-txt-rapo mt-5 d-grid align-items-center">
                            <h2>Create profiles for kids</h2>
                            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div  class="bottom-line-2"></div>
            
        </>
    )
}

export default KidsProfileSection