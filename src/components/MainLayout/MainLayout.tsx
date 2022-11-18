import styles from "./MainLayout.module.css";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import redBall from "assets/redBall.png";
import redBallSmall from "assets/redBallSmall.png";
import purpleBall from "assets/purpleBall.png";
import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
      <span className={styles.purpleLight} />
      <span className={styles.redLight} />
      <img
        src={redBall}
        className={styles.redBall}
        alt={"decorated red ball"}
      />
      <img
        src={purpleBall}
        className={styles.purpleBall}
        alt={"decorated purple ball"}
      />
      <img
        src={redBallSmall}
        className={styles.redBallSmall}
        alt={"decorated red small ball"}
      />
    </>
  );
};

export default MainLayout;
