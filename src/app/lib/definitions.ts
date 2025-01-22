export type Goal = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt: Date;
  archivedAt: Date;
  deletedAt: Date;
  title: string;
  info: string;
  deadline: Date;
  goalType: "life" | "year" | "quarter" | "month" | "week" | "day";
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
