import JSBI from 'jsbi'

export enum SupportedChainId {
  ROLLUX = 57000,
  NEVM = 57,
  TANENBAUM = 5700
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
