import axios from 'axios'
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL,
  POST_COMMENT_CREATE_REQUEST,
  POST_COMMENT_CREATE_SUCCESS,
  POST_COMMENT_CREATE_FAIL,
  POST_COMMENT_DELETE_REQUEST,
  POST_COMMENT_DELETE_SUCCESS,
  POST_COMMENT_DELETE_FAIL
} from '../constants/postConstants'

export const listPosts = (pageSize = '', pageNumber = '') => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST })
    const {data} = await axios.get(`/posts?pageSize=${pageSize}&pageNumber=${pageNumber}`)
    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({ 
      type: POST_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST })
    const {data} = await axios.get(`/posts/${id}`)
    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({ 
      type: POST_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST
    })
    const {
      userLogin: {userInfo}
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    await axios.delete(`/posts/${id}`, config)
    dispatch({
      type: POST_DELETE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createProduct = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST
    })
    const {
      userLogin: {userInfo}
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.post(`/posts`, {post}, config)
    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const updateProduct = (post) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UPDATE_REQUEST
    })
    const {
      userLogin: {userInfo}
    } = getState()
    const config = {
      headers: {
        'Cotent-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.put(`/posts/${post._id}`, post, config)
    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: POST_UPDATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const createComment = (comment, post_id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_COMMENT_CREATE_REQUEST
    })
    const {
      userLogin: {userInfo}
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    const {data} = await axios.post(`/posts/${post_id}/comments`, {comment}, config)
    dispatch({
      type: POST_COMMENT_CREATE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: POST_COMMENT_CREATE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const deleteComment = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_COMMENT_DELETE_REQUEST
    })
    const {
      userLogin: {userInfo}
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }
    await axios.delete(`/posts/comments/${id}`, config)
    dispatch({
      type: POST_COMMENT_DELETE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: POST_COMMENT_DELETE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}