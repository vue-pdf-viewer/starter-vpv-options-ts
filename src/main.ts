import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import { useLicense } from '@vue-pdf-viewer/viewer'

const app = createApp(App);
// useLicense('YOUR_LICENSE_KEY', app as any);
app.mount('#app')
