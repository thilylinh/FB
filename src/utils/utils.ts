/* eslint-disable */
import store from "@/store";

export const isStrEmpty = (str: string): boolean => {
  return !str || str.length === 0 || str === "undefined";
};

export const isObjEmpty = (obj: any[]): boolean => {
  return !obj || Object.keys(obj).length === 0;
};

export const isArrayEmpty = (arr: any[]): boolean => {
  return !arr || arr.length === 0 || !Array.isArray(arr);
};

export const parseProxyObject = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};

export const getStateVueX = () => {
  return JSON.parse(JSON.stringify(store.state));
};

export const getQueryParams = () => {
  const state = getStateVueX();
  const queryParams = state.queryParams;
  return queryParams;
};

export const getStateStore = () => {
  const state = getStateVueX();
  const config = state;
  return config;
};

export const formatDateUTC = (date: string | Date, timeZone = 0) => {
  const dateTimeString = date;
  const dateTime = new Date(dateTimeString);

  // add time zone
  dateTime.setHours(dateTime.getHours() + timeZone);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const options: any = {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  };

  const formattedDateTime = dateTime.toLocaleString("en-US", options);
  const [datePart, timePart] = formattedDateTime.split(" ");
  const [hour, minutes, seconds] = timePart.split(":");
  const datePartClone = datePart.replace(",", "");
  const [month, day, year] = datePartClone.split("/");
  const startOfWeek = new Date(
    dateTime.getFullYear(),
    dateTime.getMonth(),
    dateTime.getDate() - dateTime.getDay() + 1
  );
  const weekDates: any = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate() + i
    );
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear().toString()}`;
    weekDates.push({
      date: formattedDate,
      day: dayNames[date.getDay()], // Use day names array
    });
  }

  const result = {
    hour,
    minutes,
    seconds,
    day,
    month,
    dayName: dayNames[dateTime.getUTCDay()], // Use day names array
    monthName: monthNames[dateTime.getMonth()], // Use month names array
    year,
    weekDates,
  };

  return result;
};

export const formatPrice = (number: number, decimal = 2) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  });
  return formatter.format(number);
};

export const compareDates = (
  date1: string | Date,
  date2: string | Date,
  timeZone = 0
) => {
  const formattedDate1 = formatDateUTC(date1, timeZone);
  const formattedDate2 = formatDateUTC(date2, timeZone);

  const d1 = new Date(
    `${formattedDate1.year}-${formattedDate1.month}-${formattedDate1.day}T${formattedDate1.hour}:${formattedDate1.minutes}:${formattedDate1.seconds}`
  );

  const d2 = new Date(
    `${formattedDate2.year}-${formattedDate2.month}-${formattedDate2.day}T${formattedDate2.hour}:${formattedDate2.minutes}:${formattedDate2.seconds}`
  );

  if (d1.getTime() < d2.getTime()) {
    return -1;
  } else if (d1 > d2) {
    return 1;
  } else {
    return 0;
  }
};

export const toFixNumber = (number: number, numberFix: number = 2) => {
  return number.toFixed(numberFix);
};
