import Link from 'next/link';
import styles from './Nav.module.css'
export default function Navbar(){
return(
<div className={styles.navbar}>
      <div className={styles.logobox}>
        <div className={styles.logo}>DesgTemp</div>
      </div>

      <div className={styles.menu}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
      </div>
      <div className={styles.social}>
        <button>Support</button>
      </div>
    </div>
);
}