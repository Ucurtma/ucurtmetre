/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import tr from 'dayjs/locale/tr';
import { ArrowRight, ChevronDown, ChevronUp } from 'react-feather';
import { useFlexLayout, useSortBy, useTable } from 'react-table';

dayjs.extend(relativeTime);
dayjs.locale(tr);

function TransactionHistoryTable({ data }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Kimden',
        accessor: 'from.name',
        Cell: ({ value }) => (
          <div className="person with-icon">
            <div>{value || 'Anonim'}</div>
            <div className="icon">
              <ArrowRight />
            </div>
          </div>
        ),
      },

      {
        Header: 'Kime',
        accessor: 'to.name',
        Cell: ({
          value,
          row: {
            original: { to },
          },
        }) => {
          let Element = 'div';
          let linkProps;
          if (to.campaignCode && to.campaignCode !== 'donate-all') {
            Element = 'a';
            linkProps = {
              href: `https://www.ucurtmaprojesi.com/campaign/${to.campaignCode}`,
            };
          }
          return (
            <Element className="person" {...linkProps}>
              {value}
            </Element>
          );
        },
      },
      {
        Header: 'Ne Zaman',
        accessor: 'when',
        id: 'when',
        Cell: ({ value }) => <div>{dayjs().to(dayjs(value * 1000))}</div>,
      },
      { Header: 'Ne Kadar', accessor: 'amount' },
    ],
    []
  );

  const defaultSort = useMemo(() => [{ id: 'when', desc: true }], []);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { sortBy: defaultSort },
      disableMultiSort: true,
      disableSortRemove: true,
    },
    useFlexLayout,
    useSortBy
  );
  const { getTableProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className="table-wrapper">
      <div {...getTableProps()} className="table">
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps({})} className="tr">
            {headerGroup.headers.map(column => (
              <div
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="th title"
              >
                {column.render('Header')}
                {column.isSorted ? (
                  column.isSortedDesc ? (
                    <ChevronDown />
                  ) : (
                    <ChevronUp />
                  )
                ) : (
                  ''
                )}
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
  );
}

export default TransactionHistoryTable;
