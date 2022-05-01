import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import BusinessCenter from 'material-ui/svg-icons/places/business-center';
import {cyan600, pink600, purple600, indigoA100,teal50} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Banks', icon: <BusinessCenter/>, link: '/banks' }
    // { text: 'Form Page', icon: <Web/>, link: '/form' },
    // { text: 'Table Page', icon: <GridOn/>, link: '/table' },
  ],
  BanksPage: {
    items: [
      {id: 1, name: 'Tochka', country: 'Russian Federation', status: 'Freezed'},
      {id: 2, name: 'Tinkoff', country: 'Russian Federation', status: 'Active'},
      {id: 3, name: 'Unibank', country: 'Republic of Armenia', status: 'Active'},
      {id: 4, name: 'Ameriabank', country: 'Republic of Armenia', status: 'Active'},
      {id: 5, name: 'Inecobank', country: 'Republic of Armenia', status: 'Active'}
    ]
  },
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentOperations: [
      {id: 1, title: 'Credit (Unibank)', type: 'credit', text: '$500 received from Upwork'},
      {id: 2, title: 'Debit (Unibank)', type: 'debit', text: '50000 AMD paid for service'},
      {id: 3, title: 'Credit (Tinkoff)', type: 'credit', text: '$6000 received from Upwork'},
      {id: 4, title: 'Credit (Tinkoff)', type: 'credit', text: '$370 received from Upwork'},
      {id: 5, title: 'Credit (Inecobank)', type: 'credit', text: '$480 received from Inecobank'}
    ],
    monthlyProfit: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    withdraws: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    bankUsage: [
      {name: 'Tinkoff', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Unibank', value: 100, color: pink600, icon: <ExpandMore/>},
      {name: 'Inecobank', value: 100, color: purple600, icon: <ExpandMore/>},
      {name: 'Ameriabank', value: 100, color: indigoA100, icon: <ExpandMore/>},
      {name: 'Tochka', value: 0, color: teal50, icon: <ExpandMore/>}
    ]
  }
};

export default data;
