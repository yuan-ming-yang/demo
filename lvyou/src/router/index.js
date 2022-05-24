import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'
import one1 from '@/components/one1'
import one2 from '@/components/one2'
import one3 from '@/components/one3'
import one4 from '@/components/one4'
import two1 from '@/components/two1'
import two2 from '@/components/two2'
import two3 from '@/components/two3'
import two4 from '@/components/two4'
import two5 from '@/components/two5'
import two6 from '@/components/two6'
import two7 from '@/components/two7'
import two8 from '@/components/two8'
import two9 from '@/components/two9'
import two10 from '@/components/two10'
import two11 from '@/components/two11'
import denglv from '@/components/denglv'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/denglv',
      name: 'denglv',
      component: denglv
    },
    {
    	path: '/one',
    	 component: one,
    	 children:[
    	 		{
			      path: '/one/',
			      name: 'one1',
			      component: one1
			    },
    	 		{
			      path: '/one/one2',
			      name: 'one2',
			      component: one2
			    },
    	 		{
			      path: '/one/one3',
			      name: 'one3',
			      component: one3
			    },
    	 		{
			      path: '/one/one4',
			      name: 'one4',
			      component: one4
			    }
    	 ]
    },
    {
    	 path: '/two',
    	 component: two,
    	 children:[
    	 		{
			      path: '/two/two1',
			      name: 'two1',
			      component: two1
			    },
    	 		{
			      path: '/two/two2',
			      name: 'two2',
			      component: two2
			    },
    	 		{
			      path: '/two/two3',
			      name: 'two3',
			      component: two3
			    },
    	 		{
			      path: '/two/two4',
			      name: 'two4',
			      component: two4
			    },
    	 		{
			      path: '/two/two5',
			      name: 'two5',
			      component: two5
			    },
    	 		{
			      path: '/two/two6',
			      name: 'two6',
			      component: two6
			    },
    	 		{
			      path: '/two/two7',
			      name: 'two7',
			      component: two7
			    },
    	 		{
			      path: '/two/two8',
			      name: 'two8',
			      component: two8
			    },
    	 		{
			      path: '/two/two9',
			      name: 'two9',
			      component: two9
			    },
    	 		{
			      path: '/two/two10',
			      name: 'two10',
			      component: two10
			    },
    	 		{
			      path: '/two/two11',
			      name: 'two11',
			      component: two11
			    }
    	 ]
    }
  ]
})
