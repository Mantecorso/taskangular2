import {Injectable} from '@angular/core';
import {List} from './list.interface';

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
    }    saveNewList(listName:string){
        let newList = {
        listId: this.generateId('list'),
        name: listName,
        tasks:[]
    }    this.lists.push(newList);
    this.save();
 }    saveNewTask(newTaskName:string, list:List){
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
    }            generateId(namespace){
        return `${namespace}-${Date.now()}-${Math.round(Math.random()*100)}`
    }}
 
}


