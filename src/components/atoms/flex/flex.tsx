"use client";
import clsx from "clsx";
import flexStyles from "./flex.module.css";
import globalStyles from "@/app/ui/global.module.css";

// TODO: move this out and make an is null too
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

enum FlexDirectionOptions {
  Col = "col-forward",
  Row = "row-forward",
  ColReverse = "col-reverse",
  RowReverse = "row-reverse",
}

export enum FlexOverflowOptions {
  OverflowAuto = "overflow-auto",
  OverflowScroll = "overflow-scroll",
  OverflowHidden = "overflow-hidden",
  OverflowXAuto = "overflow-x-auto",
  OverflowXScroll = "overflow-x-scroll",
  OverflowXHidden = "overflow-x-hidden",
  OverflowYAuto = "overflow-y-auto",
  OverflowYScroll = "overflow-y-scroll",
  OverflowYHidden = "overflow-y-hidden",
}

enum FlexAlignOptions {
  AlignContentCenter = "align-content-center",
  AlignContentEnd = "align-content-end",
  AlignContentStart = "align-content-start",
  AlignItemsCenter = "align-items-center",
  AlignItemsEnd = "align-items-end",
  AlignItemsStart = "align-items-start",
  AlignSelfCenter = "align-self-center",
  AlignSelfEnd = "align-self-end",
  AlignSelfStart = "align-self-start",
}
export enum FlexJustifyOptions {
  JustifyContentCenter = "justify-content-center",
  JustifyContentEnd = "justify-content-end",
  JustifyContentStart = "justify-content-start",
  JustifyItemsCenter = "justify-items-center",
  JustifyItemsEnd = "justify-items-end",
  JustifyItemsStart = "justify-items-start",
  JustifySelfCenter = "justify-self-center",
  JustifySelfEnd = "justify-self-end",
  JustifySelfStart = "justify-self-start",
}

export enum ToneOptions {
  Info = "info",
  Neutral = "neutral",
  Alert = "alert",
  Success = "success",
}

// gap prop options
export const gapSelector = {
  0: "gap-zero",
  1: "gap-one",
  2: "gap-two",
  3: "gap-three",
  4: "gap-four",
  5: "gap-five",
  6: "gap-six",
  7: "gap-seven",
  8: "gap-eight",
};

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
export const mTSelector = {
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
export const mBSelector = {
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
export const mLSelector = {
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
export const mRSelector = {
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
export const pTSelector = {
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
export const pBSelector = {
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
export const pLSelector = {
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
export const pRSelector = {
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
export type HasBorder = Readonly<{
  border?: boolean;
}>;

// TODO: use enum for this
export type HasTone = Readonly<{
  tone?: ToneOptions;
}>;

// TODO: use enum for this
export type SpacingProps = Readonly<{
  m?: keyof typeof mSelector;
  mx?: keyof typeof mXSelector;
  my?: keyof typeof mYSelector;
  mt?: keyof typeof mTSelector;
  mb?: keyof typeof mBSelector;
  mr?: keyof typeof mRSelector;
  ml?: keyof typeof mLSelector;
  p?: keyof typeof pSelector;
  px?: keyof typeof pXSelector;
  py?: keyof typeof pYSelector;
  pt?: keyof typeof pTSelector;
  pb?: keyof typeof pBSelector;
  pr?: keyof typeof pRSelector;
  pl?: keyof typeof pLSelector;
}>;

export type HasGap = Readonly<{
  gap?: keyof typeof gapSelector;
}>;

export type CanGrow = Readonly<{
  grow?: boolean;
}>;

type BaseFlexProps = Readonly<{
  reverse?: boolean;
  align?: FlexAlignOptions;
  justify?: FlexJustifyOptions;
  overflow?: FlexOverflowOptions;
}> &
  (RowProps | ColProps);

type FlexProps = HasChildren &
  HasBorder &
  HasTone &
  CanGrow &
  HasClasses &
  BaseFlexProps &
  HasGap &
  SpacingProps;

export default function Flex({
  children,
  className,

  // align is defaulted to align-items-center
  align = FlexAlignOptions.AlignContentCenter,
  // justify is defaulted to justify-content-start
  justify = FlexJustifyOptions.JustifyContentStart,
  // overflow is defaulted to overflow-auto
  overflow = FlexOverflowOptions.OverflowAuto,
  // reverse is defaulted to false
  reverse = false,
  // grow is defaulted to false
  grow = false,
  // row, // row is not used but it is still a prop
  col,
  border = false, // border is defaulted to false, which means no border
  tone = ToneOptions.Neutral, // tone is defaulted to neutral
  // margin and padding props - none are defaulted
  m,
  mx,
  my,
  mt,
  mb,
  mr,
  ml,
  p,
  px,
  py,
  pt,
  pb,
  pr,
  pl,
  // gap props - not defaulted
  gap,
}: FlexProps) {
  const direction = col
    ? flexStyles[
        reverse ? FlexDirectionOptions.ColReverse : FlexDirectionOptions.Col
      ]
    : flexStyles[
        reverse ? FlexDirectionOptions.RowReverse : FlexDirectionOptions.Row
      ];

  const mValue = isUndefined(m) ? "-" : mSelector[m];
  const mXValue = isUndefined(mx) ? "-" : mXSelector[mx];
  const mYValue = isUndefined(my) ? "-" : mYSelector[my];
  const mTValue = isUndefined(mt) ? "-" : mTSelector[mt];
  const mBValue = isUndefined(mb) ? "-" : mBSelector[mb];
  const mRValue = isUndefined(mr) ? "-" : mRSelector[mr];
  const mLValue = isUndefined(ml) ? "-" : mLSelector[ml];
  const pValue = isUndefined(p) ? "-" : pSelector[p];
  const pXValue = isUndefined(px) ? "-" : pXSelector[px];
  const pYValue = isUndefined(py) ? "-" : pYSelector[py];
  const pTValue = isUndefined(pt) ? "-" : pTSelector[pt];
  const pBValue = isUndefined(pb) ? "-" : pBSelector[pb];
  const pRValue = isUndefined(pr) ? "-" : pRSelector[pr];
  const pLValue = isUndefined(pl) ? "-" : pLSelector[pl];
  // if all are -, then actually choose margin (normal) to be 2

  // const debugBorders = true;
  const debugBorders = false;

  // TODO: select border tone here also
  const borderTone = debugBorders
    ? "border-tone-alert"
    : border
    ? `border-tone-${tone}`
    : "";

  return (
    <div
      className={clsx(
        flexStyles.flex,
        direction,

        grow && flexStyles["flex-grow"],
        flexStyles[align],
        flexStyles[justify],
        flexStyles[overflow],

        // margin and padding
        mValue !== "-" && globalStyles[mValue],
        mXValue !== "-" && globalStyles[mXValue],
        mYValue !== "-" && globalStyles[mYValue],
        mTValue !== "-" && globalStyles[mTValue],
        mBValue !== "-" && globalStyles[mBValue],
        mRValue !== "-" && globalStyles[mRValue],
        mLValue !== "-" && globalStyles[mLValue],
        pValue !== "-" && globalStyles[pValue],
        pXValue !== "-" && globalStyles[pXValue],
        pYValue !== "-" && globalStyles[pYValue],
        pTValue !== "-" && globalStyles[pTValue],
        pBValue !== "-" && globalStyles[pBValue],
        pRValue !== "-" && globalStyles[pRValue],
        pLValue !== "-" && globalStyles[pLValue],
        // gap
        !isUndefined(gap) && globalStyles[gapSelector[gap]],

        (border || debugBorders) && globalStyles.border,
        globalStyles.borderRounded,
        (border || debugBorders) && globalStyles[borderTone],
        "flex", // add the name of the component to the atom / molecule classlist
        className
      )}
    >
      {children}
    </div>
  );
}
