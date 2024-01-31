// DataTableComponent.jsx
import React from 'react';
import DataTable from 'react-data-table-component';
import Box from '@mui/material/Box';

const DataTableComponent = ({ data, columns }) => {
  // Style for making column headings bold
  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
      },
    },
  };

  const paginationOptions = {
    rowsPerPageText: 'Rows per page:',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
  };

  return (
    <Box width="100%">
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        paginationPerPage={15} // Display 15 rows per page
        paginationRowsPerPageOptions={[15]} // Rows per page options
        paginationComponentOptions={paginationOptions}
        responsive
      />
    </Box>
  );
};

export default DataTableComponent;
