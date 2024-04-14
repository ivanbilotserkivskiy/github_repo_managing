import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function SearchBar () {
  return (
    <Container className="mb-3" fluid="xxl">
      <Row>
        <Col className="p-0 d-flex align-items-center">
          <InputGroup className="me-4">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <Button
            style={{
              textWrap: "nowrap"
            }}
            variant="outline-secondary"
            className="align-self-start"
          >
            Load issues
          </Button>
        </Col>
      </Row>
    </Container>
  )
}