import React, { useEffect, useState } from "react";
import "./Subcategory.css";
import subcategoryImage from "../../assets/subcategory_image1.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import AnimatedBox from "../AnimatedBox/AnimatedBox";
import CardSubCategory from "./CardSubCategory/CardSubCategory";
import Pagination from "@mui/material/Pagination";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useParams} from "react-router-dom";
import { useStore } from "../../store";
import image from "../../assets/no data.png";
import image2 from "../../assets/404-page-not-found-62.svg";

const SubCategory = () => {
  const { id } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const {
    subcategories,
    totalSubcategories,
    currentPage,
    itemsPerPage,
    fetchSubcategories,
    isLoading,
    error,
  } = useStore((state) => ({
    subcategories: state.subcategories,
    totalSubcategories: state.totalSubcategories,
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
    fetchSubcategories: state.fetchSubcategories,
    isLoading: state.isLoading,
    error: state.error,
  }));

  useEffect(() => {
    fetchSubcategories(id, currentPage, itemsPerPage, searchQuery);
  }, [id, currentPage, itemsPerPage, searchQuery, fetchSubcategories]);

  

  const handlePageChange = (event, value) => {
    fetchSubcategories(id, value, itemsPerPage);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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

        <Container>
          {/* Search bar */}
          <div className="search_bar">
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                placeholder="البحث عن محاضره ..."
                type="search"
                className="input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* start grid card */}
          {isLoading ? (
            <div className="center_loading">
              <LoadingPage />
            </div>
          ) : error ? ( // check for error
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={image2} alt="not-found-page" width={250} height={250} />
              <p>الرابط خطا او معجبتنا الماده ومسحناها</p>
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
                <img src={image} alt="no-data-image" />
                <p>لا يوجد محاضرات لهذا الماده في الوقت الحالي </p>
              </div>
            </div>
          )}
        </Container>
        {/* End grid card */}

        {/* Pagination */}
        <Pagination
          className="Pagination"
          count={Math.ceil(totalSubcategories / itemsPerPage)}
          color="primary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </section>
      <Footer />
    </>
  );
};

export default SubCategory;
