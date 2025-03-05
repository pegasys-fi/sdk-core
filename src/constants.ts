import JSBI from 'jsbi'

export enum SupportedChainId {
  ROLLUX_TANENBAUM = 57000,
  ROLLUX = 570,
  ZKSYS_TANENBAUM = 5701
}

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
