import './index.css'
const TransactionItem = props => {
  const {transactionDetails, updateDeleteFunction} = props
  const {id, title, amount, type} = transactionDetails
  const updateDelete = () => {
    updateDeleteFunction(id)
  }
  return (
    <li className="headingCard1">
      <p className="title1">{title}</p>
      <p className="title1">Rs {amount}</p>
      <p className="title1">{type}</p>
      <button className="delete" onClick={updateDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="img1"
        />
      </button>
    </li>
  )
}
export default TransactionItem
