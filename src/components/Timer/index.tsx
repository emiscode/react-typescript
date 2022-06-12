import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/timeConverter";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
    selected: ITask | undefined
    completeTask: () => void
}

export default function Timer({ selected, completeTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected?.time));
        }
    }, [selected]);

    function countdown(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return countdown(counter - 1);
            }

            completeTask();
        }, 1000);
    }

    return (
        <div className={style.timer}>
            <p className={style.title}>Pick up a card and start the timer!</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button 
                onClick={() => countdown(time)}
                text="START"
            />
        </div>
    )
}