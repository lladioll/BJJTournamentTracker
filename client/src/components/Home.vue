<template>
  <q-page>
    <q-carousel height="200px" animated v-model="slide" navigation infinite autoplay>
      <q-carousel-slide :name="1" img-src="http://www.emerald-gym.com/wp-content/uploads/Emeraldmuaythaigym-bjj-about.jpg" />
      <q-carousel-slide :name="2" img-src="http://bjjsa.co.za/wp-content/uploads/sites/88/2016/04/Choke-defense.jpg" />
      <q-carousel-slide :name="3" img-src="http://mjrnxewya3t1in23ybpwjw59-wpengine.netdna-ssl.com/wp-content/uploads/buchecha-marcus-almeida-roger-gracie.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.evolve-mma.com/wp-content/uploads/2018/04/bjj-weight-loss.jpg" />
    </q-carousel>

    <div class="row q-ma-md">
      <div class="col-4" v-for="i in 3" :key="i">
        <q-card flat bordered class="my-card bg-grey-1 q-ma-sm">
          <q-img src="http://www.bjjlatest.com/wp-content/uploads/2015/03/ibjjf2.jpg" basic>
            <div class="absolute-bottom text-subtitle2 text-center">
              April 27th & 28th, 2019
            </div>
          </q-img>
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">New York Spring International Open IBJJF Jiu-Jitsu Championship</div>
                <div class="text-subtitle2">April 27th & 28th, 2019</div>
                <div class="text-subtitle2">Nat Holman Gym (CCNY)
                  160 Convent Ave.
                  New York
                  NY
                  USA
                  10031</div>
              </div>

              <div class="col-auto">
                <q-btn color="grey-7" round flat icon="more_vert">
                  <q-menu cover auto-close>
                    <q-list>
                      <q-item clickable>
                        <q-item-section>Remove Card</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Send Feedback</q-item-section>
                      </q-item>
                      <q-item clickable>
                        <q-item-section>Share</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            Prices: $106.00 (USD) until March 5th, 2019 $126.00 (USD) until April 19th, 2019
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat>Register</q-btn>
            <q-btn flat>Rules</q-btn>
            <q-btn @click="AddToCalendar" flat icon="calendar_today"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        slide: 1
      }
    },
    methods: {
      AddToCalendar() {
        var msgData1 = new Date()
        var msgData2 = new Date()
        var msgData3 = '31 Carl St Valley Stream NY 11580'
        var icsMSG =
          "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:me@google.com\nDTSTAMP:20120315T170000Z\nATTENDEE;CN=My Self ;RSVP=TRUE:MAILTO:me@gmail.com\nORGANIZER;CN=Me:MAILTO::me@gmail.com\nDTSTART:" +
          msgData1 + "\nDTEND:" + msgData2 + "\nLOCATION:" + msgData3 +
          "\nSUMMARY:Our Meeting Office\nEND:VEVENT\nEND:VCALENDAR";
        window.open("data:text/calendar;charset=utf8," + escape(icsMSG));
      }
    }
  }
</script>