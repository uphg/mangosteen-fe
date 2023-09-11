import type { AxiosResponse } from 'axios'
import { mockTagIndex } from './mockTags'

export const mock = (response: AxiosResponse | undefined) => {
  switch (response?.config?._mock) {
    case 'tagIndex':
      [response.status, response.data] = mockTagIndex(response.config)
      return true
  }
  return false
}