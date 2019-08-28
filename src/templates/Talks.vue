<template>
  <Layout :title="$page.talk.title">
    <Card :talk="$page.talk" />
    <g-link to="/">home</g-link>
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
    }
  }
}