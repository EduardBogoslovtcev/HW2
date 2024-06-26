import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            if (action.payload === "up") {
                return [...state].sort((u1, u2) => u1.name.localeCompare(u2.name))
            }
            if (action.payload === "down"){ 
                return [...state].sort((u1, u2) => u2.name.localeCompare(u1.name))
            }
            else return state;
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(u => u.age >= 18) // need to fix
        }
        default:
            return state
    }
}
