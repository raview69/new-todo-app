import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const activityApi = createApi({
  reducerPath: "activityApi",
  tagTypes: ["Activity"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo.api.devcode.gethired.id",
  }),
  endpoints: (builder) => ({
    getActivity: builder.query({
      query: () => "/activity-groups",
      providesTags: ["Activity"],
    }),
    createActivit: builder.mutation({
      query: (data) => ({
        url: "/activity-groups",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Activity"],
    }),
  }),
});

export const { useGetActivityQuery, useCreateActivitMutation } = activityApi;
