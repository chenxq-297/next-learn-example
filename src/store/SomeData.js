import { defineStore } from 'pinia'

export default uesSomeDate = defineStore('someDate', {
    state: () => ({
        state: 297
    }),
    actions: {
        someAction() {
            this.state++
        },
    }
})