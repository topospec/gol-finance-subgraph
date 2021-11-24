// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("token0", Value.fromBytes(Bytes.empty()));
    this.set("token1", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ExampleEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get token0(): Bytes {
    let value = this.get("token0");
    return value!.toBytes();
  }

  set token0(value: Bytes) {
    this.set("token0", Value.fromBytes(value));
  }

  get token1(): Bytes {
    let value = this.get("token1");
    return value!.toBytes();
  }

  set token1(value: Bytes) {
    this.set("token1", Value.fromBytes(value));
  }
}

export class PancakeFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("totalPairs", Value.fromBigInt(BigInt.zero()));
    this.set("totalTransactions", Value.fromBigInt(BigInt.zero()));
    this.set("totalVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalVolumeBNB", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalLiquidityUSD", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalLiquidityBNB", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PancakeFactory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PancakeFactory entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PancakeFactory", id.toString(), this);
    }
  }

  static load(id: string): PancakeFactory | null {
    return changetype<PancakeFactory | null>(store.get("PancakeFactory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalPairs(): BigInt {
    let value = this.get("totalPairs");
    return value!.toBigInt();
  }

  set totalPairs(value: BigInt) {
    this.set("totalPairs", Value.fromBigInt(value));
  }

  get totalTransactions(): BigInt {
    let value = this.get("totalTransactions");
    return value!.toBigInt();
  }

  set totalTransactions(value: BigInt) {
    this.set("totalTransactions", Value.fromBigInt(value));
  }

  get totalVolumeUSD(): BigDecimal {
    let value = this.get("totalVolumeUSD");
    return value!.toBigDecimal();
  }

  set totalVolumeUSD(value: BigDecimal) {
    this.set("totalVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalVolumeBNB(): BigDecimal {
    let value = this.get("totalVolumeBNB");
    return value!.toBigDecimal();
  }

  set totalVolumeBNB(value: BigDecimal) {
    this.set("totalVolumeBNB", Value.fromBigDecimal(value));
  }

  get untrackedVolumeUSD(): BigDecimal {
    let value = this.get("untrackedVolumeUSD");
    return value!.toBigDecimal();
  }

  set untrackedVolumeUSD(value: BigDecimal) {
    this.set("untrackedVolumeUSD", Value.fromBigDecimal(value));
  }

  get totalLiquidityUSD(): BigDecimal {
    let value = this.get("totalLiquidityUSD");
    return value!.toBigDecimal();
  }

  set totalLiquidityUSD(value: BigDecimal) {
    this.set("totalLiquidityUSD", Value.fromBigDecimal(value));
  }

  get totalLiquidityBNB(): BigDecimal {
    let value = this.get("totalLiquidityBNB");
    return value!.toBigDecimal();
  }

  set totalLiquidityBNB(value: BigDecimal) {
    this.set("totalLiquidityBNB", Value.fromBigDecimal(value));
  }
}
