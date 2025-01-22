import clsx from "clsx";
import styles from "./flex.module.css";

enum FlexDirection {
  Col = "col",
  Row = "row",
}

const paddingSelector = {
  0: "padding-zero",
  1: "padding-one",
  2: "padding-two",
  3: "padding-three",
  4: "padding-four",
  5: "padding-five",
  6: "padding-six",
  7: "padding-seven",
  8: "padding-eight",
};

const marginSelector = {
  0: "margin-zero",
  1: "margin-one",
  2: "margin-two",
  3: "margin-three",
  4: "margin-four",
  5: "margin-five",
  6: "margin-six",
  7: "margin-seven",
  8: "margin-eight",
};

export type HasChildren = Readonly<{
  children: React.ReactNode;
}>;

export type HasClasses = Readonly<{
  className?: string;
}>;

type FlexProps = Readonly<{
  col?: boolean;
  padding?: keyof typeof paddingSelector;
  margin?: keyof typeof marginSelector;
}>;

export default function Flex({
  col = false,
  children,
  className,
  padding = 0,
  margin = 0,
}: FlexProps & HasChildren & HasClasses) {
  const direction = col ? FlexDirection.Col : FlexDirection.Row;
  const paddingValue = paddingSelector[padding];
  const marginValue = marginSelector[margin];

  return (
    <div
      className={clsx(
        styles.flex,
        styles[direction],
        styles[paddingValue],
        styles[marginValue],
        className
      )}
    >
      {children}
    </div>
  );
}
