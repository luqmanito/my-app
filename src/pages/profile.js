import React, { useState, useRef, useEffect, Fragment } from "react";
import styles from "../style/profile.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import withNavigate from "../helpers/withNavigate";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import coffeebeanscropped from "../assets/images/coffeebeanscropped.jpg";
import beardMan from "../assets/images/beard-man.jpg";
import editicon from "../assets/images/edit-icon.png";
import { useParams } from "react-router-dom";
import { getProfile, editProfile, logoutBe } from "../helpers/tools";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../components/upload/upload";
import Modal from "../components/modal/modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({ navigate }) => {
  const { profiles } = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({});
  const [body, setBody] = useState({});
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const target = useRef(null);
  const [detailImage, setDetailImage] = useState({});
  const [nameValue, setNameValue] = useState();
  const [phoneValue, setPhoneValue] = useState({});
  const [addressValue, setAddressValue] = useState();
  const [firstNameValue, setFirstNameValue] = useState();
  const [lastNameValue, setLastNameValue] = useState();
  const [dateValue, setDateValue] = useState();
  console.log(gender);
  const handleAddress = (e) => {
    setBody({ ...body, address: e.target.value });
    setAddressValue(e.target.value);
  };
  const handlePhone = (e) => {
    setBody({ ...body, mobile_number: e.target.value });
    setPhoneValue(e.target.value);
  };
  const handleName = (e) => {
    setBody({ ...body, name: e.target.value });
    setNameValue(e.target.value);
  };
  const handleBirth = (e) => {
    setBody({ ...body, birth_date: e.target.value });
    setDateValue(e.target.value);
  };
  const handleFirstName = (e) => {
    setBody({ ...body, firstname: e.target.value });
    setFirstNameValue(e.target.value);
  };
  const handleLastName = (e) => {
    setBody({ ...body, lastname: e.target.value });
    setLastNameValue(e.target.value);
  };

  const onPress1 = () => {
    setGender("female");
    setBody({ ...body, gender: "female" });
  };
  const onPress2 = () => {
    setGender("male");
    setBody({ ...body, gender: "male" });
  };

  const handleLogout = async () => {
    setOpen(!open);
  };

  // console.log(profiles);

  const getDataProfile = async () => {
    try {
      const result = await getProfile();
      dispatch({ type: "ADD_PROFILE", payload: result.data.result[0] });
      setProfile(result.data.result[0]);
      const imgDetail = result.data.result[0].image;
      setDetailImage(imgDetail);
      setPhoneValue(result.data.result[0].mobile_number);
      setAddressValue(result.data.result[0].address);
      setNameValue(result.data.result[0].name);
      setFirstNameValue(result.data.result[0].firstname);
      setLastNameValue(result.data.result[0].lastname);
      setDateValue(result.data.result[0].birth_date);
      setGender(result.data.result[0].gender);
    } catch (error) {
      if (error.response.data.statusCode === 403) {
        navigate("/login");
      }
    }
  };

  const onImageUpload = (e) => {
    const files = e.target.files[0];
    setImage(files);
    setImagePreview(URL.createObjectURL(files));
    setBody({ ...body, image: e.target.files[0] });
  };

  const data = new FormData();
  if (body.name !== undefined) {
    data.append("name", body.name);
  }
  if (body.address !== undefined) {
    data.append("address", body.address);
  }
  if (body.mobile_number !== undefined) {
    data.append("mobile_number", body.mobile_number);
  }
  if (body.birth_date !== undefined) {
    data.append("birth_date", body.birth_date);
  }
  if (body.firstname !== undefined) {
    data.append("firstname", body.firstname);
  }
  if (body.lastname !== undefined) {
    data.append("lastname", body.lastname);
  }
  if (body.gender !== undefined) {
    data.append("gender", body.gender);
  }
  if (body.image !== undefined) {
    data.append("imageUrl", body.image);
  }
  console.log(data);
  const handleSubmit = async (event) => {
    const result = await editProfile(data);
    try {
      setBody({});
      toast.success("Profile updated!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // alert("Update Data success");
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  if (open) {
    document.body.classList.add(`${styles["active-modal"]}`);
  } else {
    document.body.classList.remove(`${styles["active-modal"]}`);
  }

  useDocumentTitle("Profile");
  return (
    <Fragment>
      <Header />
      <body className={styles["body-head"]}>
        <main className={styles["body-profile"]}>
          
          <section className={styles["main-profile"]}>
            <p className={styles["user-profile"]}>User Profile</p>
            <section className={styles["column1"]}>
              <aside className={styles["profile-photo"]}>
                <div className={styles["wrap"]}>
                
                  <Upload
                    ref={target}
                    onChange={(e) => onImageUpload(e)}
                    img={
                      imagePreview !== null
                        ? imagePreview
                        : detailImage || beardMan
                    }
                    name="image"
                  />
                </div>

                <p className={styles["maisarah"]}>{profile.name}</p>
                <p className={styles["emailprofile"]}>{profile.email}</p>
                <p className={styles["transactions"]}>
                  Has been ordered 15 products
                </p>
              </aside>
              <aside className={styles["contacts"]}>
                <form className={styles["form-contact"]}>
                  <h2 className={styles["heading-h2"]}>Contacts</h2>
                  <div className={styles["form-1"]}>
                    <div>
                      <p className={styles["form-2"]}>Email adress :</p>
                      <input
                        className={styles["input-profiles-email"]}
                        name="email"
                        value={profile.email}
                        disabled="disabled"
                      />
                    </div>
                    <div className={styles["form-3"]}>
                      <p className={styles["form-2"]}>Mobile number :</p>
                      <input
                        className={styles["input-profiles"]}
                        onChange={handlePhone}
                        name="phone"
                        value={phoneValue}
                        placeholder={"input your phone number.."}
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <p className={styles["form-2"]}>Delivery adress :</p>
                    <input
                      className={styles["input-profiles"]}
                      onChange={handleAddress}
                      name="adress"
                      value={addressValue}
                      type="text"
                    />
                  </div>
                </form>
              </aside>
            </section>

            <section className={styles["details"]}>
              <form className={styles["form1"]}>
                <h1 className={styles["detailfont"]}>Details</h1>
                <div className={styles["form-1"]}>
                  <div>
                    <p className={styles["form-2"]}>Display name :</p>
                    <input
                      className={styles["input-profile"]}
                      onChange={handleName}
                      name="name"
                      value={nameValue}
                      type="text"
                    />
                  </div>
                  <div className={styles["form-3"]}>
                    <p className={styles["form-2"]}>MM/DD/YY :</p>
                    <input
                      className={styles["input-profile"]}
                      onChange={handleBirth}
                      name="birthdate"
                      value={dateValue}
                      placeholder={null}
                      type="date"
                    />
                  </div>
                </div>

                <div className={styles["form-1x"]}>
                  <div>
                    <p className={styles["form-2"]}>First name :</p>
                    <input
                      className={styles["input-profile"]}
                      onChange={handleFirstName}
                      name="firstname"
                      value={firstNameValue}
                      type="text"
                    />
                  </div>
                  <div className={styles["form-3x"]}>
                    <div onClick={onPress2}>
                      <input
                        className={styles["input-profilez"]}
                        name="male"
                        type="radio"
                        checked={gender === "male" ? true : null}
                      />
                      <span className={styles["gender-input"]}>Male</span>
                    </div>

                    <div onClick={onPress1}>
                      <input
                        className={styles["input-profilex"]}
                        name="female"
                        type="radio"
                        checked={gender === "female" ? true : null}
                      />
                      <span className={styles["gender-input"]}>Female</span>
                    </div>
                  </div>
                </div>

                <div className={styles["form-2-wrap"]}>
                  <p className={styles["form-2"]}>Last name :</p>
                  <input
                    className={styles["input-profile"]}
                    onChange={handleLastName}
                    name="lastname"
                    value={lastNameValue}
                    type="text"
                  />
                </div>
              </form>

              <aside className={styles["buttons"]}>
                <p className={styles["askchange"]}>
                  Do you want to save the <br />
                  change?
                </p>
                <button onClick={handleSubmit} className={styles["savechange"]}>
                  Save Change
                </button>
                <ToastContainer />
                <button className={styles["cancel"]}>Cancel</button>
                <button className={styles["edit"]}>Edit Password</button>

                <button onClick={handleLogout} className={styles["logout"]}>
                  Log out
                </button>
              </aside>
            </section>
          </section>
        </main>
      </body>
      <Footer />
      <Modal
        open={open}
        setOpen={setOpen}
        title="Log out"
        body="Do you really want to log out?"
      />
    </Fragment>
  );
};

export default withNavigate(Profile);
