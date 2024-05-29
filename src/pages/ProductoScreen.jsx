import React from 'react'
import SideBar from '../components/SideBar'
import TableComponent from '../components/Table'

const ProductoScreen = () => {
    const columns = [
        {
          title: 'Nombre Producto',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Precio',
          dataIndex: 'precio',
          key: 'edad',
        },
        {
          title: 'Descripcion',
          dataIndex: 'descripcion',
          key: 'pais',
        },
      ];
  return (
    <div>
      <h1>Productos</h1>
      <TableComponent columns={columns} url={'/productos'}></TableComponent>
    </div>
  )
}

export default ProductoScreen
