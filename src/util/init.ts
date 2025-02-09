import { SubGoal } from "@/app/lib/definitions";

// ids are uuids
// import {v4 as uuidv4} from 'uuid';
// let myuuid = uuidv4();
// dates are the tojson version of a new date object
// console.log(new Date().toJSON());
// 2025-01-23T13:11:00.741Z

// just purely entering raw data was about half the time it took compared to writing it all down in the book. very good.

// TODO: add a little color marker to tell which goals do not have sub goals (if so, they should get a color if they are a parent goal, otherwise, they should get a light version of the parent goal color, or their own color combo?)
export const tempSubGoalData: SubGoal[] = [
  // TODO: throw alert error if any goal has more than 1 parent (should not be possible)
  {
    id: "8a6e0sub-goal-data-b79d-d97027100000",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // music producer
    parentGoalId: "8a6e0804-2bd1-temp-b79d-d97027f9071c",
    // endz cd box set
    childGoalId: "8a6e0804-2b12-temp-b79d-d97027f9071n",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97021000000",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // music producer
    parentGoalId: "8a6e0804-2bd1-temp-b79d-d97027f9071c",
    // schedule six year summer releases
    childGoalId: "8a6e0804-2b19-temp-b79d-d97027f9071u",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027f90000",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // schedule six year summer releases
    parentGoalId: "8a6e0804-2b19-temp-b79d-d97027f9071u",
    // listen to all dnb projects
    childGoalId: "8k6e0804-2b35-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027f90001",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // eurorack hardware developer
    parentGoalId: "8a6e0804-2bd3-temp-b79d-d97027f9071e",
    // build the first oleg delay
    childGoalId: "8d6e0804-2b28-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97021000002",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // visit 2 new countries
    parentGoalId: "8a6e0804-2bd2-temp-b79d-d97027f9071d",
    // morocco trip
    childGoalId: "8a6e0804-2b16-temp-b79d-d97027f9071r",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97021000012",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // visit 2 new countries
    parentGoalId: "8a6e0804-2bd2-temp-b79d-d97027f9071d",
    // get new passport
    childGoalId: "8a6e0804-2b18-temp-b79d-d97027f9071t",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027f90003",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // read all books
    parentGoalId: "8a6e0804-2bd4-temp-b79d-d97027f9071f",
    // amanda montell book
    childGoalId: "8a6e0804-2b21-temp-b79d-d97027f9071w",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027190004",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // healthy weight goal
    parentGoalId: "8a6e0804-2bd6-temp-b79d-d97027f9071h",
    // get to 175 lbs
    childGoalId: "8a6e0804-2b15-temp-b79d-d97027f9071q",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027290004",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // healthy weight goal
    parentGoalId: "8a6e0804-2bd6-temp-b79d-d97027f9071h",
    // be a fit man
    childGoalId: "8a6e0804-2bd5-temp-b79d-d97027f9071g",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027390004",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // healthy weight goal
    parentGoalId: "8a6e0804-2bd6-temp-b79d-d97027f9071h",
    // be a healthy man
    childGoalId: "8a6e0804-2bd7-temp-b79d-d97027f9071i",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027190005",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // be handyman
    parentGoalId: "8a6e0804-2bd8-temp-b79d-d97027f9071j",
    // schedule bathroom renovation
    childGoalId: "8a6e0804-2b17-temp-b79d-d97027f9071s",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027290005",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // schedule bathroom renovation
    parentGoalId: "8a6e0804-2b17-temp-b79d-d97027f9071s",
    // email david
    childGoalId: "8y6e0804-2b49-temp-b79d-d97027f1371a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027390005",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // be handyman
    parentGoalId: "8a6e0804-2bd8-temp-b79d-d97027f9071j",
    // install screen door
    childGoalId: "8a6e0804-2b24-temp-b79d-d97027f9071z",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027190105",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // be handyman
    parentGoalId: "8a6e0804-2bd8-temp-b79d-d97027f9071j",
    // install sliding barn door
    childGoalId: "8a6e0804-2b24-door-b79d-d97027f9071z",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027290105",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // be handyman
    parentGoalId: "8a6e0804-2bd8-temp-b79d-d97027f9071j",
    // install 2 fans
    childGoalId: "8a6e0804-2b24-fans-b79d-d97027f9071z",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027390105",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // be handyman
    parentGoalId: "8a6e0804-2bd8-temp-b79d-d97027f9071j",
    // install 4 lights
    childGoalId: "8a6e0804-2b24-ligh-ts9d-d97027f9071z",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027190006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // add a type to "show as a picked goal vs a backlog task vs a scheduled but not yet completed goal (like go to omega mart)"
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    // book ski trip
    childGoalId: "8a6e0804-2b23-temp-b79d-d97027f9071y",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027290006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    // become new yorker
    childGoalId: "8a6e0804-2bd0-temp-b79d-d97027f9071b",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027390006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    // fix 12 things around house
    childGoalId: "8a6e0804-2bd8-temp-b79d-d97027f9071j",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027490006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    // develop a eurorack module
    childGoalId: "8a6e0804-2bd3-temp-b79d-d97027f9071e",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027590006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    // visit 2 new countries
    childGoalId: "8a6e0804-2bd2-temp-b79d-d97027f9071d",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027690006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    // release music 12 times
    childGoalId: "8a6e0804-2bd1-temp-b79d-d97027f9071c",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027790006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    // get to healthy weight
    childGoalId: "8a6e0804-2bd6-temp-b79d-d97027f9071h",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027890006",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // add a type to "show as a picked goal vs a backlog task vs a scheduled but not yet completed goal (like go to omega mart)"
    // blackout bingo
    parentGoalId: "8a6e0804-2b10-temp-b79d-d97027f9071l",
    childGoalId: "",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027190007",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // marie kondo entire house
    parentGoalId: "8a6e0804-2b13-temp-b79d-d97027f9071o",
    // listen to all records
    childGoalId: "8a6e0804-2b20-temp-b79d-d97027f9071v",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027290007",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // marie kondo entire house
    parentGoalId: "8a6e0804-2b13-temp-b79d-d97027f9071o",
    // sell and give away stuff
    childGoalId: "8a6e0804-2b26-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027390007",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // marie kondo entire house
    parentGoalId: "8a6e0804-2b13-temp-b79d-d97027f9071o",
    // organize freezer
    childGoalId: "8f6e0804-2b30-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027490007",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // marie kondo entire house
    parentGoalId: "8a6e0804-2b13-temp-b79d-d97027f9071o",
    // organize fridge
    childGoalId: "8g6e0804-2b31-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027590007",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // marie kondo entire house
    parentGoalId: "8a6e0804-2b13-temp-b79d-d97027f9071o",
    // organize pantry
    childGoalId: "8h6e0804-2b32-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027690007",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // marie kondo entire house
    parentGoalId: "8a6e0804-2b13-temp-b79d-d97027f9071o",
    // water closet room
    childGoalId: "8i6e0804-2b33-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027190008",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // develop todo webapp
    parentGoalId: "8a6e0804-2b14-temp-1111-d97027f9071p",
    // stop using trello keep and drive
    childGoalId: "8a6e0804-2b14-temp-b79d-d97027f9071p",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027290008",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // develop todo webapp
    parentGoalId: "8a6e0804-2b14-temp-1111-d97027f9071p",
    // move away from stickies and notes and tasks and unify everything in one place
    childGoalId: "8b6e0804-2b25-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027390008",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // develop todo webapp
    parentGoalId: "8a6e0804-2b14-temp-1111-d97027f9071p",
    // app mvp
    childGoalId: "8n6e0804-2b38-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027490008",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // get new passport
    parentGoalId: "8a6e0804-2b18-temp-b79d-d97027f9071t",
    // get passport photo
    childGoalId: "8a6e0804-2b18-temp-b79d-d97000f9071t",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027590008",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // adhd therapist checklist
    parentGoalId: "8r6e0804-2b42-temp-b79d-d97027f9071a",
    // 5 whys
    childGoalId: "8o6e0804-2b39-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027690008",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // adhd therapist checklist
    parentGoalId: "8r6e0804-2b42-temp-b79d-d97027f9071a",
    // self compassion test
    childGoalId: "8p6e0804-2b40-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027790008",
    createdAt: new Date("2025-01-24T13:11:00.741Z"),
    updatedAt: new Date("2025-01-24T13:11:00.741Z"),
    deletedAt: null,
    // adhd therapist checklist
    parentGoalId: "8r6e0804-2b42-temp-b79d-d97027f9071a",
    // get book
    childGoalId: "8q6e0804-2b41-temp-b79d-d97027f9071a",
  },
  {
    id: "8a6e0sub-goal-data-b79d-d97027790009",
    createdAt: new Date("2025-02-03T00:00:00.741Z"),
    updatedAt: new Date("2025-02-03T13:11:00.741Z"),
    deletedAt: null,
    // set up goals and tasks and stuff
    parentGoalId: "8b6e0804-2b25-temp-b79d-d97027f9071a",
    // set up database
    childGoalId: "8b6edata-2b25-temp-b79d-d97027f9071a",
  },
];
