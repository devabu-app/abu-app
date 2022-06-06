import { View, StyleSheet, Pressable } from "react-native";
import Text_rn from "../components/reuseable/text/text_rn";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ({ navigation }) => {
    const navigation_hook = useNavigation();

    return (
        <View>

            <Text_rn preset="h2" style={styles.container}>
                <Pressable onPress={() => {
                    navigation_hook.goBack();
                }}>
                    <Text_rn>
                        <AntDesign name="arrowleft" size={24} color="white" />
                    </Text_rn>
                </Pressable>
                Abu Hasan
            </Text_rn>
            <Pressable onPress={() => {
                navigation.navigate('Home');
            }}>
                <Text_rn>Home</Text_rn>
            </Pressable>
            <Pressable onPress={() => {
                navigation.navigate('About');
            }}>
                <Text_rn>About</Text_rn>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: spacing[2],
        marginBottom: spacing[1],
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    }
})

export default Header;