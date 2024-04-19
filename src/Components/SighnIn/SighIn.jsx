import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./SighnIn.css";
import { useFormik } from "formik";
import { SighnInSchema } from "../../Schemas";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  password: "",
};
function SighnUp(props) {
  const navigation = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SighnInSchema,
      onSubmit: (values) => {
        const Sighninuser = JSON.parse(localStorage.getItem("user"));
        if (
          values.name === Sighninuser.name &&
          values.password === Sighninuser.password
        ) {
          navigation("/Homepage");
        } else {
          alert("Wrong name and password");
        }
      },
    });
  return (
    <>
      <div className={`${props.appcss}`}>
        <Navbar />
        <div className="container signin-container">
          <div className="Sighnup-main-rapo">
            <div className="Sighnup-heading d-flex justify-content-start text-start">
              <h3>Sign In </h3>
            </div>
            <div className="signup-link-txt d-flex align-items-center ">
              <p>New to Netflix? </p>
              <Link to="/SighnUp" className="ms-3">
                Sign up now
              </Link>
            </div>
            <form className="name-pass-form" onSubmit={handleSubmit}>
              <div class="mb-3 mt-5">
                <input
                  type="name"
                  class="form-control name-input"
                  id="exampleInputPassword1"
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.name && touched.name ? (
                <p className="text-danger ">{errors.name}</p>
              ) : null}
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control name-input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && touched.password ? (
                <p className="text-danger ">{errors.password}</p>
              ) : null}

              <button type="submit" class="btn btn-3 btn-primary mb-3">
                Sign In
              </button>

              <Link className="forget-pass mb-3" to="#">
                <p>Forget Password?</p>
              </Link>
            </form>

            <div className="last-txt-sihgnup-form mb-5">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <span>Learn more</span>
              </p>
            </div>
          </div>
        </div>
        <Footer
          footercss="footercss2"
          footerLinkTwo="Cookie Preference"
          footerLinkFive="Corporation Information"
          footerLinkSeven="Terms Of Use"
          footerLinkEleveth="Privacy"
        />
      </div>
    </>
  );
}

export default SighnUp;
