<template>
  <form class="post-form">
    <div class="form-group">
      <label for="post-title">Title</label>
      <input type="text" class="form-control" id="post-title" placeholder="Enter title">
    </div>
    <div class="form-group">
      <label for="post-content">Content</label>
      <vue-editor id="post-content" v-model="content" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },

  data () {
    return {
      content: '<h1>Some initial content</h1>'
    }
  }
}
</script>
