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
  const pastDueGoals = allGoals.filter(
    (goal) => goal.deadline < new Date() && !goal.completedAt
  );
  const completedGoals = allGoals.filter((goal) => !!goal.completedAt);

  const filteredGoals = [
    { title: "Yearly Goals", goals: yearlyGoals },
    { title: "Quarterly Goals", goals: quarterGoals },
    { title: "Monthly Goals", goals: monthlyGoals },
    { title: "Weekly Goals", goals: weeklyGoals },
    { title: "Daily Goals", goals: dailyGoals },
    { title: "Past Due Goals", goals: pastDueGoals },
    { title: "Completed Goals", goals: completedGoals },
  ];

  return (
    <Flex col border mT={2} pB={2}>
      <Flex row border>
        done filter
        <IconButton
          onClick={() => setFilterDone(!filterDone)}
          p={2}
          m={2}
          name={filterDone ? IconName.Filter : IconName.FilterFill}
        />
        past due filter
        <IconButton
          onClick={() => setFilterPastDue(!filterPastDue)}
          p={2}
          m={2}
          name={filterPastDue ? IconName.Filter : IconName.FilterFill}
        />
      </Flex>
      {filteredGoals.map(({ title, goals }) => (
        <Drawer key={title} title={title} goals={goals} mB={0} />
      ))}
    </Flex>
  );
}
