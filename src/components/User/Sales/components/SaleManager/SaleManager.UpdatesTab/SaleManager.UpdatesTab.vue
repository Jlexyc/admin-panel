<template>
  <div class="sale-manager-syndicate-tab">
    <template v-if="isLoaded">
      <template v-if="updates.length">
        <timeline-item
          class="timeline__timeline-item"
          v-for="(item, i) in updates"
          :key="i"
          :title="item.title"
          :date="item.date"
          :message="item.message"
        />
      </template>
      <template v-else> 
        <div class="no-data-msg__wrapper">
          <h2>No updates yet...</h2>
        </div>
      </template>
    </template>

    <template v-else-if="isFailed">
      <p class="text danger">
        An error occurred. Please try again later.
      </p>
    </template>

    <template v-else>
      <p class="text">
        Loading...
      </p>
    </template>
  </div>
</template>

<script>
import api from '@/api'
import { BLOB_TYPES } from '@/constants'
import _get from 'lodash/get'
import TimelineItem from './TimelineItem'
export default {
  components: {
    TimelineItem
  },

  props: ['sale'],

  data () {
    return {
      updates: {},
      isLoaded: false,
      isFailed: false
    }
  },
  created () {
    this.getUpdates({
      ownerId: _get(this.sale, 'ownerId')
    })
  },

  methods: {
    async getUpdates ({ ownerId: owner }) {
      try {
        this.updates = (await api.users
          .blobsOf(owner)
          .getAll({
            saleId: this.sale.id,
            type: BLOB_TYPES.saleUpdate
          })).data.map(attr => JSON.parse(attr.value))
        this.isLoaded = true
      } catch (e) {
        console.error(e)
        this.isFailed = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
