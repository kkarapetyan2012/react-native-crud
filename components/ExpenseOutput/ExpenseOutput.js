import { StyleSheet, Text, View } from "react-native";

import ExpenseSummary from "./ExpenceSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpenseOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={expenses} periodName={expensesPeriod} />
            <ExpensesList expenses={expenses}  />
        </View>
    )
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})