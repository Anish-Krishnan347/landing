import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div style={{width:'100vw',height:"100vh",backgroundColor:"#0A2342"}}>
        <h1>WELCOME BACK ANISH KRISHNAN</h1>
      </div>
    </div>
  );
}
