export interface UrlParams {
  [key: string]: string | Record<string, string>
}

export interface RequestHeader {
  headers: {
    [key: string]: string
  }
}

export type RequestOptions = UrlParams & RequestHeader