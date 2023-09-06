import type { AxiosRequestConfig } from "axios";

export type Resource<T> = {
  resource: T
};

export type Resources<T = any> = {
  resources: T[]
  pager: {
    page: number
    per_page: number
    count: number
  }
}

export type User = {
  id: string | null,
  email: string | null
}

export type Mock<T extends unknown = unknown> = (config: AxiosRequestConfig) => [number, T]

export type Tag = {
  id: number
  user_id: number
  name: string
  sign: string
  kind: 'expenses' | 'income'
}

export type JSONValue = string | number | null | boolean | JSONValue[] | { [key: string]: JSONValue }