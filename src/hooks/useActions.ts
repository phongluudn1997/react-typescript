import { actionCreatores } from "../state";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreatores, dispatch);
};
