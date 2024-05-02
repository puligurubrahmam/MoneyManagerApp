const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
import './index.css'
import TransactionItem from '../../components/TransactionItem'
import MoneyDetails from '../../components/MoneyDetails'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    moneyList: [],
  }
  updateTitle = event => {
    this.setState({title: event.target.value})
  }
  updateAmount = event => {
    this.setState({amount: event.target.value})
  }
  updateType = event => {
    this.setState({optionId: event.target.value})
  }
  updateList = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const transactionType = transactionTypeOptions.find(optionid => {
      return optionid.optionId === optionId
    })
    const {displayText} = transactionType
    const newItem = {
      id: uuidv4(),
      title,
      amount,
      type: displayText,
    }
    this.setState(prevState => {
      return {
        moneyList: [...prevState.moneyList, newItem],
        title: '',
        amount: '',
        optionId: transactionTypeOptions[0].optionId,
      }
    })
  }
  updateDeleteFunction = id => {
    const {moneyList} = this.state
    const filteredList = moneyList.filter(item => {
      return item.id !== id
    })
    this.setState({moneyList: filteredList})
  }
  updateIncome = () => {
    const {moneyList} = this.state
    let incomeAmount = 0
    moneyList.forEach(income => {
      if (income.type === transactionTypeOptions[0].displayText) {
        incomeAmount += parseInt(income.amount)
      }
    })
    return incomeAmount
  }
  updateExpenses = () => {
    const {moneyList} = this.state
    let expensesAmount = 0
    moneyList.forEach(expenses => {
      if (expenses.type === transactionTypeOptions[1].displayText) {
        expensesAmount += parseInt(expenses.amount)
      }
    })
    return expensesAmount
  }
  updateBalance = () => {
    const {moneyList} = this.state
    let income = 0
    let balance = 0
    let expenses = 0
    moneyList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += parseInt(each.amount)
      } else {
        expenses += parseInt(each.amount)
      }
    })
    balance = income - expenses
    return balance
  }
  render() {
    const {moneyList, title, amount, type} = this.state
    const incomeAmount = this.updateIncome()
    const expensesAmount = this.updateExpenses()
    const balance = this.updateBalance()
    return (
      <div className="bg">
        <div className="card">
          <h1 className="name">Hi, Richard</h1>
          <p className="greet">
            Welcome back to your <span className="link">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balance1={balance}
          income1={incomeAmount}
          expenses1={expensesAmount}
        />
        <div className="card4">
          <form className="managerForm">
            <h1 className="head">Add Transaction</h1>
            <label htmlFor="titleLabel">TITLE</label>
            <input
              id="titleLabel"
              placeholder="Title"
              className="title"
              onChange={this.updateTitle}
              value={title}
            />
            <label htmlFor="amountLabel">AMOUNT</label>
            <input
              id="amountLabel"
              placeholder="Amount"
              className="amount"
              onChange={this.updateAmount}
              value={amount}
            />
            <label htmlFor="typeLabel">TYPE</label>
            <select
              value={type}
              className="type"
              id="typeLabel"
              onChange={this.updateType}
            >
              {transactionTypeOptions.map(eachOption => {
                return (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                )
              })}
            </select>
            <button className="btn" type="submit" onClick={this.updateList}>
              Add
            </button>
          </form>
          <div className="output">
            <h1 className="head">History</h1>
            <ul>
              <li className="headingCard">
                <p className="para">Title</p>
                <p className="para">Amount</p>
                <p className="para">Type</p>
                <p className="para1"></p>
              </li>
              {moneyList.map(eachItem => {
                return (
                  <TransactionItem
                    key={eachItem.id}
                    transactionDetails={eachItem}
                    updateDeleteFunction={this.updateDeleteFunction}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
