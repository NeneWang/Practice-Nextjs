import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
function addMeetupHandler(meetupData){}

  return (
    <section>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      <div>New Meetup Page</div>
    </section>
  );
}

export default NewMeetupPage;
