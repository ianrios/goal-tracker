import { BsDashCircle, BsGear } from "react-icons/bs";
import Flex from "../flex/flex";
import { VscBracketError } from "react-icons/vsc";

export const IconMap = {
  negative: BsDashCircle,
  gear: BsGear,
};

type IconNames = keyof typeof IconMap;

type IconProps = Readonly<{
  name: IconNames;
}>;

export default function Icon({ name }: IconProps) {
  const IconComponent = IconMap[name] || VscBracketError; // Default to error icon if name is invalid
  return (
    <Flex padding={1}>
      <IconComponent />
    </Flex>
  );
}
