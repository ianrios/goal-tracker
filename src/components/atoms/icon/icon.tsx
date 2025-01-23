import {
  BsArrowDownCircle,
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsArrowUpCircle,
  BsDashCircle,
  BsGear,
} from "react-icons/bs";
import Flex from "../flex/flex";
import { VscBracketError } from "react-icons/vsc";

export enum IconName {
  Negative = "negative",
  Gear = "gear",
  DownArrow = "downArrow",
  UpArrow = "upArrow",
  LeftArrow = "leftArrow",
  RightArrow = "rightArrow",
}

export const IconMap: Record<IconName, React.ComponentType> = {
  [IconName.Negative]: BsDashCircle,
  [IconName.Gear]: BsGear,
  [IconName.DownArrow]: BsArrowDownCircle,
  [IconName.UpArrow]: BsArrowUpCircle,
  [IconName.LeftArrow]: BsArrowLeftCircle,
  [IconName.RightArrow]: BsArrowRightCircle,
};

export type IconProps = Readonly<{
  name: IconName;
}>;

export default function Icon({ name }: IconProps) {
  const IconComponent = IconMap[name] || VscBracketError; // Default to error icon if name is invalid
  return (
    <Flex row padding={1}>
      <IconComponent />
    </Flex>
  );
}
