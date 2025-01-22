import styles from "@/app/ui/global.module.css";
import Card from "@/components/card/card";
import Flex from "@/components/flex/flex";
import clsx from "clsx";

export default function Home() {
  return (
    <Flex
      margin={2}
      col
      className={clsx(
        styles["border-tone-success"],
        styles.border,
        styles.borderRounded
      )}
    >
      <Flex
        className={clsx(
          styles["border-tone-alert"],
          styles.border,
          styles.borderRounded
        )}
        padding={2}
        margin={2}
      >
        <Flex col>
          <Flex>
            <Card
              tone="info"
              header="Yearly Goals"
              body="show quarters, months, weeks, and days left here"
            />
            <Card
              header="Be a New Yorker by October 2025"
              body="plan on spreadsheet"
              footer="link to spreadsheet as an option"
            />
            <Card
              header="Be a Prolific Music Producer"
              body="Release Music 12 times (0/12) by the end of the year"
              footer="button to open and see more, see sub goals and tasks"
            />
            <Card
              header="Visit 2 new countries"
              body=" little checklist tracker?"
              footer="option to edit and see more"
            />
            <Card
              header="Become a hardware developer"
              body="Develop my own eurorack modules"
              footer="edit title here"
            />
          </Flex>
          <Flex>
            <Card
              header="read all books on nightstand before move"
              body="read (0/8) books so far since creating goal"
              footer="show deadline for the goal"
            />
            <Card
              header="be a fit man"
              body="show history of exercise - i guess this would be a different kind of card"
              footer=" show completed today or not (if not, last time completed)"
            />
            <Card
              header="get to and maintain a healthy weight"
              body="this is a list of reminders that I can check off as a daily task: did you log your food? did you log your weight"
              footer=" can show days since last time logged"
            />
          </Flex>
          <Flex>
            <Card
              header="Be a healthy man"
              body="this can be a reminder to stop overeating, stop snacking, stop drinking"
              footer="maybe this can be a tracker to see last time since i clicked 'I drank today/yesterday'"
            />
            <Card
              header="be a handyman"
              body="fix 12 things around the house including clothes, furniture, electronics, etc"
              footer="this can show how long each task has been outstanding"
            />
            <Card
              header="document all hobbies by photo"
              body="prompt to make a list of all the hobbies"
              footer="once the list is made, i can have checklists for each hobby to show the photos"
            />
          </Flex>
          <Flex>
            <Card
              header="get 2025 blackout bingo!"
              body=" little bingo grid? maybe just show a photo of the bingo? maybe when i open this one, i can see a list of all the bingo tasks and what parent goals they are attached to?"
              footer="this one seems more complex"
            />
            <Card
              header="be a knowledge source at work"
              body="how? by my mid year review"
              footer="not sure how to quantify this"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className={clsx(
          styles["border-tone-alert"],
          styles.border,
          styles.borderRounded
        )}
        padding={2}
        margin={2}
      >
        <Flex col>
          <Flex>
            <Card
              tone="info"
              header="Quarterly Goals"
              body="Q1 - show months, weeks, and days left here"
            />
            <Card
              header="Release ENDZ CD Box Set"
              body="with stream party"
              footer="show parent goal badge"
            />
            <Card
              header="marie kondo entire house"
              body="11 rooms left"
              footer="maybe list all the rooms as checkboxes? sub tasks probably"
            />
            <Card
              header="get to 175 lbs"
              body="overeating doesnt help"
              footer="show days left i guess"
            />
            <Card
              header="plan and book morocco trip"
              body="create sub tasks"
              footer="maybe make a 'trip template' or something for a known style of repeating task"
            />
          </Flex>
          <Flex>
            <Card
              header="schedule bathroom renovation"
              body="need to send david changes to the quote so he can re-quote us"
              footer="ugh"
            />
            <Card
              header="stop using trello, keep and drive"
              body="hopefully this is the solution that i need"
              footer="i will complete this task"
            />
            <Card
              header="get new passport"
              body="sub tasks: olivia print the form, ian mail the form with the check and my current passport"
              footer="show tasks left"
            />
          </Flex>
          <Flex>
            <Card
              header="schedule all six year summer releases"
              body="part of the music goal"
              footer="deadline and tasks left"
            />
            <Card
              header="listen to all records"
              body="put guestimate here about how many are left"
              footer="i think its like 1/10 done"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className={clsx(
          styles["border-tone-alert"],
          styles.border,
          styles.borderRounded
        )}
        padding={2}
        margin={2}
      >
        <Flex col>
          <Flex>
            <Card
              tone="info"
              header="Monthly Goals"
              body="January - show weeks and days left here"
            />
            <Card
              header="finish reading amanda montell book"
              body="part of the book goal"
              footer=""
            />
            <Card
              header="get money out of aloaded"
              body="this is a task on its own for now until i create a larger goal for it"
              footer="should i create a tab for untracked goals and tasks?"
            />
            <Card
              header="book ski trip"
              body="part of yearly vacation planning sticky"
              footer=""
            />
            <Card
              header="install screen door"
              body="make sub tasks - research, purchase, install"
              footer="part of house improvements goal"
            />
          </Flex>
          <Flex>
            <Card
              header="unify tasks, goals stickies, and do list, and 5 year plan and 30/60 90"
              body="i believe that this app is the solution"
              footer="gotta make it quick so that i can actually use it"
            />
            <Card
              header="post free stuff to facebook"
              body="is this an olivia task"
              footer="i dont think i need this one, but i should make a list of things that need to get sold / gotten rid of"
            />
            <Card
              header="use visa for all auto payments"
              body="slowly getting there"
              footer="gotta switch the default payment to the visa on all sites too, like amazon and paypal"
            />
          </Flex>
          <Flex>
            <Card
              header="build my first oleg delay"
              body="add this to the hardware developer goal"
              footer="maybe i can create lots of goals and tasks and star or select which ones to show on the home page as priority vs what goes in the complete backlog tab? - if i do this i should have a fuzzy search to make sure im not creating lots of duplicates"
            />
            <Card
              header="put christmas stuff away"
              body="gotta make sure to get everything so i can do it in one trip"
              footer="id like to do it sooner than later"
            />
            <Card
              header="organize fridge"
              body="part of marie kondo"
              footer=""
            />
          </Flex>
          <Flex>
            <Card
              header="organize freezer"
              body="part of marie kondo"
              footer=""
            />
            <Card
              header="organize pantry"
              body="part of marie kondo"
              footer=""
            />
            <Card
              header="schedule dentist appointment"
              body="call uk healthcare?"
              footer="things like this can be refined daily but i need to keep track of how long they have been sitting outstanding just waiting around for me to do them"
            />
          </Flex>
          <Flex>
            <Card
              header="listen to all dnb projects"
              body="this is a sub task of schedule the 6 year summer"
              footer="now we are getting into refinement, what should the badges look like? - maybe i make a gui customizable badge creator color and text selector"
            />
            <Card
              header="pay credit cards in full"
              body="this one is a monthly repeating task"
              footer="i should be good to do it my friday this week"
            />
            <Card
              header="set up auto investments"
              body="i really want to do this one in january otherwise its kind of dumb"
              footer="this is part of the finance life goal but its not a 2025 goal"
            />
          </Flex>
          <Flex>
            <Card
              header="decide what is MVP for this app"
              body="so many ideas here but i think it can work really well"
              footer="needs to work for me to view on the computer. mobile can come later"
            />
            <Card
              header="answer the 5 whys for why i hate failing"
              body="gotta do this before my next therapy session"
              footer="life goal? learn to live with adhd / get good at living with adhd, maybe i do need an adderall prescription"
            />
            <Card
              header="do the self-compassion.org test"
              body="this is part of the adhd goal"
              footer="need to add deep linking to the app and also external linking in new tab"
            />
          </Flex>
          <Flex>
            <Card
              header="get kristen neff book"
              body="part of adhd tasks"
              footer="can do this today, margo gave me the password"
            />
            <Card
              header="make list of topics for therapy"
              body="maybe make this task each time i have an appointment coming up?"
              footer="auto create tasks based on other tasks, like automatic workflows that are goal dependent?"
            />
            <Card
              header="file taxes"
              body="need to come up with sub tasks: get all paperwork (what paperwork)"
              footer="one time task with a hard deadline"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className={clsx(
          styles["border-tone-alert"],
          styles.border,
          styles.borderRounded
        )}
        padding={2}
        margin={2}
      >
        <Flex col>
          <Flex>
            <Card
              tone="info"
              header="Weekly Goals"
              body="show days left here"
            />
            <Card
              header="pick up dry cleaning"
              body="gotta do this one soon so i dont get charged"
              footer=""
            />
            <Card
              header="do the laundry"
              body="this kind of task includes sub tasks"
              footer="this should automatically pop up every week or 2 weeks or something idk"
            />
            <Card
              header="grocery shopping"
              body="this should be part of a meal plan sticky that happens once a week or something idk"
              footer="it should include automatic tasks like take inventory"
            />
          </Flex>
          <Flex>
            <Card
              header="make french onion soup"
              body="part of this weeks meal plan"
              footer="meal plan can be its own type of calendar - should there be a calendar? interesting idea"
            />
            <Card
              header="plan feburary goals"
              body="this should be useable for february"
              footer="automatically create a notification to move goals from jan to feb when one week is left and other options for moving month goals into week goals, etc. once the deadline happens, force me to do it (move the goal (this is a change to the goal deadline), check off as completed, or delete)"
            />
            <Card
              header="confirm hoa fee is paid"
              body="on the website"
              footer="maybe add this fee to the ynab yearly subscriptions page"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className={clsx(
          styles["border-tone-alert"],
          styles.border,
          styles.borderRounded
        )}
        padding={2}
        margin={2}
      >
        <Flex col>
          <Flex>
            <Card
              tone="info"
              header="Daily Goals"
              body="show hours left here"
            />
            <Card header="tidy kitchen" body="" footer="" />
            <Card header="put all travel stuff away" body="" footer="" />
            <Card
              header="run dishwasher before bed"
              body="there should be reoccuring goals like this that i can check off or skip daily"
              footer="real tasks and goals should have a special tag / color associated with them so they can be filtered out"
            />
            <Card
              header="create a list of changes to the quote for david"
              body="do this with olivia"
              footer=""
            />
          </Flex>
          <Flex>
            <Card
              header="pack up napkins for drop off"
              body="give them away to that person that olivia found"
              footer=""
            />
            <Card header="peel pomegranetes" body="" footer="" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
