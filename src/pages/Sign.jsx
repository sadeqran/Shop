import React from "react";
import { NavLink } from "react-router-dom";

const Shokolat = () => {
  const handleSignUpClick = () => {
    const container = document.getElementById("containerr");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = () => {
    const container = document.getElementById("containerr");
    container.classList.remove("right-panel-active");
  };
  return (
    <div className="sign">
      <div className="containerr" id="containerr">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>ثبت نام</h1>
            <div className="social-container">
              <a href="/" className="social bg-b">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social bg-r">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social bg-s">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>یا از ایمیل خود برای ثبت نام استفاده کنید</span>
            <input type="text" placeholder="نام" />
            <input type="email" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <button className="bxshadow">ثبت نام</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>ورود</h1>
            <div className="social-container">
              <a href="/" className="social bg-b">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social bg-r">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social bg-s">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>یا از حساب کاربری خود استفاده کنید</span>
            <input type="email" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <a href="/">رمز عبور خود را فراموش کرده اید؟</a>
            <NavLink to="/login">
              <button className="bxshadow">ورود</button>
            </NavLink>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>خوش آمدید</h1>
              <p>برای حفظ ارتباط با ما لطفا با مشخصات شخصی خود وارد شوید</p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                ورود
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>سلام</h1>
              <p>اطلاعات شخصی خود را وارد کنید تا با ما حساب باز کنید</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                ثبت نام
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shokolat;
