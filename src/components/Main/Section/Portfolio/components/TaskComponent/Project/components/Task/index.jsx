import React, { memo,useRef,useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.scss";

const Task = ({
    title,
    description,
    status,
    id,
    idx,
    attachedTo,
    handleDeleteTask,
    toggleStatusChange,
    editBtnOpen
}) => {
    const statusClassName = status.toLowerCase() === "done" ? "status-done" : "status-active";
    const statusBtn = status.toLowerCase() === "done" ? "Active" : "Done";

    const card = useRef();
    const [xAxis, setxAxis] = useState(0);
    const [yAxis, setyAxis] = useState(0);
    const handleRotate = (e) =>{  
        // setxAxis((window.innerWidth / 2 - e.pageX) / 20);
        // setyAxis((window.innerHeight / 2 - e.pageY) / 10);
        const { pageX, pageY } = e;
        const {x, y, width, height,} = card.current.getBoundingClientRect();
            const cx = x + width / 2;
            const cy = y + height / 2;

            const dx = (cx - pageX) / (width / 2);
            const dy = (cy - pageY) / (height / 2);
        setxAxis(10 * dy * -1);
        setyAxis(10 * dx);
    }
    const handleNormal = (e) =>{
        setxAxis(0);
        setyAxis(0);
    }
    
    return (
        <>
        <Card ref={card} className="m-3 task-card" style={{ transform : `rotateY(${xAxis}deg) rotateX(${yAxis}deg)` }} onMouseMove={handleRotate} onMouseOut={handleNormal}>
            <Card.Body className="box">  
                <div className="content">
                    <h2>0{idx+1}</h2>
                    <h3>
                        <Link className="card-task-title" to={`/portfolio/task/${id}`}>
                        {title}
                        </Link>
                    </h3>
                    <div>
                        <Card.Title className="must-do-text mt-5">Must do : {attachedTo}</Card.Title>
                        <Card.Text className="card-descripion">{description}</Card.Text>
                        <Card.Text className="status-text">
                            Status :
                            <span className={statusClassName}>
                                &nbsp;{status}
                            </span>
                        </Card.Text>
                        
                        <div className="btn-cont">
                            <Button variant="danger" className="mr-2"
                                onClick={() => handleDeleteTask(id)}
                            >
                                Delete
                            </Button>
                            <Button variant="warning" className="mr-2"
                                onClick={() => editBtnOpen(id)}
                                >Edit
                            </Button>
                            <Button
                                variant={`${statusBtn === "Active" ? "success" : "primary"} `}
                                onClick={() => toggleStatusChange(id)}
                            >
                                {statusBtn}
                            </Button>
                        </div>
                    </div>
                    
                </div>  
            </Card.Body>
        </Card>
        </>
    )
}

export default memo(Task);