import cn from "classnames";
import Button from "components/Button/Button";
import Container from "components/Container/Container";
import useMediaQuery from "hooks/useMediaQuery";
import { queries } from "constants/mediaQueries";
import styles from "./MainScreen.module.css";

const MainScreen = () => {
  const isMd = useMediaQuery(queries.up.md);
  return (
    <Container as="section" className={styles.container}>
      <div className={styles.leftContent}>
        <h1 className={styles.leftContentTitle}>
          Зарабатывайте больше <br />
          <strong className={styles.leftGradientText}>с WELBEX</strong>
        </h1>
        <p className={styles.leftContentText}>
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <div className={styles.rightContent}>
        <h2 className={styles.rightContentTitle}>
          Вместе с{" "}
          <strong
            className={cn(styles.rightGradientText, styles.rightGradient1)}
          >
            бесплатной
          </strong>{" "}
          <br />
          <strong
            className={cn(styles.rightGradientText, styles.rightGradient2)}
          >
            консультацией
          </strong>{" "}
          мы дарим:
        </h2>
        <div className={styles.grid}>
          {isMd ? (
            <>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Виджеты</h3>
                <p className={styles.cardDescription}>
                  30 готовых <br /> решений
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Dashboard</h3>
                <p className={styles.cardDescription}>
                  с показателями <br /> вашего бизнеса
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Skype Аудит</h3>
                <p className={styles.cardDescription}>
                  отдела продаж <br /> и CRM системы
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>35 дней</h3>
                <p className={styles.cardDescription}>
                  использования <br /> CRM
                </p>
              </div>
            </>
          ) : (
            <>
              <span className={styles.label}>Skype аудит</span>
              <span className={styles.label}>30 виджетов</span>
              <span className={styles.label}>Dashboard</span>
              <span className={styles.label}>Месяц аmoCRM</span>
            </>
          )}
        </div>
        <Button className={styles.button}>Получить консультацию</Button>
      </div>
    </Container>
  );
};

export default MainScreen;
