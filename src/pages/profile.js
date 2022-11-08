import React, { useState, useEffect, Fragment } from "react";
import styles from "../style/profile.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import withNavigate from "../helpers/withNavigate";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import coffeebeanscropped from "../assets/img/coffeebeanscropped.jpg";
import beardMan from "../assets/img/beard-man.jpg";
import editicon from "../assets/img/edit-icon.png"
import { useParams } from "react-router-dom";
import { getProfile, editProfile } from "../helpers/tools";
import { useDispatch, useSelector } from "react-redux";


const Profile = ({navigate}) => {

const handleClick=()=> {
  localStorage.clear()
  // window.location.reload()
  alert("Logout Sucessfully!")
  navigate("/login")
}

const [profile, setProfile] = useState({});
const [body, setBody] = useState({});

const handleAddress = (e) => {
  setBody({ ...body, 
    address: e.target.value,
   });
};
const handleEmail = (e) => {
  setBody({ ...body, 
    email: e.target.value, 
   });
};
const handlePhone = (e) => {
  setBody({ ...body,   
   mobile_number: e.target.value, 
   });
};
const handleName = (e) => {
  setBody({ ...body, 
    name: e.target.value,  
   });
};
const handleBirth = (e) => {
  setBody({ ...body,    
   birth_date: e.target.value,  
   });
};
const handleFirstName = (e) => {
  setBody({ ...body, 
    firstname: e.target.value,
   });
};
const handleLastName = (e) => {
  setBody({ ...body, 
    lastname: e.target.value
   });
};

const getDataProfile = async () => {
  try {
    const result = await getProfile();
    setProfile(result.data.result[0]);
    console.log(result.data.result[0]);
  } catch (error) {
    if (error.response.data.statusCode === 403) {
      navigate("/login");
    }
  }
};

const handleSubmit = async (event) => {
  try {
    const result = await editProfile(body);
    // console.log(event.target.ema il);
    setBody({})
    alert("Update Data success");
    window.location.reload()
  } catch (error) {
    console.log(error);
   
  }
};

useEffect(() => {
  getDataProfile();
}, []);
const [gender, setGender] = useState(`${profile.gender}`);

  useDocumentTitle("Profile")
    return (
      <Fragment>
        <Header />
        <body className={styles["body-head"]}>  
        <main className={styles["body-profile"]}>
        
        <img
          src={coffeebeanscropped}
          alt="main-bg-img"
          width="1440px"
          className={styles["main-bg-img"]}
        />
        <section className={styles["main-profile"]}>
          <p className={styles["user-profile"]}>User Profile</p>
          <section className={styles["column1"]}>
            <aside className={styles["profile-photo"]}>
              <div className={styles["wrap"]}>
                <img
                  src={beardMan}
                  className={styles["main-profile-img"]}
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
                <h2>Contacts</h2>
                <img src={editicon} alt="" className={styles["editicon"]} />
                <div className={styles["column1"]}>
                  <p className={styles["email"]} type="Email adress :">
                    <input className={styles["input-profile"]} onChange={handleEmail} name="email" placeholder={profile.email}/>
                    
                  </p>
                  <p className={styles["mobilenum"]} type="Mobile number :">
                    <input className={styles["input-profile"]} onChange={handlePhone} name="phone" placeholder={profile.mobile_number} />
                  </p>
                </div>
                <p className={styles["delivadd"]} type="Delivery adress :">
                  <input className={styles["input-profile"]} onChange={handleAddress} name="adress" placeholder={profile.address} />
                </p>
              </form>
            </aside>
          </section>

          <section className={styles["details"]}>
            <form className={styles["form1"]}>
              <h1 className={styles["detailfont"]}>Details</h1>
              <div className={styles["column2"]}>
                <p className={styles["displayname"]} type="Display name :">
                  <input className={styles["input-profile"]} onChange={handleName} name="name" placeholder={profile.name} />
                </p>
                <p className={styles["firstname"]} type="DD/MM/YY :">
                  <input className={styles["input-profile"]} onChange={handleBirth} name="birthdate" placeholder={profile.birth_date} />
                </p>
              </div>
              <p className={styles["lastname"]} type="First name :">
                <input className={styles["input-profile"]} onChange={handleFirstName} name="firstname" placeholder={profile.firstname} />
              </p>

              <p className={styles["date"]} type="Last name :">
                <input className={styles["input-profile"]} onChange={handleLastName} name="lastname" placeholder={profile.lastname} />
              </p>

              <section className={styles["radiobtn"]}>
                <div className={styles["malefemale"]}>
                  <input className={styles["input-profile"]}
                    type="radio"
                    id="contactChoice1"
                    name="contact"
                    value="gender"
                    checked={gender}
                  />
                  <label className={styles["genders"]} for="gender1">Male</label>
                  <br />
                  <input className={styles["input-profile"]}
                    type="radio"
                    id="contactChoice2"
                    name="contact"
                    value="gender"
                    checked={gender}
                  />
                  <label className={styles["genders"]} for="gender2">Female</label>
                </div>
              </section>
            </form>

            <aside className={styles["buttons"]}>
              <p className={styles["askchange"]}>
                Do you want to save the <br />
                change?
              </p>  
              <button onClick={handleSubmit} className={styles["savechange"]}>Save Change</button>
              <button className={styles["cancel"]}>Cancel</button>
              <button className={styles["edit"]}>Edit Password</button>

           

              <button onClick={handleClick} className={styles["logout"]}>Log out</button>


            </aside>
          </section>
        </section>
      
        </main>
        
        </body>
        <Footer/>
    
      </Fragment>
    );
  }


export default withNavigate(Profile);
