import { api } from '../api'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Courses = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [selectCatalog, setSelectCatalog] = useState("")
  const [dataCatalog, setDataCatalog] = useState([])
  const [dataProducts, setDataProducts] = useState([])
  const [dataProductsTotal, setDataProductsTotal] = useState(0)
  const [dataProductsLimit, setDataProductsLimit] = useState(5)
  const [dataProductsTotalPage, setDataProductsTotalPage] = useState(0)
  const [dataProductsPage, setDataProductsPage] = useState(1)
  const token = localStorage.getItem("token")

  const GetUser = async () => {
    try {
      const { data } = await axios.get(api + "/users", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      setData(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error(error)
    }
  }

  const GetCatalog = async () => {
    try {
      const { data } = await axios.get(api + "/catalogs")
      setDataCatalog(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error(error)
    }
  }

  const GetProducts = async () => {
    try {
      const { data } = await axios.get(
        api +
          `/products?limit=${dataProductsLimit}&page=${dataProductsPage}${search ? `&search=${search}` : ""}${selectCatalog ? `&catalogId=${selectCatalog}` : ""}`,
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      setDataProducts(data.data)
      setDataProductsTotal(data.total)
      setDataProductsTotalPage(data.totalPages)
      setDataProductsLimit(data.limit)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    GetUser()
    GetCatalog()
  }, [])

  useEffect(() => {
    GetProducts()
  }, [dataProductsLimit, dataProductsPage, search, selectCatalog])

  return (
    <div className='max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8'>

      {/* Users */}
      <div className='rounded-2xl border border-gray-100 bg-white shadow-lg p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Users</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {data.map((e) => {
            return (
              <div
                key={e.id}
                className='rounded-xl bg-[#FEDAD5] px-4 py-3 shadow-sm transition hover:shadow-md hover:-translate-y-0.5'
              >
                <h1 className='font-semibold text-gray-800'>{e.name}</h1>
              </div>
            )
          })}
        </div>
      </div>

      <div className='rounded-2xl border border-gray-100 bg-white shadow-lg p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Catalogs</h1>
        <div className='flex flex-wrap gap-3'>
          {dataCatalog.map((e) => {
            return (
              <div
                key={e.id}
                className='rounded-full border border-[#FEDAD5] bg-white px-5 py-2 text-gray-700 font-medium transition hover:bg-[#FEDAD5]'
              >
                <h1>{e.name}</h1>
              </div>
            )
          })}
        </div>
      </div>

      <div className='rounded-2xl border border-gray-100 bg-white shadow-lg p-6'>
        <div className='flex flex-wrap items-center gap-4 mb-6'>
          <h1 className='text-2xl font-bold text-gray-800'>Products</h1>
          <input
            className='border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-[#e8a99f] focus:ring-2 focus:ring-[#FEDAD5]'
            type="search"
            placeholder='Поиск...'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              setDataProductsPage(1)
            }}
          />
          <select
            className='border border-gray-300 rounded-lg px-3 py-2 bg-white outline-none focus:border-[#e8a99f] cursor-pointer'
            onChange={(e) => {
              setSelectCatalog(e.target.value)
              setDataProductsPage(1)
            }}
          >
            <option value="">Все</option>
            {dataCatalog.map((e) => {
              return (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              )
            })}
          </select>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {dataProducts.map((e) => {
            return (
              <div
                key={e.id}
                className='flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 shadow-sm transition hover:bg-[#FEDAD5]/50 hover:shadow-md'
              >
                <p className='flex h-8 w-8 items-center justify-center rounded-full bg-[#FEDAD5] text-sm font-bold text-gray-700'>
                  {e.id}
                </p>
                <h1 className='font-semibold text-gray-800'>{e.name}</h1>
              </div>
            )
          })}
        </div>

        <div className='mt-6 flex flex-wrap items-center justify-between gap-4'>
          <select
            className='border border-gray-300 rounded-lg px-3 py-2 bg-white outline-none focus:border-[#e8a99f] cursor-pointer'
            onChange={(e) => {
              setDataProductsLimit(Number(e.target.value))
              setDataProductsPage(1)
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>

          <div className='flex flex-wrap gap-2'>
            {Array.from({ length: dataProductsTotalPage }).map((e, i) => {
              const page = i + 1
              return (
                <p
                  key={page}
                  onClick={() => setDataProductsPage(page)}
                  className={
                    'border px-4 py-2 rounded-xl cursor-pointer select-none transition hover:bg-[#FEDAD5] ' +
                    (page === dataProductsPage
                      ? 'bg-[#FEDAD5] border-[#e8a99f] font-bold'
                      : 'bg-white border-gray-200')
                  }
                >
                  {page}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses