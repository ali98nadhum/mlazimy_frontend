import React, { useEffect, useState } from "react";
import CardSubCategory from "../SubCategory/CardSubCategory/CardSubCategory"; // إعادة استخدام مكون البطاقة
import Header from "../Header/Header";
import "./favorites.css";
import Container from "../Container/Container";
import Lottie from "lottie-react";
import favoriteAnimation from "../../animation/favorites.json";
import { useStore } from "../../store";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Favorites = () => {
  
  const { favoriteLectures, subcategories, setFavoriteLectures } = useStore((state) => ({
    favoriteLectures: state.favoriteLectures,
    subcategories: state.subcategories,
    setFavoriteLectures: state.setFavoriteLectures,
  }));

  useEffect(() => {
    const updateFavorites = async () => {
      const updatedFavorites = favoriteLectures.filter(lecture =>
        subcategories.some(dbLecture => dbLecture._id === lecture._id)
      );

      if (updatedFavorites.length !== favoriteLectures.length) {
        // تحديث المفضلات في الحالة و localStorage
        setFavoriteLectures(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    };

    updateFavorites();
  }, [favoriteLectures, subcategories, setFavoriteLectures]);

  

  return (
    <div className="favorites">
      <Helmet>
                <meta charSet="utf-8" />
                <title>المحاضرات المفضله - منصه ملازمي</title>
                <link rel="canonical" href="https://mlazimy.netlify.app/favorites_lec" />
            </Helmet>
      <div className="header-favorites">
        <Header />
      </div>
      <Container>
        <div className="content_favorites">
        <Lottie
              style={{ height: "180px" }}
              loop={false}
              animationData={favoriteAnimation}
            />
            <h2 className="t_favorite">المحاضرات المفضله</h2>
            {favoriteLectures.length > 0 ? (
                <div className="grid_card">
                {favoriteLectures.map((lecture) => (
                  <CardSubCategory key={lecture._id} subcategories={lecture} />
                ))}
              </div>
            ) : (
                    <div className="not_found_favorite">
                        <p className="p_favorite">لا توجد محاضرات مضافة إلى المفضلات بعد.</p>
                        <Link className="link_favorite" to="/category">اضافه محاضره</Link>
                    </div>
            )}
        </div>
      </Container>
    </div>
  );
};

export default Favorites;


