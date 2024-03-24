<template>
  <v-menu bottom offset-y max-width="250">
    <template v-slot:activator="{ props }">
      <v-btn icon aria-label="Expand menu" v-bind="props" v-icon>
        <span>
          {{ locale }}
        </span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-subheader class="text-uppercase">
          {{ $t('common.languages') }}
        </v-subheader>
      </v-list-item>
      <v-divider />
      <v-row>
        <v-col v-for="locale in availableLocales" :key="locale.code" cols="6">
          <v-list-item link :to="switchLocalePath(locale.code)" class="text-none font-weight-regular pl-5 body-2">
            {{ locale.name }}
          </v-list-item>
        </v-col>
      </v-row>
    </v-list>
  </v-menu>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>
