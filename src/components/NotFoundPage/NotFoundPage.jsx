import React from 'react'
import "./NotFoundPage.css";
import Header from '../Header/Header';
import Container from '../Container/Container';
import image from "../../assets/404-page-not-found-62.svg";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='not_found_page'>
      <div className="not_found_page_header">
        <Container>
            <Header/>
        </Container>
      </div>
      <div className="not_found_image">
        <img src={image} alt="image_not_found"/>
      </div>
      <p className='not_found_des'>لم يتم العثور على الصفحه المطلوبه هل تريد العوده الى <Link to={"/"}>الصفحه الرئيسيه</Link></p>
    </div>
  )
}

export default NotFoundPage
