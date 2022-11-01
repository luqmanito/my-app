import React, { Component, Fragment } from "react";
import styles from "../style/homepage.module.css";
import { useDocumentTitle } from "../helpers/page-title";
import Header from "../components/header/header";
import HeaderLogin from "../components/header/headerlogin";
import Footer from "../components/footer/footer";

import loc from "../assets/img/loc-icon.png";
import heart from "../assets/img/heart-icon.png";
import techpic from "../assets/img/tech-pic.jpg";
import checkmark from "../assets/img/checkmark-icon.png";
import creamy from "../assets/img/creamy-ice-latte-product.png";
import smallcheck from "../assets/img/smallcheck-icon.png";
import pinky from "../assets/img/pinky-promise.png";
import world from "../assets/img/world.png";
import netflix from "../assets/img/netflix.png";
import reddit from "../assets/img/reddit.png";
import amazon from "../assets/img/amazon.png";
import discord from "../assets/img/discord.png";
import spotify from "../assets/img/spotify.png";
import joebiden from "../assets/img/joe-biden.jpg";
import star from "../assets/img/star.png";
import putin from "../assets/img/putin.jpg";
import kim from "../assets/img/kim-photo.jpg";
import dotdot from "../assets/img/dotdot.png";
import left from "../assets/img/left.png";
import right from "../assets/img/right.png";
import coffeelogo from "../assets/img/coffee-logo.png";
import fb from "../assets/img/fb-icon.png";
import twitter from "../assets/img/twitter-icon.png";
import ig from "../assets/img/ig-icon.png";
import people from "../assets/img/people-icon.png"
import { Link } from "react-router-dom";




const Homepage = () => {
  
    useDocumentTitle("Homepage")
    return (
      <Fragment>
        <body class={`container-fluid ${styles["body-home"]}`}>
          
          <HeaderLogin />

          
          <main>
            <div
              class={`bg-image card shadow-1-strong ${styles["jumbo"]}`}
            >
              <div class="card-body text-white">
                <h5 class={`card-title ${styles["startday"]}`}>
                  Start Your Day with <br />
                  Coffee and Good Meals
                </h5>
                <p class={`card-text ${styles["provide"]}`}>
                  We provide high quality beans, good taste, and healthy <br />
                  meals made by love just for you. Start your day with us <br />
                  for a bigger smile!
                </p>
                <a
                  href="#!"
                  class={`btn btn-primary btn-lg ${styles["started"]}`}
                >
                  Get Started
                </a>
                <div class={styles["form-outline"]}>
                    <input type="search" id="form1" class="form-control" placeholder="Search" aria-label="Search" />
                  </div>
              </div>
            </div>

            <aside
              class={`container border rounded-3 ${styles["middle-sec"]}`}
              
            >
              <div class="row text-center">
                <section class={`col-4 ${styles["staff"]}`}>
                  <img class={styles["people-icon"]}
                    src={people}
                    alt=""
                  />
                  <span class={styles["numbers"]}>90+</span>
                  <p class={styles["data"]}>Staff</p>
                </section>
                <section class={`col-4 ${styles["stores"]}`}>
                  <img class={styles["people-icon"]} src={loc} alt=""  />
                  <span class={styles["number30"]}>30+</span>
                  <p class={styles["datastore"]}>Stores</p>
                </section>
                <section class={`col-4 ${styles["customers"]}`}>
                  <img class={styles["people-icon"]} src={heart} alt=""  />
                  <span class={styles["number800"]}>800+</span>
                  <p class={styles["datacs"]}>Customers</p>
                </section>
              </div>
            </aside>

            <aside class={`container ${styles["good-coffee"]}`}>
              <div class="row text-center">
                <section
                  class={`col-6 justify-content-center ${styles["teamwork"]}`}
                >
                  <img
                    src={techpic}
                    alt=""
                    
                    class={styles["techpic"]}
                  />
                </section>

                <section
                  class={`col-6 ${styles["quality"]}`}
                >
                  <p class={styles["healthy"]}>
                    We Provide Good Coffee <br />
                    and Healthy Meals
                  </p>
                  <p class={styles["todo"]}>
                    You can explore the menu that we provide with fun and <br />
                    have their own taste and make your day better.
                  </p>

                  <p class={styles["checklist"]}>
                    <img
                      src={checkmark}
                      alt=""
                      class={styles["checkmarks"]}
                    />
                    High quality beans
                  </p>
                  <p class={styles["checklist"]}>
                    <img
                      src={checkmark}
                      alt=""
                      class={styles["checkmarks"]}
                    />
                    Healthy meals, you can request the ingredients
                  </p>
                  <p class={styles["checklist"]}>
                    <img
                      src={checkmark}
                      alt=""
                      class={styles["checkmarks"]}
                    />
                    Chat with our staff to get better experience for ordering
                  </p>
                  <p class={styles["checklist"]}>
                    <img
                      src={checkmark}
                      alt=""
                      class={styles["checkmarks"]}
                    />
                    Free member card with a minimum purchase of IDR 200.000.
                  </p>
                </section>
              </div>
            </aside>

            <aside class={`container-fluid ${styles["people-fav"]}`}>
              <div class="row text-center">
                <section
                  class={`col-12 ${styles["yours"]}`}
                  
                >
                  <p class={styles["here"]}>Here is People's Favorite</p>
                  <p class={styles["choose"]}>
                    Let's choose and have a bit taste of poeple's favorite. It
                    might be yours too!
                  </p>
                </section>
              </div>
            </aside>

            <aside class={`container-fluid ${styles["middle-third"]}`}>
              <div class={`row text-center ${styles["choice"]}`}>
                <section
                  class={`col-4 ${styles["prod-info"]}`}
                 
                >
                  <img
                    src={creamy}
                    alt=""
                   
                    class={styles["hzl"]}
                  />
                  <div class={`border ${styles["wrap"]}`}>
                    <p class={styles["hazelnutsyrup"]}>Hazelnut Latte</p>
                    <div class={styles["hazel-desc"]}>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                          
                        />
                        Hazelnut Syrup
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Vanilla Whipped Cream
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Ice / Hot
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Sliced Banana on Top
                      </p>
                    </div>
                    <p class={styles["price25"]}>IDR 25.000</p>
                    <button type="button" class="btn btn-outline-warning">
                      Order Now
                    </button>
                  </div>
                </section>

                <section
                  class={`col-4 ${styles["prod-info"]}`}
                  
                >
                  <img
                    src={pinky}
                    alt=""
                    class={styles["hzl"]}
                  />
                  <div class={`border ${styles["wrap"]}`}>
                    <p class={styles["hazelnutsyrup"]}>Pinky Promise</p>
                    <div class={styles["hazel-desc"]}>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        1 Shot of Coffee
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Vanilla Whipped Cream
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Chocolate Biscuits
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Strawberry Syrup
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Sliced strawberry on Top
                      </p>
                    </div>
                    <p class={styles["price30"]}>IDR 30.000</p>
                    <button type="button" class="btn btn-outline-warning">
                      Order Now
                    </button>
                  </div>
                </section>

                <section
                  class={`col-4 ${styles["prod-info"]}`}
                  
                >
                  <img
                    src={creamy}
                    alt=""
                    
                    class={styles["hzl"]}
                  />
                  <div class={`border ${styles["wrap"]}`}>
                    <p class={styles["hazelnutsyrup"]}>Chicken Wings</p>
                    <div class={styles["hazel-desc"]}>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Wings
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Drum Sticks
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Mayonaise and Lemon
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Hot Fried
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Secret Recipe
                      </p>
                      <p class={styles["hazeldesc"]}>
                        <img
                          src={smallcheck}
                          alt=""
                          class={styles["smallcheck"]}
                        />
                        Buy 1 Get 1 only for Dine in
                      </p>
                    </div>
                    <p class={styles["price40"]}>IDR 40.000</p>
                    <button type="button" class="btn btn-outline-warning">
                      Order Now
                    </button>
                  </div>
                </section>
              </div>
            </aside>

            <aside class={`container-fluid ${styles["visit-store"]}`}>
              <div class="row text-center">
                <section class={`col-12" ${styles["visit-see"]}`}>
                  <p class={styles["visit"]}>
                    Visit Our Store in the <br />
                    Spot on the Map Below
                  </p>
                  <p class={styles["see"]}>
                    See our store in every city on the spot and spen your good
                    day there. <br />
                    See you soon!
                  </p>
                </section>
              </div>
            </aside>

            <aside
              class={`container-fluid ${styles["worldmap"]}`}
            >
              <div class="row text-center">
                <section
                  class={`col-12 ${styles["world"]}`}
                  
                >
                  <img class={styles["world-pic"]} src={world} alt=""/>
                  <p class={styles["partner"]}>Our Partner</p>
                </section>
              </div>
            </aside>

            <div
              class={`row ${styles["logos"]}`}
            >
              <div class="col">
                <img
                  class={styles["logo"]}
                  src={netflix}
                  alt=""
                  
                />
              </div>
              <div class="col">
                <img
                  class={styles["logo"]}
                  src={reddit}
                  alt=""
                 
                />
              </div>
              <div class="col">
                <img
                  class={styles["logo"]}
                  src={amazon}
                  alt=""
                 
                />
              </div>
              <div class="col">
                <img
                  class={styles["logo"]}
                  src={discord}
                  alt=""
                 
                />
              </div>
              <div class="col">
                <img
                  class={styles["logo"]}
                  src={spotify}
                  alt=""
                  
                />
              </div>
            </div>

            <aside class={`container-fluid ${styles["visit-store"]}`}>
              <div class="row text-center">
                <section class={`col-12" ${styles["visit-see"]}`}>
                  <p class={styles["visit"]}>
                    Loved by Thousands of <br />
                    Happy Customer
                  </p>
                  <p class={styles["see"]}>
                  These are the stories of our customers who have visited us with great  <br />
                  pleasure.
                  </p>
                </section>
              </div>
            </aside>

            <div class={`container-fluid row ${styles["review-wrap"]}`}>
              <div
                class={`col ${styles["review2"]}`}
                
              >
                <div
                  class={`border text-center rounded-2 left-border w-75 ${styles["rusia"]}`}
                >
                  <div class="row cs2">
                    <div class="col-8">
                      <div class="row">
                        <div class="col-3">
                          <img class={styles["joe-pic"]}
                            src={joebiden}
                            alt=""
                            
                          />
                        </div>
                        <div class="col-9">
                          <p class={styles["putin"]}>Joe Biden</p>
                          <p class={styles["moskwa"]}>Washington, USA</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <span class={styles["rating2"]}>4.5</span>
                      <img 
                        src={star}
                        alt=""
                        
                        class={styles["stars2"]}
                      />
                    </div>
                  </div>
                  <p class={styles["statement2"]}>
                    “Our future cannot depend on the government alone. The
                    ultimate solutions lie in the attitudes <br />
                    and the actions of the American people.
                  </p>
                </div>
              </div>

              <div
                class={`col ${styles["review2"]}`}
                
              >
                <div
                  class={`border text-center rounded-2 left-border w-75 ${styles["rusia"]}`}
                >
                  <div class="row cs2">
                    <div class="col-8">
                      <div class="row">
                        <div class="col-3">
                          <img class={styles["putin-pic"]}
                            src={putin}
                            alt=""
                           
                          />
                        </div>
                        <div class="col-9">
                          <p class={styles["putin"]}>Vladimir Putin</p>
                          <p class={styles["moskwa"]}>Moskwa, Rusia</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <span class={styles["rating2"]}>4.5</span>
                      <img
                        src={star}
                        alt=""
                        class={styles["stars2"]}
                      />
                    </div>
                  </div>
                  <p class={styles["statement2"]}>
                    “Russia is a part of European culture. <br />
                    Therefore, it is with difficulty that I imagine NATO as an
                    enemy.
                  </p>
                </div>
              </div>

              <div class={`col ${styles["review2"]}`}>
                <div
                  class={`border text-center rounded-2 left-border w-75 ${styles["rusia"]}`}
                >
                  <div class="row cs2">
                    <div class="col-8">
                      <div class="row">
                        <div class="col-3">
                          <img class={styles["kim-pic"]}
                            src={kim}
                            alt=""
                          
                          />
                        </div>
                        <div class="col-9">
                          <p class={styles["putin"]}>Kim Jong Un</p>
                          <p class={styles["pyongyang"]}>Pyongyang, Korea</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4">
                      <span class={styles["rating3"]}>4.5</span>
                      <img
                        src={star}
                        alt=""
                        
                        class={styles["stars2"]}
                      />
                    </div>
                  </div>
                  <p class={styles["statement2"]}>
                    “When young people are powerful, our Party <br />
                    and People's Army are powerful, and there is <br />
                    nothing for us to be afraid of.
                  </p>
                </div>
              </div>
            </div>

            <div class={`row ${styles["navbar"]}`}>
              <div class="col">
                <img
                  src={dotdot}
                  alt=""
                  
                  class={styles["dotdot"]}
                />
              </div>
              <div class={`col ${styles["leftright"]}`}>
                <img class={styles["left-pic"]}
                  src={left}
                  alt=""
                  
                />
                <img class={styles["right-pic"]}
                  src={right}
                  alt=""
                 
                />
              </div>
            </div>

            <section class={styles["member-card"]}>
              <aside class={styles["member-desc"]}>
                <p class={styles["getmember"]}>
                  Check our promo
                  <br />
                  today!
                </p>
                <p class={styles["letsjoin"]}>
                  Let's see the deals and pick yours!
                </p>
              </aside>
              <aside>
                <button class={styles["createnow"]}>See Promo</button>
              </aside>
            </section>
          </main>



          <footer class={styles["footer-home"]}>
            <aside class={styles["about-coffe"]}>
              <img class={styles["coffee-logo"]}
                src={coffeelogo}
                alt="coffee-icon"
              />
              <span class={styles["coffeeshp"]}>Coffee Shop</span> <br />
              <p class={styles["coffee-desc"]}>
                Coffee Shop is a store that sells some good <br />
                meals, and especially coffee. We provide <br />
                high quality beans
              </p>
              <aside class={styles["socmed"]}>
                <img class={styles["socmed-icon"]} src={fb} alt=""  />
                <img class={styles["socmed-icon"]} src={twitter} alt="" />
                <img class={styles["socmed-icon"]} src={ig} alt=""  />
                <p class={styles["socmed-url"]}>@2022CoffeeStore</p>
              </aside>
            </aside>
            <aside class={styles["product-info"]}>
              <p class={styles["products"]}>Product</p>

              <p class={styles["download-content"]}>
                Download
                <br />
                <br />
                Pricing <br />
                <br />
                Locations <br />
                <br />
                Countries <br />
                <br />
                Blog
              </p>
            </aside>
            <aside class={styles["engagement"]}>
              <p class={styles["engage"]}>Engage</p>
              <p class={styles["engage-content"]}>
                Coffee Shop ?<br />
                <br />
                FAQ
                <br />
                <br />
                About Us
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                Terms of Service
              </p>
            </aside>
          </footer>
        </body>
      </Fragment>
    );
  }


export default Homepage;
