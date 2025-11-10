/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../protobuf/duration";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Timestamp } from "../../../protobuf/timestamp";

export const protobufPackage = "google.api.expr.v1alpha1";

/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
  /** The parsed expression. */
  expr:
    | Expr
    | undefined;
  /** The source info derived from input that generated the parsed `expr`. */
  sourceInfo: SourceInfo | undefined;
}

/**
 * An abstract representation of a common expression.
 *
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 *
 * All references within expressions must resolve to a
 * [Decl][google.api.expr.v1alpha1.Decl] provided at type-check for an
 * expression to be valid. A reference may either be a bare identifier `name` or
 * a qualified identifier `google.api.name`. References may either refer to a
 * value or a function declaration.
 *
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a
 * [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and the
 * function declaration `startsWith`.
 */
export interface Expr {
  /**
   * Required. An id assigned to this node by the parser which is unique in a
   * given expression tree. This is used to associate type information and other
   * attributes to a node in the parse tree.
   */
  id: Long;
  exprKind?:
    | { $case: "constExpr"; constExpr: Constant }
    | { $case: "identExpr"; identExpr: Expr_Ident }
    | { $case: "selectExpr"; selectExpr: Expr_Select }
    | { $case: "callExpr"; callExpr: Expr_Call }
    | { $case: "listExpr"; listExpr: Expr_CreateList }
    | { $case: "structExpr"; structExpr: Expr_CreateStruct }
    | { $case: "comprehensionExpr"; comprehensionExpr: Expr_Comprehension }
    | undefined;
}

/** An identifier expression. e.g. `request`. */
export interface Expr_Ident {
  /**
   * Required. Holds a single, unqualified identifier, possibly preceded by a
   * '.'.
   *
   * Qualified names are represented by the
   * [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression.
   */
  name: string;
}

/** A field selection expression. e.g. `request.auth`. */
export interface Expr_Select {
  /**
   * Required. The target of the selection expression.
   *
   * For example, in the select expression `request.auth`, the `request`
   * portion of the expression is the `operand`.
   */
  operand:
    | Expr
    | undefined;
  /**
   * Required. The name of the field to select.
   *
   * For example, in the select expression `request.auth`, the `auth` portion
   * of the expression would be the `field`.
   */
  field: string;
  /**
   * Whether the select is to be interpreted as a field presence test.
   *
   * This results from the macro `has(request.auth)`.
   */
  testOnly: boolean;
}

/**
 * A call expression, including calls to predefined functions and operators.
 *
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_Call {
  /**
   * The target of an method call-style expression. For example, `x` in
   * `x.f()`.
   */
  target:
    | Expr
    | undefined;
  /** Required. The name of the function or method being called. */
  function: string;
  /** The arguments. */
  args: Expr[];
}

/**
 * A list creation expression.
 *
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
  /** The elements part of the list. */
  elements: Expr[];
  /**
   * The indices within the elements list which are marked as optional
   * elements.
   *
   * When an optional-typed value is present, the value it contains
   * is included in the list. If the optional-typed value is absent, the list
   * element is omitted from the CreateList result.
   */
  optionalIndices: number[];
}

/**
 * A map or message creation expression.
 *
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStruct {
  /**
   * The type name of the message to be created, empty when creating map
   * literals.
   */
  messageName: string;
  /** The entries in the creation expression. */
  entries: Expr_CreateStruct_Entry[];
}

/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
  /**
   * Required. An id assigned to this node by the parser which is unique
   * in a given expression tree. This is used to associate type
   * information and other attributes to the node.
   */
  id: Long;
  keyKind?:
    | { $case: "fieldKey"; fieldKey: string }
    | { $case: "mapKey"; mapKey: Expr }
    | undefined;
  /**
   * Required. The value assigned to the key.
   *
   * If the optional_entry field is true, the expression must resolve to an
   * optional-typed value. If the optional value is present, the key will be
   * set; however, if the optional value is absent, the key will be unset.
   */
  value:
    | Expr
    | undefined;
  /** Whether the key-value pair is optional. */
  optionalEntry: boolean;
}

/**
 * A comprehension expression applied to a list or map.
 *
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 *
 * The following macros are supported within CEL:
 *
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 *
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 *
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 *
 * Comprehensions for the standard environment macros evaluation can be best
 * visualized as the following pseudocode:
 *
 * ```
 * let `accu_var` = `accu_init`
 * for (let `iter_var` in `iter_range`) {
 *   if (!`loop_condition`) {
 *     break
 *   }
 *   `accu_var` = `loop_step`
 * }
 * return `result`
 * ```
 *
 * Comprehensions for the optional V2 macros which support map-to-map
 * translation differ slightly from the standard environment macros in that
 * they expose both the key or index in addition to the value for each list
 * or map entry:
 *
 * ```
 * let `accu_var` = `accu_init`
 * for (let `iter_var`, `iter_var2` in `iter_range`) {
 *   if (!`loop_condition`) {
 *     break
 *   }
 *   `accu_var` = `loop_step`
 * }
 * return `result`
 * ```
 */
export interface Expr_Comprehension {
  /**
   * The name of the first iteration variable.
   * When the iter_range is a list, this variable is the list element.
   * When the iter_range is a map, this variable is the map entry key.
   */
  iterVar: string;
  /**
   * The name of the second iteration variable, empty if not set.
   * When the iter_range is a list, this variable is the integer index.
   * When the iter_range is a map, this variable is the map entry value.
   * This field is only set for comprehension v2 macros.
   */
  iterVar2: string;
  /** The range over which the comprehension iterates. */
  iterRange:
    | Expr
    | undefined;
  /** The name of the variable used for accumulation of the result. */
  accuVar: string;
  /** The initial value of the accumulator. */
  accuInit:
    | Expr
    | undefined;
  /**
   * An expression which can contain iter_var, iter_var2, and accu_var.
   *
   * Returns false when the result has been computed and may be used as
   * a hint to short-circuit the remainder of the comprehension.
   */
  loopCondition:
    | Expr
    | undefined;
  /**
   * An expression which can contain iter_var, iter_var2, and accu_var.
   *
   * Computes the next value of accu_var.
   */
  loopStep:
    | Expr
    | undefined;
  /**
   * An expression which can contain accu_var.
   *
   * Computes the result.
   */
  result: Expr | undefined;
}

/**
 * Represents a primitive literal.
 *
 * Named 'Constant' here for backwards compatibility.
 *
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 *
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1alpha1.Expr] elements which require
 * evaluation and are thus not constant.
 *
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Constant {
  constantKind?:
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "boolValue"; boolValue: boolean }
    | { $case: "int64Value"; int64Value: Long }
    | { $case: "uint64Value"; uint64Value: Long }
    | { $case: "doubleValue"; doubleValue: number }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "bytesValue"; bytesValue: Buffer }
    | { $case: "durationValue"; durationValue: Duration }
    | { $case: "timestampValue"; timestampValue: Date }
    | undefined;
}

/** Source information collected at parse time. */
export interface SourceInfo {
  /** The syntax version of the source, e.g. `cel1`. */
  syntaxVersion: string;
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   *
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location: string;
  /**
   * Monotonically increasing list of code point offsets where newlines
   * `\n` appear.
   *
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  lineOffsets: number[];
  /**
   * A map from the parse node id (e.g. `Expr.id`) to the code point offset
   * within the source.
   */
  positions: Map<Long, number>;
  /**
   * A map from the parse node id where a macro replacement was made to the
   * call `Expr` that resulted in a macro expansion.
   *
   * For example, `has(value.field)` is a function call that is replaced by a
   * `test_only` field selection in the AST. Likewise, the call
   * `list.exists(e, e > 10)` translates to a comprehension expression. The key
   * in the map corresponds to the expression id of the expanded macro, and the
   * value is the call `Expr` that was replaced.
   */
  macroCalls: Map<Long, Expr>;
  /**
   * A list of tags for extensions that were used while parsing or type checking
   * the source expression. For example, optimizations that require special
   * runtime support may be specified.
   *
   * These are used to check feature support between components in separate
   * implementations. This can be used to either skip redundant work or
   * report an error if the extension is unsupported.
   */
  extensions: SourceInfo_Extension[];
}

/** An extension that was requested for the source expression. */
export interface SourceInfo_Extension {
  /** Identifier for the extension. Example: constant_folding */
  id: string;
  /**
   * If set, the listed components must understand the extension for the
   * expression to evaluate correctly.
   *
   * This field has set semantics, repeated values should be deduplicated.
   */
  affectedComponents: SourceInfo_Extension_Component[];
  /**
   * Version info. May be skipped if it isn't meaningful for the extension.
   * (for example constant_folding might always be v0.0).
   */
  version: SourceInfo_Extension_Version | undefined;
}

/** CEL component specifier. */
export enum SourceInfo_Extension_Component {
  /** COMPONENT_UNSPECIFIED - Unspecified, default. */
  COMPONENT_UNSPECIFIED = 0,
  /** COMPONENT_PARSER - Parser. Converts a CEL string to an AST. */
  COMPONENT_PARSER = 1,
  /**
   * COMPONENT_TYPE_CHECKER - Type checker. Checks that references in an AST are defined and types
   * agree.
   */
  COMPONENT_TYPE_CHECKER = 2,
  /**
   * COMPONENT_RUNTIME - Runtime. Evaluates a parsed and optionally checked CEL AST against a
   * context.
   */
  COMPONENT_RUNTIME = 3,
  UNRECOGNIZED = -1,
}

export function sourceInfo_Extension_ComponentFromJSON(object: any): SourceInfo_Extension_Component {
  switch (object) {
    case 0:
    case "COMPONENT_UNSPECIFIED":
      return SourceInfo_Extension_Component.COMPONENT_UNSPECIFIED;
    case 1:
    case "COMPONENT_PARSER":
      return SourceInfo_Extension_Component.COMPONENT_PARSER;
    case 2:
    case "COMPONENT_TYPE_CHECKER":
      return SourceInfo_Extension_Component.COMPONENT_TYPE_CHECKER;
    case 3:
    case "COMPONENT_RUNTIME":
      return SourceInfo_Extension_Component.COMPONENT_RUNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SourceInfo_Extension_Component.UNRECOGNIZED;
  }
}

export function sourceInfo_Extension_ComponentToJSON(object: SourceInfo_Extension_Component): string {
  switch (object) {
    case SourceInfo_Extension_Component.COMPONENT_UNSPECIFIED:
      return "COMPONENT_UNSPECIFIED";
    case SourceInfo_Extension_Component.COMPONENT_PARSER:
      return "COMPONENT_PARSER";
    case SourceInfo_Extension_Component.COMPONENT_TYPE_CHECKER:
      return "COMPONENT_TYPE_CHECKER";
    case SourceInfo_Extension_Component.COMPONENT_RUNTIME:
      return "COMPONENT_RUNTIME";
    case SourceInfo_Extension_Component.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Version */
export interface SourceInfo_Extension_Version {
  /**
   * Major version changes indicate different required support level from
   * the required components.
   */
  major: Long;
  /**
   * Minor version changes must not change the observed behavior from
   * existing implementations, but may be provided informationally.
   */
  minor: Long;
}

export interface SourceInfo_PositionsEntry {
  key: Long;
  value: number;
}

export interface SourceInfo_MacroCallsEntry {
  key: Long;
  value: Expr | undefined;
}

/** A specific position in source. */
export interface SourcePosition {
  /** The soucre location name (e.g. file name). */
  location: string;
  /** The UTF-8 code unit offset. */
  offset: number;
  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line: number;
  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzero.
   */
  column: number;
}

function createBaseParsedExpr(): ParsedExpr {
  return { expr: undefined, sourceInfo: undefined };
}

export const ParsedExpr = {
  encode(message: ParsedExpr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParsedExpr {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.expr = Expr.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ParsedExpr {
    return {
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined,
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
    };
  },

  toJSON(message: ParsedExpr): unknown {
    const obj: any = {};
    if (message.expr !== undefined) {
      obj.expr = Expr.toJSON(message.expr);
    }
    if (message.sourceInfo !== undefined) {
      obj.sourceInfo = SourceInfo.toJSON(message.sourceInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<ParsedExpr>): ParsedExpr {
    return ParsedExpr.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ParsedExpr>): ParsedExpr {
    const message = createBaseParsedExpr();
    message.expr = (object.expr !== undefined && object.expr !== null) ? Expr.fromPartial(object.expr) : undefined;
    message.sourceInfo = (object.sourceInfo !== undefined && object.sourceInfo !== null)
      ? SourceInfo.fromPartial(object.sourceInfo)
      : undefined;
    return message;
  },
};

function createBaseExpr(): Expr {
  return { id: Long.ZERO, exprKind: undefined };
}

export const Expr = {
  encode(message: Expr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(16).int64(message.id);
    }
    switch (message.exprKind?.$case) {
      case "constExpr":
        Constant.encode(message.exprKind.constExpr, writer.uint32(26).fork()).ldelim();
        break;
      case "identExpr":
        Expr_Ident.encode(message.exprKind.identExpr, writer.uint32(34).fork()).ldelim();
        break;
      case "selectExpr":
        Expr_Select.encode(message.exprKind.selectExpr, writer.uint32(42).fork()).ldelim();
        break;
      case "callExpr":
        Expr_Call.encode(message.exprKind.callExpr, writer.uint32(50).fork()).ldelim();
        break;
      case "listExpr":
        Expr_CreateList.encode(message.exprKind.listExpr, writer.uint32(58).fork()).ldelim();
        break;
      case "structExpr":
        Expr_CreateStruct.encode(message.exprKind.structExpr, writer.uint32(66).fork()).ldelim();
        break;
      case "comprehensionExpr":
        Expr_Comprehension.encode(message.exprKind.comprehensionExpr, writer.uint32(74).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.id = reader.int64() as Long;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.exprKind = { $case: "constExpr", constExpr: Constant.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.exprKind = { $case: "identExpr", identExpr: Expr_Ident.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exprKind = { $case: "selectExpr", selectExpr: Expr_Select.decode(reader, reader.uint32()) };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.exprKind = { $case: "callExpr", callExpr: Expr_Call.decode(reader, reader.uint32()) };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.exprKind = { $case: "listExpr", listExpr: Expr_CreateList.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.exprKind = { $case: "structExpr", structExpr: Expr_CreateStruct.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.exprKind = {
            $case: "comprehensionExpr",
            comprehensionExpr: Expr_Comprehension.decode(reader, reader.uint32()),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      exprKind: isSet(object.constExpr)
        ? { $case: "constExpr", constExpr: Constant.fromJSON(object.constExpr) }
        : isSet(object.identExpr)
        ? { $case: "identExpr", identExpr: Expr_Ident.fromJSON(object.identExpr) }
        : isSet(object.selectExpr)
        ? { $case: "selectExpr", selectExpr: Expr_Select.fromJSON(object.selectExpr) }
        : isSet(object.callExpr)
        ? { $case: "callExpr", callExpr: Expr_Call.fromJSON(object.callExpr) }
        : isSet(object.listExpr)
        ? { $case: "listExpr", listExpr: Expr_CreateList.fromJSON(object.listExpr) }
        : isSet(object.structExpr)
        ? { $case: "structExpr", structExpr: Expr_CreateStruct.fromJSON(object.structExpr) }
        : isSet(object.comprehensionExpr)
        ? { $case: "comprehensionExpr", comprehensionExpr: Expr_Comprehension.fromJSON(object.comprehensionExpr) }
        : undefined,
    };
  },

  toJSON(message: Expr): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.exprKind?.$case === "constExpr") {
      obj.constExpr = Constant.toJSON(message.exprKind.constExpr);
    }
    if (message.exprKind?.$case === "identExpr") {
      obj.identExpr = Expr_Ident.toJSON(message.exprKind.identExpr);
    }
    if (message.exprKind?.$case === "selectExpr") {
      obj.selectExpr = Expr_Select.toJSON(message.exprKind.selectExpr);
    }
    if (message.exprKind?.$case === "callExpr") {
      obj.callExpr = Expr_Call.toJSON(message.exprKind.callExpr);
    }
    if (message.exprKind?.$case === "listExpr") {
      obj.listExpr = Expr_CreateList.toJSON(message.exprKind.listExpr);
    }
    if (message.exprKind?.$case === "structExpr") {
      obj.structExpr = Expr_CreateStruct.toJSON(message.exprKind.structExpr);
    }
    if (message.exprKind?.$case === "comprehensionExpr") {
      obj.comprehensionExpr = Expr_Comprehension.toJSON(message.exprKind.comprehensionExpr);
    }
    return obj;
  },

  create(base?: DeepPartial<Expr>): Expr {
    return Expr.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr>): Expr {
    const message = createBaseExpr();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    if (
      object.exprKind?.$case === "constExpr" &&
      object.exprKind?.constExpr !== undefined &&
      object.exprKind?.constExpr !== null
    ) {
      message.exprKind = { $case: "constExpr", constExpr: Constant.fromPartial(object.exprKind.constExpr) };
    }
    if (
      object.exprKind?.$case === "identExpr" &&
      object.exprKind?.identExpr !== undefined &&
      object.exprKind?.identExpr !== null
    ) {
      message.exprKind = { $case: "identExpr", identExpr: Expr_Ident.fromPartial(object.exprKind.identExpr) };
    }
    if (
      object.exprKind?.$case === "selectExpr" &&
      object.exprKind?.selectExpr !== undefined &&
      object.exprKind?.selectExpr !== null
    ) {
      message.exprKind = { $case: "selectExpr", selectExpr: Expr_Select.fromPartial(object.exprKind.selectExpr) };
    }
    if (
      object.exprKind?.$case === "callExpr" &&
      object.exprKind?.callExpr !== undefined &&
      object.exprKind?.callExpr !== null
    ) {
      message.exprKind = { $case: "callExpr", callExpr: Expr_Call.fromPartial(object.exprKind.callExpr) };
    }
    if (
      object.exprKind?.$case === "listExpr" &&
      object.exprKind?.listExpr !== undefined &&
      object.exprKind?.listExpr !== null
    ) {
      message.exprKind = { $case: "listExpr", listExpr: Expr_CreateList.fromPartial(object.exprKind.listExpr) };
    }
    if (
      object.exprKind?.$case === "structExpr" &&
      object.exprKind?.structExpr !== undefined &&
      object.exprKind?.structExpr !== null
    ) {
      message.exprKind = { $case: "structExpr", structExpr: Expr_CreateStruct.fromPartial(object.exprKind.structExpr) };
    }
    if (
      object.exprKind?.$case === "comprehensionExpr" &&
      object.exprKind?.comprehensionExpr !== undefined &&
      object.exprKind?.comprehensionExpr !== null
    ) {
      message.exprKind = {
        $case: "comprehensionExpr",
        comprehensionExpr: Expr_Comprehension.fromPartial(object.exprKind.comprehensionExpr),
      };
    }
    return message;
  },
};

function createBaseExpr_Ident(): Expr_Ident {
  return { name: "" };
}

export const Expr_Ident = {
  encode(message: Expr_Ident, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Ident {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Ident();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr_Ident {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: Expr_Ident): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<Expr_Ident>): Expr_Ident {
    return Expr_Ident.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr_Ident>): Expr_Ident {
    const message = createBaseExpr_Ident();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseExpr_Select(): Expr_Select {
  return { operand: undefined, field: "", testOnly: false };
}

export const Expr_Select = {
  encode(message: Expr_Select, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operand !== undefined) {
      Expr.encode(message.operand, writer.uint32(10).fork()).ldelim();
    }
    if (message.field !== "") {
      writer.uint32(18).string(message.field);
    }
    if (message.testOnly === true) {
      writer.uint32(24).bool(message.testOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Select {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Select();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operand = Expr.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.field = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.testOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr_Select {
    return {
      operand: isSet(object.operand) ? Expr.fromJSON(object.operand) : undefined,
      field: isSet(object.field) ? String(object.field) : "",
      testOnly: isSet(object.testOnly) ? Boolean(object.testOnly) : false,
    };
  },

  toJSON(message: Expr_Select): unknown {
    const obj: any = {};
    if (message.operand !== undefined) {
      obj.operand = Expr.toJSON(message.operand);
    }
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.testOnly === true) {
      obj.testOnly = message.testOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<Expr_Select>): Expr_Select {
    return Expr_Select.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr_Select>): Expr_Select {
    const message = createBaseExpr_Select();
    message.operand = (object.operand !== undefined && object.operand !== null)
      ? Expr.fromPartial(object.operand)
      : undefined;
    message.field = object.field ?? "";
    message.testOnly = object.testOnly ?? false;
    return message;
  },
};

function createBaseExpr_Call(): Expr_Call {
  return { target: undefined, function: "", args: [] };
}

export const Expr_Call = {
  encode(message: Expr_Call, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== undefined) {
      Expr.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.args) {
      Expr.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Call {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Call();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.target = Expr.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.function = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.args.push(Expr.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr_Call {
    return {
      target: isSet(object.target) ? Expr.fromJSON(object.target) : undefined,
      function: isSet(object.function) ? String(object.function) : "",
      args: Array.isArray(object?.args) ? object.args.map((e: any) => Expr.fromJSON(e)) : [],
    };
  },

  toJSON(message: Expr_Call): unknown {
    const obj: any = {};
    if (message.target !== undefined) {
      obj.target = Expr.toJSON(message.target);
    }
    if (message.function !== "") {
      obj.function = message.function;
    }
    if (message.args?.length) {
      obj.args = message.args.map((e) => Expr.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Expr_Call>): Expr_Call {
    return Expr_Call.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr_Call>): Expr_Call {
    const message = createBaseExpr_Call();
    message.target = (object.target !== undefined && object.target !== null)
      ? Expr.fromPartial(object.target)
      : undefined;
    message.function = object.function ?? "";
    message.args = object.args?.map((e) => Expr.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpr_CreateList(): Expr_CreateList {
  return { elements: [], optionalIndices: [] };
}

export const Expr_CreateList = {
  encode(message: Expr_CreateList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.elements) {
      Expr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.optionalIndices) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.elements.push(Expr.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag === 16) {
            message.optionalIndices.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.optionalIndices.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr_CreateList {
    return {
      elements: Array.isArray(object?.elements) ? object.elements.map((e: any) => Expr.fromJSON(e)) : [],
      optionalIndices: Array.isArray(object?.optionalIndices) ? object.optionalIndices.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Expr_CreateList): unknown {
    const obj: any = {};
    if (message.elements?.length) {
      obj.elements = message.elements.map((e) => Expr.toJSON(e));
    }
    if (message.optionalIndices?.length) {
      obj.optionalIndices = message.optionalIndices.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Expr_CreateList>): Expr_CreateList {
    return Expr_CreateList.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr_CreateList>): Expr_CreateList {
    const message = createBaseExpr_CreateList();
    message.elements = object.elements?.map((e) => Expr.fromPartial(e)) || [];
    message.optionalIndices = object.optionalIndices?.map((e) => e) || [];
    return message;
  },
};

function createBaseExpr_CreateStruct(): Expr_CreateStruct {
  return { messageName: "", entries: [] };
}

export const Expr_CreateStruct = {
  encode(message: Expr_CreateStruct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    for (const v of message.entries) {
      Expr_CreateStruct_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messageName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.entries.push(Expr_CreateStruct_Entry.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr_CreateStruct {
    return {
      messageName: isSet(object.messageName) ? String(object.messageName) : "",
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => Expr_CreateStruct_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Expr_CreateStruct): unknown {
    const obj: any = {};
    if (message.messageName !== "") {
      obj.messageName = message.messageName;
    }
    if (message.entries?.length) {
      obj.entries = message.entries.map((e) => Expr_CreateStruct_Entry.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Expr_CreateStruct>): Expr_CreateStruct {
    return Expr_CreateStruct.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct>): Expr_CreateStruct {
    const message = createBaseExpr_CreateStruct();
    message.messageName = object.messageName ?? "";
    message.entries = object.entries?.map((e) => Expr_CreateStruct_Entry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpr_CreateStruct_Entry(): Expr_CreateStruct_Entry {
  return { id: Long.ZERO, keyKind: undefined, value: undefined, optionalEntry: false };
}

export const Expr_CreateStruct_Entry = {
  encode(message: Expr_CreateStruct_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }
    switch (message.keyKind?.$case) {
      case "fieldKey":
        writer.uint32(18).string(message.keyKind.fieldKey);
        break;
      case "mapKey":
        Expr.encode(message.keyKind.mapKey, writer.uint32(26).fork()).ldelim();
        break;
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    if (message.optionalEntry === true) {
      writer.uint32(40).bool(message.optionalEntry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_CreateStruct_Entry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keyKind = { $case: "fieldKey", fieldKey: reader.string() };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.keyKind = { $case: "mapKey", mapKey: Expr.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = Expr.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.optionalEntry = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr_CreateStruct_Entry {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      keyKind: isSet(object.fieldKey)
        ? { $case: "fieldKey", fieldKey: String(object.fieldKey) }
        : isSet(object.mapKey)
        ? { $case: "mapKey", mapKey: Expr.fromJSON(object.mapKey) }
        : undefined,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined,
      optionalEntry: isSet(object.optionalEntry) ? Boolean(object.optionalEntry) : false,
    };
  },

  toJSON(message: Expr_CreateStruct_Entry): unknown {
    const obj: any = {};
    if (!message.id.isZero()) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.keyKind?.$case === "fieldKey") {
      obj.fieldKey = message.keyKind.fieldKey;
    }
    if (message.keyKind?.$case === "mapKey") {
      obj.mapKey = Expr.toJSON(message.keyKind.mapKey);
    }
    if (message.value !== undefined) {
      obj.value = Expr.toJSON(message.value);
    }
    if (message.optionalEntry === true) {
      obj.optionalEntry = message.optionalEntry;
    }
    return obj;
  },

  create(base?: DeepPartial<Expr_CreateStruct_Entry>): Expr_CreateStruct_Entry {
    return Expr_CreateStruct_Entry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct_Entry>): Expr_CreateStruct_Entry {
    const message = createBaseExpr_CreateStruct_Entry();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    if (
      object.keyKind?.$case === "fieldKey" &&
      object.keyKind?.fieldKey !== undefined &&
      object.keyKind?.fieldKey !== null
    ) {
      message.keyKind = { $case: "fieldKey", fieldKey: object.keyKind.fieldKey };
    }
    if (object.keyKind?.$case === "mapKey" && object.keyKind?.mapKey !== undefined && object.keyKind?.mapKey !== null) {
      message.keyKind = { $case: "mapKey", mapKey: Expr.fromPartial(object.keyKind.mapKey) };
    }
    message.value = (object.value !== undefined && object.value !== null) ? Expr.fromPartial(object.value) : undefined;
    message.optionalEntry = object.optionalEntry ?? false;
    return message;
  },
};

function createBaseExpr_Comprehension(): Expr_Comprehension {
  return {
    iterVar: "",
    iterVar2: "",
    iterRange: undefined,
    accuVar: "",
    accuInit: undefined,
    loopCondition: undefined,
    loopStep: undefined,
    result: undefined,
  };
}

export const Expr_Comprehension = {
  encode(message: Expr_Comprehension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iterVar !== "") {
      writer.uint32(10).string(message.iterVar);
    }
    if (message.iterVar2 !== "") {
      writer.uint32(66).string(message.iterVar2);
    }
    if (message.iterRange !== undefined) {
      Expr.encode(message.iterRange, writer.uint32(18).fork()).ldelim();
    }
    if (message.accuVar !== "") {
      writer.uint32(26).string(message.accuVar);
    }
    if (message.accuInit !== undefined) {
      Expr.encode(message.accuInit, writer.uint32(34).fork()).ldelim();
    }
    if (message.loopCondition !== undefined) {
      Expr.encode(message.loopCondition, writer.uint32(42).fork()).ldelim();
    }
    if (message.loopStep !== undefined) {
      Expr.encode(message.loopStep, writer.uint32(50).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Expr.encode(message.result, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expr_Comprehension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Comprehension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.iterVar = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.iterVar2 = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.iterRange = Expr.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accuVar = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accuInit = Expr.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.loopCondition = Expr.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.loopStep = Expr.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.result = Expr.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expr_Comprehension {
    return {
      iterVar: isSet(object.iterVar) ? String(object.iterVar) : "",
      iterVar2: isSet(object.iterVar2) ? String(object.iterVar2) : "",
      iterRange: isSet(object.iterRange) ? Expr.fromJSON(object.iterRange) : undefined,
      accuVar: isSet(object.accuVar) ? String(object.accuVar) : "",
      accuInit: isSet(object.accuInit) ? Expr.fromJSON(object.accuInit) : undefined,
      loopCondition: isSet(object.loopCondition) ? Expr.fromJSON(object.loopCondition) : undefined,
      loopStep: isSet(object.loopStep) ? Expr.fromJSON(object.loopStep) : undefined,
      result: isSet(object.result) ? Expr.fromJSON(object.result) : undefined,
    };
  },

  toJSON(message: Expr_Comprehension): unknown {
    const obj: any = {};
    if (message.iterVar !== "") {
      obj.iterVar = message.iterVar;
    }
    if (message.iterVar2 !== "") {
      obj.iterVar2 = message.iterVar2;
    }
    if (message.iterRange !== undefined) {
      obj.iterRange = Expr.toJSON(message.iterRange);
    }
    if (message.accuVar !== "") {
      obj.accuVar = message.accuVar;
    }
    if (message.accuInit !== undefined) {
      obj.accuInit = Expr.toJSON(message.accuInit);
    }
    if (message.loopCondition !== undefined) {
      obj.loopCondition = Expr.toJSON(message.loopCondition);
    }
    if (message.loopStep !== undefined) {
      obj.loopStep = Expr.toJSON(message.loopStep);
    }
    if (message.result !== undefined) {
      obj.result = Expr.toJSON(message.result);
    }
    return obj;
  },

  create(base?: DeepPartial<Expr_Comprehension>): Expr_Comprehension {
    return Expr_Comprehension.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expr_Comprehension>): Expr_Comprehension {
    const message = createBaseExpr_Comprehension();
    message.iterVar = object.iterVar ?? "";
    message.iterVar2 = object.iterVar2 ?? "";
    message.iterRange = (object.iterRange !== undefined && object.iterRange !== null)
      ? Expr.fromPartial(object.iterRange)
      : undefined;
    message.accuVar = object.accuVar ?? "";
    message.accuInit = (object.accuInit !== undefined && object.accuInit !== null)
      ? Expr.fromPartial(object.accuInit)
      : undefined;
    message.loopCondition = (object.loopCondition !== undefined && object.loopCondition !== null)
      ? Expr.fromPartial(object.loopCondition)
      : undefined;
    message.loopStep = (object.loopStep !== undefined && object.loopStep !== null)
      ? Expr.fromPartial(object.loopStep)
      : undefined;
    message.result = (object.result !== undefined && object.result !== null)
      ? Expr.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseConstant(): Constant {
  return { constantKind: undefined };
}

export const Constant = {
  encode(message: Constant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.constantKind?.$case) {
      case "nullValue":
        writer.uint32(8).int32(message.constantKind.nullValue);
        break;
      case "boolValue":
        writer.uint32(16).bool(message.constantKind.boolValue);
        break;
      case "int64Value":
        writer.uint32(24).int64(message.constantKind.int64Value);
        break;
      case "uint64Value":
        writer.uint32(32).uint64(message.constantKind.uint64Value);
        break;
      case "doubleValue":
        writer.uint32(41).double(message.constantKind.doubleValue);
        break;
      case "stringValue":
        writer.uint32(50).string(message.constantKind.stringValue);
        break;
      case "bytesValue":
        writer.uint32(58).bytes(message.constantKind.bytesValue);
        break;
      case "durationValue":
        Duration.encode(message.constantKind.durationValue, writer.uint32(66).fork()).ldelim();
        break;
      case "timestampValue":
        Timestamp.encode(toTimestamp(message.constantKind.timestampValue), writer.uint32(74).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Constant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.constantKind = { $case: "nullValue", nullValue: reader.int32() as any };
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.constantKind = { $case: "boolValue", boolValue: reader.bool() };
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.constantKind = { $case: "int64Value", int64Value: reader.int64() as Long };
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.constantKind = { $case: "uint64Value", uint64Value: reader.uint64() as Long };
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.constantKind = { $case: "doubleValue", doubleValue: reader.double() };
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.constantKind = { $case: "stringValue", stringValue: reader.string() };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.constantKind = { $case: "bytesValue", bytesValue: reader.bytes() as Buffer };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.constantKind = { $case: "durationValue", durationValue: Duration.decode(reader, reader.uint32()) };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.constantKind = {
            $case: "timestampValue",
            timestampValue: fromTimestamp(Timestamp.decode(reader, reader.uint32())),
          };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Constant {
    return {
      constantKind: isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.boolValue)
        ? { $case: "boolValue", boolValue: Boolean(object.boolValue) }
        : isSet(object.int64Value)
        ? { $case: "int64Value", int64Value: Long.fromValue(object.int64Value) }
        : isSet(object.uint64Value)
        ? { $case: "uint64Value", uint64Value: Long.fromValue(object.uint64Value) }
        : isSet(object.doubleValue)
        ? { $case: "doubleValue", doubleValue: Number(object.doubleValue) }
        : isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: String(object.stringValue) }
        : isSet(object.bytesValue)
        ? { $case: "bytesValue", bytesValue: Buffer.from(bytesFromBase64(object.bytesValue)) }
        : isSet(object.durationValue)
        ? { $case: "durationValue", durationValue: Duration.fromJSON(object.durationValue) }
        : isSet(object.timestampValue)
        ? { $case: "timestampValue", timestampValue: fromJsonTimestamp(object.timestampValue) }
        : undefined,
    };
  },

  toJSON(message: Constant): unknown {
    const obj: any = {};
    if (message.constantKind?.$case === "nullValue") {
      obj.nullValue = nullValueToJSON(message.constantKind.nullValue);
    }
    if (message.constantKind?.$case === "boolValue") {
      obj.boolValue = message.constantKind.boolValue;
    }
    if (message.constantKind?.$case === "int64Value") {
      obj.int64Value = (message.constantKind.int64Value || Long.ZERO).toString();
    }
    if (message.constantKind?.$case === "uint64Value") {
      obj.uint64Value = (message.constantKind.uint64Value || Long.UZERO).toString();
    }
    if (message.constantKind?.$case === "doubleValue") {
      obj.doubleValue = message.constantKind.doubleValue;
    }
    if (message.constantKind?.$case === "stringValue") {
      obj.stringValue = message.constantKind.stringValue;
    }
    if (message.constantKind?.$case === "bytesValue") {
      obj.bytesValue = base64FromBytes(message.constantKind.bytesValue);
    }
    if (message.constantKind?.$case === "durationValue") {
      obj.durationValue = Duration.toJSON(message.constantKind.durationValue);
    }
    if (message.constantKind?.$case === "timestampValue") {
      obj.timestampValue = message.constantKind.timestampValue.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Constant>): Constant {
    return Constant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Constant>): Constant {
    const message = createBaseConstant();
    if (
      object.constantKind?.$case === "nullValue" &&
      object.constantKind?.nullValue !== undefined &&
      object.constantKind?.nullValue !== null
    ) {
      message.constantKind = { $case: "nullValue", nullValue: object.constantKind.nullValue };
    }
    if (
      object.constantKind?.$case === "boolValue" &&
      object.constantKind?.boolValue !== undefined &&
      object.constantKind?.boolValue !== null
    ) {
      message.constantKind = { $case: "boolValue", boolValue: object.constantKind.boolValue };
    }
    if (
      object.constantKind?.$case === "int64Value" &&
      object.constantKind?.int64Value !== undefined &&
      object.constantKind?.int64Value !== null
    ) {
      message.constantKind = { $case: "int64Value", int64Value: Long.fromValue(object.constantKind.int64Value) };
    }
    if (
      object.constantKind?.$case === "uint64Value" &&
      object.constantKind?.uint64Value !== undefined &&
      object.constantKind?.uint64Value !== null
    ) {
      message.constantKind = { $case: "uint64Value", uint64Value: Long.fromValue(object.constantKind.uint64Value) };
    }
    if (
      object.constantKind?.$case === "doubleValue" &&
      object.constantKind?.doubleValue !== undefined &&
      object.constantKind?.doubleValue !== null
    ) {
      message.constantKind = { $case: "doubleValue", doubleValue: object.constantKind.doubleValue };
    }
    if (
      object.constantKind?.$case === "stringValue" &&
      object.constantKind?.stringValue !== undefined &&
      object.constantKind?.stringValue !== null
    ) {
      message.constantKind = { $case: "stringValue", stringValue: object.constantKind.stringValue };
    }
    if (
      object.constantKind?.$case === "bytesValue" &&
      object.constantKind?.bytesValue !== undefined &&
      object.constantKind?.bytesValue !== null
    ) {
      message.constantKind = { $case: "bytesValue", bytesValue: object.constantKind.bytesValue };
    }
    if (
      object.constantKind?.$case === "durationValue" &&
      object.constantKind?.durationValue !== undefined &&
      object.constantKind?.durationValue !== null
    ) {
      message.constantKind = {
        $case: "durationValue",
        durationValue: Duration.fromPartial(object.constantKind.durationValue),
      };
    }
    if (
      object.constantKind?.$case === "timestampValue" &&
      object.constantKind?.timestampValue !== undefined &&
      object.constantKind?.timestampValue !== null
    ) {
      message.constantKind = { $case: "timestampValue", timestampValue: object.constantKind.timestampValue };
    }
    return message;
  },
};

function createBaseSourceInfo(): SourceInfo {
  return {
    syntaxVersion: "",
    location: "",
    lineOffsets: [],
    positions: new Map(),
    macroCalls: new Map(),
    extensions: [],
  };
}

export const SourceInfo = {
  encode(message: SourceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.syntaxVersion !== "") {
      writer.uint32(10).string(message.syntaxVersion);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }
    writer.uint32(26).fork();
    for (const v of message.lineOffsets) {
      writer.int32(v);
    }
    writer.ldelim();
    (message.positions).forEach((value, key) => {
      SourceInfo_PositionsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    (message.macroCalls).forEach((value, key) => {
      SourceInfo_MacroCallsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    for (const v of message.extensions) {
      SourceInfo_Extension.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.syntaxVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.location = reader.string();
          continue;
        case 3:
          if (tag === 24) {
            message.lineOffsets.push(reader.int32());

            continue;
          }

          if (tag === 26) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lineOffsets.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = SourceInfo_PositionsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.positions.set(entry4.key, entry4.value);
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = SourceInfo_MacroCallsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.macroCalls.set(entry5.key, entry5.value);
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.extensions.push(SourceInfo_Extension.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      syntaxVersion: isSet(object.syntaxVersion) ? String(object.syntaxVersion) : "",
      location: isSet(object.location) ? String(object.location) : "",
      lineOffsets: Array.isArray(object?.lineOffsets) ? object.lineOffsets.map((e: any) => Number(e)) : [],
      positions: isObject(object.positions)
        ? Object.entries(object.positions).reduce<Map<Long, number>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Number(value));
          return acc;
        }, new Map())
        : new Map(),
      macroCalls: isObject(object.macroCalls)
        ? Object.entries(object.macroCalls).reduce<Map<Long, Expr>>((acc, [key, value]) => {
          acc.set(Long.fromValue(key), Expr.fromJSON(value));
          return acc;
        }, new Map())
        : new Map(),
      extensions: Array.isArray(object?.extensions)
        ? object.extensions.map((e: any) => SourceInfo_Extension.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    if (message.syntaxVersion !== "") {
      obj.syntaxVersion = message.syntaxVersion;
    }
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.lineOffsets?.length) {
      obj.lineOffsets = message.lineOffsets.map((e) => Math.round(e));
    }
    if (message.positions?.size) {
      obj.positions = {};
      message.positions.forEach((v, k) => {
        obj.positions[longToNumber(k)] = Math.round(v);
      });
    }
    if (message.macroCalls?.size) {
      obj.macroCalls = {};
      message.macroCalls.forEach((v, k) => {
        obj.macroCalls[longToNumber(k)] = Expr.toJSON(v);
      });
    }
    if (message.extensions?.length) {
      obj.extensions = message.extensions.map((e) => SourceInfo_Extension.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SourceInfo>): SourceInfo {
    return SourceInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = createBaseSourceInfo();
    message.syntaxVersion = object.syntaxVersion ?? "";
    message.location = object.location ?? "";
    message.lineOffsets = object.lineOffsets?.map((e) => e) || [];
    message.positions = (() => {
      const m = new Map();
      (object.positions as Map<Long, number> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Number(value));
        }
      });
      return m;
    })();
    message.macroCalls = (() => {
      const m = new Map();
      (object.macroCalls as Map<Long, Expr> ?? new Map()).forEach((value, key) => {
        if (value !== undefined) {
          m.set(key, Expr.fromPartial(value));
        }
      });
      return m;
    })();
    message.extensions = object.extensions?.map((e) => SourceInfo_Extension.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSourceInfo_Extension(): SourceInfo_Extension {
  return { id: "", affectedComponents: [], version: undefined };
}

export const SourceInfo_Extension = {
  encode(message: SourceInfo_Extension, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    writer.uint32(18).fork();
    for (const v of message.affectedComponents) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.version !== undefined) {
      SourceInfo_Extension_Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_Extension {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_Extension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag === 16) {
            message.affectedComponents.push(reader.int32() as any);

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.affectedComponents.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = SourceInfo_Extension_Version.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceInfo_Extension {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      affectedComponents: Array.isArray(object?.affectedComponents)
        ? object.affectedComponents.map((e: any) => sourceInfo_Extension_ComponentFromJSON(e))
        : [],
      version: isSet(object.version) ? SourceInfo_Extension_Version.fromJSON(object.version) : undefined,
    };
  },

  toJSON(message: SourceInfo_Extension): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.affectedComponents?.length) {
      obj.affectedComponents = message.affectedComponents.map((e) => sourceInfo_Extension_ComponentToJSON(e));
    }
    if (message.version !== undefined) {
      obj.version = SourceInfo_Extension_Version.toJSON(message.version);
    }
    return obj;
  },

  create(base?: DeepPartial<SourceInfo_Extension>): SourceInfo_Extension {
    return SourceInfo_Extension.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourceInfo_Extension>): SourceInfo_Extension {
    const message = createBaseSourceInfo_Extension();
    message.id = object.id ?? "";
    message.affectedComponents = object.affectedComponents?.map((e) => e) || [];
    message.version = (object.version !== undefined && object.version !== null)
      ? SourceInfo_Extension_Version.fromPartial(object.version)
      : undefined;
    return message;
  },
};

function createBaseSourceInfo_Extension_Version(): SourceInfo_Extension_Version {
  return { major: Long.ZERO, minor: Long.ZERO };
}

export const SourceInfo_Extension_Version = {
  encode(message: SourceInfo_Extension_Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.major.isZero()) {
      writer.uint32(8).int64(message.major);
    }
    if (!message.minor.isZero()) {
      writer.uint32(16).int64(message.minor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_Extension_Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_Extension_Version();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.major = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.minor = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceInfo_Extension_Version {
    return {
      major: isSet(object.major) ? Long.fromValue(object.major) : Long.ZERO,
      minor: isSet(object.minor) ? Long.fromValue(object.minor) : Long.ZERO,
    };
  },

  toJSON(message: SourceInfo_Extension_Version): unknown {
    const obj: any = {};
    if (!message.major.isZero()) {
      obj.major = (message.major || Long.ZERO).toString();
    }
    if (!message.minor.isZero()) {
      obj.minor = (message.minor || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<SourceInfo_Extension_Version>): SourceInfo_Extension_Version {
    return SourceInfo_Extension_Version.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourceInfo_Extension_Version>): SourceInfo_Extension_Version {
    const message = createBaseSourceInfo_Extension_Version();
    message.major = (object.major !== undefined && object.major !== null) ? Long.fromValue(object.major) : Long.ZERO;
    message.minor = (object.minor !== undefined && object.minor !== null) ? Long.fromValue(object.minor) : Long.ZERO;
    return message;
  },
};

function createBaseSourceInfo_PositionsEntry(): SourceInfo_PositionsEntry {
  return { key: Long.ZERO, value: 0 };
}

export const SourceInfo_PositionsEntry = {
  encode(message: SourceInfo_PositionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_PositionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_PositionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceInfo_PositionsEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: SourceInfo_PositionsEntry): unknown {
    const obj: any = {};
    if (!message.key.isZero()) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<SourceInfo_PositionsEntry>): SourceInfo_PositionsEntry {
    return SourceInfo_PositionsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourceInfo_PositionsEntry>): SourceInfo_PositionsEntry {
    const message = createBaseSourceInfo_PositionsEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSourceInfo_MacroCallsEntry(): SourceInfo_MacroCallsEntry {
  return { key: Long.ZERO, value: undefined };
}

export const SourceInfo_MacroCallsEntry = {
  encode(message: SourceInfo_MacroCallsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.key.isZero()) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo_MacroCallsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_MacroCallsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Expr.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourceInfo_MacroCallsEntry {
    return {
      key: isSet(object.key) ? Long.fromValue(object.key) : Long.ZERO,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SourceInfo_MacroCallsEntry): unknown {
    const obj: any = {};
    if (!message.key.isZero()) {
      obj.key = (message.key || Long.ZERO).toString();
    }
    if (message.value !== undefined) {
      obj.value = Expr.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<SourceInfo_MacroCallsEntry>): SourceInfo_MacroCallsEntry {
    return SourceInfo_MacroCallsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourceInfo_MacroCallsEntry>): SourceInfo_MacroCallsEntry {
    const message = createBaseSourceInfo_MacroCallsEntry();
    message.key = (object.key !== undefined && object.key !== null) ? Long.fromValue(object.key) : Long.ZERO;
    message.value = (object.value !== undefined && object.value !== null) ? Expr.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseSourcePosition(): SourcePosition {
  return { location: "", offset: 0, line: 0, column: 0 };
}

export const SourcePosition = {
  encode(message: SourcePosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }
    if (message.line !== 0) {
      writer.uint32(24).int32(message.line);
    }
    if (message.column !== 0) {
      writer.uint32(32).int32(message.column);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourcePosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourcePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.line = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.column = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SourcePosition {
    return {
      location: isSet(object.location) ? String(object.location) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      line: isSet(object.line) ? Number(object.line) : 0,
      column: isSet(object.column) ? Number(object.column) : 0,
    };
  },

  toJSON(message: SourcePosition): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.offset !== 0) {
      obj.offset = Math.round(message.offset);
    }
    if (message.line !== 0) {
      obj.line = Math.round(message.line);
    }
    if (message.column !== 0) {
      obj.column = Math.round(message.column);
    }
    return obj;
  },

  create(base?: DeepPartial<SourcePosition>): SourcePosition {
    return SourcePosition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SourcePosition>): SourcePosition {
    const message = createBaseSourcePosition();
    message.location = object.location ?? "";
    message.offset = object.offset ?? 0;
    message.line = object.line ?? 0;
    message.column = object.column ?? 0;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
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
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
