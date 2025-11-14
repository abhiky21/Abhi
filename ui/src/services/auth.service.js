import axios from "../utils/axios";

export async function login(email, password) {
  try {
    const { data } = await axios.post("/auth/login", { email, password });
    return { result: data.result, success: true };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Login failed. Please try again",
    };
  }
}

export async function user() {
  try {
    const { data } = await axios.get("/auth/user");
    return { udtl: data.result, success: true };
  } catch (err) {
    return {
      udtl: null,
      success: false,
      message: err?.message || "User not authenticated",
    };
  }
}
