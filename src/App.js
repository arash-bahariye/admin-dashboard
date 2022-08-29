import React, {Fragment, useContext, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Navbar, Footer, Sidebar, ThemeSettings} from './components'
import {Ecommerce, Orders ,Line, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor} from './pages'
import StateContext from './context/ContextProvider';

const App = () => {
    const {activeMenu} = useContext(StateContext)
  return (
    <Fragment>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4 z-50'>
                    <TooltipComponent content='settings' position='top'>
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full' style={{backgroundColor: "blue"}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu? 
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                    <Sidebar />
                </div> 
                : 
                <div className='w-0 dark:bg-secondary-dark-bg'>
                    <Sidebar />
                </div>}
                <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
                    <Routes>
                    {/* dashboard */}
                        <Route path='/' element={<Ecommerce/>} />
                        <Route path='/ecommerce' element={<Ecommerce/>} />
                        {/* pages */}
                        <Route path='/kanban' element={<Kanban/>} />
                        <Route path='/editor' element={<Editor/>} />
                        <Route path='/calendar' element={<Calendar/>} />
                        <Route path='/color-picker' element={<ColorPicker/>} />
                        {/* charts */}
                        <Route path='/line' element={<Line/>} />
                        <Route path='/area' element={<Area/>} />
                        <Route path='/bar' element={<Bar/>} />
                        <Route path='/pie' element={<Pie/>} />
                        <Route path='/financial' element={<Financial/>} />
                        <Route path='/color-mapping' element={<ColorMapping/>} />
                        <Route path='/pyramid' element={<Pyramid/>} />
                        <Route path='/stacked' element={<Stacked/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </Fragment>
  )
}

export default App