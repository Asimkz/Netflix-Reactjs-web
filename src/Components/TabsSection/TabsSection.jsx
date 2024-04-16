import React from 'react'
import css from './TabsSection.css'
import { FaPlus } from "react-icons/fa6";
import GetStarted from '../GetStarted/GetStarted';
function TabsSection(props) {
    return (
        <>
            <section className='tabsection'>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="tabsection-heading d-flex justify-content-center mb-5">
                                <h3>Frequently Asked Questions</h3>
                            </div>
                        </div>

                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <nav class="navbar another-nav navbar-expand-xxxl p-4">

                                <a class="navbar-brand question text-white" href="#">What Is Netflix</a>
                                <button class="navbar-toggler another-navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
                                    <div className='icon-toggle'><FaPlus /></div>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item another-nav-item">
                                            <p >Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices
                                                <br />
                                                <br />
                                                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <nav class="navbar another-nav navbar-expand-xxxl p-4">

                                <a class="navbar-brand question text-white" href="#">How much does Netflix cost?</a>
                                <button class="navbar-toggler another-navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                                    <div className='icon-toggle'><FaPlus /></div>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item another-nav-item">
                                            <p >Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <nav class="navbar another-nav navbar-expand-xxxl p-4">

                                <a class="navbar-brand question text-white" href="#">Where can I watch?</a>
                                <button class="navbar-toggler another-navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo04" aria-controls="navbarTogglerDemo04" aria-expanded="true" aria-label="Toggle navigation">
                                    <div className='icon-toggle'><FaPlus /></div>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo04">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item another-nav-item">
                                            <p >Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/>
                                            <br/>
                                            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <nav class="navbar another-nav navbar-expand-xxxl p-4">

                                <a class="navbar-brand question text-white" href="#">How do I cancel?</a>
                                <button class="navbar-toggler another-navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo05" aria-controls="navbarTogglerDemo05" aria-expanded="true" aria-label="Toggle navigation">
                                    <div className='icon-toggle'><FaPlus /></div>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo05">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item another-nav-item">
                                            <p >Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <nav class="navbar another-nav navbar-expand-xxxl p-4">

                                <a class="navbar-brand question text-white" href="#">What can I watch on Netflix?</a>
                                <button class="navbar-toggler another-navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo06" aria-controls="navbarTogglerDemo06" aria-expanded="true" aria-label="Toggle navigation">
                                    <div className='icon-toggle'><FaPlus /></div>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo06">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item another-nav-item">
                                            <p >Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-lg-12">
                            <nav class="navbar another-nav navbar-expand-xxxl p-4">

                                <a class="navbar-brand question text-white" href="#">Is Netflix good for kids?</a>
                                <button class="navbar-toggler another-navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo07" aria-controls="navbarTogglerDemo07" aria-expanded="true" aria-label="Toggle navigation">
                                    <div className='icon-toggle'><FaPlus /></div>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarTogglerDemo07">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item another-nav-item">
                                            <p >The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                                                <br/>
                                                <br/>
                                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                            </nav>
                        </div>
                    </div>
                    <GetStarted />
                </div>
               
            </section>
        </>
    )
}

export default TabsSection