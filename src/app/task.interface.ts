export interface Task{
    color:string,
    completed:boolean,
    listId:string,
    taskId:string,
    text:string
 }
 import {Task} from './task.interface';
 export interface List{
    listId:string,
    name:string,
    tasks:Array<Task>
 }