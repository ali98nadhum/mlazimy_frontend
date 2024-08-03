import React from "react";
import "./AboutPage.css";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import img from "../../assets/my_image.jpg";
import { styled } from "@mui/material/styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import { FaTelegram, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AnimatedBox from "../AnimatedBox/AnimatedBox";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const LargeAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

const AboutPage = () => {
  return (
    <>
      <section className="about_section">
        <div className="about_section_header">
          <Header />
        </div>
        <Container>
          <h2 className="title_about_page">مطور المنصه</h2>
          <hr className="line_about_page" />
          <AnimatedBox delay={0} duration={0.5}>
            <div className="card_container">
              <div className="card_about_page">
                <div className="header_card">
                  <AnimatedBox delay={0.3} duration={0.5}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <LargeAvatar alt="Remy Sharp" src={img} />
                    </StyledBadge>
                  </AnimatedBox>
                </div>
                <AnimatedBox delay={0.5} duration={0.5}>
                  <h3 className="name_card">Ali Nadhum</h3>
                  <p className="des_card">
                    Computer engineer and a full-stack web developer with
                    expertise in building and maintaining web applications. I
                    have a strong background in both front-end and back-end
                    development, allowing me to create seamless and efficient
                    user experiences."
                  </p>
                  <div className="icon_card">
                    <a href="https://t.me/Alinadhum98" target="_blank">
                      <FaTelegram className="icon" />
                    </a>
                    <a
                      href="https://www.instagram.com/alinadhum_?igsh=MWE4YW1mam1xejMweQ%3D%3D&utm_source=qr"
                      target="_blank"
                    >
                      <FaInstagram className="icon" />
                    </a>
                    <a href="https://github.com/ali98nadhum" target="_blank">
                      <FaGithub className="icon" />
                    </a>
                    <a href="">
                      <FaLinkedin className="icon" />
                    </a>
                  </div>
                </AnimatedBox>
              </div>
            </div>
          </AnimatedBox>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
