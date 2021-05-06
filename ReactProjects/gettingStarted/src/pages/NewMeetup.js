import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://descartable-server-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers:{
          'Content-Type': 'appliaction/json'
        }
      }
    );
  }

  return (
    <section>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      <div>New Meetup Page</div>
    </section>
  );
}

export default NewMeetupPage;
