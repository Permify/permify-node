/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "base.v1";

/** Tuple */
export interface Tuple {
  entity: Entity | undefined;
  relation: string;
  subject: Subject | undefined;
}

/** Tuples */
export interface Tuples {
  tuples: Tuple[];
}

/** Entity */
export interface Entity {
  type: string;
  id: string;
}

export interface EntityAndRelation {
  entity: Entity | undefined;
  relation: string;
}

/** Subject */
export interface Subject {
  type: string;
  id: string;
  relation: string;
}

/** TupleFilter is used to filter tuples */
export interface TupleFilter {
  entity: EntityFilter | undefined;
  relation: string;
  subject: SubjectFilter | undefined;
}

/** EntityAndRelationFilter is used to filter entities and relations */
export interface EntityAndRelationFilter {
  entity: EntityFilter | undefined;
  relation: string;
}

/** EntityFilter is used to filter entities */
export interface EntityFilter {
  type: string;
  ids: string[];
}

/** SubjectFilter is used to filter subjects */
export interface SubjectFilter {
  type: string;
  ids: string[];
  relation: string;
}

/** ExpandTreeNode */
export interface ExpandTreeNode {
  operation: ExpandTreeNode_Operation;
  children: Expand[];
}

/** Operation */
export enum ExpandTreeNode_Operation {
  OPERATION_UNSPECIFIED = 0,
  OPERATION_UNION = 1,
  OPERATION_INTERSECTION = 2,
  UNRECOGNIZED = -1,
}

export function expandTreeNode_OperationFromJSON(object: any): ExpandTreeNode_Operation {
  switch (object) {
    case 0:
    case "OPERATION_UNSPECIFIED":
      return ExpandTreeNode_Operation.OPERATION_UNSPECIFIED;
    case 1:
    case "OPERATION_UNION":
      return ExpandTreeNode_Operation.OPERATION_UNION;
    case 2:
    case "OPERATION_INTERSECTION":
      return ExpandTreeNode_Operation.OPERATION_INTERSECTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExpandTreeNode_Operation.UNRECOGNIZED;
  }
}

export function expandTreeNode_OperationToJSON(object: ExpandTreeNode_Operation): string {
  switch (object) {
    case ExpandTreeNode_Operation.OPERATION_UNSPECIFIED:
      return "OPERATION_UNSPECIFIED";
    case ExpandTreeNode_Operation.OPERATION_UNION:
      return "OPERATION_UNION";
    case ExpandTreeNode_Operation.OPERATION_INTERSECTION:
      return "OPERATION_INTERSECTION";
    case ExpandTreeNode_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Expand */
export interface Expand {
  node?: { $case: "expand"; expand: ExpandTreeNode } | { $case: "leaf"; leaf: Result };
}

/** Result */
export interface Result {
  target: EntityAndRelation | undefined;
  exclusion: boolean;
  subjects: Subject[];
}

function createBaseTuple(): Tuple {
  return { entity: undefined, relation: "", subject: undefined };
}

export const Tuple = {
  encode(message: Tuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    if (message.relation !== "") {
      writer.uint32(18).string(message.relation);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        case 2:
          message.relation = reader.string();
          break;
        case 3:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tuple {
    return {
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      relation: isSet(object.relation) ? String(object.relation) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: Tuple): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.relation !== undefined && (obj.relation = message.relation);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Tuple>): Tuple {
    const message = createBaseTuple();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.relation = object.relation ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseTuples(): Tuples {
  return { tuples: [] };
}

export const Tuples = {
  encode(message: Tuples, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tuples) {
      Tuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tuples {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTuples();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tuples.push(Tuple.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tuples {
    return { tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [] };
  },

  toJSON(message: Tuples): unknown {
    const obj: any = {};
    if (message.tuples) {
      obj.tuples = message.tuples.map((e) => e ? Tuple.toJSON(e) : undefined);
    } else {
      obj.tuples = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Tuples>): Tuples {
    const message = createBaseTuples();
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntity(): Entity {
  return { type: "", id: "" };
}

export const Entity = {
  encode(message: Entity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Entity {
    return { type: isSet(object.type) ? String(object.type) : "", id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<Entity>): Entity {
    const message = createBaseEntity();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEntityAndRelation(): EntityAndRelation {
  return { entity: undefined, relation: "" };
}

export const EntityAndRelation = {
  encode(message: EntityAndRelation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    if (message.relation !== "") {
      writer.uint32(18).string(message.relation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityAndRelation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityAndRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        case 2:
          message.relation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityAndRelation {
    return {
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      relation: isSet(object.relation) ? String(object.relation) : "",
    };
  },

  toJSON(message: EntityAndRelation): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.relation !== undefined && (obj.relation = message.relation);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityAndRelation>): EntityAndRelation {
    const message = createBaseEntityAndRelation();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseSubject(): Subject {
  return { type: "", id: "", relation: "" };
}

export const Subject = {
  encode(message: Subject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.relation !== "") {
      writer.uint32(26).string(message.relation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.relation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Subject {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      id: isSet(object.id) ? String(object.id) : "",
      relation: isSet(object.relation) ? String(object.relation) : "",
    };
  },

  toJSON(message: Subject): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.id !== undefined && (obj.id = message.id);
    message.relation !== undefined && (obj.relation = message.relation);
    return obj;
  },

  fromPartial(object: DeepPartial<Subject>): Subject {
    const message = createBaseSubject();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseTupleFilter(): TupleFilter {
  return { entity: undefined, relation: "", subject: undefined };
}

export const TupleFilter = {
  encode(message: TupleFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      EntityFilter.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    if (message.relation !== "") {
      writer.uint32(18).string(message.relation);
    }
    if (message.subject !== undefined) {
      SubjectFilter.encode(message.subject, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TupleFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entity = EntityFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.relation = reader.string();
          break;
        case 3:
          message.subject = SubjectFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TupleFilter {
    return {
      entity: isSet(object.entity) ? EntityFilter.fromJSON(object.entity) : undefined,
      relation: isSet(object.relation) ? String(object.relation) : "",
      subject: isSet(object.subject) ? SubjectFilter.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: TupleFilter): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? EntityFilter.toJSON(message.entity) : undefined);
    message.relation !== undefined && (obj.relation = message.relation);
    message.subject !== undefined &&
      (obj.subject = message.subject ? SubjectFilter.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TupleFilter>): TupleFilter {
    const message = createBaseTupleFilter();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? EntityFilter.fromPartial(object.entity)
      : undefined;
    message.relation = object.relation ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? SubjectFilter.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBaseEntityAndRelationFilter(): EntityAndRelationFilter {
  return { entity: undefined, relation: "" };
}

export const EntityAndRelationFilter = {
  encode(message: EntityAndRelationFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      EntityFilter.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    if (message.relation !== "") {
      writer.uint32(18).string(message.relation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityAndRelationFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityAndRelationFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entity = EntityFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.relation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityAndRelationFilter {
    return {
      entity: isSet(object.entity) ? EntityFilter.fromJSON(object.entity) : undefined,
      relation: isSet(object.relation) ? String(object.relation) : "",
    };
  },

  toJSON(message: EntityAndRelationFilter): unknown {
    const obj: any = {};
    message.entity !== undefined && (obj.entity = message.entity ? EntityFilter.toJSON(message.entity) : undefined);
    message.relation !== undefined && (obj.relation = message.relation);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityAndRelationFilter>): EntityAndRelationFilter {
    const message = createBaseEntityAndRelationFilter();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? EntityFilter.fromPartial(object.entity)
      : undefined;
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseEntityFilter(): EntityFilter {
  return { type: "", ids: [] };
}

export const EntityFilter = {
  encode(message: EntityFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityFilter {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: EntityFilter): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EntityFilter>): EntityFilter {
    const message = createBaseEntityFilter();
    message.type = object.type ?? "";
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubjectFilter(): SubjectFilter {
  return { type: "", ids: [], relation: "" };
}

export const SubjectFilter = {
  encode(message: SubjectFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.ids) {
      writer.uint32(18).string(v!);
    }
    if (message.relation !== "") {
      writer.uint32(26).string(message.relation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubjectFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubjectFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.ids.push(reader.string());
          break;
        case 3:
          message.relation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubjectFilter {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [],
      relation: isSet(object.relation) ? String(object.relation) : "",
    };
  },

  toJSON(message: SubjectFilter): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.relation !== undefined && (obj.relation = message.relation);
    return obj;
  },

  fromPartial(object: DeepPartial<SubjectFilter>): SubjectFilter {
    const message = createBaseSubjectFilter();
    message.type = object.type ?? "";
    message.ids = object.ids?.map((e) => e) || [];
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseExpandTreeNode(): ExpandTreeNode {
  return { operation: 0, children: [] };
}

export const ExpandTreeNode = {
  encode(message: ExpandTreeNode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    for (const v of message.children) {
      Expand.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpandTreeNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpandTreeNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = reader.int32() as any;
          break;
        case 2:
          message.children.push(Expand.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExpandTreeNode {
    return {
      operation: isSet(object.operation) ? expandTreeNode_OperationFromJSON(object.operation) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Expand.fromJSON(e)) : [],
    };
  },

  toJSON(message: ExpandTreeNode): unknown {
    const obj: any = {};
    message.operation !== undefined && (obj.operation = expandTreeNode_OperationToJSON(message.operation));
    if (message.children) {
      obj.children = message.children.map((e) => e ? Expand.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ExpandTreeNode>): ExpandTreeNode {
    const message = createBaseExpandTreeNode();
    message.operation = object.operation ?? 0;
    message.children = object.children?.map((e) => Expand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpand(): Expand {
  return { node: undefined };
}

export const Expand = {
  encode(message: Expand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.node?.$case === "expand") {
      ExpandTreeNode.encode(message.node.expand, writer.uint32(10).fork()).ldelim();
    }
    if (message.node?.$case === "leaf") {
      Result.encode(message.node.leaf, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.node = { $case: "expand", expand: ExpandTreeNode.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.node = { $case: "leaf", leaf: Result.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expand {
    return {
      node: isSet(object.expand)
        ? { $case: "expand", expand: ExpandTreeNode.fromJSON(object.expand) }
        : isSet(object.leaf)
        ? { $case: "leaf", leaf: Result.fromJSON(object.leaf) }
        : undefined,
    };
  },

  toJSON(message: Expand): unknown {
    const obj: any = {};
    message.node?.$case === "expand" &&
      (obj.expand = message.node?.expand ? ExpandTreeNode.toJSON(message.node?.expand) : undefined);
    message.node?.$case === "leaf" && (obj.leaf = message.node?.leaf ? Result.toJSON(message.node?.leaf) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Expand>): Expand {
    const message = createBaseExpand();
    if (object.node?.$case === "expand" && object.node?.expand !== undefined && object.node?.expand !== null) {
      message.node = { $case: "expand", expand: ExpandTreeNode.fromPartial(object.node.expand) };
    }
    if (object.node?.$case === "leaf" && object.node?.leaf !== undefined && object.node?.leaf !== null) {
      message.node = { $case: "leaf", leaf: Result.fromPartial(object.node.leaf) };
    }
    return message;
  },
};

function createBaseResult(): Result {
  return { target: undefined, exclusion: false, subjects: [] };
}

export const Result = {
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.target !== undefined) {
      EntityAndRelation.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.exclusion === true) {
      writer.uint32(16).bool(message.exclusion);
    }
    for (const v of message.subjects) {
      Subject.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = EntityAndRelation.decode(reader, reader.uint32());
          break;
        case 2:
          message.exclusion = reader.bool();
          break;
        case 3:
          message.subjects.push(Subject.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Result {
    return {
      target: isSet(object.target) ? EntityAndRelation.fromJSON(object.target) : undefined,
      exclusion: isSet(object.exclusion) ? Boolean(object.exclusion) : false,
      subjects: Array.isArray(object?.subjects) ? object.subjects.map((e: any) => Subject.fromJSON(e)) : [],
    };
  },

  toJSON(message: Result): unknown {
    const obj: any = {};
    message.target !== undefined &&
      (obj.target = message.target ? EntityAndRelation.toJSON(message.target) : undefined);
    message.exclusion !== undefined && (obj.exclusion = message.exclusion);
    if (message.subjects) {
      obj.subjects = message.subjects.map((e) => e ? Subject.toJSON(e) : undefined);
    } else {
      obj.subjects = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Result>): Result {
    const message = createBaseResult();
    message.target = (object.target !== undefined && object.target !== null)
      ? EntityAndRelation.fromPartial(object.target)
      : undefined;
    message.exclusion = object.exclusion ?? false;
    message.subjects = object.subjects?.map((e) => Subject.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
