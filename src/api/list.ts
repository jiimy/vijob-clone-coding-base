import axios from "axios";

export async function listApi(pageParam: number, size: number) {
  try {
    const res = await axios.get(`/api?page=${pageParam}&size=${size}`);

    if (res.status === 200) {
      return res.data.data;
    }
  } catch (error) {
    console.error("Error fetching feed data:", error);
    return [];
  }
}
