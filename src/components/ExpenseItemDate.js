import './ExpenseItem.css';

function ExpenseItemDate(props) {
    return (
        <div className="expense-item_date">
            <div>{props.itemDate.toLocaleString('en-US', { month: 'long' })}</div>
            <div>{props.itemDate.getFullYear()}</div>
            <div>{props.itemDate.toLocaleString('en-US', { day: '2-digit' })}</div>
        </div>
    );
}

export default ExpenseItemDate;