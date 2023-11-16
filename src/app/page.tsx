import Image from "next/image";
import styles from "./page.module.css";
import { CardList, CategoryList, FeatureItems, Menu } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <FeatureItems />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu/>
      </div>
    </div>
  );
}
