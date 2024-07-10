import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3000/";

export const getDataFormApi = async ({ endpoint }: { endpoint: string }) => {
  try {
    const response = await axios.get(baseURL + endpoint, {
      withXSRFToken: true,
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt-token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postDataFormApi = async ({
  endpoint,
  data,
}: {
  endpoint: string;
  data: object;
}) => {
  const response = await axios.post(baseURL + endpoint, data, {
    withXSRFToken: true,
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${Cookies.get("jwt-token")}`,
      "Content-Type": "application/json", // Pastikan tipe konten disesuaikan jika perlu
    },
    xsrfHeaderName: "X-XSRF-TOKEN", // Nama header untuk mengirimkan XSRF token
  });
  return response.data;
};

export const deleteDataFormApi = async ({
  endpoint,
}: {
  endpoint: string;
}) => {
    const response = await axios.delete(baseURL + endpoint, {
        withXSRFToken: true,
        headers: {
            Authorization: `Bearer ${Cookies.get("jwt-token")}`
        }
    })

    return response.data
};
