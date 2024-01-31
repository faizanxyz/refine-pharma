import { Box, styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import UseFormControl from "../CustomInput/input";
import DataTableComponent from "../DataTable/Datatablee";
import useProducts from '../Hooks/useProducts';
import Delete from "../Delete";

  const Product = () => {
    const { products, isLoading, isError, error } = useProducts();
  
    const Boxhead = styled(Box)({
      borderBottom: "1px solid lightgray",
      paddingLeft: "20px",
      paddingRight: "20px",
      marginLeft: "20px",
      marginRight: "20px",
      paddingTop: "20px",
      padding: "10px",
      color: "#848585",
    });
  
    const Boxfield = styled(Box)({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",  
      paddingTop: "30px",
    });
  
    const Boxback = styled(Box)({
      backgroundColor: "white",
      height: "400px",
      borderRadius: "6px",
      marginTop: "20px",
    });
  
    const Boximg = styled(Box)({
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid lightgray",
      paddingBottom: "7px",
      gap: "4px",
    });
    const Boxicon = styled(Box)({});
  
    // Columns for DataTableComponent
    const columns = [
      {
        name: 'Product#Sku',
        selector: (row) => row.sku,
      },
      {
        name: 'Barcode',
        selector: (row) => row.barcode,
      },
      {
        name: 'Product Name',
        selector: (row) => row.name,
      },
      {
        name: 'Stock Quantity',
        selector: (row) => row.number,
      },
      {
        name: 'Cost Price',
        selector: (row) => row.cost_price,
      },
      {
        name: 'Price',
        selector: (row) => row.Status,
      },
      {
        name: 'Action',
        selector: (row) => <Delete/>
      },
     
    ];
  console.log(products)
    const data = products?.results?.map((row) => ({
      sku: row.sku,
      barcode: row.barcode,
      name: row.name,
      number: row.number,
      cost_price: row.cost_price,
      Status: row.status,
     
     
      
    })) || [];
  
    return (
      <>
        <Boximg>
          <Boxicon>
            <img src="/assets/icons/productCardIcon.svg" alt="" />
          </Boxicon>
          <Typography variant="h3" sx={{ fontSize: "16px", fontWeight: "700" }}>
            Product
          </Typography>
        </Boximg>
        <Boxback>
          <Boxhead>
            <Typography variant="h3" style={{ fontSize: "20px" }}>
              Search
            </Typography>
          </Boxhead>
          <Boxfield>
            <Box sx={{ width: "100%" }}>
              <UseFormControl label="data1" />
            </Box>
            <Box sx={{ width: "100%" }}>
              <UseFormControl label="data1" />
            </Box>
            <Box sx={{ width: "100%" }}>
              <UseFormControl label="data1" />
            </Box>
          </Boxfield> 
          {/* Use DataTableComponent with the fetched data and columns */}
          <DataTableComponent data={data} columns={columns} />
        </Boxback>
      </>
    );
  }
export default Product;
