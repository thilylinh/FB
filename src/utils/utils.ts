/* eslint-disable */

export const isStrEmpty = (str: string): boolean => {
  return !str || str.length === 0 || str === "undefined";
};

export const isObjEmpty = (obj: any[]): boolean => {
  return !obj || Object.keys(obj).length === 0;
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