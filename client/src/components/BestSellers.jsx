import styled from "styled-components";
import { bestSellers } from "../data";
import { Link } from "react-router-dom";

const BestSellers = () => {
  return (
    <Container>
      <div className="seller-title">
        <h2>Best sellers</h2>
        <Link to="/">View All</Link>
      </div>
      <Wrapper>
        {bestSellers.map((item, i) => (
          <Card>
            <Link to={`/product/1`}>
              <Image>
                <img src={item.url} alt={item.title} />
                <ImageBg></ImageBg>
              </Image>
              <Title>
                <h3>{item.title}</h3>
              </Title>
              <Price>
                <span>{item.price}</span>
                <span>{item.discountedPrice}</span>
              </Price>
            </Link>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default BestSellers;

const Container = styled.section`
  padding-bottom: 1.25rem;
  margin-bottom: 14px;

  .seller-title {
    display: flex;
    justify-content: space-between;
    padding: 20px 8px;

    h2 {
      letter-spacing: 0.025em;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 1.075rem;
      line-height: 1.25rem;
    }

    a {
      text-underline-offset: 2px;
      color: inherit;
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px 1px;
`;

const Card = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Image = styled.div`
  position: relative;
  height: 456px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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

const Title = styled.div`
  flex-grow: 1;
  padding: 0 8px;
  margin-top: 10px;

  h3 {
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 15px;
  }
`;

const Price = styled.div`
  display: flex;
  font-weight: 700;
  padding: 0 8px;
  font-size: 14px;

  span:first-child {
    text-decoration: line-through;
    margin-right: 4px;
  }

  span:last-child {
    color: rgb(185 28 28 / 1);
  }
`;
