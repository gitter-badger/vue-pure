export default {};

export const orderGird = {
  data() {
    return {
      orderGird: [
        {
          iconClass: 'i-waitpay',
          number: '',
          text: '待付款',
        },
        {
          iconClass: 'i-waitget',
          number: '',
          text: '待收货',
        },
        {
          iconClass: 'i-over',
          number: '',
          text: '已完成',
        },
      ],
    };
  },
};

export const doGird = {
  data() {
    return {
      doGird: [
        {
          iconClass: 'i-pushmoney',
          number: '',
          text: '充值',
        },
        {
          iconClass: 'i-tel',
          number: '',
          text: '更新信息',
        },
      ],
    };
  },
};

export const navGird = {
  data() {
    return {
      navGird: [
        {
          iconClass: 'i-index',
          number: '',
          text: '首页',
        },
        {
          iconClass: 'i-search',
          number: '',
          text: '分类搜索',
        },
        {
          iconClass: 'i-shoppingcart',
          number: '',
          text: '购物车',
        },
        {
          iconClass: 'i-member',
          number: '',
          text: '我的',
        },
      ],
    };
  },
  methods: {
    // 点击跳转
    goLink(item) {
      let link = '/';
      switch (item.text) {
        case '首页':
          link = '/';
          break;
        case '分类搜索':
          link = '/categories';
          break;
        case '购物车':
          link = '/cart';
          break;
        case '我的':
          link = '/user';
          break;
        default:
          link = '/';
          break;
      }
      this.$router.push(link);
    },
  },
};
