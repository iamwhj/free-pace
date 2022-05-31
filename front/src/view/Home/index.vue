<template>
  <div class="home">
    <div class="item-wrap">
      <el-image
        style="width: 100%"
        fit="cover"
        src="/src/assets/img1.jpg"
        :preview-src-list="['/src/assets/img1.jpg']"
        :hide-on-click-modal="true"
      />
      <p class="describe-tip">
        处于简单环境的时向往复杂，疲于复杂环境时又想回归简单。<br/>
        其实简单点很好，了却诸多麻烦，平添喜乐顺遂。
      </p>
    </div>
        <div class="item-wrap">
      <el-image
        style="width: 100%"
        fit="cover"
        src="/src/assets/img2.jpg"
        :preview-src-list="['/src/assets/img2.jpg']"
        :hide-on-click-modal="true"
      />
      <p class="describe-tip">
        处于简单环境的时向往复杂，疲于复杂环境时又想回归简单。<br/>
        其实简单点很好，了却诸多麻烦，平添喜乐顺遂。
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.item-wrap {
  .describe-tip {
    font-size: 0.2rem;
    margin: 0;
    padding: 0 0.1rem 0.2rem;
  }
}
</style>
