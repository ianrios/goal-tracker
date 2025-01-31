"use client";
import {
  BsArrowDownCircle,
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsArrowsAngleExpand,
  BsArrowUpCircle,
  BsBarChart,
  BsBarChartLine,
  BsBarChartSteps,
  BsBoxArrowInUpRight,
  BsCalendarDate,
  BsCardText,
  BsDashCircle,
  BsFilterCircle,
  BsFilterCircleFill,
  BsGear,
  BsList,
  BsPencil,
  BsTable,
  BsTrash3,
  BsUiChecks,
  BsUiChecksGrid,
  BsUiRadios,
  BsUiRadiosGrid,
  BsX,
  BsXLg,
} from "react-icons/bs";
import { VscBracketError } from "react-icons/vsc";

export enum IconName {
  Filter = "BsFilterCircle",
  FilterFill = "BsFilterCircleFill",
  Pencil = "BsPencil",
  Negative = "BsDashCircle",
  Gear = "BsGear",
  DownArrow = "BsArrowDownCircle",
  UpArrow = "BsArrowUpCircle",
  LeftArrow = "BsArrowLeftCircle",
  RightArrow = "BsArrowRightCircle",
  CardText = "BsCardText",
  CloseLarge = "BsXLg",
  CloseSmall = "BsX",
  Checks = "BsUiChecks",
  ChecksGrid = "BsUiChecksGrid",
  Radios = "BsUiRadios",
  RadiosGrid = "BsUiRadiosGrid",
  Trash = "BsTrash3",
  NewTab = "BsBoxArrowInUpRight",
  Expand = "BsArrowsAngleExpand",
  Table = "BsTable",
  Calendar = "BsCalendarDate",
  ChartSteps = "BsBarChartSteps",
  ChartLine = "BsBarChartLine",
  Chart = "BsBarChart",
  List = "BsList",
}

// TODO: use enums better

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
  [IconName.CardText]: BsCardText,
  [IconName.CloseLarge]: BsXLg,
  [IconName.CloseSmall]: BsX,
  [IconName.Checks]: BsUiChecks,
  [IconName.ChecksGrid]: BsUiChecksGrid,
  [IconName.Radios]: BsUiRadios,
  [IconName.RadiosGrid]: BsUiRadiosGrid,
  [IconName.Trash]: BsTrash3,
  [IconName.Table]: BsTable,
  [IconName.NewTab]: BsBoxArrowInUpRight,
  [IconName.Expand]: BsArrowsAngleExpand,
  [IconName.Calendar]: BsCalendarDate,
  [IconName.ChartSteps]: BsBarChartSteps,
  [IconName.ChartLine]: BsBarChartLine,
  [IconName.Chart]: BsBarChart,
  [IconName.List]: BsList, // there are more list
  // get chevron
};

export type BaseIconProps = Readonly<{
  name: IconName;
}>;

// TODO: add color tones to the icon

export default function Icon({ name }: BaseIconProps) {
  const IconComponent = IconMap[name] || VscBracketError; // IconComponent is defaulted to error icon if name is invalid
  return <IconComponent />;
}
