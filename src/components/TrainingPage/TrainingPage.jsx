import React, { useEffect } from "react";
import "./TrainingPage.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Container from "../Container/Container";
import image from "../../assets/training.svg";
import noDataImage from "../../assets/no data.png";
import TrainingCard from "./TrainingCard/TrainingCard";
import AnimatedBox from "../AnimatedBox/AnimatedBox";
import Pagination from "@mui/material/Pagination";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useStore } from "../../store";

const TrainingPage = () => {
  const { workData, fetchWorkData, currentPage, totalCount, isLoading } =
    useStore((state) => ({
      workData: state.workData,
      fetchWorkData: state.fetchWorkData,
      currentPage: state.currentPage,
      totalCount: state.totalCount,
      isLoading: state.isLoading,
    }));

  useEffect(() => {
    fetchWorkData(currentPage);
  }, [fetchWorkData, currentPage]);

  console.log(workData);
  

  const handlePageChange = (event, value) => {
    fetchWorkData(value);
  };

  return (
    <>
      <section className="training_section">
        {/* start training banner */}
        <div className="training_banner">
          <div className="training_header">
            <Header />
          </div>
          <Container>
            <div className="content_banner">
              <AnimatedBox delay={0} duration={0.75}>
                <div className="left">
                  <img src={image} alt="training_image" />
                </div>
              </AnimatedBox>
              <div className="right">
                <AnimatedBox delay={0.25} duration={0.75}>
                  <h1>فرص التدريب</h1>
                  <hr />
                  <p>
                    بهذا القسم رح تلكون فرص التدريب المجانيه المتوفره مجموعه
                    بمكان واحد لتسهيل التقديم عليها
                  </p>
                </AnimatedBox>
              </div>
            </div>
          </Container>
        </div>
        {/* End training banner */}

        {/* start grid card */}
        <Container>
          <div className="grid_card">
            {isLoading ? (
              <div className="center_loading">
                <LoadingPage />
              </div>
            ) : workData.length > 0 ? (
              workData.map((item) => (
                <TrainingCard key={item._id} workData={item} />
              ))
            ) : (
              <div className="no_category_found">
                <div className="detils">
                  <img src={noDataImage} alt="no-data-image" />
                  <p>لا يوجد فرص تدريب مجانيه في الوقت الحالي</p>
                </div>
              </div>
            )}
          </div>
        </Container>
        {/* end grid card */}
        <Pagination
          className="Pagination"
          count={Math.ceil(totalCount / 6)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </section>
      <Footer />
    </>
  );
};

export default TrainingPage;
