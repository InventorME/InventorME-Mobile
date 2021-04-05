import * as React from 'react';
import { View, Text, Animated, TextInput, StyleSheet } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export default function ProgressCircle({

    percentage = 75,
    radius = 90,
    strokeWidth = 10,
    duration = 500,
    delay = 0,
    color = 'tomato',
    textcolor,
    max = 100,

}) {
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const circleRef = React.useRef();
    const inputRef = React.useRef();
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;
    const size = (radius - (strokeWidth/2))*2
    const center = size/2

    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true
        }).start();
    };


    React.useEffect(() => {
        animation(percentage);

        animatedValue.addListener((V) => {
            if (circleRef?.current) {
                const maxPercent = (100 * V.value) / max;
                const strokeDashoffset = circleCircumference - (circleCircumference * maxPercent) / 100;

                circleRef.current.setNativeProps({
                    strokeDashoffset,
                });
            }

            if (inputRef?.current) {
                inputRef.current.setNativeProps({
                    text: `${Math.round(V.value)}%`
                });
            }


        });

        return () => {
            animatedValue.removeAllListeners();
        };
    }, [max, percentage]);


    return (
        <View>
            <AnimatedInput
                ref={inputRef}
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue="0"
                x={center}
                y={center}
                style={[
                    StyleSheet.absoluteFillObject,
                    { fontSize: radius / 3, color: textcolor ?? color },
                    { fontWeight: '900', textAlign: 'center' },

                ]}
            />
            <Svg width={radius*2} height={radius*2} viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}>
                <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                    
                    
                    <Circle
                        cx={center}
                        cy={center}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeOpacity={0.2}
                    />

                    <AnimatedCircle
                        ref={circleRef}
                        cx={center}
                        cy={center}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference}
                        strokeLinecap='round'
                    />

                     
                </G>
                
            </Svg>
            
        </View>
    );
}