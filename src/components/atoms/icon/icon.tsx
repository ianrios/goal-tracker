"use client";
import {
  BsArrowDownCircle,
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsArrowUpCircle,
  BsCardText,
  BsDashCircle,
  BsFilterCircle,
  BsFilterCircleFill,
  BsGear,
  BsPencil,
  BsX,
  BsXLg,
} from "react-icons/bs";
import { VscBracketError } from "react-icons/vsc";

export enum IconName {
  Filter = "BsFilterCircle",
  FilterFill = "BsFilterCircleFill",
  Pencil = "BsPencil",
  Negative = "BsDashCircle",
  Gear = "BsGear",
  DownArrow = "BsArrowDownCircle",
  UpArrow = "BsArrowUpCircle",
  LeftArrow = "BsArrowLeftCircle",
  RightArrow = "BsArrowRightCircle",
  CardText = "BsCardText",
  CloseLarge = "BsXLg",
  CloseSmall = "BsX",
}

export const IconMap: Record<IconName, React.ComponentType> = {
  [IconName.Filter]: BsFilterCircle,
  [IconName.FilterFill]: BsFilterCircleFill,
  [IconName.Pencil]: BsPencil,
  [IconName.Negative]: BsDashCircle,
  [IconName.Gear]: BsGear,
  [IconName.DownArrow]: BsArrowDownCircle,
  [IconName.UpArrow]: BsArrowUpCircle,
  [IconName.LeftArrow]: BsArrowLeftCircle,
  [IconName.RightArrow]: BsArrowRightCircle,
  [IconName.CardText]: BsCardText,
  [IconName.CloseLarge]: BsXLg,
  [IconName.CloseSmall]: BsX,
};

export type BaseIconProps = Readonly<{
  name: IconName;
}>;

// TODO: add color tones to the icon

export default function Icon(props: BaseIconProps) {
  const { name } = props;
  const IconComponent = IconMap[name] || VscBracketError; // IconComponent is defaulted to error icon if name is invalid
  return <IconComponent />;
}
