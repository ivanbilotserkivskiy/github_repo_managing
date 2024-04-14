import TopBarInfo from "./Info";
import TopBarRating from "./Rating";
import SearchBar from "./Searchbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function TopBar () {
  return (
    <Container>
      <SearchBar/>
      <Row>
        <Col className="d-flex gap-4">
          <TopBarInfo/>
          <TopBarRating />
        </Col>
      </Row>
    </Container>
  )
}