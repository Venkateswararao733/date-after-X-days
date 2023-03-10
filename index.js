const addDays = require("date-fns/addDays");

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  return `${day}-${month + 1}-${year}`;
};

module.exports = getDateAfterXDays;
