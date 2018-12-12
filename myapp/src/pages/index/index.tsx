import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Comp from '../../component/comp'

const INITIAL_STATE = {
  title: 'abc'
}

type State = Readonly<typeof INITIAL_STATE>

export default class Index extends Component {

  readonly state: State = INITIAL_STATE

  onButtonClick() {
    this.setState(() => ({
      title: 'def'
    }))
  }

  render() {
    return (
      <View>
        <Button onClick={this.onButtonClick.bind(this)} >setState({'{title:def}'})</Button>
        <View>this.state.title={this.state.title}</View>
        -------分割线（以下为组件）--------
        <Comp title={this.state.title} />
      </View>
    )
  }
}

