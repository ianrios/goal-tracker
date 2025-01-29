import clsx from "clsx";
import headerStyles from "./header.module.css";
import Flex, { SpacingProps } from "@/components/atoms/flex/flex";
import flexStyles from "@/components/atoms/flex/flex.module.css";

type BaseHeaderProps = Readonly<{
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}>;

type HeaderProps = BaseHeaderProps & SpacingProps;

export default function Header(props: HeaderProps) {
  const { size = 2, text, ...restSpacingProps } = props;
  const selectHTag = () => {
    switch (size) {
      case 1:
        return <h1 className={clsx(headerStyles.h1)}>{text}</h1>;
      case 3:
        return <h3 className={clsx(headerStyles.h3)}>{text}</h3>;
      case 4:
        return <h4 className={clsx(headerStyles.h4)}>{text}</h4>;
      case 5:
        return <h5 className={clsx(headerStyles.h5)}>{text}</h5>;
      case 6:
        return <h6 className={clsx(headerStyles.h6)}>{text}</h6>;
      case 2:
      default:
        // Header is defaulted to h2
        return <h2 className={clsx(headerStyles.h2)}>{text}</h2>;
    }
  };

  return (
    <Flex
      row
      {...restSpacingProps}
      className={clsx(flexStyles["align-items-center"])}
    >
      {selectHTag()}
    </Flex>
  );
}
