import React, { useEffect, useState } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import left_image from "../../assets/left_hero.svg";
import Container from "../Container/Container";
import { Typewriter } from "react-simple-typewriter";
import LogoComp from "../LogoComp/LogoComp";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import contactImage from "../../assets/mention-77.svg";
import { FaTelegram } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { GiSpellBook , GiBookshelf } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { useStore } from "../../store";
import { Helmet } from "react-helmet";
import Calendar from "../Calendar/Calendar";







const Hero = () => {
  const [showLogoComp, setShowLogoComp] = useState(true);
  const { categoryData ,fetchData , subcategoryData , fetchSubcategory , notUserData , fetchUsersNotice} = useStore((state) => ({
    categoryData: state.categoryData,
    fetchData: state.fetchData,
    fetchSubcategory: state.fetchSubcategory,
    subcategoryData: state.subcategoryData,
    fetchUsersNotice: state.fetchUsersNotice,
    notUserData: state.notUserData
  }));



 
 

  useEffect(() => {
    fetchData()
    fetchSubcategory()
    fetchUsersNotice()
    const timer = setTimeout(() => {
      setShowLogoComp(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <>
      {showLogoComp && <LogoComp />}
      {!showLogoComp && (
        <section className="hero_section">
          <Helmet>
                <meta charSet="utf-8" />
                <title>الصفحه الرئيسيه - منصه ملازمي</title>
                <link rel="canonical" href="https://mlazimy.netlify.app/" />
            </Helmet>
          {/* start herobanner banner */}
          <div className="hero_banner">
            <div className="hero_header">
              <Header />
            </div>
            <Container>
              <div className="content_banner">
                <div className="left">
                  <img src={left_image} alt="image" />
                </div>
                <div className="right">
                  <h2>منصه ملازمي</h2>
                  <hr />
                  <p className="hero_Typewriter">
                    مكتبه الكترونيه من خلالها سيكون الوصول لكل شي{" "}
                    <span>
                      <Typewriter
                        words={["سهل", "سريع", "ممتع"]}
                        loop={150}
                        cursor
                        cursorStyle=" | "
                        typeSpeed={150}
                        deleteSpeed={100}
                        delaySpeed={1000}
                      />
                    </span>
                  </p>
                  <p className="hero_des">
                    هذا المنصه مخصصه لطلاب هندسه تقنيات الحاسوب المرحله الثالثه
                    جامعه التراث من خلالها يتم نشر جميع المحاضرات و فرص التدريب
                    المتوفره
                  </p>
                  <p className="notice_des">
                    للانضمام وتفعيل خدمه الاشعارات على الاميل
                  </p>
                  <Link to={"/register_notice"}>
                    <Button variant="contained" className="notice_btn">
                      اضغط هنا
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>

          {/* Content Hero Dwon sec */}
          <div className="hero_dwon">
            <Container>
              <div className="statistics-sec">
                <div className="statistics-box">
                <FaPerson  className="statistics-icon" />
                  <p className="statistics-t">الطلاب المسجلين</p>
                  <p className="statistics-n"> {notUserData.length} </p>
                </div>
                <div className="statistics-box">
                <GiBookshelf className="statistics-icon" />
                  <p className="statistics-t">عدد المحاضرات</p>
                  <p className="statistics-n"> {subcategoryData.length} </p>
                </div>
                <div className="statistics-box">
                <GiSpellBook className="statistics-icon" />
                  <p className="statistics-t">عدد المواد</p>
                  <p className="statistics-n"> {categoryData.length} </p>
                </div>
              </div>
             {/* Calendar */}
             <Calendar/>

              <h6 className="title_hero_dwon">خدمات المنصه</h6>
              <hr />
              <div className="content_hero_dwon">
                <div className="left_hero_dwon">
                  <img src={logo} alt="logo-image" />
                </div>
                <div className="right_hero_dwon">
                  <div className="item">
                    <p>تسهيل الوصول الى ملفات المحاضرات بسهوله تامه</p>
                    <div className="line"></div>
                  </div>
                  <div className="item">
                    <p>
                      جميع فرص التدريب والكورسات المجانيه بمكان واحد لتسهيل
                      الوصول اليها
                    </p>
                    <div className="line"></div>
                  </div>
                  <div className="item">
                    <p>
                      توفير مقاطع شرحيه للمواد في حال توفرها وتسهيل الوصول اليها
                    </p>
                    <div className="line"></div>
                  </div>
                  <div className="item">
                    <p>
                      توفير خدمه الاشعارات عبر الاميل للامتحانات المهمه{" "}
                      <Link to={"/register_notice"}>اضغط هنا للاشتراك</Link>
                    </p>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          {/* Content Us */}
          <div className="contact_us">
            <Container>
              <div className="contact_us_image">
                <img src={contactImage} alt="contactImage" />
              </div>
              <div className="contact_us_link">
                <Button
                  className="btn_telegram"
                  variant="contained"
                  endIcon={<FaTelegram className="telegram_icon" />}
                >
                  {" "}
                  <a href="https://t.me/+JQstIch_hwtmMGRi" target="_blank">
                    كروب التليكرام الرسمي
                  </a>{" "}
                </Button>
                <Button
                  className="btn_telegram"
                  variant="contained"
                  endIcon={<FaTelegram className="telegram_icon" />}
                >
                  {" "}
                  <a href="https://t.me/Computerstudy11" target="_blank">
                    قناه الملازم على التليكرام
                  </a>{" "}
                </Button>
              </div>
            </Container>
          </div>
        </section>
      )}
      {showLogoComp && <div></div>}
      {!showLogoComp && <Footer />}
    </>
  );
};

export default Hero;
