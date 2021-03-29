//get hooks from react
import { useEffect, useReducer } from "react";

//dataReducer - function to update user state
import dataReducer, { SET_USERS } from "../hooks/useDataReducer";

import axios from "axios";

const useApplicationData = () => {
  //set state using useReducer
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/users",
    })
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: SET_USERS,
          users: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
