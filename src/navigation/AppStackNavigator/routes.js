import LoginScreen from "@screens/Login";
import ResetPasswordScreen from "@screens/ResetPassword";
import StoreScreen from "@screens/Store";
import SettingsScreen from "@screens/Settings";
import UserScreen from "@screens/User";
import MainScreen from "@screens/Main";

const AppStackRoute = {
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        }
    },
    ResetPassword: {
        screen: ResetPasswordScreen,
        navigationOptions: {
            header: null,
        }
    },
    Store: {
        screen: StoreScreen,
        navigationOptions: {
            header: null,
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            header: null,
        }
    },
    User: {
        screen: UserScreen,
        navigationOptions: {
            header: null,
        }
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            header: null,
        }
    }
}

export default AppStackRoute;