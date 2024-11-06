// import styled from "styled-components";
// import { HiCamera } from "react-icons/hi";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { useEffect, useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { variantsCreate } from "../features/variantsSlice";
// import { useDispatch } from "react-redux";
// import { url } from "../features/api";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const EditProduct = () => {
//   const dispatch = useDispatch();
//   const params = useParams();

//   const [images, setImages] = useState([]);
//   const [imagesUrl, setImagesUrl] = useState([]);
//   const [qty, setQty] = useState(1);
//   const [sku, setSku] = useState("");
//   const [price, setPrice] = useState(null);
//   const [product, setProduct] = useState({});
//   const [variants, setVariants] = useState([]);
//   const [name, setName] = useState("");

//   console.log(product);
//   console.log(variants);
//   console.log(name);

//   useEffect(() => {
//     fetchProduct();
//     fetchProductVariants();
//   }, []);

//   // const items = [
//   //   {
//   //     id: 1,
//   //     image:
//   //       "https://demo.evershop.io/assets/catalog/5836/2308/plv3169-Blue-thumb.png",
//   //     title: "Nike air 5",
//   //     price: 130.0,
//   //     sku: "NJC44203-Purple-M",
//   //     qty: 13,
//   //     status: "Enabled",
//   //   },
//   // ];

//   const items =
//     variants &&
//     variants.map((x, i) => {
//       return {
//         id: i,
//         image: x.default_photo,
//         title: x.product_name,
//         price: x.price,
//         sku: "NJC44203-Purple-M",
//         qty: x.qty_in_stock,
//         status: "Enabled",
//       };
//     });

//   const columns = [
//     {
//       field: "image",
//       headerName: "Image",
//       width: 80,
//       editable: true,
//       cellClassName: "img",
//       renderCell: (params) => {
//         return (
//           <ImageContainer>
//             <img src={params.row.image} alt="" />
//           </ImageContainer>
//         );
//       },
//     },
//     {
//       field: "title",
//       headerName: "Product Title",
//       width: 100,
//       editable: true,
//     },
//     {
//       field: "price",
//       headerName: "Price",
//       width: 60,
//       editable: true,
//     },
//     {
//       field: "sku",
//       headerName: "SKU",
//       width: 150,
//       editable: true,
//     },
//     {
//       field: "qty",
//       headerName: "Qty",
//       width: 80,
//       editable: true,
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 110,
//       editable: true,
//     },
//   ];

//   const rows =
//     items &&
//     items.map((item) => {
//       return {
//         id: item.id,
//         image: item.image,
//         title: item.title,
//         price: item.price,
//         sku: item.sku,
//         qty: item.qty,
//         status: item.status,
//       };
//     });

//   const categories = [
//     {
//       id: 1,
//       category_name: "Clothing",
//     },
//     {
//       id: 2,
//       category_name: "Shoes",
//     },
//     {
//       id: 3,
//       category_name: "Jewellery",
//     },
//   ];

//   const sizes = ["XL", "S", "M"];

//   const colors = ["Blue", "Red", "Black"];

//   const brands = ["Nike", "Adidas", "Ralph Lauren"];

//   const [open, setOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const removeImage = (image) => {
//     setImagesUrl(imagesUrl.filter((img) => img !== image));
//   };

//   const fetchProduct = async () => {
//     try {
//       const res = await axios.get(`${url}/products/${params.id}`);
//       setProduct(res.data);
//       setName(res.data.product_name);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchProductVariants = async () => {
//     try {
//       const res = await axios.get(`${url}/products/${params.id}/variants`);
//       setVariants(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleImages = (e) => {
//     const files = Array.from(e.target.files);
//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onloadend = () => {
//         setImages((oldArray) => [...oldArray, reader.result]);
//         setImagesUrl((oldArray) => [...oldArray, reader.result]);
//       };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(
//       variantsCreate({
//         product_id: 1,
//         price,
//         qty_in_stock: qty,
//         photos: images,
//       })
//     );
//   };

//   return (
//     <Container>
//       <Title>
//         <h2>Edit Product</h2>
//       </Title>
//       <section>
//         <Left>
//           <Card>
//             <h2>General</h2>
//             <FormGroup>
//               <label>Name</label>
//               {/* <input type="text" value="Nike revolution 5" /> */}
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </FormGroup>
//             <FormGrid>
//               <div>
//                 <label>SKU</label>
//                 <input type="text" value="NJC44203-Purple-M" />
//               </div>
//               <div>
//                 <label>Price</label>
//                 <input type="text" value="123.00" />
//               </div>
//               <div>
//                 <label>Weight</label>
//                 <input type="text" value="13" />
//               </div>
//             </FormGrid>
//             <FormGroup>
//               <label>Description</label>
//               <textarea
//                 cols="50"
//                 rows="5"
//                 value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat mi eget elit elementum, id pulvinar tellus eleifend."
//               ></textarea>
//             </FormGroup>
//           </Card>
//           <Card>
//             <h2>Media</h2>
//             <ImageList>
//               <div className="uploader">
//                 <div className="upload-icon">
//                   <HiCamera />
//                 </div>
//               </div>
//               <div className="images">
//                 <div className="image"></div>
//                 <div className="image"></div>
//                 <div className="image"></div>
//               </div>
//             </ImageList>
//           </Card>
//           <Card>
//             <h2>Variants</h2>
//             <TableBox>
//               <Box
//                 sx={{
//                   height: 400,
//                   width: "100%",
//                   "& .img": {
//                     padding: "10px",
//                   },
//                 }}
//               >
//                 <DataGrid
//                   rows={rows}
//                   columns={columns}
//                   initialState={{
//                     pagination: {
//                       paginationModel: {
//                         pageSize: 5,
//                       },
//                     },
//                   }}
//                   pageSizeOptions={[5]}
//                   checkboxSelection
//                   disableRowSelectionOnClick
//                 />
//               </Box>
//             </TableBox>
//             <AddVariant variant="outlined" onClick={handleClickOpen}>
//               Add variant
//             </AddVariant>
//             <Dialog
//               open={open}
//               onClose={handleClose}
//               fullWidth={true}
//               maxWidth={"md"}
//             >
//               <DialogTitle>Add variant</DialogTitle>
//               <DialogContent>
//                 <form onSubmit={handleSubmit}>
//                   <EditAttributeGroup>
//                     <label>Size</label>
//                     <div className="select-container">
//                       <select className="select-box">
//                         <option value="" disabled>
//                           Select size
//                         </option>
//                         {sizes.map((size, i) => (
//                           <option value={size}>{size}</option>
//                         ))}
//                       </select>
//                       <div className="icon-container">
//                         <svg
//                           viewBox="0 0 20 20"
//                           width="1rem"
//                           height="1.25rem"
//                           focusable="false"
//                           aria-hidden="true"
//                         >
//                           <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </EditAttributeGroup>
//                   <EditAttributeGroup>
//                     <label>Color</label>
//                     <div className="select-container">
//                       <select className="select-box">
//                         <option value="" disabled>
//                           Select color
//                         </option>
//                         {colors.map((color, i) => (
//                           <option value={color}>{color}</option>
//                         ))}
//                       </select>
//                       <div className="icon-container">
//                         <svg
//                           viewBox="0 0 20 20"
//                           width="1rem"
//                           height="1.25rem"
//                           focusable="false"
//                           aria-hidden="true"
//                         >
//                           <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </EditAttributeGroup>
//                   <FormGrid>
//                     <div>
//                       <label>SKU</label>
//                       <input
//                         type="text"
//                         onChange={(e) => setSku(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <label>Price</label>
//                       <input
//                         type="number"
//                         onChange={(e) => setPrice(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <label>Quantity</label>
//                       <input
//                         type="number"
//                         onChange={(e) => setQty(e.target.value)}
//                       />
//                     </div>
//                     <div>
//                       <label>Weight</label>
//                       <input type="text" />
//                     </div>
//                   </FormGrid>
//                   <ImageList>
//                     <div className="uploader">
//                       <div className="upload-icon">
//                         <HiCamera />
//                         <label htmlFor="images">Select Images</label>
//                         <input
//                           type="file"
//                           name="images"
//                           accept="image/*"
//                           onChange={handleImages}
//                           multiple
//                         />
//                       </div>
//                     </div>
//                     <ImagesContainer>
//                       {imagesUrl.length > 0 ? (
//                         imagesUrl.map((image, i) => (
//                           <div className="image-container">
//                             <img src={image} alt="" />
//                             <div
//                               className="close-img-btn"
//                               onClick={() => removeImage(image)}
//                             >
//                               <IoMdClose />
//                             </div>
//                           </div>
//                         ))
//                       ) : (
//                         <div className="images">
//                           <div className="image"></div>
//                           <div className="image"></div>
//                           <div className="image"></div>
//                         </div>
//                       )}
//                     </ImagesContainer>
//                   </ImageList>
//                   <AddVariant type="submit">Add Variant</AddVariant>
//                 </form>
//               </DialogContent>
//               <DialogActions></DialogActions>
//             </Dialog>
//           </Card>
//         </Left>
//         <Right>
//           <SubCard>
//             <h2>Product status</h2>
//             <SubField>
//               <label>Status</label>
//               <div className="radio-group">
//                 <div className="radio-field">
//                   <input type="radio" />
//                   <span>Disabled</span>
//                 </div>
//                 <div className="radio-field">
//                   <input type="radio" />
//                   <span>Enabled</span>
//                 </div>
//               </div>
//             </SubField>
//             <SubField>
//               <label>Visibility</label>
//               <div className="radio-group">
//                 <div className="radio-field">
//                   <input type="radio" />
//                   <span>Not visible</span>
//                 </div>
//                 <div className="radio-field">
//                   <input type="radio" />
//                   <span>Visible</span>
//                 </div>
//               </div>
//             </SubField>
//             <SubField>
//               <label>Category</label>
//               <div>
//                 <div className="select-container">
//                   <select className="select-box">
//                     <option value disabled>
//                       Please select a category
//                     </option>
//                     {categories.map((category) => (
//                       <option value={category.category_name}>
//                         {category.category_name}
//                       </option>
//                     ))}
//                   </select>
//                   <div className="icon-container">
//                     <svg
//                       viewBox="0 0 20 20"
//                       width="1rem"
//                       height="1.25rem"
//                       focusable="false"
//                       aria-hidden="true"
//                     >
//                       <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </SubField>
//             <SubField>
//               <FormGroup>
//                 <label>Quantity</label>
//                 <input type="text" />
//               </FormGroup>
//             </SubField>
//           </SubCard>
//           <SubCard>
//             <h2>Attributes</h2>
//             <AttributeGroup>
//               <label>Size</label>
//               <div className="select-container">
//                 <select className="select-box">
//                   <option value="" disabled>
//                     Select size
//                   </option>
//                   {sizes.map((size, i) => (
//                     <option value={size}>{size}</option>
//                   ))}
//                 </select>
//                 <div className="icon-container">
//                   <svg
//                     viewBox="0 0 20 20"
//                     width="1rem"
//                     height="1.25rem"
//                     focusable="false"
//                     aria-hidden="true"
//                   >
//                     <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
//                   </svg>
//                 </div>
//               </div>
//             </AttributeGroup>
//             <AttributeGroup>
//               <label>Color</label>
//               <div className="select-container">
//                 <select className="select-box">
//                   <option value="" disabled>
//                     Select color
//                   </option>
//                   {colors.map((color, i) => (
//                     <option value={color}>{color}</option>
//                   ))}
//                 </select>
//                 <div className="icon-container">
//                   <svg
//                     viewBox="0 0 20 20"
//                     width="1rem"
//                     height="1.25rem"
//                     focusable="false"
//                     aria-hidden="true"
//                   >
//                     <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
//                   </svg>
//                 </div>
//               </div>
//             </AttributeGroup>
//             <AttributeGroup>
//               <label>Brand</label>
//               <div className="select-container">
//                 <select className="select-box">
//                   <option value disabled>
//                     Select brand
//                   </option>
//                   {brands.map((brand, i) => (
//                     <option value={brand}>{brand}</option>
//                   ))}
//                 </select>
//                 <div className="icon-container">
//                   <svg
//                     viewBox="0 0 20 20"
//                     width="1rem"
//                     height="1.25rem"
//                     focusable="false"
//                     aria-hidden="true"
//                   >
//                     <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
//                   </svg>
//                 </div>
//               </div>
//             </AttributeGroup>
//           </SubCard>
//         </Right>
//       </section>
//       <SubmitContainer>
//         <button>Cancel</button>
//         <button>Save</button>
//       </SubmitContainer>
//     </Container>
//   );
// };

// export default EditProduct;

// const Container = styled.div`
//   margin-left: 16rem;
//   padding: 2rem 4rem;

//   section {
//     display: grid;
//     grid-template-columns: 2fr 1fr;
//     gap: 10px 30px;
//   }
// `;

// const Title = styled.div`
//   h2 {
//     font-weight: 500;
//     line-height: 40px;
//     margin-bottom: 10px;
//     font-size: 20px;
//   }
// `;

// const Card = styled.div`
//   background-color: #fff;
//   border-radius: 6px;
//   min-height: 40vh;
//   padding: 1rem;
//   margin-bottom: 16px;

//   h2 {
//     font-size: 1rem;
//     font-weight: 600;
//     margin-bottom: 1.4rem;
//   }

//   .add-variant {
//     border: none;
//     outline: none;
//     background: transparent;
//     border-radius: 5px;
//     cursor: pointer;
//     padding: 0.5rem;
//     font-weight: 600;
//     font-size: 14px;
//     letter-spacing: 1px;
//     background-color: #008060;
//     color: #fff;
//     border: 2px solid #008060;
//     margin-top: 12px;
//   }
// `;

// const Left = styled.div``;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;

//   label {
//     margin-bottom: 6px;
//   }

//   input,
//   textarea {
//     padding: 0.5rem 1.2rem;
//     width: 100%;
//     position: relative;
//     z-index: 10;
//     border: 1px solid var(--divider);
//     outline: none;
//     margin: 1px;
//     border-radius: 4px;
//   }
// `;

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
//   gap: 20px;
//   margin: 10px 0;
//   clear: left;

//   div {
//     display: flex;
//     flex-direction: column;

//     label {
//       margin-bottom: 6px;
//     }

//     input {
//       padding: 0.5rem 1.2rem;
//       width: 100%;
//       position: relative;
//       z-index: 10;
//       border: 1px solid var(--divider);
//       outline: none;
//       margin: 1px;
//       border-radius: 4px;
//     }
//   }
// `;

// const ImageList = styled.div`
//   grid-template-columns: repeat(4, 1fr);
//   display: grid;
//   grid-gap: 8px;
//   grid-auto-rows: 1fr;

//   .uploader {
//     grid-column: 1 / span 2;
//     max-width: 100%;
//     position: relative;
//     padding: 5px;
//     box-sizing: border-box;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 2px dashed #e1e1e1;
//     background: #fff;
//     min-height: 40vh;
//     max-height: 50vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     .upload-icon {
//       cursor: pointer;

//       svg {
//         height: 30px;
//         width: 30px;
//         color: #438c8c;
//       }
//     }
//   }

//   .images {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 8px;
//     grid-auto-rows: 1fr;

//     .image {
//       border: 2px dashed #e1e1e1;
//       background: #fff;
//       padding: 5px;
//       box-sizing: border-box;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//   }
// `;

// const Right = styled.div``;

// const SubCard = styled.div`
//   background-color: #fafbfb;
//   border-radius: 6px;
//   min-height: 40vh;
//   padding: 1rem;
//   margin-bottom: 1.5rem;

//   &:last-child {
//     background-color: #fff;
//   }

//   h2 {
//     font-size: 1rem;
//     font-weight: 600;
//   }
// `;

// const SubField = styled.div`
//   border-bottom: 1px solid var(--divider);
//   padding: 10px 0;

//   &:last-child {
//     border-bottom: none;
//   }

//   label {
//     line-height: 40px;
//     font-size: 16px;
//   }

//   .radio-group {
//     .radio-field {
//       display: flex;
//       align-items: center;
//       height: 30px;
//       margin-bottom: 4px;
//       span {
//         display: block;
//       }

//       input {
//         margin-right: 6px;
//       }
//     }
//   }

//   div {
//     .select-container {
//       min-width: 250px;
//       position: relative;
//       margin-top: 8px;
//       display: flex;
//       align-items: baseline;

//       .select-box {
//         border: 1px solid rgb(220, 220, 220);
//         border-radius: 4px;
//         padding: 0.5em;
//         width: 100%;
//         font-size: 1rem;
//         /* background-color: #4d5061; */
//         -webkit-appearance: none;
//         appearance: none;
//         outline: none;
//       }
//     }

//     .icon-container {
//       width: 50px;
//       height: 100%;
//       position: absolute;
//       top: 0;
//       right: 0;
//       z-index: 100;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 30px;
//       pointer-events: none;
//     }
//   }
// `;

// const AttributeGroup = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 12px 0;
//   position: relative;
//   border-bottom: 1px solid var(--divider);
//   margin-bottom: 6px;

//   &:last-child {
//     border-bottom: none;
//   }

//   label {
//     flex: 1;
//   }

//   .select-container {
//     flex: 3;

//     select {
//       border: 1px solid rgb(220, 220, 220);
//       border-radius: 4px;
//       padding: 0.5em;
//       width: 100%;
//       font-size: 1rem;
//       /* background-color: #4d5061; */
//       -webkit-appearance: none;
//       appearance: none;
//       outline: none;
//     }

//     .icon-container {
//       width: 50px;
//       height: 100%;
//       position: absolute;
//       top: 0;
//       right: 0;
//       z-index: 100;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 30px;
//       pointer-events: none;
//     }
//   }
// `;

// const SubmitContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 18px 0;
//   border-top: 1px solid var(--divider);

//   button {
//     border: none;
//     outline: none;
//     color: #d72c0d;
//     border: 2px solid #d72c0d;
//     background: transparent;
//     border-radius: 5px;
//     cursor: pointer;
//     padding: 0.7rem 1.6rem;
//     font-weight: 600;
//     font-size: 15px;
//     letter-spacing: 1px;

//     &:last-child {
//       background-color: #008060;
//       color: #fff;
//       border: 2px solid #008060;
//     }
//   }
// `;

// const ImageContainer = styled.div`
//   /* width: 4.4rem;
//   height: 4.4rem; */
//   display: flex;
//   justify-content: center;
//   /* border: 1px solid var(--divider); */
//   border-radius: 3px;
//   position: relative;

//   img {
//     max-width: 100%;
//     height: auto;
//   }
// `;

// const TableBox = styled.div`
//   max-width: 600px;
// `;

// const AddVariant = styled.button`
//   border: none;
//   outline: none;
//   background: transparent;
//   border-radius: 5px;
//   cursor: pointer;
//   padding: 0.5rem;
//   font-weight: 600;
//   font-size: 14px;
//   letter-spacing: 1px;
//   background-color: #008060;
//   color: #fff;
//   border: 2px solid #008060;
//   margin-top: 12px;
// `;

// const EditAttributeGroup = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 12px 0;
//   position: relative;
//   margin-bottom: 6px;
//   margin-right: 20px;
//   float: left;

//   &:last-child {
//     border-bottom: none;
//     float: right;
//   }

//   label {
//     margin-right: 4px;
//   }

//   .select-container {
//     position: relative;
//     select {
//       border: 1px solid rgb(220, 220, 220);
//       border-radius: 4px;
//       padding: 0.5em;
//       width: 100%;
//       font-size: 1rem;
//       /* background-color: #4d5061; */
//       -webkit-appearance: none;
//       appearance: none;
//       outline: none;
//     }

//     .icon-container {
//       width: 50px;
//       height: 100%;
//       position: absolute;
//       top: 0;
//       right: 0;
//       z-index: 100;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       font-size: 30px;
//       pointer-events: none;
//     }
//   }
// `;

// const ImagesContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-column: 3 / span 4;
//   width: 100%;
//   margin: 0 auto;
//   padding: 6px;

//   .image-container,
//   .images {
//     position: relative;
//     width: 100%;

//     img {
//       width: 100%;
//       object-fit: contain;
//     }

//     .close-img-btn {
//       position: absolute;
//       top: 4px;
//       right: 4px;
//       cursor: pointer;
//       background: #ff6d60;
//       color: #fff;
//       padding: 6px;
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//   }
// `;
