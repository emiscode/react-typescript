import { useState } from 'react';
import Item from './Item';
import style from './List.module.scss';

function List() {
    const [tasks, setTasks] = useState([
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'TypeScript',
            time: '03:00:00'
        }
    ]);

    return (
        <aside className={style.listTasks}>
            <h2 className={style.title} onClick={() => {
                setTasks([...tasks, { task: "Hooks", time: "05:00:00"}]);
            }}> Daily Studies </h2>
            <ul>
               {tasks.map((item, index) => (
                   <Item 
                    key={index}
                    {...item}
                   />
               ))}
            </ul>
        </aside>
    )
}

export default List;