<template>
  <div class="card">
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
        <hr>
        <p class="content">About the speaker</p>
        <p class="content is-small" v-html="talk.speaker.profile"></p>
        <p v-if="talk.track"><span :class="
                [
                    'tag',
                    {'is-danger': talk.track === 'A'},
                    {'is-success': talk.track === 'B'},
                    {'is-primary': talk.track === 'C'},
                    {'is-warning': talk.track === 'D'},
                    {'is-info': talk.track === 'E'},

                ]">
              {{talk.track}}</span>
        &nbsp;<strong>{{talk.classroom}}</strong></p>

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