import React, {createContext, useState, useReducer} from 'react';

const StateContext = createContext();

const navbarInitialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

const settingsInitialState = {
    color:'#1A97F5',
    darkMode:false,
    selected:0
}

const navbarReducer = (navbarState, action) => {
    switch (action.type) {
        case 'chat':
            return {cart:false,userProfile:false,notification:false, chat:!navbarState.chat}
        case 'cart':
            return {chat:false,userProfile:false,notification:false, cart:!navbarState.cart}
        case 'userProfile':
            return {cart:false,chat:false,notification:false, userProfile:!navbarState.userProfile}
        case 'notification':
            return {cart:false,userProfile:false,chat:false, notification:!navbarState.notification}
        default:
            break;
    }
}

const settingsReducer = (settings, action) => {
    switch(action.type){
        case 'setColor':
            return {...settings, color:action.color,selected:action.selected}
        case 'setDarkMode':
            return {...settings, darkMode:!settings.darkMode}
        default:
            break;
    }
}

export const ContextProvider = (props) => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [activeSetting,setActiveSetting] = useState(false);
    const [screenSize, setscreenSize] = useState(undefined);
    const [navbarState, navbarDispatch] = useReducer(navbarReducer, navbarInitialState)
    const [settings, settingsDispatch] = useReducer(settingsReducer, settingsInitialState);
    return(
        <StateContext.Provider value={ {activeMenu,setactiveMenu,activeSetting,setActiveSetting,screenSize,setscreenSize,navbarState,navbarDispatch,settings,settingsDispatch}}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContext;