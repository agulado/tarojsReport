import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

type ConnectedProps = {
    redux_title: string
}

type OwnProps = {
    info: string,
    title: string,
    content: string
}

const mapStateToProps = ({ Demo }, { }: OwnProps): ConnectedProps => ({ redux_title: Demo.title })

class Comp extends Component<ConnectedProps & OwnProps> {

    static defaultProps = {
        info: '',
        title: '',
        content: '',
        redux_title: ''
    }

    render() {
        return (
            <View>
                <View>this.props.info= {this.props.info}</View>
                <View>this.props.title= {this.props.title}</View>
                <View>this.props.content= {this.props.content}</View>
                <View>redux.demo.title= {this.props.redux_title}</View>
            </View>
        )
    }

}

export default connect(mapStateToProps, {})(Comp)
