import React from 'react'
import { GridComponent, ColumnsDirective,ColumnDirective,Sort,Filter,Edit,Toolbar,Page,Selection,Inject } from '@syncfusion/ej2-react-grids'
import{customersData,customersGrid} from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 mt-20 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title='Customers' />
    <GridComponent
      width='auto'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Search','Delete']}
      editSettings={{allowDeleting:true,allowEditing:true}}
    >
      <ColumnsDirective>
        {customersGrid.map((item,index) => {
          return(
            <ColumnDirective key={index} {...item}/>
          )
        })}
      </ColumnsDirective>
      <Inject services={[Toolbar,Page,Sort,Filter,Edit,Selection]} />
    </GridComponent>      
  </div>
  )
}

export default Customers