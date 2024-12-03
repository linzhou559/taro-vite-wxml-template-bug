import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      {/* @ts-ignore */}
      <native-test
        src='https://placedog.net/300/300'
        mode='aspectFit'
      />
    </View>
  )
}
