import { wComponent } from '@morjs/core'

wComponent({
  data: {
    motto: 'Hello World',
  },
  lifetimes: {
    attached() {
      console.log('user component attached')
    },
  },
})
