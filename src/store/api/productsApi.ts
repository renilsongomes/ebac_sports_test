import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProdutoType } from '../../components/Produto'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/' // 👈 API DA EBAC
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProdutoType[], void>({
      query: () => 'ebac_sports' // 👈 Endpoint que seu App usava
    })
  })
})

export const { useGetProductsQuery } = productsApi
