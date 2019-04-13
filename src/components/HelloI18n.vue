<template>
  <div>
    <p>{{ $t('hello') }}</p>
    <p>{{ $t('message') }}</p>
    <p>{{ $t('test') }}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!---"
  },
  "zh":{
    "hello": "你好 SFC"
  }
}
</i18n>
