import Vue from 'vue';
import { Component } from 'vue-property-decorator';

 //接口类型
interface TodoItem {
    description: String;
    done: boolean;
    id: String;
}
 
@Component
export default class TodoComponent extends Vue {

    //组件变量  
    todos: TodoItem[];
    newItemDescription: String;
     
    //初始化
    data() {
        return {
            todos: [],
            newItemDescription: null
        };
    }

    //load
    mounted() {
        this.query();
    }

    query(){
        fetch('/api/todo')
        .then(response => response.json() as Promise<TodoItem[]>)
        .then(data => {
            this.todos = data;
        });
    }
    //查询
    btnQuery(event:any){
        if(event) event.preventDefault();
        this.query();
    }
    //完成
    completeItem(item: TodoItem){
        fetch(`/api/todo/${item.id}`, {
            method: 'delete',
            headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            })
        })
        .then(() => {
            this.todos = this.todos.filter((t) => t.id !== item.id);
        });
    }
    //新增
    addItem(event:any){
        if(event) event.preventDefault();
         
        fetch('/api/todo', {
            method: 'post',
            body: JSON.stringify(<TodoItem>{description: this.newItemDescription}),
            headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            })
        })
        .then(response => response.json() as Promise<TodoItem>)
        .then((newItem) => {
            this.todos.push(newItem);
            this.newItemDescription = "";
        });
    }

}