<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title" v-html="talk.title"></p>
    </header>
    <div class="card-content">
      <div v-if="hasSpeaker" class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="`https://confapi.ithome.com.tw/sites/default/files/${speaker.avatar}`" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{speaker.name}}</p>
          <p class="subtitle is-6">{{ speaker.company }}</p>
        </div>
      </div>
      <div class="content">
        <time>{{talk.startDateText}} - {{talk.endDateText}}</time>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['talk'],
  computed: {
    speaker() {
      return this.talk.speaker[0] || null
    },

    hasSpeaker() {
      return !!this.talk.speaker.length
    }
  }
}
</script>