import Container from "components/Container/Container";
import Nav, { ILink } from "components/Nav/Nav";
import useMediaQuery from "hooks/useMediaQuery";
import { queries } from "constants/mediaQueries";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "assets/logo_welbex.svg";
import { ReactComponent as Telegram } from "assets/telegram.svg";
import { ReactComponent as Viber } from "assets/viber.svg";
import { ReactComponent as Whatsapp } from "assets/whatsapp.svg";

const links: ILink[] = [
  { label: "Услуги", href: "#" },
  { label: "Виджеты", href: "#" },
  { label: "Интеграции", href: "#" },
  { label: "Кейсы", href: "#" },
  { label: "Сертификаты", href: "#" },
];

const Header = () => {
  const isSm = useMediaQuery(queries.up.sm);
  return (
    <header className={styles.header}>
      <Container className={styles.grid}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logoImg} />
          <span className={styles.logoText}>
            крупный интегратор CRM <br />в России и ещё 8 странах
          </span>
        </div>
        <Nav links={isSm ? links : links.slice(0, 4)} className={styles.nav} />
        <div className={styles.contacts}>
          <span className={styles.contactsTel}>+7 555 555-55-55</span>
          <div className={styles.socials}>
            <Telegram className={styles.socialItem} />
            <Viber className={styles.socialItem} />
            <Whatsapp className={styles.socialItem} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
