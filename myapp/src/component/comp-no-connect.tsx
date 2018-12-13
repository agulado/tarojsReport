import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

interface Props {
    prop_info: string,
    prop_title: string,
    prop_content: string
}

export default class CompNoConnect extends Component {

    static defaultProps = {
        prop_info: 'default info',
        prop_title: 'default title',
        prop_content: 'default content'
    }

    constructor(readonly props: Props) {
        super(props)
    }

    render() {
        return (
            <View>
                <View>this.props.info= {this.props.prop_info}</View>
                <View>this.props.title= {this.props.prop_title}</View>
                <View>this.props.content= {this.props.prop_content}</View>
            </View>
        )
    }
}