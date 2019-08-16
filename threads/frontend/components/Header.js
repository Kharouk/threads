import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
const Header = () => {
  return (
    <div>
      <div className="bar">
        <h1>
          <Link href="/">
            <a>Threads</a>
          </Link>
        </h1>
        <Nav />
      </div>

      <div className="sub-bar">
        <p>Search</p>
      </div>

      <div>Cart</div>
    </div>
  );
};

export default Header;
