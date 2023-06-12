import 'scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className='h-100'>
          <Col sm={2}>
            <div className='nav-column'>Nav</div>
          </Col>
          <Col sm={10}>
            <div className='test'>
              If the text here is blue, you're all set!
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
