import { Button,View,StyleSheet,Text,TouchableOpacity,Image } from "react-native";   
type Props = {
    title: string;
    onPress : () => void;
    variant?: "primary" | "secondary" | "tertiary";
}

export default function CustomButton( {title, onPress,variant="primary"} : Props, ) {
    const styles = getStyles(variant); 
    
    return(
<View>
    <TouchableOpacity style={styles.button} onPress= {onPress}>
   <Text style= {styles.text}> {title}</Text>
    </TouchableOpacity>

    <Image />
</View>
    );
}
const getStyles = (variant:  'primary' | 'secondary' | 'tertiary' ) => 
    StyleSheet.create({
        button: {
            borderColor: '#000',
            borderRadius: 6,
            height: 50,
            padding: 12,
            backgroundColor: variant === 'secondary' ? ' #0d2a2cff' : variant === 'tertiary' ? '#e6edecff' : '#1d1a44ff',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingHorizontal: 10,
            width: 200,
        },
        text: {
            color: variant=== 'primary' ? '#ffffffff' : variant=== 'secondary' ? '#08055bff' : variant=== 'tertiary' ? '#03005dff' : '#000000ff',
            fontWeight: 'bold',
            fontSize: 20, 
           

        }
});
