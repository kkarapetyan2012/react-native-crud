
import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";

function AllExpenses() {
    return (
        <ExpenseOutput 
            expensesPeriod="Total"
            fallbackText={'No registered expensed found'}
        />
    )
}

export default AllExpenses;