import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Search from "./_search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Autocomplete</title>
        <meta name="description" content="Autocomplete project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Search />
        </div>
      </main>
    </>
  );
}
