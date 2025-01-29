"use client";
import clsx from "clsx";
import Flex, { HasClasses, SpacingProps } from "../../atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import { HasTone } from "../button/button";
import IconButton from "../icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";

export type ToneTypes = "info" | "neutral" | "alert" | "success";

type CardProps = Readonly<{
  header: string;
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
    // Card gets defaulted to 2
    p = 2,
    ...restSpacingProps
  } = props;
  const borderTone = `border-tone-${tone}`;

  // TODO: pass in border tone to the flex

  return (
    <Flex
      col
      border
      p={p}
      gap={2}
      {...restSpacingProps}
      className={clsx(globalStyles[borderTone], className)}
    >
      {/* TODO: figure out header border */}
      <Flex row>{header}</Flex>
      {/* body is optional */}
      {body && <Flex row>{body}</Flex>}

      <Flex row gap={1}>
        <IconButton
          name={IconName.Pencil}
          p={1}
          onClick={() => console.log(`edit name for ${header}`)}
        />
        <IconButton
          name={IconName.Gear}
          p={1}
          onClick={() => console.log(`open settings for ${header}`)}
        />
      </Flex>
    </Flex>
  );
}
