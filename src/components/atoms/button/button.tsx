"use client";
import clsx from "clsx";
import { FlexDirection, marginSelector, paddingSelector } from "../flex/flex";
import globalStyles from "@/app/ui/global.module.css";
import { ToneTypes } from "../../molecules/card/card";
import buttonStyles from "./button.module.css";
import flexStyles from "../flex/flex.module.css";

type OnClickProps = Readonly<{
  onClick: () => void;
}>;

type CommonButtonProps = Readonly<{
  text: string;
}>;

export type HasTone = Readonly<{
  tone?: ToneTypes;
}>;

export type ButtonProps = CommonButtonProps & HasTone & OnClickProps;

// TODO: allow any component to be passed as a prop
export default function Button({
  text,
  tone = "neutral",
  onClick,
}: ButtonProps) {
  const borderTone = `border-tone-${tone}`;

  // TODO: this is basically a flex, can i use that component here with extra props?
  return (
    <div
      onClick={onClick}
      className={clsx(
        buttonStyles.cursor,
        flexStyles.flex,
        flexStyles[FlexDirection.Row],
        globalStyles[paddingSelector[2]],
        globalStyles[marginSelector[1]],
        globalStyles.border,
        globalStyles.borderRounded,
        globalStyles[borderTone]
      )}
    >
      {text}
    </div>
  );
}
