import style from './Clock.module.scss';

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minutes = time ? Math.floor(time / 60) : 0;
    const seconds = time ? time % 60 : 0;
    const [minuteTen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondTen, secondUnit] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.clockNumber}>{minuteTen}</span>
            <span className={style.clockNumber}>{minuteUnit}</span>
            <span className={style.clockSeparator}>:</span>
            <span className={style.clockNumber}>{secondTen}</span>
            <span className={style.clockNumber}>{secondUnit}</span>
        </>
    )
}