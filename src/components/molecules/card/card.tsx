import clsx from "clsx";
import Flex, { HasClasses, SpacingProps } from "../../atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import { HasTone } from "../button/button";
import IconButton from "../icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";

export type ToneTypes = "info" | "neutral" | "alert" | "success";

type CardProps = Readonly<{
  header?: string;
  body?: string;
}>;

export default function Card(
  props: CardProps & HasClasses & HasTone & SpacingProps
) {
  const {
    tone = "neutral",
    header,
    body,
    className,
    ...restSpacingProps
  } = props;
  const borderTone = `border-tone-${tone}`;

  return (
    <Flex
      col
      {...restSpacingProps}
      className={clsx(
        globalStyles[borderTone],
        globalStyles.border,
        globalStyles.borderRounded,
        className
      )}
    >
      {/* dynamically set padding y if footer or header are not added */}
      {header && (
        <Flex row paddingTop={2} paddingBottom={1} paddingX={2}>
          {header}
        </Flex>
      )}
      {/* TODO: figure out header border */}
      {body && (
        <Flex row paddingX={2} paddingY={1}>
          {body}
        </Flex>
      )}

      <Flex row paddingTop={1} paddingBottom={2} paddingX={2}>
        <IconButton
          name={IconName.Pencil}
          marginRight={1}
          padding={1}
          onClick={() => console.log(`edit name for ${header}`)}
        />
        <IconButton
          name={IconName.Gear}
          marginRight={1}
          padding={1}
          onClick={() => console.log(`open settings for ${header}`)}
        />
      </Flex>
    </Flex>
  );
}
