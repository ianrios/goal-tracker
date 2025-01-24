"use client";
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

  // TODO: pass in border tone to the flex

  return (
    <Flex
      col
      border
      {...restSpacingProps}
      className={clsx(globalStyles[borderTone], className)}
    >
      {/* dynamically set p y if footer or header are not added */}
      {header && (
        <Flex row pT={2} pB={1} pX={2}>
          {header}
        </Flex>
      )}
      {/* TODO: figure out header border */}
      {body && (
        <Flex row pX={2} pY={1}>
          {body}
        </Flex>
      )}

      <Flex row pT={1} pB={2} pX={2}>
        <IconButton
          name={IconName.Pencil}
          mR={1}
          p={1}
          onClick={() => console.log(`edit name for ${header}`)}
        />
        <IconButton
          name={IconName.Gear}
          mR={1}
          p={1}
          onClick={() => console.log(`open settings for ${header}`)}
        />
      </Flex>
    </Flex>
  );
}
