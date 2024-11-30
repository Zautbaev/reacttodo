import React from "react";

const TodoListItem = () => {
    const items = ["Install React", "Study React"];
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default TodoListItem;
