import React, { useEffect } from "react";
import "./Category.css";
import Header from "../Header/Header";
import leftImage from "../../assets/category_image1.png";
import Container from "../Container/Container";
import AnimatedBox from "../AnimatedBox/AnimatedBox";
import CategoryCard from "./CategoryCard/CategoryCard";
import Footer from "../Footer/Footer";
import LoadingPage from "../LoadingPage/LoadingPage";
import image from "../../assets/no data.png";
import { useStore } from "../../store";
import { Link } from "react-router-dom";

const Category = () => {
  const { categoryData, isLoading, fetchData } = useStore((state) => ({
    categoryData: state.categoryData,
    isLoading: state.isLoading,
    fetchData: state.fetchData,
  }));
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <section className="category_section">
        {/* start category banner */}
        <div className="category_banner">
          <div className="category_header">
            <Header />
          </div>
          <Container>
            <div className="content_banner">
              <AnimatedBox delay={0} duration={0.75}>
                <div className="left">
                  <img src={leftImage} alt="image" />
                </div>
              </AnimatedBox>

              <div className="right">
                <AnimatedBox delay={0.25} duration={0.75}>
                  <h1>المواد</h1>
                  <hr />
                  <p>
                    بهذا القسم رح تلكون المواد مقسمه بطريقه مرتبه مجرد اختيار
                    اسم الماده و ستظهر المحاضرات المتوفره للماده المختاره
                  </p>
                </AnimatedBox>
              </div>
            </div>
          </Container>
        </div>
        {/* end category banner */}

        {/* start grid card */}
        <Container>
          <div className="grid_card">
            {isLoading ? (
              <div className="center_loading">
                <LoadingPage />
              </div>
            ) : categoryData.length > 0 ? (
              categoryData.map((category) => (
                <Link key={category._id} to={`/subcategory/${category._id}`}>
                  <CategoryCard category={category} />
                </Link>
              ))
            ) : (
              <div className="no_category_found">
              <div className="detils">
              <img src={image} alt="no-data-image"/>
              <p>لا يوجد مواد بالوقت الحالي جاري العمل على اضافه المواد</p>
              </div>
            </div>
            )}
          </div>
        </Container>
        {/* end grid card */}
      </section>
      <Footer />
    </>
  );
};

export default Category;
