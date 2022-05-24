<template>
  <div id="app">
    <router-view></router-view>
    <ul class="haha">
    	<li><router-link to="/"><img src="../static/img/shouye/651d6f7a8bb091b9f2dc06066b642ca.png"/><span>首页</span></router-link></li>
    	<li><router-link to="/two"><img src="../static/img/shouye/7018d16af59dba17fb4b71a9270613d.png"/><span>目的地</span></router-link></li>
    	<li><router-link to="/three"><img src="../static/img/shouye/9d75da6311c76d571d61b2f05fe454f.png"/><span>在线客服</span></router-link></li>
    	<li><router-link to="/four"><img src="../static/img/shouye/58778ed2398ef915f2a4c5b216f6252.png"/><span>个人中心</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#app .haha{
	width: 100%;
	height: 4.5rem;
	/*border: 1px solid black;*/
	display: flex;
	justify-content: space-around;
	background-color: white;
	position: fixed;
	bottom: 0;
	z-index: 999;
}
#app .haha li img{
	width: 3rem;
	text-align: center;
}
#app .haha li{
	width: 4rem;
	height: 5rem;
	/*border: 1px solid black;*/
	text-align: center;
}
#app .haha li span{
	display: inline-block;
	width: 4rem;
	height: 1rem;
	/*border: 1px solid black;*/
	margin-left: -3.6rem;
	position: absolute;
	bottom: 0.3rem;
}
</style>
