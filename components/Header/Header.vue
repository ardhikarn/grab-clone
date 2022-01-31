<template>
  <div id="header">
    <v-container>
      <div class="header-1">
        <div class="head-left">
          <div class="image">
            <img src="https://food.grab.com/static/images/logo-grabfood2.svg" width="150" alt="">
          </div>
          <div v-if="!isMobile" class="search">
            <input type="text" placeholder="Type your location">
          </div>
        </div>
        <div class="head-right">
          <div class="cart">
            <img src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg" alt="">
          </div>
          <div class="btn-login">
            <div>Login/Sign Up</div>
          </div>
        </div>
      </div>
      <div v-if="isMobile" class="search">
        <input type="text" placeholder="Type your location">
      </div>
      <div class="header-2">
        <div class="steps">
          <h3><a href="">Home</a> <span style="margin: 0 10px"><img src="https://food.grab.com/static/images/icons/icon-next.svg" alt=""></span> <a href="">Restourant</a> <span style="margin: 0 10px"><img src="https://food.grab.com/static/images/icons/icon-next.svg" alt=""></span> Do Yan Seafood - Sumbersekar</h3>
        </div>
        <div class="info-merchant" style="margin-top: 20px">
          <div style="display: flex; align-items: center; color: #00B14F">
            <img src="https://food.grab.com/static/images/icons/icon-preferred-merchant.svg" alt="">
            <div style="margin-left: 7px; font-size: 12px; font-weight: 600">Preferred Merchant</div>
          </div>
          <h1>Do Yan Seafood - Sumbersekar</h1>
          <small>Seafood, Snack</small>
          <div style="display: flex; align-items: center; margin-top: 10px; color: #676767">
            <img src="https://food.grab.com/static/images/icons/icon-star.svg" alt="">
            <div style="margin-left: 10px; font-size: 14px;">4.7</div>
            <div style="margin-left: 40px; font-size: 14px;">664.1 km</div>
          </div>
          <div style="display: flex; align-items: center; margin-top: 10px; color: #676767">
            <div style="font-size: 14px; font-weight: 600">Opening Hours</div>
            <div style="margin-left: 40px; font-size: 14px;">Today  13:00-22:00</div>
          </div>
        </div>
        <div class="discount" style="color: #000">
          <div style="display: flex; align-items: center; margin-top: 10px;">
            <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg" alt="">
            <div style="margin-left: 10px; font-size: 14px;">10% off WAIKI Rice Box</div>
          </div>
          <div style="display: flex; align-items: center;">
            <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg" alt="">
            <div style="margin-left: 10px; font-size: 14px;">HEMAT40 40% | HEMAT35 35%</div>
            <div style="margin-left: 10px; font-size: 14px; color: #00A5CF; font-weight: 600">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <div v-bind="attrs" v-on="on">
                    See details
                  </div>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    Promotions
                    <span style="margin-left: 20px">
                      <img src="https://food.grab.com/static/images/icons/icon-promo-tag.svg" alt="">
                    </span>
                  </v-card-title>

                  <v-card-text style="margin-top: 20px">
                    <div>10% off WAIKI Rice Box</div>
                    <div>• Available at selected outlets</div>
                    <div>• Valid 2022-01-26 22:30 to 2022-01-31 22:30</div>
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer>HEMAT40 40% | HEMAT35 35%</v-spacer>
                    <v-btn
                      color="primary"
                      text
                      @click="dialog = false"
                    >
                      I accept
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
          <div style="display: flex; align-items: center;">
            <img src="https://food.grab.com/static/images/icons/icon-info.svg" width="23" alt="">
            <div style="margin-left: 10px; font-size: 14px;">Order fee of Rp3.000 applies for this restaurant.</div>
          </div>
        </div>
        <div class="date" style="display: flex; width: 60%; justify-content: space-between; margin-top: 20px">
          <div  style="width: 46%">
            <v-select :items="items" label="Deliver date: Today" dense solo></v-select>
          </div>
          <div  style="width: 47%">
            <v-select :items="items" label="Deliver time: Now" dense solo></v-select>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>

<style scoped lang="scss">
@import './header-style';
</style>