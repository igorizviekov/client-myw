export const getAPI = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:8080/graphql";
  }
  return "https://igorizviekov.herokuapp.com/graphql";
};
