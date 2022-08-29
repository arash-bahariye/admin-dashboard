import { ChartComponent, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { Inject, Legend, Category, Tooltip, StackingColumnSeries } from '@syncfusion/ej2-react-charts'

const Stacked = ({width,height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='stack chart'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border:{width: 0}}}
      tooltip={{enable:true}}
      legendSettings={{background:'white'}}
    >
      <Inject services={[Legend,Category, Tooltip, StackingColumnSeries]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=>{
          return <SeriesDirective key={index} {...item}/>
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked