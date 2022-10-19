import React,{Component} from 'react'
//引入todo的三个组件
import Header from './component/Header/Header';
import List from './component/List/List'
import Footer from './component/Footer/Footer'
//引入样式
import './App.css';

export default class App extends Component {
  //事件状态
  state = {
    todos:[
      {id:"001",name:"吃饭",done:false},
      {id:"002",name:"睡觉",done:false},
      {id:"003",name:"打豆豆",done:true},
    ]
  }

  //addTodo函数
  /*
    该函数的参数，是为了后续添加一个todo
    而一个todo有id，name,done，所以直接传递一个对象，方便操作
  */
  addTodo = (todoObj)=>{
    //获取原来的todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos] //[]表示创建一个数组，该数组的第一个为新添加的todoObj，后面是todos里的所有todo
    //更新状态
    this.setState({todos:newTodos})
  }

  //updateTodo
  /*
    该函数用于修改todo的done的值
    当勾选是为true，取消勾选是为false
    根据id来确定修改哪个todo，根据done来确定done的值修改为什么
  */
  updateTodo = (id,done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配符合id的todo，并修改其done的值
    const newTodos = todos.map((todoObj)=>{
      if(id === todoObj.id) return {...todoObj,done:done}
      else return todoObj
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //deleteTodo
  deleteTodo = (id)=>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配符合id的todo，并删除
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  //勾选、取消勾选全部todo
  checkAllTodo = (done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //根据done来改变所有todo的done
    const newTods = todos.map((todoObj)=>{
      return {...todoObj,done:done}
    })
    //更新状态
    this.setState({todos:newTods})
  }

  //删除所有已完成todo
  deleteAllDone = ()=>{
    //获取状态中的todos
    const {todos} = this.state
    //过滤所有已完成的todo
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.done === false
    })
    //更新状态
    this.setState({todos:newTodos})
  }

  render() {
    //将App中state中的todos取出
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          {/* 将addTodo函数传给Header */}
          <Header addTodo={this.addTodo}/>
          {/* 将todos、updateTodo函数、deleteTodo函数转递给List */}
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          {/* 将todos、allDone函数、deleteAllDone函数传递给Footer */}
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} deleteAllDone={this.deleteAllDone}/>
        </div>
      </div>
    )
  }
}

