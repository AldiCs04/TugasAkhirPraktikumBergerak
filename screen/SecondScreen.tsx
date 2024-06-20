import { Text,View } from "react-native";

export default function SecondScreen(){
    return(
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
            }}>
            <Text>Second Screen</Text>
        </View>
    );
}