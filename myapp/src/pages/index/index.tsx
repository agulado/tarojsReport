import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
// import Comp from '../../component/comp'
import CompNoConnect from '../../component/comp-no-connect'

const INITIAL_STATE = {
  info: 'old info',
  obje: {
    title: 'old title',
    content: 'old content'
  }
}

type State = Readonly<typeof INITIAL_STATE>

export default class Index extends Component {

  readonly state: State = INITIAL_STATE

  onButtonClick() {
    this.setState(() => ({
      info: 'new info',
      obje: {
        title: 'new title',
        content: 'new content'
      }
    }), () => {
      console.warn(this.state)
    })
  }

  render() {
    return (
      <View>
        <Button onClick={this.onButtonClick.bind(this)} >update state</Button>
        <View>this.state.title={this.state.info}</View>
        <View>this.state.obje.title={this.state.obje.title}</View>
        <View>this.state.obje.content={this.state.obje.content}</View>
        {/* --分割线（以下为含有connect的组件）--
        <Comp
          info={this.state.info}
          title={this.state.obje.title}
          content={this.state.obje.content}
        /> */}
        --分割线（以下为不含connect的组件）--
        <CompNoConnect
          prop_info={this.state.info}
          prop_title={this.state.obje.title}
          prop_content={this.state.obje.content}
        />
      </View>
    )
  }
}

