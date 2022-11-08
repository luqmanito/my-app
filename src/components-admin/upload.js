import React from "react";
import styles from "../components-admin/upload.module.css";

const Upload = ({img, ...rest}) => {
return(
    <div className={`${styles["upload"]}`}>
        {img && < img className={`${styles["img-preview"]}`} src={img} alt="preview" /> } <br />
        <input name="image" className={`${styles["upload-button"]}`} type="file" {...rest} />
        
    </div >
)
}

export default Upload