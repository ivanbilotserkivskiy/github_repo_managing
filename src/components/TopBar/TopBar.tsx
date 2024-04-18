import TopBarInfo from "./Info/Info";
import SearchBar from "./Searchbar/SearchBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TopBar = () => {
  return (
    <Container className="p-4">
      <SearchBar/>
      <Row>
        <Col className="d-flex gap-4">
          <TopBarInfo/>
        </Col>
      </Row>
    </Container>
  )
}

export default TopBar