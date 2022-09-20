export function isMappable(array: object[]): boolean {
  if (Array.isArray(array)) return array.length > 0;
  return false;
}

export const isValidInput = (value: string) => {
  if (!value || value === "") return false;
  return true;
};

export function convertToDate(date: string) {
  if (!date) return "";
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  let string = day + "-" + month + "-" + year;
  return string;
}

export function convertToShortHours(hours: string) {
  if (!hours) return "";
  return hours.substring(0, 2) == "00" ? "0h" : hours.substring(0, 2) + "h";
}

export function convertToShortDate(date: string, sign = "/") {
  if (!date) return "";
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  let string = day + sign + month;
  return string;
}

export function equalToday(mydate: string | number | Date, type = ">") {
  try {
    const q = new Date();
    const m = q.getMonth();
    const d = q.getDate();
    const y = q.getFullYear();
    const date = new Date(y, m, d);
    mydate = new Date(mydate);
    switch (type) {
      case ">": {
        if (date.getTime() > mydate.getTime()) {
          return false;
        }
        break;
      }
      case ">=": {
        if (date.getTime() >= mydate.getTime()) {
          return false;
        }
        break;
      }
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export function equalTodayWithTime(mydate: string | number | Date) {
  return new Date(mydate) > new Date() ? false : true;
}

export function greaterComparisonDatetime(
  firstTime: string | Date,
  secondTime: string | Date
) {
  return new Date(firstTime).getTime() < new Date(secondTime).getTime();
}

export function formatPeriod(fromDate: string, toDate: string) {
  try {
    const fromDateOriginal = new Date(fromDate);
    const toDateOriginal = new Date(toDate);
    return `${fromDateOriginal.getDate() ?? "--"}/${
      fromDateOriginal.getMonth() + 1 ?? "--"
    } - ${toDateOriginal.getDate() ?? "--"}/${
      toDateOriginal.getMonth() + 1 ?? "--"
    }/${toDateOriginal.getFullYear() ?? "----"}`;
  } catch (e) {
    console.log(e);
  }
}

export function formatWeek(fromDate: string, toDate: string) {
  try {
    const fromDateOriginal = new Date(fromDate);
    const toDateOriginal = new Date(toDate);
    return `${fromDateOriginal.getDate() ?? "--"} - ${
      toDateOriginal.getDate() ?? "--"
    }/${toDateOriginal.getMonth() + 1 ?? "--"}`;
  } catch (e) {
    console.log(e);
  }
}

/**
 * format date to timestamp
 * @param {*} strDate
 */
export function toTimestamp(strDate: string) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}

export function secondToTime(second: number) {
  var date = new Date(0);
  try {
    date.setSeconds(second); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 5);
    return timeString;
  } catch (e) {
    return second;
  }
}

export function checkURLIsImage(url: { match: (arg0: RegExp) => null }) {
  return url?.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

export function formatDatePure(date: {
  getDate: () => any;
  getMonth: () => number;
  getFullYear: () => any;
}) {
  if (!date) return "";
  try {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  } catch (e) {
    console.log(e);
    return date;
  }
}

export function findOne(list: any[], item: string | any[]) {
  try {
    if (item.length == 0) return true;
    return list.some(function (v) {
      return item.indexOf(v) >= 0;
    });
  } catch (e) {
    return false;
  }
}

export function randomString(length: number) {
  let radom13chars = function () {
    return Math.random().toString(16).substring(2, 15);
  };
  let loops = Math.ceil(length / 13);
  return new Array(loops)
    .fill(radom13chars)
    .reduce((string, func) => {
      return string + func();
    }, "")
    .substring(0, length);
}

export function formatDateMaterial(date: string) {
  if (!date) return "";
  try {
    return date.split("/").reverse().join("-");
  } catch (e) {
    console.log(e);
    return date;
  }
}

export function stringToFormatDate(string: string) {
  try {
    let date = new Date(Date.parse(string));
    return (
      date.getDate().toString().padStart(2, "0") +
      "/" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "/" +
      date.getFullYear()
    );
  } catch (e) {
    return string;
  }
}

export function stringToFormatTime(string: string) {
  try {
    let date = new Date(Date.parse(string));
    return (
      date.getHours().toString().padStart(2, "0") +
      ":" +
      date.getMinutes().toString().padStart(2, "0") +
      " "
    );
  } catch (e) {
    return string;
  }
}

export function calculateCreatedime(timeStart: string | number | Date) {
  const createdTime = new Date(timeStart);
  const now = new Date();
  const timeSpace = now.getDate() - createdTime.getDate();

  if (timeSpace == 0) return "today";
  else if (timeSpace <= 7 && timeSpace > 0) return timeSpace + " days ago";
  else if (timeSpace % 7 < 4) return timeSpace + " weeks ago";
  else return timeSpace + "month ago";
}
