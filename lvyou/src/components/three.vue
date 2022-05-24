<template>
	<div class="three">
		<div class="section1">
			<p><</p>
			<h2>{{aa}}</h2>
		</div>
		<div class="box">
			
		</div>
		<div class="box1">
			<input type="text" name="" id="" value="" />
			<button v-on:click="show">发送</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"three",
		data(){
			return{
				aa:"凯小霞"
			}
		},
		methods:{
			show(){
				let $inp=$("input").val()
				let $p=$(`<p></p>`)
				let $span=$(`<span></span>`)
				let $img=$(`<img/>`)
				$img.attr("src","../../static/img/1111.jpg")
				$p.html($inp)
				$span.append($img)
				$(".box").append($p)
				$(".box").append($span)
				$("input").val("")
			}
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.three .section1{
	width: 100%;
	height: 3rem;
	border: 1px solid black;
	line-height: 3rem;
}
.three .section1 p{
	font-size: 2rem;
}
.three .section1 h2{
	margin-left: 2rem;
	margin-top: -3rem;
}
	.three>.box{
		width: 100%;
		position: absolute;
		top: 3rem;
	}
	.three>.box>p{
		height: 3rem;
		border: 1px solid black;
		margin-left: 5rem;
		line-height: 3rem;
		margin-top: 1rem;
		border-radius: 5rem;
		padding-left: 2rem;
	}
	.three>.box>span{
		display: inline-block;
		width: 5rem;
		height: 5rem;
		/*border: 1px solid black;*/
		position: absolute;
		left: 0;
		top: 0;
	}
	.three>.box>span>img{
		width: 4rem;
		height: 4rem;
		border-radius: 5rem;
		margin-left: 0.5rem;
		margin-top: 0.5rem;
	}
	.three>.box1{
		width: 100%;
		height: 5rem;
		/*border: 1px solid black;*/
		position: absolute;
		top: 32rem;
	}
	.three>.box1>input{
		width: 15rem;
		height: 3rem;
		border: 1px solid black;
		margin-top: 1rem;
		margin-left: 2rem;
	}
	.three>.box1>button{
		width: 5rem;
		height: 3.3rem;
	}
</style>