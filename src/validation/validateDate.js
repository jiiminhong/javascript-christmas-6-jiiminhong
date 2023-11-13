import { DATE_ERROR } from "../messages/errorMessage";

const validateDate = (date) => {
  if (!(date >= 1 && date <= 31)) throw new Error(DATE_ERROR.valid);

  if (isNaN(date)) throw new Error(DATE_ERROR.type);
};

export default validateDate;
