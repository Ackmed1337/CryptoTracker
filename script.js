const url =
  "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,AUD";


var Test1 = new Vue({
  el: "#app",
  data: {
    results: []
  },

  mounted() {
    this.upDate();
    this.timer = setInterval(this.upDate, 1000);
  },

  methods: {
    upDate: function() {
      axios.get(url).then(response => {
        this.results = response.data;
      });
    },
     buy: function () {

      alert('You bought a coin!')
    },
     sell: function (event) {

      alert('You sold a coin!')
    },
        trade: function (event) {

      alert('You traded a coin!')

    },
       loan: function (event) {

      alert('You loaned a coin!')
    }
    
  }})
  
  new Vue({
  el: '#paymentnumber',
  data: {
    number: 0,
    tweenedNumber: 0
  },
  computed: {
    paymentNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
});


