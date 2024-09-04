import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact.sankyitar.store/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("auth");

      try {
        if (token) {
          headers.set("authorization", `Bearer ${JSON.parse(token)}`);
        }
      } catch (e) {
        console.error("Incorrect Password");
      }
      return headers;
    },
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({}),
});
