import { Link } from "react-router-dom";
import styled from "styled-components";

const Summary = () => {
  return (
    <Container>
      <InnerContainer>
        <h4>Dashboard</h4>
        <Card>
          <Title>
            <h4>Best sellers</h4>
            <Link to={`/products`}>
              <span>All Products</span>
            </Link>
          </Title>
          <div className="product-items">
            <div className="thumbnail">
              <img
                src="https://demo.evershop.io/assets/catalog/5836/2308/plv3169-Blue-thumb.png"
                alt=""
              />
            </div>
            <Link to={`/product/1`}>
              <span>Alphaedge 4d reflective shoes R</span>
            </Link>
            <span>$134.00</span>
            <span>10 items sold</span>
          </div>
          <div className="product-items">
            <div className="thumbnail">
              <img
                src="https://demo.evershop.io/assets/catalog/5836/2308/plv3169-Blue-thumb.png"
                alt=""
              />
            </div>
            <Link to={`/product/1`}>
              <span>Alphaedge 4d reflective shoes R</span>
            </Link>
            <span>$134.00</span>
            <span>10 items sold</span>
          </div>
        </Card>
      </InnerContainer>
      <Card>
        <h4>All Time Sales</h4>
      </Card>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  margin-left: 16rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 0.5em;
`;

const InnerContainer = styled.div`
  padding: 0.5em;

  h4 {
    margin-bottom: 10px;
    line-height: 40px;
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 6px;
  min-height: 40vh;
  padding: 1rem;

  .product-items {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    align-items: center;
    border-bottom: 1px solid var(--divider);
    padding: 1rem 0;

    &:last-child {
      border-bottom: none;
    }

    a {
      color: inherit;
      font-weight: 600;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .thumbnail {
      width: 4.4rem;
      height: 4.4rem;
      display: flex;
      justify-content: center;
      border: 1px solid var(--divider);
      border-radius: 3px;
      position: relative;

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0 0 0;
`;
