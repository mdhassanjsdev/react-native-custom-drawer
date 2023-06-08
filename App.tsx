import { View, Text, StatusBar, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useRef, useState } from 'react'

const App = () => {

    const [showMenu, setShowMenu] = useState(false)

    const moveToRight = useRef(new Animated.Value(0)).current
    const scale = useRef(new Animated.Value(1)).current
    const radius = useRef(new Animated.Value(0)).current

    return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <StatusBar backgroundColor='green' />
            <Animated.View style={{ flex: 1, backgroundColor: 'white', position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, transform: [{ scale: scale }, { translateX: moveToRight }], borderRadius: radius }}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity
                        style={{ marginLeft: 12 }}
                        onPress={() => {
                            Animated.timing(scale, {
                                toValue: showMenu ? 1 : .8,
                                useNativeDriver: true,
                                duration: 300
                            }).start();
                            Animated.timing(moveToRight, {
                                toValue: showMenu ? 0 : 230,
                                useNativeDriver: true,
                                duration: 300
                            }).start();
                            Animated.timing(radius, {
                                toValue: showMenu ? 0 : 20,
                                useNativeDriver: true,
                                duration: 300
                            }).start();
                            setShowMenu(!showMenu)
                        }}
                    >
                        <Image source={require('./image/menu.png')} style={{ width: 40, height: 30 }} />
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}

export default App