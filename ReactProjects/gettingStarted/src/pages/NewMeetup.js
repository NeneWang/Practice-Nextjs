import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://descartable-server-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "appliaction/json",
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      <div>New Meetup Page</div>
    </section>
  );
}

export default NewMeetupPage;
