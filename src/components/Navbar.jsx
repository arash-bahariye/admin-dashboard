import React, {useEffect, useContext} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart,Chat,Notification,UserProfile} from './'
import StateContext from '../context/ContextProvider'

const NavButton = ({title, customFunction, icon, color, dotColor}) => (
  <TooltipComponent content={title} position={'BottomCenter'}>
    <button type='button' onClick={customFunction} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{backgroundColor: dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const cntx = useContext(StateContext);

  useEffect(()=>{
    const handleResize = () => cntx.setscreenSize(window.innerWidth)
    window.addEventListener('resize ',handleResize)
    handleResize()
  },[])

  useEffect(()=>{
    console.log(cntx.screenSize)
    if (cntx.screenSize < 900) {
      cntx.setactiveMenu(false)
    } else {
      cntx.setactiveMenu(true)
    }
  },[cntx.screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunction={()=>cntx.setactiveMenu(prev=>!prev)} color="blue" icon={<AiOutlineMenu/>}/>
      <div className='flex'>
      <NavButton title="Cart" customFunction={()=>cntx.navbarDispatch({type: 'cart'})} color="blue" icon={<FiShoppingCart/>}/>
      <NavButton title="Chat" dotColor="#03c9d7" customFunction={()=>cntx.navbarDispatch({type: 'chat'})} color="blue" icon={<BsChatLeft />}/>
      <NavButton title="Notifications" dotColor="#03c9d7" customFunction={()=>cntx.navbarDispatch({type: 'notification'})} color="blue" icon={<RiNotification3Line/>}/>
      <TooltipComponent content="Profile" position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=>cntx.navbarDispatch({type: 'userProfile'})}>
          <img src={avatar} className="rounded-full w-8 h-8"></img>
          <p>
            <span className='text-gray-400 text-14'>Hi!</span>{' '}
            <span className='font-bold text-gray-400 ml-1 text-14'>Arash</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>
      {cntx.navbarState.cart && <Cart />}
      {cntx.navbarState.chat && <Chat />}
      {cntx.navbarState.notification && <Notification />}
      {cntx.navbarState.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar