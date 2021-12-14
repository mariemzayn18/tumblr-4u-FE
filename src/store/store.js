import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';
import api from '../api';

Vue.use(Vuex);
//const baseURL = "http://localhost:8080";
export const store = new Vuex.Store({
    strict: true,
    state: {
        status: "",
        token: localStorage.getItem('token') || "",
      user: {
        email: "",
        password: "",
        blogname:""
        },
        age:0,
 
        // we need to replace this with bodyColor in DB as each user has his theme color
        homeThemeIndex:0,
        homeTheme: [
 
           
          {backgroundColor: '#001935',fontColor:'white', cardColor:'#5c7e97' ,fontColor2:'#1A314D', fontStyle: 'Helvetica'},
          {backgroundColor: 'black',fontColor:'lime', cardColor:'#222222',fontColor2:'#15C406', fontStyle: 'Times New Roman'},
          {backgroundColor: 'black',fontColor:'#ff6400', cardColor:'#221000', fontColor2:'#ff6400',fontStyle: 'Lucida Console'},
          {backgroundColor: '#1A2735',fontColor:'#BFBFBF', cardColor:'#36465D', fontColor2:'#BFBFBF',fontStyle: 'Fantasy'},
          {backgroundColor: 'black',fontColor:'#CF43ED', cardColor:'#0C0C0C',fontColor2:'#CF43ED', fontStyle: 'Garamond'}, 
          {backgroundColor: '#1a1a00',fontColor:'#ffff66', cardColor:'#808000',fontColor2:'#ffff66', fontStyle: 'Georgia'}, 
              
 
        ]      , 
        blogs:[ 
          {
            id: 'sillydegu',
            content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://64.media.tumblr.com/a1362a8780e69316449a57b4e722dafb/1f7bec866c979eb4-8b/s640x960/63de62baab4af139600f4eb008e70b23bbab7889.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
            Tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
            notes:5138,
            URL:"https://64.media.tumblr.com/a1362a8780e69316449a57b4e722dafb/1f7bec866c979eb4-8b/s640x960/63de62baab4af139600f4eb008e70b23bbab7889.jpg"
            },
             {
        id:'cataster',
        content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
        Tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
        notes:2962,
        URL: "https://catasters.tumblr.com/post/669903012557373440"
        },
       
            {
                id: 'sillydegu',
                content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
                Tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
                notes:5138,
                URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it"
                },
                {
                    id: 'sillydegu',
                    content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
                    Tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
                    notes:5138,
                    URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it"
                    },
                    {
                        id: 'sillydegu',
                        content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
                        Tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
                        notes:5138,
                        URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it"
                        }
        ]
     },
    getters: {
        getField,
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,

    },
    mutations: {
        updateField,
        changePalette: state => {
            if (state.homeThemeIndex < 5){
                state.homeThemeIndex+=1;
            }    
         else if (state.homeThemeIndex >= 5){
            state.homeThemeIndex=0;
         } 
        },
        auth_request(state){
            state.status = 'loading'
          },
          auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
          },
          auth_error(state){
            state.status = 'error'
          },     
    },
    actions: {
      login({ commit }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          api().post('login',{
            email: user.email,
            password: user.password
          })
          .then(res => {
            const token = res.data
            console.log(res.data)
            const user = res.data.user
            localStorage.setItem('token', token)
            api().defaults.headers.common['Authorization'] = token 
            commit('auth_success', token, user)
            resolve(res)
          })
          .catch(err => {
            alert(err)
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          
          })
        })
  },
  signup({ commit }, user) {
    return new Promise((resolve, reject) => {
          commit('auth_request')
          api().post('signup',{
            email:this.state.user.email,
            password: this.state.user.password,
            blogName: this.state.user.blogname,
            age:user.age,
          })
            .then(res => {
            const token = res.data
            const user = res.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(res)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    
  },
  forgotpassword({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      api.post('forgot_password', {
        Email:user.email
      })
        .then(resp => {
          this.state.msg = resp.message;
          resolve(resp)
        
        })
        .catch(err => {
          alert(err.error)
          reject(err)
      })
    })
  }
       
    
    }
});
