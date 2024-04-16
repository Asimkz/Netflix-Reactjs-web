import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Schemas";
import { Link, useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function SighnUp(props) {
  const navigation = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values) => {
        localStorage.setItem("user", JSON.stringify(values)); // Store user details
        navigation("/SighnIn");
      },
    });
  return (
    <>
      <div className={`${props.appcss}`}>
        <Navbar />
        <div className="container signin-container">
          <div className="Sighnup-main-rapo">
            <div className="Sighnup-heading d-flex justify-content-start text-start">
              <h3>Sign Up</h3>
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

              <div class="mb-3 ">
                <input
                  type="email"
                  class="form-control name-input"
                  id="exampleInputPassword1"
                  placeholder="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && touched.email ? (
                <p className="text-danger ">{errors.email}</p>
              ) : null}
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control name-input"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.password && touched.password ? (
                <p className="text-danger ">{errors.password}</p>
              ) : null}
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control name-input"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.confirm_password && touched.confirm_password ? (
                <p className="text-danger ">{errors.confirm_password}</p>
              ) : null}
              <button type="submit" class="btn btn-3 btn-primary mb-3">
                Sign Up
              </button>
            </form>
            <div className="signup-link-txt d-flex align-items-center ">
              <p>Have Already An Account? </p>
              <Link className="ms-3" to="/SighnIn">
                SighnIn
              </Link>
            </div>
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
