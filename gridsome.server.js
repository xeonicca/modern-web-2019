// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')


module.exports = function (api) {
  api.loadSource(async store => {

    const { data: speaksData } = await axios.get('https://confapi.ithome.com.tw/api/v1.3/spk.json?nid=6270')
    const speakers = store.addContentType({
      typeName: 'Speakers',
    })

    speaksData.forEach((item, i) => {
      speakers.addNode({
        id: item.target_id,
        company: item.company,
        position: item.position,
        name: item.speaker,
        profile: item.profile,
        avatar: `${item.avatar}`,
        path: `speaker/${item.target_id}` //... or this for a route per item
      })
    })

    const { data: talksData } = await axios.get('https://confapi.ithome.com.tw/api/v1.3/sessionlist.json?nid=6270')
    const talks = store.addContentType({
      typeName: 'Talks',
    })

    talksData.forEach((item, i) => {
      let startDate = new Date(+item.session_start*1000)
      let endDate = new Date(+item.session_end*1000)

      talks.addNode({
        speaker: item.speaker.length? store.createReference('Speakers', item.speaker[0].target_id):null,
        id: item.session_id,
        title: item.title,
        classroom: item.classroom,
        track: item.track.replace(/Track\s/, ''),
        summary: item.summary,
        date: startDate.toLocaleDateString(),
        sort: +item.session_start*1000,
        startDate,
        endDate,
        startDateText: `${startDate.toLocaleTimeString()}`,
        endDateText: `${endDate.toLocaleTimeString()}`,
        sessionType: item.session_type,
        language: item.language,
        // speaker: item.speaker,
        path: `talk/${item.session_id}` //... or this for a route per item
      })
    })

  })






  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api
  //   createPage({
  //     path: '/',
  //     component: './src/templates/Index.vue'
  //   })
  // })
}
