import React, { useState, useEffect } from "react";
import "./CardSubCategory.css";
import { IoIosCloudDownload } from "react-icons/io";
import { FaEye, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStore } from "../../../store";

const formatDateString = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return date.toLocaleDateString("ar-EG", options);
};

const CardSubCategory = ({ subcategories }) => {
  const { favoriteLectures, toggleFavorite } = useStore();
  const isFavorite = favoriteLectures.some((item) => item._id === subcategories._id);
  

  return (
    <div>
      <div className="subcategory_card">
        <div className="image">
          <img src={subcategories.image.url} alt="image" />
        </div>
        <div className="content">
          <a href="#">
            <span className="title"> {subcategories.title} </span>
          </a>
          <p className="desc">{subcategories.description}</p>
          <div className="date_subcategory">
            <p>تاريخ نشر المحاضره: {formatDateString(subcategories.createdAt)}</p>
          </div>
          <div className="btn_subcategory">
            <Link to={subcategories.file.webContentLink} className="download_btn">
              تحميل <IoIosCloudDownload />
            </Link>
            <Link to={subcategories.file.webViewLink} target="_blank" className="read_btn">
              قرأه <FaEye />
            </Link>
          </div>
          <div className="favorite_box">
            <p>اضافه الى المفضله</p>
            <FaHeart
              className={`favorite-icon ${isFavorite ? "favorite" : ""}`}
              onClick={() => toggleFavorite(subcategories)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSubCategory;
