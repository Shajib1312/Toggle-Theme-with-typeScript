import Link from "next/link";
import styles from "./authLinks.module.css";
const AuthLinks = () => {
  const status: string = "authenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link className={styles.write} href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};
export default AuthLinks;
