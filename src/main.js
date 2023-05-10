import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
