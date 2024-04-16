import React from 'react'
import css from './HomePageFooter.css'
import fb from '../../Images/youtube.png'
import youtube from '../../Images/f-b.png'
import twitter from '../../Images/twitter.png'
import instagram from '../../Images/instagram.png'
function HomePageFooter() {
    return (
        <footer className='homepage-footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="homepage-footer-icon d-flex">
                            <img className='img-fluid homepage-footer-img' src={fb} alt="" />
                            <img className='img-fluid homepage-footer-img' src={instagram} alt="" />
                            <img className='img-fluid homepage-footer-img' src={twitter} alt="" />
                            <img className='img-fluid homepage-footer-img' src={youtube} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 d-grid mt-5">
                        <a className='homepage-footer-link mb-2' href="#">Voice Over and Subtitling</a>
                        <a className='homepage-footer-link mb-2' href="#">Media Center</a>
                        <a className='homepage-footer-link mb-2' href="#">Privacy</a>
                        <a className='homepage-footer-link mb-2' href="#"> Contact Us</a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-grid mt-5">
                        <a className='homepage-footer-link mb-2' href="#">Service Code</a>
                        <a className='homepage-footer-link mb-2' href="#">Audio Description</a>
                        <a className='homepage-footer-link mb-2' href="#">Investor Relations</a>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-grid mt-5">
                        <a className='homepage-footer-link mb-2' href="#">Legal Provisions</a>
                        <a className='homepage-footer-link mb-2' href="#">Help Center</a>
                        <a className='homepage-footer-link mb-2' href="#">Job Opportunities</a>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-grid mt-5">
                        <a className='homepage-footer-link mb-2' href="#">Gift Cards</a>
                        <a className='homepage-footer-link mb-2' href="#">Terms of Use</a>
                        <a className='homepage-footer-link mb-2' href="#">Corporate Information</a>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div class="homepage-footer-btn mt-5">
                            <button type="button" class="btn btn-4">
                                Service Code
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="last-txt-homepage-footer mt-2">
                            <p >
                                © 1997-2021 Netflix, Inc.  (i-062d573a0ee099242)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default HomePageFooter