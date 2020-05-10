<div id="app">
  <div class="app-loader" v-if="loading">
    <svg class='circle-loader progress' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='60' cy='60' r='30' />
    </svg>
    <noscript>JavaScriptを<br>有効にしてね</noscript>
  </div>
</div>

<style>
div.app-loader {
  width: 120px;
  height: 142px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -60px 0 0 -58px;
  text-align: center;
}
.circle-loader {
  width: 120px;
  height: 120px;
  fill: transparent;
  stroke: #009688;
  stroke-width: 4;
  animation: dash 2s ease infinite,rotate 2s linear infinite;
}

@keyframes dash {
  0% {
    stroke-dasharray: 2,187;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 145,187;
    stroke-dashoffset: -15;
  }
  100% {
    stroke-dasharray: 1,187;
    stroke-dashoffset: -185;
  }
}

@keyframes rotate {
  0% {transform: rotate(0deg); }
  100% {transform: rotate(360deg); }
}
@keyframes rrotate {
  0% {transform: rotate(0deg); }
  100% {transform: rotate(-360deg); }
}

@keyframes rightslide {
  0% {transform: translateX(-30px); }
  100% {transform: translateX(0px); }
}
@keyframes downslide {
  0% {transform: translateY(-24px); }
  100% {transform: translateX(0px); }
}
</style>