import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";

function RecentExpense() {

    return (
        <ExpenseOutput 
            expensesPeriod='Last 7 days'
            fallbackText='No expenses registered for teh last 7 days'
        />
    )
}

export default RecentExpense;