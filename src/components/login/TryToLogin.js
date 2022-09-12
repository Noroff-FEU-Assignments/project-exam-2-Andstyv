import axios from "axios";

export function TryToLogin() {
  axios
    .post("https://andsty-noroff-exam2.herokuapp.com/api/auth/local", {
      identifier: "admin@admin.com",
      password: "admin123",
    })
    .then((response) => {
      console.log("User profile", response.data.user);
      console.log("User token", response.data.jwt);
    })
    .catch((error) => {
      console.log("An error occured:", error.response);
    });
}
