import cn from "classnames";
import styles from "./Nav.module.css";

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
        <a className={styles.navLink} key={label + href} href={href}>
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
