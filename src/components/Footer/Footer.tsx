import cn from "classnames";
import Container from "components/Container/Container";
import useMediaQuery from "hooks/useMediaQuery";
import { queries } from "constants/mediaQueries";
import { ReactComponent as Telegram } from "assets/telegram.svg";
import { ReactComponent as Viber } from "assets/viber.svg";
import { ReactComponent as Whatsapp } from "assets/whatsapp.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  const isMd = useMediaQuery(queries.up.md);
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col3}>
            <h3 className={styles.title}>О Компании</h3>
            <div className={styles.row}>
              <div className={styles.col}>
                <a className={cn(styles.text, styles.link)}>
                  Партнерская программа
                </a>
                <a className={cn(styles.text, styles.link)}>Вакансии</a>
              </div>
            </div>
          </div>
          <div className={styles.col6}>
            <h3 className={styles.title}>Меню</h3>
            <div className={styles.row}>
              <div className={styles.col}>
                <a className={cn(styles.text, styles.link)}>Расчет стоимости</a>
                <a className={cn(styles.text, styles.link)}>Услуги</a>
                <a className={cn(styles.text, styles.link)}>Виджеты</a>
                <a className={cn(styles.text, styles.link)}>Интеграции</a>
                <a className={cn(styles.text, styles.link)}>Наши клиенты</a>
              </div>
              <div className={styles.col}>
                <a className={cn(styles.text, styles.link)}>
                  Благодарственные письма
                </a>
                <a className={cn(styles.text, styles.link)}>Кейсы</a>
                <a className={cn(styles.text, styles.link)}>Сертификаты</a>
                <a className={cn(styles.text, styles.link)}>Блог на Youtube</a>
                <a className={cn(styles.text, styles.link)}>Вопрос / Ответ</a>
              </div>
            </div>
          </div>
          <div className={cn(styles.col3, isMd && styles.justifyEnd)}>
            <h3 className={styles.title}>Контакты</h3>
            <div className={styles.row}>
              <div className={styles.col}>
                <a className={cn(styles.text, styles.link, styles.tel)}>
                  +7 555 555-55-55
                </a>
                <div className={cn(styles.socials, isMd && styles.justifyEnd)}>
                  <Telegram
                    className={cn(styles.socialItem, styles.socialIcon)}
                  />
                  <Viber className={cn(styles.socialItem, styles.socialIcon)} />
                  <Whatsapp
                    className={cn(styles.socialItem, styles.socialIcon)}
                  />
                </div>
                <a className={cn(styles.text, styles.link)}>
                  Москва, Путевой проезд 3с1, к 902{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rights}>
          <span className={styles.textSmall}>
            ©WELBEX 2022. Все права защищены.
          </span>
          <span className={cn(styles.underline, styles.textSmall)}>
            Политика конфиденциальности
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
