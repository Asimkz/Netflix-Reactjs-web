import React from 'react'
import css from './GetStarted.css'
import { BsChevronRight } from "react-icons/bs";
function GetStarted() {
    return (
        <>
        <div className="row">
            <div className="col-lg-12">
                <div className="heading-input-btn-rapo text-center">
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
            </div>
           
        </div>
         <div className="row">
         <div className="col-lg-12">
             <form className='form-input-email d-lg-flex justify-content-space-between d-md-flex d-grid mb-5'>
                 <input type="email" class="form-control email-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
                 <button type="submit" class="btn btn3 d-flex align-items-center justify-content-center text-center mt-lg-0 mt-md-0 mt-sm-0">Get Started <BsChevronRight />
                 </button>
             </form>
         </div>
     </div></>
    )
}

export default GetStarted