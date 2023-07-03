import { wComponent } from '@morjs/core'

wComponent({
  data: {},
  lifetimes: {
    attached() {
      console.log('default generics')
    },
  },
})
