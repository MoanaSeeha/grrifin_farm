import { FixedNumber } from '@ethersproject/bignumber'
import { getFullDecimalMultiplier } from './getFullDecimalMultiplier'

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE = FixedNumber.from(1)
export const FIXED_TWO = FixedNumber.from(2)

export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(getFullDecimalMultiplier(18))

export const masterChefAddresses = {
  97: '0xCDBAd1504b4AB0f2B124b8bA1E11C940554A1f87',
  56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
}

export const nonBSCVaultAddresses = {
  5: '0x8CB958bBdb45597cc918147469eb650A9397aBDA',
}
