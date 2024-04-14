import { GitHubCardIssue } from "./gitHubIssue.types"

type ResponseHeaders = {
  [key: string]: string
}

export type IssuesResponse = {
  data: GitHubCardIssue[],
  headers: ResponseHeaders,
  status: number,
  url: string
}