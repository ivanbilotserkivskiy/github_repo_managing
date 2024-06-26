import { IssueListStatus, IssueProgressStatus } from "../constants/issueProgressStatus.constant";
import { GitHubCardIssue } from "../types/gitHubIssue.types";
import { SortedIssues } from "../types/sortedIssues.types";

export const getSortedIssues = (allIssues: GitHubCardIssue[]) : SortedIssues[] => {
  const sortedIssues: SortedIssues[] = [
    { 
    id: 1, 
    title: 'To Do',
    value: [] as GitHubCardIssue[],
    status: IssueListStatus.ToDo
  },
  { 
    id: 2,
    title: 'In Progress',
    value: [] as GitHubCardIssue[],
    status: IssueListStatus.InProgress
  },
  { 
    id: 3,
    title: 'Done',
    value: [] as GitHubCardIssue[],
    status: IssueListStatus.Done
  }
];
  allIssues.forEach((issue) => {
    (issue.state === IssueProgressStatus.Closed) 
      ? sortedIssues[2].value.push(issue)
      : (issue.state === IssueProgressStatus.Open && issue.assignee)
      ? sortedIssues[1].value.push(issue)
      : sortedIssues[0].value.push(issue)
  })
  return sortedIssues
}