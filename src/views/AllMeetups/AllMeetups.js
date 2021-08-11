import { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  const handleGetMeetup = () => {
    setIsLoading(true);
    fetch("https://e-store-3efb2-default-rtdb.firebaseio.com/meetups.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  };

  useEffect(() => {
    handleGetMeetup();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetupsPage;
