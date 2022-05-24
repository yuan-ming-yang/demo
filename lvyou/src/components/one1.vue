<template>
	<div class="one1">
		<ul>
			<li v-for="yang in sites">
				<img :src="yang.img"/>
				<h3>{{yang.title1}}</h3>
				<div>
					<span>{{yang.title2}}</span>
					<span>{{yang.title3}}</span>
					<span>{{yang.title4}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"one1",
		data(){
			return{
				sites:[
					{"img":"../../static/img/shouye/98f1d37d928f051db5cf989ef6f08af.png",
					"title1":"[北京出发]凯撒亲子营-北京科举匾额博物馆探秘之旅1日游",
					"title2":"亲子",
					"title3":"游学",
					"title4":"探索"},
					{"img":"../../static/img/shouye/e38f10e548893b1c610c72e69883b4e.png",
					"title1":"[北京出发]奇趣呀路古-北京呀路古热带植物园奇幻之旅1日游",
					"title2":"凯撒自营",
					"title3":"精致小团",
					"title4":"亲子"}
				]
			}
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.one1 ul{
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.one1 ul li{
		width: 11rem;
		height: 14rem;
		/*border: 1px solid black;*/
		background-color: whitesmoke;
	}
	.one1 ul li img{
		width: 11rem;
	}
	.one1 ul li div{
		display: flex;
		justify-content: space-around;
	}
	.one1 ul li div span{
		display: inline-block;
		margin-top: 0.5rem;
	}
</style>