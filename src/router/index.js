import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AxiosData from '@/components/AxiosData'
import Transition from '@/components/TransitionDemo'
import Calculator from '@/components/Calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/data',
      name:'AxiosData',
      component: AxiosData
    },
    {
      path:'/transition',
      name:'TransitionDemo',
      component: Transition
    },
    {
      path:'/calculator',
      component: Calculator
    }
  ]
})
