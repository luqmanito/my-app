import React, { Component, Fragment } from "react";
import styles from "../style/homepage.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import Header from "../components/header/header";
import HeaderLogin from "../components/header/headerlogin";
import Footer from "../components/footer/footer";
import NavBar from "../components/header/NavBar";

import loc from "../assets/images/loc-icon.png";
import heart from "../assets/images/heart-icon.png";
import techpic from "../assets/images/tech-pic.jpg";
import checkmark from "../assets/images/checkmark-icon.png";
import creamy from "../assets/images/creamy-ice-latte-product.png";
import smallcheck from "../assets/images/smallcheck-icon.png";
import pinky from "../assets/images/pinky-promise.png";
import world from "../assets/images/world.png";
import netflix from "../assets/images/netflix.png";
import reddit from "../assets/images/reddit.png";
import amazon from "../assets/images/amazon.png";
import discord from "../assets/images/discord.png";
import spotify from "../assets/images/spotify.png";
import joebiden from "../assets/images/joe-biden.jpg";
import star from "../assets/images/star.png";
import putin from "../assets/images/putin.jpg";
import kim from "../assets/images/kim-photo.jpg";
import dotdot from "../assets/images/dotdot.png";
import left from "../assets/images/left.png";
import right from "../assets/images/right.png";
import coffeelogo from "../assets/images/coffee-logo.png";
import fb from "../assets/images/fb-icon.png";
import twitter from "../assets/images/twitter-icon.png";
import ig from "../assets/images/ig-icon.png";
import people from "../assets/images/people-icon.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  useDocumentTitle("Homepage");
  return (
    <Fragment>
      <main className={`container-fluid ${styles["body-home"]}`}>
        <NavBar />
        <main>
          <div className={`bg-image card shadow-1-strong ${styles["jumbo"]}`}>
            <div className="card-body text-white">
              <h5 className={`card-title ${styles["startday"]}`}>
                Start Your Day with <br />
                Coffee and Good Meals
              </h5>
              <p className={`card-text ${styles["provide"]}`}>
                We provide high quality beans, good taste, and healthy <br />
                meals made by love just for you. Start your day with us <br />
                for a bigger smile!
              </p>
              <a
                href="#!"
                className={`btn btn-primary btn-lg ${styles["started"]}`}
              >
                Get Started
              </a>
              <div className={styles["form-outline"]}>
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
          </div>

          <aside
            className={`container border rounded-3 ${styles["middle-sec"]}`}
          >
            <div className="row text-center">
              <section className={`col-4 ${styles["staff"]}`}>
                <img className={styles["people-icon"]} src={people} alt="" />
                <span className={styles["numbers"]}>90+</span>
                <p className={styles["data"]}>Staff</p>
              </section>
              <section className={`col-4 ${styles["stores"]}`}>
                <img className={styles["people-icon"]} src={loc} alt="" />
                <span className={styles["number30"]}>30+</span>
                <p className={styles["datastore"]}>Stores</p>
              </section>
              <section className={`col-4 ${styles["customers"]}`}>
                <img className={styles["people-icon"]} src={heart} alt="" />
                <span className={styles["number800"]}>800+</span>
                <p className={styles["datacs"]}>Customers</p>
              </section>
            </div>
          </aside>

          <aside className={`container ${styles["good-coffee"]}`}>
            <div className="row text-center">
              <section
                className={`col-6 justify-content-center ${styles["teamwork"]}`}
              >
                <img
                  src={techpic}
                  alt=""
                  className={`img-fluid ${styles["techpic"]}`}
                />
              </section>

              <section className={`col-6 ${styles["quality"]}`}>
                <p className={styles["healthy"]}>
                  We Provide Good Coffee <br />
                  and Healthy Meals
                </p>
                <p className={styles["todo"]}>
                  You can explore the menu that we provide with fun and <br />
                  have their own taste and make your day better.
                </p>

                <p className={styles["checklist"]}>
                  <img
                    src={checkmark}
                    alt=""
                    className={styles["checkmarks"]}
                  />
                  High quality beans
                </p>
                <p className={styles["checklist"]}>
                  <img
                    src={checkmark}
                    alt=""
                    className={styles["checkmarks"]}
                  />
                  Healthy meals, you can request the ingredients
                </p>
                <p className={styles["checklist"]}>
                  <img
                    src={checkmark}
                    alt=""
                    className={styles["checkmarks"]}
                  />
                  Chat with our staff to get better experience for ordering
                </p>
                <p className={styles["checklist"]}>
                  <img
                    src={checkmark}
                    alt=""
                    className={styles["checkmarks"]}
                  />
                  Free member card with a minimum purchase of IDR 200.000.
                </p>
              </section>
            </div>
          </aside>

          <aside className={`container-fluid ${styles["people-fav"]}`}>
            <div className="row text-center">
              <section className={`col-12 ${styles["yours"]}`}>
                <p className={styles["here"]}>Here is People's Favorite</p>
                <p className={styles["choose"]}>
                  Let's choose and have a bit taste of poeple's favorite. It
                  might be yours too!
                </p>
              </section>
            </div>
          </aside>

          <aside className={`container-fluid ${styles["middle-third"]}`}>
            <div className={`row text-center ${styles["choice"]}`}>
              <section className={`col-4 ${styles["prod-info"]}`}>
                <img
                  src={creamy}
                  alt=""
                  className={`img-fluid ${styles["hzl"]}`}
                />
                <div className={`border ${styles["wrap"]}`}>
                  <p className={styles["hazelnutsyrup"]}>Hazelnut Latte</p>
                  <div className={styles["hazel-desc"]}>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Hazelnut Syrup
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Vanilla Whipped Cream
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Ice / Hot
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Sliced Banana on Top
                    </p>
                  </div>
                  <p className={styles["price25"]}>IDR 25.000</p>
                  <button type="button" className="btn btn-outline-warning">
                    Order Now
                  </button>
                </div>
              </section>

              <section className={`col-4 ${styles["prod-info"]}`}>
                <img
                  src={pinky}
                  alt=""
                  className={`img-fluid ${styles["hzl"]}`}
                />
                <div className={`border ${styles["wrap"]}`}>
                  <p className={styles["hazelnutsyrup"]}>Pinky Promise</p>
                  <div className={styles["hazel-desc"]}>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      1 Shot of Coffee
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Vanilla Whipped Cream
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Chocolate Biscuits
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Strawberry Syrup
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Sliced strawberry on Top
                    </p>
                  </div>
                  <p className={styles["price30"]}>IDR 30.000</p>
                  <button type="button" className="btn btn-outline-warning">
                    Order Now
                  </button>
                </div>
              </section>

              <section className={`col-4 ${styles["prod-info"]}`}>
                <img
                  src={creamy}
                  alt=""
                  className={`img-fluid ${styles["hzl"]}`}
                />
                <div className={`border ${styles["wrap"]}`}>
                  <p className={styles["hazelnutsyrup"]}>Chicken Wings</p>
                  <div className={styles["hazel-desc"]}>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Wings
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Drum Sticks
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Mayonaise and Lemon
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Hot Fried
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Secret Recipe
                    </p>
                    <p className={styles["hazeldesc"]}>
                      <img
                        src={smallcheck}
                        alt=""
                        className={styles["smallcheck"]}
                      />
                      Buy 1 Get 1 only for Dine in
                    </p>
                  </div>
                  <p className={styles["price40"]}>IDR 40.000</p>
                  <button type="button" className="btn btn-outline-warning">
                    Order Now
                  </button>
                </div>
              </section>
            </div>
          </aside>

          <aside className={`container-fluid ${styles["visit-store"]}`}>
            <div className="row text-center">
              <section className={`col-12" ${styles["visit-see"]}`}>
                <p className={styles["visit"]}>
                  Visit Our Store in the <br />
                  Spot on the Map Below
                </p>
                <p className={styles["see"]}>
                  See our store in every city on the spot and spen your good day
                  there. <br />
                  See you soon!
                </p>
              </section>
            </div>
          </aside>

          <aside className={`container-fluid ${styles["worldmap"]}`}>
            <div className="row text-center">
              <section className={`col-12 ${styles["world"]}`}>
                <img className={styles["world-pic"]} src={world} alt="" />
                <p className={styles["partner"]}>Our Partner</p>
              </section>
            </div>
          </aside>

          <div className={`row ${styles["logos"]}`}>
            <div className="col">
              <img className={styles["logo"]} src={netflix} alt="" />
            </div>
            <div className="col">
              <img className={styles["logo"]} src={reddit} alt="" />
            </div>
            <div className="col">
              <img className={styles["logo"]} src={amazon} alt="" />
            </div>
            <div className="col">
              <img className={styles["logo"]} src={discord} alt="" />
            </div>
            <div className="col">
              <img className={styles["logo"]} src={spotify} alt="" />
            </div>
          </div>

          <aside className={`container-fluid ${styles["visit-store"]}`}>
            <div className="row text-center">
              <section className={`col-12" ${styles["visit-see"]}`}>
                <p className={styles["visit"]}>
                  Loved by Thousands of <br />
                  Happy Customer
                </p>
                <p className={styles["see"]}>
                  These are the stories of our customers who have visited us
                  with great <br />
                  pleasure.
                </p>
              </section>
            </div>
          </aside>

          <div className={`container-fluid row ${styles["review-wrap"]}`}>
            <div className={`col ${styles["review2"]}`}>
              <div
                className={`border text-center rounded-2 left-border w-75 ${styles["rusia"]}`}
              >
                <div className="row cs2">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-3">
                        <img
                          className={styles["joe-pic"]}
                          src={joebiden}
                          alt=""
                        />
                      </div>
                      <div className="col-9">
                        <p className={styles["putin"]}>Joe Biden</p>
                        <p className={styles["moskwa"]}>Washington, USA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className={styles["rating2"]}>4.5</span>
                    <img src={star} alt="" className={styles["stars2"]} />
                  </div>
                </div>
                <p className={styles["statement2"]}>
                  “Our future cannot depend on the government alone. The
                  ultimate solutions lie in the attitudes <br />
                  and the actions of the American people.
                </p>
              </div>
            </div>

            <div className={`col ${styles["review2"]}`}>
              <div
                className={`border text-center rounded-2 left-border w-75 ${styles["rusia"]}`}
              >
                <div className="row cs2">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-3">
                        <img
                          className={styles["putin-pic"]}
                          src={putin}
                          alt=""
                        />
                      </div>
                      <div className="col-9">
                        <p className={styles["putin"]}>Vladimir Putin</p>
                        <p className={styles["moskwa"]}>Moskwa, Rusia</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className={styles["rating2"]}>4.5</span>
                    <img src={star} alt="" className={styles["stars2"]} />
                  </div>
                </div>
                <p className={styles["statement2"]}>
                  “Russia is a part of European culture. <br />
                  Therefore, it is with difficulty that I imagine NATO as an
                  enemy.
                </p>
              </div>
            </div>

            <div className={`col ${styles["review2"]}`}>
              <div
                className={`border text-center rounded-2 left-border w-75 ${styles["rusia"]}`}
              >
                <div className="row cs2">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-3">
                        <img className={styles["kim-pic"]} src={kim} alt="" />
                      </div>
                      <div className="col-9">
                        <p className={styles["putin"]}>Kim Jong Un</p>
                        <p className={styles["pyongyang"]}>Pyongyang, Korea</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <span className={styles["rating3"]}>4.5</span>
                    <img src={star} alt="" className={styles["stars2"]} />
                  </div>
                </div>
                <p className={styles["statement2"]}>
                  “When young people are powerful, our Party <br />
                  and People's Army are powerful, and there is <br />
                  nothing for us to be afraid of.
                </p>
              </div>
            </div>
          </div>

          <div className={`row ${styles["navbar"]}`}>
            <div className="col">
              <img src={dotdot} alt="" className={styles["dotdot"]} />
            </div>
            <div className={`col ${styles["leftright"]}`}>
              <img className={styles["left-pic"]} src={left} alt="" />
              <img className={styles["right-pic"]} src={right} alt="" />
            </div>
          </div>
          <Footer />
          <section className={styles["member-card"]}>
            <aside className={styles["member-desc"]}>
              <p className={styles["getmember"]}>
                Check our promo
                <br />
                today!
              </p>
              <p className={styles["letsjoin"]}>
                Let's see the deals and pick yours!
              </p>
            </aside>
            <aside>
              <button className={styles["createnow"]}>See Promo</button>
            </aside>
          </section>
        </main>
      </main>
    </Fragment>
  );
};

export default Homepage;
