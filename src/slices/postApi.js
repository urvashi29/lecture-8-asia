import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//API Slice
export const postApi = createApi({
    reducerPath: 'postApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET'
            })
        }),

        getPostById: builder.query({
            query: (id) => {
                return {
                    url: `posts/${id}`,
                    method: 'GET'
                }
            }
        }),

        // post: build.mutation({
        //     // note: an optional `queryFn` may be used in place of `query`
        //     query: ({ ...patch }) => ({
        //       url: `post/}`,
        //       method: 'POST',
        //       body: patch,
        //     })
        // })

    })
})


export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;

