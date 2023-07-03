import { wComponent } from '@morjs/core'

wComponent({
  data: {
    motto: 'Hello World',
  },
  lifetimes: {
    attached() {
      console.log('username component attached')
    },
  },
})
