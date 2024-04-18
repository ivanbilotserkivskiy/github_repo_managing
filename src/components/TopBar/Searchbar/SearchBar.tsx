import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import { useRecoilState } from 'recoil';
import { UserUrl } from '../../../state/atoms/UserUrl';
import { useState } from 'react';
import { getValidGitUrl } from '../../../utils/custom/getValidUrl.custom';
import { Stack } from 'react-bootstrap';


const SearchBar = () => {
  const [userUrl, setUserURL] = useRecoilState(UserUrl)
  const [userInput, setUserInput] = useState<string>('')
  const [urlError, setUrlError] = useState('')
  const onURLInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(() => event.target.value)
  }
  const changeUserUrl = () => {
    const validUserUrl = getValidGitUrl(userInput)
    setUrlError(() => '')
    if (typeof validUserUrl === 'string') {
      setUrlError(() => validUserUrl)
      return
    }
    setUserURL(() => {
      return {
        owner: validUserUrl.owner,
        repo: validUserUrl.repo
      }
    })
  }
  return (
    <Container className="mb-3 px-0" fluid="xxl">
      <Stack direction="horizontal">
        <InputGroup className="me-4">
          <InputGroup.Text id="basic-addon3">
            https://github.com/vuejs/vue
          </InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={onURLInputChange}/>
        </InputGroup>
        <Button
          style={{
            textWrap: "nowrap"
          }}
          type='submit'
          variant="outline-secondary"
          className="align-self-start"
          onClick={changeUserUrl}
        >
          Load issues
        </Button>
      </Stack>
      {
        urlError
          ? (
              <p 
                style={{
                  color: 'red'
                }}
              >
                  {urlError}
              </p>
            )
          : null
      }
    </Container>
  )
}

export default SearchBar