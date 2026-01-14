import axios from "../utils/axios";

export async function listStudent() {
  try {
    const { data } = await axios.get("/user/list/student");
    return { result: data.result, success: true };
  } catch (err) {
    return {
      success: false,
      message: err?.message || "Error",
    };
  }
}
