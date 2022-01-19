import React, { useEffect, useState } from "react";
import { Container,Button } from "react-bootstrap";
import { useParams,Link } from "react-router-dom";
import Loader from '../../../../../../../../../../Reusable/Spinner';
import "./style.scss";

const SingleTaskComponent = () => {
    const [task, setTask] = useState(null);
    const { task_id } = useParams();
    const getTaskFromDB = (taskId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tasks = JSON.parse(localStorage.getItem('tasks'));
                const candidate = tasks.find(task => task.id === taskId);
                resolve(candidate);
            }, 2000);
        })

    }
    useEffect(() => {
        getTaskFromDB(task_id)
            .then(task => {
                setTask(task);
            });
    }, [task_id]);

    if (!task) return <Loader />;
    return (
        <Container className="pt-5">
            <div className="mb-2 text-right">
                <Button variant="info">
                    <Link to="/portfolio/tasks" className="back-btn">Back</Link>
                </Button>
            </div>
            

            <div className="task-cont mt-5">
                <div className="task-content mx-auto w-75 p-3">
                    <h2 className="task-content__title">Task Title : </h2>
                    <p className="task-content__description">{task.title}</p>
                    <h2 className="task-content__title">Task description : </h2>
                    <p className="task-content__description" >{task.description}</p>
                    <h2 className="task-content__title">Task attached to : </h2>
                    <p className="task-content__description" >{task.attachedTo}</p>
                    <h2 className="task-content__title">Task Status : </h2>
                    <p className="task-content__description" >{task.status}</p>
                </div>
            </div>
        </Container>
    )
}

export default SingleTaskComponent;