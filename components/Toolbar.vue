<template>
  <div>
    <v-app-bar app color="white" class="app-bar-shadow">
      <div class="toolbar-wrapper px-3">
        <div class="d-flex align-center">
          <nuxt-link :to="localePath('/')">
            <NuxtImg alt="BigFive logo" class="shrink mr-2" contain src="/logo.svg" width="40" />
          </nuxt-link>
        </div>
        <v-spacer />
        <v-btn text :to="localePath('result')" class="hidden-sm-and-down text-none font-weight-regular">
          {{ $t('toolbar.see_results') }}
        </v-btn>
        <v-btn text :to="localePath('compare')" class="hidden-sm-and-down text-none font-weight-regular">
          {{ $t('toolbar.compare_with') }}
        </v-btn>
        <LanguageSwitcher />
        <v-menu bottom offset-y min-width="150">
          <template v-slot:activator="{ props }">
            <v-btn icon aria-label="Expand menu" v-bind="props">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list nav>
            <v-list-item>
              <v-list-subheader class="text-uppercase">
                {{ $t('common.pages') }}
              </v-list-subheader>
            </v-list-item>
            <v-divider />
            <v-list-item :to="localePath('/result')" link class="text-none font-weight-regular pl-5 body-2">
              {{ $t('toolbar.result') }}
            </v-list-item>
            <v-list-item :to="localePath('/compare')" link class="text-none font-weight-regular pl-5 body-2">
              {{ $t('toolbar.compare') }}
            </v-list-item>
            <v-list-item :to="localePath('/articles')" link class="text-none font-weight-regular pl-5 body-2">
              {{ $t('toolbar.articles') }}
            </v-list-item>
            <v-list-item :to="localePath('/privacy')" link class="text-none font-weight-regular pl-5 body-2">
              {{ $t('toolbar.privacy') }}
            </v-list-item>
            <v-list-item :to="localePath('/about')" link class="text-none font-weight-regular pl-5 body-2">
              {{ $t('toolbar.about') }}
            </v-list-item>
            <v-list-item :to="localePath('/faq')" link class="text-none font-weight-regular pl-5 body-2">
              FAQ
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script setup>
const drawer = ref(false)
</script>


<style>
.app-bar-shadow {
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1) !important;
}

.toolbar-wrapper {
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 960px;
  width: 100%;
  align-items: center;
}

.v-menu__content {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.02) !important;
}
</style>
