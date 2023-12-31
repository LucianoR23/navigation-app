import { StyleSheet } from 'react-native';


export const colors = {
    primary: '#5856D6',
};

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: '#1B83DE',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    bigButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        alignItems: 'center',
    },
    menuButton: {
        marginVertical: 10,
    },
    menuItems: {
        fontSize: 20,
    },
});
