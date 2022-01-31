<template>
  <div id="carousel-section">
    <div class="root">
      <v-container>
        <div class="carousel-wrap">
          <div class="nav prev" @click="slickPrev">
            <v-icon>mdi-arrow-left</v-icon>
          </div>
          <div class="nav next" @click="slickNext">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
          <div>
            <slick ref="slider" :options="slickOptions">
                <scrollactive class="my-nav" :offset="80" style="z-index: 9">
                  <div class="item" :class="isActive1 ? 'active' : ''" @click="active1">
                    <a href="#today-offer" class="scrollactive-item"><span :class="isActive1 ? 'active' : ''">Today's Offer</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive2? 'active' : ''" @click="active2">
                    <a href="#waiki" class="scrollactive-item"><span :class="isActive2 ? 'active' : ''">WAIKI Rice Box</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive3 ? 'active' : ''" @click="active3">
                    <a href="#aigo" class="scrollactive-item"><span :class="isActive3 ? 'active' : ''">Aigo</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive4 ? 'active' : ''" @click="active4">
                    <a href="#chingu" class="scrollactive-item"><span :class="isActive4 ? 'active' : ''">Chingu</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive5 ? 'active' : ''" @click="active5">
                    <a href="#seerameon" class="scrollactive-item"><span :class="isActive5 ? 'active' : ''">Seerameon Ikan</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive6 ? 'active' : ''" @click="active6">
                    <a href="#samjang" class="scrollactive-item"><span :class="isActive6 ? 'active' : ''">Samjang Gami ( Extra Pedas )</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive7 ? 'active' : ''" @click="active7">
                    <a href="#seamonster" class="scrollactive-item"><span :class="isActive7 ? 'active' : ''">Sea Monster</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive8 ? 'active' : ''" @click="active8">
                    <a href="#omo" class="scrollactive-item"><span :class="isActive8 ? 'active' : ''">Omo</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive9 ? 'active' : ''" @click="active9">
                    <a href="#saranghaeyo" class="scrollactive-item"><span :class="isActive9 ? 'active' : ''">Saranghaeyo</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive10 ? 'active' : ''" @click="active10">
                    <a href="#chaeso" class="scrollactive-item"><span :class="isActive10 ? 'active' : ''">Chaeso</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive11 ? 'active' : ''" @click="active11">
                    <a href="#drink" class="scrollactive-item"><span :class="isActive11 ? 'active' : ''">Drink (Ice / Hot)</span></a>
                  </div>
                </scrollactive>
                <scrollactive class="my-nav" :offset="80">
                  <div class="item" :class="isActive12 ? 'active' : ''" @click="active12">
                    <a href="#addon" class="scrollactive-item"><span :class="isActive12 ? 'active' : ''">Addon</span></a>
                  </div>
                </scrollactive>
            </slick>
          </div>
        </div>
      </v-container>
    </div>
    <div class="menu-section">
      <v-container>
        <div class="menus" id="today-offer">
          <h1>Today's Offer</h1>
          <v-row>
            <v-col :cols="isMobile ? '12' : '4'">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="waiki">
          <h1>WAIKI Rice Box</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="aigo">
          <h1>Aigo</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="chingu">
          <h1>Chingu</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="seerameon">
          <h1>Seerameon Ikan</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="samjang">
          <h1>Samjang Gami ( Extra Pedas )</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="seamonster">
          <h1>Sea Monster</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="omo">
          <h1>Omo</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="saranghaeyo">
          <h1>Saranghaeyo</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="chaeso">
          <h1>Chaeso</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="drink">
          <h1>Drink (Ice / Hot)</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
        <div class="menus" id="addon">
          <h1>Addon</h1>
          <v-row>
            <v-col cols="4">
              <div class="card">
                <div class="image" style="width: 120px; height: 120px; border-radius: 5px; margin-right: 16px">
                  <img src="https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE20220126140536016410/photo/afcd0975_3c568fd9625.jpeg" alt="" style="width: 100%; border-radius: 5px">
                </div>
                <div class="desc" style="width: 60%; display: flex; flex-direction: column; justify-content: space-between">
                  <div style="width: 100%; height: 100%">
                    <p>Chicken Pop Barbeque & Veggie - Rice Box</p>
                  </div>
                  <div style="text-align: right">
                    <v-icon color="#00B14F" size="35">mdi-plus-box</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  components: { Slick: () => import('vue-slick') },
  data() {
    return {
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false,
      isActive7: false,
      isActive8: false,
      isActive9: false,
      isActive10: false,
      isActive11: false,
      isActive12: false,
      slickOptions: {
        dots: false,
        speed: 500,
        slidesToShow: 6,
        arrows: true,
        infinite: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }]
      }
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
  },
  methods: {
    active1() {
      this.isActive1 = true,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active2() {
      this.isActive1 = false,
      this.isActive2 = true,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active3() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = true,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active4() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = true,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active5() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = true,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active6() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = true,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active7() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = true,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active8() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = true,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active9() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = true,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active10() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = true,
      this.isActive11 = false,
      this.isActive12 = false
    },
    active11() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = true,
      this.isActive12 = false
    },
    active12() {
      this.isActive1 = false,
      this.isActive2 = false,
      this.isActive3 = false,
      this.isActive4 = false,
      this.isActive5 = false,
      this.isActive6 = false,
      this.isActive7 = false,
      this.isActive8 = false,
      this.isActive9 = false,
      this.isActive10 = false,
      this.isActive11 = false,
      this.isActive12 = true
    },
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './carousel-style';
</style>