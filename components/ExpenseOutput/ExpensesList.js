import ExpenseItem from "./ExpenseItem";
import { FlatList } from "react-native";



// function renderExpencesItem(itemData) {
//     return (
//         <>
//             <Text>{itemData.item.desc}</Text>
//             <Text>${itemData.item.amount}</Text>
//         </>
//     )
// }

function renderExpencesItem(itemData) {
    return <ExpenseItem {...itemData.item} />
}

function ExpensesList({ expenses }) {    

    console.log('expenses', expenses)

    return (
        <FlatList
            data={expenses}
            renderItem={(itemData) => {
                return <ExpenseItem {...itemData.item} />
            }} 
            keyExtractor={item => item.id}
        />
    ) 
}

export default ExpensesList;