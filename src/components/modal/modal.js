import React, { Fragment, useState } from "react";
import { Component } from "react";
import styles from "../modal/modal.module.css";

export default class Modal extends Component {
//   const [modal, setModal] = useState(true);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }
  render() {
  return (
    <Fragment>
      {/* <button onClick={toggleModal} className={styles["btn-modal"]}>
        Open
      </button> */}

      { (
        <div className={styles["modal"]}>
          <div className={styles["overlay"]}></div>
          <div className={styles["modal-content"]}>
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className={styles["close-modal"]} >
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>Lorem ipsum , quisquam molestiae.</p>
      </Fragment>
  );
}}
