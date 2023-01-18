import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { useState } from 'react';

export const Table = ({ products }) => {
  const [items, setItems] = useState([]);

  const columns = [
    {
      dataField: 'Customer Code',
      text: 'Code',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'Account Name',
      text: 'Account Name',
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: 'Commercial (Legal) Name',
      text: 'Legal Name',
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: 'Parent Account Name',
      text: 'Parent Account Name',
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: 'Coverage',
      text: 'Coverage',
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: 'Address Line 1',
      text: 'Address Line 1',
      filter: textFilter(),
      sort: true,
    },
  ];

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: (row, isSelect, rowIndex, e) => {
      setItems([...items, row['Customer Code']]);
    },
    onSelectAll: (isSelect, rows, e) => {
      setItems([...items, ...rows.map(row => row['Customer Code'])]);
    },
  };

  paginationFactory({
    page: 5,
  });

  return (
    <BootstrapTable
      keyField="Customer Code"
      data={products}
      columns={columns}
      filter={filterFactory()}
      selectRow={selectRow}
      pagination={paginationFactory()}
      striped
      hover
      condensed
    />
  );
};
