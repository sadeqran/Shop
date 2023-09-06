import React from "react";
import H6 from "./H6";
import Contact from "./Contact";
import Link from "./Link";

const Footer = () => {
  return (
    <div className="my-4 d-rtl ">
      <footer className="footer text-center text-lg-start text-dark rounded">
        <section className="d-flex justify-content-between p-4 bg-p rounded-t">
          <div className="mr-4">
            <span>راه های ارتباطی ما:</span>
          </div>

          <div className="ml-4">
            <a href="/" className="text-white mr-4">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="/" className="text-white mr-4">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="/" className="text-white mr-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="text-white mr-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <H6 name={"Suggest"} />
                {/* <p>
                  "خوشحالی فروش": راه به شادی و بهبود روحی ما در "خوشحالی فروش"
                  با ارائه پکیج‌های بهبودی حال روحی، به شما کمک می‌کنیم تا با
                  شادی و انگیزه به زندگی بنگرید. از طریق راهنمایی‌های متخصصانه و
                  تمرینات مثبت‌نگری، ما با شما در مسیر بهبود روحیتان همراه
                  خواهیم بود.
                </p> */}

                <form action="" className="formFooter">
                  <div className="w-100 faj mb-2" >
                    <input className="emailInputFooter" type="email" placeholder="Email" />
                    <button className="btn buttonFooter faj" type="submit">
                      <i className="fas fa-arrow-right-long fa-lg fa-light"></i>
                    </button>
                  </div>

                  <textarea
                    className="textareaFooter"
                    rows={"4"}
                    placeholder="suggest"
                  />
                </form>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <H6 name={"Products"} />
                <Link name={"مینیمال"} />
                <Link name={"پسرانه"} />
                <Link name={"دخترانه"} />
                <Link name={"مناسبتی"} />
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <H6 name={"Useful links"} />
                <Link name={"نظرات و پیشنهادات"} />
                <Link name={"مجلات و آموزش"} />
                <Link name={"بازی"} />
                <Link name={"ورود"} />
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <H6 name={"Contact"} />
                <div className="infor">
                  <Contact icon={"home"} name={"نارمک"} />
                  <Contact icon={"envelope"} name={"info@example.com"} />
                  <Contact icon={"phone"} name={"09358676598"} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 rounded-b">
          <a className="text-dark" href="https://mars.com/">
            MARS.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
