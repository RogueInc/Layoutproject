import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

const Cardformat = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.glass}></div>
      <Image className={styles.cardimg}
        src={`${props.Image}`
        }
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: "cover"}}
      ></Image>
      <h1 className={styles.head}>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
      <Link href='/' className={styles.readmore}>Read more...</Link>
    </div>
  );
};
export default Cardformat;
