const INITIAL_STATE = {
    title: 'redux_title default value'
}

interface State {
    title: string
}

export default ((state: State = INITIAL_STATE) => state)