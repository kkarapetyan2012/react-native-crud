import { StyleSheet, Text, View } from "react-native";

function ExpenseSummary({ expenses, periodName }) {

    const expensesSum = expenses?.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0)

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    )
}

export default ExpenseSummary;

const styles = StyleSheet.create({
    container: {

    },
    period: {

    },
    sum: {

    }
})