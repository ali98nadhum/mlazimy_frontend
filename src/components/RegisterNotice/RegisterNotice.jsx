import React from "react";
import "./RegisterNotice.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import img from "../../assets/register_notice.svg";
import SteperForm from "./SteperForm/SteperForm";
import AnimatedBox from "../AnimatedBox/AnimatedBox";

const RegisterNotice = () => {
  return (
    <>
      <div className="register_notice">
        <Container>
          <div className="register_notice_header">
            <Header />
          </div>
          <AnimatedBox delay={0} duration={0.5}>
            <p className="title_notice">
              اهلا بك بصفحه الاشتراك بخدمه الاشعارات عن طريق الاميل قبل الاشتراك
              هناك بعض النقاط يجب توضيحها
            </p>
          </AnimatedBox>
          <div className="content_register_notice">
            <div className="left">
              <AnimatedBox delay={0.5} duration={0.75}>
                <img src={img} alt="image" />
              </AnimatedBox>
            </div>
            <div className="right">
              <AnimatedBox delay={1} duration={0.5}>
                <p className="rols_notice">
                  <span>*</span> لحفظ امان الموقع يكون التسجيل بستعمال اميل من
                  نوع جيميل فقط
                </p>
                <p className="rols_notice">
                  <span>*</span> يفضل التسجيل بالاسم الحقيقي لان اي اسم وهمي
                  سيهمل
                </p>
                <p className="rols_notice">
                  <span>*</span> بعد خطوه التسجيل ستصل رساله على الاميل الخاص بك
                  مكونه من 6 ارقام لتاكيد اشتراكك
                </p>
                <p className="rols_notice">
                  <span>*</span> جميع البينات التي ستسجل بها تكون محفوظه و مشفره
                  تشفير تام
                </p>
              </AnimatedBox>
            </div>
          </div>
          <div className="steper_form">
            <SteperForm />
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default RegisterNotice;
