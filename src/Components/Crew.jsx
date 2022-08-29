import React, { useState } from "react";
import styles from "../css/crew.module.css";
import Data from "../data.json";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

function Crew() {
  const [id, setId] = useState(0);
  const data = Data.crew;
  const width = window.screen.width;

  let name = "";
  let png = "";
  let role = "";
  let bio = "";

  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      name = data[i].name;
      png = data[i].images.png;
      role = data[i].role;
      bio = data[i].bio;
    }
  }

  const show = () => {
    document.querySelector("#mobileOverlay").style.display = "block";
  }

  const hide = () => {
    document.querySelector("#mobileOverlay").style.display = "none";
  }

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
                <span className={styles.nums}>00</span>
                <span className={styles.navName}>Home</span>
              </a>
            </li>
            <li className={styles.navLi}>
              <a id={styles.destination} href="destination">
                <span className={styles.nums}>01</span>
                <span className={styles.navName}>Destination</span>
              </a>
            </li>
            <li className={styles.navLi}>
              <a id={styles.crew} href="crew">
                <span className={styles.nums}>02</span>
                <span className={styles.navName}>Crew</span>
              </a>
            </li>
            <li className={styles.navLi}>
              <a id={styles.technology} href="technology">
                <span className={styles.nums}>03</span>
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
            <li className={styles.mobileNavItems}><a href="/"><b>00</b> <span id={styles.mobileHome} className={styles.mobileNavName}>Home</span></a></li>
            <li className={styles.mobileNavItems}><a href="destination"><b>01</b> <span id={styles.mobileDestination} className={styles.mobileNavName}>Destination</span></a></li>
            <li className={styles.mobileNavItems}><a href="crew"><b>02</b> <span id={styles.mobileCrew} className={styles.mobileNavName}>Crew</span></a></li>
            <li className={styles.mobileNavItems}><a href="technology"><b>03</b> <span id={styles.mobileTechnology} className={styles.mobileNavName}>Technology</span></a></li>
          </ul>
          <span onClick={() => hide()} className={styles.cancleIcon}><BsXLg /></span>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.topTexts}>
          <span className={styles.num}>02 </span>
          <span className={styles.title}> Meet your crew</span>
        </p>

        <div className={styles.mainContents}>
        <div className={styles.leftSide}>
            <p className={styles.nameAndPosition}>
              <span className={styles.position}>{role}</span> <br id={styles.brOne} /> <br id={styles.brTwo} />
              <span className={styles.name}>{name}</span>
            </p>
            <p className={styles.info}>{bio}</p>
          </div>
          <div className={styles.rightSide}>
            <img
              className={width > "900" ? styles.imgDesktop : styles.img}
              src={png}
              alt="Douglas Hurley"
            />
          </div>
        </div>

        <div className={styles.dotContainer}>
          {data.map((dataa, index) => (
            <div onClick={(_) => setId(index)} className={`${styles.dot} ${index === id ? styles.active : styles.dot}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Crew;
