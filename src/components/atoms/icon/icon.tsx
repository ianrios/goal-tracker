import {
  BsArrowDownCircle,
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsArrowUpCircle,
  BsDashCircle,
  BsFilterCircle,
  BsFilterCircleFill,
  BsGear,
  BsPencil,
} from "react-icons/bs";
import { VscBracketError } from "react-icons/vsc";

export enum IconName {
  Filter = "BsFilterCircle",
  FilterFill = "BsFilterCircleFill",
  Pencil = "pencil",
  Negative = "negative",
  Gear = "gear",
  DownArrow = "downArrow",
  UpArrow = "upArrow",
  LeftArrow = "leftArrow",
  RightArrow = "rightArrow",
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
};

export type BaseIconProps = Readonly<{
  name: IconName;
}>;

// TODO: add color tones to the icon

export default function Icon(props: BaseIconProps) {
  const { name } = props;
  const IconComponent = IconMap[name] || VscBracketError; // Default to error icon if name is invalid
  return <IconComponent />;
}
