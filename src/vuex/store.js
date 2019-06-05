import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    result: "",
    enter: ""
}

export default new Vuex.Store({
    state,
    mutations:{
        calculate(state,value){
            if(value === '='){
                state.result = eval(state.enter);
                state.enter += value;
            }else if(value === 'clear'){
                state.result = state.enter = "";
            }else{
                state.enter += value;
            }
        }
    }
});