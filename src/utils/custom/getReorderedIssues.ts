import { IssueListStatus } from "../constants/issueProgressStatus.constant";
import { GitHubCardIssue } from "../types/gitHubIssue.types";
import { SortedIssues } from "../types/sortedIssues.types";

const getReorderedArray = (toColumn: GitHubCardIssue[], issueId: number, dropIndex: number, currentIssue: GitHubCardIssue) => {
  const toColumnCoppy = [...toColumn]
  const issueToRemove = toColumn.findIndex(issue => issue.id === issueId)
  if (toColumn.find(issue => issue.id === issueId)) {
    toColumnCoppy.splice(issueToRemove, 1)
    toColumnCoppy.splice(dropIndex, 0, currentIssue)
  } else {
    toColumnCoppy.splice(dropIndex, 0, currentIssue)
  }

  return toColumnCoppy
}

export const getReorderedIssues = (
    issueId: number, 
    issueStatus: IssueListStatus,
    sortedIssues: SortedIssues[],
    dropIndex: number
  ) : SortedIssues[] | undefined => {
  const currentIssue = sortedIssues.filter(issue => issue.value.some(issue => issue.id === issueId))[0].value.find(issue => issue.id === issueId)
  
  if (!currentIssue) return;
  
  const currentIssueStatus = sortedIssues.filter(issues => issues.value.some(issue => issue.id === issueId))[0].status
  
  const fromColumn = sortedIssues.find(column => column.status === currentIssueStatus)

  if (!fromColumn) return;
  
  const filteredColumn = fromColumn.value.filter(issue => issue.id !== issueId)

  const toColumn = sortedIssues.find(column => column.status === issueStatus)?.value
  
  if (!toColumn) return;
  
  const toColumnCoppy = getReorderedArray(toColumn, issueId, dropIndex, currentIssue)
  const addedToColumn = toColumnCoppy
  const refactoredIssues = sortedIssues.map(issues => {
    if (issues.status === issueStatus) {
      return {
        ...issues,
        value: addedToColumn
      }
    } else if (issues.status === currentIssueStatus) {
      return {
        ...issues,
        value: filteredColumn
      }
    } 
    return issues
  })
  return refactoredIssues
}