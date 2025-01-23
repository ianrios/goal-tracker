import clsx from "clsx";
import Flex, { HasClasses } from "../../atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import { HasTone } from "../../atoms/button/button";

export type ToneTypes = "info" | "neutral" | "alert" | "success";

type CardProps = Readonly<{
  header?: string;
  body?: string;
  footer?: string;
}>;

export default function Card({
  tone = "neutral",
  header,
  body,
  footer,
}: CardProps & HasClasses & HasTone) {
  const borderTone = `border-tone-${tone}`;

  return (
    <Flex
      col
      padding={2}
      margin={2}
      className={clsx(
        globalStyles.border,
        globalStyles.borderRounded,
        globalStyles[borderTone]
      )}
    >
      {header && <Flex row>{header}</Flex>}
      {/* TODO: figure out header border */}
      {body && <Flex row>{body}</Flex>}
      {/* TODO: figure out footer border */}
      {footer && <Flex row>{footer}</Flex>}
    </Flex>
  );
}
