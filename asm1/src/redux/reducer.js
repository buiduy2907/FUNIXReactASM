import { STAFFS } from "../shared/staffs";
import { DEPARTMENTS } from "../shared/staffs";

export const initState = {
  staffs: STAFFS,
  departments: DEPARTMENTS,
};

export const Reducer = (state = initState, action) => {
  return state;
};
