import React from "react";
import "./TrainingCard.css";

const TrainingCard = ({workData}) => {
  return (
    <>
      <div className="training_card">
        <div className="image">
            <img src={workData.image.url} alt="image"/>
        </div>
        <div className="content">
          <a href="#">
            <span className="title">
             {workData.title}
            </span>
          </a>

          <p className="desc">
           {workData.description}
          </p>

          <a className="action" href={workData.link}>
            تقديم
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      
    </>
  );
};

export default TrainingCard;
