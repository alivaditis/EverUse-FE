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

const GET_SINGLE_ITEM = gql`
query GetItem ($name: String!) {
  product (name: $name) {
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

export { GET_ALL_ITEMS, SUBMIT_REQUEST, GET_SINGLE_ITEM }
  