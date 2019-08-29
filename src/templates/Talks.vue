<template>
  <Layout :title="$page.talk.title">
    <h1 class="title">{{$page.talk.title}}</h1>
    <h2 class="subtitle">
      <span v-if="$page.talk.track"><span :class="
                [
                    'tag',
                    {'is-danger': $page.talk.track === 'A'},
                    {'is-success': $page.talk.track === 'B'},
                    {'is-primary': $page.talk.track === 'C'},
                    {'is-warning': $page.talk.track === 'D'},
                    {'is-info': $page.talk.track === 'E'},

                ]">
              {{$page.talk.track}}</span>
        &nbsp;<strong>{{$page.talk.classroom}}</strong></span>&nbsp;
      <time :datetime="$page.talk.date"><span>{{ $page.talk.startDateText }} - {{ $page.talk.endDateText }}</span></time></h2>
    <div class="columns">
      <div class="column is-three-fifths"><Card :talk="$page.talk" /></div>
    </div>

    <g-link class="button is-link" to="/">home</g-link>
  </Layout>
</template>

<script>
  import Layout from '~/layouts/Default.vue'
  import Card from '~/components/Card.vue'
  export default {
    name: 'talk',
    components: {
      Card,
    },
  }
</script>

<page-query>
query Talks($id: String!) {
  talk: talks(id: $id) {
    id
    title
    classroom
    track
    date
    startDate
    startDateText
    endDate
    endDateText
    sessionType
    summary
    language
    sort
    path
    speaker {
      name
      avatar
      company
      profile
    }
  }
}