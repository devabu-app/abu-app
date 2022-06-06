import { colors } from "../themes/colors";


const COMMON = {
    padding: 10,
    paddingTop: 25,
    flex: 1,
};

const BASE = {
    ...COMMON,
    backgroundColor: colors.black,
};


export const layoutPresets = {
    default: BASE,
    dark_bg: {
        ...COMMON,
        backgroundColor: colors.black,

    },
    light_bg: {
        ...COMMON,
        backgroundColor: colors.white,
    }
}