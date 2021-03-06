import axios from 'axios';
import constants from '../constants';
import articlesCommonAction from './articlesCommonAction';

const { success, failure } = articlesCommonAction;
const url = '/authors/authors-of-the-week';
const {
  UPDATE_AUTHORS_SUCCESS,
  UPDATE_AUTHORS_FAILURE
} = constants;


const updateAuthors = () => dispatch => axios.get(url)
  .then(res => dispatch(success(UPDATE_AUTHORS_SUCCESS, res.data.data.authors)))
  .catch(() => dispatch(failure(UPDATE_AUTHORS_FAILURE)));

export default updateAuthors;
