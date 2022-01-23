import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: "100%",
        backgroundColor: "#132742",
        paddingTop: getStatusBarHeight() + 17,
    },

});