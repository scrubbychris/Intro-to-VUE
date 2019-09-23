var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
	brand: 'VUE Masterful',
    selectedVariant: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
		variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
		variantQuantity: 0
      }
    ],
    cart: 0,
	onSale: true
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
	  console.log(index)
    },
	removeFromCart() {
		this.cart -= 1
	}
  },
	computed: {
		title() {
            return this.brand + ' ' + this.product  
        },
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.selectedVariant].variantQuantity
		},
		sale() {
		if (this.onSale) {
			return this.brand + ' ' + this.product + ' 	are on sale!'
		}
		return this.brand + ' ' + this.product + ' are not on sale.'
		}
	}
})

