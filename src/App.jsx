
import React,{useState} from "react"; 
import "./App.css";

function App(){

    const [title,setTitle]=useState("");
    const[amount,setAmount]=useState("");
    const [expenses,setExpenses]=useState([]);
    
   const addExpense=() =>{
      const newExpense={
        title:title,
        amount:amount
      };
      setExpenses([...expenses,newExpense]);
      setTitle(" ");
      setAmount(" ");
   };
   const total=expenses.reduce
   ((sum,item)=>sum+Number(item.amount),0);
   return(
    <div className="container">
      <h1>Expense Tracker</h1>
      <h2>Total:{total}</h2>
      <input
      type="text"
      placeholder="Enter expense"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}/>

      <input
      type="text"
      placeholder="Enter amount"
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}/>

    <button onClick={addExpense}>Add Expense</button>


    <ul>
      {expenses.map((item,index)=>(
        <li key={index}>
          {item.title}-{item.amount}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;