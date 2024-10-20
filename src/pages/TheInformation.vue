<template>
	<section>
		<div class="wrapper">
			<div class="wrapper-img">
				<img src="../../public/capybara.jpg" alt="">
			</div>
			<form @submit.prevent="confirm">
				<div class="input-box">
					<input type="text" ref="inputPrompt" @input="removeIsValid" placeholder="Nhập tên đầy đủ và nhấn enter nhé">
					<p class="message" v-if="name.isValid">Không được để trống nha</p>
				</div>
			</form>
		</div>
	</section>
</template>
<script setup>
import {reactive,ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
const store = useStore();
const router = useRouter();
const name = reactive({
	value:'',
	isValid:false
});
const inputPrompt = ref(null);
const removeIsValid = ()=>{
	name.isValid = false;
}
const confirm = ()=>{
	if(inputPrompt.value.value === ''){
		name.isValid = true;
		return;
	}
	name.value = inputPrompt.value.value;
	store.commit('flower/addYourName',name.value);	
	router.push('/happy/flower');
}
</script>
<style scoped>
section {
	background: #ee9ca7;
	background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);
	background: linear-gradient(to right, #ffdde1, #ee9ca7);
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.wrapper{
	padding: 20px;
	background-color: white;
	border-radius: 8px;
	width: 400px;
	box-shadow: 0 0 12px rgb(236, 236, 236);
}
.wrapper-img{
	width: 200px;
	height: 200px;
	margin: 0 auto 20px;
}
img{
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.input-box{
	width: 100%;
}
.input-box input{
	width: 100%;
	height: 40px;
	border: 1px solid #ee9ca7;
	background-color: #fef7f8;
	outline: none;
	border-radius: 4px;
	font-size: 1.8rem;
	padding: 0 15px 0 5px;
	color: #ee9ca7;
}
input::placeholder{
	color: #ee9ca7;
}
input[type="submit"]{
	width: 100%;
	margin-top: 25px;
	font-size: 1.8rem;
	height: 40px;
	border: 1px solid #ee9ca7;
	background-color: #ff9caa;
	cursor: pointer;
	color: #ffffff;
	border-radius: 4px;
}
.message{
	margin-top: 15px;
	font-size: 1.8rem;
	color: #ee9ca7;
	text-align: center;
}
</style>
