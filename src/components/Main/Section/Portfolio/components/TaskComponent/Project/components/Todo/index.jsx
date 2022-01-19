import React, { memo } from "react";
import Task from "../Task";

const Todo = ({
    mockTasks,
    handleDeleteTask,
    toggleStatusChange,
    editBtnOpen
}) => {
    return (
        <div className="tasks-wrapper mt-3 d-flex justify-content-center flex-wrap">
            {mockTasks.map((task,idx) => (
                <Task
                    {...task}
                    idx={idx}
                    key={task.id}
                    handleDeleteTask={handleDeleteTask}
                    toggleStatusChange={toggleStatusChange}
                    editBtnOpen = {editBtnOpen}
                />
            ))}
        </div>
    )
}

export default memo(Todo);