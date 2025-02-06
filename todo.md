things to do

- [x] create this list of todos for the app
- [x] i probably dont need two branches but idk
- [x] create the wip branch
- [x] update the base branch so that i get github tracking metrics
- [x] create the mvp
- [x] refine the mvp
- [x] gap prop for flex
- [x] modal / dialog component
- [x] expand button on goal
- [x] add justify props to flex
- [x] add align props to flex
- [x] use the sub goals array on the app to group the goals
- [x] button hover, active, and focus effects
- [x] see children goals or tasks on parent goal
- [x] see parent goal on child goal or task
- [x] create a database that i can run locally
- [ ] build up database service methods and api endpoints
  - [ ] create public and private endpoints for database within pages/api
  - [ ] create CRUD endpoints in public path for all table entities
    - [ ] create one
    - [ ] create many
    - [ ] read one by id
    - [ ] read all
    - [ ] read all by status
    - [ ] read all with relationships
    - [ ] read one by id with status
    - [ ] read one by id with status and relationships
    - [ ] update one by id
    - [ ] update many by ids
    - [ ] update many by status
    - [ ] update many by relationships
    - [ ] delete one by id (soft delete, technically update)
    - [ ] delete many by ids (soft delete, technically update)
    - [ ] archive one by id (technically update)
    - [ ] archive many by ids (technically update)
    - [ ] complete one by id (technically update)
    - [ ] complete many by ids (technically update)
  - [ ] create seeder private endpoint for database (uses create many endpoint)
  - [ ] seed goals
  - [ ] view goal data on app
  - [ ] figure out how to determine public vs private access
  - [ ] create backup script for all tables in database
  - [ ] create schema file?
  - [ ] create cache?
  - [ ]
  - [ ]
  - [ ]
- [ ]
- [ ] form component
- [ ] input component
- [ ] create list of tones and use for buttons, background hover, active outline, borders, icon color, and text
- [ ] different border color or texture on goal vs task (can tasks have less features?)
- [ ] convert task to goal (mark as a change in the db)
- [ ] convert goal to task (only if possible, no child goals, no child tasks, no body, just title)
- [ ] high level overview (x child goals complete (if child goals exist)) on minimized card
- [ ] button component that has text AND icon (select left or right via prop)
- [ ] scrape all the goals for notes on what to do in the app
- [ ] create filters section (instead of having lame buttons)
- [ ] push expand button to bottom of goal card
- [ ] set a list of widths for flex to be able to take as props
- [ ] set a list of min widths for flex to be able to take as props
- [ ] set a list of max widths for flex to be able to take as props
- [ ] set a list of heights for flex to be able to take as props
- [ ] set a list of min heights for flex to be able to take as props
- [ ] set a list of max heights for flex to be able to take as props
- [ ] Add info section to accordion header
  - [ ] what month, week, day it currently is, etc. (how much time is left in this section, etc)
  - [ ] add filters to each section. (interact with global filters, override if set (none, true, false))
  - [ ] section settings button
  - [ ] group edit all goals in this section
- [ ] come up with a way to visualize the tables in the app

MVP:

-
-
- MUST HAVE:

manually select what shows up on home page using a star system or something like that to assign priority

tabs: today, all, backlog, unassigned, archived, deleted

manually reassign goals to parent goals

use database

have a today page

show a red alert if more than 4 items are in today (make me update and move around)

make backlog tab where everything shows up (grouped by parent goal)

have fuzzy search

be able to check off tasks

be able to hide (archive tasks only when completed) - do not allow archive of parent goals when child goals exist

be able to delete (deleted at only when not completed) - do not allow delete of parent goals when child goals exist

allow reassignment of parent and child goals

force editing deadline/parent goal, mark as complete, or delete when past due

-
-
- SHOULD HAVE:

click into goal to see more

external linking

error when trying to set a parent goal to itself
error when trying to set a child goal to have more than 1 parent
allow child goal to be parentless

history of changes

-
-
- COULD HAVE:

drag and drop

inline edit

show list of all deleted

show list of all archived

undo archive (if parent does not exist, use none)
undo delete (if parent does not exist, use none)

list of life goals (no deadline)

implement bingo

metrics

-
-
- WONT HAVE:
