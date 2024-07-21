import { combineReducers } from 'redux';
import categories from '../redux/reducers/categories';
import blog from '../redux/reducers/blog';
import dojos from '../redux/reducers/dojos';
import actividades from '../redux/reducers/actividades';
import gallery from '../redux/reducers/gallery';
import relatedPostsReducer from './reducers/relatedPost.js';
export default combineReducers({
    categories,
    actividades,
    blog,
    dojos,
    gallery,
    relatedPosts : relatedPostsReducer,
})