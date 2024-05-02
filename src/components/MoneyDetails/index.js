import './index.css'
const MoneyDetails = props => {
  const {balance1, income1, expenses1} = props
  return (
    <div className="managerSession">
      <div className="card1">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="balance"
            alt="balance"
          />
        </div>
        <div className="innercard">
          <p>Your Balance</p>
          <p  data-testid="balanceAmount">Rs {balance1}</p>
        </div>
      </div>
      <div className="card2">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="balance"
            alt="income"
          />
        </div>
        <div className="innercard">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income1}</p>
        </div>
      </div>
      <div className="card3">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="balance"
            alt="expenses"
          />
        </div>
        <div className="innercard">
          <p>Your Expenses</p>
          <p  data-testid="expensesAmount">Rs {expenses1}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
