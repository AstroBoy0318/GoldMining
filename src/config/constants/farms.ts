import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Gtoken-BUSD LP',
    lpAddresses: {
      97: '0x56BDbd69cA68b614d210D66Df958f436592B6a9f',
      56: '0x21CE11D6bfcB4088B0E28c265AD79A7Af2814B9f',
    },
    tokenSymbol: 'Gtoken',
    tokenAddresses: {
      97: '0x3edE03FBe988F1891Fe0Be53E842e1Bdbb39889F',
      56: '0x9d7576D8549f6E481170D149d9Cd456Cfe817593',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Gtoken-BNB LP',
    lpAddresses: {
      97: '0x9232D14201fDCb556E01625b31f3ba2B68a5aEfA',
      56: '0x8347397e40D565eE43c3348188f079623D1A5Cb8',
    },
    tokenSymbol: 'Gtoken',
    tokenAddresses: {
      97: '0x3edE03FBe988F1891Fe0Be53E842e1Bdbb39889F',
      56: '0x9d7576D8549f6E481170D149d9Cd456Cfe817593',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xa79fe8865fb3c3c053ee63ba8b7f90dda5c3f334',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Gtoken',
    lpAddresses: {
      97: '0x56BDbd69cA68b614d210D66Df958f436592B6a9f',
      56: '0x21CE11D6bfcB4088B0E28c265AD79A7Af2814B9f', // EGG-BUSD LP
    },
    tokenSymbol: 'Gtoken',
    tokenAddresses: {
      97: '0x3edE03FBe988F1891Fe0Be53E842e1Bdbb39889F',
      56: '0x9d7576D8549f6E481170D149d9Cd456Cfe817593',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  }
]

export default farms
