import IssueItem from './IssueItem/IssueItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GitHubCardIssue } from '../../../utils/types/gitHubIssue.types';
import { Stack } from 'react-bootstrap';
import IssueTarget from './IssueTarget';
import { IssueListStatus } from '../../../utils/constants/issueProgressStatus.constant';
import { useState } from 'react';

type IssuesListProp = {
  listTitle: string
  issues: GitHubCardIssue[]
  issueStatus: IssueListStatus
}

const IssuesList: React.FC<IssuesListProp> = ({listTitle, issues, issueStatus}) => {
  const [dropIndex, setDropIndex] = useState<number>(0)
  const changeDropIndex = (index: number) => {
    setDropIndex(() => index)
  }

  return (
    <Container>
      <Row>
        <Col className="px-0 pt-2 rounded bg-light">
          <h2 className="text-center">{listTitle}</h2>
        </Col>
      </Row>
      <Row className='bg-light py-4 rounded'>
        <Col className="px-0">
          <IssueTarget 
            status={issueStatus}
            dropIndex={dropIndex}
          >
            <Stack className="gap-2">
              {issues.map((issue, index) => (
                <IssueItem 
                  key={issue.id} 
                  issue={issue}
                  index={index}
                  dropIndex={dropIndex}
                  changeDropIndex={changeDropIndex}
                />
              ))}
            </Stack>
          </IssueTarget>  
        </Col>
      </Row>
    </Container>
  )
}

export default IssuesList