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
    getActivityById: builder.query({
      query: (id) => `/activity-groups/${id}`,
      providesTags: ["Activity"],
    }),
    deleteActivity: builder.mutation({
      query: (id) => ({
        url: `/activity-groups/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Activity"],
    }),
    getTitleById: builder.query({
      query: (id) => `/activity-groups/${id}`,
    }),
    createActivity: builder.mutation({
      query: (data) => ({
        url: "/activity-groups",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Activity"],
    }),
    updateTitle: builder.mutation({
      query: ({ id, data }) => ({
        url: `/activity-groups/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Activity"],
    }),
    createTodo: builder.mutation({
      query: (data) => ({
        url: "/todo-items",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Activity"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todo-items/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Activity"],
    }),
  }),
});

export const {
  useGetActivityQuery,
  useGetActivityByIdQuery,
  useGetTitleByIdQuery,
  useCreateActivityMutation,
  useDeleteActivityMutation,
  useUpdateTitleMutation,
  useCreateTodoMutation,
  useUpdateTodoMutation,
} = activityApi;
