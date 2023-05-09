class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;
/**
 * type T0 = C
 */

type T1 = InstanceType<any>;
/**
 * type T1 = any
 */

type T2 = InstanceType<never>;
/**
 * type T2 = never
 */

type T3 = InstanceType<string>;
/**
 * Type 'string' does not satisfy the constraint 'abstract new (...args: any) => any'.
 * type T3 = any
 */

type T4 = InstanceType<Function>;
/**
 * Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
 * Type 'Function' provides no match for the signature 'new (...args: any): any'.
 * type T4 = any
 */