"use client";
import clsx from "clsx";
import Flex, {
  HasBorder,
  HasClasses,
  HasTone,
  SpacingProps,
} from "@/components/atoms/flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import buttonStyles from "./button.module.css";
import { ReactNode } from "react";
import flexStyles from "@/components/atoms/flex/flex.module.css";

type OnClickProps = Readonly<{
  onClick: () => void;
}>;

type CommonButtonProps = Readonly<{
  text: ReactNode;
}>;

export type ButtonProps = CommonButtonProps &
  HasClasses &
  HasTone &
  HasBorder &
  OnClickProps &
  SpacingProps;

// TODO: allow any component to be passed as a prop

export default function Button(props: ButtonProps) {
  const {
    text,
    border = true,
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
        border={border}
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
