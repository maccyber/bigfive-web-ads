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
      language: ''
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
    GET_SELECTED_LANGUAGE (): string | undefined {
      const selectedLanguage = this.languages.find(({ value }) => value === this.form.language)
      return selectedLanguage?.text
    }
  },
  actions: {
    setSnackbar ({ msg, type = 'info' }: SetSnackbarOptions) {
      this.snackbar.active = true
      this.snackbar.message = msg
      this.snackbar.type = type
    }
  }
})
