import React from "react";
import "./CardSubCategory.css";
import { IoIosCloudDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const formatDateString = (dateString) => {
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("ar-EG", options);

  return formattedDate;
};

const CardSubCategory = ({ subcategories }) => {
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
            <p>
              تاريخ نشر المحاضره: {formatDateString(subcategories.createdAt)}
            </p>
          </div>

          <div className="btn_subcategory">
            <Link
              to={subcategories.file.webContentLink}
              className="download_btn"
            >
              تحميل <IoIosCloudDownload />{" "}
            </Link>
            <Link
              to={subcategories.file.webViewLink}
              target="_blank"
              className="read_btn"
            >
              قرأه <FaEye />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSubCategory;
