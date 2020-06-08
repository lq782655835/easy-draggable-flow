<template>
  <div id="wrapper">
    <div class="line-wrap" style="margin-left: 70px;">
      <div id="item-1" class="state-item">State 1</div>
      <div id="item-2" class="state-item">State 2</div>
      <div id="item-3" class="state-item">State 3</div>
    </div>
    <div class="line-wrap">
      <div id="item-4" class="state-item">State 4</div>
      <div id="item-5" class="state-item">State 5</div>
      <div id="item-6" class="state-item">State 6</div>
      <div id="item-7" class="state-item">State 7</div>
    </div>
    <div class="line-wrap" style="margin-left: 215px;">
      <div id="item-8" class="state-item">State 8</div>
      <div id="item-9" class="state-item">State 9</div>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from 'jsplumb'

export default {
  methods: {
    mounted() {
      let instance = jsPlumb.getInstance()
      instance.ready(() => {
        instance.connect({
          source: 'item-1',
          target: 'item-2',
          anchor: ['Left', 'Right', 'Top', 'Bottom', [0.3, 0, 0, -1], [0.7, 0, 0, -1], [0.3, 1, 0, 1], [0.7, 1, 0, 1]],
          connector: ['StateMachine'],
          endpoint: 'Blank',
          overlays: [ ['Arrow', { width: 8, length: 8, location: 1 }] ], // overlay
          // 添加样式
          paintStyle: { stroke: '#909399', strokeWidth: 2 }, // connector
        })
      })
    }
  }
}
</script>

<style scoped>
  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
  .state-item {
    width: 80px;
    height: 40px;
    color: #606266;
    background: #f6f6f6;
    border: 2px solid rgba(0, 0, 0, 0.05);
    text-align: center;
    line-height: 40px;
    font-family: sans-serif;
    border-radius: 4px;
    margin-right: 60px;
  }
  .line-wrap {
    display: flex;
    margin-bottom: 40px;
  }
</style>
