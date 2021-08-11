import { useRef } from "react";
import Card from "../../ui/Card/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const meetupTitle = useRef();
  const meetupImage = useRef();
  const meetupAddress = useRef();
  const meetupDescription = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      title: meetupTitle.current.value,
      image: meetupImage.current.value,
      address: meetupAddress.current.value,
      description: meetupDescription.current.value,
    };

    console.log(data);
    props.createMeetup(data);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={meetupTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={meetupImage} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={meetupAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={meetupDescription}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
