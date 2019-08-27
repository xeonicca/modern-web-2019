<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <b-icon
            pack="fas"
            icon="coffee"
            size="is-medium">
          </b-icon>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br>
            <span v-html="talk.title"></span>
          </p>
        </div>
        <!-- <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav> -->
      </div>
    </article>
  </div>
</template>


<script>
export default {
  name: 'Box',
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