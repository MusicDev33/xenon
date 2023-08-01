import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './PLibrarian.scss';

import { IconContext } from "react-icons";
import { FaPlus } from 'react-icons/fa6';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const PLibrarian = () => {
  const nav = useNavigate();

  const sources = [
    {
      sourceName: 'Test 1',
      author: 'Test Author',
      sourceId: 'test1'
    },
    {
      sourceName: 'Test 2',
      author: 'Test Author',
      sourceId: 'test2'
    },
    {
      sourceName: 'Test 3',
      author: 'Test Author',
      sourceId: 'test3'
    },
    {
      sourceName: 'Test 4',
      author: 'Test Author',
      sourceId: 'test4'
    },
  ]

  const handleNotesClick = (sourceId) => {
    nav(`/notes/${sourceId}`);
  }
  
  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <div className="xsource add" title="Add a book">
            <div className="w-100">
              <input className="xsource-input" placeholder="Title" />
              <input className="xsource-input" placeholder="Author" />
              <input className="xsource-input" placeholder="Start URL" />
            </div>

            <button className="submit-btn">Submit</button>
          </div>
        </Col>

        {sources.map((source) => (
          <Col sm={3}>
            <div className="xsource">
              <section className="sc-container">
                <div>
                  <div className="title">
                    {source.sourceName}
                  </div>

                  <div className="author">
                    {source.author}
                  </div>
                </div>
                
                <button className="notes-btn" onClick={() => {
                  handleNotesClick(source.sourceId)
                }}>
                  Notes
                </button>
              </section>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}