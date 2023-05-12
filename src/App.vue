<template>
  <h1>Url Shortener</h1>

  <div>
    <form>
      <span>URL</span>
      <input v-model.trim="originalUrl" type="text" placeholder="Enter a URL to shorten">
      <span>URL is {{ originalUrl }}</span>

      <button v-on:click="shortenUrl">Shorter!</button>

    </form>
  </div>
</template>

<script>

import { API } from 'aws-amplify';
import { createShortUrls } from './graphql/mutations'

export default {
  name: 'App',
  data() {
    console.log("in data()")

    return {
      id: "asd?",
      originalUrl: "url",
      shortUrl: '1234',
      clicks: 0,
      lastClickDate: "??",
      createdOnDate: "??"
    }
  },

  methods: {

    async shortenUrl() {
      const {
        originalUrl
      } = this;

      if (!originalUrl) {
        console.error("no url to shorten!");
      }

      console.debug(originalUrl)
      // console.log(createShortUrls)

      const shortUrlRecord = {
        id: "asd?",
        originalUrl: originalUrl,
        shortUrl: '1234',
        clicks: 0,
        lastClickDate: "??",
        createdOnDate: "??"
      }

      console.debug(structuredClone("shortRec: ", shortUrlRecord))
      console.debug(structuredClone({ input: { shortUrlRecord } }))

      try {

        const resp = await API.graphql({
          query: createShortUrls,
          variables: { input: { shortUrlRecord } }
        })

        console.debug("response:  ", structuredClone(resp))
      } catch (err) {
        console.debug("err:  ", structuredClone(err))
      }
      console.debug("end")
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
</style>
