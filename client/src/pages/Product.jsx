import styled from "styled-components";
import { shoe } from "../data";
import ReadMore from "../components/ReadMore";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../features/api";
import { useNavigate, useParams } from "react-router-dom";
import { formatCurrency } from "../helpers/formatCurrency";

const Product = () => {
  const [toggled, setToggled] = useState(false);
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  console.log(product);

  useEffect(() => {
    const fetProduct = async () => {
      try {
        const res = await axios.get(`${url}/products/${params.id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetProduct();
  }, []);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <Container>
      <First>
        <div>
          <h1>{product.product_name}</h1>
          <p className="prod-price">From {formatCurrency(product.price)}</p>
          <ReadMore>{product.description}</ReadMore>
        </div>
        <DetailsContainer>
          <button onClick={handleToggle}>
            <span>Product details</span>
            {toggled ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>
          <Details toggled={toggled}>
            <DetailItem>
              <span>Brand</span>
              <span>{product.brand?.brand_name}</span>
            </DetailItem>
            <DetailItem>
              <span>Category</span>
              <span>Lifestyle</span>
            </DetailItem>
            <DetailItem>
              <span>Main color</span>
              <span>{product?.color_name}</span>
            </DetailItem>
            <DetailItem>
              <span>Colorway</span>
              <span>White/Black/White</span>
            </DetailItem>
          </Details>
        </DetailsContainer>
        <SizeContainer>
          <h4>Choose your size:</h4>
          <Sizes>
            <SizeItem>US 5</SizeItem>
            <SizeItem>US 6</SizeItem>
            <SizeItem>US 7</SizeItem>
            <SizeItem>US 8</SizeItem>
            <SizeItem>US 9</SizeItem>
            <SizeItem>US 10</SizeItem>
            <SizeItem>US 11</SizeItem>
          </Sizes>
        </SizeContainer>
        <AddToCartBtn>Add to cart</AddToCartBtn>
      </First>
      <End>
        <Carousel>
          {product.images?.map((im, i) => (
            <Image>
              <img src={im.url} alt="" />
              <ImageBg></ImageBg>
            </Image>
          ))}
        </Carousel>
      </End>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const First = styled.div`
  padding-left: 7rem;
  padding-right: 7rem;
  padding-top: 2rem;
  flex: 1;

  div {
    h1 {
      font-size: 2.25rem;
      line-height: 2.5rem;
      margin: 1rem 0;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
      margin-bottom: 1rem;
    }

    .prod-price {
      font-weight: 500;
    }
  }
`;

const End = styled.div`
  flex: 1.4;
`;

const Carousel = styled.div`
  overflow: hidden;
  display: grid;
  gap: 1px;
`;

const Image = styled.div`
  position: relative;

  &:first-child {
    grid-column: span 2 / span 2;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
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

const DetailsContainer = styled.div`
  width: 100%;
  border: 1px solid rgb(0 0 0 / 1);
  margin-top: 2rem;

  button {
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    outline: none;
    border: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 0.5rem;
  row-gap: 1rem;
  padding: 0.5rem 1rem;
  border-top: 1px solid rgb(0 0 0 / 1);
  display: ${(props) => !props.toggled && "none"};
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  span:first-child {
    font-weight: 700;
  }
`;

const SizeContainer = styled.div`
  margin-top: 2rem;

  h4 {
    margin-bottom: 10px;
  }
`;

const Sizes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(0, 1fr);
`;

const SizeItem = styled.div`
  --tw-shadow: 0 0px 0px 1px rgba(0, 0, 0, 1);
  --tw-shadow-colored: 0 0px 0px 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  border: 1px solid rgb(0 0 0 / 1);
  height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  &:first-child {
    color: rgb(255 255 255 / 1);
    background-color: rgb(0 0 0 / 1);
  }
`;

const AddToCartBtn = styled.button`
  margin-top: 1.5rem;
  display: flex;
  height: 2.75rem;
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / 1);
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / 1);
  border: none;
  outline: none;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(163 163 163 / var(--tw-bg-opacity));
  }
`;
