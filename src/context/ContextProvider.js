import React, {createContext, useState, useReducer} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

const navbarReducer = (navbarState, action) => {
    switch (action.type) {
        case 'chat':
            return {...navbarState, chat:!navbarState.chat}
        case 'cart':
            return {...navbarState, cart:!navbarState.cart}
        case 'userProfile':
            return {...navbarState, userProfile:!navbarState.userProfile}
        case 'notification':
            return {...navbarState, notification:!navbarState.notification}
        default:
            break;
    }
}

export const ContextProvider = (props) => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [screenSize, setscreenSize] = useState(undefined);
    const [navbarState, navbarDispatch] = useReducer(navbarReducer, initialState)
    return(
        <StateContext.Provider value={ {activeMenu,setactiveMenu,screenSize,setscreenSize,navbarState,navbarDispatch}}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContext;