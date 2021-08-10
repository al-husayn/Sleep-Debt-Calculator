const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 9;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 4;
      break;
    case "saturday":
      return 7.5;
      break;
    case "sunday":
      return 11;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = (idealSleepHours) => idealSleepHours * 7;

// console.log(getIdealSleepHours(8))

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return "You get the perfect ammound of sleep!";
  } else if (actualSleepHours > idealSleepHours) {
    return `You are sleeping ${
      actualSleepHours - idealSleepHours
    } hours more than needed per week! Sleep less!`;
  } else if (actualSleepHours < idealSleepHours) {
    return `You are sleeping ${
      idealSleepHours - actualSleepHours
    } hours less than needed per week! Sleep more!`;
  }
};

console.log(calculateSleepDebt());
