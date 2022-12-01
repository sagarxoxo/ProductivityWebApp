import React, { useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import styles from "../../styles/Timeblock.module.css"

export default function TaskCard(props) {

  const saveTime = () => {
    props.title === "Week Project Task" && localStorage.setItem(props.title, props.weekTask);
    props.title === "Week Learning Task" && localStorage.setItem(props.title, props.weekTask1);
    props.title === "Week Blogging/YT Task" && localStorage.setItem(props.title, props.weekTask1);
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
          <h2>{props.title}</h2>
          <div>
            <Button className={styles.btnSave} onClick={saveTime}>Save</Button>
          </div>
      </div>
      <div className={styles.taskInt}>
      <Form>
        <Form.Control
            as="textarea"
            style={{ height: '140px' }}
            name="weekTask"
            value={
              props.title === "Week Project Task" ? props.weekTask : props.title === "Week Learning Task" ? props.weekTask1 : props.weekTask2
            }
            onChange={
              (e) => props.title === "Week Project Task" ? props.setWeekTask(e.target.value) : props.title === "Week Learning Task" ? 
              props.setWeekTask1(e.target.value) : props.setWeekTask2(e.target.value)
            }
          />
      </Form>
      </div>
    </div>
  )
}
