"use client";
import globalStyles from "@/app/ui/global.module.css";
import { ButtonProps } from "@/components/atoms/button/button";
import Icon, { IconProps } from "@/components/atoms/icon/icon";
import flexStyles from "@/components/atoms/flex/flex.module.css";
import buttonStyles from "@/components/atoms/button/button.module.css";
import clsx from "clsx";
import {
  FlexDirection,
  marginSelector,
  paddingSelector,
} from "@/components/atoms/flex/flex";

export default function IconButton({
  name,
  tone = "neutral",
  onClick,
}: IconProps & Omit<ButtonProps, "text">) {
  const borderTone = `border-tone-${tone}`;

  // TODO: this is basically a flex and / or a button, can i use that component here with extra props?
  return (
    <div
      onClick={onClick}
      className={clsx(
        buttonStyles.cursor,
        flexStyles.flex,
        flexStyles[FlexDirection.Row],
        globalStyles[paddingSelector[2]],
        globalStyles[marginSelector[2]],
        globalStyles.border,
        globalStyles.borderRounded,
        globalStyles[borderTone]
      )}
    >
      <Icon name={name} />
    </div>
  );
}
