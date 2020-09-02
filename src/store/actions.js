import axios from 'axios';

export const getProducts = ({commit}) => {
  axios.get('http://localhost:8000/api/products')
  .then(response => {
    commit('SET_PRODUCTS', response.data)
  })
}