import { SerializedFarmConfig } from '@pancakeswap/farms'
import { bscTokens } from '@pancakeswap/tokens'
import { CAKE_BNB_LP_MAINNET } from './common'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'GLAND-BNB LP',
    lpAddress: '0xaD84Fe74A45b6E796DB09CA77ef789ceb270d9f1',
    token: bscTokens.gland,
    quoteToken: bscTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'GART-BNB LP',
    lpAddress: '0xce53faE5ed06EA5Edac75F0E1d69B99A0758c627',
    token: bscTokens.gart,
    quoteToken: bscTokens.wbnb,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
