import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
   id: string
   title: string
   isDone: boolean
}

type PropsType = {
   title: string
   tasks: Array<TaskType>
   removeTask: (taskId: string) => void
   changeFilter: (value: FilterValuesType) => void
   addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
   const [title, setTitle] = useState('')

   const onClickHandler = () => {
      props.addTask(title)
      setTitle('')
   }

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value)
   }

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         onClickHandler()
      }
   }

   const onChangeFilterHandler = (value: FilterValuesType) => {
      props.changeFilter(value)
   }

   const removeTaskHandler = (t: string) => {
      props.removeTask(t)
   }

   return <div>
      <h3>{props.title}</h3>
      <div>
         <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
         <Button callBack={onClickHandler} title={'+'} />
         {/*<button onClick={onClickHandler}>+</button>*/}
      </div>
      <ul>
         {
            props.tasks.map(t => {


               return (
                  <li key={t.id}>
                     <input type="checkbox" checked={t.isDone}/>
                     <span>{t.title}</span>
                     <Button callBack={() => removeTaskHandler(t.id)} title={'x'} />
                     {/*<button onClick={() => removeTaskHandler(t.id)}>x</button>*/}
                  </li>
               )
            })
         }
      </ul>
      <div>
         <Button callBack={() => onChangeFilterHandler('all')} title={'All'} />
         <Button callBack={() => onChangeFilterHandler('active')} title={'Active'} />
         <Button callBack={() => onChangeFilterHandler('completed')} title={'Completed'} />
         {/*<button onClick={() => onChangeFilterHandler('all')}>All</button>*/}
         {/*<button onClick={() => onChangeFilterHandler('active')}>Active</button>*/}
         {/*<button onClick={() => onChangeFilterHandler('completed')}>Completed</button>*/}
      </div>
   </div>
}
