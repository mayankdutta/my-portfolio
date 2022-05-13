import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { Grommet, Paragraph, Button } from "grommet";

import illustration from "../public/images/coding_illustration.svg";
import PieChart from "../components/PieChart";

export default function Home() {
  return (
    <Grommet plain>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <section className={styles.headerSection}>
            <div>
              <h1 className={styles.title}>Welcome to Hiba's portfolio</h1>
              <Paragraph className={styles.description}>
                Front End Web Developer, Passionate about UI/UX, Learning
                Backend Developement
              </Paragraph>
              <section className={styles.flex}>
                <Link href="/contact">
                  <a>
                    <Button
                      primary
                      label="Let's get in touch!"
                      className={`${styles.btn} ${styles.mr1}`}
                    />
                  </a>
                </Link>
                <Link href="/about">
                  <a className={styles.link}>More about me</a>
                </Link>
              </section>
            </div>

            <Image
              src={illustration}
              alt="coding girl illustration"
              className={styles.headerImage}
              width={700}
              height={700}
            />
          </section>

          <PieChart />
        </main>
      </div>
    </Grommet>
  );
}
