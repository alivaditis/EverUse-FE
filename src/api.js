// API CALLS //

import { gql } from '@apollo/client';
  
const GET_ALL_ITEMS = gql`
query GetAllItems {
  products {
      id
      name
      category
      image
      description
      color
      quantity
      size
      price
  }
}`

const SUBMIT_REQUEST = gql`
mutation CreateOrderForm ($input: CreateOrderFormInput!) {
  createOrderForm(input: $input) {
      message
  }
}`

  export { GET_ALL_ITEMS, SUBMIT_REQUEST }
  