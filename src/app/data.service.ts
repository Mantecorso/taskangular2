import {Injectable} from '@angular/core';
import {List} from './list.interface';
import { removeListener } from 'cluster';
import {Task} from './task.interface';
@Injectable({
    providedIn: 'root'
})
//sin terminar

export class DataService {
    private lists: Array < List >;

    constructor() {
        this.load();
    }

    getLists() {
        return this.list
    }
    save( {
        localStorage.setItem( 'lists', JSON.stringlify(this.list));
    })
    load(){
        this.lists= JSON.parse(localStorage.getItem('lists')) || [];
    }    
    saveNewList(listName:string){
        let newList = {
        listId: this.generateId('list'),
        name: listName,
        tasks:[]
    }   
    this.lists.push(newList);
    this.save();
 }  
   saveNewTask(newTaskName:string, list:List){
        let newTask={
            color :"tomato",
            completed:false,
            listId:list.listId,
            taskId:this.generateId('task'),
            text:newTaskName
        }
        this.lists = this.lists.map(item=>{
            if(item.listId===list.listId){
                item.tasks.push(newTask)
            }
            return item;
        })
        this.save();
    }         
       generateId(namespace){
        return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`
    }
    removeList( id: string) { 
    let index = this.lists.findIndex( item => item.listId === id)
    this.lists.splice(index, 1);
    //removeList( id: string) {
    //    this.lists = this.lists.filter(item => item.listId !== id);
    //    this.save();
    //}
    this.save();
    }

    removeTask(data:Task){
        let indexListId = this.lists.findIndex(item => item.listId === data.listId);
        let indexTaskId = this.lists.[indexListId].findIndex(item => item.taskId === data.taskId);
        this.lists[indexListId].tasls.splice(indexTaskId, 1);
        this.save();
    }
}


