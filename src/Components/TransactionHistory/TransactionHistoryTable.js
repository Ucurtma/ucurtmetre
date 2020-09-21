/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import tr from 'dayjs/locale/tr';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ChevronUp,
} from 'react-feather';
import { useFlexLayout, usePagination, useSortBy, useTable } from 'react-table';
import useBreakpoints from '../../Utils/useBreakpoints';

dayjs.extend(relativeTime);
dayjs.locale(tr);

function TransactionHistoryTable({ data }) {
  const breakpoint = useBreakpoints();
  const isMobile = breakpoint === 'isMobile';

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
      {
        Header: 'Ne Kadar',
        accessor: 'amount',
        Cell: ({
          value,
          row: {
            original: { tokenName },
          },
        }) => (
          <div>{`${
            typeof value === 'number' ? Math.floor(value) : value
          } ${tokenName}`}</div>
        ),
      },
    ],
    []
  );

  const defaultSort = useMemo(() => [{ id: 'when', desc: true }], []);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { sortBy: defaultSort, pageSize: 10, pageIndex: 0 },
      disableMultiSort: true,
      disableSortRemove: true,
    },
    useFlexLayout,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = tableInstance;

  return (
    <div className="table-wrapper">
      <div {...(!isMobile && getTableProps())} className="table">
        {!isMobile &&
          headerGroups.map(headerGroup => (
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
          {page.map(row => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map(cell => {
                  return (
                    <div {...cell.getCellProps()} className="td">
                      {isMobile && (
                        <div className="td-header">{cell.render('Header')}</div>
                      )}
                      <div className="td-content">{cell.render('Cell')}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination">
        <div>
          <button
            className="button icon-button"
            type="button"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <ChevronsLeft />
          </button>
          <button
            className="button icon-button"
            type="button"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <ChevronLeft />
          </button>
          <button
            className="button icon-button"
            type="button"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <ChevronRight />
          </button>
          <button
            className="button icon-button"
            type="button"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <ChevronsRight />
          </button>
        </div>
        <span>
          Toplam {pageOptions.length} sayfadan
          <strong>{pageIndex + 1}.</strong>
          sayfayı görüntülüyorsunuz.
        </span>
      </div>
    </div>
  );
}

export default TransactionHistoryTable;
