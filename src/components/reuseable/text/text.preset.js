import { colors } from "../../../themes/colors";
import { typography } from "../../../themes/typography";


const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white
}


const BOLD = {
    fontFamily: typography.primary,
    fontWeight: 'bold',
    color: colors.white
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BOLD,
        fontSize: 24,
    },
    h4: {
        ...BOLD,
        fontSize: 20,
    },
    h5: {
        ...BOLD,
        fontSize: 16,
    },
    h6: {
        ...BOLD,
        fontSize: 12,
    }
}