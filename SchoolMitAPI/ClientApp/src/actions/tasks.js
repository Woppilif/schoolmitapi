import axios from "axios";
//import { createMessage, returnErrors } from "./messages";
import authService from "../components/api-authorization/AuthorizeService";

import { GET_TASKS, DELETE_TASK, ADD_TASK } from "./types";

// GET TASKS
export const getTasks = () => (dispatch) => {
  axios
    .get("/api/TaskManagers/")
    .then((res) => {
      dispatch({
        type: GET_TASKS,
        payload: res.data,
      });
      console.log("geteeee");
    })
    .catch(
      (err) => console.log(err)
      //dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE TASK
export const deleteTask = (id) => (dispatch) => {
  axios
    .delete(`/api/TaskManagers/${id}/`)
    .then((res) => {
      //dispatch(createMessage({ deleteTask: 'Рассылка удалена' }));
      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD TASK
export const addTask = (lead) => (dispatch) => {
  console.log(lead);
  axios
    .post("/api/TaskManagers/", lead)
    .then((res) => {
      //dispatch(createMessage({ addTask: 'Рассылка добавлена' }));
      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    })
    .catch(
      (err) => console.log(err)
      //dispatch(returnErrors(err.response.data, err.response.status))
    );
};
