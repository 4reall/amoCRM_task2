import cn from "classnames";
import { ComponentProps, ElementType } from "react";
import styles from "./Container.module.css";

interface ContainerOwnProps<TElement extends ElementType = ElementType> {
  as?: TElement;
}

type ContainerProps<TElement extends ElementType> =
  ContainerOwnProps<TElement> &
    Omit<ComponentProps<TElement>, keyof ContainerOwnProps>;

const defaultElement = "div";

const Container = <TElement extends ElementType = typeof defaultElement>({
  children,
  as,
  className,
  ...props
}: ContainerProps<TElement>) => {
  const Tag = as || defaultElement;
  return (
    <Tag {...props} className={cn(styles.container, className)}>
      {children}
    </Tag>
  );
};

export default Container;
