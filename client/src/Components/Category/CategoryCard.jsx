import React from 'react'
import classes from "./category.module.css"
import { Link } from "react-router-dom";

function CategoryCard({data}) {
  return (
    <div className={classes.category}>
      <a herf="">
        <span>
          <h2>{data.title}</h2>
          </span>
        <img src={data.imgLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default CategoryCard;