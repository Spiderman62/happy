import {createStore} from 'vuex';
import flowersModule from './modules/flowers/index.js';
export default createStore({
	modules:{
		flower:flowersModule
	}
})