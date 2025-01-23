import globalStyles from "@/app/ui/global.module.css";
import Flex from "@/components/atoms/flex/flex";
import clsx from "clsx";
import { tempData } from "@/util/temp-data";
import Drawer from "@/components/organisms/drawer/drawer";

// TODO: this component and folder is living in the wrong location
// TODO: create a "new section" button, section component, and type

export default function Home() {
  const allGoals = tempData;

  const yearlyGoals = allGoals.filter((goal) => goal.bucket === "year");
  const quarterlyGoals = allGoals.filter((goal) => goal.bucket === "quarter");
  const monthlyGoals = allGoals.filter((goal) => goal.bucket === "month");
  const weeklyGoals = allGoals.filter((goal) => goal.bucket === "week");
  const dailyGoals = allGoals.filter((goal) => goal.bucket === "day");

  // Past due goals can still rely on the date comparison
  const pastDueGoals = allGoals.filter(
    (goal) => goal.deadline < new Date() && !goal.completedAt
  );

  // Results
  console.log("Yearly Goals:", yearlyGoals);
  console.log("Quarterly Goals:", quarterlyGoals);
  console.log("Monthly Goals:", monthlyGoals);
  console.log("Weekly Goals:", weeklyGoals);
  console.log("Daily Goals:", dailyGoals);
  console.log("Past Due Goals:", pastDueGoals);

  const filteredGoals = [
    { title: "Yearly Goals", goals: yearlyGoals },
    { title: "Quarterly Goals", goals: quarterlyGoals },
    { title: "Monthly Goals", goals: monthlyGoals },
    { title: "Weekly Goals", goals: weeklyGoals },
    { title: "Daily Goals", goals: dailyGoals },
    { title: "Past Due Goals", goals: pastDueGoals },
  ];

  return (
    <Flex
      margin={2}
      paddingBottom={2}
      col
      className={clsx(
        globalStyles["border-tone-info"],
        globalStyles.border,
        globalStyles.borderRounded
      )}
    >
      {filteredGoals.map(({ title, goals }) => (
        <Drawer key={title} title={title} goals={goals} />
      ))}
    </Flex>
  );
}
