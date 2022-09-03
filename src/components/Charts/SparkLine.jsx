import React from 'react'
import { Category, ChartComponent, ColumnSeries, DataLabel, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  data = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];
  let tooltip = { enable: true, shared: false };
  let primaryyAxis = { labelFormat: '€{value}' };
  let primarxyAxis = { valueType: 'Category' };
  let legendSettings = { visible: true };
  let marker = { dataLabel: { visible: true } };
  return (
    <ChartComponent 
      id="charts"
      width={width}
      height={height}
      primaryXAxis={primarxyAxis}
      legendSettings={legendSettings} 
      primaryYAxis={primaryyAxis} 
      tooltip={tooltip}
      chartArea={{border:{width: 0}}}
      >
      <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' yName='sales' name='Expenses' marker={marker}/>
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default SparkLine