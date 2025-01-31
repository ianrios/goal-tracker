"use client";
import Button, { ButtonProps } from "@/components/molecules/button/button";
import Flex, {
  FlexAlignOptions,
  FlexJustifyOptions,
  isUndefined,
  SpacingProps,
} from "@/components/atoms/flex/flex";
import Icon, { BaseIconProps } from "@/components/atoms/icon/icon";

type BaseIconButtonProps = Readonly<{
  text?: string;
  reverse?: boolean;
}>;

type IconButtonProps = BaseIconButtonProps &
  BaseIconProps &
  Omit<ButtonProps, "text"> &
  SpacingProps;

export default function IconButton(props: IconButtonProps) {
  // IconButton p is defaulted to 2
  // IconButton reverse is defaulted to false and not passed to deeper button flex
  const { name, text, reverse = false, p = 2, ...restProps } = props;
  const hasText = !isUndefined(text) && text.length > 0;
  return (
    <Button
      p={hasText ? 0 : p}
      {...restProps}
      reverse={reverse}
      gap={hasText ? p : 0}
      justify={FlexJustifyOptions.JustifyContentSpaceBetween}
      text={
        hasText ? (
          <>
            <Flex
              row
              py={p}
              pl={reverse ? 0 : p}
              pr={reverse ? p : 0}
              align={FlexAlignOptions.AlignItemsCenter}
              grow
              justify={
                reverse
                  ? FlexJustifyOptions.JustifyContentEnd
                  : FlexJustifyOptions.JustifyContentStart
              }
            >
              {text}
            </Flex>
            <Flex row py={p} pl={reverse ? p : 0} pr={reverse ? 0 : p}>
              <Icon name={name} />
            </Flex>
          </>
        ) : (
          <Icon name={name} />
        )
      }
    />
  );
}
