import axios from 'axios';
import actionTypes from '../constants';
import articlesCommonAction from './articlesCommonAction';

const { success, failure } = articlesCommonAction;
const url = '/articles/popular';
const {
  UPDATE_POPULAR_SUCCESS,
  UPDATE_POPULAR_FAILURE
} = actionTypes;

const updatePopularArticles = () => dispatch => axios
  .get(url)
  .then(res => dispatch(success(UPDATE_POPULAR_SUCCESS, res.data.data.articles)))
  .catch(() => dispatch(failure(UPDATE_POPULAR_FAILURE)));

export default updatePopularArticles;
