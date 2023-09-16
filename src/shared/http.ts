import { mock } from '@/mock/mock'
import type { JSONValue } from '@/types'
import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { Toast, closeToast, showLoadingToast, showToast } from 'vant'

type GetConfig = Omit<AxiosRequestConfig, 'params' | 'url' | 'method'>
type PostConfig = Omit<AxiosRequestConfig, 'url' | 'data' | 'method'>
type PatchConfig = Omit<AxiosRequestConfig, 'url' | 'data'>
type DeleteConfig = Omit<AxiosRequestConfig, 'params'>

export class Http {
  instance: AxiosInstance

  constructor(baseURL: string) {
    this.instance = axios.create({ baseURL })
  }

  get<R = unknown>(url: string, query?: Record<string, string>, config?: GetConfig) {
    return this.instance.request<R>({ ...config, url: url, params: query, method: 'get' })
  }

  post<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PostConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'post' })
  }

  patch<R = unknown>(url: string, data?: Record<string, JSONValue>, config?: PatchConfig) {
    return this.instance.request<R>({ ...config, url, data, method: 'patch' })
  }

  delete<R = unknown>(url: string, query?: Record<string, string>, config?: DeleteConfig) {
    return this.instance.request<R>({ ...config, url: url, params: query, method: 'delete' })
  }
}

export const http = new Http('/api/v1')

http.instance.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt')
  if (jwt) {
    config.headers!.Authorization = `Bearer ${jwt}`
  }
  if (config._autoLoading) {
    showLoadingToast({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
  }
  return config
})

http.instance.interceptors.response.use(
  (response) => {
    if (response.config._autoLoading === true) {
      closeToast()
    }
    return response
  },
  (error: AxiosError) => {
    if (error.response?.config._autoLoading === true) {
      closeToast()
    }
    throw error
  }
)

// mock
if (APP_ENV.DEV) {
  import('../mock/mock').then(({ mock }) => {
    http.instance.interceptors.response.use(
      (response) => {
        mock(response)
        if (response.status >= 400) {
          throw { response }
        } else {
          return response
        }
      },
      (error) => {
        console.log('# error')
        console.dir(error)
        mock(error.response)
        if (error.response.status >= 400) {
          throw error
        } else {
          return error.response
        }
      }
    )
  })
}

http.instance.interceptors.response.use(response=>{
  console.log('response')
  return response
}, (error) => {
  if (error.response) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === 429) {
      showToast({ message: '请求过于频繁', position: 'top' })
    }
  }
  throw error
})


