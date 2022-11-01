import { React, useEffect, useState } from "react";
// import axios from "axios";

import styles from "./product.module.css";
import cardImg from "../../assets/img/veggie-tomato-product.png";

const ProductCard = ({name, price}) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8070/api/show/products/all")
  //     .then((res) => {
  //       // console.log(res);
  //       setPosts(res.data.result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  // {
    /* <div>
          <ul>
            {posts.map(post=> (
              <li>{post.name}</li>
                  ))}
          </ul>
                    </div> */
  // }

  return (
    <aside className={`col ${styles["product-wrap"]}`}>
    <div className={styles["product-card"]}>
      <img src={cardImg} alt="" className={styles["product-img"]} />
      <p className={styles["product-name"]}>{name}</p>
      <p className={styles["product-price"]}>{price}</p>
    </div>
    </aside>
  );
};

export default ProductCard;
