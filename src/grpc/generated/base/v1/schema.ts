/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "base.v1";

/** Child */
export interface Child {
  type?: { $case: "leaf"; leaf: Leaf } | { $case: "rewrite"; rewrite: Rewrite };
}

/** Leaf */
export interface Leaf {
  exclusion: boolean;
  type?: { $case: "computedUserSet"; computedUserSet: ComputedUserSet } | {
    $case: "tupleToUserSet";
    tupleToUserSet: TupleToUserSet;
  };
}

/** Rewrite */
export interface Rewrite {
  rewriteOperation: Rewrite_Operation;
  children: Child[];
}

/** Operation */
export enum Rewrite_Operation {
  OPERATION_UNSPECIFIED = 0,
  OPERATION_UNION = 1,
  OPERATION_INTERSECTION = 2,
  UNRECOGNIZED = -1,
}

export function rewrite_OperationFromJSON(object: any): Rewrite_Operation {
  switch (object) {
    case 0:
    case "OPERATION_UNSPECIFIED":
      return Rewrite_Operation.OPERATION_UNSPECIFIED;
    case 1:
    case "OPERATION_UNION":
      return Rewrite_Operation.OPERATION_UNION;
    case 2:
    case "OPERATION_INTERSECTION":
      return Rewrite_Operation.OPERATION_INTERSECTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Rewrite_Operation.UNRECOGNIZED;
  }
}

export function rewrite_OperationToJSON(object: Rewrite_Operation): string {
  switch (object) {
    case Rewrite_Operation.OPERATION_UNSPECIFIED:
      return "OPERATION_UNSPECIFIED";
    case Rewrite_Operation.OPERATION_UNION:
      return "OPERATION_UNION";
    case Rewrite_Operation.OPERATION_INTERSECTION:
      return "OPERATION_INTERSECTION";
    case Rewrite_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** IndexedSchema */
export interface IndexedSchema {
  entityDefinitions: { [key: string]: EntityDefinition };
  /** ["entity_name#relation_name"] => RelationDefinition */
  relationDefinitions: { [key: string]: RelationDefinition };
  /** ["entity_name#action_name"] => ActionDefinition */
  actionDefinitions: { [key: string]: ActionDefinition };
}

export interface IndexedSchema_EntityDefinitionsEntry {
  key: string;
  value: EntityDefinition | undefined;
}

export interface IndexedSchema_RelationDefinitionsEntry {
  key: string;
  value: RelationDefinition | undefined;
}

export interface IndexedSchema_ActionDefinitionsEntry {
  key: string;
  value: ActionDefinition | undefined;
}

/** EntityDefinition */
export interface EntityDefinition {
  name: string;
  /** ["relation_name"] => RelationDefinition */
  relations: { [key: string]: RelationDefinition };
  /** ["action_name"] => ActionDefinition */
  actions: { [key: string]: ActionDefinition };
  /** ["relation_name or action_name"] => RelationalReference */
  references: { [key: string]: EntityDefinition_RelationalReference };
  option: { [key: string]: string };
}

/** RelationalReference */
export enum EntityDefinition_RelationalReference {
  RELATIONAL_REFERENCE_UNSPECIFIED = 0,
  RELATIONAL_REFERENCE_RELATION = 1,
  RELATIONAL_REFERENCE_ACTION = 2,
  UNRECOGNIZED = -1,
}

export function entityDefinition_RelationalReferenceFromJSON(object: any): EntityDefinition_RelationalReference {
  switch (object) {
    case 0:
    case "RELATIONAL_REFERENCE_UNSPECIFIED":
      return EntityDefinition_RelationalReference.RELATIONAL_REFERENCE_UNSPECIFIED;
    case 1:
    case "RELATIONAL_REFERENCE_RELATION":
      return EntityDefinition_RelationalReference.RELATIONAL_REFERENCE_RELATION;
    case 2:
    case "RELATIONAL_REFERENCE_ACTION":
      return EntityDefinition_RelationalReference.RELATIONAL_REFERENCE_ACTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EntityDefinition_RelationalReference.UNRECOGNIZED;
  }
}

export function entityDefinition_RelationalReferenceToJSON(object: EntityDefinition_RelationalReference): string {
  switch (object) {
    case EntityDefinition_RelationalReference.RELATIONAL_REFERENCE_UNSPECIFIED:
      return "RELATIONAL_REFERENCE_UNSPECIFIED";
    case EntityDefinition_RelationalReference.RELATIONAL_REFERENCE_RELATION:
      return "RELATIONAL_REFERENCE_RELATION";
    case EntityDefinition_RelationalReference.RELATIONAL_REFERENCE_ACTION:
      return "RELATIONAL_REFERENCE_ACTION";
    case EntityDefinition_RelationalReference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EntityDefinition_RelationsEntry {
  key: string;
  value: RelationDefinition | undefined;
}

export interface EntityDefinition_ActionsEntry {
  key: string;
  value: ActionDefinition | undefined;
}

export interface EntityDefinition_ReferencesEntry {
  key: string;
  value: EntityDefinition_RelationalReference;
}

export interface EntityDefinition_OptionEntry {
  key: string;
  value: string;
}

/** RelationDefinition */
export interface RelationDefinition {
  name: string;
  entityReference:
    | RelationReference
    | undefined;
  /** relation reference includes entity reference */
  relationReferences: RelationReference[];
  option: { [key: string]: string };
}

export interface RelationDefinition_OptionEntry {
  key: string;
  value: string;
}

/** ActionDefinition */
export interface ActionDefinition {
  name: string;
  child: Child | undefined;
}

/** RelationReference */
export interface RelationReference {
  name: string;
}

/** ComputedUserSet */
export interface ComputedUserSet {
  relation: string;
}

/** TupleSet */
export interface TupleSet {
  relation: string;
}

/** TupleToUserSet */
export interface TupleToUserSet {
  tupleSet: TupleSet | undefined;
  computed: ComputedUserSet | undefined;
}

function createBaseChild(): Child {
  return { type: undefined };
}

export const Child = {
  encode(message: Child, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type?.$case === "leaf") {
      Leaf.encode(message.type.leaf, writer.uint32(10).fork()).ldelim();
    }
    if (message.type?.$case === "rewrite") {
      Rewrite.encode(message.type.rewrite, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Child {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = { $case: "leaf", leaf: Leaf.decode(reader, reader.uint32()) };
          break;
        case 2:
          message.type = { $case: "rewrite", rewrite: Rewrite.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Child {
    return {
      type: isSet(object.leaf)
        ? { $case: "leaf", leaf: Leaf.fromJSON(object.leaf) }
        : isSet(object.rewrite)
        ? { $case: "rewrite", rewrite: Rewrite.fromJSON(object.rewrite) }
        : undefined,
    };
  },

  toJSON(message: Child): unknown {
    const obj: any = {};
    message.type?.$case === "leaf" && (obj.leaf = message.type?.leaf ? Leaf.toJSON(message.type?.leaf) : undefined);
    message.type?.$case === "rewrite" &&
      (obj.rewrite = message.type?.rewrite ? Rewrite.toJSON(message.type?.rewrite) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Child>): Child {
    const message = createBaseChild();
    if (object.type?.$case === "leaf" && object.type?.leaf !== undefined && object.type?.leaf !== null) {
      message.type = { $case: "leaf", leaf: Leaf.fromPartial(object.type.leaf) };
    }
    if (object.type?.$case === "rewrite" && object.type?.rewrite !== undefined && object.type?.rewrite !== null) {
      message.type = { $case: "rewrite", rewrite: Rewrite.fromPartial(object.type.rewrite) };
    }
    return message;
  },
};

function createBaseLeaf(): Leaf {
  return { exclusion: false, type: undefined };
}

export const Leaf = {
  encode(message: Leaf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exclusion === true) {
      writer.uint32(8).bool(message.exclusion);
    }
    if (message.type?.$case === "computedUserSet") {
      ComputedUserSet.encode(message.type.computedUserSet, writer.uint32(18).fork()).ldelim();
    }
    if (message.type?.$case === "tupleToUserSet") {
      TupleToUserSet.encode(message.type.tupleToUserSet, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Leaf {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exclusion = reader.bool();
          break;
        case 2:
          message.type = { $case: "computedUserSet", computedUserSet: ComputedUserSet.decode(reader, reader.uint32()) };
          break;
        case 3:
          message.type = { $case: "tupleToUserSet", tupleToUserSet: TupleToUserSet.decode(reader, reader.uint32()) };
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Leaf {
    return {
      exclusion: isSet(object.exclusion) ? Boolean(object.exclusion) : false,
      type: isSet(object.computedUserSet)
        ? { $case: "computedUserSet", computedUserSet: ComputedUserSet.fromJSON(object.computedUserSet) }
        : isSet(object.tupleToUserSet)
        ? { $case: "tupleToUserSet", tupleToUserSet: TupleToUserSet.fromJSON(object.tupleToUserSet) }
        : undefined,
    };
  },

  toJSON(message: Leaf): unknown {
    const obj: any = {};
    message.exclusion !== undefined && (obj.exclusion = message.exclusion);
    message.type?.$case === "computedUserSet" && (obj.computedUserSet = message.type?.computedUserSet
      ? ComputedUserSet.toJSON(message.type?.computedUserSet)
      : undefined);
    message.type?.$case === "tupleToUserSet" && (obj.tupleToUserSet = message.type?.tupleToUserSet
      ? TupleToUserSet.toJSON(message.type?.tupleToUserSet)
      : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Leaf>): Leaf {
    const message = createBaseLeaf();
    message.exclusion = object.exclusion ?? false;
    if (
      object.type?.$case === "computedUserSet" &&
      object.type?.computedUserSet !== undefined &&
      object.type?.computedUserSet !== null
    ) {
      message.type = {
        $case: "computedUserSet",
        computedUserSet: ComputedUserSet.fromPartial(object.type.computedUserSet),
      };
    }
    if (
      object.type?.$case === "tupleToUserSet" &&
      object.type?.tupleToUserSet !== undefined &&
      object.type?.tupleToUserSet !== null
    ) {
      message.type = {
        $case: "tupleToUserSet",
        tupleToUserSet: TupleToUserSet.fromPartial(object.type.tupleToUserSet),
      };
    }
    return message;
  },
};

function createBaseRewrite(): Rewrite {
  return { rewriteOperation: 0, children: [] };
}

export const Rewrite = {
  encode(message: Rewrite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewriteOperation !== 0) {
      writer.uint32(8).int32(message.rewriteOperation);
    }
    for (const v of message.children) {
      Child.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rewrite {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewriteOperation = reader.int32() as any;
          break;
        case 2:
          message.children.push(Child.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rewrite {
    return {
      rewriteOperation: isSet(object.rewriteOperation) ? rewrite_OperationFromJSON(object.rewriteOperation) : 0,
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromJSON(e)) : [],
    };
  },

  toJSON(message: Rewrite): unknown {
    const obj: any = {};
    message.rewriteOperation !== undefined &&
      (obj.rewriteOperation = rewrite_OperationToJSON(message.rewriteOperation));
    if (message.children) {
      obj.children = message.children.map((e) => e ? Child.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Rewrite>): Rewrite {
    const message = createBaseRewrite();
    message.rewriteOperation = object.rewriteOperation ?? 0;
    message.children = object.children?.map((e) => Child.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIndexedSchema(): IndexedSchema {
  return { entityDefinitions: {}, relationDefinitions: {}, actionDefinitions: {} };
}

export const IndexedSchema = {
  encode(message: IndexedSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.entityDefinitions).forEach(([key, value]) => {
      IndexedSchema_EntityDefinitionsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.relationDefinitions).forEach(([key, value]) => {
      IndexedSchema_RelationDefinitionsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.actionDefinitions).forEach(([key, value]) => {
      IndexedSchema_ActionDefinitionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexedSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = IndexedSchema_EntityDefinitionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.entityDefinitions[entry1.key] = entry1.value;
          }
          break;
        case 2:
          const entry2 = IndexedSchema_RelationDefinitionsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.relationDefinitions[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = IndexedSchema_ActionDefinitionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.actionDefinitions[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexedSchema {
    return {
      entityDefinitions: isObject(object.entityDefinitions)
        ? Object.entries(object.entityDefinitions).reduce<{ [key: string]: EntityDefinition }>((acc, [key, value]) => {
          acc[key] = EntityDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      relationDefinitions: isObject(object.relationDefinitions)
        ? Object.entries(object.relationDefinitions).reduce<{ [key: string]: RelationDefinition }>(
          (acc, [key, value]) => {
            acc[key] = RelationDefinition.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      actionDefinitions: isObject(object.actionDefinitions)
        ? Object.entries(object.actionDefinitions).reduce<{ [key: string]: ActionDefinition }>((acc, [key, value]) => {
          acc[key] = ActionDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: IndexedSchema): unknown {
    const obj: any = {};
    obj.entityDefinitions = {};
    if (message.entityDefinitions) {
      Object.entries(message.entityDefinitions).forEach(([k, v]) => {
        obj.entityDefinitions[k] = EntityDefinition.toJSON(v);
      });
    }
    obj.relationDefinitions = {};
    if (message.relationDefinitions) {
      Object.entries(message.relationDefinitions).forEach(([k, v]) => {
        obj.relationDefinitions[k] = RelationDefinition.toJSON(v);
      });
    }
    obj.actionDefinitions = {};
    if (message.actionDefinitions) {
      Object.entries(message.actionDefinitions).forEach(([k, v]) => {
        obj.actionDefinitions[k] = ActionDefinition.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<IndexedSchema>): IndexedSchema {
    const message = createBaseIndexedSchema();
    message.entityDefinitions = Object.entries(object.entityDefinitions ?? {}).reduce<
      { [key: string]: EntityDefinition }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = EntityDefinition.fromPartial(value);
      }
      return acc;
    }, {});
    message.relationDefinitions = Object.entries(object.relationDefinitions ?? {}).reduce<
      { [key: string]: RelationDefinition }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = RelationDefinition.fromPartial(value);
      }
      return acc;
    }, {});
    message.actionDefinitions = Object.entries(object.actionDefinitions ?? {}).reduce<
      { [key: string]: ActionDefinition }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ActionDefinition.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseIndexedSchema_EntityDefinitionsEntry(): IndexedSchema_EntityDefinitionsEntry {
  return { key: "", value: undefined };
}

export const IndexedSchema_EntityDefinitionsEntry = {
  encode(message: IndexedSchema_EntityDefinitionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      EntityDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexedSchema_EntityDefinitionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedSchema_EntityDefinitionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = EntityDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexedSchema_EntityDefinitionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? EntityDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: IndexedSchema_EntityDefinitionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? EntityDefinition.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<IndexedSchema_EntityDefinitionsEntry>): IndexedSchema_EntityDefinitionsEntry {
    const message = createBaseIndexedSchema_EntityDefinitionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? EntityDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseIndexedSchema_RelationDefinitionsEntry(): IndexedSchema_RelationDefinitionsEntry {
  return { key: "", value: undefined };
}

export const IndexedSchema_RelationDefinitionsEntry = {
  encode(message: IndexedSchema_RelationDefinitionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RelationDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexedSchema_RelationDefinitionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedSchema_RelationDefinitionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RelationDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexedSchema_RelationDefinitionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? RelationDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: IndexedSchema_RelationDefinitionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? RelationDefinition.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<IndexedSchema_RelationDefinitionsEntry>): IndexedSchema_RelationDefinitionsEntry {
    const message = createBaseIndexedSchema_RelationDefinitionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? RelationDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseIndexedSchema_ActionDefinitionsEntry(): IndexedSchema_ActionDefinitionsEntry {
  return { key: "", value: undefined };
}

export const IndexedSchema_ActionDefinitionsEntry = {
  encode(message: IndexedSchema_ActionDefinitionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ActionDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexedSchema_ActionDefinitionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedSchema_ActionDefinitionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ActionDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexedSchema_ActionDefinitionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ActionDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: IndexedSchema_ActionDefinitionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ActionDefinition.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<IndexedSchema_ActionDefinitionsEntry>): IndexedSchema_ActionDefinitionsEntry {
    const message = createBaseIndexedSchema_ActionDefinitionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ActionDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEntityDefinition(): EntityDefinition {
  return { name: "", relations: {}, actions: {}, references: {}, option: {} };
}

export const EntityDefinition = {
  encode(message: EntityDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    Object.entries(message.relations).forEach(([key, value]) => {
      EntityDefinition_RelationsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.actions).forEach(([key, value]) => {
      EntityDefinition_ActionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    Object.entries(message.references).forEach(([key, value]) => {
      EntityDefinition_ReferencesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    Object.entries(message.option).forEach(([key, value]) => {
      EntityDefinition_OptionEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          const entry2 = EntityDefinition_RelationsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.relations[entry2.key] = entry2.value;
          }
          break;
        case 3:
          const entry3 = EntityDefinition_ActionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.actions[entry3.key] = entry3.value;
          }
          break;
        case 4:
          const entry4 = EntityDefinition_ReferencesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.references[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = EntityDefinition_OptionEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.option[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      relations: isObject(object.relations)
        ? Object.entries(object.relations).reduce<{ [key: string]: RelationDefinition }>((acc, [key, value]) => {
          acc[key] = RelationDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      actions: isObject(object.actions)
        ? Object.entries(object.actions).reduce<{ [key: string]: ActionDefinition }>((acc, [key, value]) => {
          acc[key] = ActionDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      references: isObject(object.references)
        ? Object.entries(object.references).reduce<{ [key: string]: EntityDefinition_RelationalReference }>(
          (acc, [key, value]) => {
            acc[key] = entityDefinition_RelationalReferenceFromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      option: isObject(object.option)
        ? Object.entries(object.option).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: EntityDefinition): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    obj.relations = {};
    if (message.relations) {
      Object.entries(message.relations).forEach(([k, v]) => {
        obj.relations[k] = RelationDefinition.toJSON(v);
      });
    }
    obj.actions = {};
    if (message.actions) {
      Object.entries(message.actions).forEach(([k, v]) => {
        obj.actions[k] = ActionDefinition.toJSON(v);
      });
    }
    obj.references = {};
    if (message.references) {
      Object.entries(message.references).forEach(([k, v]) => {
        obj.references[k] = entityDefinition_RelationalReferenceToJSON(v);
      });
    }
    obj.option = {};
    if (message.option) {
      Object.entries(message.option).forEach(([k, v]) => {
        obj.option[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EntityDefinition>): EntityDefinition {
    const message = createBaseEntityDefinition();
    message.name = object.name ?? "";
    message.relations = Object.entries(object.relations ?? {}).reduce<{ [key: string]: RelationDefinition }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = RelationDefinition.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.actions = Object.entries(object.actions ?? {}).reduce<{ [key: string]: ActionDefinition }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = ActionDefinition.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.references = Object.entries(object.references ?? {}).reduce<
      { [key: string]: EntityDefinition_RelationalReference }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value as EntityDefinition_RelationalReference;
      }
      return acc;
    }, {});
    message.option = Object.entries(object.option ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseEntityDefinition_RelationsEntry(): EntityDefinition_RelationsEntry {
  return { key: "", value: undefined };
}

export const EntityDefinition_RelationsEntry = {
  encode(message: EntityDefinition_RelationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RelationDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition_RelationsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_RelationsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = RelationDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityDefinition_RelationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? RelationDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EntityDefinition_RelationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? RelationDefinition.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityDefinition_RelationsEntry>): EntityDefinition_RelationsEntry {
    const message = createBaseEntityDefinition_RelationsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? RelationDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEntityDefinition_ActionsEntry(): EntityDefinition_ActionsEntry {
  return { key: "", value: undefined };
}

export const EntityDefinition_ActionsEntry = {
  encode(message: EntityDefinition_ActionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ActionDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition_ActionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_ActionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ActionDefinition.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityDefinition_ActionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ActionDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EntityDefinition_ActionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ActionDefinition.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityDefinition_ActionsEntry>): EntityDefinition_ActionsEntry {
    const message = createBaseEntityDefinition_ActionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ActionDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEntityDefinition_ReferencesEntry(): EntityDefinition_ReferencesEntry {
  return { key: "", value: 0 };
}

export const EntityDefinition_ReferencesEntry = {
  encode(message: EntityDefinition_ReferencesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition_ReferencesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_ReferencesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityDefinition_ReferencesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? entityDefinition_RelationalReferenceFromJSON(object.value) : 0,
    };
  },

  toJSON(message: EntityDefinition_ReferencesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = entityDefinition_RelationalReferenceToJSON(message.value));
    return obj;
  },

  fromPartial(object: DeepPartial<EntityDefinition_ReferencesEntry>): EntityDefinition_ReferencesEntry {
    const message = createBaseEntityDefinition_ReferencesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEntityDefinition_OptionEntry(): EntityDefinition_OptionEntry {
  return { key: "", value: "" };
}

export const EntityDefinition_OptionEntry = {
  encode(message: EntityDefinition_OptionEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition_OptionEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_OptionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntityDefinition_OptionEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: EntityDefinition_OptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<EntityDefinition_OptionEntry>): EntityDefinition_OptionEntry {
    const message = createBaseEntityDefinition_OptionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRelationDefinition(): RelationDefinition {
  return { name: "", entityReference: undefined, relationReferences: [], option: {} };
}

export const RelationDefinition = {
  encode(message: RelationDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.entityReference !== undefined) {
      RelationReference.encode(message.entityReference, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.relationReferences) {
      RelationReference.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.option).forEach(([key, value]) => {
      RelationDefinition_OptionEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.entityReference = RelationReference.decode(reader, reader.uint32());
          break;
        case 3:
          message.relationReferences.push(RelationReference.decode(reader, reader.uint32()));
          break;
        case 4:
          const entry4 = RelationDefinition_OptionEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.option[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      entityReference: isSet(object.entityReference) ? RelationReference.fromJSON(object.entityReference) : undefined,
      relationReferences: Array.isArray(object?.relationReferences)
        ? object.relationReferences.map((e: any) => RelationReference.fromJSON(e))
        : [],
      option: isObject(object.option)
        ? Object.entries(object.option).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: RelationDefinition): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.entityReference !== undefined &&
      (obj.entityReference = message.entityReference ? RelationReference.toJSON(message.entityReference) : undefined);
    if (message.relationReferences) {
      obj.relationReferences = message.relationReferences.map((e) => e ? RelationReference.toJSON(e) : undefined);
    } else {
      obj.relationReferences = [];
    }
    obj.option = {};
    if (message.option) {
      Object.entries(message.option).forEach(([k, v]) => {
        obj.option[k] = v;
      });
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RelationDefinition>): RelationDefinition {
    const message = createBaseRelationDefinition();
    message.name = object.name ?? "";
    message.entityReference = (object.entityReference !== undefined && object.entityReference !== null)
      ? RelationReference.fromPartial(object.entityReference)
      : undefined;
    message.relationReferences = object.relationReferences?.map((e) => RelationReference.fromPartial(e)) || [];
    message.option = Object.entries(object.option ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseRelationDefinition_OptionEntry(): RelationDefinition_OptionEntry {
  return { key: "", value: "" };
}

export const RelationDefinition_OptionEntry = {
  encode(message: RelationDefinition_OptionEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationDefinition_OptionEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationDefinition_OptionEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationDefinition_OptionEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: RelationDefinition_OptionEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationDefinition_OptionEntry>): RelationDefinition_OptionEntry {
    const message = createBaseRelationDefinition_OptionEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseActionDefinition(): ActionDefinition {
  return { name: "", child: undefined };
}

export const ActionDefinition = {
  encode(message: ActionDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.child !== undefined) {
      Child.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionDefinition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.child = Child.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      child: isSet(object.child) ? Child.fromJSON(object.child) : undefined,
    };
  },

  toJSON(message: ActionDefinition): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.child !== undefined && (obj.child = message.child ? Child.toJSON(message.child) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ActionDefinition>): ActionDefinition {
    const message = createBaseActionDefinition();
    message.name = object.name ?? "";
    message.child = (object.child !== undefined && object.child !== null) ? Child.fromPartial(object.child) : undefined;
    return message;
  },
};

function createBaseRelationReference(): RelationReference {
  return { name: "" };
}

export const RelationReference = {
  encode(message: RelationReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationReference {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationReference {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: RelationReference): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationReference>): RelationReference {
    const message = createBaseRelationReference();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseComputedUserSet(): ComputedUserSet {
  return { relation: "" };
}

export const ComputedUserSet = {
  encode(message: ComputedUserSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relation !== "") {
      writer.uint32(10).string(message.relation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComputedUserSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComputedUserSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComputedUserSet {
    return { relation: isSet(object.relation) ? String(object.relation) : "" };
  },

  toJSON(message: ComputedUserSet): unknown {
    const obj: any = {};
    message.relation !== undefined && (obj.relation = message.relation);
    return obj;
  },

  fromPartial(object: DeepPartial<ComputedUserSet>): ComputedUserSet {
    const message = createBaseComputedUserSet();
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseTupleSet(): TupleSet {
  return { relation: "" };
}

export const TupleSet = {
  encode(message: TupleSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.relation !== "") {
      writer.uint32(10).string(message.relation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TupleSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TupleSet {
    return { relation: isSet(object.relation) ? String(object.relation) : "" };
  },

  toJSON(message: TupleSet): unknown {
    const obj: any = {};
    message.relation !== undefined && (obj.relation = message.relation);
    return obj;
  },

  fromPartial(object: DeepPartial<TupleSet>): TupleSet {
    const message = createBaseTupleSet();
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseTupleToUserSet(): TupleToUserSet {
  return { tupleSet: undefined, computed: undefined };
}

export const TupleToUserSet = {
  encode(message: TupleToUserSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tupleSet !== undefined) {
      TupleSet.encode(message.tupleSet, writer.uint32(10).fork()).ldelim();
    }
    if (message.computed !== undefined) {
      ComputedUserSet.encode(message.computed, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TupleToUserSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleToUserSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tupleSet = TupleSet.decode(reader, reader.uint32());
          break;
        case 2:
          message.computed = ComputedUserSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TupleToUserSet {
    return {
      tupleSet: isSet(object.tupleSet) ? TupleSet.fromJSON(object.tupleSet) : undefined,
      computed: isSet(object.computed) ? ComputedUserSet.fromJSON(object.computed) : undefined,
    };
  },

  toJSON(message: TupleToUserSet): unknown {
    const obj: any = {};
    message.tupleSet !== undefined && (obj.tupleSet = message.tupleSet ? TupleSet.toJSON(message.tupleSet) : undefined);
    message.computed !== undefined &&
      (obj.computed = message.computed ? ComputedUserSet.toJSON(message.computed) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TupleToUserSet>): TupleToUserSet {
    const message = createBaseTupleToUserSet();
    message.tupleSet = (object.tupleSet !== undefined && object.tupleSet !== null)
      ? TupleSet.fromPartial(object.tupleSet)
      : undefined;
    message.computed = (object.computed !== undefined && object.computed !== null)
      ? ComputedUserSet.fromPartial(object.computed)
      : undefined;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
