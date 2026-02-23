import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const datasetApi = createApi({
  reducerPath: "datasetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL}),
  tagTypes: ["Dataset"],
  endpoints: (build) => ({
    getDatasets: build.query({
      query: () => "datasets",
      providesTags: ["Dataset"],
    }),

    getDataSet: build.query({
      query: (id) => `dataset/${id}`,
      providesTags: (result, error, id) => [{ type: "Dataset", id }]
    }),

    uploadDataSet: build.mutation({
      query: (formData) => {
        return {
          url: "dataset",
          method: "POST",
          body: formData
        }
      },
      invalidatesTags: ["Dataset"],
    })
  })
})

export const { useGetDatasetsQuery, useGetDataSetQuery, useUploadDataSetMutation } = datasetApi

