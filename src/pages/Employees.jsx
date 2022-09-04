import React from 'react'
import {GridComponent,Toolbar,ColumnsDirective, ColumnDirective, Page, Search,Inject} from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy';
import {Header} from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 mt-20 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent
        width='auto'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {employeesGrid.map((item,index) => {
            return(
              <ColumnDirective key={index} {...item}/>
            )
          })}
        </ColumnsDirective>
        <Inject services={[Toolbar,Page,Search]} />
      </GridComponent>      
    </div>
  )
}

export default Employees