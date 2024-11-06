import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsCreate } from "../features/productsSlice";
import { url } from "../features/api";

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [hasBrand, setHasBrand] = useState(false);
  const [tempBrand, setTempBrand] = useState({});
  const [hasCategory, setHasCategory] = useState(false);
  const [tempCategory, setTempCategory] = useState({});
  const [gender, setGender] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get(`${url}/categories`);
    setCategories(res.data);
  };

  const fetchBrands = async () => {
    const res = await axios.get(`${url}/brands`);
    setBrands(res.data);
  };

  // const handleImages = (e) => {
  //   const files = Array.from(e.target.files);
  //   files.forEach((file) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       setImages((oldArray) => [...oldArray, reader.result]);
  //     };
  //   });
  // };

  const removeImage = (image) => {
    setImagesUrl(imagesUrl.filter((img) => img !== image));
  };

  const handleBrand = () => {
    setHasBrand((prevState) => !prevState);
  };

  const addBrand = (brand) => {
    handleBrand();
    setTempBrand(brand);
  };

  const handleCategory = () => {
    setHasCategory((prevState) => !prevState);
  };

  const addCategory = (category) => {
    handleCategory();
    setTempCategory(category);
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
        setImagesUrl((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        product_name: name,
        description,
        images,
        brand_id: tempBrand.id,
        category_id: tempCategory.id,
      })
    );

    setName("");
    setDescription("");
    setImages([]);
    setTempBrand({});
    setTempCategory({});
    // try {
    //   const res = await axios.post(`${url}/products`, {
    //     product_name: name,
    //     description,
    //     images,
    //     brand_id: tempBrand.id,
    //     category_id: tempCategory.id,
    //   });
    //   return res.data;
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const onOptionChange = (e) => {
    setGender(e.target.value);
  };

  const handleTags = () => {
    setTags((oldArray) => [...oldArray, tag]);
    setTag("");
  };

  const saveTag = (e) => {
    setTag(e.target.value);
  };

  const removeTag = (tag) => {
    setTags(tags.filter((s) => s !== tag));
  };

  return (
    <Container>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product Title</label>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Product Description</label>
            <textarea
              cols="50"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="images">Select Images</label>
            <input
              onChange={handleImages}
              type="file"
              accept="image/*"
              name="images"
              multiple
            />
          </div>
          <FormGroup>
            <h4>Gender</h4>
            <div className="radios">
              <div className="radio-group">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={onOptionChange}
                />
                <label for="html">Male</label>
              </div>
              <div className="radio-group">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={onOptionChange}
                />
                <label for="html">Female</label>
              </div>
            </div>
          </FormGroup>
          {hasBrand ? (
            <SelectedBrand>
              <h4>Brand: </h4>
              <div>
                <span>{tempBrand.name}</span>
                <button onClick={handleBrand}>Remove</button>
              </div>
            </SelectedBrand>
          ) : (
            <>
              <Titles>
                <h4>Brand</h4>
              </Titles>
              <TableContainer>
                <table>
                  {brands.map((brand, i) => (
                    <tr key={i}>
                      <td>{brand.brand_name}</td>
                      <td>
                        <button onClick={() => addBrand(brand)}>Add</button>
                      </td>
                    </tr>
                  ))}
                </table>
              </TableContainer>
            </>
          )}
          {hasCategory ? (
            <SelectedBrand>
              <h4>Category: </h4>
              <div>
                <span>{tempCategory.name}</span>
                <button onClick={handleCategory}>Remove</button>
              </div>
            </SelectedBrand>
          ) : (
            <>
              <Titles>
                <h4>Category</h4>
              </Titles>
              <TableContainer>
                <table>
                  {categories.map((category, i) => (
                    <tr key={i}>
                      <td>{category.category_name}</td>
                      <td>
                        <button onClick={() => addCategory(category)}>
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </TableContainer>
            </>
          )}
          <TagContainer>
            <div className="tag-input-container">
              <div className="tag-input">
                <label htmlFor="tag">Tags</label>
                <input type="text" name="tag" value={tag} onChange={saveTag} />
              </div>
            </div>
            <button onClick={handleTags}>Add tag</button>
            <Tags>
              {tags.length > 0 &&
                tags.map((tag) => (
                  <div className="tags-display">
                    <span>{tag}</span>
                    <div
                      className="close-tag-btn"
                      onClick={() => removeTag(tag)}
                    >
                      <IoMdClose />
                    </div>
                  </div>
                ))}
            </Tags>
          </TagContainer>
          <div className="form-group">
            <label>Product Color</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input type="text" />
          </div>
          <AddProductBtn>Add Product</AddProductBtn>
        </form>
        <ImageContainer>
          {imagesUrl.length > 0 ? (
            imagesUrl.map((image, index) => (
              <div className="image-container">
                <img src={image} alt="" />
                <div
                  className="close-img-btn"
                  onClick={() => removeImage(image)}
                >
                  <IoMdClose />
                </div>
              </div>
            ))
          ) : (
            <p>Image previews will appear here..</p>
          )}
        </ImageContainer>
      </section>
    </Container>
  );
};

export default AddProduct;

const Container = styled.div`
  min-height: 100vh;
  margin-top: 60px;
  padding: 1rem 0;

  section {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;

    form {
      .form-group {
        display: flex;
        flex-direction: column;

        label {
          margin: 10px 0;
          font-weight: 500;
        }

        input[type="text"] {
          height: 40px;
          outline: none;
          border: 1px solid rgb(220, 220, 220);
          border-radius: 5px;
          padding: 4px 6px;
        }

        input[type="file"] {
          height: 40px;
          outline: none;
          padding: 4px 6px;
        }

        textarea {
          border: 1px solid rgb(220, 220, 220);
          outline: none;
          padding: 4px 6px;
          border-radius: 5px;
        }
      }
    }
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid rgb(220, 220, 220); */
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 50vh;
  margin: 0 auto;
  margin-left: 100px;
  padding: 6px;

  p {
    grid-column: 1/3;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(220, 220, 220);
    height: 300px;
    width: 100%;
    letter-spacing: 1px;
    font-size: 18px;
  }

  .image-container {
    position: relative;
    margin: 6px;

    img {
      width: 100%;
      object-fit: contain;
    }

    .close-img-btn {
      position: absolute;
      top: 4px;
      right: 4px;
      cursor: pointer;
      background: #ff6d60;
      color: #fff;
      padding: 6px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Titles = styled.div`
  display: grid;
  border: 1px solid rgb(220, 220, 220);
  border-bottom: none;
  padding: 4px;
  margin-top: 30px;

  h4 {
    text-align: center;
  }
`;

const TableContainer = styled.div`
  height: auto;
  max-height: 200px;
  overflow-y: scroll;

  table,
  th,
  td {
    border: 1px solid rgb(220, 220, 220);
  }

  td {
    border: none;
    border-bottom: 1px solid rgb(220, 220, 220);
  }

  table {
    border-collapse: collapse;
    width: 100%;
    height: 100%;
  }

  td,
  th {
    text-align: left;
    padding: 8px;
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr;

    td {
      button {
        background-color: #088395;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 6px 12px;
        border-radius: 3px;
      }
    }
  }

  tr:nth-child(even) {
  }
`;

const SelectedBrand = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 6px 0;

  h4 {
    flex: 1;
  }

  span {
    margin-right: 10px;
  }

  div {
    button {
      background-color: #ce5959;
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 6px 12px;
      border-radius: 3px;
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  margin: 10px 0;

  h4 {
    flex: 1;
  }

  .radios {
    flex: 2;
    display: flex;
  }

  .radio-group {
    margin-right: 10px;

    input {
      margin-right: 4px;
    }
  }
`;

const TagContainer = styled.div`
  margin: 20px 0 10px 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-right: 10px;
    font-weight: 500;
  }

  input {
    height: 40px;
    outline: none;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
    padding: 4px 6px;
  }

  button {
    width: 130px;
    border: none;
    outline: none;
    padding: 6px;
    margin-top: 6px;
    cursor: pointer;
    background-color: #088395;
    color: #fff;
    border-radius: 3px;
    font-size: 16px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 6px;

  .tags-display {
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 3px;
    padding: 10px 16px;
    font-size: 16px;
    margin: 8px;
    cursor: pointer;
    position: relative;

    span {
      margin-right: 6px;
    }

    .close-tag-btn {
      position: absolute;
      top: 2px;
      right: 2px;
      color: #767676;
    }
  }
`;

const AddProductBtn = styled.button`
  width: 100%;
  height: 40px;
  padding: 6px 12px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: var(--orange);
  color: #fff;
  border-radius: 5px;
  margin: 18px 0;
  letter-spacing: 1.15px;
`;
