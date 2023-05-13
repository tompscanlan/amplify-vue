<template>
  <h1>Url Shortener</h1>

  <div>
    <form @submit.prevent>
      <span>URL</span>
      <input v-model.trim="originalUrl" type="text" placeholder="Enter a URL to shorten">
      <span>URL is {{ originalUrl }}</span>

      <button v-on:click="shortenUrl">Shorter!</button>

    </form>

    {{ shortened }}
    <div v-if="(shortened.length) > 0">
      <h2>All Shortened</h2>
      <ol>
        <li v-for="s in shortened" :key="s.id">
          {{ s }}
        </li>

      </ol>

    </div>

    <div class="error" v-if="errors.length > 0">
      <h2>Errors</h2>
      <ol>
        <li v-for="e in errors" :key="e">
          {{ e }}
        </li>

      </ol>

    </div>
  </div>
</template>

<script>

import { API } from 'aws-amplify';
import { createShortUrls } from './graphql/mutations'
import { listShortUrls } from './graphql/queries'

export default {
  name: 'App',

  // renderTracked() {
  //   debugger
  // },
  // renderTriggered() {
  //   debugger
  // },

  data() {
    console.debug("in data()")
    return {
      originalUrl: null,
      shortUrl: '1234',
      clicks: 0,
      lastClickDate: "??",
      createdOnDate: "??",
      shortened: [],
      errors: []
    }
  },

  async created() {
    this.getShortUrls()
    if (this.shortened) {
      console.debug("list of shortened", this.shortened)
    }
  },


  methods: {

    async getShortUrls() {
      let shortened = null
      try {
        shortened = await API.graphql({
          query: listShortUrls,
        })
        // shortened.originalUrl;
        console.debug("list of shortened via graphql", shortened)

      } catch (error) {
        console.log(error)
        this.errors.push("aaa",error)
        return
      }

      if (!shortened.data) { return }

      this.shortened = shortened.data.listShortUrls.items
      console.debug("this.shortened", this.shortened)
    },

    // local function to wrap remote graphql call for storing the shortened url
    async shortenUrl() {
      console.debug("in shortenUrl()")
      const { originalUrl } = this;

      if (!originalUrl) {
        this.errors.push("no url to shorten!");
        return
      }

      const shortUrl = 'this should get calulated'

      console.debug("original url: ", originalUrl)
      // console.log(createShortUrls)
      console.debug("shortened url: ", shortUrl)

      const shortUrlRecord = {
        originalUrl: originalUrl,
        shortUrl: shortUrl,
        clicks: 0,
        lastClickDate: "??",
        createdOnDate: "??"
      }

      try {
        const resp = await API.graphql({
          query: createShortUrls,
          variables: {
            input: shortUrlRecord
          }
        })
        console.debug("response from graphql:", resp)

      } catch (err) {

        this.errors.push("err: ", err)
        console.debug("err:  ", err)


      }
    }

  },
  computed: {
    console: () => console,
  }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.error {
  color: red
}
</style>
