import React from 'react';
import Button from '../Button';
import style from './Form.module.scss';

class Form extends React.Component {
    state = {
        task: "",
        time: "00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className={style.addTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'> Add Study </label>
                    <input
                        type='text'
                        name='task'
                        id='task'
                        placeholder='What do you want to study?'
                        value={this.state.task}
                        onChange={event => this.setState({...this.state, task:event.target.value})}
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'> Time </label>
                    <input
                        type='time'
                        name='time'
                        id='time'
                        step='1'
                        value={this.state.time}
                        onChange={event => this.setState({...this.state, time: event.target.value })}
                        min='00:00:00'
                        max='01:30:00'
                        required
                    />
                </div>
                <Button 
                    text="OK"
                />
            </form>
        )
    }
}

export default Form;