import styles from "./Hero.module.css";
import Marquee from "react-fast-marquee";


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.stuffsection}>
        <div className={styles.leftdiv}>
          <center>
            <div className={styles.content}>
              <div className={styles.text}>
                <h1>
                  Duis do et est sit do nostrud nostrud consequat mollit sint
                  quis mollit nisi.
                </h1>
              </div>
            </div>
          </center>
        </div>
        <div className={styles.rightdiv}>
          {/* <Image
            src="https://cdn.pixabay.com/photo/2016/10/18/19/33/tree-1751178_1280.png"
            width={300}
            height={400}
            className={styles.flower}
          ></Image> */}
        </div>
      </div>
      <Marquee className={styles.mainmarq}>
        <div>
            <h1>
            <span>lorem</span>
          <span>ipsum</span>
          <span>dora</span>
          <span>aima</span>
          <span>voluptate</span>
          <span>cillum</span>
          <span>laboris</span>
            </h1>
         
        </div>
      </Marquee>
    </section>
  );
}
