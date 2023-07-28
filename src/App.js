import 'scss/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PLibrarian } from 'pages/PLibrarian/PLibrarian';
import { PCheckout } from 'pages/PCheckout/PCheckout';
import { PCollab } from 'pages/PCollab/PCollab';
import { PMyNotes } from 'pages/PMyNotes/PMyNotes';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ManifoldNav } from 'components/ManifoldNav/ManifoldNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid className='h-100 py-3'>
          <Row className='h-100'>
            <Col sm={2}>
              <ManifoldNav />
            </Col>
            <Col sm={10} className='router-container'>
              <Routes>
                <Route path='/notes' element={<PMyNotes />} />
                <Route path='/checkout' element={<PCheckout />} />
                <Route path='/collab' element={<PCollab />} />
                <Route path='/librarian' element={<PLibrarian />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
