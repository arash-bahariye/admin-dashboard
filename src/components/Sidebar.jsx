import React, {useContext} from 'react'
import {Link, NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from '../data/dummy'
import StateContext from '../context/ContextProvider';

const Sidebar = () => {
  const context = useContext(StateContext)
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2"
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  const handleSideBar = () => {
    if (context.screenSize < 900 && context.activeMenu) {
      context.setactiveMenu(false)
    } else {
      context.setactiveMenu(true)
    }
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10'>
      {context.activeMenu && <>
        <div className='flex justify-between items-center'>
        <Link to='/' onClick={()=>context.setactiveMenu(prev=>!prev)} className='items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <SiShopware /> <span>Admin Dashbord</span>
        </Link>
        <TooltipComponent content='Menu' position='BottomCenter'>
          <button type="button" onClick={()=>context.setactiveMenu(false)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className='mt-10'>
        {links.map((item) => {
          return(
            <div key={item.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
            {item.links.map(link => {
              return(
                <NavLink to={`/${link.name}`} key={link.name} onClick={handleSideBar} className={ ({isActive}) =>{
                  return(
                    isActive ? activeLink : normalLink
                  )
                }}>
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              )
            })}
            </div>
          )
        })}
      </div>
      </>}
    </div>
  )
}

export default Sidebar