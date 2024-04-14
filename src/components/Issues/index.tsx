import IssuesList from "./IssuesList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import { getIssuesFromRepo } from "../../api/api";
import { useRecoilState } from "recoil";
import { RepoIssuesState } from "../../state/atoms/RepoIssues";
import { getSortedIssues } from "../../utils/custom/getSortedIssues";
import { SortedRepoState } from "../../state/atoms/RepoSorted";

export default function Issues () {
  const [issues, setIssues] = useRecoilState(RepoIssuesState);
  const [sortedIssues, setSortedIssues] = useRecoilState(SortedRepoState)
  
  useEffect(() => {
    getIssuesFromRepo({ owner: 'facebook', repo: 'react' }).then(res => {
      const sorted = getSortedIssues(res.data)
      setSortedIssues(sorted)  
      setIssues(res.data)
    })
    console.log(sortedIssues )
  }, [])
  return (
    <Container>
      <Row>
      {sortedIssues.map(issues => (
        <Col key={issues.id} >
          <IssuesList issues={issues.value} issueStatus={issues.status} listTitle={issues.title}/>
        </Col>
      ))}
      </Row>
    </Container>
  )
}