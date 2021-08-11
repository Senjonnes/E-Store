import { useHistory } from "react-router-dom";
import NewMeetupForm from "../../components/meetups/NewMeetupForm/NewMeetupForm";

const NewMeetupPage = () => {

    const history = useHistory();

  const handleCreateMeetup = (data) => {
    fetch("https://e-store-3efb2-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
        console.log(res);
        history.replace('/');
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm createMeetup={handleCreateMeetup} />
    </section>
  );
};

export default NewMeetupPage;
