import { Text as RN_TEXT, StyleSheet } from 'react-native';
import { presets } from './text.preset';

const Text_rn = ({ children, preset = "default", style, }) => {
    const textStyles = StyleSheet.compose(presets[preset], style);

    return (
        <RN_TEXT style={textStyles}>
            {children}
        </RN_TEXT>
    );
};

export default Text_rn;