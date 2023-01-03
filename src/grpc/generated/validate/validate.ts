/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../google/protobuf/duration";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "validate";

/** WellKnownRegex contain some well-known patterns. */
export enum KnownRegex {
  UNKNOWN = 0,
  /** HTTP_HEADER_NAME - HTTP header name as defined by RFC 7230. */
  HTTP_HEADER_NAME = 1,
  /** HTTP_HEADER_VALUE - HTTP header value as defined by RFC 7230. */
  HTTP_HEADER_VALUE = 2,
  UNRECOGNIZED = -1,
}

export function knownRegexFromJSON(object: any): KnownRegex {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return KnownRegex.UNKNOWN;
    case 1:
    case "HTTP_HEADER_NAME":
      return KnownRegex.HTTP_HEADER_NAME;
    case 2:
    case "HTTP_HEADER_VALUE":
      return KnownRegex.HTTP_HEADER_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return KnownRegex.UNRECOGNIZED;
  }
}

export function knownRegexToJSON(object: KnownRegex): string {
  switch (object) {
    case KnownRegex.UNKNOWN:
      return "UNKNOWN";
    case KnownRegex.HTTP_HEADER_NAME:
      return "HTTP_HEADER_NAME";
    case KnownRegex.HTTP_HEADER_VALUE:
      return "HTTP_HEADER_VALUE";
    case KnownRegex.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * FieldRules encapsulates the rules for each type of field. Depending on the
 * field, the correct set should be used to ensure proper validations.
 */
export interface FieldRules {
  message: MessageRules | undefined;
  type?:
    | { $case: "float"; float: FloatRules }
    | { $case: "double"; double: DoubleRules }
    | { $case: "int32"; int32: Int32Rules }
    | { $case: "int64"; int64: Int64Rules }
    | { $case: "uint32"; uint32: UInt32Rules }
    | { $case: "uint64"; uint64: UInt64Rules }
    | { $case: "sint32"; sint32: SInt32Rules }
    | { $case: "sint64"; sint64: SInt64Rules }
    | { $case: "fixed32"; fixed32: Fixed32Rules }
    | { $case: "fixed64"; fixed64: Fixed64Rules }
    | { $case: "sfixed32"; sfixed32: SFixed32Rules }
    | { $case: "sfixed64"; sfixed64: SFixed64Rules }
    | { $case: "bool"; bool: BoolRules }
    | { $case: "string"; string: StringRules }
    | { $case: "bytes"; bytes: BytesRules }
    | { $case: "enum"; enum: EnumRules }
    | { $case: "repeated"; repeated: RepeatedRules }
    | { $case: "map"; map: MapRules }
    | { $case: "any"; any: AnyRules }
    | { $case: "duration"; duration: DurationRules }
    | { $case: "timestamp"; timestamp: TimestampRules };
}

/** FloatRules describes the constraints applied to `float` values */
export interface FloatRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** DoubleRules describes the constraints applied to `double` values */
export interface DoubleRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Int32Rules describes the constraints applied to `int32` values */
export interface Int32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Int64Rules describes the constraints applied to `int64` values */
export interface Int64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: Long;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Long;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: Long;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: Long;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: Long;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Long[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Long[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** UInt32Rules describes the constraints applied to `uint32` values */
export interface UInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** UInt64Rules describes the constraints applied to `uint64` values */
export interface UInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: Long;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Long;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: Long;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: Long;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: Long;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Long[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Long[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SInt32Rules describes the constraints applied to `sint32` values */
export interface SInt32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SInt64Rules describes the constraints applied to `sint64` values */
export interface SInt64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: Long;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Long;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: Long;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: Long;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: Long;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Long[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Long[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Fixed32Rules describes the constraints applied to `fixed32` values */
export interface Fixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** Fixed64Rules describes the constraints applied to `fixed64` values */
export interface Fixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: Long;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Long;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: Long;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: Long;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: Long;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Long[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Long[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SFixed32Rules describes the constraints applied to `sfixed32` values */
export interface SFixed32Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: number;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: number;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: number;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: number;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** SFixed64Rules describes the constraints applied to `sfixed64` values */
export interface SFixed64Rules {
  /** Const specifies that this field must be exactly the specified value */
  const: Long;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt: Long;
  /**
   * Lte specifies that this field must be less than or equal to the
   * specified value, inclusive
   */
  lte: Long;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive. If the value of Gt is larger than a specified Lt or Lte, the
   * range is reversed.
   */
  gt: Long;
  /**
   * Gte specifies that this field must be greater than or equal to the
   * specified value, inclusive. If the value of Gte is larger than a
   * specified Lt or Lte, the range is reversed.
   */
  gte: Long;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Long[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Long[];
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** BoolRules describes the constraints applied to `bool` values */
export interface BoolRules {
  /** Const specifies that this field must be exactly the specified value */
  const: boolean;
}

/** StringRules describe the constraints applied to `string` values */
export interface StringRules {
  /** Const specifies that this field must be exactly the specified value */
  const: string;
  /**
   * Len specifies that this field must be the specified number of
   * characters (Unicode code points). Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  len: Long;
  /**
   * MinLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a minimum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  minLen: Long;
  /**
   * MaxLen specifies that this field must be the specified number of
   * characters (Unicode code points) at a maximum. Note that the number of
   * characters may differ from the number of bytes in the string.
   */
  maxLen: Long;
  /** LenBytes specifies that this field must be the specified number of bytes */
  lenBytes: Long;
  /**
   * MinBytes specifies that this field must be the specified number of bytes
   * at a minimum
   */
  minBytes: Long;
  /**
   * MaxBytes specifies that this field must be the specified number of bytes
   * at a maximum
   */
  maxBytes: Long;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified substring at
   * the beginning of the string.
   */
  prefix: string;
  /**
   * Suffix specifies that this field must have the specified substring at
   * the end of the string.
   */
  suffix: string;
  /**
   * Contains specifies that this field must have the specified substring
   * anywhere in the string.
   */
  contains: string;
  /**
   * NotContains specifies that this field cannot have the specified substring
   * anywhere in the string.
   */
  notContains: string;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: string[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: string[];
  wellKnown?:
    | { $case: "email"; email: boolean }
    | { $case: "hostname"; hostname: boolean }
    | { $case: "ip"; ip: boolean }
    | { $case: "ipv4"; ipv4: boolean }
    | { $case: "ipv6"; ipv6: boolean }
    | { $case: "uri"; uri: boolean }
    | { $case: "uriRef"; uriRef: boolean }
    | { $case: "address"; address: boolean }
    | { $case: "uuid"; uuid: boolean }
    | { $case: "wellKnownRegex"; wellKnownRegex: KnownRegex };
  /**
   * This applies to regexes HTTP_HEADER_NAME and HTTP_HEADER_VALUE to enable
   * strict header validation.
   * By default, this is true, and HTTP header validations are RFC-compliant.
   * Setting to false will enable a looser validations that only disallows
   * \r\n\0 characters, which can be used to bypass header matching rules.
   */
  strict: boolean;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** BytesRules describe the constraints applied to `bytes` values */
export interface BytesRules {
  /** Const specifies that this field must be exactly the specified value */
  const: Buffer;
  /** Len specifies that this field must be the specified number of bytes */
  len: Long;
  /**
   * MinLen specifies that this field must be the specified number of bytes
   * at a minimum
   */
  minLen: Long;
  /**
   * MaxLen specifies that this field must be the specified number of bytes
   * at a maximum
   */
  maxLen: Long;
  /**
   * Pattern specifes that this field must match against the specified
   * regular expression (RE2 syntax). The included expression should elide
   * any delimiters.
   */
  pattern: string;
  /**
   * Prefix specifies that this field must have the specified bytes at the
   * beginning of the string.
   */
  prefix: Buffer;
  /**
   * Suffix specifies that this field must have the specified bytes at the
   * end of the string.
   */
  suffix: Buffer;
  /**
   * Contains specifies that this field must have the specified bytes
   * anywhere in the string.
   */
  contains: Buffer;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Buffer[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Buffer[];
  wellKnown?:
    | { $case: "ip"; ip: boolean }
    | { $case: "ipv4"; ipv4: boolean }
    | { $case: "ipv6"; ipv6: boolean };
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** EnumRules describe the constraints applied to enum values */
export interface EnumRules {
  /** Const specifies that this field must be exactly the specified value */
  const: number;
  /**
   * DefinedOnly specifies that this field must be only one of the defined
   * values for this enum, failing on any undefined value.
   */
  definedOnly: boolean;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: number[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: number[];
}

/**
 * MessageRules describe the constraints applied to embedded message values.
 * For message-type fields, validation is performed recursively.
 */
export interface MessageRules {
  /**
   * Skip specifies that the validation rules of this field should not be
   * evaluated
   */
  skip: boolean;
  /** Required specifies that this field must be set */
  required: boolean;
}

/** RepeatedRules describe the constraints applied to `repeated` values */
export interface RepeatedRules {
  /**
   * MinItems specifies that this field must have the specified number of
   * items at a minimum
   */
  minItems: Long;
  /**
   * MaxItems specifies that this field must have the specified number of
   * items at a maximum
   */
  maxItems: Long;
  /**
   * Unique specifies that all elements in this field must be unique. This
   * contraint is only applicable to scalar and enum types (messages are not
   * supported).
   */
  unique: boolean;
  /**
   * Items specifies the contraints to be applied to each item in the field.
   * Repeated message fields will still execute validation against each item
   * unless skip is specified here.
   */
  items:
    | FieldRules
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/** MapRules describe the constraints applied to `map` values */
export interface MapRules {
  /**
   * MinPairs specifies that this field must have the specified number of
   * KVs at a minimum
   */
  minPairs: Long;
  /**
   * MaxPairs specifies that this field must have the specified number of
   * KVs at a maximum
   */
  maxPairs: Long;
  /**
   * NoSparse specifies values in this field cannot be unset. This only
   * applies to map's with message value types.
   */
  noSparse: boolean;
  /** Keys specifies the constraints to be applied to each key in the field. */
  keys:
    | FieldRules
    | undefined;
  /**
   * Values specifies the constraints to be applied to the value of each key
   * in the field. Message values will still have their validations evaluated
   * unless skip is specified here.
   */
  values:
    | FieldRules
    | undefined;
  /**
   * IgnoreEmpty specifies that the validation rules of this field should be
   * evaluated only if the field is not empty
   */
  ignoreEmpty: boolean;
}

/**
 * AnyRules describe constraints applied exclusively to the
 * `google.protobuf.Any` well-known type
 */
export interface AnyRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /**
   * In specifies that this field's `type_url` must be equal to one of the
   * specified values.
   */
  in: string[];
  /**
   * NotIn specifies that this field's `type_url` must not be equal to any of
   * the specified values.
   */
  notIn: string[];
}

/**
 * DurationRules describe the constraints applied exclusively to the
 * `google.protobuf.Duration` well-known type
 */
export interface DurationRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const:
    | Duration
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt:
    | Duration
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * inclusive
   */
  lte:
    | Duration
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt:
    | Duration
    | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte:
    | Duration
    | undefined;
  /**
   * In specifies that this field must be equal to one of the specified
   * values
   */
  in: Duration[];
  /**
   * NotIn specifies that this field cannot be equal to one of the specified
   * values
   */
  notIn: Duration[];
}

/**
 * TimestampRules describe the constraints applied exclusively to the
 * `google.protobuf.Timestamp` well-known type
 */
export interface TimestampRules {
  /** Required specifies that this field must be set */
  required: boolean;
  /** Const specifies that this field must be exactly the specified value */
  const:
    | Date
    | undefined;
  /**
   * Lt specifies that this field must be less than the specified value,
   * exclusive
   */
  lt:
    | Date
    | undefined;
  /**
   * Lte specifies that this field must be less than the specified value,
   * inclusive
   */
  lte:
    | Date
    | undefined;
  /**
   * Gt specifies that this field must be greater than the specified value,
   * exclusive
   */
  gt:
    | Date
    | undefined;
  /**
   * Gte specifies that this field must be greater than the specified value,
   * inclusive
   */
  gte:
    | Date
    | undefined;
  /**
   * LtNow specifies that this must be less than the current time. LtNow
   * can only be used with the Within rule.
   */
  ltNow: boolean;
  /**
   * GtNow specifies that this must be greater than the current time. GtNow
   * can only be used with the Within rule.
   */
  gtNow: boolean;
  /**
   * Within specifies that this field must be within this duration of the
   * current time. This constraint can be used alone or with the LtNow and
   * GtNow rules.
   */
  within: Duration | undefined;
}

function createBaseFieldRules(): FieldRules {
  return { message: undefined, type: undefined };
}

export const FieldRules = {
  encode(message: FieldRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      MessageRules.encode(message.message, writer.uint32(138).fork()).ldelim();
    }
    if (message.type?.$case === "float") {
      FloatRules.encode(message.type.float, writer.uint32(10).fork()).ldelim();
    }
    if (message.type?.$case === "double") {
      DoubleRules.encode(message.type.double, writer.uint32(18).fork()).ldelim();
    }
    if (message.type?.$case === "int32") {
      Int32Rules.encode(message.type.int32, writer.uint32(26).fork()).ldelim();
    }
    if (message.type?.$case === "int64") {
      Int64Rules.encode(message.type.int64, writer.uint32(34).fork()).ldelim();
    }
    if (message.type?.$case === "uint32") {
      UInt32Rules.encode(message.type.uint32, writer.uint32(42).fork()).ldelim();
    }
    if (message.type?.$case === "uint64") {
      UInt64Rules.encode(message.type.uint64, writer.uint32(50).fork()).ldelim();
    }
    if (message.type?.$case === "sint32") {
      SInt32Rules.encode(message.type.sint32, writer.uint32(58).fork()).ldelim();
    }
    if (message.type?.$case === "sint64") {
      SInt64Rules.encode(message.type.sint64, writer.uint32(66).fork()).ldelim();
    }
    if (message.type?.$case === "fixed32") {
      Fixed32Rules.encode(message.type.fixed32, writer.uint32(74).fork()).ldelim();
    }
    if (message.type?.$case === "fixed64") {
      Fixed64Rules.encode(message.type.fixed64, writer.uint32(82).fork()).ldelim();
    }
    if (message.type?.$case === "sfixed32") {
      SFixed32Rules.encode(message.type.sfixed32, writer.uint32(90).fork()).ldelim();
    }
    if (message.type?.$case === "sfixed64") {
      SFixed64Rules.encode(message.type.sfixed64, writer.uint32(98).fork()).ldelim();
    }
    if (message.type?.$case === "bool") {
      BoolRules.encode(message.type.bool, writer.uint32(106).fork()).ldelim();
    }
    if (message.type?.$case === "string") {
      StringRules.encode(message.type.string, writer.uint32(114).fork()).ldelim();
    }
    if (message.type?.$case === "bytes") {
      BytesRules.encode(message.type.bytes, writer.uint32(122).fork()).ldelim();
    }
    if (message.type?.$case === "enum") {
      EnumRules.encode(message.type.enum, writer.uint32(130).fork()).ldelim();
    }
    if (message.type?.$case === "repeated") {
      RepeatedRules.encode(message.type.repeated, writer.uint32(146).fork()).ldelim();
    }
    if (message.type?.$case === "map") {
      MapRules.encode(message.type.map, writer.uint32(154).fork()).ldelim();
    }
    if (message.type?.$case === "any") {
      AnyRules.encode(message.type.any, writer.uint32(162).fork()).ldelim();
    }
    if (message.type?.$case === "duration") {
      DurationRules.encode(message.type.duration, writer.uint32(170).fork()).ldelim();
    }
    if (message.type?.$case === "timestamp") {
      TimestampRules.encode(message.type.timestamp, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 17:
          message.message = MessageRules.decode(reader, reader.uint32());
          break;
        case 1:
          message.type = { $case: "float", float: FloatRules.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.type = { $case: "double", double: DoubleRules.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.type = { $case: "int32", int32: Int32Rules.decode(reader, reader.uint32()) };
          break;
        case 4:
          message.type = { $case: "int64", int64: Int64Rules.decode(reader, reader.uint32()) };
          break;
        case 5:
          message.type = { $case: "uint32", uint32: UInt32Rules.decode(reader, reader.uint32()) };
          break;
        case 6:
          message.type = { $case: "uint64", uint64: UInt64Rules.decode(reader, reader.uint32()) };
          break;
        case 7:
          message.type = { $case: "sint32", sint32: SInt32Rules.decode(reader, reader.uint32()) };
          break;
        case 8:
          message.type = { $case: "sint64", sint64: SInt64Rules.decode(reader, reader.uint32()) };
          break;
        case 9:
          message.type = { $case: "fixed32", fixed32: Fixed32Rules.decode(reader, reader.uint32()) };
          break;
        case 10:
          message.type = { $case: "fixed64", fixed64: Fixed64Rules.decode(reader, reader.uint32()) };
          break;
        case 11:
          message.type = { $case: "sfixed32", sfixed32: SFixed32Rules.decode(reader, reader.uint32()) };
          break;
        case 12:
          message.type = { $case: "sfixed64", sfixed64: SFixed64Rules.decode(reader, reader.uint32()) };
          break;
        case 13:
          message.type = { $case: "bool", bool: BoolRules.decode(reader, reader.uint32()) };
          break;
        case 14:
          message.type = { $case: "string", string: StringRules.decode(reader, reader.uint32()) };
          break;
        case 15:
          message.type = { $case: "bytes", bytes: BytesRules.decode(reader, reader.uint32()) };
          break;
        case 16:
          message.type = { $case: "enum", enum: EnumRules.decode(reader, reader.uint32()) };
          break;
        case 18:
          message.type = { $case: "repeated", repeated: RepeatedRules.decode(reader, reader.uint32()) };
          break;
        case 19:
          message.type = { $case: "map", map: MapRules.decode(reader, reader.uint32()) };
          break;
        case 20:
          message.type = { $case: "any", any: AnyRules.decode(reader, reader.uint32()) };
          break;
        case 21:
          message.type = { $case: "duration", duration: DurationRules.decode(reader, reader.uint32()) };
          break;
        case 22:
          message.type = { $case: "timestamp", timestamp: TimestampRules.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FieldRules {
    return {
      message: isSet(object.message) ? MessageRules.fromJSON(object.message) : undefined,
      type: isSet(object.float)
        ? { $case: "float", float: FloatRules.fromJSON(object.float) }
        : isSet(object.double)
        ? { $case: "double", double: DoubleRules.fromJSON(object.double) }
        : isSet(object.int32)
        ? { $case: "int32", int32: Int32Rules.fromJSON(object.int32) }
        : isSet(object.int64)
        ? { $case: "int64", int64: Int64Rules.fromJSON(object.int64) }
        : isSet(object.uint32)
        ? { $case: "uint32", uint32: UInt32Rules.fromJSON(object.uint32) }
        : isSet(object.uint64)
        ? { $case: "uint64", uint64: UInt64Rules.fromJSON(object.uint64) }
        : isSet(object.sint32)
        ? { $case: "sint32", sint32: SInt32Rules.fromJSON(object.sint32) }
        : isSet(object.sint64)
        ? { $case: "sint64", sint64: SInt64Rules.fromJSON(object.sint64) }
        : isSet(object.fixed32)
        ? { $case: "fixed32", fixed32: Fixed32Rules.fromJSON(object.fixed32) }
        : isSet(object.fixed64)
        ? { $case: "fixed64", fixed64: Fixed64Rules.fromJSON(object.fixed64) }
        : isSet(object.sfixed32)
        ? { $case: "sfixed32", sfixed32: SFixed32Rules.fromJSON(object.sfixed32) }
        : isSet(object.sfixed64)
        ? { $case: "sfixed64", sfixed64: SFixed64Rules.fromJSON(object.sfixed64) }
        : isSet(object.bool)
        ? { $case: "bool", bool: BoolRules.fromJSON(object.bool) }
        : isSet(object.string)
        ? { $case: "string", string: StringRules.fromJSON(object.string) }
        : isSet(object.bytes)
        ? { $case: "bytes", bytes: BytesRules.fromJSON(object.bytes) }
        : isSet(object.enum)
        ? { $case: "enum", enum: EnumRules.fromJSON(object.enum) }
        : isSet(object.repeated)
        ? { $case: "repeated", repeated: RepeatedRules.fromJSON(object.repeated) }
        : isSet(object.map)
        ? { $case: "map", map: MapRules.fromJSON(object.map) }
        : isSet(object.any)
        ? { $case: "any", any: AnyRules.fromJSON(object.any) }
        : isSet(object.duration)
        ? { $case: "duration", duration: DurationRules.fromJSON(object.duration) }
        : isSet(object.timestamp)
        ? { $case: "timestamp", timestamp: TimestampRules.fromJSON(object.timestamp) }
        : undefined,
    };
  },

  toJSON(message: FieldRules): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message ? MessageRules.toJSON(message.message) : undefined);
    message.type?.$case === "float" &&
      (obj.float = message.type?.float ? FloatRules.toJSON(message.type?.float) : undefined);
    message.type?.$case === "double" &&
      (obj.double = message.type?.double ? DoubleRules.toJSON(message.type?.double) : undefined);
    message.type?.$case === "int32" &&
      (obj.int32 = message.type?.int32 ? Int32Rules.toJSON(message.type?.int32) : undefined);
    message.type?.$case === "int64" &&
      (obj.int64 = message.type?.int64 ? Int64Rules.toJSON(message.type?.int64) : undefined);
    message.type?.$case === "uint32" &&
      (obj.uint32 = message.type?.uint32 ? UInt32Rules.toJSON(message.type?.uint32) : undefined);
    message.type?.$case === "uint64" &&
      (obj.uint64 = message.type?.uint64 ? UInt64Rules.toJSON(message.type?.uint64) : undefined);
    message.type?.$case === "sint32" &&
      (obj.sint32 = message.type?.sint32 ? SInt32Rules.toJSON(message.type?.sint32) : undefined);
    message.type?.$case === "sint64" &&
      (obj.sint64 = message.type?.sint64 ? SInt64Rules.toJSON(message.type?.sint64) : undefined);
    message.type?.$case === "fixed32" &&
      (obj.fixed32 = message.type?.fixed32 ? Fixed32Rules.toJSON(message.type?.fixed32) : undefined);
    message.type?.$case === "fixed64" &&
      (obj.fixed64 = message.type?.fixed64 ? Fixed64Rules.toJSON(message.type?.fixed64) : undefined);
    message.type?.$case === "sfixed32" &&
      (obj.sfixed32 = message.type?.sfixed32 ? SFixed32Rules.toJSON(message.type?.sfixed32) : undefined);
    message.type?.$case === "sfixed64" &&
      (obj.sfixed64 = message.type?.sfixed64 ? SFixed64Rules.toJSON(message.type?.sfixed64) : undefined);
    message.type?.$case === "bool" &&
      (obj.bool = message.type?.bool ? BoolRules.toJSON(message.type?.bool) : undefined);
    message.type?.$case === "string" &&
      (obj.string = message.type?.string ? StringRules.toJSON(message.type?.string) : undefined);
    message.type?.$case === "bytes" &&
      (obj.bytes = message.type?.bytes ? BytesRules.toJSON(message.type?.bytes) : undefined);
    message.type?.$case === "enum" &&
      (obj.enum = message.type?.enum ? EnumRules.toJSON(message.type?.enum) : undefined);
    message.type?.$case === "repeated" &&
      (obj.repeated = message.type?.repeated ? RepeatedRules.toJSON(message.type?.repeated) : undefined);
    message.type?.$case === "map" && (obj.map = message.type?.map ? MapRules.toJSON(message.type?.map) : undefined);
    message.type?.$case === "any" && (obj.any = message.type?.any ? AnyRules.toJSON(message.type?.any) : undefined);
    message.type?.$case === "duration" &&
      (obj.duration = message.type?.duration ? DurationRules.toJSON(message.type?.duration) : undefined);
    message.type?.$case === "timestamp" &&
      (obj.timestamp = message.type?.timestamp ? TimestampRules.toJSON(message.type?.timestamp) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FieldRules>): FieldRules {
    const message = createBaseFieldRules();
    message.message = (object.message !== undefined && object.message !== null)
      ? MessageRules.fromPartial(object.message)
      : undefined;
    if (object.type?.$case === "float" && object.type?.float !== undefined && object.type?.float !== null) {
      message.type = { $case: "float", float: FloatRules.fromPartial(object.type.float) };
    }
    if (object.type?.$case === "double" && object.type?.double !== undefined && object.type?.double !== null) {
      message.type = { $case: "double", double: DoubleRules.fromPartial(object.type.double) };
    }
    if (object.type?.$case === "int32" && object.type?.int32 !== undefined && object.type?.int32 !== null) {
      message.type = { $case: "int32", int32: Int32Rules.fromPartial(object.type.int32) };
    }
    if (object.type?.$case === "int64" && object.type?.int64 !== undefined && object.type?.int64 !== null) {
      message.type = { $case: "int64", int64: Int64Rules.fromPartial(object.type.int64) };
    }
    if (object.type?.$case === "uint32" && object.type?.uint32 !== undefined && object.type?.uint32 !== null) {
      message.type = { $case: "uint32", uint32: UInt32Rules.fromPartial(object.type.uint32) };
    }
    if (object.type?.$case === "uint64" && object.type?.uint64 !== undefined && object.type?.uint64 !== null) {
      message.type = { $case: "uint64", uint64: UInt64Rules.fromPartial(object.type.uint64) };
    }
    if (object.type?.$case === "sint32" && object.type?.sint32 !== undefined && object.type?.sint32 !== null) {
      message.type = { $case: "sint32", sint32: SInt32Rules.fromPartial(object.type.sint32) };
    }
    if (object.type?.$case === "sint64" && object.type?.sint64 !== undefined && object.type?.sint64 !== null) {
      message.type = { $case: "sint64", sint64: SInt64Rules.fromPartial(object.type.sint64) };
    }
    if (object.type?.$case === "fixed32" && object.type?.fixed32 !== undefined && object.type?.fixed32 !== null) {
      message.type = { $case: "fixed32", fixed32: Fixed32Rules.fromPartial(object.type.fixed32) };
    }
    if (object.type?.$case === "fixed64" && object.type?.fixed64 !== undefined && object.type?.fixed64 !== null) {
      message.type = { $case: "fixed64", fixed64: Fixed64Rules.fromPartial(object.type.fixed64) };
    }
    if (object.type?.$case === "sfixed32" && object.type?.sfixed32 !== undefined && object.type?.sfixed32 !== null) {
      message.type = { $case: "sfixed32", sfixed32: SFixed32Rules.fromPartial(object.type.sfixed32) };
    }
    if (object.type?.$case === "sfixed64" && object.type?.sfixed64 !== undefined && object.type?.sfixed64 !== null) {
      message.type = { $case: "sfixed64", sfixed64: SFixed64Rules.fromPartial(object.type.sfixed64) };
    }
    if (object.type?.$case === "bool" && object.type?.bool !== undefined && object.type?.bool !== null) {
      message.type = { $case: "bool", bool: BoolRules.fromPartial(object.type.bool) };
    }
    if (object.type?.$case === "string" && object.type?.string !== undefined && object.type?.string !== null) {
      message.type = { $case: "string", string: StringRules.fromPartial(object.type.string) };
    }
    if (object.type?.$case === "bytes" && object.type?.bytes !== undefined && object.type?.bytes !== null) {
      message.type = { $case: "bytes", bytes: BytesRules.fromPartial(object.type.bytes) };
    }
    if (object.type?.$case === "enum" && object.type?.enum !== undefined && object.type?.enum !== null) {
      message.type = { $case: "enum", enum: EnumRules.fromPartial(object.type.enum) };
    }
    if (object.type?.$case === "repeated" && object.type?.repeated !== undefined && object.type?.repeated !== null) {
      message.type = { $case: "repeated", repeated: RepeatedRules.fromPartial(object.type.repeated) };
    }
    if (object.type?.$case === "map" && object.type?.map !== undefined && object.type?.map !== null) {
      message.type = { $case: "map", map: MapRules.fromPartial(object.type.map) };
    }
    if (object.type?.$case === "any" && object.type?.any !== undefined && object.type?.any !== null) {
      message.type = { $case: "any", any: AnyRules.fromPartial(object.type.any) };
    }
    if (object.type?.$case === "duration" && object.type?.duration !== undefined && object.type?.duration !== null) {
      message.type = { $case: "duration", duration: DurationRules.fromPartial(object.type.duration) };
    }
    if (object.type?.$case === "timestamp" && object.type?.timestamp !== undefined && object.type?.timestamp !== null) {
      message.type = { $case: "timestamp", timestamp: TimestampRules.fromPartial(object.type.timestamp) };
    }
    return message;
  },
};

function createBaseFloatRules(): FloatRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const FloatRules = {
  encode(message: FloatRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(13).float(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).float(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).float(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).float(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).float(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.float(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.float();
          break;
        case 2:
          message.lt = reader.float();
          break;
        case 3:
          message.lte = reader.float();
          break;
        case 4:
          message.gt = reader.float();
          break;
        case 5:
          message.gte = reader.float();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.float());
            }
          } else {
            message.in.push(reader.float());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.float());
            }
          } else {
            message.notIn.push(reader.float());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FloatRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: FloatRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<FloatRules>): FloatRules {
    const message = createBaseFloatRules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseDoubleRules(): DoubleRules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const DoubleRules = {
  encode(message: DoubleRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(9).double(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(17).double(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(25).double(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(33).double(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(41).double(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.double(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.double(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.double();
          break;
        case 2:
          message.lt = reader.double();
          break;
        case 3:
          message.lte = reader.double();
          break;
        case 4:
          message.gt = reader.double();
          break;
        case 5:
          message.gte = reader.double();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.double());
            }
          } else {
            message.in.push(reader.double());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.double());
            }
          } else {
            message.notIn.push(reader.double());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DoubleRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: DoubleRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.lt !== undefined && (obj.lt = message.lt);
    message.lte !== undefined && (obj.lte = message.lte);
    message.gt !== undefined && (obj.gt = message.gt);
    message.gte !== undefined && (obj.gte = message.gte);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<DoubleRules>): DoubleRules {
    const message = createBaseDoubleRules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseInt32Rules(): Int32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const Int32Rules = {
  encode(message: Int32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).int32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).int32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).int32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).int32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.int32();
          break;
        case 2:
          message.lt = reader.int32();
          break;
        case 3:
          message.lte = reader.int32();
          break;
        case 4:
          message.gt = reader.int32();
          break;
        case 5:
          message.gte = reader.int32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }
          } else {
            message.in.push(reader.int32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }
          } else {
            message.notIn.push(reader.int32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Int32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: Int32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<Int32Rules>): Int32Rules {
    const message = createBaseInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseInt64Rules(): Int64Rules {
  return {
    const: Long.ZERO,
    lt: Long.ZERO,
    lte: Long.ZERO,
    gt: Long.ZERO,
    gte: Long.ZERO,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const Int64Rules = {
  encode(message: Int64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.const.isZero()) {
      writer.uint32(8).int64(message.const);
    }
    if (!message.lt.isZero()) {
      writer.uint32(16).int64(message.lt);
    }
    if (!message.lte.isZero()) {
      writer.uint32(24).int64(message.lte);
    }
    if (!message.gt.isZero()) {
      writer.uint32(32).int64(message.gt);
    }
    if (!message.gte.isZero()) {
      writer.uint32(40).int64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.int64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.int64() as Long;
          break;
        case 2:
          message.lt = reader.int64() as Long;
          break;
        case 3:
          message.lte = reader.int64() as Long;
          break;
        case 4:
          message.gt = reader.int64() as Long;
          break;
        case 5:
          message.gte = reader.int64() as Long;
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int64() as Long);
            }
          } else {
            message.in.push(reader.int64() as Long);
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int64() as Long);
            }
          } else {
            message.notIn.push(reader.int64() as Long);
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Int64Rules {
    return {
      const: isSet(object.const) ? Long.fromValue(object.const) : Long.ZERO,
      lt: isSet(object.lt) ? Long.fromValue(object.lt) : Long.ZERO,
      lte: isSet(object.lte) ? Long.fromValue(object.lte) : Long.ZERO,
      gt: isSet(object.gt) ? Long.fromValue(object.gt) : Long.ZERO,
      gte: isSet(object.gte) ? Long.fromValue(object.gte) : Long.ZERO,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Long.fromValue(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Long.fromValue(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: Int64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = (message.const || Long.ZERO).toString());
    message.lt !== undefined && (obj.lt = (message.lt || Long.ZERO).toString());
    message.lte !== undefined && (obj.lte = (message.lte || Long.ZERO).toString());
    message.gt !== undefined && (obj.gt = (message.gt || Long.ZERO).toString());
    message.gte !== undefined && (obj.gte = (message.gte || Long.ZERO).toString());
    if (message.in) {
      obj.in = message.in.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<Int64Rules>): Int64Rules {
    const message = createBaseInt64Rules();
    message.const = (object.const !== undefined && object.const !== null) ? Long.fromValue(object.const) : Long.ZERO;
    message.lt = (object.lt !== undefined && object.lt !== null) ? Long.fromValue(object.lt) : Long.ZERO;
    message.lte = (object.lte !== undefined && object.lte !== null) ? Long.fromValue(object.lte) : Long.ZERO;
    message.gt = (object.gt !== undefined && object.gt !== null) ? Long.fromValue(object.gt) : Long.ZERO;
    message.gte = (object.gte !== undefined && object.gte !== null) ? Long.fromValue(object.gte) : Long.ZERO;
    message.in = object.in?.map((e) => Long.fromValue(e)) || [];
    message.notIn = object.notIn?.map((e) => Long.fromValue(e)) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseUInt32Rules(): UInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const UInt32Rules = {
  encode(message: UInt32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).uint32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).uint32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).uint32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).uint32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).uint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.uint32();
          break;
        case 2:
          message.lt = reader.uint32();
          break;
        case 3:
          message.lte = reader.uint32();
          break;
        case 4:
          message.gt = reader.uint32();
          break;
        case 5:
          message.gte = reader.uint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.uint32());
            }
          } else {
            message.in.push(reader.uint32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.uint32());
            }
          } else {
            message.notIn.push(reader.uint32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UInt32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: UInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<UInt32Rules>): UInt32Rules {
    const message = createBaseUInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseUInt64Rules(): UInt64Rules {
  return {
    const: Long.UZERO,
    lt: Long.UZERO,
    lte: Long.UZERO,
    gt: Long.UZERO,
    gte: Long.UZERO,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const UInt64Rules = {
  encode(message: UInt64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.const.isZero()) {
      writer.uint32(8).uint64(message.const);
    }
    if (!message.lt.isZero()) {
      writer.uint32(16).uint64(message.lt);
    }
    if (!message.lte.isZero()) {
      writer.uint32(24).uint64(message.lte);
    }
    if (!message.gt.isZero()) {
      writer.uint32(32).uint64(message.gt);
    }
    if (!message.gte.isZero()) {
      writer.uint32(40).uint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.uint64() as Long;
          break;
        case 2:
          message.lt = reader.uint64() as Long;
          break;
        case 3:
          message.lte = reader.uint64() as Long;
          break;
        case 4:
          message.gt = reader.uint64() as Long;
          break;
        case 5:
          message.gte = reader.uint64() as Long;
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.uint64() as Long);
            }
          } else {
            message.in.push(reader.uint64() as Long);
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.uint64() as Long);
            }
          } else {
            message.notIn.push(reader.uint64() as Long);
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UInt64Rules {
    return {
      const: isSet(object.const) ? Long.fromValue(object.const) : Long.UZERO,
      lt: isSet(object.lt) ? Long.fromValue(object.lt) : Long.UZERO,
      lte: isSet(object.lte) ? Long.fromValue(object.lte) : Long.UZERO,
      gt: isSet(object.gt) ? Long.fromValue(object.gt) : Long.UZERO,
      gte: isSet(object.gte) ? Long.fromValue(object.gte) : Long.UZERO,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Long.fromValue(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Long.fromValue(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: UInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = (message.const || Long.UZERO).toString());
    message.lt !== undefined && (obj.lt = (message.lt || Long.UZERO).toString());
    message.lte !== undefined && (obj.lte = (message.lte || Long.UZERO).toString());
    message.gt !== undefined && (obj.gt = (message.gt || Long.UZERO).toString());
    message.gte !== undefined && (obj.gte = (message.gte || Long.UZERO).toString());
    if (message.in) {
      obj.in = message.in.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<UInt64Rules>): UInt64Rules {
    const message = createBaseUInt64Rules();
    message.const = (object.const !== undefined && object.const !== null) ? Long.fromValue(object.const) : Long.UZERO;
    message.lt = (object.lt !== undefined && object.lt !== null) ? Long.fromValue(object.lt) : Long.UZERO;
    message.lte = (object.lte !== undefined && object.lte !== null) ? Long.fromValue(object.lte) : Long.UZERO;
    message.gt = (object.gt !== undefined && object.gt !== null) ? Long.fromValue(object.gt) : Long.UZERO;
    message.gte = (object.gte !== undefined && object.gte !== null) ? Long.fromValue(object.gte) : Long.UZERO;
    message.in = object.in?.map((e) => Long.fromValue(e)) || [];
    message.notIn = object.notIn?.map((e) => Long.fromValue(e)) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseSInt32Rules(): SInt32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const SInt32Rules = {
  encode(message: SInt32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).sint32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(16).sint32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(24).sint32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(32).sint32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(40).sint32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sint32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sint32();
          break;
        case 2:
          message.lt = reader.sint32();
          break;
        case 3:
          message.lte = reader.sint32();
          break;
        case 4:
          message.gt = reader.sint32();
          break;
        case 5:
          message.gte = reader.sint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sint32());
            }
          } else {
            message.in.push(reader.sint32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sint32());
            }
          } else {
            message.notIn.push(reader.sint32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SInt32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: SInt32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<SInt32Rules>): SInt32Rules {
    const message = createBaseSInt32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseSInt64Rules(): SInt64Rules {
  return {
    const: Long.ZERO,
    lt: Long.ZERO,
    lte: Long.ZERO,
    gt: Long.ZERO,
    gte: Long.ZERO,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const SInt64Rules = {
  encode(message: SInt64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.const.isZero()) {
      writer.uint32(8).sint64(message.const);
    }
    if (!message.lt.isZero()) {
      writer.uint32(16).sint64(message.lt);
    }
    if (!message.lte.isZero()) {
      writer.uint32(24).sint64(message.lte);
    }
    if (!message.gt.isZero()) {
      writer.uint32(32).sint64(message.gt);
    }
    if (!message.gte.isZero()) {
      writer.uint32(40).sint64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sint64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SInt64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSInt64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sint64() as Long;
          break;
        case 2:
          message.lt = reader.sint64() as Long;
          break;
        case 3:
          message.lte = reader.sint64() as Long;
          break;
        case 4:
          message.gt = reader.sint64() as Long;
          break;
        case 5:
          message.gte = reader.sint64() as Long;
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sint64() as Long);
            }
          } else {
            message.in.push(reader.sint64() as Long);
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sint64() as Long);
            }
          } else {
            message.notIn.push(reader.sint64() as Long);
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SInt64Rules {
    return {
      const: isSet(object.const) ? Long.fromValue(object.const) : Long.ZERO,
      lt: isSet(object.lt) ? Long.fromValue(object.lt) : Long.ZERO,
      lte: isSet(object.lte) ? Long.fromValue(object.lte) : Long.ZERO,
      gt: isSet(object.gt) ? Long.fromValue(object.gt) : Long.ZERO,
      gte: isSet(object.gte) ? Long.fromValue(object.gte) : Long.ZERO,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Long.fromValue(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Long.fromValue(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: SInt64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = (message.const || Long.ZERO).toString());
    message.lt !== undefined && (obj.lt = (message.lt || Long.ZERO).toString());
    message.lte !== undefined && (obj.lte = (message.lte || Long.ZERO).toString());
    message.gt !== undefined && (obj.gt = (message.gt || Long.ZERO).toString());
    message.gte !== undefined && (obj.gte = (message.gte || Long.ZERO).toString());
    if (message.in) {
      obj.in = message.in.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<SInt64Rules>): SInt64Rules {
    const message = createBaseSInt64Rules();
    message.const = (object.const !== undefined && object.const !== null) ? Long.fromValue(object.const) : Long.ZERO;
    message.lt = (object.lt !== undefined && object.lt !== null) ? Long.fromValue(object.lt) : Long.ZERO;
    message.lte = (object.lte !== undefined && object.lte !== null) ? Long.fromValue(object.lte) : Long.ZERO;
    message.gt = (object.gt !== undefined && object.gt !== null) ? Long.fromValue(object.gt) : Long.ZERO;
    message.gte = (object.gte !== undefined && object.gte !== null) ? Long.fromValue(object.gte) : Long.ZERO;
    message.in = object.in?.map((e) => Long.fromValue(e)) || [];
    message.notIn = object.notIn?.map((e) => Long.fromValue(e)) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseFixed32Rules(): Fixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const Fixed32Rules = {
  encode(message: Fixed32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(13).fixed32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).fixed32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).fixed32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).fixed32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).fixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.fixed32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.fixed32();
          break;
        case 2:
          message.lt = reader.fixed32();
          break;
        case 3:
          message.lte = reader.fixed32();
          break;
        case 4:
          message.gt = reader.fixed32();
          break;
        case 5:
          message.gte = reader.fixed32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.fixed32());
            }
          } else {
            message.in.push(reader.fixed32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.fixed32());
            }
          } else {
            message.notIn.push(reader.fixed32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fixed32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: Fixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<Fixed32Rules>): Fixed32Rules {
    const message = createBaseFixed32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseFixed64Rules(): Fixed64Rules {
  return {
    const: Long.UZERO,
    lt: Long.UZERO,
    lte: Long.UZERO,
    gt: Long.UZERO,
    gte: Long.UZERO,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const Fixed64Rules = {
  encode(message: Fixed64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.const.isZero()) {
      writer.uint32(9).fixed64(message.const);
    }
    if (!message.lt.isZero()) {
      writer.uint32(17).fixed64(message.lt);
    }
    if (!message.lte.isZero()) {
      writer.uint32(25).fixed64(message.lte);
    }
    if (!message.gt.isZero()) {
      writer.uint32(33).fixed64(message.gt);
    }
    if (!message.gte.isZero()) {
      writer.uint32(41).fixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.fixed64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fixed64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.fixed64() as Long;
          break;
        case 2:
          message.lt = reader.fixed64() as Long;
          break;
        case 3:
          message.lte = reader.fixed64() as Long;
          break;
        case 4:
          message.gt = reader.fixed64() as Long;
          break;
        case 5:
          message.gte = reader.fixed64() as Long;
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.fixed64() as Long);
            }
          } else {
            message.in.push(reader.fixed64() as Long);
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.fixed64() as Long);
            }
          } else {
            message.notIn.push(reader.fixed64() as Long);
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fixed64Rules {
    return {
      const: isSet(object.const) ? Long.fromValue(object.const) : Long.UZERO,
      lt: isSet(object.lt) ? Long.fromValue(object.lt) : Long.UZERO,
      lte: isSet(object.lte) ? Long.fromValue(object.lte) : Long.UZERO,
      gt: isSet(object.gt) ? Long.fromValue(object.gt) : Long.UZERO,
      gte: isSet(object.gte) ? Long.fromValue(object.gte) : Long.UZERO,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Long.fromValue(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Long.fromValue(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: Fixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = (message.const || Long.UZERO).toString());
    message.lt !== undefined && (obj.lt = (message.lt || Long.UZERO).toString());
    message.lte !== undefined && (obj.lte = (message.lte || Long.UZERO).toString());
    message.gt !== undefined && (obj.gt = (message.gt || Long.UZERO).toString());
    message.gte !== undefined && (obj.gte = (message.gte || Long.UZERO).toString());
    if (message.in) {
      obj.in = message.in.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<Fixed64Rules>): Fixed64Rules {
    const message = createBaseFixed64Rules();
    message.const = (object.const !== undefined && object.const !== null) ? Long.fromValue(object.const) : Long.UZERO;
    message.lt = (object.lt !== undefined && object.lt !== null) ? Long.fromValue(object.lt) : Long.UZERO;
    message.lte = (object.lte !== undefined && object.lte !== null) ? Long.fromValue(object.lte) : Long.UZERO;
    message.gt = (object.gt !== undefined && object.gt !== null) ? Long.fromValue(object.gt) : Long.UZERO;
    message.gte = (object.gte !== undefined && object.gte !== null) ? Long.fromValue(object.gte) : Long.UZERO;
    message.in = object.in?.map((e) => Long.fromValue(e)) || [];
    message.notIn = object.notIn?.map((e) => Long.fromValue(e)) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseSFixed32Rules(): SFixed32Rules {
  return { const: 0, lt: 0, lte: 0, gt: 0, gte: 0, in: [], notIn: [], ignoreEmpty: false };
}

export const SFixed32Rules = {
  encode(message: SFixed32Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(13).sfixed32(message.const);
    }
    if (message.lt !== 0) {
      writer.uint32(21).sfixed32(message.lt);
    }
    if (message.lte !== 0) {
      writer.uint32(29).sfixed32(message.lte);
    }
    if (message.gt !== 0) {
      writer.uint32(37).sfixed32(message.gt);
    }
    if (message.gte !== 0) {
      writer.uint32(45).sfixed32(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sfixed32(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed32Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed32Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sfixed32();
          break;
        case 2:
          message.lt = reader.sfixed32();
          break;
        case 3:
          message.lte = reader.sfixed32();
          break;
        case 4:
          message.gt = reader.sfixed32();
          break;
        case 5:
          message.gte = reader.sfixed32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sfixed32());
            }
          } else {
            message.in.push(reader.sfixed32());
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sfixed32());
            }
          } else {
            message.notIn.push(reader.sfixed32());
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SFixed32Rules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      lt: isSet(object.lt) ? Number(object.lt) : 0,
      lte: isSet(object.lte) ? Number(object.lte) : 0,
      gt: isSet(object.gt) ? Number(object.gt) : 0,
      gte: isSet(object.gte) ? Number(object.gte) : 0,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: SFixed32Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.lt !== undefined && (obj.lt = Math.round(message.lt));
    message.lte !== undefined && (obj.lte = Math.round(message.lte));
    message.gt !== undefined && (obj.gt = Math.round(message.gt));
    message.gte !== undefined && (obj.gte = Math.round(message.gte));
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<SFixed32Rules>): SFixed32Rules {
    const message = createBaseSFixed32Rules();
    message.const = object.const ?? 0;
    message.lt = object.lt ?? 0;
    message.lte = object.lte ?? 0;
    message.gt = object.gt ?? 0;
    message.gte = object.gte ?? 0;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseSFixed64Rules(): SFixed64Rules {
  return {
    const: Long.ZERO,
    lt: Long.ZERO,
    lte: Long.ZERO,
    gt: Long.ZERO,
    gte: Long.ZERO,
    in: [],
    notIn: [],
    ignoreEmpty: false,
  };
}

export const SFixed64Rules = {
  encode(message: SFixed64Rules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.const.isZero()) {
      writer.uint32(9).sfixed64(message.const);
    }
    if (!message.lt.isZero()) {
      writer.uint32(17).sfixed64(message.lt);
    }
    if (!message.lte.isZero()) {
      writer.uint32(25).sfixed64(message.lte);
    }
    if (!message.gt.isZero()) {
      writer.uint32(33).sfixed64(message.gt);
    }
    if (!message.gte.isZero()) {
      writer.uint32(41).sfixed64(message.gte);
    }
    writer.uint32(50).fork();
    for (const v of message.in) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.notIn) {
      writer.sfixed64(v);
    }
    writer.ldelim();
    if (message.ignoreEmpty === true) {
      writer.uint32(64).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SFixed64Rules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSFixed64Rules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.sfixed64() as Long;
          break;
        case 2:
          message.lt = reader.sfixed64() as Long;
          break;
        case 3:
          message.lte = reader.sfixed64() as Long;
          break;
        case 4:
          message.gt = reader.sfixed64() as Long;
          break;
        case 5:
          message.gte = reader.sfixed64() as Long;
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.sfixed64() as Long);
            }
          } else {
            message.in.push(reader.sfixed64() as Long);
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.sfixed64() as Long);
            }
          } else {
            message.notIn.push(reader.sfixed64() as Long);
          }
          break;
        case 8:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SFixed64Rules {
    return {
      const: isSet(object.const) ? Long.fromValue(object.const) : Long.ZERO,
      lt: isSet(object.lt) ? Long.fromValue(object.lt) : Long.ZERO,
      lte: isSet(object.lte) ? Long.fromValue(object.lte) : Long.ZERO,
      gt: isSet(object.gt) ? Long.fromValue(object.gt) : Long.ZERO,
      gte: isSet(object.gte) ? Long.fromValue(object.gte) : Long.ZERO,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Long.fromValue(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Long.fromValue(e)) : [],
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: SFixed64Rules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = (message.const || Long.ZERO).toString());
    message.lt !== undefined && (obj.lt = (message.lt || Long.ZERO).toString());
    message.lte !== undefined && (obj.lte = (message.lte || Long.ZERO).toString());
    message.gt !== undefined && (obj.gt = (message.gt || Long.ZERO).toString());
    message.gte !== undefined && (obj.gte = (message.gte || Long.ZERO).toString());
    if (message.in) {
      obj.in = message.in.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.notIn = [];
    }
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<SFixed64Rules>): SFixed64Rules {
    const message = createBaseSFixed64Rules();
    message.const = (object.const !== undefined && object.const !== null) ? Long.fromValue(object.const) : Long.ZERO;
    message.lt = (object.lt !== undefined && object.lt !== null) ? Long.fromValue(object.lt) : Long.ZERO;
    message.lte = (object.lte !== undefined && object.lte !== null) ? Long.fromValue(object.lte) : Long.ZERO;
    message.gt = (object.gt !== undefined && object.gt !== null) ? Long.fromValue(object.gt) : Long.ZERO;
    message.gte = (object.gte !== undefined && object.gte !== null) ? Long.fromValue(object.gte) : Long.ZERO;
    message.in = object.in?.map((e) => Long.fromValue(e)) || [];
    message.notIn = object.notIn?.map((e) => Long.fromValue(e)) || [];
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseBoolRules(): BoolRules {
  return { const: false };
}

export const BoolRules = {
  encode(message: BoolRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const === true) {
      writer.uint32(8).bool(message.const);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BoolRules {
    return { const: isSet(object.const) ? Boolean(object.const) : false };
  },

  toJSON(message: BoolRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    return obj;
  },

  fromPartial(object: DeepPartial<BoolRules>): BoolRules {
    const message = createBaseBoolRules();
    message.const = object.const ?? false;
    return message;
  },
};

function createBaseStringRules(): StringRules {
  return {
    const: "",
    len: Long.UZERO,
    minLen: Long.UZERO,
    maxLen: Long.UZERO,
    lenBytes: Long.UZERO,
    minBytes: Long.UZERO,
    maxBytes: Long.UZERO,
    pattern: "",
    prefix: "",
    suffix: "",
    contains: "",
    notContains: "",
    in: [],
    notIn: [],
    wellKnown: undefined,
    strict: false,
    ignoreEmpty: false,
  };
}

export const StringRules = {
  encode(message: StringRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== "") {
      writer.uint32(10).string(message.const);
    }
    if (!message.len.isZero()) {
      writer.uint32(152).uint64(message.len);
    }
    if (!message.minLen.isZero()) {
      writer.uint32(16).uint64(message.minLen);
    }
    if (!message.maxLen.isZero()) {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (!message.lenBytes.isZero()) {
      writer.uint32(160).uint64(message.lenBytes);
    }
    if (!message.minBytes.isZero()) {
      writer.uint32(32).uint64(message.minBytes);
    }
    if (!message.maxBytes.isZero()) {
      writer.uint32(40).uint64(message.maxBytes);
    }
    if (message.pattern !== "") {
      writer.uint32(50).string(message.pattern);
    }
    if (message.prefix !== "") {
      writer.uint32(58).string(message.prefix);
    }
    if (message.suffix !== "") {
      writer.uint32(66).string(message.suffix);
    }
    if (message.contains !== "") {
      writer.uint32(74).string(message.contains);
    }
    if (message.notContains !== "") {
      writer.uint32(186).string(message.notContains);
    }
    for (const v of message.in) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(90).string(v!);
    }
    if (message.wellKnown?.$case === "email") {
      writer.uint32(96).bool(message.wellKnown.email);
    }
    if (message.wellKnown?.$case === "hostname") {
      writer.uint32(104).bool(message.wellKnown.hostname);
    }
    if (message.wellKnown?.$case === "ip") {
      writer.uint32(112).bool(message.wellKnown.ip);
    }
    if (message.wellKnown?.$case === "ipv4") {
      writer.uint32(120).bool(message.wellKnown.ipv4);
    }
    if (message.wellKnown?.$case === "ipv6") {
      writer.uint32(128).bool(message.wellKnown.ipv6);
    }
    if (message.wellKnown?.$case === "uri") {
      writer.uint32(136).bool(message.wellKnown.uri);
    }
    if (message.wellKnown?.$case === "uriRef") {
      writer.uint32(144).bool(message.wellKnown.uriRef);
    }
    if (message.wellKnown?.$case === "address") {
      writer.uint32(168).bool(message.wellKnown.address);
    }
    if (message.wellKnown?.$case === "uuid") {
      writer.uint32(176).bool(message.wellKnown.uuid);
    }
    if (message.wellKnown?.$case === "wellKnownRegex") {
      writer.uint32(192).int32(message.wellKnown.wellKnownRegex);
    }
    if (message.strict === true) {
      writer.uint32(200).bool(message.strict);
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(208).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.string();
          break;
        case 19:
          message.len = reader.uint64() as Long;
          break;
        case 2:
          message.minLen = reader.uint64() as Long;
          break;
        case 3:
          message.maxLen = reader.uint64() as Long;
          break;
        case 20:
          message.lenBytes = reader.uint64() as Long;
          break;
        case 4:
          message.minBytes = reader.uint64() as Long;
          break;
        case 5:
          message.maxBytes = reader.uint64() as Long;
          break;
        case 6:
          message.pattern = reader.string();
          break;
        case 7:
          message.prefix = reader.string();
          break;
        case 8:
          message.suffix = reader.string();
          break;
        case 9:
          message.contains = reader.string();
          break;
        case 23:
          message.notContains = reader.string();
          break;
        case 10:
          message.in.push(reader.string());
          break;
        case 11:
          message.notIn.push(reader.string());
          break;
        case 12:
          message.wellKnown = { $case: "email", email: reader.bool() };
          break;
        case 13:
          message.wellKnown = { $case: "hostname", hostname: reader.bool() };
          break;
        case 14:
          message.wellKnown = { $case: "ip", ip: reader.bool() };
          break;
        case 15:
          message.wellKnown = { $case: "ipv4", ipv4: reader.bool() };
          break;
        case 16:
          message.wellKnown = { $case: "ipv6", ipv6: reader.bool() };
          break;
        case 17:
          message.wellKnown = { $case: "uri", uri: reader.bool() };
          break;
        case 18:
          message.wellKnown = { $case: "uriRef", uriRef: reader.bool() };
          break;
        case 21:
          message.wellKnown = { $case: "address", address: reader.bool() };
          break;
        case 22:
          message.wellKnown = { $case: "uuid", uuid: reader.bool() };
          break;
        case 24:
          message.wellKnown = { $case: "wellKnownRegex", wellKnownRegex: reader.int32() as any };
          break;
        case 25:
          message.strict = reader.bool();
          break;
        case 26:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StringRules {
    return {
      const: isSet(object.const) ? String(object.const) : "",
      len: isSet(object.len) ? Long.fromValue(object.len) : Long.UZERO,
      minLen: isSet(object.minLen) ? Long.fromValue(object.minLen) : Long.UZERO,
      maxLen: isSet(object.maxLen) ? Long.fromValue(object.maxLen) : Long.UZERO,
      lenBytes: isSet(object.lenBytes) ? Long.fromValue(object.lenBytes) : Long.UZERO,
      minBytes: isSet(object.minBytes) ? Long.fromValue(object.minBytes) : Long.UZERO,
      maxBytes: isSet(object.maxBytes) ? Long.fromValue(object.maxBytes) : Long.UZERO,
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      prefix: isSet(object.prefix) ? String(object.prefix) : "",
      suffix: isSet(object.suffix) ? String(object.suffix) : "",
      contains: isSet(object.contains) ? String(object.contains) : "",
      notContains: isSet(object.notContains) ? String(object.notContains) : "",
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => String(e)) : [],
      wellKnown: isSet(object.email)
        ? { $case: "email", email: Boolean(object.email) }
        : isSet(object.hostname)
        ? { $case: "hostname", hostname: Boolean(object.hostname) }
        : isSet(object.ip)
        ? { $case: "ip", ip: Boolean(object.ip) }
        : isSet(object.ipv4)
        ? { $case: "ipv4", ipv4: Boolean(object.ipv4) }
        : isSet(object.ipv6)
        ? { $case: "ipv6", ipv6: Boolean(object.ipv6) }
        : isSet(object.uri)
        ? { $case: "uri", uri: Boolean(object.uri) }
        : isSet(object.uriRef)
        ? { $case: "uriRef", uriRef: Boolean(object.uriRef) }
        : isSet(object.address)
        ? { $case: "address", address: Boolean(object.address) }
        : isSet(object.uuid)
        ? { $case: "uuid", uuid: Boolean(object.uuid) }
        : isSet(object.wellKnownRegex)
        ? { $case: "wellKnownRegex", wellKnownRegex: knownRegexFromJSON(object.wellKnownRegex) }
        : undefined,
      strict: isSet(object.strict) ? Boolean(object.strict) : false,
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: StringRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = message.const);
    message.len !== undefined && (obj.len = (message.len || Long.UZERO).toString());
    message.minLen !== undefined && (obj.minLen = (message.minLen || Long.UZERO).toString());
    message.maxLen !== undefined && (obj.maxLen = (message.maxLen || Long.UZERO).toString());
    message.lenBytes !== undefined && (obj.lenBytes = (message.lenBytes || Long.UZERO).toString());
    message.minBytes !== undefined && (obj.minBytes = (message.minBytes || Long.UZERO).toString());
    message.maxBytes !== undefined && (obj.maxBytes = (message.maxBytes || Long.UZERO).toString());
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined && (obj.prefix = message.prefix);
    message.suffix !== undefined && (obj.suffix = message.suffix);
    message.contains !== undefined && (obj.contains = message.contains);
    message.notContains !== undefined && (obj.notContains = message.notContains);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    message.wellKnown?.$case === "email" && (obj.email = message.wellKnown?.email);
    message.wellKnown?.$case === "hostname" && (obj.hostname = message.wellKnown?.hostname);
    message.wellKnown?.$case === "ip" && (obj.ip = message.wellKnown?.ip);
    message.wellKnown?.$case === "ipv4" && (obj.ipv4 = message.wellKnown?.ipv4);
    message.wellKnown?.$case === "ipv6" && (obj.ipv6 = message.wellKnown?.ipv6);
    message.wellKnown?.$case === "uri" && (obj.uri = message.wellKnown?.uri);
    message.wellKnown?.$case === "uriRef" && (obj.uriRef = message.wellKnown?.uriRef);
    message.wellKnown?.$case === "address" && (obj.address = message.wellKnown?.address);
    message.wellKnown?.$case === "uuid" && (obj.uuid = message.wellKnown?.uuid);
    message.wellKnown?.$case === "wellKnownRegex" &&
      (obj.wellKnownRegex = message.wellKnown?.wellKnownRegex !== undefined
        ? knownRegexToJSON(message.wellKnown?.wellKnownRegex)
        : undefined);
    message.strict !== undefined && (obj.strict = message.strict);
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<StringRules>): StringRules {
    const message = createBaseStringRules();
    message.const = object.const ?? "";
    message.len = (object.len !== undefined && object.len !== null) ? Long.fromValue(object.len) : Long.UZERO;
    message.minLen = (object.minLen !== undefined && object.minLen !== null)
      ? Long.fromValue(object.minLen)
      : Long.UZERO;
    message.maxLen = (object.maxLen !== undefined && object.maxLen !== null)
      ? Long.fromValue(object.maxLen)
      : Long.UZERO;
    message.lenBytes = (object.lenBytes !== undefined && object.lenBytes !== null)
      ? Long.fromValue(object.lenBytes)
      : Long.UZERO;
    message.minBytes = (object.minBytes !== undefined && object.minBytes !== null)
      ? Long.fromValue(object.minBytes)
      : Long.UZERO;
    message.maxBytes = (object.maxBytes !== undefined && object.maxBytes !== null)
      ? Long.fromValue(object.maxBytes)
      : Long.UZERO;
    message.pattern = object.pattern ?? "";
    message.prefix = object.prefix ?? "";
    message.suffix = object.suffix ?? "";
    message.contains = object.contains ?? "";
    message.notContains = object.notContains ?? "";
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    if (
      object.wellKnown?.$case === "email" && object.wellKnown?.email !== undefined && object.wellKnown?.email !== null
    ) {
      message.wellKnown = { $case: "email", email: object.wellKnown.email };
    }
    if (
      object.wellKnown?.$case === "hostname" &&
      object.wellKnown?.hostname !== undefined &&
      object.wellKnown?.hostname !== null
    ) {
      message.wellKnown = { $case: "hostname", hostname: object.wellKnown.hostname };
    }
    if (object.wellKnown?.$case === "ip" && object.wellKnown?.ip !== undefined && object.wellKnown?.ip !== null) {
      message.wellKnown = { $case: "ip", ip: object.wellKnown.ip };
    }
    if (object.wellKnown?.$case === "ipv4" && object.wellKnown?.ipv4 !== undefined && object.wellKnown?.ipv4 !== null) {
      message.wellKnown = { $case: "ipv4", ipv4: object.wellKnown.ipv4 };
    }
    if (object.wellKnown?.$case === "ipv6" && object.wellKnown?.ipv6 !== undefined && object.wellKnown?.ipv6 !== null) {
      message.wellKnown = { $case: "ipv6", ipv6: object.wellKnown.ipv6 };
    }
    if (object.wellKnown?.$case === "uri" && object.wellKnown?.uri !== undefined && object.wellKnown?.uri !== null) {
      message.wellKnown = { $case: "uri", uri: object.wellKnown.uri };
    }
    if (
      object.wellKnown?.$case === "uriRef" &&
      object.wellKnown?.uriRef !== undefined &&
      object.wellKnown?.uriRef !== null
    ) {
      message.wellKnown = { $case: "uriRef", uriRef: object.wellKnown.uriRef };
    }
    if (
      object.wellKnown?.$case === "address" &&
      object.wellKnown?.address !== undefined &&
      object.wellKnown?.address !== null
    ) {
      message.wellKnown = { $case: "address", address: object.wellKnown.address };
    }
    if (object.wellKnown?.$case === "uuid" && object.wellKnown?.uuid !== undefined && object.wellKnown?.uuid !== null) {
      message.wellKnown = { $case: "uuid", uuid: object.wellKnown.uuid };
    }
    if (
      object.wellKnown?.$case === "wellKnownRegex" &&
      object.wellKnown?.wellKnownRegex !== undefined &&
      object.wellKnown?.wellKnownRegex !== null
    ) {
      message.wellKnown = { $case: "wellKnownRegex", wellKnownRegex: object.wellKnown.wellKnownRegex };
    }
    message.strict = object.strict ?? false;
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseBytesRules(): BytesRules {
  return {
    const: Buffer.alloc(0),
    len: Long.UZERO,
    minLen: Long.UZERO,
    maxLen: Long.UZERO,
    pattern: "",
    prefix: Buffer.alloc(0),
    suffix: Buffer.alloc(0),
    contains: Buffer.alloc(0),
    in: [],
    notIn: [],
    wellKnown: undefined,
    ignoreEmpty: false,
  };
}

export const BytesRules = {
  encode(message: BytesRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const.length !== 0) {
      writer.uint32(10).bytes(message.const);
    }
    if (!message.len.isZero()) {
      writer.uint32(104).uint64(message.len);
    }
    if (!message.minLen.isZero()) {
      writer.uint32(16).uint64(message.minLen);
    }
    if (!message.maxLen.isZero()) {
      writer.uint32(24).uint64(message.maxLen);
    }
    if (message.pattern !== "") {
      writer.uint32(34).string(message.pattern);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(50).bytes(message.suffix);
    }
    if (message.contains.length !== 0) {
      writer.uint32(58).bytes(message.contains);
    }
    for (const v of message.in) {
      writer.uint32(66).bytes(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(74).bytes(v!);
    }
    if (message.wellKnown?.$case === "ip") {
      writer.uint32(80).bool(message.wellKnown.ip);
    }
    if (message.wellKnown?.$case === "ipv4") {
      writer.uint32(88).bool(message.wellKnown.ipv4);
    }
    if (message.wellKnown?.$case === "ipv6") {
      writer.uint32(96).bool(message.wellKnown.ipv6);
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(112).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytesRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.bytes() as Buffer;
          break;
        case 13:
          message.len = reader.uint64() as Long;
          break;
        case 2:
          message.minLen = reader.uint64() as Long;
          break;
        case 3:
          message.maxLen = reader.uint64() as Long;
          break;
        case 4:
          message.pattern = reader.string();
          break;
        case 5:
          message.prefix = reader.bytes() as Buffer;
          break;
        case 6:
          message.suffix = reader.bytes() as Buffer;
          break;
        case 7:
          message.contains = reader.bytes() as Buffer;
          break;
        case 8:
          message.in.push(reader.bytes() as Buffer);
          break;
        case 9:
          message.notIn.push(reader.bytes() as Buffer);
          break;
        case 10:
          message.wellKnown = { $case: "ip", ip: reader.bool() };
          break;
        case 11:
          message.wellKnown = { $case: "ipv4", ipv4: reader.bool() };
          break;
        case 12:
          message.wellKnown = { $case: "ipv6", ipv6: reader.bool() };
          break;
        case 14:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BytesRules {
    return {
      const: isSet(object.const) ? Buffer.from(bytesFromBase64(object.const)) : Buffer.alloc(0),
      len: isSet(object.len) ? Long.fromValue(object.len) : Long.UZERO,
      minLen: isSet(object.minLen) ? Long.fromValue(object.minLen) : Long.UZERO,
      maxLen: isSet(object.maxLen) ? Long.fromValue(object.maxLen) : Long.UZERO,
      pattern: isSet(object.pattern) ? String(object.pattern) : "",
      prefix: isSet(object.prefix) ? Buffer.from(bytesFromBase64(object.prefix)) : Buffer.alloc(0),
      suffix: isSet(object.suffix) ? Buffer.from(bytesFromBase64(object.suffix)) : Buffer.alloc(0),
      contains: isSet(object.contains) ? Buffer.from(bytesFromBase64(object.contains)) : Buffer.alloc(0),
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Buffer.from(bytesFromBase64(e))) : [],
      wellKnown: isSet(object.ip)
        ? { $case: "ip", ip: Boolean(object.ip) }
        : isSet(object.ipv4)
        ? { $case: "ipv4", ipv4: Boolean(object.ipv4) }
        : isSet(object.ipv6)
        ? { $case: "ipv6", ipv6: Boolean(object.ipv6) }
        : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: BytesRules): unknown {
    const obj: any = {};
    message.const !== undefined &&
      (obj.const = base64FromBytes(message.const !== undefined ? message.const : Buffer.alloc(0)));
    message.len !== undefined && (obj.len = (message.len || Long.UZERO).toString());
    message.minLen !== undefined && (obj.minLen = (message.minLen || Long.UZERO).toString());
    message.maxLen !== undefined && (obj.maxLen = (message.maxLen || Long.UZERO).toString());
    message.pattern !== undefined && (obj.pattern = message.pattern);
    message.prefix !== undefined &&
      (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : Buffer.alloc(0)));
    message.suffix !== undefined &&
      (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : Buffer.alloc(0)));
    message.contains !== undefined &&
      (obj.contains = base64FromBytes(message.contains !== undefined ? message.contains : Buffer.alloc(0)));
    if (message.in) {
      obj.in = message.in.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => base64FromBytes(e !== undefined ? e : Buffer.alloc(0)));
    } else {
      obj.notIn = [];
    }
    message.wellKnown?.$case === "ip" && (obj.ip = message.wellKnown?.ip);
    message.wellKnown?.$case === "ipv4" && (obj.ipv4 = message.wellKnown?.ipv4);
    message.wellKnown?.$case === "ipv6" && (obj.ipv6 = message.wellKnown?.ipv6);
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<BytesRules>): BytesRules {
    const message = createBaseBytesRules();
    message.const = object.const ?? Buffer.alloc(0);
    message.len = (object.len !== undefined && object.len !== null) ? Long.fromValue(object.len) : Long.UZERO;
    message.minLen = (object.minLen !== undefined && object.minLen !== null)
      ? Long.fromValue(object.minLen)
      : Long.UZERO;
    message.maxLen = (object.maxLen !== undefined && object.maxLen !== null)
      ? Long.fromValue(object.maxLen)
      : Long.UZERO;
    message.pattern = object.pattern ?? "";
    message.prefix = object.prefix ?? Buffer.alloc(0);
    message.suffix = object.suffix ?? Buffer.alloc(0);
    message.contains = object.contains ?? Buffer.alloc(0);
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    if (object.wellKnown?.$case === "ip" && object.wellKnown?.ip !== undefined && object.wellKnown?.ip !== null) {
      message.wellKnown = { $case: "ip", ip: object.wellKnown.ip };
    }
    if (object.wellKnown?.$case === "ipv4" && object.wellKnown?.ipv4 !== undefined && object.wellKnown?.ipv4 !== null) {
      message.wellKnown = { $case: "ipv4", ipv4: object.wellKnown.ipv4 };
    }
    if (object.wellKnown?.$case === "ipv6" && object.wellKnown?.ipv6 !== undefined && object.wellKnown?.ipv6 !== null) {
      message.wellKnown = { $case: "ipv6", ipv6: object.wellKnown.ipv6 };
    }
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseEnumRules(): EnumRules {
  return { const: 0, definedOnly: false, in: [], notIn: [] };
}

export const EnumRules = {
  encode(message: EnumRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.const !== 0) {
      writer.uint32(8).int32(message.const);
    }
    if (message.definedOnly === true) {
      writer.uint32(16).bool(message.definedOnly);
    }
    writer.uint32(26).fork();
    for (const v of message.in) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.notIn) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.const = reader.int32();
          break;
        case 2:
          message.definedOnly = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.in.push(reader.int32());
            }
          } else {
            message.in.push(reader.int32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.notIn.push(reader.int32());
            }
          } else {
            message.notIn.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumRules {
    return {
      const: isSet(object.const) ? Number(object.const) : 0,
      definedOnly: isSet(object.definedOnly) ? Boolean(object.definedOnly) : false,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Number(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: EnumRules): unknown {
    const obj: any = {};
    message.const !== undefined && (obj.const = Math.round(message.const));
    message.definedOnly !== undefined && (obj.definedOnly = message.definedOnly);
    if (message.in) {
      obj.in = message.in.map((e) => Math.round(e));
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => Math.round(e));
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EnumRules>): EnumRules {
    const message = createBaseEnumRules();
    message.const = object.const ?? 0;
    message.definedOnly = object.definedOnly ?? false;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    return message;
  },
};

function createBaseMessageRules(): MessageRules {
  return { skip: false, required: false };
}

export const MessageRules = {
  encode(message: MessageRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.skip === true) {
      writer.uint32(8).bool(message.skip);
    }
    if (message.required === true) {
      writer.uint32(16).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.skip = reader.bool();
          break;
        case 2:
          message.required = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageRules {
    return {
      skip: isSet(object.skip) ? Boolean(object.skip) : false,
      required: isSet(object.required) ? Boolean(object.required) : false,
    };
  },

  toJSON(message: MessageRules): unknown {
    const obj: any = {};
    message.skip !== undefined && (obj.skip = message.skip);
    message.required !== undefined && (obj.required = message.required);
    return obj;
  },

  fromPartial(object: DeepPartial<MessageRules>): MessageRules {
    const message = createBaseMessageRules();
    message.skip = object.skip ?? false;
    message.required = object.required ?? false;
    return message;
  },
};

function createBaseRepeatedRules(): RepeatedRules {
  return { minItems: Long.UZERO, maxItems: Long.UZERO, unique: false, items: undefined, ignoreEmpty: false };
}

export const RepeatedRules = {
  encode(message: RepeatedRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.minItems.isZero()) {
      writer.uint32(8).uint64(message.minItems);
    }
    if (!message.maxItems.isZero()) {
      writer.uint32(16).uint64(message.maxItems);
    }
    if (message.unique === true) {
      writer.uint32(24).bool(message.unique);
    }
    if (message.items !== undefined) {
      FieldRules.encode(message.items, writer.uint32(34).fork()).ldelim();
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(40).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepeatedRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepeatedRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minItems = reader.uint64() as Long;
          break;
        case 2:
          message.maxItems = reader.uint64() as Long;
          break;
        case 3:
          message.unique = reader.bool();
          break;
        case 4:
          message.items = FieldRules.decode(reader, reader.uint32());
          break;
        case 5:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RepeatedRules {
    return {
      minItems: isSet(object.minItems) ? Long.fromValue(object.minItems) : Long.UZERO,
      maxItems: isSet(object.maxItems) ? Long.fromValue(object.maxItems) : Long.UZERO,
      unique: isSet(object.unique) ? Boolean(object.unique) : false,
      items: isSet(object.items) ? FieldRules.fromJSON(object.items) : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: RepeatedRules): unknown {
    const obj: any = {};
    message.minItems !== undefined && (obj.minItems = (message.minItems || Long.UZERO).toString());
    message.maxItems !== undefined && (obj.maxItems = (message.maxItems || Long.UZERO).toString());
    message.unique !== undefined && (obj.unique = message.unique);
    message.items !== undefined && (obj.items = message.items ? FieldRules.toJSON(message.items) : undefined);
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<RepeatedRules>): RepeatedRules {
    const message = createBaseRepeatedRules();
    message.minItems = (object.minItems !== undefined && object.minItems !== null)
      ? Long.fromValue(object.minItems)
      : Long.UZERO;
    message.maxItems = (object.maxItems !== undefined && object.maxItems !== null)
      ? Long.fromValue(object.maxItems)
      : Long.UZERO;
    message.unique = object.unique ?? false;
    message.items = (object.items !== undefined && object.items !== null)
      ? FieldRules.fromPartial(object.items)
      : undefined;
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseMapRules(): MapRules {
  return {
    minPairs: Long.UZERO,
    maxPairs: Long.UZERO,
    noSparse: false,
    keys: undefined,
    values: undefined,
    ignoreEmpty: false,
  };
}

export const MapRules = {
  encode(message: MapRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.minPairs.isZero()) {
      writer.uint32(8).uint64(message.minPairs);
    }
    if (!message.maxPairs.isZero()) {
      writer.uint32(16).uint64(message.maxPairs);
    }
    if (message.noSparse === true) {
      writer.uint32(24).bool(message.noSparse);
    }
    if (message.keys !== undefined) {
      FieldRules.encode(message.keys, writer.uint32(34).fork()).ldelim();
    }
    if (message.values !== undefined) {
      FieldRules.encode(message.values, writer.uint32(42).fork()).ldelim();
    }
    if (message.ignoreEmpty === true) {
      writer.uint32(48).bool(message.ignoreEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minPairs = reader.uint64() as Long;
          break;
        case 2:
          message.maxPairs = reader.uint64() as Long;
          break;
        case 3:
          message.noSparse = reader.bool();
          break;
        case 4:
          message.keys = FieldRules.decode(reader, reader.uint32());
          break;
        case 5:
          message.values = FieldRules.decode(reader, reader.uint32());
          break;
        case 6:
          message.ignoreEmpty = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapRules {
    return {
      minPairs: isSet(object.minPairs) ? Long.fromValue(object.minPairs) : Long.UZERO,
      maxPairs: isSet(object.maxPairs) ? Long.fromValue(object.maxPairs) : Long.UZERO,
      noSparse: isSet(object.noSparse) ? Boolean(object.noSparse) : false,
      keys: isSet(object.keys) ? FieldRules.fromJSON(object.keys) : undefined,
      values: isSet(object.values) ? FieldRules.fromJSON(object.values) : undefined,
      ignoreEmpty: isSet(object.ignoreEmpty) ? Boolean(object.ignoreEmpty) : false,
    };
  },

  toJSON(message: MapRules): unknown {
    const obj: any = {};
    message.minPairs !== undefined && (obj.minPairs = (message.minPairs || Long.UZERO).toString());
    message.maxPairs !== undefined && (obj.maxPairs = (message.maxPairs || Long.UZERO).toString());
    message.noSparse !== undefined && (obj.noSparse = message.noSparse);
    message.keys !== undefined && (obj.keys = message.keys ? FieldRules.toJSON(message.keys) : undefined);
    message.values !== undefined && (obj.values = message.values ? FieldRules.toJSON(message.values) : undefined);
    message.ignoreEmpty !== undefined && (obj.ignoreEmpty = message.ignoreEmpty);
    return obj;
  },

  fromPartial(object: DeepPartial<MapRules>): MapRules {
    const message = createBaseMapRules();
    message.minPairs = (object.minPairs !== undefined && object.minPairs !== null)
      ? Long.fromValue(object.minPairs)
      : Long.UZERO;
    message.maxPairs = (object.maxPairs !== undefined && object.maxPairs !== null)
      ? Long.fromValue(object.maxPairs)
      : Long.UZERO;
    message.noSparse = object.noSparse ?? false;
    message.keys = (object.keys !== undefined && object.keys !== null)
      ? FieldRules.fromPartial(object.keys)
      : undefined;
    message.values = (object.values !== undefined && object.values !== null)
      ? FieldRules.fromPartial(object.values)
      : undefined;
    message.ignoreEmpty = object.ignoreEmpty ?? false;
    return message;
  },
};

function createBaseAnyRules(): AnyRules {
  return { required: false, in: [], notIn: [] };
}

export const AnyRules = {
  encode(message: AnyRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    for (const v of message.in) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.notIn) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.in.push(reader.string());
          break;
        case 3:
          message.notIn.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AnyRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => String(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AnyRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    if (message.in) {
      obj.in = message.in.map((e) => e);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AnyRules>): AnyRules {
    const message = createBaseAnyRules();
    message.required = object.required ?? false;
    message.in = object.in?.map((e) => e) || [];
    message.notIn = object.notIn?.map((e) => e) || [];
    return message;
  },
};

function createBaseDurationRules(): DurationRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    in: [],
    notIn: [],
  };
}

export const DurationRules = {
  encode(message: DurationRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Duration.encode(message.const, writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Duration.encode(message.lt, writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Duration.encode(message.lte, writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Duration.encode(message.gt, writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Duration.encode(message.gte, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.in) {
      Duration.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.notIn) {
      Duration.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DurationRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDurationRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.const = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.lt = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.lte = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.gt = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.gte = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.in.push(Duration.decode(reader, reader.uint32()));
          break;
        case 8:
          message.notIn.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DurationRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      const: isSet(object.const) ? Duration.fromJSON(object.const) : undefined,
      lt: isSet(object.lt) ? Duration.fromJSON(object.lt) : undefined,
      lte: isSet(object.lte) ? Duration.fromJSON(object.lte) : undefined,
      gt: isSet(object.gt) ? Duration.fromJSON(object.gt) : undefined,
      gte: isSet(object.gte) ? Duration.fromJSON(object.gte) : undefined,
      in: Array.isArray(object?.in) ? object.in.map((e: any) => Duration.fromJSON(e)) : [],
      notIn: Array.isArray(object?.notIn) ? object.notIn.map((e: any) => Duration.fromJSON(e)) : [],
    };
  },

  toJSON(message: DurationRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined && (obj.const = message.const ? Duration.toJSON(message.const) : undefined);
    message.lt !== undefined && (obj.lt = message.lt ? Duration.toJSON(message.lt) : undefined);
    message.lte !== undefined && (obj.lte = message.lte ? Duration.toJSON(message.lte) : undefined);
    message.gt !== undefined && (obj.gt = message.gt ? Duration.toJSON(message.gt) : undefined);
    message.gte !== undefined && (obj.gte = message.gte ? Duration.toJSON(message.gte) : undefined);
    if (message.in) {
      obj.in = message.in.map((e) => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.in = [];
    }
    if (message.notIn) {
      obj.notIn = message.notIn.map((e) => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.notIn = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DurationRules>): DurationRules {
    const message = createBaseDurationRules();
    message.required = object.required ?? false;
    message.const = (object.const !== undefined && object.const !== null)
      ? Duration.fromPartial(object.const)
      : undefined;
    message.lt = (object.lt !== undefined && object.lt !== null) ? Duration.fromPartial(object.lt) : undefined;
    message.lte = (object.lte !== undefined && object.lte !== null) ? Duration.fromPartial(object.lte) : undefined;
    message.gt = (object.gt !== undefined && object.gt !== null) ? Duration.fromPartial(object.gt) : undefined;
    message.gte = (object.gte !== undefined && object.gte !== null) ? Duration.fromPartial(object.gte) : undefined;
    message.in = object.in?.map((e) => Duration.fromPartial(e)) || [];
    message.notIn = object.notIn?.map((e) => Duration.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTimestampRules(): TimestampRules {
  return {
    required: false,
    const: undefined,
    lt: undefined,
    lte: undefined,
    gt: undefined,
    gte: undefined,
    ltNow: false,
    gtNow: false,
    within: undefined,
  };
}

export const TimestampRules = {
  encode(message: TimestampRules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.required === true) {
      writer.uint32(8).bool(message.required);
    }
    if (message.const !== undefined) {
      Timestamp.encode(toTimestamp(message.const), writer.uint32(18).fork()).ldelim();
    }
    if (message.lt !== undefined) {
      Timestamp.encode(toTimestamp(message.lt), writer.uint32(26).fork()).ldelim();
    }
    if (message.lte !== undefined) {
      Timestamp.encode(toTimestamp(message.lte), writer.uint32(34).fork()).ldelim();
    }
    if (message.gt !== undefined) {
      Timestamp.encode(toTimestamp(message.gt), writer.uint32(42).fork()).ldelim();
    }
    if (message.gte !== undefined) {
      Timestamp.encode(toTimestamp(message.gte), writer.uint32(50).fork()).ldelim();
    }
    if (message.ltNow === true) {
      writer.uint32(56).bool(message.ltNow);
    }
    if (message.gtNow === true) {
      writer.uint32(64).bool(message.gtNow);
    }
    if (message.within !== undefined) {
      Duration.encode(message.within, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampRules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampRules();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.required = reader.bool();
          break;
        case 2:
          message.const = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.gt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.gte = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ltNow = reader.bool();
          break;
        case 8:
          message.gtNow = reader.bool();
          break;
        case 9:
          message.within = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimestampRules {
    return {
      required: isSet(object.required) ? Boolean(object.required) : false,
      const: isSet(object.const) ? fromJsonTimestamp(object.const) : undefined,
      lt: isSet(object.lt) ? fromJsonTimestamp(object.lt) : undefined,
      lte: isSet(object.lte) ? fromJsonTimestamp(object.lte) : undefined,
      gt: isSet(object.gt) ? fromJsonTimestamp(object.gt) : undefined,
      gte: isSet(object.gte) ? fromJsonTimestamp(object.gte) : undefined,
      ltNow: isSet(object.ltNow) ? Boolean(object.ltNow) : false,
      gtNow: isSet(object.gtNow) ? Boolean(object.gtNow) : false,
      within: isSet(object.within) ? Duration.fromJSON(object.within) : undefined,
    };
  },

  toJSON(message: TimestampRules): unknown {
    const obj: any = {};
    message.required !== undefined && (obj.required = message.required);
    message.const !== undefined && (obj.const = message.const.toISOString());
    message.lt !== undefined && (obj.lt = message.lt.toISOString());
    message.lte !== undefined && (obj.lte = message.lte.toISOString());
    message.gt !== undefined && (obj.gt = message.gt.toISOString());
    message.gte !== undefined && (obj.gte = message.gte.toISOString());
    message.ltNow !== undefined && (obj.ltNow = message.ltNow);
    message.gtNow !== undefined && (obj.gtNow = message.gtNow);
    message.within !== undefined && (obj.within = message.within ? Duration.toJSON(message.within) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TimestampRules>): TimestampRules {
    const message = createBaseTimestampRules();
    message.required = object.required ?? false;
    message.const = object.const ?? undefined;
    message.lt = object.lt ?? undefined;
    message.lte = object.lte ?? undefined;
    message.gt = object.gt ?? undefined;
    message.gte = object.gte ?? undefined;
    message.ltNow = object.ltNow ?? false;
    message.gtNow = object.gtNow ?? false;
    message.within = (object.within !== undefined && object.within !== null)
      ? Duration.fromPartial(object.within)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
