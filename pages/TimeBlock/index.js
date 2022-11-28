import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap'
import styles from "../../styles/Timeblock.module.css"
import TimePicker from 'react-time-picker/dist/entry.nostyle';

export default function TimeBlock() {

    const [value, onChange] = useState();
    const [act, setAct] = useState(false);
    const [dailyTask, setDailyTask] = useState(
    [{
        id: 0,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 1,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 2,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 3,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 4,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 5,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 6,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 7,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 8,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 9,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 10,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 11,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 12,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 13,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    {
        id: 14,
        taskName: "",
        rewards: "",
        taskCompleted: false
    },
    ]
    )

    useEffect(() => {
        onChange(localStorage.getItem("Time"))
        act && setDailyTask(JSON.parse(localStorage.getItem("Task")))
    },[])

    function onTimeChange(id){
     const num = Number(value?.slice(0,2)) + id

     if(num == 12 || num == 0){
       return 12 
     }
     else if(num >= 12){
        return num - 12 
     }
     else{
        return num
     }
    
    }
    const saveTime = () => {
        localStorage.setItem('Time', value);
        localStorage.setItem('Task', JSON.stringify(dailyTask));
        setAct(prevState => !prevState)
    }

    function handleChange(e, id){
        const {type, checked, name, value} = e.target
        setDailyTask(dailyTask.map(data => {
            if (id === data.id) {
                return { ...data, [name]: type === "checkbox" ? checked : value };
            } else {
                return data;
            }
            })
        )
    }

  return (
    <div>
    <Container>
    <Row>
        <Col lg={6}>
            <div className={styles.card}>
            <div className={styles.header}>
                <h2>Time Block</h2>
                <div className={styles.timepc}>
                    <TimePicker onChange={onChange} value={value}/>
                    <Button className={styles.btnSave} onClick={saveTime}>Save</Button>
                </div>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Daily Task</th>
                        <th>Rewards</th>
                    </tr>
                </thead>
                <tbody>
                {dailyTask?.map((taskData, index) => {
                    return (
                    <tr key={index}>
                        <td>{onTimeChange(taskData.id)}:00 </td>
                        <td>
                        <Form>
                            <div className={styles.cardTask}>
                                <Form.Group>
                                    <Form.Check 
                                    type="checkbox" 
                                    name="taskCompleted" 
                                    value={taskData.taskCompleted} 
                                    onChange={(e) => handleChange(e, taskData.id)}
                                    />
                                </Form.Group>
                                <Form.Control 
                                placeholder="Enter Task"
                                name="taskName" 
                                value={taskData.taskName} 
                                onChange={(e) => handleChange(e, taskData.id)}
                                />
                            </div>

                        </Form>
                        </td>
                        <td>
                        <Form.Control 
                            placeholder="Enter Rewards"
                            name="rewards" 
                            value={taskData.rewards} 
                            onChange={(e) => handleChange(e, taskData.id)}
                            />
                        </td>
                    </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>
        </Col>
        <Col lg={6}>
            
        </Col>
    </Row>
    </Container>
    </div>
  )
}



    
//     const dailyTask = [
//     {
//         id: 0,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 1,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 2,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 3,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 4,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 5,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 6,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 7,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 8,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 9,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 10,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 11,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 12,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 13,
//         taskName: "",
//         taskCompleted: false
//     },
//     {
//         id: 14,
//         taskName: "",
//         taskCompleted: false
//     },
//     ]
    

//     const [tdData, setTdData] = useState(dailyTask)

//     function onTimeChange(id){
//      const num = Number(value?.slice(0,2)) + id

//      if(num == 12 || num == 0){
//        return 12 
//      }
//      else if(num >= 12){
//         return num - 12 
//      }
//      else{
//         return num
//      }
    
//     }

