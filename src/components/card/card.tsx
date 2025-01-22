import clsx from "clsx";
import Flex, { HasClasses } from "../flex/flex";
import styles from "@/app/ui/global.module.css";

export type ToneTypes = "info" | "neutral";

type CardProps = Readonly<{
  tone?: ToneTypes;
  header?: string;
  body?: string;
  footer?: string;
}>;

export default function Card({
  tone = "neutral",
  header,
  body,
  footer,
}: CardProps & HasClasses) {
  const borderTone = `border-tone-${tone}`;

  return (
    <Flex
      col
      padding={1}
      margin={1}
      className={clsx(styles.border, styles.borderRounded, styles[borderTone])}
    >
      {header && <Flex>{header}</Flex>}
      {/* TODO: figure out header border */}
      {body && <Flex>{body}</Flex>}
      {/* TODO: figure out footer border */}
      {footer && <Flex>{footer}</Flex>}
    </Flex>
  );
}
