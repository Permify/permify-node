/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";
import { IndexedSchema } from "./schema";
import { Entity, Expand, Subject, Tuple, TupleFilter } from "./tuple";

export const protobufPackage = "base.v1";

/** CheckRequest */
export interface PermissionCheckRequest {
  metadata: PermissionCheckRequestMetadata | undefined;
  entity:
    | Entity
    | undefined;
  /** its can be action or relation */
  permission: string;
  subject: Subject | undefined;
}

/** PermissionCheckRequestMetadata */
export interface PermissionCheckRequestMetadata {
  schemaVersion: string;
  snapToken: string;
  exclusion: boolean;
  depth: number;
}

/** PermissionCheckResponse */
export interface PermissionCheckResponse {
  can: PermissionCheckResponse_Result;
  metadata: PermissionCheckResponseMetadata | undefined;
}

/** Result */
export enum PermissionCheckResponse_Result {
  RESULT_UNKNOWN = 0,
  RESULT_ALLOWED = 1,
  RESULT_DENIED = 2,
  UNRECOGNIZED = -1,
}

export function permissionCheckResponse_ResultFromJSON(object: any): PermissionCheckResponse_Result {
  switch (object) {
    case 0:
    case "RESULT_UNKNOWN":
      return PermissionCheckResponse_Result.RESULT_UNKNOWN;
    case 1:
    case "RESULT_ALLOWED":
      return PermissionCheckResponse_Result.RESULT_ALLOWED;
    case 2:
    case "RESULT_DENIED":
      return PermissionCheckResponse_Result.RESULT_DENIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PermissionCheckResponse_Result.UNRECOGNIZED;
  }
}

export function permissionCheckResponse_ResultToJSON(object: PermissionCheckResponse_Result): string {
  switch (object) {
    case PermissionCheckResponse_Result.RESULT_UNKNOWN:
      return "RESULT_UNKNOWN";
    case PermissionCheckResponse_Result.RESULT_ALLOWED:
      return "RESULT_ALLOWED";
    case PermissionCheckResponse_Result.RESULT_DENIED:
      return "RESULT_DENIED";
    case PermissionCheckResponse_Result.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** CheckResponseMetadata */
export interface PermissionCheckResponseMetadata {
  checkCount: number;
}

/** PermissionExpandRequest */
export interface PermissionExpandRequest {
  metadata: PermissionExpandRequestMetadata | undefined;
  entity: Entity | undefined;
  permission: string;
}

/** ExpandRequestMetadata */
export interface PermissionExpandRequestMetadata {
  schemaVersion: string;
  snapToken: string;
}

/** PermissionExpandResponse */
export interface PermissionExpandResponse {
  tree: Expand | undefined;
}

/** PermissionLookupSchemaRequest */
export interface PermissionLookupSchemaRequest {
  metadata: PermissionLookupSchemaRequestMetadata | undefined;
  entityType: string;
  relationNames: string[];
}

/** LookupSchemaRequestMetadata */
export interface PermissionLookupSchemaRequestMetadata {
  schemaVersion: string;
}

/** PermissionLookupSchemaResponse */
export interface PermissionLookupSchemaResponse {
  actionNames: string[];
}

/** PermissionLookupEntityRequest */
export interface PermissionLookupEntityRequest {
  metadata: PermissionLookupEntityRequestMetadata | undefined;
  entityType: string;
  permission: string;
  subject: Subject | undefined;
}

/** LookupEntityRequestMetadata */
export interface PermissionLookupEntityRequestMetadata {
  schemaVersion: string;
  snapToken: string;
  depth: number;
}

/** PermissionLookupEntityResponse */
export interface PermissionLookupEntityResponse {
  entityIds: string[];
}

/** PermissionLookupEntityStreamResponse */
export interface PermissionLookupEntityStreamResponse {
  entityId: string;
}

/** SchemaWriteRequest */
export interface SchemaWriteRequest {
  schema: string;
}

/** SchemaWriteResponse */
export interface SchemaWriteResponse {
  schemaVersion: string;
}

/** SchemaReadRequest */
export interface SchemaReadRequest {
  metadata: SchemaReadRequestMetadata | undefined;
}

/** LookupSchemaRequestMetadata */
export interface SchemaReadRequestMetadata {
  schemaVersion: string;
}

/** SchemaReadRequest */
export interface SchemaReadResponse {
  schema: IndexedSchema | undefined;
}

/** RelationshipWriteRequest */
export interface RelationshipWriteRequest {
  metadata: RelationshipWriteRequestMetadata | undefined;
  tuples: Tuple[];
}

/** RelationshipWriteRequestMetadata */
export interface RelationshipWriteRequestMetadata {
  schemaVersion: string;
}

/** RelationshipWriteResponse */
export interface RelationshipWriteResponse {
  snapToken: string;
}

/** RelationshipReadRequest */
export interface RelationshipReadRequest {
  metadata: RelationshipReadRequestMetadata | undefined;
  filter: TupleFilter | undefined;
}

/** RelationshipWriteRequestMetadata */
export interface RelationshipReadRequestMetadata {
  snapToken: string;
}

/** RelationshipReadResponse */
export interface RelationshipReadResponse {
  tuples: Tuple[];
}

/** RelationshipDeleteRequest */
export interface RelationshipDeleteRequest {
  filter: TupleFilter | undefined;
}

/** RelationshipDeleteResponse */
export interface RelationshipDeleteResponse {
  snapToken: string;
}

/** WelcomeResponse */
export interface welcomeResponse {
  permify: string;
  sources: welcomeResponse_Sources | undefined;
  socials: welcomeResponse_Socials | undefined;
}

export interface welcomeResponse_Sources {
  docs: string;
  gitHub: string;
  blog: string;
}

export interface welcomeResponse_Socials {
  discord: string;
  twitter: string;
  linkedin: string;
}

function createBasePermissionCheckRequest(): PermissionCheckRequest {
  return { metadata: undefined, entity: undefined, permission: "", subject: undefined };
}

export const PermissionCheckRequest = {
  encode(message: PermissionCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      PermissionCheckRequestMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(18).fork()).ldelim();
    }
    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = PermissionCheckRequestMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        case 3:
          message.permission = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionCheckRequest {
    return {
      metadata: isSet(object.metadata) ? PermissionCheckRequestMetadata.fromJSON(object.metadata) : undefined,
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      permission: isSet(object.permission) ? String(object.permission) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PermissionCheckRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionCheckRequestMetadata.toJSON(message.metadata) : undefined);
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.permission !== undefined && (obj.permission = message.permission);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionCheckRequest>): PermissionCheckRequest {
    const message = createBasePermissionCheckRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionCheckRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.permission = object.permission ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePermissionCheckRequestMetadata(): PermissionCheckRequestMetadata {
  return { schemaVersion: "", snapToken: "", exclusion: false, depth: 0 };
}

export const PermissionCheckRequestMetadata = {
  encode(message: PermissionCheckRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    if (message.snapToken !== "") {
      writer.uint32(18).string(message.snapToken);
    }
    if (message.exclusion === true) {
      writer.uint32(24).bool(message.exclusion);
    }
    if (message.depth !== 0) {
      writer.uint32(32).int32(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCheckRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaVersion = reader.string();
          break;
        case 2:
          message.snapToken = reader.string();
          break;
        case 3:
          message.exclusion = reader.bool();
          break;
        case 4:
          message.depth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionCheckRequestMetadata {
    return {
      schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
      exclusion: isSet(object.exclusion) ? Boolean(object.exclusion) : false,
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: PermissionCheckRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    message.exclusion !== undefined && (obj.exclusion = message.exclusion);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionCheckRequestMetadata>): PermissionCheckRequestMetadata {
    const message = createBasePermissionCheckRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
    message.exclusion = object.exclusion ?? false;
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBasePermissionCheckResponse(): PermissionCheckResponse {
  return { can: 0, metadata: undefined };
}

export const PermissionCheckResponse = {
  encode(message: PermissionCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.can !== 0) {
      writer.uint32(8).int32(message.can);
    }
    if (message.metadata !== undefined) {
      PermissionCheckResponseMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.can = reader.int32() as any;
          break;
        case 2:
          message.metadata = PermissionCheckResponseMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionCheckResponse {
    return {
      can: isSet(object.can) ? permissionCheckResponse_ResultFromJSON(object.can) : 0,
      metadata: isSet(object.metadata) ? PermissionCheckResponseMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: PermissionCheckResponse): unknown {
    const obj: any = {};
    message.can !== undefined && (obj.can = permissionCheckResponse_ResultToJSON(message.can));
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionCheckResponseMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionCheckResponse>): PermissionCheckResponse {
    const message = createBasePermissionCheckResponse();
    message.can = object.can ?? 0;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionCheckResponseMetadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBasePermissionCheckResponseMetadata(): PermissionCheckResponseMetadata {
  return { checkCount: 0 };
}

export const PermissionCheckResponseMetadata = {
  encode(message: PermissionCheckResponseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.checkCount !== 0) {
      writer.uint32(8).int32(message.checkCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCheckResponseMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckResponseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionCheckResponseMetadata {
    return { checkCount: isSet(object.check_count) ? Number(object.check_count) : 0 };
  },

  toJSON(message: PermissionCheckResponseMetadata): unknown {
    const obj: any = {};
    message.checkCount !== undefined && (obj.check_count = Math.round(message.checkCount));
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionCheckResponseMetadata>): PermissionCheckResponseMetadata {
    const message = createBasePermissionCheckResponseMetadata();
    message.checkCount = object.checkCount ?? 0;
    return message;
  },
};

function createBasePermissionExpandRequest(): PermissionExpandRequest {
  return { metadata: undefined, entity: undefined, permission: "" };
}

export const PermissionExpandRequest = {
  encode(message: PermissionExpandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      PermissionExpandRequestMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(18).fork()).ldelim();
    }
    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionExpandRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionExpandRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = PermissionExpandRequestMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        case 3:
          message.permission = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionExpandRequest {
    return {
      metadata: isSet(object.metadata) ? PermissionExpandRequestMetadata.fromJSON(object.metadata) : undefined,
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      permission: isSet(object.permission) ? String(object.permission) : "",
    };
  },

  toJSON(message: PermissionExpandRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionExpandRequestMetadata.toJSON(message.metadata) : undefined);
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.permission !== undefined && (obj.permission = message.permission);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionExpandRequest>): PermissionExpandRequest {
    const message = createBasePermissionExpandRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionExpandRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.permission = object.permission ?? "";
    return message;
  },
};

function createBasePermissionExpandRequestMetadata(): PermissionExpandRequestMetadata {
  return { schemaVersion: "", snapToken: "" };
}

export const PermissionExpandRequestMetadata = {
  encode(message: PermissionExpandRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    if (message.snapToken !== "") {
      writer.uint32(18).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionExpandRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionExpandRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaVersion = reader.string();
          break;
        case 2:
          message.snapToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionExpandRequestMetadata {
    return {
      schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
    };
  },

  toJSON(message: PermissionExpandRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionExpandRequestMetadata>): PermissionExpandRequestMetadata {
    const message = createBasePermissionExpandRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBasePermissionExpandResponse(): PermissionExpandResponse {
  return { tree: undefined };
}

export const PermissionExpandResponse = {
  encode(message: PermissionExpandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tree !== undefined) {
      Expand.encode(message.tree, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionExpandResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionExpandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tree = Expand.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionExpandResponse {
    return { tree: isSet(object.tree) ? Expand.fromJSON(object.tree) : undefined };
  },

  toJSON(message: PermissionExpandResponse): unknown {
    const obj: any = {};
    message.tree !== undefined && (obj.tree = message.tree ? Expand.toJSON(message.tree) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionExpandResponse>): PermissionExpandResponse {
    const message = createBasePermissionExpandResponse();
    message.tree = (object.tree !== undefined && object.tree !== null) ? Expand.fromPartial(object.tree) : undefined;
    return message;
  },
};

function createBasePermissionLookupSchemaRequest(): PermissionLookupSchemaRequest {
  return { metadata: undefined, entityType: "", relationNames: [] };
}

export const PermissionLookupSchemaRequest = {
  encode(message: PermissionLookupSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      PermissionLookupSchemaRequestMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    for (const v of message.relationNames) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSchemaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = PermissionLookupSchemaRequestMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.entityType = reader.string();
          break;
        case 3:
          message.relationNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupSchemaRequest {
    return {
      metadata: isSet(object.metadata) ? PermissionLookupSchemaRequestMetadata.fromJSON(object.metadata) : undefined,
      entityType: isSet(object.entity_type) ? String(object.entity_type) : "",
      relationNames: Array.isArray(object?.relation_names) ? object.relation_names.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PermissionLookupSchemaRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionLookupSchemaRequestMetadata.toJSON(message.metadata) : undefined);
    message.entityType !== undefined && (obj.entity_type = message.entityType);
    if (message.relationNames) {
      obj.relation_names = message.relationNames.map((e) => e);
    } else {
      obj.relation_names = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupSchemaRequest>): PermissionLookupSchemaRequest {
    const message = createBasePermissionLookupSchemaRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionLookupSchemaRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.entityType = object.entityType ?? "";
    message.relationNames = object.relationNames?.map((e) => e) || [];
    return message;
  },
};

function createBasePermissionLookupSchemaRequestMetadata(): PermissionLookupSchemaRequestMetadata {
  return { schemaVersion: "" };
}

export const PermissionLookupSchemaRequestMetadata = {
  encode(message: PermissionLookupSchemaRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSchemaRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSchemaRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupSchemaRequestMetadata {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: PermissionLookupSchemaRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupSchemaRequestMetadata>): PermissionLookupSchemaRequestMetadata {
    const message = createBasePermissionLookupSchemaRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    return message;
  },
};

function createBasePermissionLookupSchemaResponse(): PermissionLookupSchemaResponse {
  return { actionNames: [] };
}

export const PermissionLookupSchemaResponse = {
  encode(message: PermissionLookupSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actionNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupSchemaResponse {
    return { actionNames: Array.isArray(object?.action_names) ? object.action_names.map((e: any) => String(e)) : [] };
  },

  toJSON(message: PermissionLookupSchemaResponse): unknown {
    const obj: any = {};
    if (message.actionNames) {
      obj.action_names = message.actionNames.map((e) => e);
    } else {
      obj.action_names = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupSchemaResponse>): PermissionLookupSchemaResponse {
    const message = createBasePermissionLookupSchemaResponse();
    message.actionNames = object.actionNames?.map((e) => e) || [];
    return message;
  },
};

function createBasePermissionLookupEntityRequest(): PermissionLookupEntityRequest {
  return { metadata: undefined, entityType: "", permission: "", subject: undefined };
}

export const PermissionLookupEntityRequest = {
  encode(message: PermissionLookupEntityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      PermissionLookupEntityRequestMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.entityType !== "") {
      writer.uint32(18).string(message.entityType);
    }
    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupEntityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = PermissionLookupEntityRequestMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.entityType = reader.string();
          break;
        case 3:
          message.permission = reader.string();
          break;
        case 4:
          message.subject = Subject.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupEntityRequest {
    return {
      metadata: isSet(object.metadata) ? PermissionLookupEntityRequestMetadata.fromJSON(object.metadata) : undefined,
      entityType: isSet(object.entity_type) ? String(object.entity_type) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PermissionLookupEntityRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionLookupEntityRequestMetadata.toJSON(message.metadata) : undefined);
    message.entityType !== undefined && (obj.entity_type = message.entityType);
    message.permission !== undefined && (obj.permission = message.permission);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupEntityRequest>): PermissionLookupEntityRequest {
    const message = createBasePermissionLookupEntityRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionLookupEntityRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.entityType = object.entityType ?? "";
    message.permission = object.permission ?? "";
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePermissionLookupEntityRequestMetadata(): PermissionLookupEntityRequestMetadata {
  return { schemaVersion: "", snapToken: "", depth: 0 };
}

export const PermissionLookupEntityRequestMetadata = {
  encode(message: PermissionLookupEntityRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    if (message.snapToken !== "") {
      writer.uint32(18).string(message.snapToken);
    }
    if (message.depth !== 0) {
      writer.uint32(24).int32(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupEntityRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaVersion = reader.string();
          break;
        case 2:
          message.snapToken = reader.string();
          break;
        case 3:
          message.depth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupEntityRequestMetadata {
    return {
      schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: PermissionLookupEntityRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupEntityRequestMetadata>): PermissionLookupEntityRequestMetadata {
    const message = createBasePermissionLookupEntityRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBasePermissionLookupEntityResponse(): PermissionLookupEntityResponse {
  return { entityIds: [] };
}

export const PermissionLookupEntityResponse = {
  encode(message: PermissionLookupEntityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entityIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupEntityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupEntityResponse {
    return { entityIds: Array.isArray(object?.entity_ids) ? object.entity_ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: PermissionLookupEntityResponse): unknown {
    const obj: any = {};
    if (message.entityIds) {
      obj.entity_ids = message.entityIds.map((e) => e);
    } else {
      obj.entity_ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupEntityResponse>): PermissionLookupEntityResponse {
    const message = createBasePermissionLookupEntityResponse();
    message.entityIds = object.entityIds?.map((e) => e) || [];
    return message;
  },
};

function createBasePermissionLookupEntityStreamResponse(): PermissionLookupEntityStreamResponse {
  return { entityId: "" };
}

export const PermissionLookupEntityStreamResponse = {
  encode(message: PermissionLookupEntityStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityId !== "") {
      writer.uint32(10).string(message.entityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupEntityStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupEntityStreamResponse {
    return { entityId: isSet(object.entity_id) ? String(object.entity_id) : "" };
  },

  toJSON(message: PermissionLookupEntityStreamResponse): unknown {
    const obj: any = {};
    message.entityId !== undefined && (obj.entity_id = message.entityId);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupEntityStreamResponse>): PermissionLookupEntityStreamResponse {
    const message = createBasePermissionLookupEntityStreamResponse();
    message.entityId = object.entityId ?? "";
    return message;
  },
};

function createBaseSchemaWriteRequest(): SchemaWriteRequest {
  return { schema: "" };
}

export const SchemaWriteRequest = {
  encode(message: SchemaWriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaWriteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaWriteRequest {
    return { schema: isSet(object.schema) ? String(object.schema) : "" };
  },

  toJSON(message: SchemaWriteRequest): unknown {
    const obj: any = {};
    message.schema !== undefined && (obj.schema = message.schema);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaWriteRequest>): SchemaWriteRequest {
    const message = createBaseSchemaWriteRequest();
    message.schema = object.schema ?? "";
    return message;
  },
};

function createBaseSchemaWriteResponse(): SchemaWriteResponse {
  return { schemaVersion: "" };
}

export const SchemaWriteResponse = {
  encode(message: SchemaWriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaWriteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaWriteResponse {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: SchemaWriteResponse): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaWriteResponse>): SchemaWriteResponse {
    const message = createBaseSchemaWriteResponse();
    message.schemaVersion = object.schemaVersion ?? "";
    return message;
  },
};

function createBaseSchemaReadRequest(): SchemaReadRequest {
  return { metadata: undefined };
}

export const SchemaReadRequest = {
  encode(message: SchemaReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      SchemaReadRequestMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaReadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = SchemaReadRequestMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaReadRequest {
    return { metadata: isSet(object.metadata) ? SchemaReadRequestMetadata.fromJSON(object.metadata) : undefined };
  },

  toJSON(message: SchemaReadRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? SchemaReadRequestMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaReadRequest>): SchemaReadRequest {
    const message = createBaseSchemaReadRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? SchemaReadRequestMetadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseSchemaReadRequestMetadata(): SchemaReadRequestMetadata {
  return { schemaVersion: "" };
}

export const SchemaReadRequestMetadata = {
  encode(message: SchemaReadRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaReadRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaReadRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaReadRequestMetadata {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: SchemaReadRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaReadRequestMetadata>): SchemaReadRequestMetadata {
    const message = createBaseSchemaReadRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    return message;
  },
};

function createBaseSchemaReadResponse(): SchemaReadResponse {
  return { schema: undefined };
}

export const SchemaReadResponse = {
  encode(message: SchemaReadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== undefined) {
      IndexedSchema.encode(message.schema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaReadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaReadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema = IndexedSchema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaReadResponse {
    return { schema: isSet(object.schema) ? IndexedSchema.fromJSON(object.schema) : undefined };
  },

  toJSON(message: SchemaReadResponse): unknown {
    const obj: any = {};
    message.schema !== undefined && (obj.schema = message.schema ? IndexedSchema.toJSON(message.schema) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaReadResponse>): SchemaReadResponse {
    const message = createBaseSchemaReadResponse();
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? IndexedSchema.fromPartial(object.schema)
      : undefined;
    return message;
  },
};

function createBaseRelationshipWriteRequest(): RelationshipWriteRequest {
  return { metadata: undefined, tuples: [] };
}

export const RelationshipWriteRequest = {
  encode(message: RelationshipWriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      RelationshipWriteRequestMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tuples) {
      Tuple.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipWriteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = RelationshipWriteRequestMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.tuples.push(Tuple.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipWriteRequest {
    return {
      metadata: isSet(object.metadata) ? RelationshipWriteRequestMetadata.fromJSON(object.metadata) : undefined,
      tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [],
    };
  },

  toJSON(message: RelationshipWriteRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? RelationshipWriteRequestMetadata.toJSON(message.metadata) : undefined);
    if (message.tuples) {
      obj.tuples = message.tuples.map((e) => e ? Tuple.toJSON(e) : undefined);
    } else {
      obj.tuples = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipWriteRequest>): RelationshipWriteRequest {
    const message = createBaseRelationshipWriteRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? RelationshipWriteRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRelationshipWriteRequestMetadata(): RelationshipWriteRequestMetadata {
  return { schemaVersion: "" };
}

export const RelationshipWriteRequestMetadata = {
  encode(message: RelationshipWriteRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipWriteRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipWriteRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipWriteRequestMetadata {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: RelationshipWriteRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipWriteRequestMetadata>): RelationshipWriteRequestMetadata {
    const message = createBaseRelationshipWriteRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    return message;
  },
};

function createBaseRelationshipWriteResponse(): RelationshipWriteResponse {
  return { snapToken: "" };
}

export const RelationshipWriteResponse = {
  encode(message: RelationshipWriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipWriteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipWriteResponse {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: RelationshipWriteResponse): unknown {
    const obj: any = {};
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipWriteResponse>): RelationshipWriteResponse {
    const message = createBaseRelationshipWriteResponse();
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBaseRelationshipReadRequest(): RelationshipReadRequest {
  return { metadata: undefined, filter: undefined };
}

export const RelationshipReadRequest = {
  encode(message: RelationshipReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      RelationshipReadRequestMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      TupleFilter.encode(message.filter, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipReadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = RelationshipReadRequestMetadata.decode(reader, reader.uint32());
          break;
        case 2:
          message.filter = TupleFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipReadRequest {
    return {
      metadata: isSet(object.metadata) ? RelationshipReadRequestMetadata.fromJSON(object.metadata) : undefined,
      filter: isSet(object.filter) ? TupleFilter.fromJSON(object.filter) : undefined,
    };
  },

  toJSON(message: RelationshipReadRequest): unknown {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? RelationshipReadRequestMetadata.toJSON(message.metadata) : undefined);
    message.filter !== undefined && (obj.filter = message.filter ? TupleFilter.toJSON(message.filter) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipReadRequest>): RelationshipReadRequest {
    const message = createBaseRelationshipReadRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? RelationshipReadRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? TupleFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseRelationshipReadRequestMetadata(): RelationshipReadRequestMetadata {
  return { snapToken: "" };
}

export const RelationshipReadRequestMetadata = {
  encode(message: RelationshipReadRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipReadRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipReadRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipReadRequestMetadata {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: RelationshipReadRequestMetadata): unknown {
    const obj: any = {};
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipReadRequestMetadata>): RelationshipReadRequestMetadata {
    const message = createBaseRelationshipReadRequestMetadata();
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBaseRelationshipReadResponse(): RelationshipReadResponse {
  return { tuples: [] };
}

export const RelationshipReadResponse = {
  encode(message: RelationshipReadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tuples) {
      Tuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipReadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipReadResponse();
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

  fromJSON(object: any): RelationshipReadResponse {
    return { tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [] };
  },

  toJSON(message: RelationshipReadResponse): unknown {
    const obj: any = {};
    if (message.tuples) {
      obj.tuples = message.tuples.map((e) => e ? Tuple.toJSON(e) : undefined);
    } else {
      obj.tuples = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipReadResponse>): RelationshipReadResponse {
    const message = createBaseRelationshipReadResponse();
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRelationshipDeleteRequest(): RelationshipDeleteRequest {
  return { filter: undefined };
}

export const RelationshipDeleteRequest = {
  encode(message: RelationshipDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      TupleFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = TupleFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipDeleteRequest {
    return { filter: isSet(object.filter) ? TupleFilter.fromJSON(object.filter) : undefined };
  },

  toJSON(message: RelationshipDeleteRequest): unknown {
    const obj: any = {};
    message.filter !== undefined && (obj.filter = message.filter ? TupleFilter.toJSON(message.filter) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipDeleteRequest>): RelationshipDeleteRequest {
    const message = createBaseRelationshipDeleteRequest();
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? TupleFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseRelationshipDeleteResponse(): RelationshipDeleteResponse {
  return { snapToken: "" };
}

export const RelationshipDeleteResponse = {
  encode(message: RelationshipDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationshipDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipDeleteResponse {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: RelationshipDeleteResponse): unknown {
    const obj: any = {};
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipDeleteResponse>): RelationshipDeleteResponse {
    const message = createBaseRelationshipDeleteResponse();
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBasewelcomeResponse(): welcomeResponse {
  return { permify: "", sources: undefined, socials: undefined };
}

export const welcomeResponse = {
  encode(message: welcomeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.permify !== "") {
      writer.uint32(10).string(message.permify);
    }
    if (message.sources !== undefined) {
      welcomeResponse_Sources.encode(message.sources, writer.uint32(18).fork()).ldelim();
    }
    if (message.socials !== undefined) {
      welcomeResponse_Socials.encode(message.socials, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): welcomeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasewelcomeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permify = reader.string();
          break;
        case 2:
          message.sources = welcomeResponse_Sources.decode(reader, reader.uint32());
          break;
        case 3:
          message.socials = welcomeResponse_Socials.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): welcomeResponse {
    return {
      permify: isSet(object.permify) ? String(object.permify) : "",
      sources: isSet(object.sources) ? welcomeResponse_Sources.fromJSON(object.sources) : undefined,
      socials: isSet(object.socials) ? welcomeResponse_Socials.fromJSON(object.socials) : undefined,
    };
  },

  toJSON(message: welcomeResponse): unknown {
    const obj: any = {};
    message.permify !== undefined && (obj.permify = message.permify);
    message.sources !== undefined &&
      (obj.sources = message.sources ? welcomeResponse_Sources.toJSON(message.sources) : undefined);
    message.socials !== undefined &&
      (obj.socials = message.socials ? welcomeResponse_Socials.toJSON(message.socials) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<welcomeResponse>): welcomeResponse {
    const message = createBasewelcomeResponse();
    message.permify = object.permify ?? "";
    message.sources = (object.sources !== undefined && object.sources !== null)
      ? welcomeResponse_Sources.fromPartial(object.sources)
      : undefined;
    message.socials = (object.socials !== undefined && object.socials !== null)
      ? welcomeResponse_Socials.fromPartial(object.socials)
      : undefined;
    return message;
  },
};

function createBasewelcomeResponse_Sources(): welcomeResponse_Sources {
  return { docs: "", gitHub: "", blog: "" };
}

export const welcomeResponse_Sources = {
  encode(message: welcomeResponse_Sources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.docs !== "") {
      writer.uint32(10).string(message.docs);
    }
    if (message.gitHub !== "") {
      writer.uint32(18).string(message.gitHub);
    }
    if (message.blog !== "") {
      writer.uint32(26).string(message.blog);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): welcomeResponse_Sources {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasewelcomeResponse_Sources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.docs = reader.string();
          break;
        case 2:
          message.gitHub = reader.string();
          break;
        case 3:
          message.blog = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): welcomeResponse_Sources {
    return {
      docs: isSet(object.docs) ? String(object.docs) : "",
      gitHub: isSet(object.gitHub) ? String(object.gitHub) : "",
      blog: isSet(object.blog) ? String(object.blog) : "",
    };
  },

  toJSON(message: welcomeResponse_Sources): unknown {
    const obj: any = {};
    message.docs !== undefined && (obj.docs = message.docs);
    message.gitHub !== undefined && (obj.gitHub = message.gitHub);
    message.blog !== undefined && (obj.blog = message.blog);
    return obj;
  },

  fromPartial(object: DeepPartial<welcomeResponse_Sources>): welcomeResponse_Sources {
    const message = createBasewelcomeResponse_Sources();
    message.docs = object.docs ?? "";
    message.gitHub = object.gitHub ?? "";
    message.blog = object.blog ?? "";
    return message;
  },
};

function createBasewelcomeResponse_Socials(): welcomeResponse_Socials {
  return { discord: "", twitter: "", linkedin: "" };
}

export const welcomeResponse_Socials = {
  encode(message: welcomeResponse_Socials, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.discord !== "") {
      writer.uint32(10).string(message.discord);
    }
    if (message.twitter !== "") {
      writer.uint32(18).string(message.twitter);
    }
    if (message.linkedin !== "") {
      writer.uint32(26).string(message.linkedin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): welcomeResponse_Socials {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasewelcomeResponse_Socials();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.discord = reader.string();
          break;
        case 2:
          message.twitter = reader.string();
          break;
        case 3:
          message.linkedin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): welcomeResponse_Socials {
    return {
      discord: isSet(object.discord) ? String(object.discord) : "",
      twitter: isSet(object.twitter) ? String(object.twitter) : "",
      linkedin: isSet(object.linkedin) ? String(object.linkedin) : "",
    };
  },

  toJSON(message: welcomeResponse_Socials): unknown {
    const obj: any = {};
    message.discord !== undefined && (obj.discord = message.discord);
    message.twitter !== undefined && (obj.twitter = message.twitter);
    message.linkedin !== undefined && (obj.linkedin = message.linkedin);
    return obj;
  },

  fromPartial(object: DeepPartial<welcomeResponse_Socials>): welcomeResponse_Socials {
    const message = createBasewelcomeResponse_Socials();
    message.discord = object.discord ?? "";
    message.twitter = object.twitter ?? "";
    message.linkedin = object.linkedin ?? "";
    return message;
  },
};

/** Permission */
export type PermissionDefinition = typeof PermissionDefinition;
export const PermissionDefinition = {
  name: "Permission",
  fullName: "base.v1.Permission",
  methods: {
    check: {
      name: "Check",
      requestType: PermissionCheckRequest,
      requestStream: false,
      responseType: PermissionCheckResponse,
      responseStream: false,
      options: {},
    },
    expand: {
      name: "Expand",
      requestType: PermissionExpandRequest,
      requestStream: false,
      responseType: PermissionExpandResponse,
      responseStream: false,
      options: {},
    },
    lookupSchema: {
      name: "LookupSchema",
      requestType: PermissionLookupSchemaRequest,
      requestStream: false,
      responseType: PermissionLookupSchemaResponse,
      responseStream: false,
      options: {},
    },
    lookupEntity: {
      name: "LookupEntity",
      requestType: PermissionLookupEntityRequest,
      requestStream: false,
      responseType: PermissionLookupEntityResponse,
      responseStream: false,
      options: {},
    },
    lookupEntityStream: {
      name: "LookupEntityStream",
      requestType: PermissionLookupEntityRequest,
      requestStream: false,
      responseType: PermissionLookupEntityStreamResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface PermissionServiceImplementation<CallContextExt = {}> {
  check(
    request: PermissionCheckRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionCheckResponse>>;
  expand(
    request: PermissionExpandRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionExpandResponse>>;
  lookupSchema(
    request: PermissionLookupSchemaRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionLookupSchemaResponse>>;
  lookupEntity(
    request: PermissionLookupEntityRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionLookupEntityResponse>>;
  lookupEntityStream(
    request: PermissionLookupEntityRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<PermissionLookupEntityStreamResponse>>;
}

export interface PermissionClient<CallOptionsExt = {}> {
  check(
    request: DeepPartial<PermissionCheckRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionCheckResponse>;
  expand(
    request: DeepPartial<PermissionExpandRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionExpandResponse>;
  lookupSchema(
    request: DeepPartial<PermissionLookupSchemaRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionLookupSchemaResponse>;
  lookupEntity(
    request: DeepPartial<PermissionLookupEntityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionLookupEntityResponse>;
  lookupEntityStream(
    request: DeepPartial<PermissionLookupEntityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<PermissionLookupEntityStreamResponse>;
}

/** Schema */
export type SchemaDefinition = typeof SchemaDefinition;
export const SchemaDefinition = {
  name: "Schema",
  fullName: "base.v1.Schema",
  methods: {
    write: {
      name: "Write",
      requestType: SchemaWriteRequest,
      requestStream: false,
      responseType: SchemaWriteResponse,
      responseStream: false,
      options: {},
    },
    read: {
      name: "Read",
      requestType: SchemaReadRequest,
      requestStream: false,
      responseType: SchemaReadResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface SchemaServiceImplementation<CallContextExt = {}> {
  write(request: SchemaWriteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SchemaWriteResponse>>;
  read(request: SchemaReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SchemaReadResponse>>;
}

export interface SchemaClient<CallOptionsExt = {}> {
  write(request: DeepPartial<SchemaWriteRequest>, options?: CallOptions & CallOptionsExt): Promise<SchemaWriteResponse>;
  read(request: DeepPartial<SchemaReadRequest>, options?: CallOptions & CallOptionsExt): Promise<SchemaReadResponse>;
}

/** Schema */
export type RelationshipDefinition = typeof RelationshipDefinition;
export const RelationshipDefinition = {
  name: "Relationship",
  fullName: "base.v1.Relationship",
  methods: {
    write: {
      name: "Write",
      requestType: RelationshipWriteRequest,
      requestStream: false,
      responseType: RelationshipWriteResponse,
      responseStream: false,
      options: {},
    },
    read: {
      name: "Read",
      requestType: RelationshipReadRequest,
      requestStream: false,
      responseType: RelationshipReadResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: RelationshipDeleteRequest,
      requestStream: false,
      responseType: RelationshipDeleteResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface RelationshipServiceImplementation<CallContextExt = {}> {
  write(
    request: RelationshipWriteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RelationshipWriteResponse>>;
  read(
    request: RelationshipReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RelationshipReadResponse>>;
  delete(
    request: RelationshipDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RelationshipDeleteResponse>>;
}

export interface RelationshipClient<CallOptionsExt = {}> {
  write(
    request: DeepPartial<RelationshipWriteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RelationshipWriteResponse>;
  read(
    request: DeepPartial<RelationshipReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RelationshipReadResponse>;
  delete(
    request: DeepPartial<RelationshipDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RelationshipDeleteResponse>;
}

/** * WELCOME SERVICE ** */
export type WelcomeDefinition = typeof WelcomeDefinition;
export const WelcomeDefinition = {
  name: "Welcome",
  fullName: "base.v1.Welcome",
  methods: {
    hello: {
      name: "Hello",
      requestType: Empty,
      requestStream: false,
      responseType: welcomeResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface WelcomeServiceImplementation<CallContextExt = {}> {
  hello(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<welcomeResponse>>;
}

export interface WelcomeClient<CallOptionsExt = {}> {
  hello(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<welcomeResponse>;
}

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

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
