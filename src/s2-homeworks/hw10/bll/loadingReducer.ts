const initState = {
    isLoading: true,
}

export const loadingReducer = (state = initState, action: LoadingActionType): { isLoading: boolean; } => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {
                ...state, // распространяем текущее состояние
                isLoading: action.isLoading // обновляем isLoading на новое значение
            };
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
