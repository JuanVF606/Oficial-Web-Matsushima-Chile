import { combineReducers } from 'redux';
import categories from './categories';
import blog from './blog';
import dojos from './dojos';
import actividades from './actividades';
import gallery from './gallery';
export default combineReducers({
    categories,
    blog,
    dojos,
    gallery,
    actividades,
})