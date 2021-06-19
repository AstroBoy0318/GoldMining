import { MenuEntry } from '@pancakeswap-libs/uikit'
import { getCakeAddress } from '../../utils/addressHelpers'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'craters',
    icon: 'PoolIcon',
    href: '/craters',
  }, /*
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool'
      }
    ]
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Features',
    icon: 'PriceGuardIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.goldmining.finance/',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.goldmining.finance/automatic-burning',
      },
      {
        label: 'Referral Program',
        href: 'https://docs.goldmining.finance/referral-program',
      },
      {
        label: 'Anti Whale',
        href: 'https://docs.goldmining.finance/anti-whale',
      },
    ],
  },
  {
    label: 'Listing',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/address/'.concat(getCakeAddress()),
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Docs',
        href: 'https://docs.goldmining.finance/',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.goldmining.finance/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://goldmining.medium.com',
      },
    ],
  }, */
]

export default config
