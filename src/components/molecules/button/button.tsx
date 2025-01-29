"use client";
import clsx from "clsx";
import Flex, { HasClasses, SpacingProps } from "@/components/atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import { ToneTypes } from "@/components//molecules/card/card";
import buttonStyles from "./button.module.css";
import { ReactNode } from "react";
import flexStyles from "@/components/atoms/flex/flex.module.css";

type OnClickProps = Readonly<{
  onClick: () => void;
}>;

type CommonButtonProps = Readonly<{
  text: ReactNode;
}>;

export type HasTone = Readonly<{
  tone?: ToneTypes;
}>;

export type ButtonProps = CommonButtonProps &
  HasClasses &
  HasTone &
  OnClickProps &
  SpacingProps;

// TODO: allow any component to be passed as a prop
export default function Button(props: ButtonProps) {
  const {
    text,
    tone = "neutral",
    onClick,
    className,
    // button gets padding defaulted to 2
    p = 2,
    ...restSpacingProps
  } = props;
  const borderTone = `border-tone-${tone}`;

  // TODO: pass in tone prop to the flex

  return (
    <div onClick={onClick}>
      <Flex
        row
        border
        p={p}
        {...restSpacingProps}
        className={clsx(
          flexStyles["align-items-center"],
          buttonStyles.cursor,
          globalStyles[borderTone],
          "button",
          className
        )}
      >
        {text}
      </Flex>
    </div>
  );
}
