import ActionTypes from './action-types'

export const ChangeDemoTitle = (title: string) => ({
    action: ActionTypes.CHANGE_DEMO_TITLE,
    payload: title
})
