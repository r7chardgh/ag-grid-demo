'use client'
import { HKMAMonetaryData } from '@/lib/definition';
import { getDailyMonetaryStatByLimit } from '@/lib/serverActions';
import { AgGridReact } from 'ag-grid-react';
import { useEffect, useState } from 'react'

const HKMADailyMonetaryStat = () => {
  const [dataSet, setDataSet] = useState<HKMAMonetaryData[] | []>([]);
  const [colDefs, setColDefs] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const data = await getDailyMonetaryStatByLimit();
      if (!!data.header && data.header.success) {
        setDataSet(data.result.records);
      }
    })()

  }, [])

  useEffect(() => {
    if (dataSet && dataSet.length > 0) {
      const item = dataSet[0];
      const newColDef = Object.keys(item).map(key => {
        return {
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
          minWidth: 120,
          flex:1,
          filter:true,
        }
      })
      setColDefs(newColDef);
    }
  }, [dataSet])

  return (
    <div className='flex gap-4 flex-col'>
      <h3>Client side row mode: (fetch data at first load)</h3>
      <p>data: HKMA public data </p>
      <div className='ag-theme-apline' style={{ height: 400, width: '100%' }}>
        <AgGridReact
          rowData={dataSet}
          columnDefs={colDefs}
          rowModelType='clientSide'
          rowHeight={30}
          pagination={true}
          paginationPageSize={30}
          paginationPageSizeSelector={[10,30,60]}
          rowSelection={{mode:'multiRow'}}
        />
      </div>
    </div>
  )
}

export default HKMADailyMonetaryStat