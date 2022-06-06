import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { layoutPresets } from './layout.preset';
import Navigations from './navigations';
import Header from './header';

const Layouts = ({ children, preset = "default", style }) => {

    // install font
    const [loaded] = useFonts({
        SplineSansMono: require('../../assets/fonts/SplineSansMono.ttf'),
    });
    if (!loaded) {
        return (
            <Text>Font is loading....</Text>
        );
    };

    const layoutStyles = StyleSheet.compose(layoutPresets[preset], style);
    return (
        <SafeAreaView style={layoutStyles}>
            <Navigations />
            {children}
        </SafeAreaView>
    );
};

export default Layouts;