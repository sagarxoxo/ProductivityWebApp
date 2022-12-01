import React from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import DateChain from '../../components/HabitChain/DateChain'
import styles from "../../styles/HabitChain.module.css"

export default function HabitChain() {
  return (
    <div className={styles.habitchainConatiner}>
    <Container>
    <Row>
        <Col lg={4}>
       <DateChain />
        </Col>
    </Row>
    </Container>
    </div>
  )
}
