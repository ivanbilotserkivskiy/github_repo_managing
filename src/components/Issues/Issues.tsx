import IssuesList from "./IssuesList/IssueList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { getIssuesFromRepo } from "../../api/api";
import { useRecoilState } from "recoil";
import { getSortedIssues } from "../../utils/custom/getSortedIssues";
import { SortedRepoState } from "../../state/atoms/RepoSorted";
import { UserUrl } from "../../state/atoms/UserUrl";

const Issues = () => {
  const [sortedIssues, setSortedIssues] = useRecoilState(SortedRepoState)
  const [userUrl, _] = useRecoilState(UserUrl)
  const [requestError, setRequestError] = useState('')
  useEffect(() => {
    if (!userUrl.owner || typeof userUrl === 'string') return;
    setRequestError(() => '')

    const loadedStorage = localStorage.getItem(userUrl.repo)

    if (loadedStorage) {
      const parsedData = JSON.parse(loadedStorage)
      setSortedIssues(() => parsedData)  
      return
    }
    getIssuesFromRepo({ owner: userUrl.owner, repo: userUrl.repo })
      .then(res => {
        if(!res.data) {
          throw new Error('Cannot find repository or user')
        };
        console.log(res)
        const sorted = getSortedIssues(res.data)
        setSortedIssues(() => sorted)  
        localStorage.setItem(userUrl.repo, JSON.stringify(sorted))
      })
      .catch(error => setRequestError(() => error.message))
  }, [userUrl])

  return (
    <Container>
      <Row>
        {
        requestError
          ? (
              <h3 
                style={{
                  color: 'red'
                }}
                >
                  {requestError}
              </h3>
            )
          : null
      }
      {
        sortedIssues.length 
          ? sortedIssues.map(issues => (
            <Col key={issues.id} >
              <IssuesList issues={issues.value} issueStatus={issues.status} listTitle={issues.title}/>
            </Col>
          ))
          : (<Col>
              <h2>Please enter github repo url</h2>
            </Col>)
      }
      
      </Row>
    </Container>
  )
}

export default Issues