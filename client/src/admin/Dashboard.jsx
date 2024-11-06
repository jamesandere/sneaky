import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Container>
      <AdminNavigation>
        <h5>Quick Links</h5>
        <ItemGroup>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="/admin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="/admin/create-product"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
              <path
                fill-rule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            New Product
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="admin/coupon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clip-rule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            New Coupon
          </NavLink>
        </ItemGroup>
        <ItemGroup>
          <span>Catalog</span>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="/admin/products"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
              <path
                fill-rule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="admin/cats"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Categories
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="admin/coll"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Collections
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="admin/coll"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Attributes
          </NavLink>
        </ItemGroup>
        <ItemGroup>
          <span>Sale</span>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="admin/coll"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
            </svg>
            Orders
          </NavLink>
        </ItemGroup>
        <ItemGroup>
          <span>Customer</span>
          <NavLink
            className={({ isActive }) => isActive && "link-active"}
            to="admin/coll"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
            </svg>
            Customers
          </NavLink>
        </ItemGroup>
      </AdminNavigation>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  background-color: #f6f6f7;
  min-height: 100vh;
`;

const AdminNavigation = styled.div`
  width: 16rem;
  float: left;
  height: calc(100vh - 66px);
  border-right: 1px solid var(--divider);
  position: sticky;
  left: 0;
  top: 66px;
  padding: 0.5em 1em;
  padding-bottom: 15rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #edeeef;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #058c8c;
    outline: 1px solid #058c8c;
    border-radius: 2px;
  }

  h5 {
    height: 50px;
    display: flex;
    align-items: center;
    line-height: 35px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const ItemGroup = styled.div`
  margin-bottom: 10px;

  a {
    margin-top: 2px;
    display: flex;
    align-items: center;
    text-decoration: none;
    /* transition: all 0.2s ease-in-out; */
    line-height: 35px;
    font-weight: 600;
    font-size: 15px;
    color: #202223;
    padding: 3px 20px;

    &:hover {
      background-color: #edeeef;
    }

    svg {
      height: 20px;
      width: 20px;
      margin-right: 6px;
    }
  }

  .link-active {
    color: #008060;
    background-color: #edeeef;
    border-radius: 4px;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

const Content = styled.div`
  padding: 0 2rem;
`;
