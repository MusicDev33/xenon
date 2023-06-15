import 'scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ManifoldNav } from 'components/ManifoldNav/ManifoldNav';

function App() {
  return (
    <div className="App">
      <Container fluid className='h-100 py-3'>
        <Row className='h-100'>
          <Col sm={2}>
            <ManifoldNav />
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
