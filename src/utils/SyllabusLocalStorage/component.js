import Immutable from 'immutable'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            console.warn("Localstorage it's empty...")
            return undefined
        }
        console.warn("Loading persistedStorage from localstorage and is: " + JSON.parse(serializedState))
        return Immutable.fromJS(JSON.parse(serializedState))
    } catch (e) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.warn("Browser doesn't supports local storage...")
    }
}
