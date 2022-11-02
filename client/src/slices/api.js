// export const url = "http://localhost:3001/api";

export const url = "https://shrouded-eyrie-44498.herokuapp.com/";

export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
