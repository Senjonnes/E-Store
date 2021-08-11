import MeetupItem from "../MeetupItem/MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  const dataList = () => {
    return props.meetups.map((m) => {
      return <MeetupItem key={m.id} meetup={m} />;
    });
  };

  return <ul className={classes.list}>{dataList()}</ul>;
};

export default MeetupList;
