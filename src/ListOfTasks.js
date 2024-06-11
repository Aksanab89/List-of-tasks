import { Component } from "react";

export class ListOfTasks extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            taskList: [],
        };
    }

    onChangeEvent(e) {
        this.setState({ userInput: e });
    }

    addTask(task) {
        if (task === "") {
            alert("Please, add a task");
        } else {
            let listOfTasks = this.state.taskList;
            listOfTasks.push(task);
            this.setState({ taskList: listOfTasks, userInput: "" });
        }
    } 

    deleteTask() {
        let listOfTasks = this.state.taskList;
        listOfTasks = [];
        this.setState({taskList: listOfTasks})
    }

    submitForm(e) {
        e.preventDefault();
    }
    
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
        const allTasks = document.querySelectorAll('li');
        const crossedTasks = document.querySelectorAll('li.crossed');
        if (allTasks.length === crossedTasks.length) {
            setTimeout(() => {
                alert("Good job!");
            }, 400); 
    
        }

    }

    render() {
        return (
            <div>
                 <form onSubmit={this.submitForm}>
                <div className="container">
                    <input 
                        type="text" 
                        placeholder="Enter your task..." 
                        className="inputText"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput} 
                    />
                </div>
                <div className="container">
                    <button 
                        onClick={() => this.addTask(this.state.userInput)} 
                        className="add"
                    >Add a task </button>
                </div>
                <ul>
                    {this.state.taskList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
                <div className= "container">
            <button onClick={() => this.deleteTask()} className= "delete">Delete</button>
            </div>
            </form>
            </div>
        
        );
    }
}