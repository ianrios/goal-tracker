import Flex from "@/components/atoms/flex/flex";
import { tempData } from "@/util/temp-data";
import Drawer from "@/components/organisms/drawer/drawer";
import { useState } from "react";
import IconButton from "@/components/molecules/icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";
import { Bucket, Buckets, Goal } from "../lib/definitions";

// TODO: this component and folder is living in the wrong location
// TODO: create a "new section" button, section component, and type

export default function Home() {
  const [filterDone, setFilterDone] = useState<boolean>(true);
  const [filterPastDue, setFilterPastDue] = useState<boolean>(true);

  const allGoals = tempData;

  const now = new Date();

  const filter = (goal: Goal, bucket: Bucket) => {
    if (filterDone && goal.completedAt) {
      return false;
    }
    if (filterPastDue && goal.deadline < new Date()) {
      return false;
    }
    return goal.bucket === bucket;
  };

  const yearlyGoals = allGoals.filter((goal) => filter(goal, Buckets.Year));
  const quarterGoals = allGoals.filter((goal) => filter(goal, Buckets.Quarter));
  const monthlyGoals = allGoals.filter((goal) => filter(goal, Buckets.Month));
  const weeklyGoals = allGoals.filter((goal) => filter(goal, Buckets.Week));
  const dailyGoals = allGoals.filter((goal) => filter(goal, Buckets.Day));

  // Past due goals can still rely on the date comparison
  const pastDueGoals = allGoals.filter((goal) => {
    const goalDate = new Date(goal.deadline.toDateString());
    const nowDate = new Date(now.toDateString());
    return goalDate < nowDate && !goal.completedAt;
  });
  const completedGoals = allGoals.filter((goal) => !!goal.completedAt);

  const filteredGoals = [
    { title: "Past Due Goals", goals: pastDueGoals },
    { title: "Daily Goals", goals: dailyGoals },
    { title: "Weekly Goals", goals: weeklyGoals },
    { title: "Monthly Goals", goals: monthlyGoals },
    { title: "Quarterly Goals", goals: quarterGoals },
    { title: "Yearly Goals", goals: yearlyGoals },
    { title: "Completed Goals", goals: completedGoals },
  ];

  return (
    <Flex col border gap={2} p={2}>
      <Flex row border gap={2} p={2}>
        done filter
        <IconButton
          onClick={() => setFilterDone(!filterDone)}
          name={filterDone ? IconName.Filter : IconName.FilterFill}
        />
        past due filter
        <IconButton
          onClick={() => setFilterPastDue(!filterPastDue)}
          name={filterPastDue ? IconName.Filter : IconName.FilterFill}
        />
      </Flex>
      {filteredGoals.map(
        ({ title, goals }) =>
          goals.length > 0 && (
            <Drawer
              key={title}
              title={title}
              goals={goals}
              tone={title === "Past Due Goals" ? "alert" : "neutral"}
            />
          )
      )}
    </Flex>
  );
}
