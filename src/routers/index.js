import {createRouter,createWebHistory} from 'vue-router';
export default createRouter({
	history:createWebHistory(),
	routes:[
		{path:'/',redirect:'/happy'},
		{path:'/happy/',component:()=> import('../pages/TheInformation.vue')},
		{path:'/happy/flower',component:()=> import('../pages/TheFlower.vue')}
	]
})