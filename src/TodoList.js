import React, { Children } from "react";


function TodoList(props) {
    return (
        <section>
            {props.children}
        </section>
    )
};

export { TodoList };