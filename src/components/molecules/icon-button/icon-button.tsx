"use client";
import Button, { ButtonProps } from "@/components/molecules/button/button";
import { SpacingProps } from "@/components/atoms/flex/flex";
import Icon, { BaseIconProps } from "@/components/atoms/icon/icon";

type IconButtonProps = BaseIconProps & Omit<ButtonProps, "text"> & SpacingProps;

export default function IconButton(props: IconButtonProps) {
  const { name, ...restProps } = props;

  return <Button {...restProps} text={<Icon name={name} />} />;
}
