import { IssueListStatus, IssueProgressStatus } from "../constants/issueProgressStatus.constant";
import { GitHubCardIssue } from "../types/gitHubIssue.types";

export const getIssueColumn = (issue: GitHubCardIssue) => {
  if (issue.state === IssueProgressStatus.Closed) {
    return IssueListStatus.Done
  } else if (issue.state === IssueProgressStatus.Open && issue.assignee) {
    return IssueListStatus.InProgress
  } else {
    return IssueListStatus.ToDo
  }
}