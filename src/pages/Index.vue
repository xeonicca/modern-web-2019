<template>
  <Layout>
    <Table :talks="realTalks" />
    <!-- All other tile elements -->
<!--     <template v-for="talk in realTalks">
      <div v-if="Object.values(talk)[0] instanceof Array" class="columns" :key="Object.keys(talk)[0]">
        <div v-for="session in Object.values(talk)[0]" class="column">
          <Card class="is-primary" :talk="session" />
        </div>
      </div>
      <div v-else class="columns" :key="Object.keys(talk)[0]">
        <div class="column">
          <Box :talk="Object.values(talk)[0]" />
        </div>
      </div>
    </template> -->
  </Layout>
</template>

<script>
// import Card from '~/components/Card.vue'
// import Box from '~/components/Box.vue'
import Table from '~/components/Table.vue'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    realTalks() {
      let result = []
      this.$page.talks.edges.forEach(v => {
        let item = v.node
        if(item.sessionType === 'break' || item.sessionType === 'keynote') {
          result.push({[item.sort]: item})
        } else if(item.sessionType === 'session') {
          // find exising node
          let session = result.find(k => {
            return Object.keys(k)[0] == item.sort
          })

          if(!session) {
            session = {[item.sort]: {
              title: '議程',
              items: [],
              sessionType: 'session',
              date: item.date,
              startDate: item.startDate,
              startDateText: item.startDateText,
              endDate: item.endDate,
              endDateText: item.endDateText,
              sort: item.sort
            }}
            result.push(session)
          }
          session[item.sort]['items'].push(item)
        }
      })

      return result
    }
  },
  components: {
    Table
  },

  mounted() {
    // window.scrollTo()
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>


<page-query>
query Talks {
  talks: allTalks(sort: [{ by: "sort", order: ASC }, { by: "track", order: ASC}]) {
    edges {
      node {
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
  }
}
</page-query>