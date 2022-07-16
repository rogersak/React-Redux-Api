import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // the set of operation to perform on the server
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),

    getPostByLimit: builder.query({
      query: (num) => ({
        url: `posts?_limit=${num}`,
      }),
    }),

    createPost: builder.mutation({
      query: (newPost) => ({
        url: `posts`,
        method: "POST",
        body: newPost,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    updatePost: builder.mutation({
      query: (updatePostData) => {
        const {id ,...data} = updatePostData;
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useCreatePostMutation,
  useUpdatePostMutation
} = postApi;
