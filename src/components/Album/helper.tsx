export const cutString = (s: String, n: number) => {
  var cut = s.indexOf(" ", n);
  if (cut == -1) return s;
  return s.substring(0, cut);
};

export const convertToDate = (date: string) => {
  return new Date(Date.parse(date));
};

// assuming your time strings will always be (H*:)(m{0,2}:)s{0,2} and never negative
export const totalTimeString = (timeStrings: Array<Number>) => {
  var totals = timeStrings.reduce(
    function (a: any, timeString: any) {
      var parts = timeString.split(":");
      var temp;
      if (parts.length > 0) {
        temp = Number(parts.pop()) + a.seconds;
        a.seconds = temp % 60;
        if (parts.length > 0) {
          temp = Number(parts.pop()) + a.minutes + (temp - a.seconds) / 60;
          a.minutes = temp % 60;
          a.hours = a.hours + (temp - a.minutes) / 60;
          if (parts.length > 0) {
            a.hours += Number(parts.pop());
          }
        }
      }

      return a;
    },
    {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  );

  // returned string will be HH(H+):mm:ss
  return [
    totals.hours + " giờ",
    totals.minutes + " phút",
    // zeroPad(totals.seconds),
  ].join(" ");
};
