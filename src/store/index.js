import Vue from 'vue';
import Vuex from 'vuex';

import * as _ from 'underscore';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tiles: []
  },
  mutations: {
    addTile(state, tile) {
      state.tiles.push(tile);
    },
    clearTiles(state) {
      state.tiles = [];
    }
  },
  getters: {
    getTileById: (state) => (id) => {
      return state.tiles.find(tile => tile.id === id)
    }
  },
  actions: {
    loadTiles(context) {
      context.commit('clearTiles');

      axios.get('/api/tiles').then((response) => {
        let data = response.data;

        if (!data.success || !data.tiles)
          return;

        _.each(data.tiles, (tile) => {
          context.commit('addTile', tile);
        })
      });
    }
  }
})