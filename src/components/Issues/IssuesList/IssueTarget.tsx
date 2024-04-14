import { useDrop } from "react-dnd"
import { Stack } from 'react-bootstrap';
import { DraggableItems } from "../../../utils/constants/draggableItems.constants";
import { useRecoilState } from "recoil";
import { RepoIssuesState } from "../../../state/atoms/RepoIssues";
import { IssueListStatus } from "../../../utils/constants/issueProgressStatus.constant";
import { getIssueColumn } from "../../../utils/custom/getIssueColumn.custom";
import { SortedRepoState } from "../../../state/atoms/RepoSorted";

type IssueTargetProps = {
  children: React.ReactNode
  status: IssueListStatus
}

const IssueTarget: React.FC<IssueTargetProps> = ({ children, status }) => {
  const [issues, setIssues] = useRecoilState(RepoIssuesState)
  const [sortedIssues, setSortedIssues] = useRecoilState(SortedRepoState)

  const reorderIssues = (issueId: number, issueStatus: IssueListStatus) => {
    const currentIssue = issues.find(issue => issue.id === issueId)
    
    if (!currentIssue) return;
    
    const currentIssueStatus = sortedIssues.filter(issues => issues.value.some(issue => issue.id === issueId))[0].status
    
    console.log(status, currentIssueStatus)
    const fromColumn = sortedIssues.find(column => column.status === currentIssueStatus)

    if (!fromColumn) return;
    
    const filteredColumn = fromColumn.value.filter(issue => issue.id !== issueId)
    console.log(filteredColumn)
    const toColumn = sortedIssues.find(column => column.status === issueStatus)
    
    if (!toColumn) return;
    
    const addedToColumn = toColumn.value.find(issue => issue.id === issueId) 
      ? toColumn.value
      : [...toColumn.value, currentIssue]
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
    setSortedIssues(refactoredIssues)
  }

  const [{ isOver }, drop ] = useDrop({
    accept: DraggableItems.IssueCard,
    drop: (item : { ID: number, dropIndex: number }, monitor) => {
     return reorderIssues(item.ID, status)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })
  return (
    <Stack 
      ref={drop} 
      className="bg-dark" 
      style={{
        minHeight: '200px'
      }}
    >
      { children }
    </Stack>
  )
}

export default IssueTarget