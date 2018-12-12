import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'

type ConnectedProps = {
    redux_title: string
}

type OwnProps = {
    title: string
}

const mapStateToProps = ({ Demo }, { }: OwnProps): ConnectedProps => ({ redux_title: Demo.title })

class Comp extends Component<ConnectedProps & OwnProps> {

    static defaultProps = {
        title: '',
        redux_title: ''
    }

    render() {
        return (
            <View>
                <View>this.props.title= {this.props.title}</View>
                <View>redux.demo.title= {this.props.redux_title}</View>
            </View>
        )
    }

}

export default connect(mapStateToProps,{})(Comp)
