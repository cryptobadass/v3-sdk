export declare const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export declare const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export declare const POOL_INIT_CODE_HASH = '0x30efa16f7c330205f2f6bce9688826e4d404f73014445a54b175676627d40551'
/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export declare enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}
/**
 * The default factory tick spacings by fee amount.
 */
export declare const TICK_SPACINGS: {
  [amount in FeeAmount]: number
}
