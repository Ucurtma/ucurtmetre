import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import Card from '../Card/Card';
import './TransactionHistory.scss';

function TransactionHistory() {
  const data = useMemo(
    () => [
      {
        from: 'Hello',
        to: 'World',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'react-table',
        to: 'rocks',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'whatever',
        to: 'you want',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'Hello',
        to: 'World',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'react-table',
        to: 'rocks',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'whatever',
        to: 'you want',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'Hello',
        to: 'World',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'react-table',
        to: 'rocks',
        when: new Date().toISOString(),
        quantity: 2400,
      },
      {
        from: 'whatever',
        to: 'you want',
        when: new Date().toISOString(),
        quantity: 2400,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'Kimden', accessor: 'from' },
      { Header: 'Kime', accessor: 'to' },
      { Header: 'Ne Zaman', accessor: 'when' },
      { Header: 'Ne Kadar', accessor: 'quantity' },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Card
      className="transaction-history"
      title="İşlem Geçmişi"
      desc="Öğrencilere destek olması için hazırladığımız akıllı algoritmamız ile hangi işlemler yapıldığının kısa bir özetine bu sayfadan ulaşabilirsiniz."
    >
      <div className="table-wrapper">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th className="title" {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr className="table-item" {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td className="table-item-cell" {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default TransactionHistory;
