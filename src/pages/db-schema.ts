export type Table = {
  name: string;
};

export const databaseSchema = {
  tables: [{ table: "goals" }, { table: "sub_goals" }],
};
