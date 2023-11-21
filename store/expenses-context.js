import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    desc: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-11-19'),
  },
  {
    id: 'e2',
    desc: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-01-05'),
  },
  {
    id: 'e3',
    desc: 'Some bananas',
    amount: 5.99,
    date: new Date('2023-12-01'),
  },
  {
    id: 'e4',
    desc: 'A book',
    amount: 14.99,
    date: new Date('2023-02-19'),
  },
  {
    id: 'e5',
    desc: 'Another book',
    amount: 18.59,
    date: new Date('2023-02-18'),
  },
  {
    id: 'e6',
    desc: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-01-05'),
  },
  {
    id: 'e7',
    desc: 'Some bananas',
    amount: 5.99,
    date: new Date('2023-12-01'),
  },
  {
    id: 'e8',
    desc: 'A book',
    amount: 14.99,
    date: new Date('2023-02-19'),
  },
  {
    id: 'e9',
    desc: 'Another book',
    amount: 18.59,
    date: new Date('2023-02-18'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ desc, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { desc, amount, date }) => {},
});


  
  function expensesReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        const id = new Date().toString() + Math.random().toString();
        return [{ ...action.payload, id: id }, ...state];
      case 'UPDATE':
        const updatableExpenseIndex = state.findIndex(
          (expense) => expense.id === action.payload.id
        );
        const updatableExpense = state[updatableExpenseIndex];
        const updatedItem = { ...updatableExpense, ...action.payload.data };
        const updatedExpenses = [...state];
        updatedExpenses[updatableExpenseIndex] = updatedItem;
        return updatedExpenses;
      case 'DELETE':
        return state.filter((expense) => expense.id !== action.payload);
      default:
        return state;
    }
  }
  
  function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  
    function addExpense(expenseData) {
      dispatch({ type: 'ADD', payload: expenseData });
    }
  
    function deleteExpense(id) {
      dispatch({ type: 'DELETE', payload: id });
    }
  
    function updateExpense(id, expenseData) {
      dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }
  
    const value = {
      expenses: expensesState,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      updateExpense: updateExpense,
    };
  
    return (
      <ExpensesContext.Provider value={value}>
        {children}
      </ExpensesContext.Provider>
    );
  }
  
  export default ExpensesContextProvider;