
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';


function ExpenseItem(props) {
   
    return (
        <div className='expense-item'>
            <div>   
                <ExpenseDate date={props.date} />
                <div className='expense-item__descriptio'>
                    <h1>{props.title}</h1>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </div>
        </div>

    );
}

export default ExpenseItem;