import React, { useEffect, useState } from 'react'
import {Table} from 'antd';
import testApi from '../api/testApi';

const TableComponent = ({columns, url}) => {

  const [dataTable,setDataTable] = useState([]);

  useEffect(() => {
    const getTableData = async () =>{
      try {
        const resp = await testApi.get(`${url}`)
        setDataTable(resp.data.lista)
      } catch (error) {
        
      }
    }
    getTableData()
  },[])

  return <Table columns={columns} dataSource={dataTable} />
}

export default TableComponent
