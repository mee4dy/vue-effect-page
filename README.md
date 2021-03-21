
# vue-effect-page

![Запись_2021_03_21_01_46_28_125](https://user-images.githubusercontent.com/38532197/111887687-c4f87500-89e7-11eb-828c-c90615b77c94.gif)

### Description
VUE-EFFECT-PAGE - It's VUE JS component for your projects, which allows you to add animation of the effect of switching pages in your SPA application.
There are a large number of different 3D effects that will make your application excellent.
Your users will appreciate it.

[View DEMO](https://mee4dy.github.io/vue-effect-page)

## Install
```
npm install vue-effect-page
```

## Usage 

1.
```javascript
import VueEffectPage from 'vue-effect-page'
Vue.use(VueEffectPage)
```
2. 
Wrap `<router-view/>` in an `<vue-effect-page></vue-effect-page>` component and set prop `defaultEffect`
```vue
<template>
  <div id="app">
    <vue-effect-page :defaultEffect="defaultEffect">
      <router-view/>
    </vue-effect-page>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      defaultEffect: 33
    }
  }
}
</script>
```
**OR** set up a unique effect for each route, for this add the property `effect`
```javascript
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      effect: '1'// Specific code of effect or effect ID
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: SecondPage,
      effect: '5'// Specific code of effect or effect ID
    },
    {
      path: '/random-page',
      name: 'random-page',
      component: RandomPage,
      effect: '25'// Specific code of effect or effect ID
    },
  ],
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
```
-----------------------

# Properties
| Property | Required | Type | Default | Description |
| -------- |:--------:|:----:|--------:|------------:|
| defaultEffect | false | Number, String | null | specific code of effect or effect ID |

-----------------------

# this.$effectPage
- **setEffect: (routeName: String, effectID: String | Number) => void**  
Method for programmatically assigning an effect to a route by the name of the route
```javascript
this.$effectPage.setEffect('second-page', 'move-to-left--from-right');
```
- **current** 
The object of the current effect for the current route
```javascript
this.$effectPage.current
  
// result: { id: '...', name: '...', code: '...', ... }
```

-----------------------

# List of all effects
| ID | Name | Code |
| ------------- |:-------------:|:-------------:|
| 1 | Move to left/ from right | move-to-left--from-right |
| 2 | Move to right/ from left | move-to-right--from-left |
| 3 | Move to top/ from bottom | move-to-top--from-bottom |
| 4 | Move to bottom/ from top | move-to-bottom--from-top |
| 5 | Fade / from right | fade---from-right |
| 6 | Fade / from left | fade---from-left |
| 7 | Fade / from bottom | fade---from-bottom |
| 8 | Fade / from top | fade---from-top |
| 9 | Fade left / Fade right | fade-left---fade-right |
| 10 | Fade right / Fade left | fade-right---fade-left |
| 11 | Fade top / Fade bottom | fade-top---fade-bottom |
| 12 | Fade bottom / Fade top | fade-bottom---fade-top |
| 13 | Different easing / from right | different-easing---from-right |
| 14 | Different easing / from left | different-easing---from-left |
| 15 | Different easing / from bottom | different-easing---from-bottom |
| 16 | Different easing / from top | different-easing---from-top |
| 17 | Scale down / from right | scale-down---from-right |
| 18 | Scale down / from left | scale-down---from-left |
| 19 | Scale down / from bottom | scale-down---from-bottom |
| 20 | Scale down / from top | scale-down---from-top |
| 21 | Scale down / scale down | scale-down---scale-down |
| 22 | Scale up / scale up | scale-up---scale-up |
| 23 | Move to left / scale up | move-to-left---scale-up |
| 24 | Move to right / scale up | move-to-right---scale-up |
| 25 | Move to top / scale up | move-to-top---scale-up |
| 26 | Move to bottom / scale up | move-to-bottom---scale-up |
| 27 | Scale down / scale up | scale-down---scale-up |
| 28 | Glue left / from right | glue-left---from-right |
| 29 | Glue right / from left | glue-right---from-left |
| 30 | Glue bottom / from top | glue-bottom---from-top |
| 31 | Glue top / from bottom | glue-top---from-bottom |
| 32 | Flip right | flip-right |
| 33 | Flip left | flip-left |
| 34 | Flip top | flip-top |
| 35 | Flip bottom | flip-bottom |
| 36 | Fall | fall |
| 37 | Newspaper | newspaper |
| 38 | Push left / from right | push-left---from-right |
| 39 | Push right / from left | push-right---from-left |
| 40 | Push top / from bottom | push-top---from-bottom |
| 41 | Push bottom / from top | push-bottom---from-top |
| 42 | Push left / pull right | push-left---pull-right |
| 43 | Push right / pull left | push-right---pull-left |
| 44 | Push top / pull bottom | push-top---pull-bottom |
| 45 | Push bottom / pull top | push-bottom---pull-top |
| 46 | Fold left / from right | fold-left---from-right |
| 47 | Fold right / from left | fold-right---from-left |
| 48 | Fold top / from bottom | fold-top---from-bottom |
| 49 | Fold bottom / from top | fold-bottom---from-top |
| 50 | Move to right / unfold left | move-to-right---unfold-left |
| 51 | Move to left / unfold right | move-to-left---unfold-right |
| 52 | Move to bottom / unfold top | move-to-bottom---unfold-top |
| 53 | Move to top / unfold bottom | move-to-top---unfold-bottom |
| 54 | Room to left | room-to-left |
| 55 | Room to right | room-to-right |
| 56 | Room to top | room-to-top |
| 57 | Room to bottom | room-to-bottom |
| 58 | Cube to left | cube-to-left |
| 59 | Cube to right | cube-to-right |
| 60 | Cube to top | cube-to-top |
| 61 | Cube to bottom | cube-to-bottom |
| 62 | Carousel to left | carousel-to-left |
| 63 | Carousel to right | carousel-to-right |
| 64 | Carousel to top | carousel-to-top |
| 65 | Carousel to bottom | carousel-to-bottom |
| 66 | Sides | sides |
| 67 | Slide | slide |
