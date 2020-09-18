import React, { useMemo } from 'react';
import { useFlexLayout, useTable } from 'react-table';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import tr from 'dayjs/locale/tr';
import { ArrowRight } from 'react-feather';
import Card from '../Card/Card';
import './TransactionHistory.scss';

dayjs.extend(relativeTime);
dayjs.locale(tr);

function TransactionHistory() {
  const data = useMemo(
    () => [
      {
        from: 'Anonim',
        to: 'Akıllı Kontrat',
        when: dayjs('09.18.2020'),
        quantity: 2400,
      },
      {
        from: 'Akıllı Kontrat',
        to: 'Mustafa Turhan',
        when: dayjs('09.17.2020'),
        quantity: 2400,
      },
      {
        from: 'Akıllı Kontrat',
        to: 'Harry Potter',
        when: dayjs('09.16.2020'),
        quantity: 2400,
      },
      {
        from: 'Akıllı Kontrat',
        to: 'Gandalf',
        when: dayjs('09.16.2020'),
        quantity: 2400,
      },
      {
        from: 'Anonim',
        to: 'Akıllı Kontrat',
        when: dayjs('09.15.2020'),
        quantity: 2400,
      },
      {
        from: 'Anonim',
        to: 'Akıllı Kontrat',
        when: dayjs('09.14.2020'),
        quantity: 2400,
      },
      {
        from: 'Akıllı Kontrat',
        to: 'Ron Weasley',
        when: dayjs('09.13.2020'),
        quantity: 2400,
      },
      {
        from: 'Akıllı Kontrat',
        to: 'Hermione Granger',
        when: dayjs('09.12.2020'),
        quantity: 2400,
      },
      {
        from: 'Akıllı Kontrat',
        to: 'James Potter',
        when: dayjs('09.11.2020'),
        quantity: 2400,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Kimden',
        accessor: 'from',
        Cell: ({ value }) => (
          <div className="person with-icon">
            <div>{value}</div>
            <div className="icon">
              <ArrowRight />
            </div>
          </div>
        ),
      },

      {
        Header: 'Kime',
        accessor: 'to',
        Cell: ({ value }) => <div className="person">{value}</div>,
      },
      {
        Header: 'Ne Zaman',
        accessor: 'when',
        Cell: ({ value }) => <div>{dayjs().to(dayjs(value))}</div>,
      },
      { Header: 'Ne Kadar', accessor: 'quantity' },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useFlexLayout);
  const { getTableProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <Card
      className="transaction-history"
      title="İşlem Geçmişi"
      desc="Öğrencilere destek olması için hazırladığımız akıllı algoritmamız ile hangi işlemler yapıldığının kısa bir özetine bu sayfadan ulaşabilirsiniz."
    >
      <div className="table-wrapper">
        <div {...getTableProps()} className="table">
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps({})} className="tr">
              {headerGroup.headers.map(column => (
                <div {...column.getHeaderProps()} className="th title">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
          <div className="tbody">
            {rows.map(row => {
              prepareRow(row);
              return (
                <div {...row.getRowProps()} className="tr">
                  {row.cells.map(cell => {
                    return (
                      <div {...cell.getCellProps()} className="td">
                        {cell.render('Cell')}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TransactionHistory;
