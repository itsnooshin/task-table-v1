export function DisplayPersianDate(getDate: string) {
  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const [date, time] = getDate.split("-");
  const [year, month, day] = date.split("/");

  const persianMonth = persianMonths[parseInt(month) - 1];
  const formatedTime = time.slice(0, 5);
  return `${day} ${persianMonth} ${year} ${formatedTime}`;
}
