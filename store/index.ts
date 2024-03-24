import { defineStore } from 'pinia'
import { languages, getItems, sleep, getInfo, elapsedTimeInSeconds } from '../lib/helpers'
import type { SetSnackbarOptions } from './types'

export const useMainStore = defineStore('main', {
  state: () => ({
    development: process.env.NODE_ENV === 'development',
    slide: 0,
    loading: false,
    result: false,
    compareResult: false,
    snackbar: {
      active: false,
      message: '',
      type: 'info'
    },
    form: {
      age: 0,
      language: '',
      gender: '',
      accepted: false
    },
    languages,
    test: {
      testStart: 0,
      itemsPerPage: 3,
      answers: [],
      inventory: [],
      position: 0,
      done: false,
      invalid: false,
      inProgress: false
    }
  }),
  getters: {
    FORM_IS_VALID(): boolean {
      return !!(this.form.gender && this.form.language && this.form.age && this.form.age > 15)
    },
    GET_SELECTED_LANGUAGE(): string | undefined {
      const { text } = this.languages.find(({ value }) => value === this.form.language) || {}
      return text
    },
  },
  actions: {
    setSnackbar({ msg, type = 'info' }: SetSnackbarOptions) {
      this.snackbar.active = true
      this.snackbar.message = msg
      this.snackbar.type = type
    },
  },
})
