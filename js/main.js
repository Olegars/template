const app = new Vue({
    el: '#app',
    data: {
      services: [1,2,3],
      GetScreenSize: screen.width,
      GetWindowSize: document.body.clientWidth,
      scroll: '',
      isActive: false,
      visible: '',
      query: '',
      checkboxBrandGroup: [],
      checkboxMaleGroup: [],
      checkboxSizeGroup: [],
      matches: [
        'one',
        'two',
        'three',
        'four'
      ],
      selected: 0,
      selectedItem: null,
      itemHeight: 39,
      footerLink: [
        [
          { title: 'Как сделать заказ', routName: 'frontPage' },
          { title: 'Возврат товара', routName: 'frontPage' },
          { title: 'Доставка', routName: 'frontPage' },
          { title: 'Способы оплаты', routName: 'frontPage' }
        ],
        [
          { title: 'Правила продажи', routName: 'frontPage' },
          { title: 'Возврат денежных средств', routName: 'frontPage' },
          { title: 'Сертификаты', routName: 'frontPage' }
        ],
        [
          { title: 'О нас', routName: 'frontPage' },
          { title: 'Наши скидки', routName: 'frontPage' },
          { title: 'Вопросы и ответы', routName: 'frontPage' },
          { title: 'Контакты', routName: 'frontPage' },
          { title: 'Сертификаты', routName: 'frontPage' }
        ]
      ],
      menu: [
        {
          term:'menu1',
          children: [
            {term:'subMenu1',id: '1'},
            {term:'subMenu2',id: '2'},
            {term:'subMenu3',id: '3'},
            {term:'subMenu4',id: '4'},
          ],
        },
        {
          term:'menu2',
          children: [
            {term:'subMenu1',id: '1'},
            {term:'subMenu2',id: '2'},
            {term:'subMenu3',id: '3'},
            {term:'subMenu4',id: '4'},
          ],
        },
        {
          term:'menu3',
          children: [
            {term:'subMenu1',id: '1'},
            {term:'subMenu2',id: '2'},
            {term:'subMenu3',id: '3'},
            {term:'subMenu4',id: '4'},
          ],
        },
        {
          term:'menu4',
          children: [
            {term:'subMenu1',id: '1'},
            {term:'subMenu2',id: '2'},
            {term:'subMenu3',id: '3'},
            {term:'subMenu4',id: '4'},
          ],
        },
        {
          term:'menu5',
          children: [
            {term:'subMenu1',id: '1'},
            {term:'subMenu2',id: '2'},
            {term:'subMenu3',id: '3'},
            {term:'subMenu4',id: '4'},
          ],
        },
        {
          term:'menu6',
          children: [
            {term:'subMenu1',id: '1'},
            {term:'subMenu2',id: '2'},
            {term:'subMenu3',id: '3'},
            {term:'subMenu4',id: '4'},
          ],
        }
      ],
      GetHits: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      GetTerms:[ 'Бюстгальтеры Bali','Трусы Bali','Корректирующее белье Bali' ],
      pages:[1,2,3,4,5],
      GetAggregations: {
        color:[
          'rgb(0, 0, 128)',
          'rgb(100, 0, 128)',
          'rgb(0, 100, 128)',
          'rgb(50, 50, 128)'
        ],
        brand:[
          'bali',
          'wonderbra',
          'felina'
        ],
        male:[
          'женский',
          'мужской'
        ],
        size:[
          '85E (38DD)',
          '80E (38DD)',
          '85D (38DD)',
          '85R (38DD)',
          '90S (38DD)'
        ]
      },
      GetContacts: {
        address: 'Москва, ул. Косыгина ',
        phone: '777777777',
        email: 'www@www.ru',
        skype: 'www'
    }
    },
  mounted () {
    window.onscroll = () => {
      this.scroll = window.pageYOffset
    }
  },
    methods: {
      clickMenu () {

      },
      hover (menuIndex) {
        this.isActive = menuIndex
      },
      mouseOut () {
        this.isActive = false
      },
    }
  })
