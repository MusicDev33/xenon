import { useEffect, useState } from "react";
import './PLibrarian.scss';

import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa6';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const PLibrarian = () => {
  const sources = [
    {
      sourceName: 'Test 1',
      sourceId: 'test1'
    },
    {
      sourceName: 'Test 2',
      sourceId: 'test2'
    },
    {
      sourceName: 'Test 3',
      sourceId: 'test3'
    },
    {
      sourceName: 'Test 4',
      sourceId: 'test4'
    },
  ]
  
  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <div className="xsource-btn add" title="Add a book">
            <IconContext.Provider value={{ className: 'plus-btn' }}>
              <FaPlus />
            </IconContext.Provider>
          </div>
        </Col>

        {sources.map((source) => (
          <Col sm={3}>
            <div className="xsource-btn">
              {source.sourceName}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}