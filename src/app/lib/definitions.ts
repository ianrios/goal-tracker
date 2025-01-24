export enum Buckets {
  Life = "life",
  Year = "year",
  Quarter = "quarter",
  Month = "month",
  Week = "week",
  Day = "day",
}
export type Bucket =
  | Buckets.Life
  | Buckets.Life
  | Buckets.Year
  | Buckets.Quarter
  | Buckets.Month
  | Buckets.Week
  | Buckets.Day;

export type Goal = {
  id: string;
  createdAt: Date;
  updatedAt: Date | null;
  completedAt: Date | null;
  archivedAt: Date | null;
  deletedAt: Date | null;
  title: string;
  info: string;
  deadline: Date;
  // TODO: figure out how to differentiate the types of goals (and life goals do not need a deadline)
  bucket: Bucket;
};

export type SubGoal = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  parentGoalId: string;
  childGoalId: string;
};

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
  archivedAt: Date;
  deletedAt: Date;
  title: string;
  deadline: Date;
  parentGoalId: string;
};

export type DeadlineHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  goalId: string;
  taskId: string;
};

export type EditHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  goalId: string;
  taskId: string;
};

export type GoalTypeHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  goalId: string;
};
