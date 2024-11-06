import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Checkout = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Outlet />
        </Left>
        <Right>
          <RightWrapper>
            <SummaryItems>
              <Item>
                <Details>
                  <Image className="thumbnail">
                    <img
                      src="https://www.kickgame.com/cdn/shop/products/nike-dunk-low-light-smoke-grey-w-DD1503-117_1.png?v=1656324136&width=400"
                      alt=""
                    />
                    <ImageBg></ImageBg>
                    <span>1</span>
                  </Image>
                  <ProductColumn>
                    <p className="title">Nike Dunk Low Wmns 'Ocean'</p>
                    <p>UK 6 | EU 40 | US 7</p>
                    <p>
                      <span>Color: </span>
                      <span>blue</span>
                    </p>
                  </ProductColumn>
                </Details>
                <p className="price">$625.00</p>
              </Item>
              <Item>
                <Details>
                  <Image className="thumbnail">
                    <img
                      src="https://www.kickgame.com/cdn/shop/products/nike-dunk-low-light-smoke-grey-w-DD1503-117_1.png?v=1656324136&width=400"
                      alt=""
                    />
                    <ImageBg></ImageBg>
                    <span>1</span>
                  </Image>
                  <ProductColumn>
                    <p className="title">Nike Dunk Low Wmns 'Ocean'</p>
                    <p>UK 6 | EU 40 | US 7</p>
                    <p>
                      <span>Color: </span>
                      <span>blue</span>
                    </p>
                  </ProductColumn>
                </Details>
                <p className="price">$625.00</p>
              </Item>
            </SummaryItems>
            <SummaryTotal>
              <div className="row">
                <span>Subtotal</span>
                <span>2 items</span>
                <span>$1,035.00</span>
              </div>
              <div className="grand-total">
                <span>Total</span>
                <span>$1,065.00</span>
              </div>
            </SummaryTotal>
          </RightWrapper>
        </Right>
      </Main>
    </Container>
  );
};

export default Checkout;

const Container = styled.div``;

const Main = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: start;
  margin: 0 auto;
`;

const Left = styled.div`
  flex: 1.2;
  padding-left: 4rem;
  padding-right: 1rem;
`;

const Right = styled.div`
  flex: 1;
  min-height: calc(100vh - 66px);
  background-color: #fafafa;
  padding-top: 1.4rem;
  padding-bottom: 2rem;
  border-left: 1px solid var(--divider);
  position: sticky;
  top: 66px;
  padding-left: 2rem;
  padding-right: 4rem;
  /* min-height: calc(100vh - 50px); */
`;

const RightWrapper = styled.div`
  width: 30rem;
`;

const SummaryItems = styled.div``;

const Details = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--divider);
  padding: 1.4rem 0;
  min-height: 5rem;

  &:last-child {
    border-bottom: none;
  }

  .thumbnail {
    img {
      max-width: 100%;
      height: auto;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.4rem;
      height: 1.4rem;
      font-size: 0.8rem;
      position: absolute;
      top: -0.8rem;
      right: -0.8rem;
      background-color: #666;
      color: #f5f5f5;
      border-radius: 100%;
      text-align: center;
    }
  }
`;

const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    font-weight: 600;
    font-size: 1rem;
  }

  p:nth-child(2),
  p:nth-child(3) {
    color: #666;
    font-size: 0.9rem;
  }
`;

const SummaryTotal = styled.div`
  border-top: 1px solid var(--divider);
  padding-top: 1rem;

  .row {
    display: grid;
    margin-bottom: 1rem;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    span {
      &:last-child {
        text-align: right;
      }
    }
  }

  .grand-total {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    border-top: 1px solid var(--divider);
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;

const Image = styled.div`
  position: relative;
  padding: 0.5rem;
  border: 1px solid #d6d6d6;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  width: 4rem;
  height: 4rem;
  margin-right: 1.4rem;

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
