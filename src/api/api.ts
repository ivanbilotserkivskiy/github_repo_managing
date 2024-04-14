import { client } from "../utils/fetchClient";
import { UrlParams } from "../utils/types/fetchClient.types";
import { IssuesResponse } from "../utils/types/response.types";

export const getIssuesFromRepo = (url:UrlParams) => {
  return client.get<IssuesResponse>(url);
}