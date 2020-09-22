import { Schedule, ScheduleSharp } from "@material-ui/icons"
import { isSameDay } from "./calendar";
import dayjs from "dayjs";

export const formatSchedule = schedule => ({
  ...schedule,
  date: dayjs(schedule.date)
});

export const setSchedules = (calendar, schedules) =>
  calendar.map(c => ({
    date: c,
    schedules: schedules.filter(e => isSameDay(e.date, c))
  }));