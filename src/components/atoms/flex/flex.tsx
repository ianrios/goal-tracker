import clsx from "clsx";
import flexStyles from "./flex.module.css";
import globalStyles from "@/app/ui/global.module.css";

export enum FlexDirection {
  Col = "col",
  Row = "row",
}

// TODO: Move these helpers somewhere else
// margin helpers
export const mSelector = {
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
export const mXSelector = {
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
export const mYSelector = {
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
export const mTopSelector = {
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
export const mBottomSelector = {
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
export const mLeftSelector = {
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
export const mRightSelector = {
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
export const pSelector = {
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
export const pXSelector = {
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
export const pYSelector = {
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
export const pTopSelector = {
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
export const pBottomSelector = {
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
export const pLeftSelector = {
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
export const pRightSelector = {
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

export type SpacingProps = Readonly<{
  margin?: keyof typeof mSelector;
  marginX?: keyof typeof mXSelector;
  marginY?: keyof typeof mYSelector;
  marginTop?: keyof typeof mTopSelector;
  marginBottom?: keyof typeof mBottomSelector;
  marginRight?: keyof typeof mRightSelector;
  marginLeft?: keyof typeof mLeftSelector;
  padding?: keyof typeof pSelector;
  paddingX?: keyof typeof pXSelector;
  paddingY?: keyof typeof pYSelector;
  paddingTop?: keyof typeof pTopSelector;
  paddingBottom?: keyof typeof pBottomSelector;
  paddingRight?: keyof typeof pRightSelector;
  paddingLeft?: keyof typeof pLeftSelector;
}>;

type FlexProps = HasChildren &
  HasClasses &
  (RowProps | ColProps) &
  SpacingProps;

export default function Flex({
  children,
  className,
  // row, // row is unused, but it is needed for prop options
  col,
  // margin and padding props
  margin, // This is the only one that is defaulted
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

  const mValue = margin ? mSelector[margin] : "-";
  const mXValue = marginX ? mXSelector[marginX] : "-";
  const mYValue = marginY ? mYSelector[marginY] : "-";
  const mTopValue = marginTop ? mTopSelector[marginTop] : "-";
  const mBottomValue = marginBottom ? mBottomSelector[marginBottom] : "-";
  const mRightValue = marginRight ? mRightSelector[marginRight] : "-";
  const mLeftValue = marginLeft ? mLeftSelector[marginLeft] : "-";
  const pValue = padding ? pSelector[padding] : "-";
  const pXValue = paddingX ? pXSelector[paddingX] : "-";
  const pYValue = paddingY ? pYSelector[paddingY] : "-";
  const pTopValue = paddingTop ? pTopSelector[paddingTop] : "-";
  const pBottomValue = paddingBottom ? pBottomSelector[paddingBottom] : "-";
  const pRightValue = paddingRight ? pRightSelector[paddingRight] : "-";
  const pLeftValue = paddingLeft ? pLeftSelector[paddingLeft] : "-";

  // if all are -, then actually choose margin (normal) to be 2

  const allSpacingProps = [
    mValue,
    mXValue,
    mYValue,
    mTopValue,
    mBottomValue,
    mRightValue,
    mLeftValue,
    pValue,
    pXValue,
    pYValue,
    pTopValue,
    pBottomValue,
    pRightValue,
    pLeftValue,
  ];

  const defaultToMargin1 =
    allSpacingProps.filter((sp) => sp !== "-").length === 0;

  const debugBorders = false;

  return (
    <div
      className={clsx(
        flexStyles.flex,
        flexStyles[direction],
        globalStyles[defaultToMargin1 ? mSelector[2] : mValue],
        mXValue !== "-" && globalStyles[mXValue],
        mYValue !== "-" && globalStyles[mYValue],
        mTopValue !== "-" && globalStyles[mTopValue],
        mBottomValue !== "-" && globalStyles[mBottomValue],
        mRightValue !== "-" && globalStyles[mRightValue],
        mLeftValue !== "-" && globalStyles[mLeftValue],
        pValue !== "-" && globalStyles[pValue],
        pXValue !== "-" && globalStyles[pXValue],
        pYValue !== "-" && globalStyles[pYValue],
        pTopValue !== "-" && globalStyles[pTopValue],
        pBottomValue !== "-" && globalStyles[pBottomValue],
        pRightValue !== "-" && globalStyles[pRightValue],
        pLeftValue !== "-" && globalStyles[pLeftValue],

        debugBorders && globalStyles.border,
        debugBorders && globalStyles.borderRounded,
        debugBorders && globalStyles["border-tone-alert"],

        className
      )}
    >
      {children}
    </div>
  );
}
