import './ExpenseItem.css';
import ExpenseItemAmount from './ExpenseItemAmount';
import ExpenseItemDate from './ExpenseItemDate';
import ExpenseItemTitle from './ExpenseItemTitle';
import Card from './Card';


function ExpenseItem(props) {
  return (
    <Card className="expense-item">
        <ExpenseItemDate itemDate={props.item.date}/>
        <ExpenseItemTitle itemTitle={props.item.title}/>
        <ExpenseItemAmount itemAmount={props.item.amount}/>
    </Card>
  )
}

export default ExpenseItem;
