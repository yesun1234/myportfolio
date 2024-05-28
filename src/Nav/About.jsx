import React, { useContext } from 'react'
import { FcDebt } from "react-icons/fc";
import { Container, Row, Col, Image } from 'react-bootstrap'
import { DataContext } from '../context/DataProvider';

const About = () => {
  const { about } = useContext(DataContext);
  console.log(about[0].title);
  console.table(about[1].desc);

  return (
    <Container id="about">
       <h1><FcDebt /> About</h1>
       <Row className="border-bottom">
          <h3>{about[0].title}</h3> 
          <Col md={8}>
           {
              about[1].desc.map((item, index)=>(
                  <p key={index}>{item}</p>
              ))
            }   
          </Col> 
          <Col md={4}>
             <Image src="images\a-man-working-hard-on-laptop-in-mad-frayed-stress-crazy-with-messy-hair-in-transparent-background-png.webp" fluid />
          </Col>
        </Row>
    </Container>
  )
}

export default About