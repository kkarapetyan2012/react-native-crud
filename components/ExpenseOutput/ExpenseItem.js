import { StyleSheet, Text, View, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormatDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ desc, date, amount }) {

    // console.log('amount', amount);
    // console.log('desc', desc);
    // console.log('date', date);

    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense')
    }

    // Guys I forgote wrote in return

    return (
        <Pressable onPress={expensePressHandler}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.desc]}>{desc}</Text>
                    <Text style={styles.textBase}>{getFormatDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>${amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    desc: {
        marginBottom: 4,
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    }
})