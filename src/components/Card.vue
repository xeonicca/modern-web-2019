<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title" v-html="talk.title"></p>
    </header>
    <div class="card-content">
      <div v-if="hasSpeaker" class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="`https://confapi.ithome.com.tw/${talk.speaker.avatar}`" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ talk.speaker.name}}</p>
          <p class="subtitle is-6">{{ talk.speaker.company }}</p>
        </div>
      </div>
      <div class="content">
        <p v-html="talk.summary"></p>
        <br>
        <time :datetime="talk.date">{{talk.date}} {{ talk.startDateText }} - {{ talk.endDateText }}</time>
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
      return this.talk.speaker   && this.talk.speaker.name || ''
    },

    hasSpeaker() {
      return !!this.speaker
    }
  }
}
</script>