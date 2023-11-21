import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const postApi = createApi({
    reducerPath:'postApi',
    baseQuery:fetchBaseQuery({ baseUrl: 'https://meru-cab-server.onrender.com' }),
    endpoints:(builder)=>({
      getAllPost:builder.query({
         query:()=>({
          url:'/send'
         }) 
      })
    })
})

export const {useGetAllPostQuery} = postApi