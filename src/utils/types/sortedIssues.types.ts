import { IssueListStatus } from "../constants/issueProgressStatus.constant";
import { GitHubCardIssue } from "./gitHubIssue.types";

export interface SortedIssues {
  id: number,
  title: string,
  value: GitHubCardIssue[],
  status: IssueListStatus
}
