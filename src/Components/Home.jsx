import React from "react";
import styles from "../css/home.module.css";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

function Home() {
  const width = window.screen.width;

  const show = () => {
    document.querySelector("#mobileOverlay").style.display = "block";
  };

  const hide = () => {
    document.querySelector("#mobileOverlay").style.display = "none";
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <svg
          className={styles.logo}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <hr className={styles.crossedLine} />

        <div className={styles.nav}>
          <ul className={styles.navUl}>
            <li className={styles.navLi}>
              <a id={styles.home} href="/">
                <span className={styles.nums}>00</span>{" "}
                <span className={styles.navName}>Home</span>
              </a>
            </li>
            <li className={styles.navLi}>
              <a id={styles.destination} href="destination">
                <span className={styles.nums}>01</span>{" "}
                <span className={styles.navName}>Destination</span>
              </a>
            </li>
            <li className={styles.navLi}>
              <a id={styles.crew} href="crew">
                <span className={styles.nums}>02</span>{" "}
                <span className={styles.navName}>Crew</span>
              </a>
            </li>
            <li className={styles.navLi}>
              <a id={styles.technology} href="technology">
                <span className={styles.nums}>03</span>{" "}
                <span className={styles.navName}>Technology</span>
              </a>
            </li>
          </ul>
        </div>

        <div onClick={() => show()} className={styles.mobileNav}>
          <BsList />
        </div>
        <div id="mobileOverlay" className={styles.overlay}>
          <ul className={styles.mobileNavLists}>
            <li className={styles.mobileNavItems}>
              <a href="/">
                <b>00</b>{" "}
                <span id={styles.mobileHome} className={styles.mobileNavName}>
                  Home
                </span>
              </a>
            </li>
            <li className={styles.mobileNavItems}>
              <a href="destination">
                <b>01</b>{" "}
                <span
                  id={styles.mobileDestination}
                  className={styles.mobileNavName}
                >
                  Destination
                </span>
              </a>
            </li>
            <li className={styles.mobileNavItems}>
              <a href="crew">
                <b>02</b>{" "}
                <span id={styles.mobileCrew} className={styles.mobileNavName}>
                  Crew
                </span>
              </a>
            </li>
            <li className={styles.mobileNavItems}>
              <a href="technology">
                <b>03</b>{" "}
                <span
                  id={styles.mobileTechnology}
                  className={styles.mobileNavName}
                >
                  Technology
                </span>
              </a>
            </li>
          </ul>
          <span onClick={() => hide()} className={styles.cancleIcon}>
            <BsXLg />
          </span>
        </div>
      </div>

      <div className={styles.texts}>
        <p className={styles.firstLine}>So, you want to travel to</p>
        <p className={styles.space}>space</p>

        <p className={styles.lastPara}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <a className={styles.exploreLink} href="destination">
        <p className={width > "900" ? styles.exploreDesktop : styles.explore}>
          explore
        </p>
      </a>
    </div>
  );
}

export default Home;
