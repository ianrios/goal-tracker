import Icon, { BaseIconProps } from "@/components/atoms/icon/icon";
import Flex, { SpacingProps } from "../../atoms/flex/flex";

type IconProps = BaseIconProps & SpacingProps;

export function IconFlex(props: IconProps) {
  const { name, ...rest } = props;
  return (
    <Flex row {...rest}>
      <Icon name={name} />
    </Flex>
  );
}
