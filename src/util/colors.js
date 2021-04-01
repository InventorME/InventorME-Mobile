import { Appearance } from 'react-native';

function colorGenerator(){
    if(Appearance.getColorScheme() === 'dark'){
        const color = {
            text: '#ffffff',
            accent: '#fffc40',
            background: '#333333',
            theme: '#3f9388',
            button: '#f4ebc1',
            buttonText: '#ffffff',
            label: '#ffffff',
            icon: '#36244f',
            objects: ['#ffb5b9', '#b3b5ff', '#47ff72', '#aebffc', '#b3b5ff'],
            objectsText: '#ffffff'
        }
        return color;
    }
    else{
        const color = {
            text: '#000000',
            accent: '#fffc40',
            background: '#ffffff',
            theme: '#3f9388',
            button: '#f4ebc1',
            buttonText: '#ffffff',
            label: '#000000',
            icon: '#36244f',
            objects: ['#ffb5b9', '#b3b5ff', '#47ff72', '#aebffc', '#b3b5ff'],
            objectsText: '#ffffff'
        }
        return color;
    }
}

export const colors = colorGenerator();