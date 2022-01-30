<template>
  <footer class="footer">
    <div class="footer-1">
      <v-container>
        <div class="top-footer">
          <div class="footer-logo">
            <img src="https://food.grab.com/static/images/logo-grabfood-mono.svg" alt="">
          </div>
          <div class="languages">
            <v-select style="font-size: 12px" :items="langList" :value="lang" v-model="lang" label="" class="select-lang" @change="switchLang(lang)"/>
          </div>
        </div>

        <div class="mid-footer">
          <v-row>
            <v-col cols="3" v-for="(item, index) in data" :key="index" v-show="!isMobile && index < 3" class="mid-foot-desk">
                <h3 style="font-size: 16px; color: #363a45">{{ item.title }}</h3>
                <div style="margin-top: 16px">
                  <p v-for="(unit, index) in item.items" :key="index" class="mb-1" style="font-size: 14px; color: #363a45">
                    {{ unit }}
                  </p>
                </div>
            </v-col>
            <v-col cols="3" v-show="!isMobile" class="mid-foot-desk">
              <h3 style="font-size: 16px; color: #363a45">{{ $t('footer.support') }}</h3>
              <div style="margin-top: 16px">
                <p class="mb-1" style="font-size: 14px; color: #363a45">{{ $t('footer.help') }}</p>
                <p class="mb-1" style="font-size: 14px; color: #363a45">{{ $t('footer.faqs') }}</p>
                <p class="mb-1" style="font-size: 14px; color: #363a45">{{ $t('footer.merchant') }}</p>
                <p class="mb-1" style="font-size: 14px; color: #363a45">{{ $t('footer.drive') }}</p>
              </div>
            </v-col>
            <div v-if="isMobile" class="mid-foot-mobile">
              <v-expansion-panels style="background: none; box-shadow: none;">
                  <v-expansion-panel v-for="(item, index) in data" :key="index" class="accordion-content" v-show="index < 3" >
                    <v-expansion-panel-header style="font-weight: 700">
                      {{ item.title }}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content v-for="(unit, index) in item.items" :key="index">
                      <p>{{ unit }}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel class="accordion-content">
                    <v-expansion-panel-header style="font-weight: 700">
                      <p>{{ $t('footer.support') }}</p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>{{ $t('footer.help') }}</p>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      <p>{{ $t('footer.faqs') }}</p>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      <p>{{ $t('footer.merchant') }}</p>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                      <p>{{ $t('footer.drive') }}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
            </div>
          </v-row>
        </div>

      </v-container>
    </div>
    <div class="footer-2">
      <v-container>
        <div class="bot-footer">
          <v-row class="bot-foot-mobile" justify="space-between">
            <v-col :cols="isMobile ? '12' : '6'" v-for="(data, index) in dataBotFooter" :key="index">
              <div class="countries-section">
                <h3>{{ data.title }}</h3>
                <div class="countries">
                  <div v-for="(country, index) in data.countries" :key="index" class="country">
                    {{ country }}
                  </div>
                </div>
              </div>
            </v-col>
            <v-col :cols="isMobile ? '12' : '6'" style="text-align: right">
              <div class="socmed">
                <v-icon>mdi-facebook</v-icon>
                <v-icon>mdi-instagram</v-icon>
                <v-icon>mdi-twitter</v-icon>
              </div>
            </v-col>
            <v-col :cols="isMobile ? '12' : '6'">
              <div class="options">
                <h3>© Grab 2022</h3>
                <div class="option">
                  <div>Terms of Service <span>•</span> Privacy Policy</div>
                </div>
              </div>
            </v-col>
            <v-col :cols="isMobile ? '12' : '6'">
              <div class="images">
                <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="Appstore" width="125">
                <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="Playstore" width="125">
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-style';
</style>

<script>
import data from '~/data.json'

export default {
  data: () => ({
    data: data.footer,
    dataBotFooter: data.data_countries,
    lang: 'en',
  }),
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('footer.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}
</script>
