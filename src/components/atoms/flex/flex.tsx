import clsx from "clsx";
import flexStyles from "./flex.module.css";
import globalStyles from "@/app/ui/global.module.css";

export enum FlexDirection {
  Col = "col",
  Row = "row",
}

// TODO: Move these helpers somewhere else
// margin helpers
export const marginSelector = {
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
export const marginXSelector = {
  0: "margin-x-zero",
  1: "margin-x-one",
  2: "margin-x-two",
  3: "margin-x-three",
  4: "margin-x-four",
  5: "margin-x-five",
  6: "margin-x-six",
  7: "margin-x-seven",
  8: "margin-x-eight",
};
export const marginYSelector = {
  0: "margin-y-zero",
  1: "margin-y-one",
  2: "margin-y-two",
  3: "margin-y-three",
  4: "margin-y-four",
  5: "margin-y-five",
  6: "margin-y-six",
  7: "margin-y-seven",
  8: "margin-y-eight",
};
export const marginTopSelector = {
  0: "margin-top-zero",
  1: "margin-top-one",
  2: "margin-top-two",
  3: "margin-top-three",
  4: "margin-top-four",
  5: "margin-top-five",
  6: "margin-top-six",
  7: "margin-top-seven",
  8: "margin-top-eight",
};
export const marginBottomSelector = {
  0: "margin-bottom-zero",
  1: "margin-bottom-one",
  2: "margin-bottom-two",
  3: "margin-bottom-three",
  4: "margin-bottom-four",
  5: "margin-bottom-five",
  6: "margin-bottom-six",
  7: "margin-bottom-seven",
  8: "margin-bottom-eight",
};
export const marginLeftSelector = {
  0: "margin-left-zero",
  1: "margin-left-one",
  2: "margin-left-two",
  3: "margin-left-three",
  4: "margin-left-four",
  5: "margin-left-five",
  6: "margin-left-six",
  7: "margin-left-seven",
  8: "margin-left-eight",
};
export const marginRightSelector = {
  0: "margin-right-zero",
  1: "margin-right-one",
  2: "margin-right-two",
  3: "margin-right-three",
  4: "margin-right-four",
  5: "margin-right-five",
  6: "margin-right-six",
  7: "margin-right-seven",
  8: "margin-right-eight",
};

// padding helpers
export const paddingSelector = {
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
export const paddingXSelector = {
  0: "padding-x-zero",
  1: "padding-x-one",
  2: "padding-x-two",
  3: "padding-x-three",
  4: "padding-x-four",
  5: "padding-x-five",
  6: "padding-x-six",
  7: "padding-x-seven",
  8: "padding-x-eight",
};
export const paddingYSelector = {
  0: "padding-y-zero",
  1: "padding-y-one",
  2: "padding-y-two",
  3: "padding-y-three",
  4: "padding-y-four",
  5: "padding-y-five",
  6: "padding-y-six",
  7: "padding-y-seven",
  8: "padding-y-eight",
};
export const paddingTopSelector = {
  0: "padding-top-zero",
  1: "padding-top-one",
  2: "padding-top-two",
  3: "padding-top-three",
  4: "padding-top-four",
  5: "padding-top-five",
  6: "padding-top-six",
  7: "padding-top-seven",
  8: "padding-top-eight",
};
export const paddingBottomSelector = {
  0: "padding-bottom-zero",
  1: "padding-bottom-one",
  2: "padding-bottom-two",
  3: "padding-bottom-three",
  4: "padding-bottom-four",
  5: "padding-bottom-five",
  6: "padding-bottom-six",
  7: "padding-bottom-seven",
  8: "padding-bottom-eight",
};
export const paddingLeftSelector = {
  0: "padding-left-zero",
  1: "padding-left-one",
  2: "padding-left-two",
  3: "padding-left-three",
  4: "padding-left-four",
  5: "padding-left-five",
  6: "padding-left-six",
  7: "padding-left-seven",
  8: "padding-left-eight",
};
export const paddingRightSelector = {
  0: "padding-right-zero",
  1: "padding-right-one",
  2: "padding-right-two",
  3: "padding-right-three",
  4: "padding-right-four",
  5: "padding-right-five",
  6: "padding-right-six",
  7: "padding-right-seven",
  8: "padding-right-eight",
};

export type HasChildren = Readonly<{
  children: React.ReactNode;
}>;

export type HasClasses = Readonly<{
  className?: string;
}>;

type ColProps = Readonly<{
  col: true;
  row?: never;
}>;
type RowProps = Readonly<{
  col?: never;
  row: true;
}>;

type SpacingProps = Readonly<{
  margin?: keyof typeof marginSelector;
  marginX?: keyof typeof marginXSelector;
  marginY?: keyof typeof marginYSelector;
  marginTop?: keyof typeof marginTopSelector;
  marginBottom?: keyof typeof marginBottomSelector;
  marginRight?: keyof typeof marginRightSelector;
  marginLeft?: keyof typeof marginLeftSelector;
  padding?: keyof typeof paddingSelector;
  paddingX?: keyof typeof paddingXSelector;
  paddingY?: keyof typeof paddingYSelector;
  paddingTop?: keyof typeof paddingTopSelector;
  paddingBottom?: keyof typeof paddingBottomSelector;
  paddingRight?: keyof typeof paddingRightSelector;
  paddingLeft?: keyof typeof paddingLeftSelector;
}>;

type FlexProps = SpacingProps &
  HasChildren &
  HasClasses &
  (RowProps | ColProps);

export default function Flex({
  col,
  // row, // unused, only needed for prop options
  children,
  className,
  // margin and padding props
  margin, // This is the only one that is hardcoded
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
}: FlexProps) {
  const direction = col ? FlexDirection.Col : FlexDirection.Row;

  const marginValue = margin ? marginSelector[margin] : "skip";
  const marginXValue = marginX ? marginXSelector[marginX] : "skip";
  const marginYValue = marginY ? marginYSelector[marginY] : "skip";
  const marginTopValue = marginTop ? marginTopSelector[marginTop] : "skip";
  const marginBottomValue = marginBottom
    ? marginBottomSelector[marginBottom]
    : "skip";
  const marginRightValue = marginRight
    ? marginRightSelector[marginRight]
    : "skip";
  const marginLeftValue = marginLeft ? marginLeftSelector[marginLeft] : "skip";
  const paddingValue = padding ? paddingSelector[padding] : "skip";
  const paddingXValue = paddingX ? paddingXSelector[paddingX] : "skip";
  const paddingYValue = paddingY ? paddingYSelector[paddingY] : "skip";
  const paddingTopValue = paddingTop ? paddingTopSelector[paddingTop] : "skip";
  const paddingBottomValue = paddingBottom
    ? paddingBottomSelector[paddingBottom]
    : "skip";
  const paddingRightValue = paddingRight
    ? paddingRightSelector[paddingRight]
    : "skip";
  const paddingLeftValue = paddingLeft
    ? paddingLeftSelector[paddingLeft]
    : "skip";

  console.log({
    marginValue,
    marginXValue,
    marginYValue,
    marginTopValue,
    marginBottomValue,
    marginRightValue,
    marginLeftValue,
    paddingValue,
    paddingXValue,
    paddingYValue,
    paddingTopValue,
    paddingBottomValue,
    paddingRightValue,
    paddingLeftValue,
  });

  // if all are skip, then actually choose margin (normal) to be 1

  const allSpacingProps = [
    marginValue,
    marginXValue,
    marginYValue,
    marginTopValue,
    marginBottomValue,
    marginRightValue,
    marginLeftValue,
    paddingValue,
    paddingXValue,
    paddingYValue,
    paddingTopValue,
    paddingBottomValue,
    paddingRightValue,
    paddingLeftValue,
  ];

  const defaultToMargin1 =
    allSpacingProps.filter((sp) => sp !== "skip").length === 0;

  return (
    <div
      className={clsx(
        flexStyles.flex,
        flexStyles[direction],
        globalStyles[defaultToMargin1 ? marginSelector[1] : marginValue],
        marginXValue !== "skip" && globalStyles[marginXValue],
        marginYValue !== "skip" && globalStyles[marginYValue],
        marginTopValue !== "skip" && globalStyles[marginTopValue],
        marginBottomValue !== "skip" && globalStyles[marginBottomValue],
        marginRightValue !== "skip" && globalStyles[marginRightValue],
        marginLeftValue !== "skip" && globalStyles[marginLeftValue],
        paddingValue !== "skip" && globalStyles[paddingValue],
        paddingXValue !== "skip" && globalStyles[paddingXValue],
        paddingYValue !== "skip" && globalStyles[paddingYValue],
        paddingTopValue !== "skip" && globalStyles[paddingTopValue],
        paddingBottomValue !== "skip" && globalStyles[paddingBottomValue],
        paddingRightValue !== "skip" && globalStyles[paddingRightValue],
        paddingLeftValue !== "skip" && globalStyles[paddingLeftValue],
        className
      )}
    >
      {children}
    </div>
  );
}
