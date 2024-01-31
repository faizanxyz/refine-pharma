import React from 'react';

interface NumberPaginationProps {
  paginationProps: {
    pages: number;
    onPageChange: (pageIndex: number) => void;
    pageIndex: number;
  };
}

const NumberPagination: React.FC<NumberPaginationProps> = ({ paginationProps }) => {
  const {
    pages,
    onPageChange,
    pageIndex,
  } = paginationProps;

  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number - 1)}
          style={{
            border: '1px solid',
            padding: '0.5rem',
            backgroundColor: pageIndex === number - 1 ? '#ccc' : 'transparent',
            cursor: 'pointer',
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default NumberPagination;
