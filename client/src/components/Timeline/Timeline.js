import { Chrono } from "react-chrono";
import * as config from "../../config";

import classes from "./Timeline.module.css";

import TimelineHeader from "./TimelineHeader";
import TimelineEventCard from "./TimelineEventCard";
import TimelineFooter from "./TimelineFooter";
import Modal from "../UI/Modal";

const Timeline = (props) => {
  const cardClickaHandler = (eventId) => {
    console.log(eventId);
  };

  const events = config.DUMMY_EVENTS.map((event) => {
    return (
      <TimelineEventCard
        key={event.id}
        onClick={cardClickaHandler}
        {...event}
      />
    );
  });

  return (
    <div className={classes.timeline}>
      <Modal>
        <div>Anything put here inside modal</div>
      </Modal>
      <TimelineHeader />
      <Chrono {...config.CHRONO_TIMELINE_SETTINGS}>{events}</Chrono>
      <TimelineFooter />
    </div>
  );
};

export default Timeline;
