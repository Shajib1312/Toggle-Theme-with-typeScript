import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { AuthLinks, ToggleTheme } from "..";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        <Image src="/linkedin.png" alt="linkedin" height={24} width={24} />
        <Image src="/facebook.png" alt="facebook" height={24} width={24} />
        <Image src="/youtube.png" alt="youtube" height={24} width={24} />
        <Image src="/twitter.png" alt="twitter" height={24} width={24} />
      </div>
      <div className={styles.logo}>
        <Link href="/">techpoint</Link>
      </div>
      <div className={styles.links}>
        <ToggleTheme />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};
export default Navbar;
