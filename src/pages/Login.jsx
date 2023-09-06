import React from "react";

const handleClick = () => {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("active");
};
const Login = () => {
  return (
    <>
      <div className="sidebar">
        <div className="navigation ">
          <ul>
            <li>
              <a href="/">
                <span className="icon">
                  <i className="fa-solid fa-house"></i>
                </span>
                <span className="title">داشبورد</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="icon">
                  <i className="fa-solid fa-user"></i>
                </span>
                <span className="title">مشتری ها</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="icon">
                  <i className="fa-regular fa-message"></i>
                </span>
                <span className="title">پیام ها</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="icon">
                  <i className="fa-solid fa-question"></i>
                </span>
                <span className="title">کمک و سوالات</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="icon">
                  <i className="fa-solid fa-gear"></i>
                </span>
                <span className="title">تنظیمات</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="icon">
                  <i className="fa-solid fa-lock"></i>
                </span>
                <span className="title">رمز عبور</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="icon">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </span>
                <span className="title">خروج</span>
              </a>
            </li>
          </ul>
          <div className="toggle faj" onClick={handleClick}></div>
        </div>

        <section className="dir-ltr w-100">
          <div className="four_zero_four_bg">
            <h1 className="text-center">404</h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
