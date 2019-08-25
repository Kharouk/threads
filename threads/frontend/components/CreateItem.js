import { Component } from "react";
import { Mutation } from "react-apollo";
import Form from "./styles/Form";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";

class CreateItem extends Component {
  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            <h2>Ready to sell that item?</h2>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              required
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
