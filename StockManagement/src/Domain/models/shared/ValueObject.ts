import { isEqual } from 'lodash';

export abstract class ValueObject<T, U> {
  // この抽象型を継承したクラスは、同値とみなされ意図せぬバグを引き起こす可能性があるため、
  // _typeのような専用プロパティを用意することで異なる型として認識させることができる.
  // @ts-expect-error
  private _type: U;
  protected readonly _value: T;

  constructor(value: T) {
    this.validate(value);
    this._value = value;
  }

  protected abstract validate(value: T): void;

  get value(): T {
    return this._value;
  }

  // 値オブジェクト同士の比較には必ず比較メソッドを用いること.
  equals(other: ValueObject<T, U>): boolean {
    return isEqual(this._value, other._value);
  }
}
