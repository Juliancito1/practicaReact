import React from 'react'
import TableComponent from '../components/Table'

const VentasScreen = () => {
    const columns = [
        {
          title: 'Nombre Comprador',
          dataIndex: 'nombreComprador',
          key: 'name',
        },
        {
          title: 'Nombre Vendedor',
          dataIndex: 'vendedor',
          key: 'edad',
        },
        {
          title: 'Producto Vendido',
          dataIndex: 'productoNombre',
          key: 'pais',
        },
        {
          title: 'Fecha Venta',
          dataIndex: 'fechaVenta',
          key: 'fechaVenta',
        },
      ];
  return (
    <>
    <h1>Ventas</h1>
    <TableComponent columns={columns} url="/ventas">
    </TableComponent>
    </>
  )
}

export default VentasScreen
