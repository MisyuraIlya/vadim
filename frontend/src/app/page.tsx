'use client'
import Image from "next/image";
import styles from "./page.module.css";
import useData from "@/hook/useData";

export default function Home() {

  const {data} = useData()
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello Labs
        </p>
        <div>
        {data?.map((item) => 
          <div>
            {item.id} - {item.title}
          </div>
        )}
        </div>
      </div>

      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <h2>Labs value:</h2>
        <div>
        {data?.map((item) => 
          <div>
             <h2> id:{item.id} - value: {item.title} </h2>
           
          </div>
        )}
        </div>
    
      </div>

      <div className={styles.grid}>

      </div>
    </main>
  );
}
