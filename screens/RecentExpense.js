import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { getDateMinusDays } from "../util/date";

const DUMMY_EXPENSE = [
    {
        id: 'e1',
        desc: 'A pair boots',
        amount: 56.33,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        desc: 'A pair shoes',
        amount: 19.79,
        date: new Date('2023-10-25')
    },
    {
        id: 'e3',
        desc: 'A book',
        amount: 23.89,
        date: new Date('2021-11-25')
    },
    {
        id: 'e4',
        desc: 'A pencil',
        amount: 3.89,
        date: new Date('2022-12-12')
    },
    {
        id: 'e5',
        desc: 'Another book',
        amount: 3.89,
        date: new Date('2023-06-12')
    },
    {
        id: 'e6',
        desc: 'Another book',
        amount: 47.61,
        date: new Date('2023-11-05')
    },
]

function RecentExpense() {

    // const expensesCtx = useContext(ExpensesContext);

    const recentExpenses = DUMMY_EXPENSE.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    });

    console.log('recentExpenses', recentExpenses);

  return (
    <ExpenseOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
}

export default RecentExpense;