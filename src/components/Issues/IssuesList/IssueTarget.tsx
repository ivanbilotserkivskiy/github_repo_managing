import { useDrop } from "react-dnd"
import { useMemo } from 'react'
import { Stack } from 'react-bootstrap';
import { DraggableItems } from "../../../utils/constants/draggableItems.constants";
import { useRecoilState } from "recoil";
import { IssueListStatus } from "../../../utils/constants/issueProgressStatus.constant";
import { SortedRepoState } from "../../../state/atoms/RepoSorted";
import { UserUrl } from "../../../state/atoms/UserUrl";
import { getReorderedIssues } from "../../../utils/custom/getReorderedIssues";

type IssueTargetProps = {
  children: React.ReactNode
  status: IssueListStatus
  dropIndex: number
}

const IssueTarget: React.FC<IssueTargetProps> = ({ children, status, dropIndex }) => {
  const [sortedIssues, setSortedIssues] = useRecoilState(SortedRepoState)
  const [userUrl, _] = useRecoilState(UserUrl)

  const reorderIssues = useMemo(() => (issueId: number, issueStatus: IssueListStatus) =>  {
    const refactoredIssues = getReorderedIssues(issueId, issueStatus, sortedIssues, dropIndex)
    if (!refactoredIssues) return;
    setSortedIssues(refactoredIssues)
    localStorage.setItem(userUrl.repo, JSON.stringify(refactoredIssues))
  }, [sortedIssues])

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
      style={{
        minHeight: '200px'
      }}
    >
      { children }
    </Stack>
  )
}

export default IssueTarget