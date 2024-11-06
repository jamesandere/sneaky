import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Cart = ({ isOpen, closeCart }) => {
  const navigate = useNavigate();

  return (
    <Container isOpen={isOpen}>
      <Title>
        <h3>Your cart (1)</h3>
        <div onClick={closeCart}>
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </Title>
      <Main>
        <CartItem>
          <Image>
            <img
              src="https://www.kickgame.com/cdn/shop/products/nike-dunk-low-light-smoke-grey-w-DD1503-117_1.png?v=1656324136&width=400"
              alt=""
            />
            <ImageBg></ImageBg>
          </Image>
          <Details>
            <h3>Nike Dunk Low Wmns 'Light Smoke Grey'</h3>
            <Size>UK 4 | EU 37.5 | US 6.5 x 1</Size>
            <Price>
              <span>€249.99</span>
              <span>€199.99</span>
            </Price>
            <button>
              <span>Remove</span>
            </button>
          </Details>
        </CartItem>
        <CartItem>
          <Image>
            <img
              src="https://www.kickgame.com/cdn/shop/products/nike-dunk-low-light-smoke-grey-w-DD1503-117_1.png?v=1656324136&width=400"
              alt=""
            />
            <ImageBg></ImageBg>
          </Image>
          <Details>
            <h3>Nike Dunk Low Wmns 'Light Smoke Grey'</h3>
            <Size>UK 4 | EU 37.5 | US 6.5 x 1</Size>
            <Price>
              <span>€249.99</span>
              <span>€199.99</span>
            </Price>
            <button>
              <span>Remove</span>
            </button>
          </Details>
        </CartItem>
      </Main>
      <Footer>
        <Total>
          <span>Total</span>
          <span>€319.99</span>
        </Total>
        <CheckoutBtn onClick={() => navigate("/checkout")}>
          Checkout
        </CheckoutBtn>
      </Footer>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-28rem")};
  height: 100vh;
  background-color: white;
  z-index: 5;
  width: 28rem;
  max-width: 100%;
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;

  div {
    svg {
      height: 24px;
      width: 24px;
      cursor: pointer;
    }
  }
`;

const Title = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));

  h3 {
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.75rem;
  }
`;

const Main = styled.div`
  overflow-y: scroll;
  flex: 1 1 0%;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CartItem = styled.div`
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  position: relative;
  --tw-border-opacity: 1;
  border-bottom: 1px solid;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
`;

const Image = styled.div`
  position: relative;
  margin-right: 8px;
  padding: 0.5rem;
  aspect-ratio: 4 / 5;
  height: auto;

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

const Details = styled.div`
  grid-column: span 3 / span 3;
  padding: 1rem 0.5rem;

  h3 {
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 70.333333%;
  }

  button {
    position: absolute;
    right: 1.7rem;
    bottom: 0.75rem;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    span {
      text-underline-offset: 2px;
      -webkit-text-decoration-line: underline;
      text-decoration-line: underline;
      --tw-text-opacity: 1;
      color: rgb(107 114 128 / var(--tw-text-opacity));
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`;

const Size = styled.div`
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 600;
  margin-top: 10px;
`;

const Price = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  margin-top: 10px;

  span:first-child {
    text-decoration: line-through;
    margin-right: 4px;
  }

  span:last-child {
    color: rgb(185 28 28 / 1);
  }
`;

const Footer = styled.div`
  border-top: 1px solid;
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
  width: 100%;
  padding: 1rem;
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const CheckoutBtn = styled.button`
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
