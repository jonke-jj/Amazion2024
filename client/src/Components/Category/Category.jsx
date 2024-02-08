import React from 'react'
import {categoryInfos} from "./categoryFullInfos"
import CategoryCard from '../../Components/Category/CategoryCard'
import classes from "./category.module.css"

function Category () { 
  return (
    <section className={classes.category_container}>
      {
        categoryInfos.map((infos)=>(
          <CategoryCard data = {infos}/>
          // {infos.imgLink} data = {infos} />
        ))
      }
    </section>
  )
}

export default Category;