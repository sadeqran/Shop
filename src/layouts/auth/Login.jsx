import React from "react";
import SidebarItem from "./SidebarItem";

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
            <li className="avatar my-2">
              <span className="avatar_box mb-2">
                <img
                  className="w-100 rounded-circle bxshadow"
                  src="/assets/image/profile.jpg"
                  alt="/"
                />
              </span>
              <div className="avatar_name">محمد صادق رنجبر</div>
            </li>
            <SidebarItem icon="fa-solid fa-house" title="داشبورد" />
            <div className="sidebar_items_container">
              <SidebarItem icon="fa-solid fa-user" title="مشتری" />
              <SidebarItem icon="fa-regular fa-message" title="پیام ها" />
              <SidebarItem icon="fa-solid fa-question" title="کمک و سوالات" />
              <SidebarItem icon="fa-solid fa-gear" title="تنظیمات" />
              <SidebarItem icon="fa-solid fa-lock" title="رمز عبور" />
              <SidebarItem
                icon="fa-solid fa-arrow-right-from-bracket"
                title="خروج"
              />
              <SidebarItem icon={"fas fa-tachometer-alt"} title={"داشبورد"} />

              <SidebarItem icon="fas fa-stream" title="مدیریت گروه محصول" />
              <SidebarItem icon="fas fa-cube" title="مدیریت محصول" />
              <SidebarItem icon="fas fa-copyright" title="مدیریت برندها" />
              <SidebarItem icon="fab fa-pagelines" title="مدیریت گارانتی ها" />
              <SidebarItem icon="fas fa-palette" title="مدیریت رنگ ها" />
              <SidebarItem icon="fas fa-percentage" title="مدیریت تخفیف ها" />

              <SidebarItem
                icon="fas fa-shopping-basket"
                title="مدیریت سبد ها"
              />
              <SidebarItem icon="fas fa-luggage-cart" title="مدیریت سفارشات" />
              <SidebarItem
                icon="fas fa-truck-loading"
                title="مدیریت نحوه ارسال"
              />

              <SidebarItem icon="fas fa-users" title="مشاهده کاربران" />
              <SidebarItem icon="fas fa-user-tag" title="نقش ها" />
              <SidebarItem icon="fas fa-shield-alt" title="مجوز ها" />

              <SidebarItem icon="fas fa-question-circle" title="سوال ها" />
              <SidebarItem icon="fas fa-comment" title="نظرات" />
            </div>
          </ul>
          <div className="toggle" onClick={handleClick}></div>
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
