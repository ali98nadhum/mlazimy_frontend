import React, { useEffect } from "react";
import "./Subcategory.css";
import subcategoryImage from "../../assets/subcategory_image1.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import AnimatedBox from "../AnimatedBox/AnimatedBox";
import CardSubCategory from "./CardSubCategory/CardSubCategory";
import Pagination from "@mui/material/Pagination";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useParams } from "react-router-dom";
import { useStore } from "../../store";
import image from "../../assets/no data.png";





const SubCategory = () => {
  const { id } = useParams();
  const {
    subcategories,
    totalSubcategories,
    currentPage,
    itemsPerPage,
    fetchSubcategories,
    isLoading,
  } = useStore((state) => ({
    subcategories: state.subcategories,
    totalSubcategories: state.totalSubcategories,
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
    fetchSubcategories: state.fetchSubcategories,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    fetchSubcategories(id, currentPage, itemsPerPage);
  }, [id, currentPage, itemsPerPage, fetchSubcategories]);

  const handlePageChange = (event, value) => {
    fetchSubcategories(id, value, itemsPerPage);
  };

  return (
    <>
      <section className="subcategory_section">
        {/* start subcategory banner */}
        <div className="subcategory_banner">
          <div className="subcategory_header">
            <Header />
          </div>
          <Container>
            <div className="content_banner">
              <AnimatedBox delay={0} duration={0.75}>
                <div className="left">
                  <img src={subcategoryImage} alt="image" />
                </div>
              </AnimatedBox>
              <div className="right">
                <AnimatedBox delay={0.25} duration={0.75}>
                  <h1>المحاضرات</h1>
                  <hr />
                  <p>
                    بهاي الصفحه رح تكون المحاضرات الخاصه بالماده المختاره مرتبه
                    حسب الاقدميه مع بعض الملاحظات ان وجدت
                  </p>
                </AnimatedBox>
              </div>
            </div>
          </Container>
        </div>
        {/* end Subcategory banner */}

        {/* start grid card */}
        <Container>
          {isLoading ? (
            <div className="center_loading">
              <LoadingPage />
            </div>
          ) : subcategories.length > 0 ? (
            <div className="grid_card">
              {subcategories.map((item) => (
                <CardSubCategory key={item._id} subcategories={item} />
              ))}
            </div>
          ) : (
            <div className="no_subcategory_found">
              <div className="detils">
              <img src={image} alt="no-data-image"/>
              <p>لا يوجد محاضرات لهذا الماده في الوقت الحالي </p>
              </div>
            </div>
          )}
        </Container>
        {/* End grid card */}

        {/* Pagination */}
        <Pagination
          className="Pagination"
          count={Math.ceil(totalSubcategories / itemsPerPage)} // حساب عدد الصفحات الكلي
          color="primary"
          page={currentPage} // الصفحة الحالية
          onChange={handlePageChange} // تفاعل مع تغيير الصفحات
        />
      </section>
      <Footer />
    </>
  );
};

export default SubCategory;
