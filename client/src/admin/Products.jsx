import styled from "styled-components";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { url } from "../features/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const items =
    products &&
    products.map((x, i) => {
      return {
        id: x.id,
        image: x.default_img,
        title: x.product_name,
        status: "Enabled",
      };
    });
  // {
  //   id: 1,
  //   image:
  //     "https://demo.evershop.io/assets/catalog/5836/2308/plv3169-Blue-thumb.png",
  //   title: "Nike air 5",
  //   price: 130.0,
  //   sku: "NJC44203-Purple-M",
  //   qty: 13,
  //   status: "Enabled",
  // },

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 80,
      editable: true,
      cellClassName: "img",
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.image} alt="" />
          </ImageContainer>
        );
      },
    },
    {
      field: "title",
      headerName: "Product Title",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/admin/edit-product/${params.row.id}`}
          >
            {params.row.title}
          </Link>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
    },
  ];

  const rows =
    items &&
    items.map((item) => {
      return {
        id: item.id,
        image: item.image,
        title: item.title,
        status: item.status,
      };
    });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${url}/products`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card>
        <Box
          sx={{
            height: 400,
            width: "100%",
            "& .img": {
              padding: "10px",
            },
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Card>
    </Container>
  );
};

export default Products;

const Container = styled.div`
  margin-left: 16rem;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 6px;
  min-height: 30vh;
  height: auto;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  width: 4.4rem;
  height: 4.4rem;
  display: flex;
  justify-content: center;
  /* border: 1px solid var(--divider); */
  border-radius: 3px;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
  }
`;
