"use client";
import Flex, { ToneOptions } from "@/components/atoms/flex/flex";
import Accordion from "@/components/organisms/accordion/accordion";
import { useState } from "react";
import IconButton from "@/components/molecules/icon-button/icon-button";
import { IconName } from "@/components/atoms/icon/icon";
import { Bucket, Buckets, Goal } from "../lib/definitions";
import { goals } from "@/pages/api/goals/data/init";

// TODO: this component and folder is living in the wrong location
// TODO: create a "new section" button, section component, and type

export default function Home() {
  const [filterDone, setFilterDone] = useState<boolean>(true);
  const [filterPastDue, setFilterPastDue] = useState<boolean>(true);

  // const allGoals = tempData;
  // const allGoals: Goal[] = [];
  const allGoals = goals;

  const now = new Date();

  const filter = (goal: Goal, bucket: Bucket) => {
    // TODO: create one large filter function to be used in all buckets
    if (goal.archivedAt) {
      return false;
    }
    if (goal.deletedAt) {
      return false;
    }
    if (filterDone && goal.completedAt) {
      return false;
    }
    const goalDate = new Date(goal.deadline.toDateString());
    const nowDate = new Date(now.toDateString());
    if (filterPastDue && goalDate < nowDate) {
      return false;
    }
    return goal.bucket === bucket;
  };

  // These we filter for each bucket
  const yearlyGoals = allGoals.filter((goal) => filter(goal, Buckets.Year));
  const quarterGoals = allGoals.filter((goal) => filter(goal, Buckets.Quarter));
  const monthlyGoals = allGoals.filter((goal) => filter(goal, Buckets.Month));
  const weeklyGoals = allGoals.filter((goal) => filter(goal, Buckets.Week));
  const dailyGoals = allGoals.filter((goal) => filter(goal, Buckets.Day));

  // these do not depend on a specific bucket
  // Past due goals can still rely on the date comparison but do not care which bucket they live in
  const pastDueGoals = allGoals.filter((goal) => {
    if (goal.archivedAt) {
      return false;
    }
    if (goal.deletedAt) {
      return false;
    }
    if (goal.completedAt) {
      return false;
    }
    const goalDate = new Date(goal.deadline.toDateString());
    const nowDate = new Date(now.toDateString());
    return goalDate < nowDate;
  });
  const completedGoals = allGoals.filter((goal) => {
    if (goal.archivedAt) {
      return false;
    }
    if (goal.deletedAt) {
      return false;
    }
    return !!goal.completedAt;
  });

  const filteredGoals = [
    { title: "Past Due Goals (incompleted)", goals: pastDueGoals },
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
        <IconButton
          reverse
          text={`filtering done? ${filterDone ? "Y" : "N"}`}
          onClick={() => setFilterDone(!filterDone)}
          name={filterDone ? IconName.FilterFill : IconName.Filter}
        />
        <IconButton
          reverse
          text={`filtering past due? ${filterPastDue ? "Y" : "N"}`}
          onClick={() => setFilterPastDue(!filterPastDue)}
          name={filterPastDue ? IconName.FilterFill : IconName.Filter}
        />
      </Flex>
      {filteredGoals.map(
        ({ title, goals }) =>
          goals.length > 0 && (
            <Accordion
              expanded={title !== "Completed Goals"}
              key={title}
              title={title}
              goals={goals}
              tone={
                title === "Past Due Goals (incompleted)"
                  ? ToneOptions.Alert
                  : ToneOptions.Neutral
              }
            />
          )
      )}
    </Flex>
  );
}
