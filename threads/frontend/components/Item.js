import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

const Item = ({ item }) => {
  return (
    <ItemStyles>
      {item.image && <img src={item.image} alt={item.title} />}
      <Title>
        {/* <Link href="/items/[title]" as={`/items/${item.title.toLowerCase()}`}>
          <a>{item.title}</a>
        </Link> */}
        <Link
          href={{
            pathname: "items",
            query: { id: item.id }
          }}
        >
          <a>{item.title}</a>
        </Link>
      </Title>
      <PriceTag>{formatMoney(item.price)}</PriceTag>
      <p>{item.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: "update",
            query: { id: item.id }
          }}
        >
          <a>Edit ✏️</a>
        </Link>
        <button>Add To Cart</button>
        <button>Delete</button>
      </div>
    </ItemStyles>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired
  }).isRequired
};

export default Item;
