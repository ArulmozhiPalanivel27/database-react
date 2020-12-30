import { toast } from "react-toastify";
import { ACTION_TYPES } from "./action";

const initialState = {
  employee: null,
  employee: [],
};

export default function sampleDataReducer(state = initialState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) {
      
    case ACTION_TYPES.GET_EMPLOYEE_PROFILE_SUCCESS:
      newState.employeeprofile = action.payload.data;
      toast.success("Employee profile show successfully");
      return newState;

    case ACTION_TYPES.GET_EMPLOYEE_PROFILE_FAILED:
      newState.employeeprofile = null;
      return newState;

    case ACTION_TYPES.SEARCH_EMPLOYEE_PROFILE_SUCCESS:
      newState.employeeprofile = null;
      return newState;

    case ACTION_TYPES.SEARCH_EMPLOYEE_PROFILE_FAILED:
      newState.employeeprofile = null;
      return newState;

    case ACTION_TYPES.UPDATE_EMPLOYEE_PROFILE_SUCCESS:
      newState.employeeprofile = null;
      return newState;

    case ACTION_TYPES.UPDATE_EMPLOYEE_PROFILE_FAILED:
      newState.employeeprofile = null;
      return newState;

    case ACTION_TYPES.PUT_EMPLOYEE_PROFILE_SUCCESS:
      newState.employeeprofile = null;
      return newState;


    case ACTION_TYPES.PUT_EMPLOYEE_PROFILE_FAILED:
        newState.employeeprofile = null;
        return newState;


    case ACTION_TYPES.DELETE_EMPLOYEE_PROFILE_SUCCESS:
        newState.employeeprofile = null;
        return newState;


    case ACTION_TYPES.DELETE_EMPLOYEE_PROFILE_DELETE:
        newState.employeeprofile = null;
        return newState;

    default:
      return newState;
  }
}
