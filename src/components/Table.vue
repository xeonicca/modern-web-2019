<template>
  <section>
    <!-- <b-field grouped group-multiline>
      <div v-for="(column, index) in columnsVisible" :key="index" class="control">
        <b-checkbox v-model="column.display">
          {{ column.title }}
        </b-checkbox>
      </div>
    </b-field> -->
    <b-table :data="data" ref="table" detailed custom-detail-row :opened-detailed="['議程']"  detail-key="title" :show-detail-icon="showDetailIcon"
      :row-class="(row, index) => rowClass(row)"
      >
      <template slot-scope="props">
        <b-table-column field="date" :visible="columnsVisible['date'].display" :label="columnsVisible['date'].title" sortable>
          <strong v-html="props.row.date"></strong>
        </b-table-column>
        <b-table-column field="date" :visible="columnsVisible['time'].display" :label="columnsVisible['time'].title" sortable centered>
          {{ props.row.startDateText }} - {{ props.row.endDateText }}
        </b-table-column>
        <b-table-column :visible="columnsVisible['track'].display" :label="columnsVisible['track'].title" centered>
        </b-table-column>
        <b-table-column field="title" :visible="columnsVisible['title'].display" :label="columnsVisible['title'].title" width="500" sortable>
          <strong v-html="props.row.title"></strong>
        </b-table-column>
        <b-table-column :visible="columnsVisible['speaker'].display" :label="columnsVisible['speaker'].title">
          {{ props.row.speaker | speakerName }}
        </b-table-column>
      </template>
      <template v-if="props.row.items.length" slot="detail" slot-scope="props">
        <tr v-for="(item, index) in props.row.items" :key="item.id">
          <td v-if="showDetailIcon"></td>
          <td></td>
          <b-table-column field="date" :visible="columnsVisible['date'].display" :label="columnsVisible['date'].title" sortable centered></b-table-column>
          <td v-show="columnsVisible['track'].display" class="has-text-centered">
            <span :class="
                [
                    'tag',
                    {'is-danger': item.track === 'A'},
                    {'is-success': item.track === 'B'},
                    {'is-primary': item.track === 'C'},
                    {'is-warning': item.track === 'D'},
                    {'is-info': item.track === 'E'},

                ]">
              {{item.track}}
            </span>
          </td>
          <td v-show="columnsVisible['title'].display">{{ item.title }}</td>
          <td v-show="columnsVisible['speaker'].display">{{ item.speaker | speakerName }}</td>
        </tr>
      </template>
    </b-table>
  </section>
</template>
<script>
export default {
  data() {
    return {
      columnsVisible: {
        date: { title: 'Date', display: true },
        title: { title: 'Name', display: true },
        track: { title: 'Track', display: true },
        time: { title: 'Time', display: true },
        speaker: { title: 'Speaker', display: true },
      },
      showDetailIcon: true
    }
  },
  props: {
    talks: {
      defalt() {
        return []
      }
    }
  },
  computed: {
    data() {
      return this.talks.map(v => {
        return Object.values(v)[0]
      })
    }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },

    rowClass({sessionType, sort}) {
      let rowClass = `is-${sessionType}`
      if(sort < Date.now()) {
        rowClass += ' is-active'
      }
      return rowClass
    }
  },

  filters: {
    speakerName(speaker) {
      return speaker && speaker.length  && speaker[0].name || ''
    }
  }
}
</script>

<style>
tr.is-break {
  background-color: #F1FAEE;
}

tr.is-active {
  background-color: #ffd164;
}
</style>