import styles from "./Nav.module.css";
import cn from "classnames";

export interface ILink {
  label: string;
  href: string;
}

interface NavProps {
  links: ILink[];
  className?: string;
}

const Nav = ({ links, className }: NavProps) => {
  return (
    <nav className={cn(styles.nav, className)}>
      {links.map(({ label, href }) => (
        <a className={styles.navLink} href={href}>
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
