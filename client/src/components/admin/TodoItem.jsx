import React from "react";

function TodoItem({ id, item, onCheck }) {
    return (
        <>
        <li
            // onClick={() => {onCheck(id)}}
        >
            {/* <input type="checkbox"></input> */}
            {item}  
        </li>
        </>
    )
}

export default TodoItem;