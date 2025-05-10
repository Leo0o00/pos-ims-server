
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Points_of_sales
 * 
 */
export type Points_of_sales = $Result.DefaultSelection<Prisma.$Points_of_salesPayload>
/**
 * Model Products_categories
 * 
 */
export type Products_categories = $Result.DefaultSelection<Prisma.$Products_categoriesPayload>
/**
 * Model Providers
 * 
 */
export type Providers = $Result.DefaultSelection<Prisma.$ProvidersPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Products_images
 * 
 */
export type Products_images = $Result.DefaultSelection<Prisma.$Products_imagesPayload>
/**
 * Model Employees
 * 
 */
export type Employees = $Result.DefaultSelection<Prisma.$EmployeesPayload>
/**
 * Model Salary
 * 
 */
export type Salary = $Result.DefaultSelection<Prisma.$SalaryPayload>
/**
 * Model Sales
 * 
 */
export type Sales = $Result.DefaultSelection<Prisma.$SalesPayload>
/**
 * Model Products_sales
 * 
 */
export type Products_sales = $Result.DefaultSelection<Prisma.$Products_salesPayload>
/**
 * Model Purchases
 * 
 */
export type Purchases = $Result.DefaultSelection<Prisma.$PurchasesPayload>
/**
 * Model Products_purchases
 * 
 */
export type Products_purchases = $Result.DefaultSelection<Prisma.$Products_purchasesPayload>
/**
 * Model Expenses_category
 * 
 */
export type Expenses_category = $Result.DefaultSelection<Prisma.$Expenses_categoryPayload>
/**
 * Model Expenses
 * 
 */
export type Expenses = $Result.DefaultSelection<Prisma.$ExpensesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Points_of_sales
 * const points_of_sales = await prisma.points_of_sales.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Points_of_sales
   * const points_of_sales = await prisma.points_of_sales.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.points_of_sales`: Exposes CRUD operations for the **Points_of_sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points_of_sales
    * const points_of_sales = await prisma.points_of_sales.findMany()
    * ```
    */
  get points_of_sales(): Prisma.Points_of_salesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products_categories`: Exposes CRUD operations for the **Products_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_categories
    * const products_categories = await prisma.products_categories.findMany()
    * ```
    */
  get products_categories(): Prisma.Products_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providers`: Exposes CRUD operations for the **Providers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.providers.findMany()
    * ```
    */
  get providers(): Prisma.ProvidersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products_images`: Exposes CRUD operations for the **Products_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_images
    * const products_images = await prisma.products_images.findMany()
    * ```
    */
  get products_images(): Prisma.Products_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salary`: Exposes CRUD operations for the **Salary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salaries
    * const salaries = await prisma.salary.findMany()
    * ```
    */
  get salary(): Prisma.SalaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **Sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.SalesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products_sales`: Exposes CRUD operations for the **Products_sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_sales
    * const products_sales = await prisma.products_sales.findMany()
    * ```
    */
  get products_sales(): Prisma.Products_salesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchases`: Exposes CRUD operations for the **Purchases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchases.findMany()
    * ```
    */
  get purchases(): Prisma.PurchasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products_purchases`: Exposes CRUD operations for the **Products_purchases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_purchases
    * const products_purchases = await prisma.products_purchases.findMany()
    * ```
    */
  get products_purchases(): Prisma.Products_purchasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses_category`: Exposes CRUD operations for the **Expenses_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses_categories
    * const expenses_categories = await prisma.expenses_category.findMany()
    * ```
    */
  get expenses_category(): Prisma.Expenses_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **Expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.ExpensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Points_of_sales: 'Points_of_sales',
    Products_categories: 'Products_categories',
    Providers: 'Providers',
    Products: 'Products',
    Products_images: 'Products_images',
    Employees: 'Employees',
    Salary: 'Salary',
    Sales: 'Sales',
    Products_sales: 'Products_sales',
    Purchases: 'Purchases',
    Products_purchases: 'Products_purchases',
    Expenses_category: 'Expenses_category',
    Expenses: 'Expenses',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "points_of_sales" | "products_categories" | "providers" | "products" | "products_images" | "employees" | "salary" | "sales" | "products_sales" | "purchases" | "products_purchases" | "expenses_category" | "expenses" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Points_of_sales: {
        payload: Prisma.$Points_of_salesPayload<ExtArgs>
        fields: Prisma.Points_of_salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Points_of_salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Points_of_salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>
          }
          findFirst: {
            args: Prisma.Points_of_salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Points_of_salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>
          }
          findMany: {
            args: Prisma.Points_of_salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>[]
          }
          create: {
            args: Prisma.Points_of_salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>
          }
          createMany: {
            args: Prisma.Points_of_salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Points_of_salesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>[]
          }
          delete: {
            args: Prisma.Points_of_salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>
          }
          update: {
            args: Prisma.Points_of_salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>
          }
          deleteMany: {
            args: Prisma.Points_of_salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Points_of_salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Points_of_salesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>[]
          }
          upsert: {
            args: Prisma.Points_of_salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Points_of_salesPayload>
          }
          aggregate: {
            args: Prisma.Points_of_salesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoints_of_sales>
          }
          groupBy: {
            args: Prisma.Points_of_salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Points_of_salesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Points_of_salesCountArgs<ExtArgs>
            result: $Utils.Optional<Points_of_salesCountAggregateOutputType> | number
          }
        }
      }
      Products_categories: {
        payload: Prisma.$Products_categoriesPayload<ExtArgs>
        fields: Prisma.Products_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Products_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Products_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>
          }
          findFirst: {
            args: Prisma.Products_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Products_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>
          }
          findMany: {
            args: Prisma.Products_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>[]
          }
          create: {
            args: Prisma.Products_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>
          }
          createMany: {
            args: Prisma.Products_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Products_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>[]
          }
          delete: {
            args: Prisma.Products_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>
          }
          update: {
            args: Prisma.Products_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.Products_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Products_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Products_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.Products_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Products_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts_categories>
          }
          groupBy: {
            args: Prisma.Products_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Products_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Products_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Products_categoriesCountAggregateOutputType> | number
          }
        }
      }
      Providers: {
        payload: Prisma.$ProvidersPayload<ExtArgs>
        fields: Prisma.ProvidersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvidersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvidersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>
          }
          findFirst: {
            args: Prisma.ProvidersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvidersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>
          }
          findMany: {
            args: Prisma.ProvidersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>[]
          }
          create: {
            args: Prisma.ProvidersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>
          }
          createMany: {
            args: Prisma.ProvidersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvidersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>[]
          }
          delete: {
            args: Prisma.ProvidersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>
          }
          update: {
            args: Prisma.ProvidersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>
          }
          deleteMany: {
            args: Prisma.ProvidersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvidersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProvidersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>[]
          }
          upsert: {
            args: Prisma.ProvidersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvidersPayload>
          }
          aggregate: {
            args: Prisma.ProvidersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviders>
          }
          groupBy: {
            args: Prisma.ProvidersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvidersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvidersCountArgs<ExtArgs>
            result: $Utils.Optional<ProvidersCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Products_images: {
        payload: Prisma.$Products_imagesPayload<ExtArgs>
        fields: Prisma.Products_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Products_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Products_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>
          }
          findFirst: {
            args: Prisma.Products_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Products_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>
          }
          findMany: {
            args: Prisma.Products_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>[]
          }
          create: {
            args: Prisma.Products_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>
          }
          createMany: {
            args: Prisma.Products_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Products_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>[]
          }
          delete: {
            args: Prisma.Products_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>
          }
          update: {
            args: Prisma.Products_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>
          }
          deleteMany: {
            args: Prisma.Products_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Products_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Products_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>[]
          }
          upsert: {
            args: Prisma.Products_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_imagesPayload>
          }
          aggregate: {
            args: Prisma.Products_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts_images>
          }
          groupBy: {
            args: Prisma.Products_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Products_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Products_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Products_imagesCountAggregateOutputType> | number
          }
        }
      }
      Employees: {
        payload: Prisma.$EmployeesPayload<ExtArgs>
        fields: Prisma.EmployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findFirst: {
            args: Prisma.EmployeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findMany: {
            args: Prisma.EmployeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          create: {
            args: Prisma.EmployeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          createMany: {
            args: Prisma.EmployeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          delete: {
            args: Prisma.EmployeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          update: {
            args: Prisma.EmployeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          upsert: {
            args: Prisma.EmployeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.EmployeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      Salary: {
        payload: Prisma.$SalaryPayload<ExtArgs>
        fields: Prisma.SalaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          findFirst: {
            args: Prisma.SalaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          findMany: {
            args: Prisma.SalaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          create: {
            args: Prisma.SalaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          createMany: {
            args: Prisma.SalaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          delete: {
            args: Prisma.SalaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          update: {
            args: Prisma.SalaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          deleteMany: {
            args: Prisma.SalaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          upsert: {
            args: Prisma.SalaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          aggregate: {
            args: Prisma.SalaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalary>
          }
          groupBy: {
            args: Prisma.SalaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryCountAggregateOutputType> | number
          }
        }
      }
      Sales: {
        payload: Prisma.$SalesPayload<ExtArgs>
        fields: Prisma.SalesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findFirst: {
            args: Prisma.SalesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          findMany: {
            args: Prisma.SalesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          create: {
            args: Prisma.SalesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          createMany: {
            args: Prisma.SalesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          delete: {
            args: Prisma.SalesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          update: {
            args: Prisma.SalesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          deleteMany: {
            args: Prisma.SalesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>[]
          }
          upsert: {
            args: Prisma.SalesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.SalesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      Products_sales: {
        payload: Prisma.$Products_salesPayload<ExtArgs>
        fields: Prisma.Products_salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Products_salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Products_salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>
          }
          findFirst: {
            args: Prisma.Products_salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Products_salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>
          }
          findMany: {
            args: Prisma.Products_salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>[]
          }
          create: {
            args: Prisma.Products_salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>
          }
          createMany: {
            args: Prisma.Products_salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Products_salesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>[]
          }
          delete: {
            args: Prisma.Products_salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>
          }
          update: {
            args: Prisma.Products_salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>
          }
          deleteMany: {
            args: Prisma.Products_salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Products_salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Products_salesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>[]
          }
          upsert: {
            args: Prisma.Products_salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_salesPayload>
          }
          aggregate: {
            args: Prisma.Products_salesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts_sales>
          }
          groupBy: {
            args: Prisma.Products_salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Products_salesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Products_salesCountArgs<ExtArgs>
            result: $Utils.Optional<Products_salesCountAggregateOutputType> | number
          }
        }
      }
      Purchases: {
        payload: Prisma.$PurchasesPayload<ExtArgs>
        fields: Prisma.PurchasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          findFirst: {
            args: Prisma.PurchasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          findMany: {
            args: Prisma.PurchasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          create: {
            args: Prisma.PurchasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          createMany: {
            args: Prisma.PurchasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          delete: {
            args: Prisma.PurchasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          update: {
            args: Prisma.PurchasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          deleteMany: {
            args: Prisma.PurchasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>[]
          }
          upsert: {
            args: Prisma.PurchasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasesPayload>
          }
          aggregate: {
            args: Prisma.PurchasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchases>
          }
          groupBy: {
            args: Prisma.PurchasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasesCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasesCountAggregateOutputType> | number
          }
        }
      }
      Products_purchases: {
        payload: Prisma.$Products_purchasesPayload<ExtArgs>
        fields: Prisma.Products_purchasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Products_purchasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Products_purchasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>
          }
          findFirst: {
            args: Prisma.Products_purchasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Products_purchasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>
          }
          findMany: {
            args: Prisma.Products_purchasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>[]
          }
          create: {
            args: Prisma.Products_purchasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>
          }
          createMany: {
            args: Prisma.Products_purchasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Products_purchasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>[]
          }
          delete: {
            args: Prisma.Products_purchasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>
          }
          update: {
            args: Prisma.Products_purchasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>
          }
          deleteMany: {
            args: Prisma.Products_purchasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Products_purchasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Products_purchasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>[]
          }
          upsert: {
            args: Prisma.Products_purchasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Products_purchasesPayload>
          }
          aggregate: {
            args: Prisma.Products_purchasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts_purchases>
          }
          groupBy: {
            args: Prisma.Products_purchasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Products_purchasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Products_purchasesCountArgs<ExtArgs>
            result: $Utils.Optional<Products_purchasesCountAggregateOutputType> | number
          }
        }
      }
      Expenses_category: {
        payload: Prisma.$Expenses_categoryPayload<ExtArgs>
        fields: Prisma.Expenses_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Expenses_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Expenses_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>
          }
          findFirst: {
            args: Prisma.Expenses_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Expenses_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>
          }
          findMany: {
            args: Prisma.Expenses_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>[]
          }
          create: {
            args: Prisma.Expenses_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>
          }
          createMany: {
            args: Prisma.Expenses_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Expenses_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>[]
          }
          delete: {
            args: Prisma.Expenses_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>
          }
          update: {
            args: Prisma.Expenses_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>
          }
          deleteMany: {
            args: Prisma.Expenses_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Expenses_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Expenses_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>[]
          }
          upsert: {
            args: Prisma.Expenses_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Expenses_categoryPayload>
          }
          aggregate: {
            args: Prisma.Expenses_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses_category>
          }
          groupBy: {
            args: Prisma.Expenses_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Expenses_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Expenses_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Expenses_categoryCountAggregateOutputType> | number
          }
        }
      }
      Expenses: {
        payload: Prisma.$ExpensesPayload<ExtArgs>
        fields: Prisma.ExpensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          findFirst: {
            args: Prisma.ExpensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          findMany: {
            args: Prisma.ExpensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          create: {
            args: Prisma.ExpensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          createMany: {
            args: Prisma.ExpensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpensesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          delete: {
            args: Prisma.ExpensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          update: {
            args: Prisma.ExpensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          deleteMany: {
            args: Prisma.ExpensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpensesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>[]
          }
          upsert: {
            args: Prisma.ExpensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.ExpensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    points_of_sales?: Points_of_salesOmit
    products_categories?: Products_categoriesOmit
    providers?: ProvidersOmit
    products?: ProductsOmit
    products_images?: Products_imagesOmit
    employees?: EmployeesOmit
    salary?: SalaryOmit
    sales?: SalesOmit
    products_sales?: Products_salesOmit
    purchases?: PurchasesOmit
    products_purchases?: Products_purchasesOmit
    expenses_category?: Expenses_categoryOmit
    expenses?: ExpensesOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Points_of_salesCountOutputType
   */

  export type Points_of_salesCountOutputType = {
    employees: number
    products: number
  }

  export type Points_of_salesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Points_of_salesCountOutputTypeCountEmployeesArgs
    products?: boolean | Points_of_salesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * Points_of_salesCountOutputType without action
   */
  export type Points_of_salesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_salesCountOutputType
     */
    select?: Points_of_salesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Points_of_salesCountOutputType without action
   */
  export type Points_of_salesCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
  }

  /**
   * Points_of_salesCountOutputType without action
   */
  export type Points_of_salesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type Products_categoriesCountOutputType
   */

  export type Products_categoriesCountOutputType = {
    products: number
  }

  export type Products_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Products_categoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * Products_categoriesCountOutputType without action
   */
  export type Products_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categoriesCountOutputType
     */
    select?: Products_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Products_categoriesCountOutputType without action
   */
  export type Products_categoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProvidersCountOutputType
   */

  export type ProvidersCountOutputType = {
    products: number
  }

  export type ProvidersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProvidersCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvidersCountOutputType
     */
    select?: ProvidersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvidersCountOutputType without action
   */
  export type ProvidersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    img: number
    products_purchases: number
    products_sales: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    img?: boolean | ProductsCountOutputTypeCountImgArgs
    products_purchases?: boolean | ProductsCountOutputTypeCountProducts_purchasesArgs
    products_sales?: boolean | ProductsCountOutputTypeCountProducts_salesArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountImgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_imagesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProducts_purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_purchasesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProducts_salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_salesWhereInput
  }


  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    sales: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | EmployeesCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
  }


  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    products_sales: number
  }

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products_sales?: boolean | SalesCountOutputTypeCountProducts_salesArgs
  }

  // Custom InputTypes
  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountProducts_salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_salesWhereInput
  }


  /**
   * Count Type PurchasesCountOutputType
   */

  export type PurchasesCountOutputType = {
    products_purchases: number
  }

  export type PurchasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products_purchases?: boolean | PurchasesCountOutputTypeCountProducts_purchasesArgs
  }

  // Custom InputTypes
  /**
   * PurchasesCountOutputType without action
   */
  export type PurchasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasesCountOutputType
     */
    select?: PurchasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchasesCountOutputType without action
   */
  export type PurchasesCountOutputTypeCountProducts_purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_purchasesWhereInput
  }


  /**
   * Count Type Expenses_categoryCountOutputType
   */

  export type Expenses_categoryCountOutputType = {
    Expenses: number
  }

  export type Expenses_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expenses?: boolean | Expenses_categoryCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * Expenses_categoryCountOutputType without action
   */
  export type Expenses_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_categoryCountOutputType
     */
    select?: Expenses_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Expenses_categoryCountOutputType without action
   */
  export type Expenses_categoryCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpensesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Points_of_sales
   */

  export type AggregatePoints_of_sales = {
    _count: Points_of_salesCountAggregateOutputType | null
    _min: Points_of_salesMinAggregateOutputType | null
    _max: Points_of_salesMaxAggregateOutputType | null
  }

  export type Points_of_salesMinAggregateOutputType = {
    point_of_sales_id: string | null
    name: string | null
    address: string | null
    img: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Points_of_salesMaxAggregateOutputType = {
    point_of_sales_id: string | null
    name: string | null
    address: string | null
    img: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Points_of_salesCountAggregateOutputType = {
    point_of_sales_id: number
    name: number
    address: number
    img: number
    created_at: number
    last_update: number
    _all: number
  }


  export type Points_of_salesMinAggregateInputType = {
    point_of_sales_id?: true
    name?: true
    address?: true
    img?: true
    created_at?: true
    last_update?: true
  }

  export type Points_of_salesMaxAggregateInputType = {
    point_of_sales_id?: true
    name?: true
    address?: true
    img?: true
    created_at?: true
    last_update?: true
  }

  export type Points_of_salesCountAggregateInputType = {
    point_of_sales_id?: true
    name?: true
    address?: true
    img?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type Points_of_salesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points_of_sales to aggregate.
     */
    where?: Points_of_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points_of_sales to fetch.
     */
    orderBy?: Points_of_salesOrderByWithRelationInput | Points_of_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Points_of_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points_of_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points_of_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points_of_sales
    **/
    _count?: true | Points_of_salesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Points_of_salesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Points_of_salesMaxAggregateInputType
  }

  export type GetPoints_of_salesAggregateType<T extends Points_of_salesAggregateArgs> = {
        [P in keyof T & keyof AggregatePoints_of_sales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoints_of_sales[P]>
      : GetScalarType<T[P], AggregatePoints_of_sales[P]>
  }




  export type Points_of_salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Points_of_salesWhereInput
    orderBy?: Points_of_salesOrderByWithAggregationInput | Points_of_salesOrderByWithAggregationInput[]
    by: Points_of_salesScalarFieldEnum[] | Points_of_salesScalarFieldEnum
    having?: Points_of_salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Points_of_salesCountAggregateInputType | true
    _min?: Points_of_salesMinAggregateInputType
    _max?: Points_of_salesMaxAggregateInputType
  }

  export type Points_of_salesGroupByOutputType = {
    point_of_sales_id: string
    name: string
    address: string
    img: string | null
    created_at: Date
    last_update: Date
    _count: Points_of_salesCountAggregateOutputType | null
    _min: Points_of_salesMinAggregateOutputType | null
    _max: Points_of_salesMaxAggregateOutputType | null
  }

  type GetPoints_of_salesGroupByPayload<T extends Points_of_salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Points_of_salesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Points_of_salesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Points_of_salesGroupByOutputType[P]>
            : GetScalarType<T[P], Points_of_salesGroupByOutputType[P]>
        }
      >
    >


  export type Points_of_salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    point_of_sales_id?: boolean
    name?: boolean
    address?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
    employees?: boolean | Points_of_sales$employeesArgs<ExtArgs>
    products?: boolean | Points_of_sales$productsArgs<ExtArgs>
    _count?: boolean | Points_of_salesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points_of_sales"]>

  export type Points_of_salesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    point_of_sales_id?: boolean
    name?: boolean
    address?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["points_of_sales"]>

  export type Points_of_salesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    point_of_sales_id?: boolean
    name?: boolean
    address?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["points_of_sales"]>

  export type Points_of_salesSelectScalar = {
    point_of_sales_id?: boolean
    name?: boolean
    address?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type Points_of_salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"point_of_sales_id" | "name" | "address" | "img" | "created_at" | "last_update", ExtArgs["result"]["points_of_sales"]>
  export type Points_of_salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | Points_of_sales$employeesArgs<ExtArgs>
    products?: boolean | Points_of_sales$productsArgs<ExtArgs>
    _count?: boolean | Points_of_salesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Points_of_salesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Points_of_salesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Points_of_salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Points_of_sales"
    objects: {
      employees: Prisma.$EmployeesPayload<ExtArgs>[]
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      point_of_sales_id: string
      name: string
      address: string
      img: string | null
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["points_of_sales"]>
    composites: {}
  }

  type Points_of_salesGetPayload<S extends boolean | null | undefined | Points_of_salesDefaultArgs> = $Result.GetResult<Prisma.$Points_of_salesPayload, S>

  type Points_of_salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Points_of_salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Points_of_salesCountAggregateInputType | true
    }

  export interface Points_of_salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Points_of_sales'], meta: { name: 'Points_of_sales' } }
    /**
     * Find zero or one Points_of_sales that matches the filter.
     * @param {Points_of_salesFindUniqueArgs} args - Arguments to find a Points_of_sales
     * @example
     * // Get one Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Points_of_salesFindUniqueArgs>(args: SelectSubset<T, Points_of_salesFindUniqueArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Points_of_sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Points_of_salesFindUniqueOrThrowArgs} args - Arguments to find a Points_of_sales
     * @example
     * // Get one Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Points_of_salesFindUniqueOrThrowArgs>(args: SelectSubset<T, Points_of_salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points_of_sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Points_of_salesFindFirstArgs} args - Arguments to find a Points_of_sales
     * @example
     * // Get one Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Points_of_salesFindFirstArgs>(args?: SelectSubset<T, Points_of_salesFindFirstArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points_of_sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Points_of_salesFindFirstOrThrowArgs} args - Arguments to find a Points_of_sales
     * @example
     * // Get one Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Points_of_salesFindFirstOrThrowArgs>(args?: SelectSubset<T, Points_of_salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points_of_sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Points_of_salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.findMany()
     * 
     * // Get first 10 Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.findMany({ take: 10 })
     * 
     * // Only select the `point_of_sales_id`
     * const points_of_salesWithPoint_of_sales_idOnly = await prisma.points_of_sales.findMany({ select: { point_of_sales_id: true } })
     * 
     */
    findMany<T extends Points_of_salesFindManyArgs>(args?: SelectSubset<T, Points_of_salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Points_of_sales.
     * @param {Points_of_salesCreateArgs} args - Arguments to create a Points_of_sales.
     * @example
     * // Create one Points_of_sales
     * const Points_of_sales = await prisma.points_of_sales.create({
     *   data: {
     *     // ... data to create a Points_of_sales
     *   }
     * })
     * 
     */
    create<T extends Points_of_salesCreateArgs>(args: SelectSubset<T, Points_of_salesCreateArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points_of_sales.
     * @param {Points_of_salesCreateManyArgs} args - Arguments to create many Points_of_sales.
     * @example
     * // Create many Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Points_of_salesCreateManyArgs>(args?: SelectSubset<T, Points_of_salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points_of_sales and returns the data saved in the database.
     * @param {Points_of_salesCreateManyAndReturnArgs} args - Arguments to create many Points_of_sales.
     * @example
     * // Create many Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points_of_sales and only return the `point_of_sales_id`
     * const points_of_salesWithPoint_of_sales_idOnly = await prisma.points_of_sales.createManyAndReturn({
     *   select: { point_of_sales_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Points_of_salesCreateManyAndReturnArgs>(args?: SelectSubset<T, Points_of_salesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Points_of_sales.
     * @param {Points_of_salesDeleteArgs} args - Arguments to delete one Points_of_sales.
     * @example
     * // Delete one Points_of_sales
     * const Points_of_sales = await prisma.points_of_sales.delete({
     *   where: {
     *     // ... filter to delete one Points_of_sales
     *   }
     * })
     * 
     */
    delete<T extends Points_of_salesDeleteArgs>(args: SelectSubset<T, Points_of_salesDeleteArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Points_of_sales.
     * @param {Points_of_salesUpdateArgs} args - Arguments to update one Points_of_sales.
     * @example
     * // Update one Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Points_of_salesUpdateArgs>(args: SelectSubset<T, Points_of_salesUpdateArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points_of_sales.
     * @param {Points_of_salesDeleteManyArgs} args - Arguments to filter Points_of_sales to delete.
     * @example
     * // Delete a few Points_of_sales
     * const { count } = await prisma.points_of_sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Points_of_salesDeleteManyArgs>(args?: SelectSubset<T, Points_of_salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points_of_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Points_of_salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Points_of_salesUpdateManyArgs>(args: SelectSubset<T, Points_of_salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points_of_sales and returns the data updated in the database.
     * @param {Points_of_salesUpdateManyAndReturnArgs} args - Arguments to update many Points_of_sales.
     * @example
     * // Update many Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points_of_sales and only return the `point_of_sales_id`
     * const points_of_salesWithPoint_of_sales_idOnly = await prisma.points_of_sales.updateManyAndReturn({
     *   select: { point_of_sales_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Points_of_salesUpdateManyAndReturnArgs>(args: SelectSubset<T, Points_of_salesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Points_of_sales.
     * @param {Points_of_salesUpsertArgs} args - Arguments to update or create a Points_of_sales.
     * @example
     * // Update or create a Points_of_sales
     * const points_of_sales = await prisma.points_of_sales.upsert({
     *   create: {
     *     // ... data to create a Points_of_sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Points_of_sales we want to update
     *   }
     * })
     */
    upsert<T extends Points_of_salesUpsertArgs>(args: SelectSubset<T, Points_of_salesUpsertArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points_of_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Points_of_salesCountArgs} args - Arguments to filter Points_of_sales to count.
     * @example
     * // Count the number of Points_of_sales
     * const count = await prisma.points_of_sales.count({
     *   where: {
     *     // ... the filter for the Points_of_sales we want to count
     *   }
     * })
    **/
    count<T extends Points_of_salesCountArgs>(
      args?: Subset<T, Points_of_salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Points_of_salesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Points_of_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Points_of_salesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Points_of_salesAggregateArgs>(args: Subset<T, Points_of_salesAggregateArgs>): Prisma.PrismaPromise<GetPoints_of_salesAggregateType<T>>

    /**
     * Group by Points_of_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Points_of_salesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Points_of_salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Points_of_salesGroupByArgs['orderBy'] }
        : { orderBy?: Points_of_salesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Points_of_salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoints_of_salesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Points_of_sales model
   */
  readonly fields: Points_of_salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Points_of_sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Points_of_salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends Points_of_sales$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Points_of_sales$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Points_of_sales$productsArgs<ExtArgs> = {}>(args?: Subset<T, Points_of_sales$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Points_of_sales model
   */
  interface Points_of_salesFieldRefs {
    readonly point_of_sales_id: FieldRef<"Points_of_sales", 'String'>
    readonly name: FieldRef<"Points_of_sales", 'String'>
    readonly address: FieldRef<"Points_of_sales", 'String'>
    readonly img: FieldRef<"Points_of_sales", 'String'>
    readonly created_at: FieldRef<"Points_of_sales", 'DateTime'>
    readonly last_update: FieldRef<"Points_of_sales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Points_of_sales findUnique
   */
  export type Points_of_salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * Filter, which Points_of_sales to fetch.
     */
    where: Points_of_salesWhereUniqueInput
  }

  /**
   * Points_of_sales findUniqueOrThrow
   */
  export type Points_of_salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * Filter, which Points_of_sales to fetch.
     */
    where: Points_of_salesWhereUniqueInput
  }

  /**
   * Points_of_sales findFirst
   */
  export type Points_of_salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * Filter, which Points_of_sales to fetch.
     */
    where?: Points_of_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points_of_sales to fetch.
     */
    orderBy?: Points_of_salesOrderByWithRelationInput | Points_of_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points_of_sales.
     */
    cursor?: Points_of_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points_of_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points_of_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points_of_sales.
     */
    distinct?: Points_of_salesScalarFieldEnum | Points_of_salesScalarFieldEnum[]
  }

  /**
   * Points_of_sales findFirstOrThrow
   */
  export type Points_of_salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * Filter, which Points_of_sales to fetch.
     */
    where?: Points_of_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points_of_sales to fetch.
     */
    orderBy?: Points_of_salesOrderByWithRelationInput | Points_of_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points_of_sales.
     */
    cursor?: Points_of_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points_of_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points_of_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points_of_sales.
     */
    distinct?: Points_of_salesScalarFieldEnum | Points_of_salesScalarFieldEnum[]
  }

  /**
   * Points_of_sales findMany
   */
  export type Points_of_salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * Filter, which Points_of_sales to fetch.
     */
    where?: Points_of_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points_of_sales to fetch.
     */
    orderBy?: Points_of_salesOrderByWithRelationInput | Points_of_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points_of_sales.
     */
    cursor?: Points_of_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points_of_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points_of_sales.
     */
    skip?: number
    distinct?: Points_of_salesScalarFieldEnum | Points_of_salesScalarFieldEnum[]
  }

  /**
   * Points_of_sales create
   */
  export type Points_of_salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * The data needed to create a Points_of_sales.
     */
    data: XOR<Points_of_salesCreateInput, Points_of_salesUncheckedCreateInput>
  }

  /**
   * Points_of_sales createMany
   */
  export type Points_of_salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points_of_sales.
     */
    data: Points_of_salesCreateManyInput | Points_of_salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Points_of_sales createManyAndReturn
   */
  export type Points_of_salesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * The data used to create many Points_of_sales.
     */
    data: Points_of_salesCreateManyInput | Points_of_salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Points_of_sales update
   */
  export type Points_of_salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * The data needed to update a Points_of_sales.
     */
    data: XOR<Points_of_salesUpdateInput, Points_of_salesUncheckedUpdateInput>
    /**
     * Choose, which Points_of_sales to update.
     */
    where: Points_of_salesWhereUniqueInput
  }

  /**
   * Points_of_sales updateMany
   */
  export type Points_of_salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points_of_sales.
     */
    data: XOR<Points_of_salesUpdateManyMutationInput, Points_of_salesUncheckedUpdateManyInput>
    /**
     * Filter which Points_of_sales to update
     */
    where?: Points_of_salesWhereInput
    /**
     * Limit how many Points_of_sales to update.
     */
    limit?: number
  }

  /**
   * Points_of_sales updateManyAndReturn
   */
  export type Points_of_salesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * The data used to update Points_of_sales.
     */
    data: XOR<Points_of_salesUpdateManyMutationInput, Points_of_salesUncheckedUpdateManyInput>
    /**
     * Filter which Points_of_sales to update
     */
    where?: Points_of_salesWhereInput
    /**
     * Limit how many Points_of_sales to update.
     */
    limit?: number
  }

  /**
   * Points_of_sales upsert
   */
  export type Points_of_salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * The filter to search for the Points_of_sales to update in case it exists.
     */
    where: Points_of_salesWhereUniqueInput
    /**
     * In case the Points_of_sales found by the `where` argument doesn't exist, create a new Points_of_sales with this data.
     */
    create: XOR<Points_of_salesCreateInput, Points_of_salesUncheckedCreateInput>
    /**
     * In case the Points_of_sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Points_of_salesUpdateInput, Points_of_salesUncheckedUpdateInput>
  }

  /**
   * Points_of_sales delete
   */
  export type Points_of_salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
    /**
     * Filter which Points_of_sales to delete.
     */
    where: Points_of_salesWhereUniqueInput
  }

  /**
   * Points_of_sales deleteMany
   */
  export type Points_of_salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points_of_sales to delete
     */
    where?: Points_of_salesWhereInput
    /**
     * Limit how many Points_of_sales to delete.
     */
    limit?: number
  }

  /**
   * Points_of_sales.employees
   */
  export type Points_of_sales$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    cursor?: EmployeesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Points_of_sales.products
   */
  export type Points_of_sales$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Points_of_sales without action
   */
  export type Points_of_salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points_of_sales
     */
    select?: Points_of_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points_of_sales
     */
    omit?: Points_of_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Points_of_salesInclude<ExtArgs> | null
  }


  /**
   * Model Products_categories
   */

  export type AggregateProducts_categories = {
    _count: Products_categoriesCountAggregateOutputType | null
    _min: Products_categoriesMinAggregateOutputType | null
    _max: Products_categoriesMaxAggregateOutputType | null
  }

  export type Products_categoriesMinAggregateOutputType = {
    products_categories_id: string | null
    name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Products_categoriesMaxAggregateOutputType = {
    products_categories_id: string | null
    name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Products_categoriesCountAggregateOutputType = {
    products_categories_id: number
    name: number
    created_at: number
    last_update: number
    _all: number
  }


  export type Products_categoriesMinAggregateInputType = {
    products_categories_id?: true
    name?: true
    created_at?: true
    last_update?: true
  }

  export type Products_categoriesMaxAggregateInputType = {
    products_categories_id?: true
    name?: true
    created_at?: true
    last_update?: true
  }

  export type Products_categoriesCountAggregateInputType = {
    products_categories_id?: true
    name?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type Products_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_categories to aggregate.
     */
    where?: Products_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_categories to fetch.
     */
    orderBy?: Products_categoriesOrderByWithRelationInput | Products_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Products_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products_categories
    **/
    _count?: true | Products_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_categoriesMaxAggregateInputType
  }

  export type GetProducts_categoriesAggregateType<T extends Products_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_categories[P]>
      : GetScalarType<T[P], AggregateProducts_categories[P]>
  }




  export type Products_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_categoriesWhereInput
    orderBy?: Products_categoriesOrderByWithAggregationInput | Products_categoriesOrderByWithAggregationInput[]
    by: Products_categoriesScalarFieldEnum[] | Products_categoriesScalarFieldEnum
    having?: Products_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_categoriesCountAggregateInputType | true
    _min?: Products_categoriesMinAggregateInputType
    _max?: Products_categoriesMaxAggregateInputType
  }

  export type Products_categoriesGroupByOutputType = {
    products_categories_id: string
    name: string
    created_at: Date
    last_update: Date
    _count: Products_categoriesCountAggregateOutputType | null
    _min: Products_categoriesMinAggregateOutputType | null
    _max: Products_categoriesMaxAggregateOutputType | null
  }

  type GetProducts_categoriesGroupByPayload<T extends Products_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Products_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type Products_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    products_categories_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
    products?: boolean | Products_categories$productsArgs<ExtArgs>
    _count?: boolean | Products_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_categories"]>

  export type Products_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    products_categories_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["products_categories"]>

  export type Products_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    products_categories_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["products_categories"]>

  export type Products_categoriesSelectScalar = {
    products_categories_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type Products_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"products_categories_id" | "name" | "created_at" | "last_update", ExtArgs["result"]["products_categories"]>
  export type Products_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Products_categories$productsArgs<ExtArgs>
    _count?: boolean | Products_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Products_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Products_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Products_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products_categories"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      products_categories_id: string
      name: string
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["products_categories"]>
    composites: {}
  }

  type Products_categoriesGetPayload<S extends boolean | null | undefined | Products_categoriesDefaultArgs> = $Result.GetResult<Prisma.$Products_categoriesPayload, S>

  type Products_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Products_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Products_categoriesCountAggregateInputType | true
    }

  export interface Products_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products_categories'], meta: { name: 'Products_categories' } }
    /**
     * Find zero or one Products_categories that matches the filter.
     * @param {Products_categoriesFindUniqueArgs} args - Arguments to find a Products_categories
     * @example
     * // Get one Products_categories
     * const products_categories = await prisma.products_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Products_categoriesFindUniqueArgs>(args: SelectSubset<T, Products_categoriesFindUniqueArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Products_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Products_categories
     * @example
     * // Get one Products_categories
     * const products_categories = await prisma.products_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Products_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, Products_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_categoriesFindFirstArgs} args - Arguments to find a Products_categories
     * @example
     * // Get one Products_categories
     * const products_categories = await prisma.products_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Products_categoriesFindFirstArgs>(args?: SelectSubset<T, Products_categoriesFindFirstArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_categoriesFindFirstOrThrowArgs} args - Arguments to find a Products_categories
     * @example
     * // Get one Products_categories
     * const products_categories = await prisma.products_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Products_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, Products_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_categories
     * const products_categories = await prisma.products_categories.findMany()
     * 
     * // Get first 10 Products_categories
     * const products_categories = await prisma.products_categories.findMany({ take: 10 })
     * 
     * // Only select the `products_categories_id`
     * const products_categoriesWithProducts_categories_idOnly = await prisma.products_categories.findMany({ select: { products_categories_id: true } })
     * 
     */
    findMany<T extends Products_categoriesFindManyArgs>(args?: SelectSubset<T, Products_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products_categories.
     * @param {Products_categoriesCreateArgs} args - Arguments to create a Products_categories.
     * @example
     * // Create one Products_categories
     * const Products_categories = await prisma.products_categories.create({
     *   data: {
     *     // ... data to create a Products_categories
     *   }
     * })
     * 
     */
    create<T extends Products_categoriesCreateArgs>(args: SelectSubset<T, Products_categoriesCreateArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products_categories.
     * @param {Products_categoriesCreateManyArgs} args - Arguments to create many Products_categories.
     * @example
     * // Create many Products_categories
     * const products_categories = await prisma.products_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Products_categoriesCreateManyArgs>(args?: SelectSubset<T, Products_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products_categories and returns the data saved in the database.
     * @param {Products_categoriesCreateManyAndReturnArgs} args - Arguments to create many Products_categories.
     * @example
     * // Create many Products_categories
     * const products_categories = await prisma.products_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products_categories and only return the `products_categories_id`
     * const products_categoriesWithProducts_categories_idOnly = await prisma.products_categories.createManyAndReturn({
     *   select: { products_categories_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Products_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, Products_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products_categories.
     * @param {Products_categoriesDeleteArgs} args - Arguments to delete one Products_categories.
     * @example
     * // Delete one Products_categories
     * const Products_categories = await prisma.products_categories.delete({
     *   where: {
     *     // ... filter to delete one Products_categories
     *   }
     * })
     * 
     */
    delete<T extends Products_categoriesDeleteArgs>(args: SelectSubset<T, Products_categoriesDeleteArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products_categories.
     * @param {Products_categoriesUpdateArgs} args - Arguments to update one Products_categories.
     * @example
     * // Update one Products_categories
     * const products_categories = await prisma.products_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Products_categoriesUpdateArgs>(args: SelectSubset<T, Products_categoriesUpdateArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products_categories.
     * @param {Products_categoriesDeleteManyArgs} args - Arguments to filter Products_categories to delete.
     * @example
     * // Delete a few Products_categories
     * const { count } = await prisma.products_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Products_categoriesDeleteManyArgs>(args?: SelectSubset<T, Products_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_categories
     * const products_categories = await prisma.products_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Products_categoriesUpdateManyArgs>(args: SelectSubset<T, Products_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_categories and returns the data updated in the database.
     * @param {Products_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Products_categories.
     * @example
     * // Update many Products_categories
     * const products_categories = await prisma.products_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products_categories and only return the `products_categories_id`
     * const products_categoriesWithProducts_categories_idOnly = await prisma.products_categories.updateManyAndReturn({
     *   select: { products_categories_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Products_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, Products_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products_categories.
     * @param {Products_categoriesUpsertArgs} args - Arguments to update or create a Products_categories.
     * @example
     * // Update or create a Products_categories
     * const products_categories = await prisma.products_categories.upsert({
     *   create: {
     *     // ... data to create a Products_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_categories we want to update
     *   }
     * })
     */
    upsert<T extends Products_categoriesUpsertArgs>(args: SelectSubset<T, Products_categoriesUpsertArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_categoriesCountArgs} args - Arguments to filter Products_categories to count.
     * @example
     * // Count the number of Products_categories
     * const count = await prisma.products_categories.count({
     *   where: {
     *     // ... the filter for the Products_categories we want to count
     *   }
     * })
    **/
    count<T extends Products_categoriesCountArgs>(
      args?: Subset<T, Products_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Products_categoriesAggregateArgs>(args: Subset<T, Products_categoriesAggregateArgs>): Prisma.PrismaPromise<GetProducts_categoriesAggregateType<T>>

    /**
     * Group by Products_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Products_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Products_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: Products_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Products_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products_categories model
   */
  readonly fields: Products_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Products_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Products_categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, Products_categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products_categories model
   */
  interface Products_categoriesFieldRefs {
    readonly products_categories_id: FieldRef<"Products_categories", 'String'>
    readonly name: FieldRef<"Products_categories", 'String'>
    readonly created_at: FieldRef<"Products_categories", 'DateTime'>
    readonly last_update: FieldRef<"Products_categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products_categories findUnique
   */
  export type Products_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Products_categories to fetch.
     */
    where: Products_categoriesWhereUniqueInput
  }

  /**
   * Products_categories findUniqueOrThrow
   */
  export type Products_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Products_categories to fetch.
     */
    where: Products_categoriesWhereUniqueInput
  }

  /**
   * Products_categories findFirst
   */
  export type Products_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Products_categories to fetch.
     */
    where?: Products_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_categories to fetch.
     */
    orderBy?: Products_categoriesOrderByWithRelationInput | Products_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_categories.
     */
    cursor?: Products_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_categories.
     */
    distinct?: Products_categoriesScalarFieldEnum | Products_categoriesScalarFieldEnum[]
  }

  /**
   * Products_categories findFirstOrThrow
   */
  export type Products_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Products_categories to fetch.
     */
    where?: Products_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_categories to fetch.
     */
    orderBy?: Products_categoriesOrderByWithRelationInput | Products_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_categories.
     */
    cursor?: Products_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_categories.
     */
    distinct?: Products_categoriesScalarFieldEnum | Products_categoriesScalarFieldEnum[]
  }

  /**
   * Products_categories findMany
   */
  export type Products_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which Products_categories to fetch.
     */
    where?: Products_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_categories to fetch.
     */
    orderBy?: Products_categoriesOrderByWithRelationInput | Products_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products_categories.
     */
    cursor?: Products_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_categories.
     */
    skip?: number
    distinct?: Products_categoriesScalarFieldEnum | Products_categoriesScalarFieldEnum[]
  }

  /**
   * Products_categories create
   */
  export type Products_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Products_categories.
     */
    data: XOR<Products_categoriesCreateInput, Products_categoriesUncheckedCreateInput>
  }

  /**
   * Products_categories createMany
   */
  export type Products_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products_categories.
     */
    data: Products_categoriesCreateManyInput | Products_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products_categories createManyAndReturn
   */
  export type Products_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Products_categories.
     */
    data: Products_categoriesCreateManyInput | Products_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products_categories update
   */
  export type Products_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Products_categories.
     */
    data: XOR<Products_categoriesUpdateInput, Products_categoriesUncheckedUpdateInput>
    /**
     * Choose, which Products_categories to update.
     */
    where: Products_categoriesWhereUniqueInput
  }

  /**
   * Products_categories updateMany
   */
  export type Products_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products_categories.
     */
    data: XOR<Products_categoriesUpdateManyMutationInput, Products_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which Products_categories to update
     */
    where?: Products_categoriesWhereInput
    /**
     * Limit how many Products_categories to update.
     */
    limit?: number
  }

  /**
   * Products_categories updateManyAndReturn
   */
  export type Products_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update Products_categories.
     */
    data: XOR<Products_categoriesUpdateManyMutationInput, Products_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which Products_categories to update
     */
    where?: Products_categoriesWhereInput
    /**
     * Limit how many Products_categories to update.
     */
    limit?: number
  }

  /**
   * Products_categories upsert
   */
  export type Products_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Products_categories to update in case it exists.
     */
    where: Products_categoriesWhereUniqueInput
    /**
     * In case the Products_categories found by the `where` argument doesn't exist, create a new Products_categories with this data.
     */
    create: XOR<Products_categoriesCreateInput, Products_categoriesUncheckedCreateInput>
    /**
     * In case the Products_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Products_categoriesUpdateInput, Products_categoriesUncheckedUpdateInput>
  }

  /**
   * Products_categories delete
   */
  export type Products_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
    /**
     * Filter which Products_categories to delete.
     */
    where: Products_categoriesWhereUniqueInput
  }

  /**
   * Products_categories deleteMany
   */
  export type Products_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_categories to delete
     */
    where?: Products_categoriesWhereInput
    /**
     * Limit how many Products_categories to delete.
     */
    limit?: number
  }

  /**
   * Products_categories.products
   */
  export type Products_categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products_categories without action
   */
  export type Products_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_categories
     */
    select?: Products_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_categories
     */
    omit?: Products_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model Providers
   */

  export type AggregateProviders = {
    _count: ProvidersCountAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  export type ProvidersMinAggregateOutputType = {
    provider_id: string | null
    name: string | null
    phone_number: string | null
    email: string | null
    img: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type ProvidersMaxAggregateOutputType = {
    provider_id: string | null
    name: string | null
    phone_number: string | null
    email: string | null
    img: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type ProvidersCountAggregateOutputType = {
    provider_id: number
    name: number
    phone_number: number
    email: number
    img: number
    created_at: number
    last_update: number
    _all: number
  }


  export type ProvidersMinAggregateInputType = {
    provider_id?: true
    name?: true
    phone_number?: true
    email?: true
    img?: true
    created_at?: true
    last_update?: true
  }

  export type ProvidersMaxAggregateInputType = {
    provider_id?: true
    name?: true
    phone_number?: true
    email?: true
    img?: true
    created_at?: true
    last_update?: true
  }

  export type ProvidersCountAggregateInputType = {
    provider_id?: true
    name?: true
    phone_number?: true
    email?: true
    img?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type ProvidersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to aggregate.
     */
    where?: ProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProvidersOrderByWithRelationInput | ProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProvidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvidersMaxAggregateInputType
  }

  export type GetProvidersAggregateType<T extends ProvidersAggregateArgs> = {
        [P in keyof T & keyof AggregateProviders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviders[P]>
      : GetScalarType<T[P], AggregateProviders[P]>
  }




  export type ProvidersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvidersWhereInput
    orderBy?: ProvidersOrderByWithAggregationInput | ProvidersOrderByWithAggregationInput[]
    by: ProvidersScalarFieldEnum[] | ProvidersScalarFieldEnum
    having?: ProvidersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvidersCountAggregateInputType | true
    _min?: ProvidersMinAggregateInputType
    _max?: ProvidersMaxAggregateInputType
  }

  export type ProvidersGroupByOutputType = {
    provider_id: string
    name: string
    phone_number: string
    email: string | null
    img: string | null
    created_at: Date
    last_update: Date
    _count: ProvidersCountAggregateOutputType | null
    _min: ProvidersMinAggregateOutputType | null
    _max: ProvidersMaxAggregateOutputType | null
  }

  type GetProvidersGroupByPayload<T extends ProvidersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvidersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvidersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
            : GetScalarType<T[P], ProvidersGroupByOutputType[P]>
        }
      >
    >


  export type ProvidersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    phone_number?: boolean
    email?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
    products?: boolean | Providers$productsArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providers"]>

  export type ProvidersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    phone_number?: boolean
    email?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["providers"]>

  export type ProvidersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    provider_id?: boolean
    name?: boolean
    phone_number?: boolean
    email?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["providers"]>

  export type ProvidersSelectScalar = {
    provider_id?: boolean
    name?: boolean
    phone_number?: boolean
    email?: boolean
    img?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type ProvidersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"provider_id" | "name" | "phone_number" | "email" | "img" | "created_at" | "last_update", ExtArgs["result"]["providers"]>
  export type ProvidersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Providers$productsArgs<ExtArgs>
    _count?: boolean | ProvidersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvidersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProvidersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProvidersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Providers"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      provider_id: string
      name: string
      phone_number: string
      email: string | null
      img: string | null
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["providers"]>
    composites: {}
  }

  type ProvidersGetPayload<S extends boolean | null | undefined | ProvidersDefaultArgs> = $Result.GetResult<Prisma.$ProvidersPayload, S>

  type ProvidersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProvidersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProvidersCountAggregateInputType | true
    }

  export interface ProvidersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Providers'], meta: { name: 'Providers' } }
    /**
     * Find zero or one Providers that matches the filter.
     * @param {ProvidersFindUniqueArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvidersFindUniqueArgs>(args: SelectSubset<T, ProvidersFindUniqueArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Providers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProvidersFindUniqueOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvidersFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvidersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersFindFirstArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvidersFindFirstArgs>(args?: SelectSubset<T, ProvidersFindFirstArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Providers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersFindFirstOrThrowArgs} args - Arguments to find a Providers
     * @example
     * // Get one Providers
     * const providers = await prisma.providers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvidersFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvidersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.providers.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.providers.findMany({ take: 10 })
     * 
     * // Only select the `provider_id`
     * const providersWithProvider_idOnly = await prisma.providers.findMany({ select: { provider_id: true } })
     * 
     */
    findMany<T extends ProvidersFindManyArgs>(args?: SelectSubset<T, ProvidersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Providers.
     * @param {ProvidersCreateArgs} args - Arguments to create a Providers.
     * @example
     * // Create one Providers
     * const Providers = await prisma.providers.create({
     *   data: {
     *     // ... data to create a Providers
     *   }
     * })
     * 
     */
    create<T extends ProvidersCreateArgs>(args: SelectSubset<T, ProvidersCreateArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProvidersCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const providers = await prisma.providers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvidersCreateManyArgs>(args?: SelectSubset<T, ProvidersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProvidersCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const providers = await prisma.providers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `provider_id`
     * const providersWithProvider_idOnly = await prisma.providers.createManyAndReturn({
     *   select: { provider_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvidersCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvidersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Providers.
     * @param {ProvidersDeleteArgs} args - Arguments to delete one Providers.
     * @example
     * // Delete one Providers
     * const Providers = await prisma.providers.delete({
     *   where: {
     *     // ... filter to delete one Providers
     *   }
     * })
     * 
     */
    delete<T extends ProvidersDeleteArgs>(args: SelectSubset<T, ProvidersDeleteArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Providers.
     * @param {ProvidersUpdateArgs} args - Arguments to update one Providers.
     * @example
     * // Update one Providers
     * const providers = await prisma.providers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvidersUpdateArgs>(args: SelectSubset<T, ProvidersUpdateArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProvidersDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.providers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvidersDeleteManyArgs>(args?: SelectSubset<T, ProvidersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvidersUpdateManyArgs>(args: SelectSubset<T, ProvidersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProvidersUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const providers = await prisma.providers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `provider_id`
     * const providersWithProvider_idOnly = await prisma.providers.updateManyAndReturn({
     *   select: { provider_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProvidersUpdateManyAndReturnArgs>(args: SelectSubset<T, ProvidersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Providers.
     * @param {ProvidersUpsertArgs} args - Arguments to update or create a Providers.
     * @example
     * // Update or create a Providers
     * const providers = await prisma.providers.upsert({
     *   create: {
     *     // ... data to create a Providers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Providers we want to update
     *   }
     * })
     */
    upsert<T extends ProvidersUpsertArgs>(args: SelectSubset<T, ProvidersUpsertArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.providers.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProvidersCountArgs>(
      args?: Subset<T, ProvidersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProvidersAggregateArgs>(args: Subset<T, ProvidersAggregateArgs>): Prisma.PrismaPromise<GetProvidersAggregateType<T>>

    /**
     * Group by Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvidersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProvidersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvidersGroupByArgs['orderBy'] }
        : { orderBy?: ProvidersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProvidersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvidersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Providers model
   */
  readonly fields: ProvidersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Providers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvidersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Providers$productsArgs<ExtArgs> = {}>(args?: Subset<T, Providers$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Providers model
   */
  interface ProvidersFieldRefs {
    readonly provider_id: FieldRef<"Providers", 'String'>
    readonly name: FieldRef<"Providers", 'String'>
    readonly phone_number: FieldRef<"Providers", 'String'>
    readonly email: FieldRef<"Providers", 'String'>
    readonly img: FieldRef<"Providers", 'String'>
    readonly created_at: FieldRef<"Providers", 'DateTime'>
    readonly last_update: FieldRef<"Providers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Providers findUnique
   */
  export type ProvidersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where: ProvidersWhereUniqueInput
  }

  /**
   * Providers findUniqueOrThrow
   */
  export type ProvidersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where: ProvidersWhereUniqueInput
  }

  /**
   * Providers findFirst
   */
  export type ProvidersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProvidersOrderByWithRelationInput | ProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * Providers findFirstOrThrow
   */
  export type ProvidersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProvidersOrderByWithRelationInput | ProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * Providers findMany
   */
  export type ProvidersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProvidersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProvidersOrderByWithRelationInput | ProvidersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProvidersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProvidersScalarFieldEnum | ProvidersScalarFieldEnum[]
  }

  /**
   * Providers create
   */
  export type ProvidersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * The data needed to create a Providers.
     */
    data: XOR<ProvidersCreateInput, ProvidersUncheckedCreateInput>
  }

  /**
   * Providers createMany
   */
  export type ProvidersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProvidersCreateManyInput | ProvidersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Providers createManyAndReturn
   */
  export type ProvidersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProvidersCreateManyInput | ProvidersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Providers update
   */
  export type ProvidersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * The data needed to update a Providers.
     */
    data: XOR<ProvidersUpdateInput, ProvidersUncheckedUpdateInput>
    /**
     * Choose, which Providers to update.
     */
    where: ProvidersWhereUniqueInput
  }

  /**
   * Providers updateMany
   */
  export type ProvidersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProvidersUpdateManyMutationInput, ProvidersUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProvidersWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Providers updateManyAndReturn
   */
  export type ProvidersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProvidersUpdateManyMutationInput, ProvidersUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProvidersWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Providers upsert
   */
  export type ProvidersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * The filter to search for the Providers to update in case it exists.
     */
    where: ProvidersWhereUniqueInput
    /**
     * In case the Providers found by the `where` argument doesn't exist, create a new Providers with this data.
     */
    create: XOR<ProvidersCreateInput, ProvidersUncheckedCreateInput>
    /**
     * In case the Providers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvidersUpdateInput, ProvidersUncheckedUpdateInput>
  }

  /**
   * Providers delete
   */
  export type ProvidersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
    /**
     * Filter which Providers to delete.
     */
    where: ProvidersWhereUniqueInput
  }

  /**
   * Providers deleteMany
   */
  export type ProvidersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProvidersWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Providers.products
   */
  export type Providers$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Providers without action
   */
  export type ProvidersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Providers
     */
    select?: ProvidersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Providers
     */
    omit?: ProvidersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvidersInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    purchase_price: Decimal | null
    stock_quantity: number | null
    amount: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    purchase_price: Decimal | null
    stock_quantity: number | null
    amount: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: string | null
    branch: string | null
    model: string | null
    description: string | null
    purchase_price: Decimal | null
    stock_quantity: number | null
    amount: Decimal | null
    purchase_date: Date | null
    category_name: string | null
    provider_name: string | null
    pos_name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: string | null
    branch: string | null
    model: string | null
    description: string | null
    purchase_price: Decimal | null
    stock_quantity: number | null
    amount: Decimal | null
    purchase_date: Date | null
    category_name: string | null
    provider_name: string | null
    pos_name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    branch: number
    model: number
    description: number
    purchase_price: number
    stock_quantity: number
    amount: number
    purchase_date: number
    category_name: number
    provider_name: number
    pos_name: number
    created_at: number
    last_update: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    purchase_price?: true
    stock_quantity?: true
    amount?: true
  }

  export type ProductsSumAggregateInputType = {
    purchase_price?: true
    stock_quantity?: true
    amount?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    branch?: true
    model?: true
    description?: true
    purchase_price?: true
    stock_quantity?: true
    amount?: true
    purchase_date?: true
    category_name?: true
    provider_name?: true
    pos_name?: true
    created_at?: true
    last_update?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    branch?: true
    model?: true
    description?: true
    purchase_price?: true
    stock_quantity?: true
    amount?: true
    purchase_date?: true
    category_name?: true
    provider_name?: true
    pos_name?: true
    created_at?: true
    last_update?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    branch?: true
    model?: true
    description?: true
    purchase_price?: true
    stock_quantity?: true
    amount?: true
    purchase_date?: true
    category_name?: true
    provider_name?: true
    pos_name?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal
    stock_quantity: number
    amount: Decimal
    purchase_date: Date
    category_name: string
    provider_name: string
    pos_name: string
    created_at: Date
    last_update: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    branch?: boolean
    model?: boolean
    description?: boolean
    purchase_price?: boolean
    stock_quantity?: boolean
    amount?: boolean
    purchase_date?: boolean
    category_name?: boolean
    provider_name?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
    category?: boolean | Products_categoriesDefaultArgs<ExtArgs>
    points_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    provider?: boolean | ProvidersDefaultArgs<ExtArgs>
    img?: boolean | Products$imgArgs<ExtArgs>
    products_purchases?: boolean | Products$products_purchasesArgs<ExtArgs>
    products_sales?: boolean | Products$products_salesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    branch?: boolean
    model?: boolean
    description?: boolean
    purchase_price?: boolean
    stock_quantity?: boolean
    amount?: boolean
    purchase_date?: boolean
    category_name?: boolean
    provider_name?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
    category?: boolean | Products_categoriesDefaultArgs<ExtArgs>
    points_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    provider?: boolean | ProvidersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    branch?: boolean
    model?: boolean
    description?: boolean
    purchase_price?: boolean
    stock_quantity?: boolean
    amount?: boolean
    purchase_date?: boolean
    category_name?: boolean
    provider_name?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
    category?: boolean | Products_categoriesDefaultArgs<ExtArgs>
    points_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    provider?: boolean | ProvidersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    product_id?: boolean
    branch?: boolean
    model?: boolean
    description?: boolean
    purchase_price?: boolean
    stock_quantity?: boolean
    amount?: boolean
    purchase_date?: boolean
    category_name?: boolean
    provider_name?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "branch" | "model" | "description" | "purchase_price" | "stock_quantity" | "amount" | "purchase_date" | "category_name" | "provider_name" | "pos_name" | "created_at" | "last_update", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Products_categoriesDefaultArgs<ExtArgs>
    points_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    provider?: boolean | ProvidersDefaultArgs<ExtArgs>
    img?: boolean | Products$imgArgs<ExtArgs>
    products_purchases?: boolean | Products$products_purchasesArgs<ExtArgs>
    products_sales?: boolean | Products$products_salesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Products_categoriesDefaultArgs<ExtArgs>
    points_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    provider?: boolean | ProvidersDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Products_categoriesDefaultArgs<ExtArgs>
    points_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    provider?: boolean | ProvidersDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      category: Prisma.$Products_categoriesPayload<ExtArgs>
      points_of_sales: Prisma.$Points_of_salesPayload<ExtArgs>
      provider: Prisma.$ProvidersPayload<ExtArgs>
      img: Prisma.$Products_imagesPayload<ExtArgs>[]
      products_purchases: Prisma.$Products_purchasesPayload<ExtArgs>[]
      products_sales: Prisma.$Products_salesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: string
      branch: string
      model: string
      description: string
      purchase_price: Prisma.Decimal
      stock_quantity: number
      amount: Prisma.Decimal
      purchase_date: Date
      category_name: string
      provider_name: string
      pos_name: string
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Products_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Products_categoriesDefaultArgs<ExtArgs>>): Prisma__Products_categoriesClient<$Result.GetResult<Prisma.$Products_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    points_of_sales<T extends Points_of_salesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Points_of_salesDefaultArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends ProvidersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvidersDefaultArgs<ExtArgs>>): Prisma__ProvidersClient<$Result.GetResult<Prisma.$ProvidersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    img<T extends Products$imgArgs<ExtArgs> = {}>(args?: Subset<T, Products$imgArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products_purchases<T extends Products$products_purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Products$products_purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products_sales<T extends Products$products_salesArgs<ExtArgs> = {}>(args?: Subset<T, Products$products_salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly product_id: FieldRef<"Products", 'String'>
    readonly branch: FieldRef<"Products", 'String'>
    readonly model: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly purchase_price: FieldRef<"Products", 'Decimal'>
    readonly stock_quantity: FieldRef<"Products", 'Int'>
    readonly amount: FieldRef<"Products", 'Decimal'>
    readonly purchase_date: FieldRef<"Products", 'DateTime'>
    readonly category_name: FieldRef<"Products", 'String'>
    readonly provider_name: FieldRef<"Products", 'String'>
    readonly pos_name: FieldRef<"Products", 'String'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly last_update: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.img
   */
  export type Products$imgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    where?: Products_imagesWhereInput
    orderBy?: Products_imagesOrderByWithRelationInput | Products_imagesOrderByWithRelationInput[]
    cursor?: Products_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_imagesScalarFieldEnum | Products_imagesScalarFieldEnum[]
  }

  /**
   * Products.products_purchases
   */
  export type Products$products_purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    where?: Products_purchasesWhereInput
    orderBy?: Products_purchasesOrderByWithRelationInput | Products_purchasesOrderByWithRelationInput[]
    cursor?: Products_purchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_purchasesScalarFieldEnum | Products_purchasesScalarFieldEnum[]
  }

  /**
   * Products.products_sales
   */
  export type Products$products_salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    where?: Products_salesWhereInput
    orderBy?: Products_salesOrderByWithRelationInput | Products_salesOrderByWithRelationInput[]
    cursor?: Products_salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_salesScalarFieldEnum | Products_salesScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Products_images
   */

  export type AggregateProducts_images = {
    _count: Products_imagesCountAggregateOutputType | null
    _min: Products_imagesMinAggregateOutputType | null
    _max: Products_imagesMaxAggregateOutputType | null
  }

  export type Products_imagesMinAggregateOutputType = {
    id: string | null
    image_original_key: string | null
    image_thumb_key: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Products_imagesMaxAggregateOutputType = {
    id: string | null
    image_original_key: string | null
    image_thumb_key: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Products_imagesCountAggregateOutputType = {
    id: number
    image_original_key: number
    image_thumb_key: number
    created_at: number
    last_update: number
    _all: number
  }


  export type Products_imagesMinAggregateInputType = {
    id?: true
    image_original_key?: true
    image_thumb_key?: true
    created_at?: true
    last_update?: true
  }

  export type Products_imagesMaxAggregateInputType = {
    id?: true
    image_original_key?: true
    image_thumb_key?: true
    created_at?: true
    last_update?: true
  }

  export type Products_imagesCountAggregateInputType = {
    id?: true
    image_original_key?: true
    image_thumb_key?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type Products_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_images to aggregate.
     */
    where?: Products_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_images to fetch.
     */
    orderBy?: Products_imagesOrderByWithRelationInput | Products_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Products_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products_images
    **/
    _count?: true | Products_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_imagesMaxAggregateInputType
  }

  export type GetProducts_imagesAggregateType<T extends Products_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_images[P]>
      : GetScalarType<T[P], AggregateProducts_images[P]>
  }




  export type Products_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_imagesWhereInput
    orderBy?: Products_imagesOrderByWithAggregationInput | Products_imagesOrderByWithAggregationInput[]
    by: Products_imagesScalarFieldEnum[] | Products_imagesScalarFieldEnum
    having?: Products_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_imagesCountAggregateInputType | true
    _min?: Products_imagesMinAggregateInputType
    _max?: Products_imagesMaxAggregateInputType
  }

  export type Products_imagesGroupByOutputType = {
    id: string
    image_original_key: string
    image_thumb_key: string
    created_at: Date
    last_update: Date
    _count: Products_imagesCountAggregateOutputType | null
    _min: Products_imagesMinAggregateOutputType | null
    _max: Products_imagesMaxAggregateOutputType | null
  }

  type GetProducts_imagesGroupByPayload<T extends Products_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Products_imagesGroupByOutputType[P]>
        }
      >
    >


  export type Products_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_original_key?: boolean
    image_thumb_key?: boolean
    created_at?: boolean
    last_update?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_images"]>

  export type Products_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_original_key?: boolean
    image_thumb_key?: boolean
    created_at?: boolean
    last_update?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_images"]>

  export type Products_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_original_key?: boolean
    image_thumb_key?: boolean
    created_at?: boolean
    last_update?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_images"]>

  export type Products_imagesSelectScalar = {
    id?: boolean
    image_original_key?: boolean
    image_thumb_key?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type Products_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_original_key" | "image_thumb_key" | "created_at" | "last_update", ExtArgs["result"]["products_images"]>
  export type Products_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type Products_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type Products_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $Products_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products_images"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image_original_key: string
      image_thumb_key: string
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["products_images"]>
    composites: {}
  }

  type Products_imagesGetPayload<S extends boolean | null | undefined | Products_imagesDefaultArgs> = $Result.GetResult<Prisma.$Products_imagesPayload, S>

  type Products_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Products_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Products_imagesCountAggregateInputType | true
    }

  export interface Products_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products_images'], meta: { name: 'Products_images' } }
    /**
     * Find zero or one Products_images that matches the filter.
     * @param {Products_imagesFindUniqueArgs} args - Arguments to find a Products_images
     * @example
     * // Get one Products_images
     * const products_images = await prisma.products_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Products_imagesFindUniqueArgs>(args: SelectSubset<T, Products_imagesFindUniqueArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Products_imagesFindUniqueOrThrowArgs} args - Arguments to find a Products_images
     * @example
     * // Get one Products_images
     * const products_images = await prisma.products_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Products_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, Products_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_imagesFindFirstArgs} args - Arguments to find a Products_images
     * @example
     * // Get one Products_images
     * const products_images = await prisma.products_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Products_imagesFindFirstArgs>(args?: SelectSubset<T, Products_imagesFindFirstArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_imagesFindFirstOrThrowArgs} args - Arguments to find a Products_images
     * @example
     * // Get one Products_images
     * const products_images = await prisma.products_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Products_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, Products_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_images
     * const products_images = await prisma.products_images.findMany()
     * 
     * // Get first 10 Products_images
     * const products_images = await prisma.products_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const products_imagesWithIdOnly = await prisma.products_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Products_imagesFindManyArgs>(args?: SelectSubset<T, Products_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products_images.
     * @param {Products_imagesCreateArgs} args - Arguments to create a Products_images.
     * @example
     * // Create one Products_images
     * const Products_images = await prisma.products_images.create({
     *   data: {
     *     // ... data to create a Products_images
     *   }
     * })
     * 
     */
    create<T extends Products_imagesCreateArgs>(args: SelectSubset<T, Products_imagesCreateArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products_images.
     * @param {Products_imagesCreateManyArgs} args - Arguments to create many Products_images.
     * @example
     * // Create many Products_images
     * const products_images = await prisma.products_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Products_imagesCreateManyArgs>(args?: SelectSubset<T, Products_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products_images and returns the data saved in the database.
     * @param {Products_imagesCreateManyAndReturnArgs} args - Arguments to create many Products_images.
     * @example
     * // Create many Products_images
     * const products_images = await prisma.products_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products_images and only return the `id`
     * const products_imagesWithIdOnly = await prisma.products_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Products_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, Products_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products_images.
     * @param {Products_imagesDeleteArgs} args - Arguments to delete one Products_images.
     * @example
     * // Delete one Products_images
     * const Products_images = await prisma.products_images.delete({
     *   where: {
     *     // ... filter to delete one Products_images
     *   }
     * })
     * 
     */
    delete<T extends Products_imagesDeleteArgs>(args: SelectSubset<T, Products_imagesDeleteArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products_images.
     * @param {Products_imagesUpdateArgs} args - Arguments to update one Products_images.
     * @example
     * // Update one Products_images
     * const products_images = await prisma.products_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Products_imagesUpdateArgs>(args: SelectSubset<T, Products_imagesUpdateArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products_images.
     * @param {Products_imagesDeleteManyArgs} args - Arguments to filter Products_images to delete.
     * @example
     * // Delete a few Products_images
     * const { count } = await prisma.products_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Products_imagesDeleteManyArgs>(args?: SelectSubset<T, Products_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_images
     * const products_images = await prisma.products_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Products_imagesUpdateManyArgs>(args: SelectSubset<T, Products_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_images and returns the data updated in the database.
     * @param {Products_imagesUpdateManyAndReturnArgs} args - Arguments to update many Products_images.
     * @example
     * // Update many Products_images
     * const products_images = await prisma.products_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products_images and only return the `id`
     * const products_imagesWithIdOnly = await prisma.products_images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Products_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, Products_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products_images.
     * @param {Products_imagesUpsertArgs} args - Arguments to update or create a Products_images.
     * @example
     * // Update or create a Products_images
     * const products_images = await prisma.products_images.upsert({
     *   create: {
     *     // ... data to create a Products_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_images we want to update
     *   }
     * })
     */
    upsert<T extends Products_imagesUpsertArgs>(args: SelectSubset<T, Products_imagesUpsertArgs<ExtArgs>>): Prisma__Products_imagesClient<$Result.GetResult<Prisma.$Products_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_imagesCountArgs} args - Arguments to filter Products_images to count.
     * @example
     * // Count the number of Products_images
     * const count = await prisma.products_images.count({
     *   where: {
     *     // ... the filter for the Products_images we want to count
     *   }
     * })
    **/
    count<T extends Products_imagesCountArgs>(
      args?: Subset<T, Products_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Products_imagesAggregateArgs>(args: Subset<T, Products_imagesAggregateArgs>): Prisma.PrismaPromise<GetProducts_imagesAggregateType<T>>

    /**
     * Group by Products_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Products_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Products_imagesGroupByArgs['orderBy'] }
        : { orderBy?: Products_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Products_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products_images model
   */
  readonly fields: Products_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Products_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products_images model
   */
  interface Products_imagesFieldRefs {
    readonly id: FieldRef<"Products_images", 'String'>
    readonly image_original_key: FieldRef<"Products_images", 'String'>
    readonly image_thumb_key: FieldRef<"Products_images", 'String'>
    readonly created_at: FieldRef<"Products_images", 'DateTime'>
    readonly last_update: FieldRef<"Products_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products_images findUnique
   */
  export type Products_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Products_images to fetch.
     */
    where: Products_imagesWhereUniqueInput
  }

  /**
   * Products_images findUniqueOrThrow
   */
  export type Products_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Products_images to fetch.
     */
    where: Products_imagesWhereUniqueInput
  }

  /**
   * Products_images findFirst
   */
  export type Products_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Products_images to fetch.
     */
    where?: Products_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_images to fetch.
     */
    orderBy?: Products_imagesOrderByWithRelationInput | Products_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_images.
     */
    cursor?: Products_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_images.
     */
    distinct?: Products_imagesScalarFieldEnum | Products_imagesScalarFieldEnum[]
  }

  /**
   * Products_images findFirstOrThrow
   */
  export type Products_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Products_images to fetch.
     */
    where?: Products_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_images to fetch.
     */
    orderBy?: Products_imagesOrderByWithRelationInput | Products_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_images.
     */
    cursor?: Products_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_images.
     */
    distinct?: Products_imagesScalarFieldEnum | Products_imagesScalarFieldEnum[]
  }

  /**
   * Products_images findMany
   */
  export type Products_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Products_images to fetch.
     */
    where?: Products_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_images to fetch.
     */
    orderBy?: Products_imagesOrderByWithRelationInput | Products_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products_images.
     */
    cursor?: Products_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_images.
     */
    skip?: number
    distinct?: Products_imagesScalarFieldEnum | Products_imagesScalarFieldEnum[]
  }

  /**
   * Products_images create
   */
  export type Products_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Products_images.
     */
    data: XOR<Products_imagesCreateInput, Products_imagesUncheckedCreateInput>
  }

  /**
   * Products_images createMany
   */
  export type Products_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products_images.
     */
    data: Products_imagesCreateManyInput | Products_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products_images createManyAndReturn
   */
  export type Products_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many Products_images.
     */
    data: Products_imagesCreateManyInput | Products_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products_images update
   */
  export type Products_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Products_images.
     */
    data: XOR<Products_imagesUpdateInput, Products_imagesUncheckedUpdateInput>
    /**
     * Choose, which Products_images to update.
     */
    where: Products_imagesWhereUniqueInput
  }

  /**
   * Products_images updateMany
   */
  export type Products_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products_images.
     */
    data: XOR<Products_imagesUpdateManyMutationInput, Products_imagesUncheckedUpdateManyInput>
    /**
     * Filter which Products_images to update
     */
    where?: Products_imagesWhereInput
    /**
     * Limit how many Products_images to update.
     */
    limit?: number
  }

  /**
   * Products_images updateManyAndReturn
   */
  export type Products_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * The data used to update Products_images.
     */
    data: XOR<Products_imagesUpdateManyMutationInput, Products_imagesUncheckedUpdateManyInput>
    /**
     * Filter which Products_images to update
     */
    where?: Products_imagesWhereInput
    /**
     * Limit how many Products_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products_images upsert
   */
  export type Products_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Products_images to update in case it exists.
     */
    where: Products_imagesWhereUniqueInput
    /**
     * In case the Products_images found by the `where` argument doesn't exist, create a new Products_images with this data.
     */
    create: XOR<Products_imagesCreateInput, Products_imagesUncheckedCreateInput>
    /**
     * In case the Products_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Products_imagesUpdateInput, Products_imagesUncheckedUpdateInput>
  }

  /**
   * Products_images delete
   */
  export type Products_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
    /**
     * Filter which Products_images to delete.
     */
    where: Products_imagesWhereUniqueInput
  }

  /**
   * Products_images deleteMany
   */
  export type Products_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_images to delete
     */
    where?: Products_imagesWhereInput
    /**
     * Limit how many Products_images to delete.
     */
    limit?: number
  }

  /**
   * Products_images without action
   */
  export type Products_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_images
     */
    select?: Products_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_images
     */
    omit?: Products_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_imagesInclude<ExtArgs> | null
  }


  /**
   * Model Employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesMinAggregateOutputType = {
    employee_id: string | null
    CID: string | null
    first_name: string | null
    last_name: string | null
    address: string | null
    phone_number: string | null
    img: string | null
    pos_name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type EmployeesMaxAggregateOutputType = {
    employee_id: string | null
    CID: string | null
    first_name: string | null
    last_name: string | null
    address: string | null
    phone_number: string | null
    img: string | null
    pos_name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type EmployeesCountAggregateOutputType = {
    employee_id: number
    CID: number
    first_name: number
    last_name: number
    address: number
    phone_number: number
    img: number
    pos_name: number
    created_at: number
    last_update: number
    _all: number
  }


  export type EmployeesMinAggregateInputType = {
    employee_id?: true
    CID?: true
    first_name?: true
    last_name?: true
    address?: true
    phone_number?: true
    img?: true
    pos_name?: true
    created_at?: true
    last_update?: true
  }

  export type EmployeesMaxAggregateInputType = {
    employee_id?: true
    CID?: true
    first_name?: true
    last_name?: true
    address?: true
    phone_number?: true
    img?: true
    pos_name?: true
    created_at?: true
    last_update?: true
  }

  export type EmployeesCountAggregateInputType = {
    employee_id?: true
    CID?: true
    first_name?: true
    last_name?: true
    address?: true
    phone_number?: true
    img?: true
    pos_name?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to aggregate.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithAggregationInput | EmployeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    employee_id: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number: string | null
    img: string | null
    pos_name: string
    created_at: Date
    last_update: Date
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    CID?: boolean
    first_name?: boolean
    last_name?: boolean
    address?: boolean
    phone_number?: boolean
    img?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
    point_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    salary?: boolean | Employees$salaryArgs<ExtArgs>
    sales?: boolean | Employees$salesArgs<ExtArgs>
    user?: boolean | Employees$userArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    CID?: boolean
    first_name?: boolean
    last_name?: boolean
    address?: boolean
    phone_number?: boolean
    img?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
    point_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    CID?: boolean
    first_name?: boolean
    last_name?: boolean
    address?: boolean
    phone_number?: boolean
    img?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
    point_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectScalar = {
    employee_id?: boolean
    CID?: boolean
    first_name?: boolean
    last_name?: boolean
    address?: boolean
    phone_number?: boolean
    img?: boolean
    pos_name?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type EmployeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employee_id" | "CID" | "first_name" | "last_name" | "address" | "phone_number" | "img" | "pos_name" | "created_at" | "last_update", ExtArgs["result"]["employees"]>
  export type EmployeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
    salary?: boolean | Employees$salaryArgs<ExtArgs>
    sales?: boolean | Employees$salesArgs<ExtArgs>
    user?: boolean | Employees$userArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
  }
  export type EmployeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    point_of_sales?: boolean | Points_of_salesDefaultArgs<ExtArgs>
  }

  export type $EmployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {
      point_of_sales: Prisma.$Points_of_salesPayload<ExtArgs>
      salary: Prisma.$SalaryPayload<ExtArgs> | null
      sales: Prisma.$SalesPayload<ExtArgs>[]
      user: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      employee_id: string
      CID: string
      first_name: string
      last_name: string
      address: string
      phone_number: string | null
      img: string | null
      pos_name: string
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type EmployeesGetPayload<S extends boolean | null | undefined | EmployeesDefaultArgs> = $Result.GetResult<Prisma.$EmployeesPayload, S>

  type EmployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface EmployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employees'], meta: { name: 'Employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeesFindUniqueArgs>(args: SelectSubset<T, EmployeesFindUniqueArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeesFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeesFindFirstArgs>(args?: SelectSubset<T, EmployeesFindFirstArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeesFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.findMany({ select: { employee_id: true } })
     * 
     */
    findMany<T extends EmployeesFindManyArgs>(args?: SelectSubset<T, EmployeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends EmployeesCreateArgs>(args: SelectSubset<T, EmployeesCreateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeesCreateManyArgs>(args?: SelectSubset<T, EmployeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.createManyAndReturn({
     *   select: { employee_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeesCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends EmployeesDeleteArgs>(args: SelectSubset<T, EmployeesDeleteArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeesUpdateArgs>(args: SelectSubset<T, EmployeesUpdateArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeesDeleteManyArgs>(args?: SelectSubset<T, EmployeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeesUpdateManyArgs>(args: SelectSubset<T, EmployeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.updateManyAndReturn({
     *   select: { employee_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeesUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends EmployeesUpsertArgs>(args: SelectSubset<T, EmployeesUpsertArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employees model
   */
  readonly fields: EmployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    point_of_sales<T extends Points_of_salesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Points_of_salesDefaultArgs<ExtArgs>>): Prisma__Points_of_salesClient<$Result.GetResult<Prisma.$Points_of_salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    salary<T extends Employees$salaryArgs<ExtArgs> = {}>(args?: Subset<T, Employees$salaryArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales<T extends Employees$salesArgs<ExtArgs> = {}>(args?: Subset<T, Employees$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Employees$userArgs<ExtArgs> = {}>(args?: Subset<T, Employees$userArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employees model
   */
  interface EmployeesFieldRefs {
    readonly employee_id: FieldRef<"Employees", 'String'>
    readonly CID: FieldRef<"Employees", 'String'>
    readonly first_name: FieldRef<"Employees", 'String'>
    readonly last_name: FieldRef<"Employees", 'String'>
    readonly address: FieldRef<"Employees", 'String'>
    readonly phone_number: FieldRef<"Employees", 'String'>
    readonly img: FieldRef<"Employees", 'String'>
    readonly pos_name: FieldRef<"Employees", 'String'>
    readonly created_at: FieldRef<"Employees", 'DateTime'>
    readonly last_update: FieldRef<"Employees", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findUniqueOrThrow
   */
  export type EmployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findFirstOrThrow
   */
  export type EmployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * Employees create
   */
  export type EmployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to create a Employees.
     */
    data: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }

  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employees createManyAndReturn
   */
  export type EmployeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employees update
   */
  export type EmployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The data needed to update a Employees.
     */
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employees updateManyAndReturn
   */
  export type EmployeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * The filter to search for the Employees to update in case it exists.
     */
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     */
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }

  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
    /**
     * Filter which Employees to delete.
     */
    where: EmployeesWhereUniqueInput
  }

  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeesWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employees.salary
   */
  export type Employees$salaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    where?: SalaryWhereInput
  }

  /**
   * Employees.sales
   */
  export type Employees$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    cursor?: SalesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Employees.user
   */
  export type Employees$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Employees without action
   */
  export type EmployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employees
     */
    omit?: EmployeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeesInclude<ExtArgs> | null
  }


  /**
   * Model Salary
   */

  export type AggregateSalary = {
    _count: SalaryCountAggregateOutputType | null
    _avg: SalaryAvgAggregateOutputType | null
    _sum: SalarySumAggregateOutputType | null
    _min: SalaryMinAggregateOutputType | null
    _max: SalaryMaxAggregateOutputType | null
  }

  export type SalaryAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type SalarySumAggregateOutputType = {
    amount: Decimal | null
  }

  export type SalaryMinAggregateOutputType = {
    employee_cid: string | null
    amount: Decimal | null
    date: Date | null
    created_at: Date | null
    last_update: Date | null
  }

  export type SalaryMaxAggregateOutputType = {
    employee_cid: string | null
    amount: Decimal | null
    date: Date | null
    created_at: Date | null
    last_update: Date | null
  }

  export type SalaryCountAggregateOutputType = {
    employee_cid: number
    amount: number
    date: number
    created_at: number
    last_update: number
    _all: number
  }


  export type SalaryAvgAggregateInputType = {
    amount?: true
  }

  export type SalarySumAggregateInputType = {
    amount?: true
  }

  export type SalaryMinAggregateInputType = {
    employee_cid?: true
    amount?: true
    date?: true
    created_at?: true
    last_update?: true
  }

  export type SalaryMaxAggregateInputType = {
    employee_cid?: true
    amount?: true
    date?: true
    created_at?: true
    last_update?: true
  }

  export type SalaryCountAggregateInputType = {
    employee_cid?: true
    amount?: true
    date?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type SalaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salary to aggregate.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salaries
    **/
    _count?: true | SalaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryMaxAggregateInputType
  }

  export type GetSalaryAggregateType<T extends SalaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSalary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalary[P]>
      : GetScalarType<T[P], AggregateSalary[P]>
  }




  export type SalaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryWhereInput
    orderBy?: SalaryOrderByWithAggregationInput | SalaryOrderByWithAggregationInput[]
    by: SalaryScalarFieldEnum[] | SalaryScalarFieldEnum
    having?: SalaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryCountAggregateInputType | true
    _avg?: SalaryAvgAggregateInputType
    _sum?: SalarySumAggregateInputType
    _min?: SalaryMinAggregateInputType
    _max?: SalaryMaxAggregateInputType
  }

  export type SalaryGroupByOutputType = {
    employee_cid: string
    amount: Decimal
    date: Date
    created_at: Date
    last_update: Date
    _count: SalaryCountAggregateOutputType | null
    _avg: SalaryAvgAggregateOutputType | null
    _sum: SalarySumAggregateOutputType | null
    _min: SalaryMinAggregateOutputType | null
    _max: SalaryMaxAggregateOutputType | null
  }

  type GetSalaryGroupByPayload<T extends SalaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryGroupByOutputType[P]>
        }
      >
    >


  export type SalarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_cid?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    last_update?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_cid?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    last_update?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_cid?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    last_update?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectScalar = {
    employee_cid?: boolean
    amount?: boolean
    date?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type SalaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employee_cid" | "amount" | "date" | "created_at" | "last_update", ExtArgs["result"]["salary"]>
  export type SalaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type SalaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type SalaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }

  export type $SalaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Salary"
    objects: {
      employee: Prisma.$EmployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      employee_cid: string
      amount: Prisma.Decimal
      date: Date
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["salary"]>
    composites: {}
  }

  type SalaryGetPayload<S extends boolean | null | undefined | SalaryDefaultArgs> = $Result.GetResult<Prisma.$SalaryPayload, S>

  type SalaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryCountAggregateInputType | true
    }

  export interface SalaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Salary'], meta: { name: 'Salary' } }
    /**
     * Find zero or one Salary that matches the filter.
     * @param {SalaryFindUniqueArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryFindUniqueArgs>(args: SelectSubset<T, SalaryFindUniqueArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryFindUniqueOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindFirstArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryFindFirstArgs>(args?: SelectSubset<T, SalaryFindFirstArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindFirstOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salaries
     * const salaries = await prisma.salary.findMany()
     * 
     * // Get first 10 Salaries
     * const salaries = await prisma.salary.findMany({ take: 10 })
     * 
     * // Only select the `employee_cid`
     * const salaryWithEmployee_cidOnly = await prisma.salary.findMany({ select: { employee_cid: true } })
     * 
     */
    findMany<T extends SalaryFindManyArgs>(args?: SelectSubset<T, SalaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salary.
     * @param {SalaryCreateArgs} args - Arguments to create a Salary.
     * @example
     * // Create one Salary
     * const Salary = await prisma.salary.create({
     *   data: {
     *     // ... data to create a Salary
     *   }
     * })
     * 
     */
    create<T extends SalaryCreateArgs>(args: SelectSubset<T, SalaryCreateArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salaries.
     * @param {SalaryCreateManyArgs} args - Arguments to create many Salaries.
     * @example
     * // Create many Salaries
     * const salary = await prisma.salary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryCreateManyArgs>(args?: SelectSubset<T, SalaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salaries and returns the data saved in the database.
     * @param {SalaryCreateManyAndReturnArgs} args - Arguments to create many Salaries.
     * @example
     * // Create many Salaries
     * const salary = await prisma.salary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salaries and only return the `employee_cid`
     * const salaryWithEmployee_cidOnly = await prisma.salary.createManyAndReturn({
     *   select: { employee_cid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Salary.
     * @param {SalaryDeleteArgs} args - Arguments to delete one Salary.
     * @example
     * // Delete one Salary
     * const Salary = await prisma.salary.delete({
     *   where: {
     *     // ... filter to delete one Salary
     *   }
     * })
     * 
     */
    delete<T extends SalaryDeleteArgs>(args: SelectSubset<T, SalaryDeleteArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salary.
     * @param {SalaryUpdateArgs} args - Arguments to update one Salary.
     * @example
     * // Update one Salary
     * const salary = await prisma.salary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryUpdateArgs>(args: SelectSubset<T, SalaryUpdateArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salaries.
     * @param {SalaryDeleteManyArgs} args - Arguments to filter Salaries to delete.
     * @example
     * // Delete a few Salaries
     * const { count } = await prisma.salary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryDeleteManyArgs>(args?: SelectSubset<T, SalaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salaries
     * const salary = await prisma.salary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryUpdateManyArgs>(args: SelectSubset<T, SalaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salaries and returns the data updated in the database.
     * @param {SalaryUpdateManyAndReturnArgs} args - Arguments to update many Salaries.
     * @example
     * // Update many Salaries
     * const salary = await prisma.salary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salaries and only return the `employee_cid`
     * const salaryWithEmployee_cidOnly = await prisma.salary.updateManyAndReturn({
     *   select: { employee_cid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalaryUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Salary.
     * @param {SalaryUpsertArgs} args - Arguments to update or create a Salary.
     * @example
     * // Update or create a Salary
     * const salary = await prisma.salary.upsert({
     *   create: {
     *     // ... data to create a Salary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salary we want to update
     *   }
     * })
     */
    upsert<T extends SalaryUpsertArgs>(args: SelectSubset<T, SalaryUpsertArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryCountArgs} args - Arguments to filter Salaries to count.
     * @example
     * // Count the number of Salaries
     * const count = await prisma.salary.count({
     *   where: {
     *     // ... the filter for the Salaries we want to count
     *   }
     * })
    **/
    count<T extends SalaryCountArgs>(
      args?: Subset<T, SalaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaryAggregateArgs>(args: Subset<T, SalaryAggregateArgs>): Prisma.PrismaPromise<GetSalaryAggregateType<T>>

    /**
     * Group by Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryGroupByArgs['orderBy'] }
        : { orderBy?: SalaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Salary model
   */
  readonly fields: SalaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Salary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeesDefaultArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Salary model
   */
  interface SalaryFieldRefs {
    readonly employee_cid: FieldRef<"Salary", 'String'>
    readonly amount: FieldRef<"Salary", 'Decimal'>
    readonly date: FieldRef<"Salary", 'DateTime'>
    readonly created_at: FieldRef<"Salary", 'DateTime'>
    readonly last_update: FieldRef<"Salary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Salary findUnique
   */
  export type SalaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary findUniqueOrThrow
   */
  export type SalaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary findFirst
   */
  export type SalaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary findFirstOrThrow
   */
  export type SalaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary findMany
   */
  export type SalaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salaries to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary create
   */
  export type SalaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Salary.
     */
    data: XOR<SalaryCreateInput, SalaryUncheckedCreateInput>
  }

  /**
   * Salary createMany
   */
  export type SalaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salaries.
     */
    data: SalaryCreateManyInput | SalaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salary createManyAndReturn
   */
  export type SalaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data used to create many Salaries.
     */
    data: SalaryCreateManyInput | SalaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Salary update
   */
  export type SalaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Salary.
     */
    data: XOR<SalaryUpdateInput, SalaryUncheckedUpdateInput>
    /**
     * Choose, which Salary to update.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary updateMany
   */
  export type SalaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salaries.
     */
    data: XOR<SalaryUpdateManyMutationInput, SalaryUncheckedUpdateManyInput>
    /**
     * Filter which Salaries to update
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to update.
     */
    limit?: number
  }

  /**
   * Salary updateManyAndReturn
   */
  export type SalaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data used to update Salaries.
     */
    data: XOR<SalaryUpdateManyMutationInput, SalaryUncheckedUpdateManyInput>
    /**
     * Filter which Salaries to update
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Salary upsert
   */
  export type SalaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Salary to update in case it exists.
     */
    where: SalaryWhereUniqueInput
    /**
     * In case the Salary found by the `where` argument doesn't exist, create a new Salary with this data.
     */
    create: XOR<SalaryCreateInput, SalaryUncheckedCreateInput>
    /**
     * In case the Salary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryUpdateInput, SalaryUncheckedUpdateInput>
  }

  /**
   * Salary delete
   */
  export type SalaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter which Salary to delete.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary deleteMany
   */
  export type SalaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salaries to delete
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to delete.
     */
    limit?: number
  }

  /**
   * Salary without action
   */
  export type SalaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
  }


  /**
   * Model Sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    total_amount: Decimal | null
  }

  export type SalesSumAggregateOutputType = {
    total_amount: Decimal | null
  }

  export type SalesMinAggregateOutputType = {
    sales_id: string | null
    employee_cid: string | null
    date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    last_update: Date | null
    deleted_at: Date | null
  }

  export type SalesMaxAggregateOutputType = {
    sales_id: string | null
    employee_cid: string | null
    date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    last_update: Date | null
    deleted_at: Date | null
  }

  export type SalesCountAggregateOutputType = {
    sales_id: number
    employee_cid: number
    date: number
    total_amount: number
    created_at: number
    last_update: number
    deleted_at: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    total_amount?: true
  }

  export type SalesSumAggregateInputType = {
    total_amount?: true
  }

  export type SalesMinAggregateInputType = {
    sales_id?: true
    employee_cid?: true
    date?: true
    total_amount?: true
    created_at?: true
    last_update?: true
    deleted_at?: true
  }

  export type SalesMaxAggregateInputType = {
    sales_id?: true
    employee_cid?: true
    date?: true
    total_amount?: true
    created_at?: true
    last_update?: true
    deleted_at?: true
  }

  export type SalesCountAggregateInputType = {
    sales_id?: true
    employee_cid?: true
    date?: true
    total_amount?: true
    created_at?: true
    last_update?: true
    deleted_at?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to aggregate.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type SalesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesWhereInput
    orderBy?: SalesOrderByWithAggregationInput | SalesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: SalesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    sales_id: string
    employee_cid: string
    date: Date
    total_amount: Decimal
    created_at: Date
    last_update: Date
    deleted_at: Date | null
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends SalesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type SalesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sales_id?: boolean
    employee_cid?: boolean
    date?: boolean
    total_amount?: boolean
    created_at?: boolean
    last_update?: boolean
    deleted_at?: boolean
    products_sales?: boolean | Sales$products_salesArgs<ExtArgs>
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sales_id?: boolean
    employee_cid?: boolean
    date?: boolean
    total_amount?: boolean
    created_at?: boolean
    last_update?: boolean
    deleted_at?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sales_id?: boolean
    employee_cid?: boolean
    date?: boolean
    total_amount?: boolean
    created_at?: boolean
    last_update?: boolean
    deleted_at?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type SalesSelectScalar = {
    sales_id?: boolean
    employee_cid?: boolean
    date?: boolean
    total_amount?: boolean
    created_at?: boolean
    last_update?: boolean
    deleted_at?: boolean
  }

  export type SalesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sales_id" | "employee_cid" | "date" | "total_amount" | "created_at" | "last_update" | "deleted_at", ExtArgs["result"]["sales"]>
  export type SalesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products_sales?: boolean | Sales$products_salesArgs<ExtArgs>
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type SalesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }

  export type $SalesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sales"
    objects: {
      products_sales: Prisma.$Products_salesPayload<ExtArgs>[]
      employee: Prisma.$EmployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sales_id: string
      employee_cid: string
      date: Date
      total_amount: Prisma.Decimal
      created_at: Date
      last_update: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type SalesGetPayload<S extends boolean | null | undefined | SalesDefaultArgs> = $Result.GetResult<Prisma.$SalesPayload, S>

  type SalesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface SalesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sales'], meta: { name: 'Sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {SalesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesFindUniqueArgs>(args: SelectSubset<T, SalesFindUniqueArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesFindFirstArgs>(args?: SelectSubset<T, SalesFindFirstArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `sales_id`
     * const salesWithSales_idOnly = await prisma.sales.findMany({ select: { sales_id: true } })
     * 
     */
    findMany<T extends SalesFindManyArgs>(args?: SelectSubset<T, SalesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {SalesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends SalesCreateArgs>(args: SelectSubset<T, SalesCreateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SalesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesCreateManyArgs>(args?: SelectSubset<T, SalesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SalesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `sales_id`
     * const salesWithSales_idOnly = await prisma.sales.createManyAndReturn({
     *   select: { sales_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {SalesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends SalesDeleteArgs>(args: SelectSubset<T, SalesDeleteArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {SalesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesUpdateArgs>(args: SelectSubset<T, SalesUpdateArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SalesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesDeleteManyArgs>(args?: SelectSubset<T, SalesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesUpdateManyArgs>(args: SelectSubset<T, SalesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SalesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `sales_id`
     * const salesWithSales_idOnly = await prisma.sales.updateManyAndReturn({
     *   select: { sales_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalesUpdateManyAndReturnArgs>(args: SelectSubset<T, SalesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {SalesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends SalesUpsertArgs>(args: SelectSubset<T, SalesUpsertArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SalesCountArgs>(
      args?: Subset<T, SalesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesGroupByArgs['orderBy'] }
        : { orderBy?: SalesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sales model
   */
  readonly fields: SalesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products_sales<T extends Sales$products_salesArgs<ExtArgs> = {}>(args?: Subset<T, Sales$products_salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee<T extends EmployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeesDefaultArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sales model
   */
  interface SalesFieldRefs {
    readonly sales_id: FieldRef<"Sales", 'String'>
    readonly employee_cid: FieldRef<"Sales", 'String'>
    readonly date: FieldRef<"Sales", 'DateTime'>
    readonly total_amount: FieldRef<"Sales", 'Decimal'>
    readonly created_at: FieldRef<"Sales", 'DateTime'>
    readonly last_update: FieldRef<"Sales", 'DateTime'>
    readonly deleted_at: FieldRef<"Sales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sales findUnique
   */
  export type SalesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findUniqueOrThrow
   */
  export type SalesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales findFirst
   */
  export type SalesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findFirstOrThrow
   */
  export type SalesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales findMany
   */
  export type SalesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SalesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SalesOrderByWithRelationInput | SalesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SalesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * Sales create
   */
  export type SalesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to create a Sales.
     */
    data: XOR<SalesCreateInput, SalesUncheckedCreateInput>
  }

  /**
   * Sales createMany
   */
  export type SalesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sales createManyAndReturn
   */
  export type SalesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SalesCreateManyInput | SalesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales update
   */
  export type SalesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The data needed to update a Sales.
     */
    data: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
    /**
     * Choose, which Sales to update.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales updateMany
   */
  export type SalesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sales updateManyAndReturn
   */
  export type SalesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sales upsert
   */
  export type SalesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * The filter to search for the Sales to update in case it exists.
     */
    where: SalesWhereUniqueInput
    /**
     * In case the Sales found by the `where` argument doesn't exist, create a new Sales with this data.
     */
    create: XOR<SalesCreateInput, SalesUncheckedCreateInput>
    /**
     * In case the Sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesUpdateInput, SalesUncheckedUpdateInput>
  }

  /**
   * Sales delete
   */
  export type SalesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
    /**
     * Filter which Sales to delete.
     */
    where: SalesWhereUniqueInput
  }

  /**
   * Sales deleteMany
   */
  export type SalesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SalesWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sales.products_sales
   */
  export type Sales$products_salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    where?: Products_salesWhereInput
    orderBy?: Products_salesOrderByWithRelationInput | Products_salesOrderByWithRelationInput[]
    cursor?: Products_salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_salesScalarFieldEnum | Products_salesScalarFieldEnum[]
  }

  /**
   * Sales without action
   */
  export type SalesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sales
     */
    select?: SalesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sales
     */
    omit?: SalesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesInclude<ExtArgs> | null
  }


  /**
   * Model Products_sales
   */

  export type AggregateProducts_sales = {
    _count: Products_salesCountAggregateOutputType | null
    _avg: Products_salesAvgAggregateOutputType | null
    _sum: Products_salesSumAggregateOutputType | null
    _min: Products_salesMinAggregateOutputType | null
    _max: Products_salesMaxAggregateOutputType | null
  }

  export type Products_salesAvgAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Products_salesSumAggregateOutputType = {
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Products_salesMinAggregateOutputType = {
    sale_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Products_salesMaxAggregateOutputType = {
    sale_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Products_salesCountAggregateOutputType = {
    sale_id: number
    product_id: number
    quantity: number
    unit_price: number
    total_price: number
    _all: number
  }


  export type Products_salesAvgAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Products_salesSumAggregateInputType = {
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Products_salesMinAggregateInputType = {
    sale_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Products_salesMaxAggregateInputType = {
    sale_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Products_salesCountAggregateInputType = {
    sale_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    _all?: true
  }

  export type Products_salesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_sales to aggregate.
     */
    where?: Products_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_sales to fetch.
     */
    orderBy?: Products_salesOrderByWithRelationInput | Products_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Products_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products_sales
    **/
    _count?: true | Products_salesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Products_salesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Products_salesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_salesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_salesMaxAggregateInputType
  }

  export type GetProducts_salesAggregateType<T extends Products_salesAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_sales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_sales[P]>
      : GetScalarType<T[P], AggregateProducts_sales[P]>
  }




  export type Products_salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_salesWhereInput
    orderBy?: Products_salesOrderByWithAggregationInput | Products_salesOrderByWithAggregationInput[]
    by: Products_salesScalarFieldEnum[] | Products_salesScalarFieldEnum
    having?: Products_salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_salesCountAggregateInputType | true
    _avg?: Products_salesAvgAggregateInputType
    _sum?: Products_salesSumAggregateInputType
    _min?: Products_salesMinAggregateInputType
    _max?: Products_salesMaxAggregateInputType
  }

  export type Products_salesGroupByOutputType = {
    sale_id: string
    product_id: string
    quantity: number
    unit_price: Decimal
    total_price: Decimal
    _count: Products_salesCountAggregateOutputType | null
    _avg: Products_salesAvgAggregateOutputType | null
    _sum: Products_salesSumAggregateOutputType | null
    _min: Products_salesMinAggregateOutputType | null
    _max: Products_salesMaxAggregateOutputType | null
  }

  type GetProducts_salesGroupByPayload<T extends Products_salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_salesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_salesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_salesGroupByOutputType[P]>
            : GetScalarType<T[P], Products_salesGroupByOutputType[P]>
        }
      >
    >


  export type Products_salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sale_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_sales"]>

  export type Products_salesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sale_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_sales"]>

  export type Products_salesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sale_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_sales"]>

  export type Products_salesSelectScalar = {
    sale_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
  }

  export type Products_salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sale_id" | "product_id" | "quantity" | "unit_price" | "total_price", ExtArgs["result"]["products_sales"]>
  export type Products_salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }
  export type Products_salesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }
  export type Products_salesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductsDefaultArgs<ExtArgs>
    sale?: boolean | SalesDefaultArgs<ExtArgs>
  }

  export type $Products_salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products_sales"
    objects: {
      product: Prisma.$ProductsPayload<ExtArgs>
      sale: Prisma.$SalesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sale_id: string
      product_id: string
      quantity: number
      unit_price: Prisma.Decimal
      total_price: Prisma.Decimal
    }, ExtArgs["result"]["products_sales"]>
    composites: {}
  }

  type Products_salesGetPayload<S extends boolean | null | undefined | Products_salesDefaultArgs> = $Result.GetResult<Prisma.$Products_salesPayload, S>

  type Products_salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Products_salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Products_salesCountAggregateInputType | true
    }

  export interface Products_salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products_sales'], meta: { name: 'Products_sales' } }
    /**
     * Find zero or one Products_sales that matches the filter.
     * @param {Products_salesFindUniqueArgs} args - Arguments to find a Products_sales
     * @example
     * // Get one Products_sales
     * const products_sales = await prisma.products_sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Products_salesFindUniqueArgs>(args: SelectSubset<T, Products_salesFindUniqueArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products_sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Products_salesFindUniqueOrThrowArgs} args - Arguments to find a Products_sales
     * @example
     * // Get one Products_sales
     * const products_sales = await prisma.products_sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Products_salesFindUniqueOrThrowArgs>(args: SelectSubset<T, Products_salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_salesFindFirstArgs} args - Arguments to find a Products_sales
     * @example
     * // Get one Products_sales
     * const products_sales = await prisma.products_sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Products_salesFindFirstArgs>(args?: SelectSubset<T, Products_salesFindFirstArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_salesFindFirstOrThrowArgs} args - Arguments to find a Products_sales
     * @example
     * // Get one Products_sales
     * const products_sales = await prisma.products_sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Products_salesFindFirstOrThrowArgs>(args?: SelectSubset<T, Products_salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products_sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_sales
     * const products_sales = await prisma.products_sales.findMany()
     * 
     * // Get first 10 Products_sales
     * const products_sales = await prisma.products_sales.findMany({ take: 10 })
     * 
     * // Only select the `sale_id`
     * const products_salesWithSale_idOnly = await prisma.products_sales.findMany({ select: { sale_id: true } })
     * 
     */
    findMany<T extends Products_salesFindManyArgs>(args?: SelectSubset<T, Products_salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products_sales.
     * @param {Products_salesCreateArgs} args - Arguments to create a Products_sales.
     * @example
     * // Create one Products_sales
     * const Products_sales = await prisma.products_sales.create({
     *   data: {
     *     // ... data to create a Products_sales
     *   }
     * })
     * 
     */
    create<T extends Products_salesCreateArgs>(args: SelectSubset<T, Products_salesCreateArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products_sales.
     * @param {Products_salesCreateManyArgs} args - Arguments to create many Products_sales.
     * @example
     * // Create many Products_sales
     * const products_sales = await prisma.products_sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Products_salesCreateManyArgs>(args?: SelectSubset<T, Products_salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products_sales and returns the data saved in the database.
     * @param {Products_salesCreateManyAndReturnArgs} args - Arguments to create many Products_sales.
     * @example
     * // Create many Products_sales
     * const products_sales = await prisma.products_sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products_sales and only return the `sale_id`
     * const products_salesWithSale_idOnly = await prisma.products_sales.createManyAndReturn({
     *   select: { sale_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Products_salesCreateManyAndReturnArgs>(args?: SelectSubset<T, Products_salesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products_sales.
     * @param {Products_salesDeleteArgs} args - Arguments to delete one Products_sales.
     * @example
     * // Delete one Products_sales
     * const Products_sales = await prisma.products_sales.delete({
     *   where: {
     *     // ... filter to delete one Products_sales
     *   }
     * })
     * 
     */
    delete<T extends Products_salesDeleteArgs>(args: SelectSubset<T, Products_salesDeleteArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products_sales.
     * @param {Products_salesUpdateArgs} args - Arguments to update one Products_sales.
     * @example
     * // Update one Products_sales
     * const products_sales = await prisma.products_sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Products_salesUpdateArgs>(args: SelectSubset<T, Products_salesUpdateArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products_sales.
     * @param {Products_salesDeleteManyArgs} args - Arguments to filter Products_sales to delete.
     * @example
     * // Delete a few Products_sales
     * const { count } = await prisma.products_sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Products_salesDeleteManyArgs>(args?: SelectSubset<T, Products_salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_sales
     * const products_sales = await prisma.products_sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Products_salesUpdateManyArgs>(args: SelectSubset<T, Products_salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_sales and returns the data updated in the database.
     * @param {Products_salesUpdateManyAndReturnArgs} args - Arguments to update many Products_sales.
     * @example
     * // Update many Products_sales
     * const products_sales = await prisma.products_sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products_sales and only return the `sale_id`
     * const products_salesWithSale_idOnly = await prisma.products_sales.updateManyAndReturn({
     *   select: { sale_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Products_salesUpdateManyAndReturnArgs>(args: SelectSubset<T, Products_salesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products_sales.
     * @param {Products_salesUpsertArgs} args - Arguments to update or create a Products_sales.
     * @example
     * // Update or create a Products_sales
     * const products_sales = await prisma.products_sales.upsert({
     *   create: {
     *     // ... data to create a Products_sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_sales we want to update
     *   }
     * })
     */
    upsert<T extends Products_salesUpsertArgs>(args: SelectSubset<T, Products_salesUpsertArgs<ExtArgs>>): Prisma__Products_salesClient<$Result.GetResult<Prisma.$Products_salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_salesCountArgs} args - Arguments to filter Products_sales to count.
     * @example
     * // Count the number of Products_sales
     * const count = await prisma.products_sales.count({
     *   where: {
     *     // ... the filter for the Products_sales we want to count
     *   }
     * })
    **/
    count<T extends Products_salesCountArgs>(
      args?: Subset<T, Products_salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_salesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_salesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Products_salesAggregateArgs>(args: Subset<T, Products_salesAggregateArgs>): Prisma.PrismaPromise<GetProducts_salesAggregateType<T>>

    /**
     * Group by Products_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_salesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Products_salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Products_salesGroupByArgs['orderBy'] }
        : { orderBy?: Products_salesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Products_salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_salesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products_sales model
   */
  readonly fields: Products_salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products_sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Products_salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sale<T extends SalesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalesDefaultArgs<ExtArgs>>): Prisma__SalesClient<$Result.GetResult<Prisma.$SalesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products_sales model
   */
  interface Products_salesFieldRefs {
    readonly sale_id: FieldRef<"Products_sales", 'String'>
    readonly product_id: FieldRef<"Products_sales", 'String'>
    readonly quantity: FieldRef<"Products_sales", 'Int'>
    readonly unit_price: FieldRef<"Products_sales", 'Decimal'>
    readonly total_price: FieldRef<"Products_sales", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Products_sales findUnique
   */
  export type Products_salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * Filter, which Products_sales to fetch.
     */
    where: Products_salesWhereUniqueInput
  }

  /**
   * Products_sales findUniqueOrThrow
   */
  export type Products_salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * Filter, which Products_sales to fetch.
     */
    where: Products_salesWhereUniqueInput
  }

  /**
   * Products_sales findFirst
   */
  export type Products_salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * Filter, which Products_sales to fetch.
     */
    where?: Products_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_sales to fetch.
     */
    orderBy?: Products_salesOrderByWithRelationInput | Products_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_sales.
     */
    cursor?: Products_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_sales.
     */
    distinct?: Products_salesScalarFieldEnum | Products_salesScalarFieldEnum[]
  }

  /**
   * Products_sales findFirstOrThrow
   */
  export type Products_salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * Filter, which Products_sales to fetch.
     */
    where?: Products_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_sales to fetch.
     */
    orderBy?: Products_salesOrderByWithRelationInput | Products_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_sales.
     */
    cursor?: Products_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_sales.
     */
    distinct?: Products_salesScalarFieldEnum | Products_salesScalarFieldEnum[]
  }

  /**
   * Products_sales findMany
   */
  export type Products_salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * Filter, which Products_sales to fetch.
     */
    where?: Products_salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_sales to fetch.
     */
    orderBy?: Products_salesOrderByWithRelationInput | Products_salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products_sales.
     */
    cursor?: Products_salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_sales.
     */
    skip?: number
    distinct?: Products_salesScalarFieldEnum | Products_salesScalarFieldEnum[]
  }

  /**
   * Products_sales create
   */
  export type Products_salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * The data needed to create a Products_sales.
     */
    data: XOR<Products_salesCreateInput, Products_salesUncheckedCreateInput>
  }

  /**
   * Products_sales createMany
   */
  export type Products_salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products_sales.
     */
    data: Products_salesCreateManyInput | Products_salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products_sales createManyAndReturn
   */
  export type Products_salesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * The data used to create many Products_sales.
     */
    data: Products_salesCreateManyInput | Products_salesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products_sales update
   */
  export type Products_salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * The data needed to update a Products_sales.
     */
    data: XOR<Products_salesUpdateInput, Products_salesUncheckedUpdateInput>
    /**
     * Choose, which Products_sales to update.
     */
    where: Products_salesWhereUniqueInput
  }

  /**
   * Products_sales updateMany
   */
  export type Products_salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products_sales.
     */
    data: XOR<Products_salesUpdateManyMutationInput, Products_salesUncheckedUpdateManyInput>
    /**
     * Filter which Products_sales to update
     */
    where?: Products_salesWhereInput
    /**
     * Limit how many Products_sales to update.
     */
    limit?: number
  }

  /**
   * Products_sales updateManyAndReturn
   */
  export type Products_salesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * The data used to update Products_sales.
     */
    data: XOR<Products_salesUpdateManyMutationInput, Products_salesUncheckedUpdateManyInput>
    /**
     * Filter which Products_sales to update
     */
    where?: Products_salesWhereInput
    /**
     * Limit how many Products_sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products_sales upsert
   */
  export type Products_salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * The filter to search for the Products_sales to update in case it exists.
     */
    where: Products_salesWhereUniqueInput
    /**
     * In case the Products_sales found by the `where` argument doesn't exist, create a new Products_sales with this data.
     */
    create: XOR<Products_salesCreateInput, Products_salesUncheckedCreateInput>
    /**
     * In case the Products_sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Products_salesUpdateInput, Products_salesUncheckedUpdateInput>
  }

  /**
   * Products_sales delete
   */
  export type Products_salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
    /**
     * Filter which Products_sales to delete.
     */
    where: Products_salesWhereUniqueInput
  }

  /**
   * Products_sales deleteMany
   */
  export type Products_salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_sales to delete
     */
    where?: Products_salesWhereInput
    /**
     * Limit how many Products_sales to delete.
     */
    limit?: number
  }

  /**
   * Products_sales without action
   */
  export type Products_salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_sales
     */
    select?: Products_salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_sales
     */
    omit?: Products_salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_salesInclude<ExtArgs> | null
  }


  /**
   * Model Purchases
   */

  export type AggregatePurchases = {
    _count: PurchasesCountAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  export type PurchasesMinAggregateOutputType = {
    purchases_id: string | null
    purchase_date: Date | null
    created_at: Date | null
    last_update: Date | null
  }

  export type PurchasesMaxAggregateOutputType = {
    purchases_id: string | null
    purchase_date: Date | null
    created_at: Date | null
    last_update: Date | null
  }

  export type PurchasesCountAggregateOutputType = {
    purchases_id: number
    purchase_date: number
    created_at: number
    last_update: number
    _all: number
  }


  export type PurchasesMinAggregateInputType = {
    purchases_id?: true
    purchase_date?: true
    created_at?: true
    last_update?: true
  }

  export type PurchasesMaxAggregateInputType = {
    purchases_id?: true
    purchase_date?: true
    created_at?: true
    last_update?: true
  }

  export type PurchasesCountAggregateInputType = {
    purchases_id?: true
    purchase_date?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type PurchasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to aggregate.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasesMaxAggregateInputType
  }

  export type GetPurchasesAggregateType<T extends PurchasesAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchases[P]>
      : GetScalarType<T[P], AggregatePurchases[P]>
  }




  export type PurchasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasesWhereInput
    orderBy?: PurchasesOrderByWithAggregationInput | PurchasesOrderByWithAggregationInput[]
    by: PurchasesScalarFieldEnum[] | PurchasesScalarFieldEnum
    having?: PurchasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasesCountAggregateInputType | true
    _min?: PurchasesMinAggregateInputType
    _max?: PurchasesMaxAggregateInputType
  }

  export type PurchasesGroupByOutputType = {
    purchases_id: string
    purchase_date: Date
    created_at: Date
    last_update: Date
    _count: PurchasesCountAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  type GetPurchasesGroupByPayload<T extends PurchasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
        }
      >
    >


  export type PurchasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchases_id?: boolean
    purchase_date?: boolean
    created_at?: boolean
    last_update?: boolean
    products_purchases?: boolean | Purchases$products_purchasesArgs<ExtArgs>
    _count?: boolean | PurchasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchases_id?: boolean
    purchase_date?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchases_id?: boolean
    purchase_date?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["purchases"]>

  export type PurchasesSelectScalar = {
    purchases_id?: boolean
    purchase_date?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type PurchasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchases_id" | "purchase_date" | "created_at" | "last_update", ExtArgs["result"]["purchases"]>
  export type PurchasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products_purchases?: boolean | Purchases$products_purchasesArgs<ExtArgs>
    _count?: boolean | PurchasesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PurchasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchases"
    objects: {
      products_purchases: Prisma.$Products_purchasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      purchases_id: string
      purchase_date: Date
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["purchases"]>
    composites: {}
  }

  type PurchasesGetPayload<S extends boolean | null | undefined | PurchasesDefaultArgs> = $Result.GetResult<Prisma.$PurchasesPayload, S>

  type PurchasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasesCountAggregateInputType | true
    }

  export interface PurchasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchases'], meta: { name: 'Purchases' } }
    /**
     * Find zero or one Purchases that matches the filter.
     * @param {PurchasesFindUniqueArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasesFindUniqueArgs>(args: SelectSubset<T, PurchasesFindUniqueArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchasesFindUniqueOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasesFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasesFindFirstArgs>(args?: SelectSubset<T, PurchasesFindFirstArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindFirstOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasesFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchases.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchases.findMany({ take: 10 })
     * 
     * // Only select the `purchases_id`
     * const purchasesWithPurchases_idOnly = await prisma.purchases.findMany({ select: { purchases_id: true } })
     * 
     */
    findMany<T extends PurchasesFindManyArgs>(args?: SelectSubset<T, PurchasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchases.
     * @param {PurchasesCreateArgs} args - Arguments to create a Purchases.
     * @example
     * // Create one Purchases
     * const Purchases = await prisma.purchases.create({
     *   data: {
     *     // ... data to create a Purchases
     *   }
     * })
     * 
     */
    create<T extends PurchasesCreateArgs>(args: SelectSubset<T, PurchasesCreateArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchasesCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasesCreateManyArgs>(args?: SelectSubset<T, PurchasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchasesCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `purchases_id`
     * const purchasesWithPurchases_idOnly = await prisma.purchases.createManyAndReturn({
     *   select: { purchases_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchasesCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchases.
     * @param {PurchasesDeleteArgs} args - Arguments to delete one Purchases.
     * @example
     * // Delete one Purchases
     * const Purchases = await prisma.purchases.delete({
     *   where: {
     *     // ... filter to delete one Purchases
     *   }
     * })
     * 
     */
    delete<T extends PurchasesDeleteArgs>(args: SelectSubset<T, PurchasesDeleteArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchases.
     * @param {PurchasesUpdateArgs} args - Arguments to update one Purchases.
     * @example
     * // Update one Purchases
     * const purchases = await prisma.purchases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasesUpdateArgs>(args: SelectSubset<T, PurchasesUpdateArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchasesDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasesDeleteManyArgs>(args?: SelectSubset<T, PurchasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasesUpdateManyArgs>(args: SelectSubset<T, PurchasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchasesUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `purchases_id`
     * const purchasesWithPurchases_idOnly = await prisma.purchases.updateManyAndReturn({
     *   select: { purchases_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchasesUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchases.
     * @param {PurchasesUpsertArgs} args - Arguments to update or create a Purchases.
     * @example
     * // Update or create a Purchases
     * const purchases = await prisma.purchases.upsert({
     *   create: {
     *     // ... data to create a Purchases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchases we want to update
     *   }
     * })
     */
    upsert<T extends PurchasesUpsertArgs>(args: SelectSubset<T, PurchasesUpsertArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchases.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchasesCountArgs>(
      args?: Subset<T, PurchasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchasesAggregateArgs>(args: Subset<T, PurchasesAggregateArgs>): Prisma.PrismaPromise<GetPurchasesAggregateType<T>>

    /**
     * Group by Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasesGroupByArgs['orderBy'] }
        : { orderBy?: PurchasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchases model
   */
  readonly fields: PurchasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products_purchases<T extends Purchases$products_purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Purchases$products_purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchases model
   */
  interface PurchasesFieldRefs {
    readonly purchases_id: FieldRef<"Purchases", 'String'>
    readonly purchase_date: FieldRef<"Purchases", 'DateTime'>
    readonly created_at: FieldRef<"Purchases", 'DateTime'>
    readonly last_update: FieldRef<"Purchases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Purchases findUnique
   */
  export type PurchasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases findUniqueOrThrow
   */
  export type PurchasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases findFirst
   */
  export type PurchasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases findFirstOrThrow
   */
  export type PurchasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases findMany
   */
  export type PurchasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchasesOrderByWithRelationInput | PurchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * Purchases create
   */
  export type PurchasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchases.
     */
    data: XOR<PurchasesCreateInput, PurchasesUncheckedCreateInput>
  }

  /**
   * Purchases createMany
   */
  export type PurchasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchasesCreateManyInput | PurchasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchases createManyAndReturn
   */
  export type PurchasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchasesCreateManyInput | PurchasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchases update
   */
  export type PurchasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchases.
     */
    data: XOR<PurchasesUpdateInput, PurchasesUncheckedUpdateInput>
    /**
     * Choose, which Purchases to update.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases updateMany
   */
  export type PurchasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchases updateManyAndReturn
   */
  export type PurchasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchasesUpdateManyMutationInput, PurchasesUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchases upsert
   */
  export type PurchasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchases to update in case it exists.
     */
    where: PurchasesWhereUniqueInput
    /**
     * In case the Purchases found by the `where` argument doesn't exist, create a new Purchases with this data.
     */
    create: XOR<PurchasesCreateInput, PurchasesUncheckedCreateInput>
    /**
     * In case the Purchases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasesUpdateInput, PurchasesUncheckedUpdateInput>
  }

  /**
   * Purchases delete
   */
  export type PurchasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
    /**
     * Filter which Purchases to delete.
     */
    where: PurchasesWhereUniqueInput
  }

  /**
   * Purchases deleteMany
   */
  export type PurchasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchasesWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchases.products_purchases
   */
  export type Purchases$products_purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    where?: Products_purchasesWhereInput
    orderBy?: Products_purchasesOrderByWithRelationInput | Products_purchasesOrderByWithRelationInput[]
    cursor?: Products_purchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_purchasesScalarFieldEnum | Products_purchasesScalarFieldEnum[]
  }

  /**
   * Purchases without action
   */
  export type PurchasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchases
     */
    select?: PurchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchases
     */
    omit?: PurchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasesInclude<ExtArgs> | null
  }


  /**
   * Model Products_purchases
   */

  export type AggregateProducts_purchases = {
    _count: Products_purchasesCountAggregateOutputType | null
    _avg: Products_purchasesAvgAggregateOutputType | null
    _sum: Products_purchasesSumAggregateOutputType | null
    _min: Products_purchasesMinAggregateOutputType | null
    _max: Products_purchasesMaxAggregateOutputType | null
  }

  export type Products_purchasesAvgAggregateOutputType = {
    product_quantity: number | null
    product_unit_price: Decimal | null
  }

  export type Products_purchasesSumAggregateOutputType = {
    product_quantity: number | null
    product_unit_price: Decimal | null
  }

  export type Products_purchasesMinAggregateOutputType = {
    purchase_id: string | null
    product_id: string | null
    product_quantity: number | null
    product_unit_price: Decimal | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Products_purchasesMaxAggregateOutputType = {
    purchase_id: string | null
    product_id: string | null
    product_quantity: number | null
    product_unit_price: Decimal | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Products_purchasesCountAggregateOutputType = {
    purchase_id: number
    product_id: number
    product_quantity: number
    product_unit_price: number
    created_at: number
    last_update: number
    _all: number
  }


  export type Products_purchasesAvgAggregateInputType = {
    product_quantity?: true
    product_unit_price?: true
  }

  export type Products_purchasesSumAggregateInputType = {
    product_quantity?: true
    product_unit_price?: true
  }

  export type Products_purchasesMinAggregateInputType = {
    purchase_id?: true
    product_id?: true
    product_quantity?: true
    product_unit_price?: true
    created_at?: true
    last_update?: true
  }

  export type Products_purchasesMaxAggregateInputType = {
    purchase_id?: true
    product_id?: true
    product_quantity?: true
    product_unit_price?: true
    created_at?: true
    last_update?: true
  }

  export type Products_purchasesCountAggregateInputType = {
    purchase_id?: true
    product_id?: true
    product_quantity?: true
    product_unit_price?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type Products_purchasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_purchases to aggregate.
     */
    where?: Products_purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_purchases to fetch.
     */
    orderBy?: Products_purchasesOrderByWithRelationInput | Products_purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Products_purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products_purchases
    **/
    _count?: true | Products_purchasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Products_purchasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Products_purchasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_purchasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_purchasesMaxAggregateInputType
  }

  export type GetProducts_purchasesAggregateType<T extends Products_purchasesAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_purchases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_purchases[P]>
      : GetScalarType<T[P], AggregateProducts_purchases[P]>
  }




  export type Products_purchasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Products_purchasesWhereInput
    orderBy?: Products_purchasesOrderByWithAggregationInput | Products_purchasesOrderByWithAggregationInput[]
    by: Products_purchasesScalarFieldEnum[] | Products_purchasesScalarFieldEnum
    having?: Products_purchasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_purchasesCountAggregateInputType | true
    _avg?: Products_purchasesAvgAggregateInputType
    _sum?: Products_purchasesSumAggregateInputType
    _min?: Products_purchasesMinAggregateInputType
    _max?: Products_purchasesMaxAggregateInputType
  }

  export type Products_purchasesGroupByOutputType = {
    purchase_id: string
    product_id: string
    product_quantity: number
    product_unit_price: Decimal
    created_at: Date
    last_update: Date
    _count: Products_purchasesCountAggregateOutputType | null
    _avg: Products_purchasesAvgAggregateOutputType | null
    _sum: Products_purchasesSumAggregateOutputType | null
    _min: Products_purchasesMinAggregateOutputType | null
    _max: Products_purchasesMaxAggregateOutputType | null
  }

  type GetProducts_purchasesGroupByPayload<T extends Products_purchasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_purchasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_purchasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_purchasesGroupByOutputType[P]>
            : GetScalarType<T[P], Products_purchasesGroupByOutputType[P]>
        }
      >
    >


  export type Products_purchasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_id?: boolean
    product_id?: boolean
    product_quantity?: boolean
    product_unit_price?: boolean
    created_at?: boolean
    last_update?: boolean
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    purchases?: boolean | PurchasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_purchases"]>

  export type Products_purchasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_id?: boolean
    product_id?: boolean
    product_quantity?: boolean
    product_unit_price?: boolean
    created_at?: boolean
    last_update?: boolean
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    purchases?: boolean | PurchasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_purchases"]>

  export type Products_purchasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    purchase_id?: boolean
    product_id?: boolean
    product_quantity?: boolean
    product_unit_price?: boolean
    created_at?: boolean
    last_update?: boolean
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    purchases?: boolean | PurchasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_purchases"]>

  export type Products_purchasesSelectScalar = {
    purchase_id?: boolean
    product_id?: boolean
    product_quantity?: boolean
    product_unit_price?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type Products_purchasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"purchase_id" | "product_id" | "product_quantity" | "product_unit_price" | "created_at" | "last_update", ExtArgs["result"]["products_purchases"]>
  export type Products_purchasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    purchases?: boolean | PurchasesDefaultArgs<ExtArgs>
  }
  export type Products_purchasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    purchases?: boolean | PurchasesDefaultArgs<ExtArgs>
  }
  export type Products_purchasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ProductsDefaultArgs<ExtArgs>
    purchases?: boolean | PurchasesDefaultArgs<ExtArgs>
  }

  export type $Products_purchasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products_purchases"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>
      purchases: Prisma.$PurchasesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      purchase_id: string
      product_id: string
      product_quantity: number
      product_unit_price: Prisma.Decimal
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["products_purchases"]>
    composites: {}
  }

  type Products_purchasesGetPayload<S extends boolean | null | undefined | Products_purchasesDefaultArgs> = $Result.GetResult<Prisma.$Products_purchasesPayload, S>

  type Products_purchasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Products_purchasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Products_purchasesCountAggregateInputType | true
    }

  export interface Products_purchasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products_purchases'], meta: { name: 'Products_purchases' } }
    /**
     * Find zero or one Products_purchases that matches the filter.
     * @param {Products_purchasesFindUniqueArgs} args - Arguments to find a Products_purchases
     * @example
     * // Get one Products_purchases
     * const products_purchases = await prisma.products_purchases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Products_purchasesFindUniqueArgs>(args: SelectSubset<T, Products_purchasesFindUniqueArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products_purchases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Products_purchasesFindUniqueOrThrowArgs} args - Arguments to find a Products_purchases
     * @example
     * // Get one Products_purchases
     * const products_purchases = await prisma.products_purchases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Products_purchasesFindUniqueOrThrowArgs>(args: SelectSubset<T, Products_purchasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_purchasesFindFirstArgs} args - Arguments to find a Products_purchases
     * @example
     * // Get one Products_purchases
     * const products_purchases = await prisma.products_purchases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Products_purchasesFindFirstArgs>(args?: SelectSubset<T, Products_purchasesFindFirstArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products_purchases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_purchasesFindFirstOrThrowArgs} args - Arguments to find a Products_purchases
     * @example
     * // Get one Products_purchases
     * const products_purchases = await prisma.products_purchases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Products_purchasesFindFirstOrThrowArgs>(args?: SelectSubset<T, Products_purchasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products_purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_purchasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_purchases
     * const products_purchases = await prisma.products_purchases.findMany()
     * 
     * // Get first 10 Products_purchases
     * const products_purchases = await prisma.products_purchases.findMany({ take: 10 })
     * 
     * // Only select the `purchase_id`
     * const products_purchasesWithPurchase_idOnly = await prisma.products_purchases.findMany({ select: { purchase_id: true } })
     * 
     */
    findMany<T extends Products_purchasesFindManyArgs>(args?: SelectSubset<T, Products_purchasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products_purchases.
     * @param {Products_purchasesCreateArgs} args - Arguments to create a Products_purchases.
     * @example
     * // Create one Products_purchases
     * const Products_purchases = await prisma.products_purchases.create({
     *   data: {
     *     // ... data to create a Products_purchases
     *   }
     * })
     * 
     */
    create<T extends Products_purchasesCreateArgs>(args: SelectSubset<T, Products_purchasesCreateArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products_purchases.
     * @param {Products_purchasesCreateManyArgs} args - Arguments to create many Products_purchases.
     * @example
     * // Create many Products_purchases
     * const products_purchases = await prisma.products_purchases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Products_purchasesCreateManyArgs>(args?: SelectSubset<T, Products_purchasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products_purchases and returns the data saved in the database.
     * @param {Products_purchasesCreateManyAndReturnArgs} args - Arguments to create many Products_purchases.
     * @example
     * // Create many Products_purchases
     * const products_purchases = await prisma.products_purchases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products_purchases and only return the `purchase_id`
     * const products_purchasesWithPurchase_idOnly = await prisma.products_purchases.createManyAndReturn({
     *   select: { purchase_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Products_purchasesCreateManyAndReturnArgs>(args?: SelectSubset<T, Products_purchasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products_purchases.
     * @param {Products_purchasesDeleteArgs} args - Arguments to delete one Products_purchases.
     * @example
     * // Delete one Products_purchases
     * const Products_purchases = await prisma.products_purchases.delete({
     *   where: {
     *     // ... filter to delete one Products_purchases
     *   }
     * })
     * 
     */
    delete<T extends Products_purchasesDeleteArgs>(args: SelectSubset<T, Products_purchasesDeleteArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products_purchases.
     * @param {Products_purchasesUpdateArgs} args - Arguments to update one Products_purchases.
     * @example
     * // Update one Products_purchases
     * const products_purchases = await prisma.products_purchases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Products_purchasesUpdateArgs>(args: SelectSubset<T, Products_purchasesUpdateArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products_purchases.
     * @param {Products_purchasesDeleteManyArgs} args - Arguments to filter Products_purchases to delete.
     * @example
     * // Delete a few Products_purchases
     * const { count } = await prisma.products_purchases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Products_purchasesDeleteManyArgs>(args?: SelectSubset<T, Products_purchasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_purchasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_purchases
     * const products_purchases = await prisma.products_purchases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Products_purchasesUpdateManyArgs>(args: SelectSubset<T, Products_purchasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_purchases and returns the data updated in the database.
     * @param {Products_purchasesUpdateManyAndReturnArgs} args - Arguments to update many Products_purchases.
     * @example
     * // Update many Products_purchases
     * const products_purchases = await prisma.products_purchases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products_purchases and only return the `purchase_id`
     * const products_purchasesWithPurchase_idOnly = await prisma.products_purchases.updateManyAndReturn({
     *   select: { purchase_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Products_purchasesUpdateManyAndReturnArgs>(args: SelectSubset<T, Products_purchasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products_purchases.
     * @param {Products_purchasesUpsertArgs} args - Arguments to update or create a Products_purchases.
     * @example
     * // Update or create a Products_purchases
     * const products_purchases = await prisma.products_purchases.upsert({
     *   create: {
     *     // ... data to create a Products_purchases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_purchases we want to update
     *   }
     * })
     */
    upsert<T extends Products_purchasesUpsertArgs>(args: SelectSubset<T, Products_purchasesUpsertArgs<ExtArgs>>): Prisma__Products_purchasesClient<$Result.GetResult<Prisma.$Products_purchasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_purchasesCountArgs} args - Arguments to filter Products_purchases to count.
     * @example
     * // Count the number of Products_purchases
     * const count = await prisma.products_purchases.count({
     *   where: {
     *     // ... the filter for the Products_purchases we want to count
     *   }
     * })
    **/
    count<T extends Products_purchasesCountArgs>(
      args?: Subset<T, Products_purchasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_purchasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_purchasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Products_purchasesAggregateArgs>(args: Subset<T, Products_purchasesAggregateArgs>): Prisma.PrismaPromise<GetProducts_purchasesAggregateType<T>>

    /**
     * Group by Products_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_purchasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Products_purchasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Products_purchasesGroupByArgs['orderBy'] }
        : { orderBy?: Products_purchasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Products_purchasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_purchasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products_purchases model
   */
  readonly fields: Products_purchasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products_purchases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Products_purchasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchases<T extends PurchasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchasesDefaultArgs<ExtArgs>>): Prisma__PurchasesClient<$Result.GetResult<Prisma.$PurchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Products_purchases model
   */
  interface Products_purchasesFieldRefs {
    readonly purchase_id: FieldRef<"Products_purchases", 'String'>
    readonly product_id: FieldRef<"Products_purchases", 'String'>
    readonly product_quantity: FieldRef<"Products_purchases", 'Int'>
    readonly product_unit_price: FieldRef<"Products_purchases", 'Decimal'>
    readonly created_at: FieldRef<"Products_purchases", 'DateTime'>
    readonly last_update: FieldRef<"Products_purchases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products_purchases findUnique
   */
  export type Products_purchasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * Filter, which Products_purchases to fetch.
     */
    where: Products_purchasesWhereUniqueInput
  }

  /**
   * Products_purchases findUniqueOrThrow
   */
  export type Products_purchasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * Filter, which Products_purchases to fetch.
     */
    where: Products_purchasesWhereUniqueInput
  }

  /**
   * Products_purchases findFirst
   */
  export type Products_purchasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * Filter, which Products_purchases to fetch.
     */
    where?: Products_purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_purchases to fetch.
     */
    orderBy?: Products_purchasesOrderByWithRelationInput | Products_purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_purchases.
     */
    cursor?: Products_purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_purchases.
     */
    distinct?: Products_purchasesScalarFieldEnum | Products_purchasesScalarFieldEnum[]
  }

  /**
   * Products_purchases findFirstOrThrow
   */
  export type Products_purchasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * Filter, which Products_purchases to fetch.
     */
    where?: Products_purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_purchases to fetch.
     */
    orderBy?: Products_purchasesOrderByWithRelationInput | Products_purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products_purchases.
     */
    cursor?: Products_purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products_purchases.
     */
    distinct?: Products_purchasesScalarFieldEnum | Products_purchasesScalarFieldEnum[]
  }

  /**
   * Products_purchases findMany
   */
  export type Products_purchasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * Filter, which Products_purchases to fetch.
     */
    where?: Products_purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products_purchases to fetch.
     */
    orderBy?: Products_purchasesOrderByWithRelationInput | Products_purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products_purchases.
     */
    cursor?: Products_purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products_purchases.
     */
    skip?: number
    distinct?: Products_purchasesScalarFieldEnum | Products_purchasesScalarFieldEnum[]
  }

  /**
   * Products_purchases create
   */
  export type Products_purchasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * The data needed to create a Products_purchases.
     */
    data: XOR<Products_purchasesCreateInput, Products_purchasesUncheckedCreateInput>
  }

  /**
   * Products_purchases createMany
   */
  export type Products_purchasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products_purchases.
     */
    data: Products_purchasesCreateManyInput | Products_purchasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products_purchases createManyAndReturn
   */
  export type Products_purchasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * The data used to create many Products_purchases.
     */
    data: Products_purchasesCreateManyInput | Products_purchasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products_purchases update
   */
  export type Products_purchasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * The data needed to update a Products_purchases.
     */
    data: XOR<Products_purchasesUpdateInput, Products_purchasesUncheckedUpdateInput>
    /**
     * Choose, which Products_purchases to update.
     */
    where: Products_purchasesWhereUniqueInput
  }

  /**
   * Products_purchases updateMany
   */
  export type Products_purchasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products_purchases.
     */
    data: XOR<Products_purchasesUpdateManyMutationInput, Products_purchasesUncheckedUpdateManyInput>
    /**
     * Filter which Products_purchases to update
     */
    where?: Products_purchasesWhereInput
    /**
     * Limit how many Products_purchases to update.
     */
    limit?: number
  }

  /**
   * Products_purchases updateManyAndReturn
   */
  export type Products_purchasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * The data used to update Products_purchases.
     */
    data: XOR<Products_purchasesUpdateManyMutationInput, Products_purchasesUncheckedUpdateManyInput>
    /**
     * Filter which Products_purchases to update
     */
    where?: Products_purchasesWhereInput
    /**
     * Limit how many Products_purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products_purchases upsert
   */
  export type Products_purchasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * The filter to search for the Products_purchases to update in case it exists.
     */
    where: Products_purchasesWhereUniqueInput
    /**
     * In case the Products_purchases found by the `where` argument doesn't exist, create a new Products_purchases with this data.
     */
    create: XOR<Products_purchasesCreateInput, Products_purchasesUncheckedCreateInput>
    /**
     * In case the Products_purchases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Products_purchasesUpdateInput, Products_purchasesUncheckedUpdateInput>
  }

  /**
   * Products_purchases delete
   */
  export type Products_purchasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
    /**
     * Filter which Products_purchases to delete.
     */
    where: Products_purchasesWhereUniqueInput
  }

  /**
   * Products_purchases deleteMany
   */
  export type Products_purchasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products_purchases to delete
     */
    where?: Products_purchasesWhereInput
    /**
     * Limit how many Products_purchases to delete.
     */
    limit?: number
  }

  /**
   * Products_purchases without action
   */
  export type Products_purchasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products_purchases
     */
    select?: Products_purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products_purchases
     */
    omit?: Products_purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Products_purchasesInclude<ExtArgs> | null
  }


  /**
   * Model Expenses_category
   */

  export type AggregateExpenses_category = {
    _count: Expenses_categoryCountAggregateOutputType | null
    _min: Expenses_categoryMinAggregateOutputType | null
    _max: Expenses_categoryMaxAggregateOutputType | null
  }

  export type Expenses_categoryMinAggregateOutputType = {
    expense_category_id: string | null
    name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Expenses_categoryMaxAggregateOutputType = {
    expense_category_id: string | null
    name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type Expenses_categoryCountAggregateOutputType = {
    expense_category_id: number
    name: number
    created_at: number
    last_update: number
    _all: number
  }


  export type Expenses_categoryMinAggregateInputType = {
    expense_category_id?: true
    name?: true
    created_at?: true
    last_update?: true
  }

  export type Expenses_categoryMaxAggregateInputType = {
    expense_category_id?: true
    name?: true
    created_at?: true
    last_update?: true
  }

  export type Expenses_categoryCountAggregateInputType = {
    expense_category_id?: true
    name?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type Expenses_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses_category to aggregate.
     */
    where?: Expenses_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses_categories to fetch.
     */
    orderBy?: Expenses_categoryOrderByWithRelationInput | Expenses_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Expenses_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses_categories
    **/
    _count?: true | Expenses_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Expenses_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Expenses_categoryMaxAggregateInputType
  }

  export type GetExpenses_categoryAggregateType<T extends Expenses_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses_category[P]>
      : GetScalarType<T[P], AggregateExpenses_category[P]>
  }




  export type Expenses_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Expenses_categoryWhereInput
    orderBy?: Expenses_categoryOrderByWithAggregationInput | Expenses_categoryOrderByWithAggregationInput[]
    by: Expenses_categoryScalarFieldEnum[] | Expenses_categoryScalarFieldEnum
    having?: Expenses_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Expenses_categoryCountAggregateInputType | true
    _min?: Expenses_categoryMinAggregateInputType
    _max?: Expenses_categoryMaxAggregateInputType
  }

  export type Expenses_categoryGroupByOutputType = {
    expense_category_id: string
    name: string
    created_at: Date
    last_update: Date
    _count: Expenses_categoryCountAggregateOutputType | null
    _min: Expenses_categoryMinAggregateOutputType | null
    _max: Expenses_categoryMaxAggregateOutputType | null
  }

  type GetExpenses_categoryGroupByPayload<T extends Expenses_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Expenses_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Expenses_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Expenses_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Expenses_categoryGroupByOutputType[P]>
        }
      >
    >


  export type Expenses_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expense_category_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
    Expenses?: boolean | Expenses_category$ExpensesArgs<ExtArgs>
    _count?: boolean | Expenses_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses_category"]>

  export type Expenses_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expense_category_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["expenses_category"]>

  export type Expenses_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expense_category_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
  }, ExtArgs["result"]["expenses_category"]>

  export type Expenses_categorySelectScalar = {
    expense_category_id?: boolean
    name?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type Expenses_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expense_category_id" | "name" | "created_at" | "last_update", ExtArgs["result"]["expenses_category"]>
  export type Expenses_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expenses?: boolean | Expenses_category$ExpensesArgs<ExtArgs>
    _count?: boolean | Expenses_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Expenses_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Expenses_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Expenses_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expenses_category"
    objects: {
      Expenses: Prisma.$ExpensesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      expense_category_id: string
      name: string
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["expenses_category"]>
    composites: {}
  }

  type Expenses_categoryGetPayload<S extends boolean | null | undefined | Expenses_categoryDefaultArgs> = $Result.GetResult<Prisma.$Expenses_categoryPayload, S>

  type Expenses_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Expenses_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Expenses_categoryCountAggregateInputType | true
    }

  export interface Expenses_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expenses_category'], meta: { name: 'Expenses_category' } }
    /**
     * Find zero or one Expenses_category that matches the filter.
     * @param {Expenses_categoryFindUniqueArgs} args - Arguments to find a Expenses_category
     * @example
     * // Get one Expenses_category
     * const expenses_category = await prisma.expenses_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Expenses_categoryFindUniqueArgs>(args: SelectSubset<T, Expenses_categoryFindUniqueArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Expenses_categoryFindUniqueOrThrowArgs} args - Arguments to find a Expenses_category
     * @example
     * // Get one Expenses_category
     * const expenses_category = await prisma.expenses_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Expenses_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Expenses_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expenses_categoryFindFirstArgs} args - Arguments to find a Expenses_category
     * @example
     * // Get one Expenses_category
     * const expenses_category = await prisma.expenses_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Expenses_categoryFindFirstArgs>(args?: SelectSubset<T, Expenses_categoryFindFirstArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expenses_categoryFindFirstOrThrowArgs} args - Arguments to find a Expenses_category
     * @example
     * // Get one Expenses_category
     * const expenses_category = await prisma.expenses_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Expenses_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Expenses_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expenses_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses_categories
     * const expenses_categories = await prisma.expenses_category.findMany()
     * 
     * // Get first 10 Expenses_categories
     * const expenses_categories = await prisma.expenses_category.findMany({ take: 10 })
     * 
     * // Only select the `expense_category_id`
     * const expenses_categoryWithExpense_category_idOnly = await prisma.expenses_category.findMany({ select: { expense_category_id: true } })
     * 
     */
    findMany<T extends Expenses_categoryFindManyArgs>(args?: SelectSubset<T, Expenses_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses_category.
     * @param {Expenses_categoryCreateArgs} args - Arguments to create a Expenses_category.
     * @example
     * // Create one Expenses_category
     * const Expenses_category = await prisma.expenses_category.create({
     *   data: {
     *     // ... data to create a Expenses_category
     *   }
     * })
     * 
     */
    create<T extends Expenses_categoryCreateArgs>(args: SelectSubset<T, Expenses_categoryCreateArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses_categories.
     * @param {Expenses_categoryCreateManyArgs} args - Arguments to create many Expenses_categories.
     * @example
     * // Create many Expenses_categories
     * const expenses_category = await prisma.expenses_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Expenses_categoryCreateManyArgs>(args?: SelectSubset<T, Expenses_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses_categories and returns the data saved in the database.
     * @param {Expenses_categoryCreateManyAndReturnArgs} args - Arguments to create many Expenses_categories.
     * @example
     * // Create many Expenses_categories
     * const expenses_category = await prisma.expenses_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses_categories and only return the `expense_category_id`
     * const expenses_categoryWithExpense_category_idOnly = await prisma.expenses_category.createManyAndReturn({
     *   select: { expense_category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Expenses_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, Expenses_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenses_category.
     * @param {Expenses_categoryDeleteArgs} args - Arguments to delete one Expenses_category.
     * @example
     * // Delete one Expenses_category
     * const Expenses_category = await prisma.expenses_category.delete({
     *   where: {
     *     // ... filter to delete one Expenses_category
     *   }
     * })
     * 
     */
    delete<T extends Expenses_categoryDeleteArgs>(args: SelectSubset<T, Expenses_categoryDeleteArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses_category.
     * @param {Expenses_categoryUpdateArgs} args - Arguments to update one Expenses_category.
     * @example
     * // Update one Expenses_category
     * const expenses_category = await prisma.expenses_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Expenses_categoryUpdateArgs>(args: SelectSubset<T, Expenses_categoryUpdateArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses_categories.
     * @param {Expenses_categoryDeleteManyArgs} args - Arguments to filter Expenses_categories to delete.
     * @example
     * // Delete a few Expenses_categories
     * const { count } = await prisma.expenses_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Expenses_categoryDeleteManyArgs>(args?: SelectSubset<T, Expenses_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expenses_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses_categories
     * const expenses_category = await prisma.expenses_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Expenses_categoryUpdateManyArgs>(args: SelectSubset<T, Expenses_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses_categories and returns the data updated in the database.
     * @param {Expenses_categoryUpdateManyAndReturnArgs} args - Arguments to update many Expenses_categories.
     * @example
     * // Update many Expenses_categories
     * const expenses_category = await prisma.expenses_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses_categories and only return the `expense_category_id`
     * const expenses_categoryWithExpense_category_idOnly = await prisma.expenses_category.updateManyAndReturn({
     *   select: { expense_category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Expenses_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, Expenses_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenses_category.
     * @param {Expenses_categoryUpsertArgs} args - Arguments to update or create a Expenses_category.
     * @example
     * // Update or create a Expenses_category
     * const expenses_category = await prisma.expenses_category.upsert({
     *   create: {
     *     // ... data to create a Expenses_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses_category we want to update
     *   }
     * })
     */
    upsert<T extends Expenses_categoryUpsertArgs>(args: SelectSubset<T, Expenses_categoryUpsertArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expenses_categoryCountArgs} args - Arguments to filter Expenses_categories to count.
     * @example
     * // Count the number of Expenses_categories
     * const count = await prisma.expenses_category.count({
     *   where: {
     *     // ... the filter for the Expenses_categories we want to count
     *   }
     * })
    **/
    count<T extends Expenses_categoryCountArgs>(
      args?: Subset<T, Expenses_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Expenses_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expenses_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Expenses_categoryAggregateArgs>(args: Subset<T, Expenses_categoryAggregateArgs>): Prisma.PrismaPromise<GetExpenses_categoryAggregateType<T>>

    /**
     * Group by Expenses_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Expenses_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Expenses_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Expenses_categoryGroupByArgs['orderBy'] }
        : { orderBy?: Expenses_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Expenses_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenses_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expenses_category model
   */
  readonly fields: Expenses_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expenses_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Expenses_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Expenses<T extends Expenses_category$ExpensesArgs<ExtArgs> = {}>(args?: Subset<T, Expenses_category$ExpensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expenses_category model
   */
  interface Expenses_categoryFieldRefs {
    readonly expense_category_id: FieldRef<"Expenses_category", 'String'>
    readonly name: FieldRef<"Expenses_category", 'String'>
    readonly created_at: FieldRef<"Expenses_category", 'DateTime'>
    readonly last_update: FieldRef<"Expenses_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expenses_category findUnique
   */
  export type Expenses_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Expenses_category to fetch.
     */
    where: Expenses_categoryWhereUniqueInput
  }

  /**
   * Expenses_category findUniqueOrThrow
   */
  export type Expenses_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Expenses_category to fetch.
     */
    where: Expenses_categoryWhereUniqueInput
  }

  /**
   * Expenses_category findFirst
   */
  export type Expenses_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Expenses_category to fetch.
     */
    where?: Expenses_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses_categories to fetch.
     */
    orderBy?: Expenses_categoryOrderByWithRelationInput | Expenses_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses_categories.
     */
    cursor?: Expenses_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses_categories.
     */
    distinct?: Expenses_categoryScalarFieldEnum | Expenses_categoryScalarFieldEnum[]
  }

  /**
   * Expenses_category findFirstOrThrow
   */
  export type Expenses_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Expenses_category to fetch.
     */
    where?: Expenses_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses_categories to fetch.
     */
    orderBy?: Expenses_categoryOrderByWithRelationInput | Expenses_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses_categories.
     */
    cursor?: Expenses_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses_categories.
     */
    distinct?: Expenses_categoryScalarFieldEnum | Expenses_categoryScalarFieldEnum[]
  }

  /**
   * Expenses_category findMany
   */
  export type Expenses_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * Filter, which Expenses_categories to fetch.
     */
    where?: Expenses_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses_categories to fetch.
     */
    orderBy?: Expenses_categoryOrderByWithRelationInput | Expenses_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses_categories.
     */
    cursor?: Expenses_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses_categories.
     */
    skip?: number
    distinct?: Expenses_categoryScalarFieldEnum | Expenses_categoryScalarFieldEnum[]
  }

  /**
   * Expenses_category create
   */
  export type Expenses_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Expenses_category.
     */
    data: XOR<Expenses_categoryCreateInput, Expenses_categoryUncheckedCreateInput>
  }

  /**
   * Expenses_category createMany
   */
  export type Expenses_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses_categories.
     */
    data: Expenses_categoryCreateManyInput | Expenses_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expenses_category createManyAndReturn
   */
  export type Expenses_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses_categories.
     */
    data: Expenses_categoryCreateManyInput | Expenses_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expenses_category update
   */
  export type Expenses_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Expenses_category.
     */
    data: XOR<Expenses_categoryUpdateInput, Expenses_categoryUncheckedUpdateInput>
    /**
     * Choose, which Expenses_category to update.
     */
    where: Expenses_categoryWhereUniqueInput
  }

  /**
   * Expenses_category updateMany
   */
  export type Expenses_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses_categories.
     */
    data: XOR<Expenses_categoryUpdateManyMutationInput, Expenses_categoryUncheckedUpdateManyInput>
    /**
     * Filter which Expenses_categories to update
     */
    where?: Expenses_categoryWhereInput
    /**
     * Limit how many Expenses_categories to update.
     */
    limit?: number
  }

  /**
   * Expenses_category updateManyAndReturn
   */
  export type Expenses_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * The data used to update Expenses_categories.
     */
    data: XOR<Expenses_categoryUpdateManyMutationInput, Expenses_categoryUncheckedUpdateManyInput>
    /**
     * Filter which Expenses_categories to update
     */
    where?: Expenses_categoryWhereInput
    /**
     * Limit how many Expenses_categories to update.
     */
    limit?: number
  }

  /**
   * Expenses_category upsert
   */
  export type Expenses_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Expenses_category to update in case it exists.
     */
    where: Expenses_categoryWhereUniqueInput
    /**
     * In case the Expenses_category found by the `where` argument doesn't exist, create a new Expenses_category with this data.
     */
    create: XOR<Expenses_categoryCreateInput, Expenses_categoryUncheckedCreateInput>
    /**
     * In case the Expenses_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Expenses_categoryUpdateInput, Expenses_categoryUncheckedUpdateInput>
  }

  /**
   * Expenses_category delete
   */
  export type Expenses_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
    /**
     * Filter which Expenses_category to delete.
     */
    where: Expenses_categoryWhereUniqueInput
  }

  /**
   * Expenses_category deleteMany
   */
  export type Expenses_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses_categories to delete
     */
    where?: Expenses_categoryWhereInput
    /**
     * Limit how many Expenses_categories to delete.
     */
    limit?: number
  }

  /**
   * Expenses_category.Expenses
   */
  export type Expenses_category$ExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    where?: ExpensesWhereInput
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    cursor?: ExpensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses_category without action
   */
  export type Expenses_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses_category
     */
    select?: Expenses_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses_category
     */
    omit?: Expenses_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Expenses_categoryInclude<ExtArgs> | null
  }


  /**
   * Model Expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpensesSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpensesMinAggregateOutputType = {
    expenses_id: string | null
    amount: Decimal | null
    date: Date | null
    exp_category_name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type ExpensesMaxAggregateOutputType = {
    expenses_id: string | null
    amount: Decimal | null
    date: Date | null
    exp_category_name: string | null
    created_at: Date | null
    last_update: Date | null
  }

  export type ExpensesCountAggregateOutputType = {
    expenses_id: number
    amount: number
    date: number
    exp_category_name: number
    created_at: number
    last_update: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    amount?: true
  }

  export type ExpensesSumAggregateInputType = {
    amount?: true
  }

  export type ExpensesMinAggregateInputType = {
    expenses_id?: true
    amount?: true
    date?: true
    exp_category_name?: true
    created_at?: true
    last_update?: true
  }

  export type ExpensesMaxAggregateInputType = {
    expenses_id?: true
    amount?: true
    date?: true
    exp_category_name?: true
    created_at?: true
    last_update?: true
  }

  export type ExpensesCountAggregateInputType = {
    expenses_id?: true
    amount?: true
    date?: true
    exp_category_name?: true
    created_at?: true
    last_update?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to aggregate.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type ExpensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpensesWhereInput
    orderBy?: ExpensesOrderByWithAggregationInput | ExpensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: ExpensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    expenses_id: string
    amount: Decimal
    date: Date
    exp_category_name: string
    created_at: Date
    last_update: Date
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends ExpensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type ExpensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenses_id?: boolean
    amount?: boolean
    date?: boolean
    exp_category_name?: boolean
    created_at?: boolean
    last_update?: boolean
    Expenses_category?: boolean | Expenses_categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenses_id?: boolean
    amount?: boolean
    date?: boolean
    exp_category_name?: boolean
    created_at?: boolean
    last_update?: boolean
    Expenses_category?: boolean | Expenses_categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expenses_id?: boolean
    amount?: boolean
    date?: boolean
    exp_category_name?: boolean
    created_at?: boolean
    last_update?: boolean
    Expenses_category?: boolean | Expenses_categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type ExpensesSelectScalar = {
    expenses_id?: boolean
    amount?: boolean
    date?: boolean
    exp_category_name?: boolean
    created_at?: boolean
    last_update?: boolean
  }

  export type ExpensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expenses_id" | "amount" | "date" | "exp_category_name" | "created_at" | "last_update", ExtArgs["result"]["expenses"]>
  export type ExpensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expenses_category?: boolean | Expenses_categoryDefaultArgs<ExtArgs>
  }
  export type ExpensesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expenses_category?: boolean | Expenses_categoryDefaultArgs<ExtArgs>
  }
  export type ExpensesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Expenses_category?: boolean | Expenses_categoryDefaultArgs<ExtArgs>
  }

  export type $ExpensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expenses"
    objects: {
      Expenses_category: Prisma.$Expenses_categoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      expenses_id: string
      amount: Prisma.Decimal
      date: Date
      exp_category_name: string
      created_at: Date
      last_update: Date
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type ExpensesGetPayload<S extends boolean | null | undefined | ExpensesDefaultArgs> = $Result.GetResult<Prisma.$ExpensesPayload, S>

  type ExpensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface ExpensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expenses'], meta: { name: 'Expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {ExpensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpensesFindUniqueArgs>(args: SelectSubset<T, ExpensesFindUniqueArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpensesFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpensesFindFirstArgs>(args?: SelectSubset<T, ExpensesFindFirstArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpensesFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `expenses_id`
     * const expensesWithExpenses_idOnly = await prisma.expenses.findMany({ select: { expenses_id: true } })
     * 
     */
    findMany<T extends ExpensesFindManyArgs>(args?: SelectSubset<T, ExpensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {ExpensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends ExpensesCreateArgs>(args: SelectSubset<T, ExpensesCreateArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpensesCreateManyArgs>(args?: SelectSubset<T, ExpensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `expenses_id`
     * const expensesWithExpenses_idOnly = await prisma.expenses.createManyAndReturn({
     *   select: { expenses_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpensesCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenses.
     * @param {ExpensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends ExpensesDeleteArgs>(args: SelectSubset<T, ExpensesDeleteArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {ExpensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpensesUpdateArgs>(args: SelectSubset<T, ExpensesUpdateArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpensesDeleteManyArgs>(args?: SelectSubset<T, ExpensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpensesUpdateManyArgs>(args: SelectSubset<T, ExpensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpensesUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `expenses_id`
     * const expensesWithExpenses_idOnly = await prisma.expenses.updateManyAndReturn({
     *   select: { expenses_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpensesUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpensesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenses.
     * @param {ExpensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends ExpensesUpsertArgs>(args: SelectSubset<T, ExpensesUpsertArgs<ExtArgs>>): Prisma__ExpensesClient<$Result.GetResult<Prisma.$ExpensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpensesCountArgs>(
      args?: Subset<T, ExpensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpensesGroupByArgs['orderBy'] }
        : { orderBy?: ExpensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expenses model
   */
  readonly fields: ExpensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Expenses_category<T extends Expenses_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Expenses_categoryDefaultArgs<ExtArgs>>): Prisma__Expenses_categoryClient<$Result.GetResult<Prisma.$Expenses_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expenses model
   */
  interface ExpensesFieldRefs {
    readonly expenses_id: FieldRef<"Expenses", 'String'>
    readonly amount: FieldRef<"Expenses", 'Decimal'>
    readonly date: FieldRef<"Expenses", 'DateTime'>
    readonly exp_category_name: FieldRef<"Expenses", 'String'>
    readonly created_at: FieldRef<"Expenses", 'DateTime'>
    readonly last_update: FieldRef<"Expenses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expenses findUnique
   */
  export type ExpensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses findUniqueOrThrow
   */
  export type ExpensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses findFirst
   */
  export type ExpensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses findFirstOrThrow
   */
  export type ExpensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses findMany
   */
  export type ExpensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpensesOrderByWithRelationInput | ExpensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * Expenses create
   */
  export type ExpensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * The data needed to create a Expenses.
     */
    data: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
  }

  /**
   * Expenses createMany
   */
  export type ExpensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpensesCreateManyInput | ExpensesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expenses createManyAndReturn
   */
  export type ExpensesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpensesCreateManyInput | ExpensesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expenses update
   */
  export type ExpensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * The data needed to update a Expenses.
     */
    data: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
    /**
     * Choose, which Expenses to update.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses updateMany
   */
  export type ExpensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expenses updateManyAndReturn
   */
  export type ExpensesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expenses upsert
   */
  export type ExpensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * The filter to search for the Expenses to update in case it exists.
     */
    where: ExpensesWhereUniqueInput
    /**
     * In case the Expenses found by the `where` argument doesn't exist, create a new Expenses with this data.
     */
    create: XOR<ExpensesCreateInput, ExpensesUncheckedCreateInput>
    /**
     * In case the Expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpensesUpdateInput, ExpensesUncheckedUpdateInput>
  }

  /**
   * Expenses delete
   */
  export type ExpensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
    /**
     * Filter which Expenses to delete.
     */
    where: ExpensesWhereUniqueInput
  }

  /**
   * Expenses deleteMany
   */
  export type ExpensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpensesWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expenses without action
   */
  export type ExpensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expenses
     */
    select?: ExpensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expenses
     */
    omit?: ExpensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpensesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    username: string | null
    password: string | null
    employee_id: string | null
    role: string | null
    created_at: Date | null
    last_time_online: Date | null
    last_update: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    username: string | null
    password: string | null
    employee_id: string | null
    role: string | null
    created_at: Date | null
    last_time_online: Date | null
    last_update: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    password: number
    employee_id: number
    role: number
    created_at: number
    last_time_online: number
    last_update: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    employee_id?: true
    role?: true
    created_at?: true
    last_time_online?: true
    last_update?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    employee_id?: true
    role?: true
    created_at?: true
    last_time_online?: true
    last_update?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    employee_id?: true
    role?: true
    created_at?: true
    last_time_online?: true
    last_update?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    username: string
    password: string
    employee_id: string
    role: string
    created_at: Date
    last_time_online: Date | null
    last_update: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password?: boolean
    employee_id?: boolean
    role?: boolean
    created_at?: boolean
    last_time_online?: boolean
    last_update?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password?: boolean
    employee_id?: boolean
    role?: boolean
    created_at?: boolean
    last_time_online?: boolean
    last_update?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    password?: boolean
    employee_id?: boolean
    role?: boolean
    created_at?: boolean
    last_time_online?: boolean
    last_update?: boolean
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    username?: boolean
    password?: boolean
    employee_id?: boolean
    role?: boolean
    created_at?: boolean
    last_time_online?: boolean
    last_update?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "password" | "employee_id" | "role" | "created_at" | "last_time_online" | "last_update", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeesDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      employee: Prisma.$EmployeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
      password: string
      employee_id: string
      role: string
      created_at: Date
      last_time_online: Date | null
      last_update: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeesDefaultArgs<ExtArgs>>): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly employee_id: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly last_time_online: FieldRef<"Users", 'DateTime'>
    readonly last_update: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Points_of_salesScalarFieldEnum: {
    point_of_sales_id: 'point_of_sales_id',
    name: 'name',
    address: 'address',
    img: 'img',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type Points_of_salesScalarFieldEnum = (typeof Points_of_salesScalarFieldEnum)[keyof typeof Points_of_salesScalarFieldEnum]


  export const Products_categoriesScalarFieldEnum: {
    products_categories_id: 'products_categories_id',
    name: 'name',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type Products_categoriesScalarFieldEnum = (typeof Products_categoriesScalarFieldEnum)[keyof typeof Products_categoriesScalarFieldEnum]


  export const ProvidersScalarFieldEnum: {
    provider_id: 'provider_id',
    name: 'name',
    phone_number: 'phone_number',
    email: 'email',
    img: 'img',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type ProvidersScalarFieldEnum = (typeof ProvidersScalarFieldEnum)[keyof typeof ProvidersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    branch: 'branch',
    model: 'model',
    description: 'description',
    purchase_price: 'purchase_price',
    stock_quantity: 'stock_quantity',
    amount: 'amount',
    purchase_date: 'purchase_date',
    category_name: 'category_name',
    provider_name: 'provider_name',
    pos_name: 'pos_name',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Products_imagesScalarFieldEnum: {
    id: 'id',
    image_original_key: 'image_original_key',
    image_thumb_key: 'image_thumb_key',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type Products_imagesScalarFieldEnum = (typeof Products_imagesScalarFieldEnum)[keyof typeof Products_imagesScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    employee_id: 'employee_id',
    CID: 'CID',
    first_name: 'first_name',
    last_name: 'last_name',
    address: 'address',
    phone_number: 'phone_number',
    img: 'img',
    pos_name: 'pos_name',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const SalaryScalarFieldEnum: {
    employee_cid: 'employee_cid',
    amount: 'amount',
    date: 'date',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type SalaryScalarFieldEnum = (typeof SalaryScalarFieldEnum)[keyof typeof SalaryScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    sales_id: 'sales_id',
    employee_cid: 'employee_cid',
    date: 'date',
    total_amount: 'total_amount',
    created_at: 'created_at',
    last_update: 'last_update',
    deleted_at: 'deleted_at'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const Products_salesScalarFieldEnum: {
    sale_id: 'sale_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    total_price: 'total_price'
  };

  export type Products_salesScalarFieldEnum = (typeof Products_salesScalarFieldEnum)[keyof typeof Products_salesScalarFieldEnum]


  export const PurchasesScalarFieldEnum: {
    purchases_id: 'purchases_id',
    purchase_date: 'purchase_date',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type PurchasesScalarFieldEnum = (typeof PurchasesScalarFieldEnum)[keyof typeof PurchasesScalarFieldEnum]


  export const Products_purchasesScalarFieldEnum: {
    purchase_id: 'purchase_id',
    product_id: 'product_id',
    product_quantity: 'product_quantity',
    product_unit_price: 'product_unit_price',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type Products_purchasesScalarFieldEnum = (typeof Products_purchasesScalarFieldEnum)[keyof typeof Products_purchasesScalarFieldEnum]


  export const Expenses_categoryScalarFieldEnum: {
    expense_category_id: 'expense_category_id',
    name: 'name',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type Expenses_categoryScalarFieldEnum = (typeof Expenses_categoryScalarFieldEnum)[keyof typeof Expenses_categoryScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    expenses_id: 'expenses_id',
    amount: 'amount',
    date: 'date',
    exp_category_name: 'exp_category_name',
    created_at: 'created_at',
    last_update: 'last_update'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    password: 'password',
    employee_id: 'employee_id',
    role: 'role',
    created_at: 'created_at',
    last_time_online: 'last_time_online',
    last_update: 'last_update'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Points_of_salesWhereInput = {
    AND?: Points_of_salesWhereInput | Points_of_salesWhereInput[]
    OR?: Points_of_salesWhereInput[]
    NOT?: Points_of_salesWhereInput | Points_of_salesWhereInput[]
    point_of_sales_id?: UuidFilter<"Points_of_sales"> | string
    name?: StringFilter<"Points_of_sales"> | string
    address?: StringFilter<"Points_of_sales"> | string
    img?: StringNullableFilter<"Points_of_sales"> | string | null
    created_at?: DateTimeFilter<"Points_of_sales"> | Date | string
    last_update?: DateTimeFilter<"Points_of_sales"> | Date | string
    employees?: EmployeesListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type Points_of_salesOrderByWithRelationInput = {
    point_of_sales_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    employees?: EmployeesOrderByRelationAggregateInput
    products?: ProductsOrderByRelationAggregateInput
  }

  export type Points_of_salesWhereUniqueInput = Prisma.AtLeast<{
    point_of_sales_id?: string
    name?: string
    AND?: Points_of_salesWhereInput | Points_of_salesWhereInput[]
    OR?: Points_of_salesWhereInput[]
    NOT?: Points_of_salesWhereInput | Points_of_salesWhereInput[]
    address?: StringFilter<"Points_of_sales"> | string
    img?: StringNullableFilter<"Points_of_sales"> | string | null
    created_at?: DateTimeFilter<"Points_of_sales"> | Date | string
    last_update?: DateTimeFilter<"Points_of_sales"> | Date | string
    employees?: EmployeesListRelationFilter
    products?: ProductsListRelationFilter
  }, "point_of_sales_id" | "name">

  export type Points_of_salesOrderByWithAggregationInput = {
    point_of_sales_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: Points_of_salesCountOrderByAggregateInput
    _max?: Points_of_salesMaxOrderByAggregateInput
    _min?: Points_of_salesMinOrderByAggregateInput
  }

  export type Points_of_salesScalarWhereWithAggregatesInput = {
    AND?: Points_of_salesScalarWhereWithAggregatesInput | Points_of_salesScalarWhereWithAggregatesInput[]
    OR?: Points_of_salesScalarWhereWithAggregatesInput[]
    NOT?: Points_of_salesScalarWhereWithAggregatesInput | Points_of_salesScalarWhereWithAggregatesInput[]
    point_of_sales_id?: UuidWithAggregatesFilter<"Points_of_sales"> | string
    name?: StringWithAggregatesFilter<"Points_of_sales"> | string
    address?: StringWithAggregatesFilter<"Points_of_sales"> | string
    img?: StringNullableWithAggregatesFilter<"Points_of_sales"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Points_of_sales"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Points_of_sales"> | Date | string
  }

  export type Products_categoriesWhereInput = {
    AND?: Products_categoriesWhereInput | Products_categoriesWhereInput[]
    OR?: Products_categoriesWhereInput[]
    NOT?: Products_categoriesWhereInput | Products_categoriesWhereInput[]
    products_categories_id?: UuidFilter<"Products_categories"> | string
    name?: StringFilter<"Products_categories"> | string
    created_at?: DateTimeFilter<"Products_categories"> | Date | string
    last_update?: DateTimeFilter<"Products_categories"> | Date | string
    products?: ProductsListRelationFilter
  }

  export type Products_categoriesOrderByWithRelationInput = {
    products_categories_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type Products_categoriesWhereUniqueInput = Prisma.AtLeast<{
    products_categories_id?: string
    name?: string
    AND?: Products_categoriesWhereInput | Products_categoriesWhereInput[]
    OR?: Products_categoriesWhereInput[]
    NOT?: Products_categoriesWhereInput | Products_categoriesWhereInput[]
    created_at?: DateTimeFilter<"Products_categories"> | Date | string
    last_update?: DateTimeFilter<"Products_categories"> | Date | string
    products?: ProductsListRelationFilter
  }, "products_categories_id" | "name">

  export type Products_categoriesOrderByWithAggregationInput = {
    products_categories_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: Products_categoriesCountOrderByAggregateInput
    _max?: Products_categoriesMaxOrderByAggregateInput
    _min?: Products_categoriesMinOrderByAggregateInput
  }

  export type Products_categoriesScalarWhereWithAggregatesInput = {
    AND?: Products_categoriesScalarWhereWithAggregatesInput | Products_categoriesScalarWhereWithAggregatesInput[]
    OR?: Products_categoriesScalarWhereWithAggregatesInput[]
    NOT?: Products_categoriesScalarWhereWithAggregatesInput | Products_categoriesScalarWhereWithAggregatesInput[]
    products_categories_id?: UuidWithAggregatesFilter<"Products_categories"> | string
    name?: StringWithAggregatesFilter<"Products_categories"> | string
    created_at?: DateTimeWithAggregatesFilter<"Products_categories"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Products_categories"> | Date | string
  }

  export type ProvidersWhereInput = {
    AND?: ProvidersWhereInput | ProvidersWhereInput[]
    OR?: ProvidersWhereInput[]
    NOT?: ProvidersWhereInput | ProvidersWhereInput[]
    provider_id?: UuidFilter<"Providers"> | string
    name?: StringFilter<"Providers"> | string
    phone_number?: StringFilter<"Providers"> | string
    email?: StringNullableFilter<"Providers"> | string | null
    img?: StringNullableFilter<"Providers"> | string | null
    created_at?: DateTimeFilter<"Providers"> | Date | string
    last_update?: DateTimeFilter<"Providers"> | Date | string
    products?: ProductsListRelationFilter
  }

  export type ProvidersOrderByWithRelationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type ProvidersWhereUniqueInput = Prisma.AtLeast<{
    provider_id?: string
    name?: string
    phone_number?: string
    email?: string
    AND?: ProvidersWhereInput | ProvidersWhereInput[]
    OR?: ProvidersWhereInput[]
    NOT?: ProvidersWhereInput | ProvidersWhereInput[]
    img?: StringNullableFilter<"Providers"> | string | null
    created_at?: DateTimeFilter<"Providers"> | Date | string
    last_update?: DateTimeFilter<"Providers"> | Date | string
    products?: ProductsListRelationFilter
  }, "provider_id" | "name" | "phone_number" | "email">

  export type ProvidersOrderByWithAggregationInput = {
    provider_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: ProvidersCountOrderByAggregateInput
    _max?: ProvidersMaxOrderByAggregateInput
    _min?: ProvidersMinOrderByAggregateInput
  }

  export type ProvidersScalarWhereWithAggregatesInput = {
    AND?: ProvidersScalarWhereWithAggregatesInput | ProvidersScalarWhereWithAggregatesInput[]
    OR?: ProvidersScalarWhereWithAggregatesInput[]
    NOT?: ProvidersScalarWhereWithAggregatesInput | ProvidersScalarWhereWithAggregatesInput[]
    provider_id?: UuidWithAggregatesFilter<"Providers"> | string
    name?: StringWithAggregatesFilter<"Providers"> | string
    phone_number?: StringWithAggregatesFilter<"Providers"> | string
    email?: StringNullableWithAggregatesFilter<"Providers"> | string | null
    img?: StringNullableWithAggregatesFilter<"Providers"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Providers"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Providers"> | Date | string
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    product_id?: UuidFilter<"Products"> | string
    branch?: StringFilter<"Products"> | string
    model?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    purchase_price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFilter<"Products"> | number
    amount?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFilter<"Products"> | Date | string
    category_name?: StringFilter<"Products"> | string
    provider_name?: StringFilter<"Products"> | string
    pos_name?: StringFilter<"Products"> | string
    created_at?: DateTimeFilter<"Products"> | Date | string
    last_update?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<Products_categoriesScalarRelationFilter, Products_categoriesWhereInput>
    points_of_sales?: XOR<Points_of_salesScalarRelationFilter, Points_of_salesWhereInput>
    provider?: XOR<ProvidersScalarRelationFilter, ProvidersWhereInput>
    img?: Products_imagesListRelationFilter
    products_purchases?: Products_purchasesListRelationFilter
    products_sales?: Products_salesListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    product_id?: SortOrder
    branch?: SortOrder
    model?: SortOrder
    description?: SortOrder
    purchase_price?: SortOrder
    stock_quantity?: SortOrder
    amount?: SortOrder
    purchase_date?: SortOrder
    category_name?: SortOrder
    provider_name?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    category?: Products_categoriesOrderByWithRelationInput
    points_of_sales?: Points_of_salesOrderByWithRelationInput
    provider?: ProvidersOrderByWithRelationInput
    img?: Products_imagesOrderByRelationAggregateInput
    products_purchases?: Products_purchasesOrderByRelationAggregateInput
    products_sales?: Products_salesOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    branch?: StringFilter<"Products"> | string
    model?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    purchase_price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFilter<"Products"> | number
    amount?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFilter<"Products"> | Date | string
    category_name?: StringFilter<"Products"> | string
    provider_name?: StringFilter<"Products"> | string
    pos_name?: StringFilter<"Products"> | string
    created_at?: DateTimeFilter<"Products"> | Date | string
    last_update?: DateTimeFilter<"Products"> | Date | string
    category?: XOR<Products_categoriesScalarRelationFilter, Products_categoriesWhereInput>
    points_of_sales?: XOR<Points_of_salesScalarRelationFilter, Points_of_salesWhereInput>
    provider?: XOR<ProvidersScalarRelationFilter, ProvidersWhereInput>
    img?: Products_imagesListRelationFilter
    products_purchases?: Products_purchasesListRelationFilter
    products_sales?: Products_salesListRelationFilter
  }, "product_id">

  export type ProductsOrderByWithAggregationInput = {
    product_id?: SortOrder
    branch?: SortOrder
    model?: SortOrder
    description?: SortOrder
    purchase_price?: SortOrder
    stock_quantity?: SortOrder
    amount?: SortOrder
    purchase_date?: SortOrder
    category_name?: SortOrder
    provider_name?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    product_id?: UuidWithAggregatesFilter<"Products"> | string
    branch?: StringWithAggregatesFilter<"Products"> | string
    model?: StringWithAggregatesFilter<"Products"> | string
    description?: StringWithAggregatesFilter<"Products"> | string
    purchase_price?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntWithAggregatesFilter<"Products"> | number
    amount?: DecimalWithAggregatesFilter<"Products"> | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    category_name?: StringWithAggregatesFilter<"Products"> | string
    provider_name?: StringWithAggregatesFilter<"Products"> | string
    pos_name?: StringWithAggregatesFilter<"Products"> | string
    created_at?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Products"> | Date | string
  }

  export type Products_imagesWhereInput = {
    AND?: Products_imagesWhereInput | Products_imagesWhereInput[]
    OR?: Products_imagesWhereInput[]
    NOT?: Products_imagesWhereInput | Products_imagesWhereInput[]
    id?: UuidFilter<"Products_images"> | string
    image_original_key?: StringFilter<"Products_images"> | string
    image_thumb_key?: StringFilter<"Products_images"> | string
    created_at?: DateTimeFilter<"Products_images"> | Date | string
    last_update?: DateTimeFilter<"Products_images"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type Products_imagesOrderByWithRelationInput = {
    id?: SortOrder
    image_original_key?: SortOrder
    image_thumb_key?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    product?: ProductsOrderByWithRelationInput
  }

  export type Products_imagesWhereUniqueInput = Prisma.AtLeast<{
    image_original_key?: string
    image_thumb_key?: string
    AND?: Products_imagesWhereInput | Products_imagesWhereInput[]
    OR?: Products_imagesWhereInput[]
    NOT?: Products_imagesWhereInput | Products_imagesWhereInput[]
    id?: UuidFilter<"Products_images"> | string
    created_at?: DateTimeFilter<"Products_images"> | Date | string
    last_update?: DateTimeFilter<"Products_images"> | Date | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "image_original_key" | "image_thumb_key">

  export type Products_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    image_original_key?: SortOrder
    image_thumb_key?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: Products_imagesCountOrderByAggregateInput
    _max?: Products_imagesMaxOrderByAggregateInput
    _min?: Products_imagesMinOrderByAggregateInput
  }

  export type Products_imagesScalarWhereWithAggregatesInput = {
    AND?: Products_imagesScalarWhereWithAggregatesInput | Products_imagesScalarWhereWithAggregatesInput[]
    OR?: Products_imagesScalarWhereWithAggregatesInput[]
    NOT?: Products_imagesScalarWhereWithAggregatesInput | Products_imagesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Products_images"> | string
    image_original_key?: StringWithAggregatesFilter<"Products_images"> | string
    image_thumb_key?: StringWithAggregatesFilter<"Products_images"> | string
    created_at?: DateTimeWithAggregatesFilter<"Products_images"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Products_images"> | Date | string
  }

  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    employee_id?: UuidFilter<"Employees"> | string
    CID?: StringFilter<"Employees"> | string
    first_name?: StringFilter<"Employees"> | string
    last_name?: StringFilter<"Employees"> | string
    address?: StringFilter<"Employees"> | string
    phone_number?: StringNullableFilter<"Employees"> | string | null
    img?: StringNullableFilter<"Employees"> | string | null
    pos_name?: StringFilter<"Employees"> | string
    created_at?: DateTimeFilter<"Employees"> | Date | string
    last_update?: DateTimeFilter<"Employees"> | Date | string
    point_of_sales?: XOR<Points_of_salesScalarRelationFilter, Points_of_salesWhereInput>
    salary?: XOR<SalaryNullableScalarRelationFilter, SalaryWhereInput> | null
    sales?: SalesListRelationFilter
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type EmployeesOrderByWithRelationInput = {
    employee_id?: SortOrder
    CID?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    point_of_sales?: Points_of_salesOrderByWithRelationInput
    salary?: SalaryOrderByWithRelationInput
    sales?: SalesOrderByRelationAggregateInput
    user?: UsersOrderByWithRelationInput
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    employee_id?: string
    CID?: string
    phone_number?: string
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    first_name?: StringFilter<"Employees"> | string
    last_name?: StringFilter<"Employees"> | string
    address?: StringFilter<"Employees"> | string
    img?: StringNullableFilter<"Employees"> | string | null
    pos_name?: StringFilter<"Employees"> | string
    created_at?: DateTimeFilter<"Employees"> | Date | string
    last_update?: DateTimeFilter<"Employees"> | Date | string
    point_of_sales?: XOR<Points_of_salesScalarRelationFilter, Points_of_salesWhereInput>
    salary?: XOR<SalaryNullableScalarRelationFilter, SalaryWhereInput> | null
    sales?: SalesListRelationFilter
    user?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "employee_id" | "CID" | "phone_number">

  export type EmployeesOrderByWithAggregationInput = {
    employee_id?: SortOrder
    CID?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    OR?: EmployeesScalarWhereWithAggregatesInput[]
    NOT?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    employee_id?: UuidWithAggregatesFilter<"Employees"> | string
    CID?: StringWithAggregatesFilter<"Employees"> | string
    first_name?: StringWithAggregatesFilter<"Employees"> | string
    last_name?: StringWithAggregatesFilter<"Employees"> | string
    address?: StringWithAggregatesFilter<"Employees"> | string
    phone_number?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    img?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    pos_name?: StringWithAggregatesFilter<"Employees"> | string
    created_at?: DateTimeWithAggregatesFilter<"Employees"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Employees"> | Date | string
  }

  export type SalaryWhereInput = {
    AND?: SalaryWhereInput | SalaryWhereInput[]
    OR?: SalaryWhereInput[]
    NOT?: SalaryWhereInput | SalaryWhereInput[]
    employee_cid?: StringFilter<"Salary"> | string
    amount?: DecimalFilter<"Salary"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Salary"> | Date | string
    created_at?: DateTimeFilter<"Salary"> | Date | string
    last_update?: DateTimeFilter<"Salary"> | Date | string
    employee?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }

  export type SalaryOrderByWithRelationInput = {
    employee_cid?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    employee?: EmployeesOrderByWithRelationInput
  }

  export type SalaryWhereUniqueInput = Prisma.AtLeast<{
    employee_cid?: string
    AND?: SalaryWhereInput | SalaryWhereInput[]
    OR?: SalaryWhereInput[]
    NOT?: SalaryWhereInput | SalaryWhereInput[]
    amount?: DecimalFilter<"Salary"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Salary"> | Date | string
    created_at?: DateTimeFilter<"Salary"> | Date | string
    last_update?: DateTimeFilter<"Salary"> | Date | string
    employee?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }, "employee_cid">

  export type SalaryOrderByWithAggregationInput = {
    employee_cid?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: SalaryCountOrderByAggregateInput
    _avg?: SalaryAvgOrderByAggregateInput
    _max?: SalaryMaxOrderByAggregateInput
    _min?: SalaryMinOrderByAggregateInput
    _sum?: SalarySumOrderByAggregateInput
  }

  export type SalaryScalarWhereWithAggregatesInput = {
    AND?: SalaryScalarWhereWithAggregatesInput | SalaryScalarWhereWithAggregatesInput[]
    OR?: SalaryScalarWhereWithAggregatesInput[]
    NOT?: SalaryScalarWhereWithAggregatesInput | SalaryScalarWhereWithAggregatesInput[]
    employee_cid?: StringWithAggregatesFilter<"Salary"> | string
    amount?: DecimalWithAggregatesFilter<"Salary"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"Salary"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Salary"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Salary"> | Date | string
  }

  export type SalesWhereInput = {
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    sales_id?: UuidFilter<"Sales"> | string
    employee_cid?: StringFilter<"Sales"> | string
    date?: DateTimeFilter<"Sales"> | Date | string
    total_amount?: DecimalFilter<"Sales"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Sales"> | Date | string
    last_update?: DateTimeFilter<"Sales"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Sales"> | Date | string | null
    products_sales?: Products_salesListRelationFilter
    employee?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }

  export type SalesOrderByWithRelationInput = {
    sales_id?: SortOrder
    employee_cid?: SortOrder
    date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    products_sales?: Products_salesOrderByRelationAggregateInput
    employee?: EmployeesOrderByWithRelationInput
  }

  export type SalesWhereUniqueInput = Prisma.AtLeast<{
    sales_id?: string
    AND?: SalesWhereInput | SalesWhereInput[]
    OR?: SalesWhereInput[]
    NOT?: SalesWhereInput | SalesWhereInput[]
    employee_cid?: StringFilter<"Sales"> | string
    date?: DateTimeFilter<"Sales"> | Date | string
    total_amount?: DecimalFilter<"Sales"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Sales"> | Date | string
    last_update?: DateTimeFilter<"Sales"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Sales"> | Date | string | null
    products_sales?: Products_salesListRelationFilter
    employee?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }, "sales_id">

  export type SalesOrderByWithAggregationInput = {
    sales_id?: SortOrder
    employee_cid?: SortOrder
    date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: SalesCountOrderByAggregateInput
    _avg?: SalesAvgOrderByAggregateInput
    _max?: SalesMaxOrderByAggregateInput
    _min?: SalesMinOrderByAggregateInput
    _sum?: SalesSumOrderByAggregateInput
  }

  export type SalesScalarWhereWithAggregatesInput = {
    AND?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    OR?: SalesScalarWhereWithAggregatesInput[]
    NOT?: SalesScalarWhereWithAggregatesInput | SalesScalarWhereWithAggregatesInput[]
    sales_id?: UuidWithAggregatesFilter<"Sales"> | string
    employee_cid?: StringWithAggregatesFilter<"Sales"> | string
    date?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    total_amount?: DecimalWithAggregatesFilter<"Sales"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Sales"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Sales"> | Date | string | null
  }

  export type Products_salesWhereInput = {
    AND?: Products_salesWhereInput | Products_salesWhereInput[]
    OR?: Products_salesWhereInput[]
    NOT?: Products_salesWhereInput | Products_salesWhereInput[]
    sale_id?: UuidFilter<"Products_sales"> | string
    product_id?: UuidFilter<"Products_sales"> | string
    quantity?: IntFilter<"Products_sales"> | number
    unit_price?: DecimalFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    sale?: XOR<SalesScalarRelationFilter, SalesWhereInput>
  }

  export type Products_salesOrderByWithRelationInput = {
    sale_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    product?: ProductsOrderByWithRelationInput
    sale?: SalesOrderByWithRelationInput
  }

  export type Products_salesWhereUniqueInput = Prisma.AtLeast<{
    sale_id_product_id?: Products_salesSale_idProduct_idCompoundUniqueInput
    AND?: Products_salesWhereInput | Products_salesWhereInput[]
    OR?: Products_salesWhereInput[]
    NOT?: Products_salesWhereInput | Products_salesWhereInput[]
    sale_id?: UuidFilter<"Products_sales"> | string
    product_id?: UuidFilter<"Products_sales"> | string
    quantity?: IntFilter<"Products_sales"> | number
    unit_price?: DecimalFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
    product?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    sale?: XOR<SalesScalarRelationFilter, SalesWhereInput>
  }, "sale_id_product_id">

  export type Products_salesOrderByWithAggregationInput = {
    sale_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    _count?: Products_salesCountOrderByAggregateInput
    _avg?: Products_salesAvgOrderByAggregateInput
    _max?: Products_salesMaxOrderByAggregateInput
    _min?: Products_salesMinOrderByAggregateInput
    _sum?: Products_salesSumOrderByAggregateInput
  }

  export type Products_salesScalarWhereWithAggregatesInput = {
    AND?: Products_salesScalarWhereWithAggregatesInput | Products_salesScalarWhereWithAggregatesInput[]
    OR?: Products_salesScalarWhereWithAggregatesInput[]
    NOT?: Products_salesScalarWhereWithAggregatesInput | Products_salesScalarWhereWithAggregatesInput[]
    sale_id?: UuidWithAggregatesFilter<"Products_sales"> | string
    product_id?: UuidWithAggregatesFilter<"Products_sales"> | string
    quantity?: IntWithAggregatesFilter<"Products_sales"> | number
    unit_price?: DecimalWithAggregatesFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalWithAggregatesFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
  }

  export type PurchasesWhereInput = {
    AND?: PurchasesWhereInput | PurchasesWhereInput[]
    OR?: PurchasesWhereInput[]
    NOT?: PurchasesWhereInput | PurchasesWhereInput[]
    purchases_id?: UuidFilter<"Purchases"> | string
    purchase_date?: DateTimeFilter<"Purchases"> | Date | string
    created_at?: DateTimeFilter<"Purchases"> | Date | string
    last_update?: DateTimeFilter<"Purchases"> | Date | string
    products_purchases?: Products_purchasesListRelationFilter
  }

  export type PurchasesOrderByWithRelationInput = {
    purchases_id?: SortOrder
    purchase_date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    products_purchases?: Products_purchasesOrderByRelationAggregateInput
  }

  export type PurchasesWhereUniqueInput = Prisma.AtLeast<{
    purchases_id?: string
    AND?: PurchasesWhereInput | PurchasesWhereInput[]
    OR?: PurchasesWhereInput[]
    NOT?: PurchasesWhereInput | PurchasesWhereInput[]
    purchase_date?: DateTimeFilter<"Purchases"> | Date | string
    created_at?: DateTimeFilter<"Purchases"> | Date | string
    last_update?: DateTimeFilter<"Purchases"> | Date | string
    products_purchases?: Products_purchasesListRelationFilter
  }, "purchases_id">

  export type PurchasesOrderByWithAggregationInput = {
    purchases_id?: SortOrder
    purchase_date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: PurchasesCountOrderByAggregateInput
    _max?: PurchasesMaxOrderByAggregateInput
    _min?: PurchasesMinOrderByAggregateInput
  }

  export type PurchasesScalarWhereWithAggregatesInput = {
    AND?: PurchasesScalarWhereWithAggregatesInput | PurchasesScalarWhereWithAggregatesInput[]
    OR?: PurchasesScalarWhereWithAggregatesInput[]
    NOT?: PurchasesScalarWhereWithAggregatesInput | PurchasesScalarWhereWithAggregatesInput[]
    purchases_id?: UuidWithAggregatesFilter<"Purchases"> | string
    purchase_date?: DateTimeWithAggregatesFilter<"Purchases"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Purchases"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Purchases"> | Date | string
  }

  export type Products_purchasesWhereInput = {
    AND?: Products_purchasesWhereInput | Products_purchasesWhereInput[]
    OR?: Products_purchasesWhereInput[]
    NOT?: Products_purchasesWhereInput | Products_purchasesWhereInput[]
    purchase_id?: UuidFilter<"Products_purchases"> | string
    product_id?: UuidFilter<"Products_purchases"> | string
    product_quantity?: IntFilter<"Products_purchases"> | number
    product_unit_price?: DecimalFilter<"Products_purchases"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Products_purchases"> | Date | string
    last_update?: DateTimeFilter<"Products_purchases"> | Date | string
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    purchases?: XOR<PurchasesScalarRelationFilter, PurchasesWhereInput>
  }

  export type Products_purchasesOrderByWithRelationInput = {
    purchase_id?: SortOrder
    product_id?: SortOrder
    product_quantity?: SortOrder
    product_unit_price?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    products?: ProductsOrderByWithRelationInput
    purchases?: PurchasesOrderByWithRelationInput
  }

  export type Products_purchasesWhereUniqueInput = Prisma.AtLeast<{
    purchase_id_product_id?: Products_purchasesPurchase_idProduct_idCompoundUniqueInput
    AND?: Products_purchasesWhereInput | Products_purchasesWhereInput[]
    OR?: Products_purchasesWhereInput[]
    NOT?: Products_purchasesWhereInput | Products_purchasesWhereInput[]
    purchase_id?: UuidFilter<"Products_purchases"> | string
    product_id?: UuidFilter<"Products_purchases"> | string
    product_quantity?: IntFilter<"Products_purchases"> | number
    product_unit_price?: DecimalFilter<"Products_purchases"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Products_purchases"> | Date | string
    last_update?: DateTimeFilter<"Products_purchases"> | Date | string
    products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
    purchases?: XOR<PurchasesScalarRelationFilter, PurchasesWhereInput>
  }, "purchase_id_product_id">

  export type Products_purchasesOrderByWithAggregationInput = {
    purchase_id?: SortOrder
    product_id?: SortOrder
    product_quantity?: SortOrder
    product_unit_price?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: Products_purchasesCountOrderByAggregateInput
    _avg?: Products_purchasesAvgOrderByAggregateInput
    _max?: Products_purchasesMaxOrderByAggregateInput
    _min?: Products_purchasesMinOrderByAggregateInput
    _sum?: Products_purchasesSumOrderByAggregateInput
  }

  export type Products_purchasesScalarWhereWithAggregatesInput = {
    AND?: Products_purchasesScalarWhereWithAggregatesInput | Products_purchasesScalarWhereWithAggregatesInput[]
    OR?: Products_purchasesScalarWhereWithAggregatesInput[]
    NOT?: Products_purchasesScalarWhereWithAggregatesInput | Products_purchasesScalarWhereWithAggregatesInput[]
    purchase_id?: UuidWithAggregatesFilter<"Products_purchases"> | string
    product_id?: UuidWithAggregatesFilter<"Products_purchases"> | string
    product_quantity?: IntWithAggregatesFilter<"Products_purchases"> | number
    product_unit_price?: DecimalWithAggregatesFilter<"Products_purchases"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeWithAggregatesFilter<"Products_purchases"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Products_purchases"> | Date | string
  }

  export type Expenses_categoryWhereInput = {
    AND?: Expenses_categoryWhereInput | Expenses_categoryWhereInput[]
    OR?: Expenses_categoryWhereInput[]
    NOT?: Expenses_categoryWhereInput | Expenses_categoryWhereInput[]
    expense_category_id?: UuidFilter<"Expenses_category"> | string
    name?: StringFilter<"Expenses_category"> | string
    created_at?: DateTimeFilter<"Expenses_category"> | Date | string
    last_update?: DateTimeFilter<"Expenses_category"> | Date | string
    Expenses?: ExpensesListRelationFilter
  }

  export type Expenses_categoryOrderByWithRelationInput = {
    expense_category_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    Expenses?: ExpensesOrderByRelationAggregateInput
  }

  export type Expenses_categoryWhereUniqueInput = Prisma.AtLeast<{
    expense_category_id?: string
    name?: string
    AND?: Expenses_categoryWhereInput | Expenses_categoryWhereInput[]
    OR?: Expenses_categoryWhereInput[]
    NOT?: Expenses_categoryWhereInput | Expenses_categoryWhereInput[]
    created_at?: DateTimeFilter<"Expenses_category"> | Date | string
    last_update?: DateTimeFilter<"Expenses_category"> | Date | string
    Expenses?: ExpensesListRelationFilter
  }, "expense_category_id" | "name">

  export type Expenses_categoryOrderByWithAggregationInput = {
    expense_category_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: Expenses_categoryCountOrderByAggregateInput
    _max?: Expenses_categoryMaxOrderByAggregateInput
    _min?: Expenses_categoryMinOrderByAggregateInput
  }

  export type Expenses_categoryScalarWhereWithAggregatesInput = {
    AND?: Expenses_categoryScalarWhereWithAggregatesInput | Expenses_categoryScalarWhereWithAggregatesInput[]
    OR?: Expenses_categoryScalarWhereWithAggregatesInput[]
    NOT?: Expenses_categoryScalarWhereWithAggregatesInput | Expenses_categoryScalarWhereWithAggregatesInput[]
    expense_category_id?: UuidWithAggregatesFilter<"Expenses_category"> | string
    name?: StringWithAggregatesFilter<"Expenses_category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Expenses_category"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Expenses_category"> | Date | string
  }

  export type ExpensesWhereInput = {
    AND?: ExpensesWhereInput | ExpensesWhereInput[]
    OR?: ExpensesWhereInput[]
    NOT?: ExpensesWhereInput | ExpensesWhereInput[]
    expenses_id?: UuidFilter<"Expenses"> | string
    amount?: DecimalFilter<"Expenses"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Expenses"> | Date | string
    exp_category_name?: StringFilter<"Expenses"> | string
    created_at?: DateTimeFilter<"Expenses"> | Date | string
    last_update?: DateTimeFilter<"Expenses"> | Date | string
    Expenses_category?: XOR<Expenses_categoryScalarRelationFilter, Expenses_categoryWhereInput>
  }

  export type ExpensesOrderByWithRelationInput = {
    expenses_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    exp_category_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    Expenses_category?: Expenses_categoryOrderByWithRelationInput
  }

  export type ExpensesWhereUniqueInput = Prisma.AtLeast<{
    expenses_id?: string
    AND?: ExpensesWhereInput | ExpensesWhereInput[]
    OR?: ExpensesWhereInput[]
    NOT?: ExpensesWhereInput | ExpensesWhereInput[]
    amount?: DecimalFilter<"Expenses"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Expenses"> | Date | string
    exp_category_name?: StringFilter<"Expenses"> | string
    created_at?: DateTimeFilter<"Expenses"> | Date | string
    last_update?: DateTimeFilter<"Expenses"> | Date | string
    Expenses_category?: XOR<Expenses_categoryScalarRelationFilter, Expenses_categoryWhereInput>
  }, "expenses_id">

  export type ExpensesOrderByWithAggregationInput = {
    expenses_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    exp_category_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    _count?: ExpensesCountOrderByAggregateInput
    _avg?: ExpensesAvgOrderByAggregateInput
    _max?: ExpensesMaxOrderByAggregateInput
    _min?: ExpensesMinOrderByAggregateInput
    _sum?: ExpensesSumOrderByAggregateInput
  }

  export type ExpensesScalarWhereWithAggregatesInput = {
    AND?: ExpensesScalarWhereWithAggregatesInput | ExpensesScalarWhereWithAggregatesInput[]
    OR?: ExpensesScalarWhereWithAggregatesInput[]
    NOT?: ExpensesScalarWhereWithAggregatesInput | ExpensesScalarWhereWithAggregatesInput[]
    expenses_id?: UuidWithAggregatesFilter<"Expenses"> | string
    amount?: DecimalWithAggregatesFilter<"Expenses"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"Expenses"> | Date | string
    exp_category_name?: StringWithAggregatesFilter<"Expenses"> | string
    created_at?: DateTimeWithAggregatesFilter<"Expenses"> | Date | string
    last_update?: DateTimeWithAggregatesFilter<"Expenses"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: UuidFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    employee_id?: UuidFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    last_time_online?: DateTimeNullableFilter<"Users"> | Date | string | null
    last_update?: DateTimeFilter<"Users"> | Date | string
    employee?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_time_online?: SortOrderInput | SortOrder
    last_update?: SortOrder
    employee?: EmployeesOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    username?: string
    employee_id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    role?: StringFilter<"Users"> | string
    created_at?: DateTimeFilter<"Users"> | Date | string
    last_time_online?: DateTimeNullableFilter<"Users"> | Date | string | null
    last_update?: DateTimeFilter<"Users"> | Date | string
    employee?: XOR<EmployeesScalarRelationFilter, EmployeesWhereInput>
  }, "user_id" | "username" | "employee_id">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_time_online?: SortOrderInput | SortOrder
    last_update?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    employee_id?: UuidWithAggregatesFilter<"Users"> | string
    role?: StringWithAggregatesFilter<"Users"> | string
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    last_time_online?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    last_update?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type Points_of_salesCreateInput = {
    point_of_sales_id?: string
    name: string
    address: string
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    employees?: EmployeesCreateNestedManyWithoutPoint_of_salesInput
    products?: ProductsCreateNestedManyWithoutPoints_of_salesInput
  }

  export type Points_of_salesUncheckedCreateInput = {
    point_of_sales_id?: string
    name: string
    address: string
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    employees?: EmployeesUncheckedCreateNestedManyWithoutPoint_of_salesInput
    products?: ProductsUncheckedCreateNestedManyWithoutPoints_of_salesInput
  }

  export type Points_of_salesUpdateInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeesUpdateManyWithoutPoint_of_salesNestedInput
    products?: ProductsUpdateManyWithoutPoints_of_salesNestedInput
  }

  export type Points_of_salesUncheckedUpdateInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeesUncheckedUpdateManyWithoutPoint_of_salesNestedInput
    products?: ProductsUncheckedUpdateManyWithoutPoints_of_salesNestedInput
  }

  export type Points_of_salesCreateManyInput = {
    point_of_sales_id?: string
    name: string
    address: string
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Points_of_salesUpdateManyMutationInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Points_of_salesUncheckedUpdateManyInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_categoriesCreateInput = {
    products_categories_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
    products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type Products_categoriesUncheckedCreateInput = {
    products_categories_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type Products_categoriesUpdateInput = {
    products_categories_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type Products_categoriesUncheckedUpdateInput = {
    products_categories_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type Products_categoriesCreateManyInput = {
    products_categories_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_categoriesUpdateManyMutationInput = {
    products_categories_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_categoriesUncheckedUpdateManyInput = {
    products_categories_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvidersCreateInput = {
    provider_id?: string
    name: string
    phone_number: string
    email?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    products?: ProductsCreateNestedManyWithoutProviderInput
  }

  export type ProvidersUncheckedCreateInput = {
    provider_id?: string
    name: string
    phone_number: string
    email?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProvidersUpdateInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutProviderNestedInput
  }

  export type ProvidersUncheckedUpdateInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProvidersCreateManyInput = {
    provider_id?: string
    name: string
    phone_number: string
    email?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ProvidersUpdateManyMutationInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvidersUncheckedUpdateManyInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    category: Products_categoriesCreateNestedOneWithoutProductsInput
    points_of_sales: Points_of_salesCreateNestedOneWithoutProductsInput
    provider: ProvidersCreateNestedOneWithoutProductsInput
    img?: Products_imagesCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    provider_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    img?: Products_imagesUncheckedCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesUncheckedCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Products_categoriesUpdateOneRequiredWithoutProductsNestedInput
    points_of_sales?: Points_of_salesUpdateOneRequiredWithoutProductsNestedInput
    provider?: ProvidersUpdateOneRequiredWithoutProductsNestedInput
    img?: Products_imagesUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    provider_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: Products_imagesUncheckedUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUncheckedUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    provider_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    provider_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_imagesCreateInput = {
    image_original_key: string
    image_thumb_key: string
    created_at?: Date | string
    last_update?: Date | string
    product: ProductsCreateNestedOneWithoutImgInput
  }

  export type Products_imagesUncheckedCreateInput = {
    id: string
    image_original_key: string
    image_thumb_key: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_imagesUpdateInput = {
    image_original_key?: StringFieldUpdateOperationsInput | string
    image_thumb_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutImgNestedInput
  }

  export type Products_imagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_original_key?: StringFieldUpdateOperationsInput | string
    image_thumb_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_imagesCreateManyInput = {
    id: string
    image_original_key: string
    image_thumb_key: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_imagesUpdateManyMutationInput = {
    image_original_key?: StringFieldUpdateOperationsInput | string
    image_thumb_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_imagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image_original_key?: StringFieldUpdateOperationsInput | string
    image_thumb_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesCreateInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    point_of_sales: Points_of_salesCreateNestedOneWithoutEmployeesInput
    salary?: SalaryCreateNestedOneWithoutEmployeeInput
    sales?: SalesCreateNestedManyWithoutEmployeeInput
    user?: UsersCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    salary?: SalaryUncheckedCreateNestedOneWithoutEmployeeInput
    sales?: SalesUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UsersUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesUpdateInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    point_of_sales?: Points_of_salesUpdateOneRequiredWithoutEmployeesNestedInput
    salary?: SalaryUpdateOneWithoutEmployeeNestedInput
    sales?: SalesUpdateManyWithoutEmployeeNestedInput
    user?: UsersUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: SalaryUncheckedUpdateOneWithoutEmployeeNestedInput
    sales?: SalesUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UsersUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeesCreateManyInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type EmployeesUpdateManyMutationInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesUncheckedUpdateManyInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    employee: EmployeesCreateNestedOneWithoutSalaryInput
  }

  export type SalaryUncheckedCreateInput = {
    employee_cid: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type SalaryUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeesUpdateOneRequiredWithoutSalaryNestedInput
  }

  export type SalaryUncheckedUpdateInput = {
    employee_cid?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryCreateManyInput = {
    employee_cid: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type SalaryUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUncheckedUpdateManyInput = {
    employee_cid?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesCreateInput = {
    sales_id?: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
    products_sales?: Products_salesCreateNestedManyWithoutSaleInput
    employee: EmployeesCreateNestedOneWithoutSalesInput
  }

  export type SalesUncheckedCreateInput = {
    sales_id?: string
    employee_cid: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SalesUpdateInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products_sales?: Products_salesUpdateManyWithoutSaleNestedInput
    employee?: EmployeesUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    employee_cid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products_sales?: Products_salesUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SalesCreateManyInput = {
    sales_id?: string
    employee_cid: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
  }

  export type SalesUpdateManyMutationInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SalesUncheckedUpdateManyInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    employee_cid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Products_salesCreateInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    product: ProductsCreateNestedOneWithoutProducts_salesInput
    sale: SalesCreateNestedOneWithoutProducts_salesInput
  }

  export type Products_salesUncheckedCreateInput = {
    sale_id: string
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
  }

  export type Products_salesUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductsUpdateOneRequiredWithoutProducts_salesNestedInput
    sale?: SalesUpdateOneRequiredWithoutProducts_salesNestedInput
  }

  export type Products_salesUncheckedUpdateInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Products_salesCreateManyInput = {
    sale_id: string
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
  }

  export type Products_salesUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Products_salesUncheckedUpdateManyInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PurchasesCreateInput = {
    purchases_id?: string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    products_purchases?: Products_purchasesCreateNestedManyWithoutPurchasesInput
  }

  export type PurchasesUncheckedCreateInput = {
    purchases_id?: string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    products_purchases?: Products_purchasesUncheckedCreateNestedManyWithoutPurchasesInput
  }

  export type PurchasesUpdateInput = {
    purchases_id?: StringFieldUpdateOperationsInput | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products_purchases?: Products_purchasesUpdateManyWithoutPurchasesNestedInput
  }

  export type PurchasesUncheckedUpdateInput = {
    purchases_id?: StringFieldUpdateOperationsInput | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products_purchases?: Products_purchasesUncheckedUpdateManyWithoutPurchasesNestedInput
  }

  export type PurchasesCreateManyInput = {
    purchases_id?: string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type PurchasesUpdateManyMutationInput = {
    purchases_id?: StringFieldUpdateOperationsInput | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasesUncheckedUpdateManyInput = {
    purchases_id?: StringFieldUpdateOperationsInput | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_purchasesCreateInput = {
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    products: ProductsCreateNestedOneWithoutProducts_purchasesInput
    purchases: PurchasesCreateNestedOneWithoutProducts_purchasesInput
  }

  export type Products_purchasesUncheckedCreateInput = {
    purchase_id: string
    product_id: string
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_purchasesUpdateInput = {
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateOneRequiredWithoutProducts_purchasesNestedInput
    purchases?: PurchasesUpdateOneRequiredWithoutProducts_purchasesNestedInput
  }

  export type Products_purchasesUncheckedUpdateInput = {
    purchase_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_purchasesCreateManyInput = {
    purchase_id: string
    product_id: string
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_purchasesUpdateManyMutationInput = {
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_purchasesUncheckedUpdateManyInput = {
    purchase_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Expenses_categoryCreateInput = {
    expense_category_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
    Expenses?: ExpensesCreateNestedManyWithoutExpenses_categoryInput
  }

  export type Expenses_categoryUncheckedCreateInput = {
    expense_category_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
    Expenses?: ExpensesUncheckedCreateNestedManyWithoutExpenses_categoryInput
  }

  export type Expenses_categoryUpdateInput = {
    expense_category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    Expenses?: ExpensesUpdateManyWithoutExpenses_categoryNestedInput
  }

  export type Expenses_categoryUncheckedUpdateInput = {
    expense_category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    Expenses?: ExpensesUncheckedUpdateManyWithoutExpenses_categoryNestedInput
  }

  export type Expenses_categoryCreateManyInput = {
    expense_category_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Expenses_categoryUpdateManyMutationInput = {
    expense_category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Expenses_categoryUncheckedUpdateManyInput = {
    expense_category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesCreateInput = {
    expenses_id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    Expenses_category: Expenses_categoryCreateNestedOneWithoutExpensesInput
  }

  export type ExpensesUncheckedCreateInput = {
    expenses_id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    exp_category_name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ExpensesUpdateInput = {
    expenses_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    Expenses_category?: Expenses_categoryUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpensesUncheckedUpdateInput = {
    expenses_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exp_category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesCreateManyInput = {
    expenses_id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    exp_category_name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ExpensesUpdateManyMutationInput = {
    expenses_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesUncheckedUpdateManyInput = {
    expenses_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    exp_category_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    user_id?: string
    username: string
    password: string
    role: string
    created_at?: Date | string
    last_time_online?: Date | string | null
    last_update?: Date | string
    employee: EmployeesCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: string
    username: string
    password: string
    employee_id: string
    role: string
    created_at?: Date | string
    last_time_online?: Date | string | null
    last_update?: Date | string
  }

  export type UsersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_time_online?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeesUpdateOneRequiredWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_time_online?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateManyInput = {
    user_id?: string
    username: string
    password: string
    employee_id: string
    role: string
    created_at?: Date | string
    last_time_online?: Date | string | null
    last_update?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_time_online?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    employee_id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_time_online?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmployeesListRelationFilter = {
    every?: EmployeesWhereInput
    some?: EmployeesWhereInput
    none?: EmployeesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Points_of_salesCountOrderByAggregateInput = {
    point_of_sales_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Points_of_salesMaxOrderByAggregateInput = {
    point_of_sales_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Points_of_salesMinOrderByAggregateInput = {
    point_of_sales_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Products_categoriesCountOrderByAggregateInput = {
    products_categories_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Products_categoriesMaxOrderByAggregateInput = {
    products_categories_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Products_categoriesMinOrderByAggregateInput = {
    products_categories_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ProvidersCountOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ProvidersMaxOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ProvidersMinOrderByAggregateInput = {
    provider_id?: SortOrder
    name?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    img?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Products_categoriesScalarRelationFilter = {
    is?: Products_categoriesWhereInput
    isNot?: Products_categoriesWhereInput
  }

  export type Points_of_salesScalarRelationFilter = {
    is?: Points_of_salesWhereInput
    isNot?: Points_of_salesWhereInput
  }

  export type ProvidersScalarRelationFilter = {
    is?: ProvidersWhereInput
    isNot?: ProvidersWhereInput
  }

  export type Products_imagesListRelationFilter = {
    every?: Products_imagesWhereInput
    some?: Products_imagesWhereInput
    none?: Products_imagesWhereInput
  }

  export type Products_purchasesListRelationFilter = {
    every?: Products_purchasesWhereInput
    some?: Products_purchasesWhereInput
    none?: Products_purchasesWhereInput
  }

  export type Products_salesListRelationFilter = {
    every?: Products_salesWhereInput
    some?: Products_salesWhereInput
    none?: Products_salesWhereInput
  }

  export type Products_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Products_purchasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Products_salesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    product_id?: SortOrder
    branch?: SortOrder
    model?: SortOrder
    description?: SortOrder
    purchase_price?: SortOrder
    stock_quantity?: SortOrder
    amount?: SortOrder
    purchase_date?: SortOrder
    category_name?: SortOrder
    provider_name?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    purchase_price?: SortOrder
    stock_quantity?: SortOrder
    amount?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    branch?: SortOrder
    model?: SortOrder
    description?: SortOrder
    purchase_price?: SortOrder
    stock_quantity?: SortOrder
    amount?: SortOrder
    purchase_date?: SortOrder
    category_name?: SortOrder
    provider_name?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    product_id?: SortOrder
    branch?: SortOrder
    model?: SortOrder
    description?: SortOrder
    purchase_price?: SortOrder
    stock_quantity?: SortOrder
    amount?: SortOrder
    purchase_date?: SortOrder
    category_name?: SortOrder
    provider_name?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    purchase_price?: SortOrder
    stock_quantity?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type Products_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    image_original_key?: SortOrder
    image_thumb_key?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Products_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    image_original_key?: SortOrder
    image_thumb_key?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Products_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    image_original_key?: SortOrder
    image_thumb_key?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type SalaryNullableScalarRelationFilter = {
    is?: SalaryWhereInput | null
    isNot?: SalaryWhereInput | null
  }

  export type SalesListRelationFilter = {
    every?: SalesWhereInput
    some?: SalesWhereInput
    none?: SalesWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type SalesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeesCountOrderByAggregateInput = {
    employee_id?: SortOrder
    CID?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    img?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    employee_id?: SortOrder
    CID?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    img?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    employee_id?: SortOrder
    CID?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    img?: SortOrder
    pos_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type EmployeesScalarRelationFilter = {
    is?: EmployeesWhereInput
    isNot?: EmployeesWhereInput
  }

  export type SalaryCountOrderByAggregateInput = {
    employee_cid?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type SalaryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SalaryMaxOrderByAggregateInput = {
    employee_cid?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type SalaryMinOrderByAggregateInput = {
    employee_cid?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type SalarySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SalesCountOrderByAggregateInput = {
    sales_id?: SortOrder
    employee_cid?: SortOrder
    date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    deleted_at?: SortOrder
  }

  export type SalesAvgOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type SalesMaxOrderByAggregateInput = {
    sales_id?: SortOrder
    employee_cid?: SortOrder
    date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    deleted_at?: SortOrder
  }

  export type SalesMinOrderByAggregateInput = {
    sales_id?: SortOrder
    employee_cid?: SortOrder
    date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
    deleted_at?: SortOrder
  }

  export type SalesSumOrderByAggregateInput = {
    total_amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SalesScalarRelationFilter = {
    is?: SalesWhereInput
    isNot?: SalesWhereInput
  }

  export type Products_salesSale_idProduct_idCompoundUniqueInput = {
    sale_id: string
    product_id: string
  }

  export type Products_salesCountOrderByAggregateInput = {
    sale_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type Products_salesAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type Products_salesMaxOrderByAggregateInput = {
    sale_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type Products_salesMinOrderByAggregateInput = {
    sale_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type Products_salesSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type PurchasesCountOrderByAggregateInput = {
    purchases_id?: SortOrder
    purchase_date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type PurchasesMaxOrderByAggregateInput = {
    purchases_id?: SortOrder
    purchase_date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type PurchasesMinOrderByAggregateInput = {
    purchases_id?: SortOrder
    purchase_date?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type PurchasesScalarRelationFilter = {
    is?: PurchasesWhereInput
    isNot?: PurchasesWhereInput
  }

  export type Products_purchasesPurchase_idProduct_idCompoundUniqueInput = {
    purchase_id: string
    product_id: string
  }

  export type Products_purchasesCountOrderByAggregateInput = {
    purchase_id?: SortOrder
    product_id?: SortOrder
    product_quantity?: SortOrder
    product_unit_price?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Products_purchasesAvgOrderByAggregateInput = {
    product_quantity?: SortOrder
    product_unit_price?: SortOrder
  }

  export type Products_purchasesMaxOrderByAggregateInput = {
    purchase_id?: SortOrder
    product_id?: SortOrder
    product_quantity?: SortOrder
    product_unit_price?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Products_purchasesMinOrderByAggregateInput = {
    purchase_id?: SortOrder
    product_id?: SortOrder
    product_quantity?: SortOrder
    product_unit_price?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Products_purchasesSumOrderByAggregateInput = {
    product_quantity?: SortOrder
    product_unit_price?: SortOrder
  }

  export type ExpensesListRelationFilter = {
    every?: ExpensesWhereInput
    some?: ExpensesWhereInput
    none?: ExpensesWhereInput
  }

  export type ExpensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Expenses_categoryCountOrderByAggregateInput = {
    expense_category_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Expenses_categoryMaxOrderByAggregateInput = {
    expense_category_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Expenses_categoryMinOrderByAggregateInput = {
    expense_category_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type Expenses_categoryScalarRelationFilter = {
    is?: Expenses_categoryWhereInput
    isNot?: Expenses_categoryWhereInput
  }

  export type ExpensesCountOrderByAggregateInput = {
    expenses_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    exp_category_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ExpensesAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpensesMaxOrderByAggregateInput = {
    expenses_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    exp_category_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ExpensesMinOrderByAggregateInput = {
    expenses_id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    exp_category_name?: SortOrder
    created_at?: SortOrder
    last_update?: SortOrder
  }

  export type ExpensesSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_time_online?: SortOrder
    last_update?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_time_online?: SortOrder
    last_update?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    employee_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    last_time_online?: SortOrder
    last_update?: SortOrder
  }

  export type EmployeesCreateNestedManyWithoutPoint_of_salesInput = {
    create?: XOR<EmployeesCreateWithoutPoint_of_salesInput, EmployeesUncheckedCreateWithoutPoint_of_salesInput> | EmployeesCreateWithoutPoint_of_salesInput[] | EmployeesUncheckedCreateWithoutPoint_of_salesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutPoint_of_salesInput | EmployeesCreateOrConnectWithoutPoint_of_salesInput[]
    createMany?: EmployeesCreateManyPoint_of_salesInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type ProductsCreateNestedManyWithoutPoints_of_salesInput = {
    create?: XOR<ProductsCreateWithoutPoints_of_salesInput, ProductsUncheckedCreateWithoutPoints_of_salesInput> | ProductsCreateWithoutPoints_of_salesInput[] | ProductsUncheckedCreateWithoutPoints_of_salesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPoints_of_salesInput | ProductsCreateOrConnectWithoutPoints_of_salesInput[]
    createMany?: ProductsCreateManyPoints_of_salesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type EmployeesUncheckedCreateNestedManyWithoutPoint_of_salesInput = {
    create?: XOR<EmployeesCreateWithoutPoint_of_salesInput, EmployeesUncheckedCreateWithoutPoint_of_salesInput> | EmployeesCreateWithoutPoint_of_salesInput[] | EmployeesUncheckedCreateWithoutPoint_of_salesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutPoint_of_salesInput | EmployeesCreateOrConnectWithoutPoint_of_salesInput[]
    createMany?: EmployeesCreateManyPoint_of_salesInputEnvelope
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutPoints_of_salesInput = {
    create?: XOR<ProductsCreateWithoutPoints_of_salesInput, ProductsUncheckedCreateWithoutPoints_of_salesInput> | ProductsCreateWithoutPoints_of_salesInput[] | ProductsUncheckedCreateWithoutPoints_of_salesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPoints_of_salesInput | ProductsCreateOrConnectWithoutPoints_of_salesInput[]
    createMany?: ProductsCreateManyPoints_of_salesInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeesUpdateManyWithoutPoint_of_salesNestedInput = {
    create?: XOR<EmployeesCreateWithoutPoint_of_salesInput, EmployeesUncheckedCreateWithoutPoint_of_salesInput> | EmployeesCreateWithoutPoint_of_salesInput[] | EmployeesUncheckedCreateWithoutPoint_of_salesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutPoint_of_salesInput | EmployeesCreateOrConnectWithoutPoint_of_salesInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutPoint_of_salesInput | EmployeesUpsertWithWhereUniqueWithoutPoint_of_salesInput[]
    createMany?: EmployeesCreateManyPoint_of_salesInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutPoint_of_salesInput | EmployeesUpdateWithWhereUniqueWithoutPoint_of_salesInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutPoint_of_salesInput | EmployeesUpdateManyWithWhereWithoutPoint_of_salesInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type ProductsUpdateManyWithoutPoints_of_salesNestedInput = {
    create?: XOR<ProductsCreateWithoutPoints_of_salesInput, ProductsUncheckedCreateWithoutPoints_of_salesInput> | ProductsCreateWithoutPoints_of_salesInput[] | ProductsUncheckedCreateWithoutPoints_of_salesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPoints_of_salesInput | ProductsCreateOrConnectWithoutPoints_of_salesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutPoints_of_salesInput | ProductsUpsertWithWhereUniqueWithoutPoints_of_salesInput[]
    createMany?: ProductsCreateManyPoints_of_salesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutPoints_of_salesInput | ProductsUpdateWithWhereUniqueWithoutPoints_of_salesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutPoints_of_salesInput | ProductsUpdateManyWithWhereWithoutPoints_of_salesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type EmployeesUncheckedUpdateManyWithoutPoint_of_salesNestedInput = {
    create?: XOR<EmployeesCreateWithoutPoint_of_salesInput, EmployeesUncheckedCreateWithoutPoint_of_salesInput> | EmployeesCreateWithoutPoint_of_salesInput[] | EmployeesUncheckedCreateWithoutPoint_of_salesInput[]
    connectOrCreate?: EmployeesCreateOrConnectWithoutPoint_of_salesInput | EmployeesCreateOrConnectWithoutPoint_of_salesInput[]
    upsert?: EmployeesUpsertWithWhereUniqueWithoutPoint_of_salesInput | EmployeesUpsertWithWhereUniqueWithoutPoint_of_salesInput[]
    createMany?: EmployeesCreateManyPoint_of_salesInputEnvelope
    set?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    disconnect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    delete?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    connect?: EmployeesWhereUniqueInput | EmployeesWhereUniqueInput[]
    update?: EmployeesUpdateWithWhereUniqueWithoutPoint_of_salesInput | EmployeesUpdateWithWhereUniqueWithoutPoint_of_salesInput[]
    updateMany?: EmployeesUpdateManyWithWhereWithoutPoint_of_salesInput | EmployeesUpdateManyWithWhereWithoutPoint_of_salesInput[]
    deleteMany?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutPoints_of_salesNestedInput = {
    create?: XOR<ProductsCreateWithoutPoints_of_salesInput, ProductsUncheckedCreateWithoutPoints_of_salesInput> | ProductsCreateWithoutPoints_of_salesInput[] | ProductsUncheckedCreateWithoutPoints_of_salesInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutPoints_of_salesInput | ProductsCreateOrConnectWithoutPoints_of_salesInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutPoints_of_salesInput | ProductsUpsertWithWhereUniqueWithoutPoints_of_salesInput[]
    createMany?: ProductsCreateManyPoints_of_salesInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutPoints_of_salesInput | ProductsUpdateWithWhereUniqueWithoutPoints_of_salesInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutPoints_of_salesInput | ProductsUpdateManyWithWhereWithoutPoints_of_salesInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProductsCreateWithoutProviderInput, ProductsUncheckedCreateWithoutProviderInput> | ProductsCreateWithoutProviderInput[] | ProductsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutProviderInput | ProductsCreateOrConnectWithoutProviderInput[]
    createMany?: ProductsCreateManyProviderInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProductsCreateWithoutProviderInput, ProductsUncheckedCreateWithoutProviderInput> | ProductsCreateWithoutProviderInput[] | ProductsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutProviderInput | ProductsCreateOrConnectWithoutProviderInput[]
    createMany?: ProductsCreateManyProviderInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProductsCreateWithoutProviderInput, ProductsUncheckedCreateWithoutProviderInput> | ProductsCreateWithoutProviderInput[] | ProductsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutProviderInput | ProductsCreateOrConnectWithoutProviderInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutProviderInput | ProductsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProductsCreateManyProviderInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutProviderInput | ProductsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutProviderInput | ProductsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProductsCreateWithoutProviderInput, ProductsUncheckedCreateWithoutProviderInput> | ProductsCreateWithoutProviderInput[] | ProductsUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutProviderInput | ProductsCreateOrConnectWithoutProviderInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutProviderInput | ProductsUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProductsCreateManyProviderInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutProviderInput | ProductsUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutProviderInput | ProductsUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type Products_categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<Products_categoriesCreateWithoutProductsInput, Products_categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Products_categoriesCreateOrConnectWithoutProductsInput
    connect?: Products_categoriesWhereUniqueInput
  }

  export type Points_of_salesCreateNestedOneWithoutProductsInput = {
    create?: XOR<Points_of_salesCreateWithoutProductsInput, Points_of_salesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Points_of_salesCreateOrConnectWithoutProductsInput
    connect?: Points_of_salesWhereUniqueInput
  }

  export type ProvidersCreateNestedOneWithoutProductsInput = {
    create?: XOR<ProvidersCreateWithoutProductsInput, ProvidersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProvidersCreateOrConnectWithoutProductsInput
    connect?: ProvidersWhereUniqueInput
  }

  export type Products_imagesCreateNestedManyWithoutProductInput = {
    create?: XOR<Products_imagesCreateWithoutProductInput, Products_imagesUncheckedCreateWithoutProductInput> | Products_imagesCreateWithoutProductInput[] | Products_imagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_imagesCreateOrConnectWithoutProductInput | Products_imagesCreateOrConnectWithoutProductInput[]
    createMany?: Products_imagesCreateManyProductInputEnvelope
    connect?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
  }

  export type Products_purchasesCreateNestedManyWithoutProductsInput = {
    create?: XOR<Products_purchasesCreateWithoutProductsInput, Products_purchasesUncheckedCreateWithoutProductsInput> | Products_purchasesCreateWithoutProductsInput[] | Products_purchasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutProductsInput | Products_purchasesCreateOrConnectWithoutProductsInput[]
    createMany?: Products_purchasesCreateManyProductsInputEnvelope
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
  }

  export type Products_salesCreateNestedManyWithoutProductInput = {
    create?: XOR<Products_salesCreateWithoutProductInput, Products_salesUncheckedCreateWithoutProductInput> | Products_salesCreateWithoutProductInput[] | Products_salesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutProductInput | Products_salesCreateOrConnectWithoutProductInput[]
    createMany?: Products_salesCreateManyProductInputEnvelope
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
  }

  export type Products_imagesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Products_imagesCreateWithoutProductInput, Products_imagesUncheckedCreateWithoutProductInput> | Products_imagesCreateWithoutProductInput[] | Products_imagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_imagesCreateOrConnectWithoutProductInput | Products_imagesCreateOrConnectWithoutProductInput[]
    createMany?: Products_imagesCreateManyProductInputEnvelope
    connect?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
  }

  export type Products_purchasesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Products_purchasesCreateWithoutProductsInput, Products_purchasesUncheckedCreateWithoutProductsInput> | Products_purchasesCreateWithoutProductsInput[] | Products_purchasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutProductsInput | Products_purchasesCreateOrConnectWithoutProductsInput[]
    createMany?: Products_purchasesCreateManyProductsInputEnvelope
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
  }

  export type Products_salesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Products_salesCreateWithoutProductInput, Products_salesUncheckedCreateWithoutProductInput> | Products_salesCreateWithoutProductInput[] | Products_salesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutProductInput | Products_salesCreateOrConnectWithoutProductInput[]
    createMany?: Products_salesCreateManyProductInputEnvelope
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Products_categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<Products_categoriesCreateWithoutProductsInput, Products_categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Products_categoriesCreateOrConnectWithoutProductsInput
    upsert?: Products_categoriesUpsertWithoutProductsInput
    connect?: Products_categoriesWhereUniqueInput
    update?: XOR<XOR<Products_categoriesUpdateToOneWithWhereWithoutProductsInput, Products_categoriesUpdateWithoutProductsInput>, Products_categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type Points_of_salesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<Points_of_salesCreateWithoutProductsInput, Points_of_salesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Points_of_salesCreateOrConnectWithoutProductsInput
    upsert?: Points_of_salesUpsertWithoutProductsInput
    connect?: Points_of_salesWhereUniqueInput
    update?: XOR<XOR<Points_of_salesUpdateToOneWithWhereWithoutProductsInput, Points_of_salesUpdateWithoutProductsInput>, Points_of_salesUncheckedUpdateWithoutProductsInput>
  }

  export type ProvidersUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ProvidersCreateWithoutProductsInput, ProvidersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ProvidersCreateOrConnectWithoutProductsInput
    upsert?: ProvidersUpsertWithoutProductsInput
    connect?: ProvidersWhereUniqueInput
    update?: XOR<XOR<ProvidersUpdateToOneWithWhereWithoutProductsInput, ProvidersUpdateWithoutProductsInput>, ProvidersUncheckedUpdateWithoutProductsInput>
  }

  export type Products_imagesUpdateManyWithoutProductNestedInput = {
    create?: XOR<Products_imagesCreateWithoutProductInput, Products_imagesUncheckedCreateWithoutProductInput> | Products_imagesCreateWithoutProductInput[] | Products_imagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_imagesCreateOrConnectWithoutProductInput | Products_imagesCreateOrConnectWithoutProductInput[]
    upsert?: Products_imagesUpsertWithWhereUniqueWithoutProductInput | Products_imagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Products_imagesCreateManyProductInputEnvelope
    set?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    disconnect?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    delete?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    connect?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    update?: Products_imagesUpdateWithWhereUniqueWithoutProductInput | Products_imagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Products_imagesUpdateManyWithWhereWithoutProductInput | Products_imagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Products_imagesScalarWhereInput | Products_imagesScalarWhereInput[]
  }

  export type Products_purchasesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Products_purchasesCreateWithoutProductsInput, Products_purchasesUncheckedCreateWithoutProductsInput> | Products_purchasesCreateWithoutProductsInput[] | Products_purchasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutProductsInput | Products_purchasesCreateOrConnectWithoutProductsInput[]
    upsert?: Products_purchasesUpsertWithWhereUniqueWithoutProductsInput | Products_purchasesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: Products_purchasesCreateManyProductsInputEnvelope
    set?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    disconnect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    delete?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    update?: Products_purchasesUpdateWithWhereUniqueWithoutProductsInput | Products_purchasesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: Products_purchasesUpdateManyWithWhereWithoutProductsInput | Products_purchasesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: Products_purchasesScalarWhereInput | Products_purchasesScalarWhereInput[]
  }

  export type Products_salesUpdateManyWithoutProductNestedInput = {
    create?: XOR<Products_salesCreateWithoutProductInput, Products_salesUncheckedCreateWithoutProductInput> | Products_salesCreateWithoutProductInput[] | Products_salesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutProductInput | Products_salesCreateOrConnectWithoutProductInput[]
    upsert?: Products_salesUpsertWithWhereUniqueWithoutProductInput | Products_salesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Products_salesCreateManyProductInputEnvelope
    set?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    disconnect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    delete?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    update?: Products_salesUpdateWithWhereUniqueWithoutProductInput | Products_salesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Products_salesUpdateManyWithWhereWithoutProductInput | Products_salesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Products_salesScalarWhereInput | Products_salesScalarWhereInput[]
  }

  export type Products_imagesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Products_imagesCreateWithoutProductInput, Products_imagesUncheckedCreateWithoutProductInput> | Products_imagesCreateWithoutProductInput[] | Products_imagesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_imagesCreateOrConnectWithoutProductInput | Products_imagesCreateOrConnectWithoutProductInput[]
    upsert?: Products_imagesUpsertWithWhereUniqueWithoutProductInput | Products_imagesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Products_imagesCreateManyProductInputEnvelope
    set?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    disconnect?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    delete?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    connect?: Products_imagesWhereUniqueInput | Products_imagesWhereUniqueInput[]
    update?: Products_imagesUpdateWithWhereUniqueWithoutProductInput | Products_imagesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Products_imagesUpdateManyWithWhereWithoutProductInput | Products_imagesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Products_imagesScalarWhereInput | Products_imagesScalarWhereInput[]
  }

  export type Products_purchasesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Products_purchasesCreateWithoutProductsInput, Products_purchasesUncheckedCreateWithoutProductsInput> | Products_purchasesCreateWithoutProductsInput[] | Products_purchasesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutProductsInput | Products_purchasesCreateOrConnectWithoutProductsInput[]
    upsert?: Products_purchasesUpsertWithWhereUniqueWithoutProductsInput | Products_purchasesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: Products_purchasesCreateManyProductsInputEnvelope
    set?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    disconnect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    delete?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    update?: Products_purchasesUpdateWithWhereUniqueWithoutProductsInput | Products_purchasesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: Products_purchasesUpdateManyWithWhereWithoutProductsInput | Products_purchasesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: Products_purchasesScalarWhereInput | Products_purchasesScalarWhereInput[]
  }

  export type Products_salesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Products_salesCreateWithoutProductInput, Products_salesUncheckedCreateWithoutProductInput> | Products_salesCreateWithoutProductInput[] | Products_salesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutProductInput | Products_salesCreateOrConnectWithoutProductInput[]
    upsert?: Products_salesUpsertWithWhereUniqueWithoutProductInput | Products_salesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: Products_salesCreateManyProductInputEnvelope
    set?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    disconnect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    delete?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    update?: Products_salesUpdateWithWhereUniqueWithoutProductInput | Products_salesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: Products_salesUpdateManyWithWhereWithoutProductInput | Products_salesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: Products_salesScalarWhereInput | Products_salesScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutImgInput = {
    create?: XOR<ProductsCreateWithoutImgInput, ProductsUncheckedCreateWithoutImgInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImgInput
    connect?: ProductsWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutImgNestedInput = {
    create?: XOR<ProductsCreateWithoutImgInput, ProductsUncheckedCreateWithoutImgInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImgInput
    upsert?: ProductsUpsertWithoutImgInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutImgInput, ProductsUpdateWithoutImgInput>, ProductsUncheckedUpdateWithoutImgInput>
  }

  export type Points_of_salesCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<Points_of_salesCreateWithoutEmployeesInput, Points_of_salesUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: Points_of_salesCreateOrConnectWithoutEmployeesInput
    connect?: Points_of_salesWhereUniqueInput
  }

  export type SalaryCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<SalaryCreateWithoutEmployeeInput, SalaryUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: SalaryCreateOrConnectWithoutEmployeeInput
    connect?: SalaryWhereUniqueInput
  }

  export type SalesCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalesCreateWithoutEmployeeInput, SalesUncheckedCreateWithoutEmployeeInput> | SalesCreateWithoutEmployeeInput[] | SalesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutEmployeeInput | SalesCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalesCreateManyEmployeeInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployeeInput
    connect?: UsersWhereUniqueInput
  }

  export type SalaryUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<SalaryCreateWithoutEmployeeInput, SalaryUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: SalaryCreateOrConnectWithoutEmployeeInput
    connect?: SalaryWhereUniqueInput
  }

  export type SalesUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalesCreateWithoutEmployeeInput, SalesUncheckedCreateWithoutEmployeeInput> | SalesCreateWithoutEmployeeInput[] | SalesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutEmployeeInput | SalesCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalesCreateManyEmployeeInputEnvelope
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployeeInput
    connect?: UsersWhereUniqueInput
  }

  export type Points_of_salesUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<Points_of_salesCreateWithoutEmployeesInput, Points_of_salesUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: Points_of_salesCreateOrConnectWithoutEmployeesInput
    upsert?: Points_of_salesUpsertWithoutEmployeesInput
    connect?: Points_of_salesWhereUniqueInput
    update?: XOR<XOR<Points_of_salesUpdateToOneWithWhereWithoutEmployeesInput, Points_of_salesUpdateWithoutEmployeesInput>, Points_of_salesUncheckedUpdateWithoutEmployeesInput>
  }

  export type SalaryUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<SalaryCreateWithoutEmployeeInput, SalaryUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: SalaryCreateOrConnectWithoutEmployeeInput
    upsert?: SalaryUpsertWithoutEmployeeInput
    disconnect?: SalaryWhereInput | boolean
    delete?: SalaryWhereInput | boolean
    connect?: SalaryWhereUniqueInput
    update?: XOR<XOR<SalaryUpdateToOneWithWhereWithoutEmployeeInput, SalaryUpdateWithoutEmployeeInput>, SalaryUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalesUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalesCreateWithoutEmployeeInput, SalesUncheckedCreateWithoutEmployeeInput> | SalesCreateWithoutEmployeeInput[] | SalesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutEmployeeInput | SalesCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutEmployeeInput | SalesUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalesCreateManyEmployeeInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutEmployeeInput | SalesUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutEmployeeInput | SalesUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployeeInput
    upsert?: UsersUpsertWithoutEmployeeInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEmployeeInput, UsersUpdateWithoutEmployeeInput>, UsersUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalaryUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<SalaryCreateWithoutEmployeeInput, SalaryUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: SalaryCreateOrConnectWithoutEmployeeInput
    upsert?: SalaryUpsertWithoutEmployeeInput
    disconnect?: SalaryWhereInput | boolean
    delete?: SalaryWhereInput | boolean
    connect?: SalaryWhereUniqueInput
    update?: XOR<XOR<SalaryUpdateToOneWithWhereWithoutEmployeeInput, SalaryUpdateWithoutEmployeeInput>, SalaryUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalesUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalesCreateWithoutEmployeeInput, SalesUncheckedCreateWithoutEmployeeInput> | SalesCreateWithoutEmployeeInput[] | SalesUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalesCreateOrConnectWithoutEmployeeInput | SalesCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalesUpsertWithWhereUniqueWithoutEmployeeInput | SalesUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalesCreateManyEmployeeInputEnvelope
    set?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    disconnect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    delete?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    connect?: SalesWhereUniqueInput | SalesWhereUniqueInput[]
    update?: SalesUpdateWithWhereUniqueWithoutEmployeeInput | SalesUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalesUpdateManyWithWhereWithoutEmployeeInput | SalesUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalesScalarWhereInput | SalesScalarWhereInput[]
  }

  export type UsersUncheckedUpdateOneWithoutEmployeeNestedInput = {
    create?: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEmployeeInput
    upsert?: UsersUpsertWithoutEmployeeInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEmployeeInput, UsersUpdateWithoutEmployeeInput>, UsersUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeesCreateNestedOneWithoutSalaryInput = {
    create?: XOR<EmployeesCreateWithoutSalaryInput, EmployeesUncheckedCreateWithoutSalaryInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutSalaryInput
    connect?: EmployeesWhereUniqueInput
  }

  export type EmployeesUpdateOneRequiredWithoutSalaryNestedInput = {
    create?: XOR<EmployeesCreateWithoutSalaryInput, EmployeesUncheckedCreateWithoutSalaryInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutSalaryInput
    upsert?: EmployeesUpsertWithoutSalaryInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutSalaryInput, EmployeesUpdateWithoutSalaryInput>, EmployeesUncheckedUpdateWithoutSalaryInput>
  }

  export type Products_salesCreateNestedManyWithoutSaleInput = {
    create?: XOR<Products_salesCreateWithoutSaleInput, Products_salesUncheckedCreateWithoutSaleInput> | Products_salesCreateWithoutSaleInput[] | Products_salesUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutSaleInput | Products_salesCreateOrConnectWithoutSaleInput[]
    createMany?: Products_salesCreateManySaleInputEnvelope
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
  }

  export type EmployeesCreateNestedOneWithoutSalesInput = {
    create?: XOR<EmployeesCreateWithoutSalesInput, EmployeesUncheckedCreateWithoutSalesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutSalesInput
    connect?: EmployeesWhereUniqueInput
  }

  export type Products_salesUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<Products_salesCreateWithoutSaleInput, Products_salesUncheckedCreateWithoutSaleInput> | Products_salesCreateWithoutSaleInput[] | Products_salesUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutSaleInput | Products_salesCreateOrConnectWithoutSaleInput[]
    createMany?: Products_salesCreateManySaleInputEnvelope
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Products_salesUpdateManyWithoutSaleNestedInput = {
    create?: XOR<Products_salesCreateWithoutSaleInput, Products_salesUncheckedCreateWithoutSaleInput> | Products_salesCreateWithoutSaleInput[] | Products_salesUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutSaleInput | Products_salesCreateOrConnectWithoutSaleInput[]
    upsert?: Products_salesUpsertWithWhereUniqueWithoutSaleInput | Products_salesUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: Products_salesCreateManySaleInputEnvelope
    set?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    disconnect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    delete?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    update?: Products_salesUpdateWithWhereUniqueWithoutSaleInput | Products_salesUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: Products_salesUpdateManyWithWhereWithoutSaleInput | Products_salesUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: Products_salesScalarWhereInput | Products_salesScalarWhereInput[]
  }

  export type EmployeesUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<EmployeesCreateWithoutSalesInput, EmployeesUncheckedCreateWithoutSalesInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutSalesInput
    upsert?: EmployeesUpsertWithoutSalesInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutSalesInput, EmployeesUpdateWithoutSalesInput>, EmployeesUncheckedUpdateWithoutSalesInput>
  }

  export type Products_salesUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<Products_salesCreateWithoutSaleInput, Products_salesUncheckedCreateWithoutSaleInput> | Products_salesCreateWithoutSaleInput[] | Products_salesUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: Products_salesCreateOrConnectWithoutSaleInput | Products_salesCreateOrConnectWithoutSaleInput[]
    upsert?: Products_salesUpsertWithWhereUniqueWithoutSaleInput | Products_salesUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: Products_salesCreateManySaleInputEnvelope
    set?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    disconnect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    delete?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    connect?: Products_salesWhereUniqueInput | Products_salesWhereUniqueInput[]
    update?: Products_salesUpdateWithWhereUniqueWithoutSaleInput | Products_salesUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: Products_salesUpdateManyWithWhereWithoutSaleInput | Products_salesUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: Products_salesScalarWhereInput | Products_salesScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutProducts_salesInput = {
    create?: XOR<ProductsCreateWithoutProducts_salesInput, ProductsUncheckedCreateWithoutProducts_salesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProducts_salesInput
    connect?: ProductsWhereUniqueInput
  }

  export type SalesCreateNestedOneWithoutProducts_salesInput = {
    create?: XOR<SalesCreateWithoutProducts_salesInput, SalesUncheckedCreateWithoutProducts_salesInput>
    connectOrCreate?: SalesCreateOrConnectWithoutProducts_salesInput
    connect?: SalesWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutProducts_salesNestedInput = {
    create?: XOR<ProductsCreateWithoutProducts_salesInput, ProductsUncheckedCreateWithoutProducts_salesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProducts_salesInput
    upsert?: ProductsUpsertWithoutProducts_salesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProducts_salesInput, ProductsUpdateWithoutProducts_salesInput>, ProductsUncheckedUpdateWithoutProducts_salesInput>
  }

  export type SalesUpdateOneRequiredWithoutProducts_salesNestedInput = {
    create?: XOR<SalesCreateWithoutProducts_salesInput, SalesUncheckedCreateWithoutProducts_salesInput>
    connectOrCreate?: SalesCreateOrConnectWithoutProducts_salesInput
    upsert?: SalesUpsertWithoutProducts_salesInput
    connect?: SalesWhereUniqueInput
    update?: XOR<XOR<SalesUpdateToOneWithWhereWithoutProducts_salesInput, SalesUpdateWithoutProducts_salesInput>, SalesUncheckedUpdateWithoutProducts_salesInput>
  }

  export type Products_purchasesCreateNestedManyWithoutPurchasesInput = {
    create?: XOR<Products_purchasesCreateWithoutPurchasesInput, Products_purchasesUncheckedCreateWithoutPurchasesInput> | Products_purchasesCreateWithoutPurchasesInput[] | Products_purchasesUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutPurchasesInput | Products_purchasesCreateOrConnectWithoutPurchasesInput[]
    createMany?: Products_purchasesCreateManyPurchasesInputEnvelope
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
  }

  export type Products_purchasesUncheckedCreateNestedManyWithoutPurchasesInput = {
    create?: XOR<Products_purchasesCreateWithoutPurchasesInput, Products_purchasesUncheckedCreateWithoutPurchasesInput> | Products_purchasesCreateWithoutPurchasesInput[] | Products_purchasesUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutPurchasesInput | Products_purchasesCreateOrConnectWithoutPurchasesInput[]
    createMany?: Products_purchasesCreateManyPurchasesInputEnvelope
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
  }

  export type Products_purchasesUpdateManyWithoutPurchasesNestedInput = {
    create?: XOR<Products_purchasesCreateWithoutPurchasesInput, Products_purchasesUncheckedCreateWithoutPurchasesInput> | Products_purchasesCreateWithoutPurchasesInput[] | Products_purchasesUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutPurchasesInput | Products_purchasesCreateOrConnectWithoutPurchasesInput[]
    upsert?: Products_purchasesUpsertWithWhereUniqueWithoutPurchasesInput | Products_purchasesUpsertWithWhereUniqueWithoutPurchasesInput[]
    createMany?: Products_purchasesCreateManyPurchasesInputEnvelope
    set?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    disconnect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    delete?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    update?: Products_purchasesUpdateWithWhereUniqueWithoutPurchasesInput | Products_purchasesUpdateWithWhereUniqueWithoutPurchasesInput[]
    updateMany?: Products_purchasesUpdateManyWithWhereWithoutPurchasesInput | Products_purchasesUpdateManyWithWhereWithoutPurchasesInput[]
    deleteMany?: Products_purchasesScalarWhereInput | Products_purchasesScalarWhereInput[]
  }

  export type Products_purchasesUncheckedUpdateManyWithoutPurchasesNestedInput = {
    create?: XOR<Products_purchasesCreateWithoutPurchasesInput, Products_purchasesUncheckedCreateWithoutPurchasesInput> | Products_purchasesCreateWithoutPurchasesInput[] | Products_purchasesUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: Products_purchasesCreateOrConnectWithoutPurchasesInput | Products_purchasesCreateOrConnectWithoutPurchasesInput[]
    upsert?: Products_purchasesUpsertWithWhereUniqueWithoutPurchasesInput | Products_purchasesUpsertWithWhereUniqueWithoutPurchasesInput[]
    createMany?: Products_purchasesCreateManyPurchasesInputEnvelope
    set?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    disconnect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    delete?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    connect?: Products_purchasesWhereUniqueInput | Products_purchasesWhereUniqueInput[]
    update?: Products_purchasesUpdateWithWhereUniqueWithoutPurchasesInput | Products_purchasesUpdateWithWhereUniqueWithoutPurchasesInput[]
    updateMany?: Products_purchasesUpdateManyWithWhereWithoutPurchasesInput | Products_purchasesUpdateManyWithWhereWithoutPurchasesInput[]
    deleteMany?: Products_purchasesScalarWhereInput | Products_purchasesScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutProducts_purchasesInput = {
    create?: XOR<ProductsCreateWithoutProducts_purchasesInput, ProductsUncheckedCreateWithoutProducts_purchasesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProducts_purchasesInput
    connect?: ProductsWhereUniqueInput
  }

  export type PurchasesCreateNestedOneWithoutProducts_purchasesInput = {
    create?: XOR<PurchasesCreateWithoutProducts_purchasesInput, PurchasesUncheckedCreateWithoutProducts_purchasesInput>
    connectOrCreate?: PurchasesCreateOrConnectWithoutProducts_purchasesInput
    connect?: PurchasesWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutProducts_purchasesNestedInput = {
    create?: XOR<ProductsCreateWithoutProducts_purchasesInput, ProductsUncheckedCreateWithoutProducts_purchasesInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProducts_purchasesInput
    upsert?: ProductsUpsertWithoutProducts_purchasesInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProducts_purchasesInput, ProductsUpdateWithoutProducts_purchasesInput>, ProductsUncheckedUpdateWithoutProducts_purchasesInput>
  }

  export type PurchasesUpdateOneRequiredWithoutProducts_purchasesNestedInput = {
    create?: XOR<PurchasesCreateWithoutProducts_purchasesInput, PurchasesUncheckedCreateWithoutProducts_purchasesInput>
    connectOrCreate?: PurchasesCreateOrConnectWithoutProducts_purchasesInput
    upsert?: PurchasesUpsertWithoutProducts_purchasesInput
    connect?: PurchasesWhereUniqueInput
    update?: XOR<XOR<PurchasesUpdateToOneWithWhereWithoutProducts_purchasesInput, PurchasesUpdateWithoutProducts_purchasesInput>, PurchasesUncheckedUpdateWithoutProducts_purchasesInput>
  }

  export type ExpensesCreateNestedManyWithoutExpenses_categoryInput = {
    create?: XOR<ExpensesCreateWithoutExpenses_categoryInput, ExpensesUncheckedCreateWithoutExpenses_categoryInput> | ExpensesCreateWithoutExpenses_categoryInput[] | ExpensesUncheckedCreateWithoutExpenses_categoryInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutExpenses_categoryInput | ExpensesCreateOrConnectWithoutExpenses_categoryInput[]
    createMany?: ExpensesCreateManyExpenses_categoryInputEnvelope
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
  }

  export type ExpensesUncheckedCreateNestedManyWithoutExpenses_categoryInput = {
    create?: XOR<ExpensesCreateWithoutExpenses_categoryInput, ExpensesUncheckedCreateWithoutExpenses_categoryInput> | ExpensesCreateWithoutExpenses_categoryInput[] | ExpensesUncheckedCreateWithoutExpenses_categoryInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutExpenses_categoryInput | ExpensesCreateOrConnectWithoutExpenses_categoryInput[]
    createMany?: ExpensesCreateManyExpenses_categoryInputEnvelope
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
  }

  export type ExpensesUpdateManyWithoutExpenses_categoryNestedInput = {
    create?: XOR<ExpensesCreateWithoutExpenses_categoryInput, ExpensesUncheckedCreateWithoutExpenses_categoryInput> | ExpensesCreateWithoutExpenses_categoryInput[] | ExpensesUncheckedCreateWithoutExpenses_categoryInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutExpenses_categoryInput | ExpensesCreateOrConnectWithoutExpenses_categoryInput[]
    upsert?: ExpensesUpsertWithWhereUniqueWithoutExpenses_categoryInput | ExpensesUpsertWithWhereUniqueWithoutExpenses_categoryInput[]
    createMany?: ExpensesCreateManyExpenses_categoryInputEnvelope
    set?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    disconnect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    delete?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    update?: ExpensesUpdateWithWhereUniqueWithoutExpenses_categoryInput | ExpensesUpdateWithWhereUniqueWithoutExpenses_categoryInput[]
    updateMany?: ExpensesUpdateManyWithWhereWithoutExpenses_categoryInput | ExpensesUpdateManyWithWhereWithoutExpenses_categoryInput[]
    deleteMany?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
  }

  export type ExpensesUncheckedUpdateManyWithoutExpenses_categoryNestedInput = {
    create?: XOR<ExpensesCreateWithoutExpenses_categoryInput, ExpensesUncheckedCreateWithoutExpenses_categoryInput> | ExpensesCreateWithoutExpenses_categoryInput[] | ExpensesUncheckedCreateWithoutExpenses_categoryInput[]
    connectOrCreate?: ExpensesCreateOrConnectWithoutExpenses_categoryInput | ExpensesCreateOrConnectWithoutExpenses_categoryInput[]
    upsert?: ExpensesUpsertWithWhereUniqueWithoutExpenses_categoryInput | ExpensesUpsertWithWhereUniqueWithoutExpenses_categoryInput[]
    createMany?: ExpensesCreateManyExpenses_categoryInputEnvelope
    set?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    disconnect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    delete?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    connect?: ExpensesWhereUniqueInput | ExpensesWhereUniqueInput[]
    update?: ExpensesUpdateWithWhereUniqueWithoutExpenses_categoryInput | ExpensesUpdateWithWhereUniqueWithoutExpenses_categoryInput[]
    updateMany?: ExpensesUpdateManyWithWhereWithoutExpenses_categoryInput | ExpensesUpdateManyWithWhereWithoutExpenses_categoryInput[]
    deleteMany?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
  }

  export type Expenses_categoryCreateNestedOneWithoutExpensesInput = {
    create?: XOR<Expenses_categoryCreateWithoutExpensesInput, Expenses_categoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: Expenses_categoryCreateOrConnectWithoutExpensesInput
    connect?: Expenses_categoryWhereUniqueInput
  }

  export type Expenses_categoryUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<Expenses_categoryCreateWithoutExpensesInput, Expenses_categoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: Expenses_categoryCreateOrConnectWithoutExpensesInput
    upsert?: Expenses_categoryUpsertWithoutExpensesInput
    connect?: Expenses_categoryWhereUniqueInput
    update?: XOR<XOR<Expenses_categoryUpdateToOneWithWhereWithoutExpensesInput, Expenses_categoryUpdateWithoutExpensesInput>, Expenses_categoryUncheckedUpdateWithoutExpensesInput>
  }

  export type EmployeesCreateNestedOneWithoutUserInput = {
    create?: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutUserInput
    connect?: EmployeesWhereUniqueInput
  }

  export type EmployeesUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmployeesCreateOrConnectWithoutUserInput
    upsert?: EmployeesUpsertWithoutUserInput
    connect?: EmployeesWhereUniqueInput
    update?: XOR<XOR<EmployeesUpdateToOneWithWhereWithoutUserInput, EmployeesUpdateWithoutUserInput>, EmployeesUncheckedUpdateWithoutUserInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EmployeesCreateWithoutPoint_of_salesInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    salary?: SalaryCreateNestedOneWithoutEmployeeInput
    sales?: SalesCreateNestedManyWithoutEmployeeInput
    user?: UsersCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutPoint_of_salesInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    salary?: SalaryUncheckedCreateNestedOneWithoutEmployeeInput
    sales?: SalesUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UsersUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutPoint_of_salesInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutPoint_of_salesInput, EmployeesUncheckedCreateWithoutPoint_of_salesInput>
  }

  export type EmployeesCreateManyPoint_of_salesInputEnvelope = {
    data: EmployeesCreateManyPoint_of_salesInput | EmployeesCreateManyPoint_of_salesInput[]
    skipDuplicates?: boolean
  }

  export type ProductsCreateWithoutPoints_of_salesInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    category: Products_categoriesCreateNestedOneWithoutProductsInput
    provider: ProvidersCreateNestedOneWithoutProductsInput
    img?: Products_imagesCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutPoints_of_salesInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    provider_name: string
    created_at?: Date | string
    last_update?: Date | string
    img?: Products_imagesUncheckedCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesUncheckedCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutPoints_of_salesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutPoints_of_salesInput, ProductsUncheckedCreateWithoutPoints_of_salesInput>
  }

  export type ProductsCreateManyPoints_of_salesInputEnvelope = {
    data: ProductsCreateManyPoints_of_salesInput | ProductsCreateManyPoints_of_salesInput[]
    skipDuplicates?: boolean
  }

  export type EmployeesUpsertWithWhereUniqueWithoutPoint_of_salesInput = {
    where: EmployeesWhereUniqueInput
    update: XOR<EmployeesUpdateWithoutPoint_of_salesInput, EmployeesUncheckedUpdateWithoutPoint_of_salesInput>
    create: XOR<EmployeesCreateWithoutPoint_of_salesInput, EmployeesUncheckedCreateWithoutPoint_of_salesInput>
  }

  export type EmployeesUpdateWithWhereUniqueWithoutPoint_of_salesInput = {
    where: EmployeesWhereUniqueInput
    data: XOR<EmployeesUpdateWithoutPoint_of_salesInput, EmployeesUncheckedUpdateWithoutPoint_of_salesInput>
  }

  export type EmployeesUpdateManyWithWhereWithoutPoint_of_salesInput = {
    where: EmployeesScalarWhereInput
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyWithoutPoint_of_salesInput>
  }

  export type EmployeesScalarWhereInput = {
    AND?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    OR?: EmployeesScalarWhereInput[]
    NOT?: EmployeesScalarWhereInput | EmployeesScalarWhereInput[]
    employee_id?: UuidFilter<"Employees"> | string
    CID?: StringFilter<"Employees"> | string
    first_name?: StringFilter<"Employees"> | string
    last_name?: StringFilter<"Employees"> | string
    address?: StringFilter<"Employees"> | string
    phone_number?: StringNullableFilter<"Employees"> | string | null
    img?: StringNullableFilter<"Employees"> | string | null
    pos_name?: StringFilter<"Employees"> | string
    created_at?: DateTimeFilter<"Employees"> | Date | string
    last_update?: DateTimeFilter<"Employees"> | Date | string
  }

  export type ProductsUpsertWithWhereUniqueWithoutPoints_of_salesInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutPoints_of_salesInput, ProductsUncheckedUpdateWithoutPoints_of_salesInput>
    create: XOR<ProductsCreateWithoutPoints_of_salesInput, ProductsUncheckedCreateWithoutPoints_of_salesInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutPoints_of_salesInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutPoints_of_salesInput, ProductsUncheckedUpdateWithoutPoints_of_salesInput>
  }

  export type ProductsUpdateManyWithWhereWithoutPoints_of_salesInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutPoints_of_salesInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    product_id?: UuidFilter<"Products"> | string
    branch?: StringFilter<"Products"> | string
    model?: StringFilter<"Products"> | string
    description?: StringFilter<"Products"> | string
    purchase_price?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFilter<"Products"> | number
    amount?: DecimalFilter<"Products"> | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFilter<"Products"> | Date | string
    category_name?: StringFilter<"Products"> | string
    provider_name?: StringFilter<"Products"> | string
    pos_name?: StringFilter<"Products"> | string
    created_at?: DateTimeFilter<"Products"> | Date | string
    last_update?: DateTimeFilter<"Products"> | Date | string
  }

  export type ProductsCreateWithoutCategoryInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    points_of_sales: Points_of_salesCreateNestedOneWithoutProductsInput
    provider: ProvidersCreateNestedOneWithoutProductsInput
    img?: Products_imagesCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    provider_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    img?: Products_imagesUncheckedCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesUncheckedCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsCreateWithoutProviderInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    category: Products_categoriesCreateNestedOneWithoutProductsInput
    points_of_sales: Points_of_salesCreateNestedOneWithoutProductsInput
    img?: Products_imagesCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProviderInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    img?: Products_imagesUncheckedCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesUncheckedCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProviderInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProviderInput, ProductsUncheckedCreateWithoutProviderInput>
  }

  export type ProductsCreateManyProviderInputEnvelope = {
    data: ProductsCreateManyProviderInput | ProductsCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutProviderInput, ProductsUncheckedUpdateWithoutProviderInput>
    create: XOR<ProductsCreateWithoutProviderInput, ProductsUncheckedCreateWithoutProviderInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutProviderInput, ProductsUncheckedUpdateWithoutProviderInput>
  }

  export type ProductsUpdateManyWithWhereWithoutProviderInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutProviderInput>
  }

  export type Products_categoriesCreateWithoutProductsInput = {
    products_categories_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_categoriesUncheckedCreateWithoutProductsInput = {
    products_categories_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_categoriesCreateOrConnectWithoutProductsInput = {
    where: Products_categoriesWhereUniqueInput
    create: XOR<Products_categoriesCreateWithoutProductsInput, Products_categoriesUncheckedCreateWithoutProductsInput>
  }

  export type Points_of_salesCreateWithoutProductsInput = {
    point_of_sales_id?: string
    name: string
    address: string
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    employees?: EmployeesCreateNestedManyWithoutPoint_of_salesInput
  }

  export type Points_of_salesUncheckedCreateWithoutProductsInput = {
    point_of_sales_id?: string
    name: string
    address: string
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    employees?: EmployeesUncheckedCreateNestedManyWithoutPoint_of_salesInput
  }

  export type Points_of_salesCreateOrConnectWithoutProductsInput = {
    where: Points_of_salesWhereUniqueInput
    create: XOR<Points_of_salesCreateWithoutProductsInput, Points_of_salesUncheckedCreateWithoutProductsInput>
  }

  export type ProvidersCreateWithoutProductsInput = {
    provider_id?: string
    name: string
    phone_number: string
    email?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ProvidersUncheckedCreateWithoutProductsInput = {
    provider_id?: string
    name: string
    phone_number: string
    email?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ProvidersCreateOrConnectWithoutProductsInput = {
    where: ProvidersWhereUniqueInput
    create: XOR<ProvidersCreateWithoutProductsInput, ProvidersUncheckedCreateWithoutProductsInput>
  }

  export type Products_imagesCreateWithoutProductInput = {
    image_original_key: string
    image_thumb_key: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_imagesUncheckedCreateWithoutProductInput = {
    image_original_key: string
    image_thumb_key: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_imagesCreateOrConnectWithoutProductInput = {
    where: Products_imagesWhereUniqueInput
    create: XOR<Products_imagesCreateWithoutProductInput, Products_imagesUncheckedCreateWithoutProductInput>
  }

  export type Products_imagesCreateManyProductInputEnvelope = {
    data: Products_imagesCreateManyProductInput | Products_imagesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Products_purchasesCreateWithoutProductsInput = {
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    purchases: PurchasesCreateNestedOneWithoutProducts_purchasesInput
  }

  export type Products_purchasesUncheckedCreateWithoutProductsInput = {
    purchase_id: string
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_purchasesCreateOrConnectWithoutProductsInput = {
    where: Products_purchasesWhereUniqueInput
    create: XOR<Products_purchasesCreateWithoutProductsInput, Products_purchasesUncheckedCreateWithoutProductsInput>
  }

  export type Products_purchasesCreateManyProductsInputEnvelope = {
    data: Products_purchasesCreateManyProductsInput | Products_purchasesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type Products_salesCreateWithoutProductInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    sale: SalesCreateNestedOneWithoutProducts_salesInput
  }

  export type Products_salesUncheckedCreateWithoutProductInput = {
    sale_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
  }

  export type Products_salesCreateOrConnectWithoutProductInput = {
    where: Products_salesWhereUniqueInput
    create: XOR<Products_salesCreateWithoutProductInput, Products_salesUncheckedCreateWithoutProductInput>
  }

  export type Products_salesCreateManyProductInputEnvelope = {
    data: Products_salesCreateManyProductInput | Products_salesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type Products_categoriesUpsertWithoutProductsInput = {
    update: XOR<Products_categoriesUpdateWithoutProductsInput, Products_categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<Products_categoriesCreateWithoutProductsInput, Products_categoriesUncheckedCreateWithoutProductsInput>
    where?: Products_categoriesWhereInput
  }

  export type Products_categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: Products_categoriesWhereInput
    data: XOR<Products_categoriesUpdateWithoutProductsInput, Products_categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type Products_categoriesUpdateWithoutProductsInput = {
    products_categories_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_categoriesUncheckedUpdateWithoutProductsInput = {
    products_categories_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Points_of_salesUpsertWithoutProductsInput = {
    update: XOR<Points_of_salesUpdateWithoutProductsInput, Points_of_salesUncheckedUpdateWithoutProductsInput>
    create: XOR<Points_of_salesCreateWithoutProductsInput, Points_of_salesUncheckedCreateWithoutProductsInput>
    where?: Points_of_salesWhereInput
  }

  export type Points_of_salesUpdateToOneWithWhereWithoutProductsInput = {
    where?: Points_of_salesWhereInput
    data: XOR<Points_of_salesUpdateWithoutProductsInput, Points_of_salesUncheckedUpdateWithoutProductsInput>
  }

  export type Points_of_salesUpdateWithoutProductsInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeesUpdateManyWithoutPoint_of_salesNestedInput
  }

  export type Points_of_salesUncheckedUpdateWithoutProductsInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    employees?: EmployeesUncheckedUpdateManyWithoutPoint_of_salesNestedInput
  }

  export type ProvidersUpsertWithoutProductsInput = {
    update: XOR<ProvidersUpdateWithoutProductsInput, ProvidersUncheckedUpdateWithoutProductsInput>
    create: XOR<ProvidersCreateWithoutProductsInput, ProvidersUncheckedCreateWithoutProductsInput>
    where?: ProvidersWhereInput
  }

  export type ProvidersUpdateToOneWithWhereWithoutProductsInput = {
    where?: ProvidersWhereInput
    data: XOR<ProvidersUpdateWithoutProductsInput, ProvidersUncheckedUpdateWithoutProductsInput>
  }

  export type ProvidersUpdateWithoutProductsInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProvidersUncheckedUpdateWithoutProductsInput = {
    provider_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_imagesUpsertWithWhereUniqueWithoutProductInput = {
    where: Products_imagesWhereUniqueInput
    update: XOR<Products_imagesUpdateWithoutProductInput, Products_imagesUncheckedUpdateWithoutProductInput>
    create: XOR<Products_imagesCreateWithoutProductInput, Products_imagesUncheckedCreateWithoutProductInput>
  }

  export type Products_imagesUpdateWithWhereUniqueWithoutProductInput = {
    where: Products_imagesWhereUniqueInput
    data: XOR<Products_imagesUpdateWithoutProductInput, Products_imagesUncheckedUpdateWithoutProductInput>
  }

  export type Products_imagesUpdateManyWithWhereWithoutProductInput = {
    where: Products_imagesScalarWhereInput
    data: XOR<Products_imagesUpdateManyMutationInput, Products_imagesUncheckedUpdateManyWithoutProductInput>
  }

  export type Products_imagesScalarWhereInput = {
    AND?: Products_imagesScalarWhereInput | Products_imagesScalarWhereInput[]
    OR?: Products_imagesScalarWhereInput[]
    NOT?: Products_imagesScalarWhereInput | Products_imagesScalarWhereInput[]
    id?: UuidFilter<"Products_images"> | string
    image_original_key?: StringFilter<"Products_images"> | string
    image_thumb_key?: StringFilter<"Products_images"> | string
    created_at?: DateTimeFilter<"Products_images"> | Date | string
    last_update?: DateTimeFilter<"Products_images"> | Date | string
  }

  export type Products_purchasesUpsertWithWhereUniqueWithoutProductsInput = {
    where: Products_purchasesWhereUniqueInput
    update: XOR<Products_purchasesUpdateWithoutProductsInput, Products_purchasesUncheckedUpdateWithoutProductsInput>
    create: XOR<Products_purchasesCreateWithoutProductsInput, Products_purchasesUncheckedCreateWithoutProductsInput>
  }

  export type Products_purchasesUpdateWithWhereUniqueWithoutProductsInput = {
    where: Products_purchasesWhereUniqueInput
    data: XOR<Products_purchasesUpdateWithoutProductsInput, Products_purchasesUncheckedUpdateWithoutProductsInput>
  }

  export type Products_purchasesUpdateManyWithWhereWithoutProductsInput = {
    where: Products_purchasesScalarWhereInput
    data: XOR<Products_purchasesUpdateManyMutationInput, Products_purchasesUncheckedUpdateManyWithoutProductsInput>
  }

  export type Products_purchasesScalarWhereInput = {
    AND?: Products_purchasesScalarWhereInput | Products_purchasesScalarWhereInput[]
    OR?: Products_purchasesScalarWhereInput[]
    NOT?: Products_purchasesScalarWhereInput | Products_purchasesScalarWhereInput[]
    purchase_id?: UuidFilter<"Products_purchases"> | string
    product_id?: UuidFilter<"Products_purchases"> | string
    product_quantity?: IntFilter<"Products_purchases"> | number
    product_unit_price?: DecimalFilter<"Products_purchases"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Products_purchases"> | Date | string
    last_update?: DateTimeFilter<"Products_purchases"> | Date | string
  }

  export type Products_salesUpsertWithWhereUniqueWithoutProductInput = {
    where: Products_salesWhereUniqueInput
    update: XOR<Products_salesUpdateWithoutProductInput, Products_salesUncheckedUpdateWithoutProductInput>
    create: XOR<Products_salesCreateWithoutProductInput, Products_salesUncheckedCreateWithoutProductInput>
  }

  export type Products_salesUpdateWithWhereUniqueWithoutProductInput = {
    where: Products_salesWhereUniqueInput
    data: XOR<Products_salesUpdateWithoutProductInput, Products_salesUncheckedUpdateWithoutProductInput>
  }

  export type Products_salesUpdateManyWithWhereWithoutProductInput = {
    where: Products_salesScalarWhereInput
    data: XOR<Products_salesUpdateManyMutationInput, Products_salesUncheckedUpdateManyWithoutProductInput>
  }

  export type Products_salesScalarWhereInput = {
    AND?: Products_salesScalarWhereInput | Products_salesScalarWhereInput[]
    OR?: Products_salesScalarWhereInput[]
    NOT?: Products_salesScalarWhereInput | Products_salesScalarWhereInput[]
    sale_id?: UuidFilter<"Products_sales"> | string
    product_id?: UuidFilter<"Products_sales"> | string
    quantity?: IntFilter<"Products_sales"> | number
    unit_price?: DecimalFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFilter<"Products_sales"> | Decimal | DecimalJsLike | number | string
  }

  export type ProductsCreateWithoutImgInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    category: Products_categoriesCreateNestedOneWithoutProductsInput
    points_of_sales: Points_of_salesCreateNestedOneWithoutProductsInput
    provider: ProvidersCreateNestedOneWithoutProductsInput
    products_purchases?: Products_purchasesCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutImgInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    provider_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    products_purchases?: Products_purchasesUncheckedCreateNestedManyWithoutProductsInput
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutImgInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutImgInput, ProductsUncheckedCreateWithoutImgInput>
  }

  export type ProductsUpsertWithoutImgInput = {
    update: XOR<ProductsUpdateWithoutImgInput, ProductsUncheckedUpdateWithoutImgInput>
    create: XOR<ProductsCreateWithoutImgInput, ProductsUncheckedCreateWithoutImgInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutImgInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutImgInput, ProductsUncheckedUpdateWithoutImgInput>
  }

  export type ProductsUpdateWithoutImgInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Products_categoriesUpdateOneRequiredWithoutProductsNestedInput
    points_of_sales?: Points_of_salesUpdateOneRequiredWithoutProductsNestedInput
    provider?: ProvidersUpdateOneRequiredWithoutProductsNestedInput
    products_purchases?: Products_purchasesUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutImgInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    provider_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products_purchases?: Products_purchasesUncheckedUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type Points_of_salesCreateWithoutEmployeesInput = {
    point_of_sales_id?: string
    name: string
    address: string
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    products?: ProductsCreateNestedManyWithoutPoints_of_salesInput
  }

  export type Points_of_salesUncheckedCreateWithoutEmployeesInput = {
    point_of_sales_id?: string
    name: string
    address: string
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutPoints_of_salesInput
  }

  export type Points_of_salesCreateOrConnectWithoutEmployeesInput = {
    where: Points_of_salesWhereUniqueInput
    create: XOR<Points_of_salesCreateWithoutEmployeesInput, Points_of_salesUncheckedCreateWithoutEmployeesInput>
  }

  export type SalaryCreateWithoutEmployeeInput = {
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type SalaryUncheckedCreateWithoutEmployeeInput = {
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type SalaryCreateOrConnectWithoutEmployeeInput = {
    where: SalaryWhereUniqueInput
    create: XOR<SalaryCreateWithoutEmployeeInput, SalaryUncheckedCreateWithoutEmployeeInput>
  }

  export type SalesCreateWithoutEmployeeInput = {
    sales_id?: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
    products_sales?: Products_salesCreateNestedManyWithoutSaleInput
  }

  export type SalesUncheckedCreateWithoutEmployeeInput = {
    sales_id?: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SalesCreateOrConnectWithoutEmployeeInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutEmployeeInput, SalesUncheckedCreateWithoutEmployeeInput>
  }

  export type SalesCreateManyEmployeeInputEnvelope = {
    data: SalesCreateManyEmployeeInput | SalesCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type UsersCreateWithoutEmployeeInput = {
    user_id?: string
    username: string
    password: string
    role: string
    created_at?: Date | string
    last_time_online?: Date | string | null
    last_update?: Date | string
  }

  export type UsersUncheckedCreateWithoutEmployeeInput = {
    user_id?: string
    username: string
    password: string
    role: string
    created_at?: Date | string
    last_time_online?: Date | string | null
    last_update?: Date | string
  }

  export type UsersCreateOrConnectWithoutEmployeeInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
  }

  export type Points_of_salesUpsertWithoutEmployeesInput = {
    update: XOR<Points_of_salesUpdateWithoutEmployeesInput, Points_of_salesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<Points_of_salesCreateWithoutEmployeesInput, Points_of_salesUncheckedCreateWithoutEmployeesInput>
    where?: Points_of_salesWhereInput
  }

  export type Points_of_salesUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: Points_of_salesWhereInput
    data: XOR<Points_of_salesUpdateWithoutEmployeesInput, Points_of_salesUncheckedUpdateWithoutEmployeesInput>
  }

  export type Points_of_salesUpdateWithoutEmployeesInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutPoints_of_salesNestedInput
  }

  export type Points_of_salesUncheckedUpdateWithoutEmployeesInput = {
    point_of_sales_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutPoints_of_salesNestedInput
  }

  export type SalaryUpsertWithoutEmployeeInput = {
    update: XOR<SalaryUpdateWithoutEmployeeInput, SalaryUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SalaryCreateWithoutEmployeeInput, SalaryUncheckedCreateWithoutEmployeeInput>
    where?: SalaryWhereInput
  }

  export type SalaryUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: SalaryWhereInput
    data: XOR<SalaryUpdateWithoutEmployeeInput, SalaryUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalaryUpdateWithoutEmployeeInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUncheckedUpdateWithoutEmployeeInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: SalesWhereUniqueInput
    update: XOR<SalesUpdateWithoutEmployeeInput, SalesUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SalesCreateWithoutEmployeeInput, SalesUncheckedCreateWithoutEmployeeInput>
  }

  export type SalesUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: SalesWhereUniqueInput
    data: XOR<SalesUpdateWithoutEmployeeInput, SalesUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalesUpdateManyWithWhereWithoutEmployeeInput = {
    where: SalesScalarWhereInput
    data: XOR<SalesUpdateManyMutationInput, SalesUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type SalesScalarWhereInput = {
    AND?: SalesScalarWhereInput | SalesScalarWhereInput[]
    OR?: SalesScalarWhereInput[]
    NOT?: SalesScalarWhereInput | SalesScalarWhereInput[]
    sales_id?: UuidFilter<"Sales"> | string
    employee_cid?: StringFilter<"Sales"> | string
    date?: DateTimeFilter<"Sales"> | Date | string
    total_amount?: DecimalFilter<"Sales"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFilter<"Sales"> | Date | string
    last_update?: DateTimeFilter<"Sales"> | Date | string
    deleted_at?: DateTimeNullableFilter<"Sales"> | Date | string | null
  }

  export type UsersUpsertWithoutEmployeeInput = {
    update: XOR<UsersUpdateWithoutEmployeeInput, UsersUncheckedUpdateWithoutEmployeeInput>
    create: XOR<UsersCreateWithoutEmployeeInput, UsersUncheckedCreateWithoutEmployeeInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEmployeeInput, UsersUncheckedUpdateWithoutEmployeeInput>
  }

  export type UsersUpdateWithoutEmployeeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_time_online?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutEmployeeInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_time_online?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesCreateWithoutSalaryInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    point_of_sales: Points_of_salesCreateNestedOneWithoutEmployeesInput
    sales?: SalesCreateNestedManyWithoutEmployeeInput
    user?: UsersCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutSalaryInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    sales?: SalesUncheckedCreateNestedManyWithoutEmployeeInput
    user?: UsersUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutSalaryInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutSalaryInput, EmployeesUncheckedCreateWithoutSalaryInput>
  }

  export type EmployeesUpsertWithoutSalaryInput = {
    update: XOR<EmployeesUpdateWithoutSalaryInput, EmployeesUncheckedUpdateWithoutSalaryInput>
    create: XOR<EmployeesCreateWithoutSalaryInput, EmployeesUncheckedCreateWithoutSalaryInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutSalaryInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutSalaryInput, EmployeesUncheckedUpdateWithoutSalaryInput>
  }

  export type EmployeesUpdateWithoutSalaryInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    point_of_sales?: Points_of_salesUpdateOneRequiredWithoutEmployeesNestedInput
    sales?: SalesUpdateManyWithoutEmployeeNestedInput
    user?: UsersUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutSalaryInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SalesUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UsersUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type Products_salesCreateWithoutSaleInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
    product: ProductsCreateNestedOneWithoutProducts_salesInput
  }

  export type Products_salesUncheckedCreateWithoutSaleInput = {
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
  }

  export type Products_salesCreateOrConnectWithoutSaleInput = {
    where: Products_salesWhereUniqueInput
    create: XOR<Products_salesCreateWithoutSaleInput, Products_salesUncheckedCreateWithoutSaleInput>
  }

  export type Products_salesCreateManySaleInputEnvelope = {
    data: Products_salesCreateManySaleInput | Products_salesCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type EmployeesCreateWithoutSalesInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    point_of_sales: Points_of_salesCreateNestedOneWithoutEmployeesInput
    salary?: SalaryCreateNestedOneWithoutEmployeeInput
    user?: UsersCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutSalesInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    salary?: SalaryUncheckedCreateNestedOneWithoutEmployeeInput
    user?: UsersUncheckedCreateNestedOneWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutSalesInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutSalesInput, EmployeesUncheckedCreateWithoutSalesInput>
  }

  export type Products_salesUpsertWithWhereUniqueWithoutSaleInput = {
    where: Products_salesWhereUniqueInput
    update: XOR<Products_salesUpdateWithoutSaleInput, Products_salesUncheckedUpdateWithoutSaleInput>
    create: XOR<Products_salesCreateWithoutSaleInput, Products_salesUncheckedCreateWithoutSaleInput>
  }

  export type Products_salesUpdateWithWhereUniqueWithoutSaleInput = {
    where: Products_salesWhereUniqueInput
    data: XOR<Products_salesUpdateWithoutSaleInput, Products_salesUncheckedUpdateWithoutSaleInput>
  }

  export type Products_salesUpdateManyWithWhereWithoutSaleInput = {
    where: Products_salesScalarWhereInput
    data: XOR<Products_salesUpdateManyMutationInput, Products_salesUncheckedUpdateManyWithoutSaleInput>
  }

  export type EmployeesUpsertWithoutSalesInput = {
    update: XOR<EmployeesUpdateWithoutSalesInput, EmployeesUncheckedUpdateWithoutSalesInput>
    create: XOR<EmployeesCreateWithoutSalesInput, EmployeesUncheckedCreateWithoutSalesInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutSalesInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutSalesInput, EmployeesUncheckedUpdateWithoutSalesInput>
  }

  export type EmployeesUpdateWithoutSalesInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    point_of_sales?: Points_of_salesUpdateOneRequiredWithoutEmployeesNestedInput
    salary?: SalaryUpdateOneWithoutEmployeeNestedInput
    user?: UsersUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutSalesInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: SalaryUncheckedUpdateOneWithoutEmployeeNestedInput
    user?: UsersUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type ProductsCreateWithoutProducts_salesInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    category: Products_categoriesCreateNestedOneWithoutProductsInput
    points_of_sales: Points_of_salesCreateNestedOneWithoutProductsInput
    provider: ProvidersCreateNestedOneWithoutProductsInput
    img?: Products_imagesCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutProducts_salesInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    provider_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    img?: Products_imagesUncheckedCreateNestedManyWithoutProductInput
    products_purchases?: Products_purchasesUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutProducts_salesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProducts_salesInput, ProductsUncheckedCreateWithoutProducts_salesInput>
  }

  export type SalesCreateWithoutProducts_salesInput = {
    sales_id?: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
    employee: EmployeesCreateNestedOneWithoutSalesInput
  }

  export type SalesUncheckedCreateWithoutProducts_salesInput = {
    sales_id?: string
    employee_cid: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
  }

  export type SalesCreateOrConnectWithoutProducts_salesInput = {
    where: SalesWhereUniqueInput
    create: XOR<SalesCreateWithoutProducts_salesInput, SalesUncheckedCreateWithoutProducts_salesInput>
  }

  export type ProductsUpsertWithoutProducts_salesInput = {
    update: XOR<ProductsUpdateWithoutProducts_salesInput, ProductsUncheckedUpdateWithoutProducts_salesInput>
    create: XOR<ProductsCreateWithoutProducts_salesInput, ProductsUncheckedCreateWithoutProducts_salesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProducts_salesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProducts_salesInput, ProductsUncheckedUpdateWithoutProducts_salesInput>
  }

  export type ProductsUpdateWithoutProducts_salesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Products_categoriesUpdateOneRequiredWithoutProductsNestedInput
    points_of_sales?: Points_of_salesUpdateOneRequiredWithoutProductsNestedInput
    provider?: ProvidersUpdateOneRequiredWithoutProductsNestedInput
    img?: Products_imagesUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProducts_salesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    provider_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: Products_imagesUncheckedUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type SalesUpsertWithoutProducts_salesInput = {
    update: XOR<SalesUpdateWithoutProducts_salesInput, SalesUncheckedUpdateWithoutProducts_salesInput>
    create: XOR<SalesCreateWithoutProducts_salesInput, SalesUncheckedCreateWithoutProducts_salesInput>
    where?: SalesWhereInput
  }

  export type SalesUpdateToOneWithWhereWithoutProducts_salesInput = {
    where?: SalesWhereInput
    data: XOR<SalesUpdateWithoutProducts_salesInput, SalesUncheckedUpdateWithoutProducts_salesInput>
  }

  export type SalesUpdateWithoutProducts_salesInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    employee?: EmployeesUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SalesUncheckedUpdateWithoutProducts_salesInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    employee_cid?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Products_purchasesCreateWithoutPurchasesInput = {
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    products: ProductsCreateNestedOneWithoutProducts_purchasesInput
  }

  export type Products_purchasesUncheckedCreateWithoutPurchasesInput = {
    product_id: string
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_purchasesCreateOrConnectWithoutPurchasesInput = {
    where: Products_purchasesWhereUniqueInput
    create: XOR<Products_purchasesCreateWithoutPurchasesInput, Products_purchasesUncheckedCreateWithoutPurchasesInput>
  }

  export type Products_purchasesCreateManyPurchasesInputEnvelope = {
    data: Products_purchasesCreateManyPurchasesInput | Products_purchasesCreateManyPurchasesInput[]
    skipDuplicates?: boolean
  }

  export type Products_purchasesUpsertWithWhereUniqueWithoutPurchasesInput = {
    where: Products_purchasesWhereUniqueInput
    update: XOR<Products_purchasesUpdateWithoutPurchasesInput, Products_purchasesUncheckedUpdateWithoutPurchasesInput>
    create: XOR<Products_purchasesCreateWithoutPurchasesInput, Products_purchasesUncheckedCreateWithoutPurchasesInput>
  }

  export type Products_purchasesUpdateWithWhereUniqueWithoutPurchasesInput = {
    where: Products_purchasesWhereUniqueInput
    data: XOR<Products_purchasesUpdateWithoutPurchasesInput, Products_purchasesUncheckedUpdateWithoutPurchasesInput>
  }

  export type Products_purchasesUpdateManyWithWhereWithoutPurchasesInput = {
    where: Products_purchasesScalarWhereInput
    data: XOR<Products_purchasesUpdateManyMutationInput, Products_purchasesUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type ProductsCreateWithoutProducts_purchasesInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
    category: Products_categoriesCreateNestedOneWithoutProductsInput
    points_of_sales: Points_of_salesCreateNestedOneWithoutProductsInput
    provider: ProvidersCreateNestedOneWithoutProductsInput
    img?: Products_imagesCreateNestedManyWithoutProductInput
    products_sales?: Products_salesCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProducts_purchasesInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    provider_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    img?: Products_imagesUncheckedCreateNestedManyWithoutProductInput
    products_sales?: Products_salesUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProducts_purchasesInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProducts_purchasesInput, ProductsUncheckedCreateWithoutProducts_purchasesInput>
  }

  export type PurchasesCreateWithoutProducts_purchasesInput = {
    purchases_id?: string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type PurchasesUncheckedCreateWithoutProducts_purchasesInput = {
    purchases_id?: string
    purchase_date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type PurchasesCreateOrConnectWithoutProducts_purchasesInput = {
    where: PurchasesWhereUniqueInput
    create: XOR<PurchasesCreateWithoutProducts_purchasesInput, PurchasesUncheckedCreateWithoutProducts_purchasesInput>
  }

  export type ProductsUpsertWithoutProducts_purchasesInput = {
    update: XOR<ProductsUpdateWithoutProducts_purchasesInput, ProductsUncheckedUpdateWithoutProducts_purchasesInput>
    create: XOR<ProductsCreateWithoutProducts_purchasesInput, ProductsUncheckedCreateWithoutProducts_purchasesInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProducts_purchasesInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProducts_purchasesInput, ProductsUncheckedUpdateWithoutProducts_purchasesInput>
  }

  export type ProductsUpdateWithoutProducts_purchasesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Products_categoriesUpdateOneRequiredWithoutProductsNestedInput
    points_of_sales?: Points_of_salesUpdateOneRequiredWithoutProductsNestedInput
    provider?: ProvidersUpdateOneRequiredWithoutProductsNestedInput
    img?: Products_imagesUpdateManyWithoutProductNestedInput
    products_sales?: Products_salesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProducts_purchasesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    provider_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: Products_imagesUncheckedUpdateManyWithoutProductNestedInput
    products_sales?: Products_salesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type PurchasesUpsertWithoutProducts_purchasesInput = {
    update: XOR<PurchasesUpdateWithoutProducts_purchasesInput, PurchasesUncheckedUpdateWithoutProducts_purchasesInput>
    create: XOR<PurchasesCreateWithoutProducts_purchasesInput, PurchasesUncheckedCreateWithoutProducts_purchasesInput>
    where?: PurchasesWhereInput
  }

  export type PurchasesUpdateToOneWithWhereWithoutProducts_purchasesInput = {
    where?: PurchasesWhereInput
    data: XOR<PurchasesUpdateWithoutProducts_purchasesInput, PurchasesUncheckedUpdateWithoutProducts_purchasesInput>
  }

  export type PurchasesUpdateWithoutProducts_purchasesInput = {
    purchases_id?: StringFieldUpdateOperationsInput | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasesUncheckedUpdateWithoutProducts_purchasesInput = {
    purchases_id?: StringFieldUpdateOperationsInput | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesCreateWithoutExpenses_categoryInput = {
    expenses_id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ExpensesUncheckedCreateWithoutExpenses_categoryInput = {
    expenses_id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ExpensesCreateOrConnectWithoutExpenses_categoryInput = {
    where: ExpensesWhereUniqueInput
    create: XOR<ExpensesCreateWithoutExpenses_categoryInput, ExpensesUncheckedCreateWithoutExpenses_categoryInput>
  }

  export type ExpensesCreateManyExpenses_categoryInputEnvelope = {
    data: ExpensesCreateManyExpenses_categoryInput | ExpensesCreateManyExpenses_categoryInput[]
    skipDuplicates?: boolean
  }

  export type ExpensesUpsertWithWhereUniqueWithoutExpenses_categoryInput = {
    where: ExpensesWhereUniqueInput
    update: XOR<ExpensesUpdateWithoutExpenses_categoryInput, ExpensesUncheckedUpdateWithoutExpenses_categoryInput>
    create: XOR<ExpensesCreateWithoutExpenses_categoryInput, ExpensesUncheckedCreateWithoutExpenses_categoryInput>
  }

  export type ExpensesUpdateWithWhereUniqueWithoutExpenses_categoryInput = {
    where: ExpensesWhereUniqueInput
    data: XOR<ExpensesUpdateWithoutExpenses_categoryInput, ExpensesUncheckedUpdateWithoutExpenses_categoryInput>
  }

  export type ExpensesUpdateManyWithWhereWithoutExpenses_categoryInput = {
    where: ExpensesScalarWhereInput
    data: XOR<ExpensesUpdateManyMutationInput, ExpensesUncheckedUpdateManyWithoutExpenses_categoryInput>
  }

  export type ExpensesScalarWhereInput = {
    AND?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
    OR?: ExpensesScalarWhereInput[]
    NOT?: ExpensesScalarWhereInput | ExpensesScalarWhereInput[]
    expenses_id?: UuidFilter<"Expenses"> | string
    amount?: DecimalFilter<"Expenses"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Expenses"> | Date | string
    exp_category_name?: StringFilter<"Expenses"> | string
    created_at?: DateTimeFilter<"Expenses"> | Date | string
    last_update?: DateTimeFilter<"Expenses"> | Date | string
  }

  export type Expenses_categoryCreateWithoutExpensesInput = {
    expense_category_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Expenses_categoryUncheckedCreateWithoutExpensesInput = {
    expense_category_id?: string
    name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Expenses_categoryCreateOrConnectWithoutExpensesInput = {
    where: Expenses_categoryWhereUniqueInput
    create: XOR<Expenses_categoryCreateWithoutExpensesInput, Expenses_categoryUncheckedCreateWithoutExpensesInput>
  }

  export type Expenses_categoryUpsertWithoutExpensesInput = {
    update: XOR<Expenses_categoryUpdateWithoutExpensesInput, Expenses_categoryUncheckedUpdateWithoutExpensesInput>
    create: XOR<Expenses_categoryCreateWithoutExpensesInput, Expenses_categoryUncheckedCreateWithoutExpensesInput>
    where?: Expenses_categoryWhereInput
  }

  export type Expenses_categoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: Expenses_categoryWhereInput
    data: XOR<Expenses_categoryUpdateWithoutExpensesInput, Expenses_categoryUncheckedUpdateWithoutExpensesInput>
  }

  export type Expenses_categoryUpdateWithoutExpensesInput = {
    expense_category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Expenses_categoryUncheckedUpdateWithoutExpensesInput = {
    expense_category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeesCreateWithoutUserInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
    point_of_sales: Points_of_salesCreateNestedOneWithoutEmployeesInput
    salary?: SalaryCreateNestedOneWithoutEmployeeInput
    sales?: SalesCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesUncheckedCreateWithoutUserInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
    salary?: SalaryUncheckedCreateNestedOneWithoutEmployeeInput
    sales?: SalesUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeesCreateOrConnectWithoutUserInput = {
    where: EmployeesWhereUniqueInput
    create: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
  }

  export type EmployeesUpsertWithoutUserInput = {
    update: XOR<EmployeesUpdateWithoutUserInput, EmployeesUncheckedUpdateWithoutUserInput>
    create: XOR<EmployeesCreateWithoutUserInput, EmployeesUncheckedCreateWithoutUserInput>
    where?: EmployeesWhereInput
  }

  export type EmployeesUpdateToOneWithWhereWithoutUserInput = {
    where?: EmployeesWhereInput
    data: XOR<EmployeesUpdateWithoutUserInput, EmployeesUncheckedUpdateWithoutUserInput>
  }

  export type EmployeesUpdateWithoutUserInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    point_of_sales?: Points_of_salesUpdateOneRequiredWithoutEmployeesNestedInput
    salary?: SalaryUpdateOneWithoutEmployeeNestedInput
    sales?: SalesUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutUserInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: SalaryUncheckedUpdateOneWithoutEmployeeNestedInput
    sales?: SalesUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeesCreateManyPoint_of_salesInput = {
    employee_id?: string
    CID: string
    first_name: string
    last_name: string
    address: string
    phone_number?: string | null
    img?: string | null
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ProductsCreateManyPoints_of_salesInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    provider_name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type EmployeesUpdateWithoutPoint_of_salesInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: SalaryUpdateOneWithoutEmployeeNestedInput
    sales?: SalesUpdateManyWithoutEmployeeNestedInput
    user?: UsersUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateWithoutPoint_of_salesInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: SalaryUncheckedUpdateOneWithoutEmployeeNestedInput
    sales?: SalesUncheckedUpdateManyWithoutEmployeeNestedInput
    user?: UsersUncheckedUpdateOneWithoutEmployeeNestedInput
  }

  export type EmployeesUncheckedUpdateManyWithoutPoint_of_salesInput = {
    employee_id?: StringFieldUpdateOperationsInput | string
    CID?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpdateWithoutPoints_of_salesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Products_categoriesUpdateOneRequiredWithoutProductsNestedInput
    provider?: ProvidersUpdateOneRequiredWithoutProductsNestedInput
    img?: Products_imagesUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutPoints_of_salesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    provider_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: Products_imagesUncheckedUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUncheckedUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutPoints_of_salesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    provider_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManyCategoryInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    provider_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ProductsUpdateWithoutCategoryInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    points_of_sales?: Points_of_salesUpdateOneRequiredWithoutProductsNestedInput
    provider?: ProvidersUpdateOneRequiredWithoutProductsNestedInput
    img?: Products_imagesUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: Products_imagesUncheckedUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUncheckedUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    provider_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateManyProviderInput = {
    product_id?: string
    branch: string
    model: string
    description: string
    purchase_price: Decimal | DecimalJsLike | number | string
    stock_quantity: number
    amount: Decimal | DecimalJsLike | number | string
    purchase_date: Date | string
    category_name: string
    pos_name: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ProductsUpdateWithoutProviderInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: Products_categoriesUpdateOneRequiredWithoutProductsNestedInput
    points_of_sales?: Points_of_salesUpdateOneRequiredWithoutProductsNestedInput
    img?: Products_imagesUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProviderInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    img?: Products_imagesUncheckedUpdateManyWithoutProductNestedInput
    products_purchases?: Products_purchasesUncheckedUpdateManyWithoutProductsNestedInput
    products_sales?: Products_salesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutProviderInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchase_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    purchase_date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_name?: StringFieldUpdateOperationsInput | string
    pos_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_imagesCreateManyProductInput = {
    image_original_key: string
    image_thumb_key: string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_purchasesCreateManyProductsInput = {
    purchase_id: string
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_salesCreateManyProductInput = {
    sale_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
  }

  export type Products_imagesUpdateWithoutProductInput = {
    image_original_key?: StringFieldUpdateOperationsInput | string
    image_thumb_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_imagesUncheckedUpdateWithoutProductInput = {
    image_original_key?: StringFieldUpdateOperationsInput | string
    image_thumb_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_imagesUncheckedUpdateManyWithoutProductInput = {
    image_original_key?: StringFieldUpdateOperationsInput | string
    image_thumb_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_purchasesUpdateWithoutProductsInput = {
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: PurchasesUpdateOneRequiredWithoutProducts_purchasesNestedInput
  }

  export type Products_purchasesUncheckedUpdateWithoutProductsInput = {
    purchase_id?: StringFieldUpdateOperationsInput | string
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_purchasesUncheckedUpdateManyWithoutProductsInput = {
    purchase_id?: StringFieldUpdateOperationsInput | string
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_salesUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale?: SalesUpdateOneRequiredWithoutProducts_salesNestedInput
  }

  export type Products_salesUncheckedUpdateWithoutProductInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Products_salesUncheckedUpdateManyWithoutProductInput = {
    sale_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SalesCreateManyEmployeeInput = {
    sales_id?: string
    date: Date | string
    total_amount?: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
    deleted_at?: Date | string | null
  }

  export type SalesUpdateWithoutEmployeeInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products_sales?: Products_salesUpdateManyWithoutSaleNestedInput
  }

  export type SalesUncheckedUpdateWithoutEmployeeInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products_sales?: Products_salesUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SalesUncheckedUpdateManyWithoutEmployeeInput = {
    sales_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Products_salesCreateManySaleInput = {
    product_id: string
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    total_price: Decimal | DecimalJsLike | number | string
  }

  export type Products_salesUpdateWithoutSaleInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    product?: ProductsUpdateOneRequiredWithoutProducts_salesNestedInput
  }

  export type Products_salesUncheckedUpdateWithoutSaleInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Products_salesUncheckedUpdateManyWithoutSaleInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Products_purchasesCreateManyPurchasesInput = {
    product_id: string
    product_quantity: number
    product_unit_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type Products_purchasesUpdateWithoutPurchasesInput = {
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateOneRequiredWithoutProducts_purchasesNestedInput
  }

  export type Products_purchasesUncheckedUpdateWithoutPurchasesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Products_purchasesUncheckedUpdateManyWithoutPurchasesInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    product_quantity?: IntFieldUpdateOperationsInput | number
    product_unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesCreateManyExpenses_categoryInput = {
    expenses_id?: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    last_update?: Date | string
  }

  export type ExpensesUpdateWithoutExpenses_categoryInput = {
    expenses_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesUncheckedUpdateWithoutExpenses_categoryInput = {
    expenses_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpensesUncheckedUpdateManyWithoutExpenses_categoryInput = {
    expenses_id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}