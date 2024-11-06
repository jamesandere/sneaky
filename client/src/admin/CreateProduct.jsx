import styled from "styled-components";
import { HiCamera } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { productsCreate } from "../features/productsSlice";
import axios from "axios";
import { url } from "../features/api";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [colorText, setColorText] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [colors, setColors] = useState([]);
  const modalRef = useRef();

  console.log(colors);
  console.log(selectedColor);

  window.onclick = function (event) {
    if (event.target === modalRef) {
      modalRef.style.display = "none";
    }
  };

  const categories = [
    {
      id: 1,
      category_name: "Clothing",
    },
    {
      id: 2,
      category_name: "Shoes",
    },
    {
      id: 3,
      category_name: "Jewellery",
    },
  ];

  const sizes = ["XL", "S", "M"];

  // const colors = ["Blue", "Red", "Black", "Blue", "Red", "Black"];

  const brands = ["Nike", "Adidas", "Ralph Lauren"];

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

  const removeImage = (image) => {
    setImages(images.filter((img) => img !== image));
    setImagesUrl(imagesUrl.filter((img) => img !== image));
  };

  const removeColor = () => {
    setSelectedColor(null);
  };

  const addColor = (color) => {
    setSelectedColor(color);
    setColorText("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      productsCreate({
        product_name: name,
        description: desc,
        price,
        brand_id: 1,
        category_id: 1,
        color_id: 1,
        images,
      })
    );

    setName("");
    setDesc("");
    setImages([]);
    setImagesUrl([]);
  };

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const res = await axios.get(`${url}/colors`);
        setColors(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchColors();
  }, []);

  return (
    <Container>
      <Title>
        <h2>Create New Product</h2>
      </Title>
      <section>
        <Left>
          <form onSubmit={handleSubmit}>
            <Card>
              <h2>General</h2>
              <FormGroup>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
              </FormGroup>
              <FormGrid>
                <div>
                  <label>SKU</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Price</label>
                  <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label>Weight</label>
                  <input type="text" />
                </div>
              </FormGrid>
              <FormGroup>
                <label>Description</label>
                <textarea
                  cols="50"
                  rows="5"
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </FormGroup>
            </Card>
            <Card>
              <h2>Media</h2>
              <ImageList>
                <div className="uploader">
                  <label htmlFor="inputTag">
                    <div className="upload-icon">
                      <HiCamera />
                    </div>
                    <input
                      type="file"
                      id="inputTag"
                      accept="image/*"
                      multiple
                      onChange={handleImages}
                    />
                  </label>
                </div>
                <div className="images">
                  {images.length > 0 ? (
                    imagesUrl.map((img, i) => (
                      <div className="image no-bo">
                        <img src={img} alt="" />
                        <ImageBg></ImageBg>
                        <div
                          className="close-img-btn"
                          onClick={() => removeImage(img)}
                        >
                          <IoMdClose />
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="image-nobo"></div>
                      <div className="image-nobo"></div>
                      <div className="image-nobo"></div>
                    </>
                  )}
                </div>
              </ImageList>
            </Card>
            <SubmitContainer>
              <button>Cancel</button>
              <button onClick={handleSubmit}>Save</button>
            </SubmitContainer>
          </form>
        </Left>
        <Right>
          <SubCard>
            <h2>Product status</h2>
            <SubField>
              <label>Status</label>
              <div className="radio-group">
                <div className="radio-field">
                  <input type="radio" />
                  <span>Disabled</span>
                </div>
                <div className="radio-field">
                  <input type="radio" />
                  <span>Enabled</span>
                </div>
              </div>
            </SubField>
            <SubField>
              <label>Visibility</label>
              <div className="radio-group">
                <div className="radio-field">
                  <input type="radio" />
                  <span>Not visible</span>
                </div>
                <div className="radio-field">
                  <input type="radio" />
                  <span>Visible</span>
                </div>
              </div>
            </SubField>
            <SubField>
              <label>Category</label>
              <div>
                <div className="select-container">
                  <select className="select-box">
                    <option value disabled>
                      Please select a category
                    </option>
                    {categories.map((category) => (
                      <option value={category.category_name}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                  <div className="icon-container">
                    <svg
                      viewBox="0 0 20 20"
                      width="1rem"
                      height="1.25rem"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </SubField>
            <SubField>
              <FormGroup>
                <label>Color</label>
                {selectedColor ? (
                  <ItemDisplay>
                    <span>{selectedColor.color_name}</span>
                    <div onClick={removeColor}>
                      <IoMdClose />
                    </div>
                  </ItemDisplay>
                ) : (
                  <>
                    <div>
                      <input
                        type="text"
                        placeholder="Find color"
                        onChange={(e) => setColorText(e.target.value)}
                      />
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                        class="octicon octicon-search"
                      >
                        <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                      </svg>
                    </div>
                  </>
                )}
              </FormGroup>
              {colorText && (
                <ColorContainer ref={modalRef}>
                  <AddColor>
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-plus"
                    >
                      <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                    </svg>
                    <span>Add color</span>
                  </AddColor>
                  <ColorFormGroup>
                    <input type="text" />
                    <button>Add</button>
                  </ColorFormGroup>
                  <ColorSuggestions>
                    {colors?.map((c, i) => (
                      <ul key={i}>
                        <li onClick={() => addColor(c)}>{c.color_name}</li>
                      </ul>
                    ))}
                  </ColorSuggestions>
                </ColorContainer>
              )}
            </SubField>
            <SubField>
              <FormGroup>
                <label>Quantity</label>
                <input type="text" />
              </FormGroup>
            </SubField>
          </SubCard>
          <SubCard>
            <h2>Attributes</h2>
            <AttributeGroup>
              <label>Size</label>
              <div className="select-container">
                <select className="select-box">
                  <option value="" disabled>
                    Select size
                  </option>
                  {sizes.map((size, i) => (
                    <option value={size}>{size}</option>
                  ))}
                </select>
                <div className="icon-container">
                  <svg
                    viewBox="0 0 20 20"
                    width="1rem"
                    height="1.25rem"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
                  </svg>
                </div>
              </div>
            </AttributeGroup>
            <AttributeGroup>
              <label>Color</label>
              <div className="select-container">
                <select className="select-box">
                  <option value="" disabled>
                    Select color
                  </option>
                  {/* {colors.map((color, i) => (
                    <option value={color}>{color}</option>
                  ))} */}
                </select>
                <div className="icon-container">
                  <svg
                    viewBox="0 0 20 20"
                    width="1rem"
                    height="1.25rem"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
                  </svg>
                </div>
              </div>
            </AttributeGroup>
            <AttributeGroup>
              <label>Brand</label>
              <div className="select-container">
                <select className="select-box">
                  <option value disabled>
                    Select brand
                  </option>
                  {brands.map((brand, i) => (
                    <option value={brand}>{brand}</option>
                  ))}
                </select>
                <div className="icon-container">
                  <svg
                    viewBox="0 0 20 20"
                    width="1rem"
                    height="1.25rem"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
                  </svg>
                </div>
              </div>
            </AttributeGroup>
          </SubCard>
        </Right>
      </section>
      <SubmitContainer>
        <button>Cancel</button>
        <button>Save</button>
      </SubmitContainer>
    </Container>
  );
};

export default CreateProduct;

const Container = styled.div`
  margin-left: 16rem;
  padding: 2rem 4rem;

  section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 10px 30px;
  }
`;

const Title = styled.div`
  h2 {
    font-weight: 500;
    line-height: 40px;
    margin-bottom: 10px;
    font-size: 20px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 6px;
  min-height: 40vh;
  padding: 1rem;
  margin-bottom: 16px;

  h2 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.4rem;
  }
`;

const Left = styled.div``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 6px;
  }

  input,
  textarea {
    padding: 0.5rem 1.2rem;
    width: 100%;
    position: relative;
    border: 1px solid var(--divider);
    outline: none;
    margin: 1px;
    border-radius: 4px;
  }

  div {
    position: relative;

    input {
      text-indent: 14px;
    }

    svg {
      position: absolute;
      top: 8px;
      left: 8px;
    }
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 10px 0;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 6px;
    }

    input {
      padding: 0.5rem 1.2rem;
      width: 100%;
      position: relative;
      border: 1px solid var(--divider);
      outline: none;
      margin: 1px;
      border-radius: 4px;
    }
  }
`;

const ImageList = styled.div`
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  grid-gap: 8px;
  grid-auto-rows: 1fr;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 20px;
  height: 50vh;
  position: relative;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #edeeef;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #058c8c;
    outline: 1px solid #058c8c;
    border-radius: 2px;
  }

  .uploader {
    grid-column: 1 / span 2;
    max-width: 100%;
    position: relative;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #e1e1e1;
    background: #fff;
    min-height: 40vh;
    max-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    left: 0;
    top: 0;

    input[type="file"] {
      display: none;
    }

    .upload-icon {
      cursor: pointer;

      svg {
        height: 30px;
        width: 30px;
        color: #438c8c;
      }
    }
  }

  .images {
    grid-column: 3 / span 4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    grid-auto-rows: 1fr;

    .image-nobo {
      border: 2px dashed #e1e1e1;
      background: #fff;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .image {
      background: #fff;
      padding: 5px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      max-height: 150px;
      border-radius: 4px;

      .close-img-btn {
        position: absolute;
        top: 2px;
        right: 2px;
        cursor: pointer;
        background: hsla(0, 0%, 100%, 0.8);
        color: #d01345;
        padding: 4px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
`;

const Right = styled.div``;

const SubCard = styled.div`
  background-color: #fafbfb;
  border-radius: 6px;
  min-height: 40vh;
  padding: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    background-color: #fff;
  }

  h2 {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const SubField = styled.div`
  border-bottom: 1px solid var(--divider);
  padding: 10px 0;

  &:last-child {
    border-bottom: none;
  }

  label {
    line-height: 40px;
    font-size: 16px;
  }

  .radio-group {
    .radio-field {
      display: flex;
      align-items: center;
      height: 30px;
      margin-bottom: 4px;
      span {
        display: block;
      }

      input {
        margin-right: 6px;
      }
    }
  }

  div {
    .select-container {
      min-width: 250px;
      position: relative;
      margin-top: 8px;
      display: flex;
      align-items: baseline;

      .select-box {
        border: 1px solid rgb(220, 220, 220);
        border-radius: 4px;
        padding: 0.5em;
        width: 100%;
        font-size: 1rem;
        /* background-color: #4d5061; */
        -webkit-appearance: none;
        appearance: none;
        outline: none;
      }
    }

    .icon-container {
      width: 50px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      pointer-events: none;
    }
  }
`;

const AttributeGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  position: relative;
  border-bottom: 1px solid var(--divider);
  margin-bottom: 6px;

  &:last-child {
    border-bottom: none;
  }

  label {
    flex: 1;
  }

  .select-container {
    flex: 3;

    select {
      border: 1px solid rgb(220, 220, 220);
      border-radius: 4px;
      padding: 0.5em;
      width: 100%;
      font-size: 1rem;
      /* background-color: #4d5061; */
      -webkit-appearance: none;
      appearance: none;
      outline: none;
    }

    .icon-container {
      width: 50px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      pointer-events: none;
    }
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  border-top: 1px solid var(--divider);

  button {
    border: none;
    outline: none;
    color: #d72c0d;
    border: 2px solid #d72c0d;
    background: transparent;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.7rem 1.6rem;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 1px;

    &:last-child {
      background-color: #008060;
      color: #fff;
      border: 2px solid #008060;
    }
  }
`;

const ImageBg = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.05;
  background-color: rgb(0 0 0 / 1);
`;

const ColorContainer = styled.div`
  border: 1px solid rgb(220, 220, 220);
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
  font-size: 1rem;
  /* background-color: #4d5061; */
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  position: relative;
  background-color: yellow;

  overflow-y: scroll;
  overflow-x: hidden;
  height: 30vh;
  background-color: white;
  position: relative;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #edeeef;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #058c8c;
    outline: 1px solid #058c8c;
    border-radius: 2px;
  }
`;

const ColorSuggestions = styled.div`
  position: absolute;
  top: 14px;
  left: 0;
  z-index: 35;
  width: 100%;
  max-height: 80vh;
  padding: 12px 0;
  border-radius: var(--borderRadius-large, 12px);
  overflow-wrap: break-word;
  margin-top: 20px;

  ul {
    list-style-type: none;
    li {
      padding: 6px 8px;
      margin: 0 8px;
      border-radius: 0.375rem;
      font-size: 15px;
      cursor: pointer;

      &:hover {
        background-color: rgba(208, 215, 222, 0.48);
      }
    }
  }
`;

const ItemDisplay = styled.div`
  border: 1px solid rgba(230, 230, 230, 1);
  border-radius: 3px;
  padding: 10px 16px;
  font-size: 16px;
  position: relative;
  width: 100px;
  max-width: 200px;
  cursor: pointer;

  span {
    margin-right: 6px;
  }

  div {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #767676;
  }
`;

const AddColor = styled.div`
  display: flex;
  align-items: center;
  color: #afb8c1;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px 12px;

  &:hover {
    background-color: #edeeef;
  }

  span {
    margin-left: 10px;
    cursor: pointer;
    /* text-decoration: underline;
    text-underline-offset: 2px; */
  }
`;

const ColorFormGroup = styled.div`
  display: flex;
  position: relative;

  label {
    margin-bottom: 6px;
  }

  input {
    padding: 0.5rem 1.2rem;
    width: 100%;
    position: relative;
    border: 1px solid var(--divider);
    outline: none;
    margin: 1px;
    border-radius: 4px;
  }

  div {
    position: relative;

    input {
      text-indent: 14px;
    }

    svg {
      position: absolute;
      top: 8px;
      left: 8px;
    }
  }
`;
