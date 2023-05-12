<script setup>
// import { Authenticator } from "@aws-amplify/ui-vue";
// import "@aws-amplify/ui-vue/styles.css";

import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
</script>

<template>
  <h1>Url Shortener</h1>

  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/bar">Bar</router-link></li>
    </ul>
    <router-view></router-view>
</div>

<div>
  <form>
      <span>URL</span>
      <input v-model.trim="originalUrl" type="text" placeholder="Enter a URL to shorten">
      <span>URL is {{ originalUrl }}</span>

      <button v-on:click="shortenUrl">Shorter!</button>
      <!-- <div v-for="item in todos" :key="item.id">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description }}</p>
                  </div>
                   -->
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
      originalUrl: "url",
      shortUrl: '1234',
      clicks: 0,
      lastClickDate: "??",
      createdOnDate: "??"
    }
  },
  // async created() {
  // },
  methods: {
    async shortenUrl() {
      console.log("in shortenurl")
      const { originalUrl,
        // shortUrl,
        // clicks,
        // lastClickDate,
        // createdOnDate 
      }
        = this;
      if (!originalUrl) {
        console.log("no url!");
      }

      console.log("shortenoing: ", originalUrl)
      // console.log(createShortUrls)

      const shortUrlRecord = {
        originalUrl: originalUrl,
        shortUrl: '1234',
        clicks: 0,
        lastClickDate: "??",
        createdOnDate: "??"
      }

      console.log("shortRec: ", shortUrlRecord)
      console.log({
          query: createShortUrls,
          variables: { input: {shortUrlRecord} }
        })

      try {

        const resp = await API.graphql({
          query: createShortUrls,
          variables: { input: {shortUrlRecord} }
        })

        console.log("response:  ", resp)
      } catch (err) {
        console.log("err:  ", err.errors[0])
      }
      console.log("end")
    }

  },
  computed: {
    console: () => console,
  },
  components: {
    // AboutThis,
    // HelloWorld,
    // Router
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
