/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import {
  Entity,
  Expand,
  RelationReference,
  SchemaDefinition as SchemaDefinition1,
  Subject,
  Tenant,
  Tuple,
  TupleChanges,
  TupleFilter,
} from "./base";

export const protobufPackage = "base.v1";

/** PermissionCheckRequest */
export interface PermissionCheckRequest {
  tenantId: string;
  metadata: PermissionCheckRequestMetadata | undefined;
  entity:
    | Entity
    | undefined;
  /** its can be permission or relation */
  permission: string;
  subject: Subject | undefined;
}

/** PermissionCheckRequestMetadata */
export interface PermissionCheckRequestMetadata {
  schemaVersion: string;
  snapToken: string;
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
  tenantId: string;
  metadata: PermissionExpandRequestMetadata | undefined;
  entity: Entity | undefined;
  permission: string;
}

/** PermissionExpandRequestMetadata */
export interface PermissionExpandRequestMetadata {
  schemaVersion: string;
  snapToken: string;
}

/** PermissionExpandResponse */
export interface PermissionExpandResponse {
  tree: Expand | undefined;
}

/** PermissionLookupEntityRequest */
export interface PermissionLookupEntityRequest {
  tenantId: string;
  metadata: PermissionLookupEntityRequestMetadata | undefined;
  entityType: string;
  permission: string;
  subject: Subject | undefined;
}

/** PermissionLookupEntityRequestMetadata */
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

/** PermissionEntityFilterRequest */
export interface PermissionEntityFilterRequest {
  tenantId: string;
  metadata: PermissionEntityFilterRequestMetadata | undefined;
  entityReference: RelationReference | undefined;
  subject: Subject | undefined;
}

/** PermissionLookupEntityRequestMetadata */
export interface PermissionEntityFilterRequestMetadata {
  schemaVersion: string;
  snapToken: string;
  depth: number;
}

/** PermissionLookupSubjectRequest */
export interface PermissionLookupSubjectRequest {
  tenantId: string;
  metadata: PermissionLookupSubjectRequestMetadata | undefined;
  entity:
    | Entity
    | undefined;
  /** its can be permission or relation */
  permission: string;
  subjectReference: RelationReference | undefined;
}

/** PermissionLookupSubjectRequestMetadata */
export interface PermissionLookupSubjectRequestMetadata {
  schemaVersion: string;
  snapToken: string;
}

/** PermissionLookupSubjectResponse */
export interface PermissionLookupSubjectResponse {
  subjectIds: string[];
}

/** WatchRequest */
export interface WatchRequest {
  tenantId: string;
  snapToken: string;
}

/** WatchResponse */
export interface WatchResponse {
  changes: TupleChanges | undefined;
}

/** SchemaWriteRequest */
export interface SchemaWriteRequest {
  tenantId: string;
  schema: string;
}

/** SchemaWriteResponse */
export interface SchemaWriteResponse {
  schemaVersion: string;
}

/** SchemaReadRequest */
export interface SchemaReadRequest {
  tenantId: string;
  metadata: SchemaReadRequestMetadata | undefined;
}

/** SchemaReadRequestMetadata */
export interface SchemaReadRequestMetadata {
  schemaVersion: string;
}

/** SchemaReadRequest */
export interface SchemaReadResponse {
  schema: SchemaDefinition1 | undefined;
}

/** RelationshipWriteRequest */
export interface RelationshipWriteRequest {
  tenantId: string;
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
  tenantId: string;
  metadata: RelationshipReadRequestMetadata | undefined;
  filter: TupleFilter | undefined;
  pageSize: number;
  continuousToken: string;
}

/** RelationshipWriteRequestMetadata */
export interface RelationshipReadRequestMetadata {
  snapToken: string;
}

/** RelationshipReadResponse */
export interface RelationshipReadResponse {
  tuples: Tuple[];
  continuousToken: string;
}

/** RelationshipDeleteRequest */
export interface RelationshipDeleteRequest {
  tenantId: string;
  filter: TupleFilter | undefined;
}

/** RelationshipDeleteResponse */
export interface RelationshipDeleteResponse {
  snapToken: string;
}

/** TenantCreateRequest */
export interface TenantCreateRequest {
  id: string;
  name: string;
}

/** TenantCreateResponse */
export interface TenantCreateResponse {
  tenant: Tenant | undefined;
}

/** TenantDeleteRequest */
export interface TenantDeleteRequest {
  id: string;
}

/** TenantDeleteResponse */
export interface TenantDeleteResponse {
  tenant: Tenant | undefined;
}

/** TenantListRequest */
export interface TenantListRequest {
  pageSize: number;
  continuousToken: string;
}

/** TenantListResponse */
export interface TenantListResponse {
  tenants: Tenant[];
  continuousToken: string;
}

function createBasePermissionCheckRequest(): PermissionCheckRequest {
  return { tenantId: "", metadata: undefined, entity: undefined, permission: "", subject: undefined };
}

export const PermissionCheckRequest = {
  encode(message: PermissionCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      PermissionCheckRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(26).fork()).ldelim();
    }
    if (message.permission !== "") {
      writer.uint32(34).string(message.permission);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
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
          message.tenantId = reader.string();
          break;
        case 2:
          message.metadata = PermissionCheckRequestMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        case 4:
          message.permission = reader.string();
          break;
        case 5:
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
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? PermissionCheckRequestMetadata.fromJSON(object.metadata) : undefined,
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      permission: isSet(object.permission) ? String(object.permission) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PermissionCheckRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionCheckRequestMetadata.toJSON(message.metadata) : undefined);
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.permission !== undefined && (obj.permission = message.permission);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionCheckRequest>): PermissionCheckRequest {
    const message = createBasePermissionCheckRequest();
    message.tenantId = object.tenantId ?? "";
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
  return { schemaVersion: "", snapToken: "", depth: 0 };
}

export const PermissionCheckRequestMetadata = {
  encode(message: PermissionCheckRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: PermissionCheckRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionCheckRequestMetadata>): PermissionCheckRequestMetadata {
    const message = createBasePermissionCheckRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
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
  return { tenantId: "", metadata: undefined, entity: undefined, permission: "" };
}

export const PermissionExpandRequest = {
  encode(message: PermissionExpandRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      PermissionExpandRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(26).fork()).ldelim();
    }
    if (message.permission !== "") {
      writer.uint32(34).string(message.permission);
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
          message.tenantId = reader.string();
          break;
        case 2:
          message.metadata = PermissionExpandRequestMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        case 4:
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
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? PermissionExpandRequestMetadata.fromJSON(object.metadata) : undefined,
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      permission: isSet(object.permission) ? String(object.permission) : "",
    };
  },

  toJSON(message: PermissionExpandRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionExpandRequestMetadata.toJSON(message.metadata) : undefined);
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.permission !== undefined && (obj.permission = message.permission);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionExpandRequest>): PermissionExpandRequest {
    const message = createBasePermissionExpandRequest();
    message.tenantId = object.tenantId ?? "";
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

function createBasePermissionLookupEntityRequest(): PermissionLookupEntityRequest {
  return { tenantId: "", metadata: undefined, entityType: "", permission: "", subject: undefined };
}

export const PermissionLookupEntityRequest = {
  encode(message: PermissionLookupEntityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      PermissionLookupEntityRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.entityType !== "") {
      writer.uint32(26).string(message.entityType);
    }
    if (message.permission !== "") {
      writer.uint32(34).string(message.permission);
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(42).fork()).ldelim();
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
          message.tenantId = reader.string();
          break;
        case 2:
          message.metadata = PermissionLookupEntityRequestMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.entityType = reader.string();
          break;
        case 4:
          message.permission = reader.string();
          break;
        case 5:
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
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? PermissionLookupEntityRequestMetadata.fromJSON(object.metadata) : undefined,
      entityType: isSet(object.entity_type) ? String(object.entity_type) : "",
      permission: isSet(object.permission) ? String(object.permission) : "",
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PermissionLookupEntityRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionLookupEntityRequestMetadata.toJSON(message.metadata) : undefined);
    message.entityType !== undefined && (obj.entity_type = message.entityType);
    message.permission !== undefined && (obj.permission = message.permission);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupEntityRequest>): PermissionLookupEntityRequest {
    const message = createBasePermissionLookupEntityRequest();
    message.tenantId = object.tenantId ?? "";
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

function createBasePermissionEntityFilterRequest(): PermissionEntityFilterRequest {
  return { tenantId: "", metadata: undefined, entityReference: undefined, subject: undefined };
}

export const PermissionEntityFilterRequest = {
  encode(message: PermissionEntityFilterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      PermissionEntityFilterRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.entityReference !== undefined) {
      RelationReference.encode(message.entityReference, writer.uint32(26).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionEntityFilterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionEntityFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.metadata = PermissionEntityFilterRequestMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.entityReference = RelationReference.decode(reader, reader.uint32());
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

  fromJSON(object: any): PermissionEntityFilterRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? PermissionEntityFilterRequestMetadata.fromJSON(object.metadata) : undefined,
      entityReference: isSet(object.entity_reference) ? RelationReference.fromJSON(object.entity_reference) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
    };
  },

  toJSON(message: PermissionEntityFilterRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionEntityFilterRequestMetadata.toJSON(message.metadata) : undefined);
    message.entityReference !== undefined &&
      (obj.entity_reference = message.entityReference ? RelationReference.toJSON(message.entityReference) : undefined);
    message.subject !== undefined && (obj.subject = message.subject ? Subject.toJSON(message.subject) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionEntityFilterRequest>): PermissionEntityFilterRequest {
    const message = createBasePermissionEntityFilterRequest();
    message.tenantId = object.tenantId ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionEntityFilterRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.entityReference = (object.entityReference !== undefined && object.entityReference !== null)
      ? RelationReference.fromPartial(object.entityReference)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    return message;
  },
};

function createBasePermissionEntityFilterRequestMetadata(): PermissionEntityFilterRequestMetadata {
  return { schemaVersion: "", snapToken: "", depth: 0 };
}

export const PermissionEntityFilterRequestMetadata = {
  encode(message: PermissionEntityFilterRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionEntityFilterRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionEntityFilterRequestMetadata();
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

  fromJSON(object: any): PermissionEntityFilterRequestMetadata {
    return {
      schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: PermissionEntityFilterRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionEntityFilterRequestMetadata>): PermissionEntityFilterRequestMetadata {
    const message = createBasePermissionEntityFilterRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBasePermissionLookupSubjectRequest(): PermissionLookupSubjectRequest {
  return { tenantId: "", metadata: undefined, entity: undefined, permission: "", subjectReference: undefined };
}

export const PermissionLookupSubjectRequest = {
  encode(message: PermissionLookupSubjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      PermissionLookupSubjectRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(26).fork()).ldelim();
    }
    if (message.permission !== "") {
      writer.uint32(34).string(message.permission);
    }
    if (message.subjectReference !== undefined) {
      RelationReference.encode(message.subjectReference, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSubjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSubjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
          break;
        case 2:
          message.metadata = PermissionLookupSubjectRequestMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.entity = Entity.decode(reader, reader.uint32());
          break;
        case 4:
          message.permission = reader.string();
          break;
        case 5:
          message.subjectReference = RelationReference.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupSubjectRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? PermissionLookupSubjectRequestMetadata.fromJSON(object.metadata) : undefined,
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      permission: isSet(object.permission) ? String(object.permission) : "",
      subjectReference: isSet(object.subject_reference)
        ? RelationReference.fromJSON(object.subject_reference)
        : undefined,
    };
  },

  toJSON(message: PermissionLookupSubjectRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? PermissionLookupSubjectRequestMetadata.toJSON(message.metadata) : undefined);
    message.entity !== undefined && (obj.entity = message.entity ? Entity.toJSON(message.entity) : undefined);
    message.permission !== undefined && (obj.permission = message.permission);
    message.subjectReference !== undefined &&
      (obj.subject_reference = message.subjectReference
        ? RelationReference.toJSON(message.subjectReference)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupSubjectRequest>): PermissionLookupSubjectRequest {
    const message = createBasePermissionLookupSubjectRequest();
    message.tenantId = object.tenantId ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionLookupSubjectRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.permission = object.permission ?? "";
    message.subjectReference = (object.subjectReference !== undefined && object.subjectReference !== null)
      ? RelationReference.fromPartial(object.subjectReference)
      : undefined;
    return message;
  },
};

function createBasePermissionLookupSubjectRequestMetadata(): PermissionLookupSubjectRequestMetadata {
  return { schemaVersion: "", snapToken: "" };
}

export const PermissionLookupSubjectRequestMetadata = {
  encode(message: PermissionLookupSubjectRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    if (message.snapToken !== "") {
      writer.uint32(18).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSubjectRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSubjectRequestMetadata();
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

  fromJSON(object: any): PermissionLookupSubjectRequestMetadata {
    return {
      schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
    };
  },

  toJSON(message: PermissionLookupSubjectRequestMetadata): unknown {
    const obj: any = {};
    message.schemaVersion !== undefined && (obj.schema_version = message.schemaVersion);
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupSubjectRequestMetadata>): PermissionLookupSubjectRequestMetadata {
    const message = createBasePermissionLookupSubjectRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBasePermissionLookupSubjectResponse(): PermissionLookupSubjectResponse {
  return { subjectIds: [] };
}

export const PermissionLookupSubjectResponse = {
  encode(message: PermissionLookupSubjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subjectIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSubjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSubjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupSubjectResponse {
    return { subjectIds: Array.isArray(object?.subject_ids) ? object.subject_ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: PermissionLookupSubjectResponse): unknown {
    const obj: any = {};
    if (message.subjectIds) {
      obj.subject_ids = message.subjectIds.map((e) => e);
    } else {
      obj.subject_ids = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<PermissionLookupSubjectResponse>): PermissionLookupSubjectResponse {
    const message = createBasePermissionLookupSubjectResponse();
    message.subjectIds = object.subjectIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseWatchRequest(): WatchRequest {
  return { tenantId: "", snapToken: "" };
}

export const WatchRequest = {
  encode(message: WatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.snapToken !== "") {
      writer.uint32(18).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenantId = reader.string();
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

  fromJSON(object: any): WatchRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
    };
  },

  toJSON(message: WatchRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.snapToken !== undefined && (obj.snap_token = message.snapToken);
    return obj;
  },

  fromPartial(object: DeepPartial<WatchRequest>): WatchRequest {
    const message = createBaseWatchRequest();
    message.tenantId = object.tenantId ?? "";
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBaseWatchResponse(): WatchResponse {
  return { changes: undefined };
}

export const WatchResponse = {
  encode(message: WatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.changes !== undefined) {
      TupleChanges.encode(message.changes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.changes = TupleChanges.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WatchResponse {
    return { changes: isSet(object.changes) ? TupleChanges.fromJSON(object.changes) : undefined };
  },

  toJSON(message: WatchResponse): unknown {
    const obj: any = {};
    message.changes !== undefined && (obj.changes = message.changes ? TupleChanges.toJSON(message.changes) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WatchResponse>): WatchResponse {
    const message = createBaseWatchResponse();
    message.changes = (object.changes !== undefined && object.changes !== null)
      ? TupleChanges.fromPartial(object.changes)
      : undefined;
    return message;
  },
};

function createBaseSchemaWriteRequest(): SchemaWriteRequest {
  return { tenantId: "", schema: "" };
}

export const SchemaWriteRequest = {
  encode(message: SchemaWriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.schema !== "") {
      writer.uint32(18).string(message.schema);
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
          message.tenantId = reader.string();
          break;
        case 2:
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
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
    };
  },

  toJSON(message: SchemaWriteRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.schema !== undefined && (obj.schema = message.schema);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaWriteRequest>): SchemaWriteRequest {
    const message = createBaseSchemaWriteRequest();
    message.tenantId = object.tenantId ?? "";
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
  return { tenantId: "", metadata: undefined };
}

export const SchemaReadRequest = {
  encode(message: SchemaReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      SchemaReadRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
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
          message.tenantId = reader.string();
          break;
        case 2:
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
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? SchemaReadRequestMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: SchemaReadRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? SchemaReadRequestMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaReadRequest>): SchemaReadRequest {
    const message = createBaseSchemaReadRequest();
    message.tenantId = object.tenantId ?? "";
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
      SchemaDefinition1.encode(message.schema, writer.uint32(10).fork()).ldelim();
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
          message.schema = SchemaDefinition1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchemaReadResponse {
    return { schema: isSet(object.schema) ? SchemaDefinition1.fromJSON(object.schema) : undefined };
  },

  toJSON(message: SchemaReadResponse): unknown {
    const obj: any = {};
    message.schema !== undefined &&
      (obj.schema = message.schema ? SchemaDefinition1.toJSON(message.schema) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SchemaReadResponse>): SchemaReadResponse {
    const message = createBaseSchemaReadResponse();
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? SchemaDefinition1.fromPartial(object.schema)
      : undefined;
    return message;
  },
};

function createBaseRelationshipWriteRequest(): RelationshipWriteRequest {
  return { tenantId: "", metadata: undefined, tuples: [] };
}

export const RelationshipWriteRequest = {
  encode(message: RelationshipWriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      RelationshipWriteRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tuples) {
      Tuple.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.tenantId = reader.string();
          break;
        case 2:
          message.metadata = RelationshipWriteRequestMetadata.decode(reader, reader.uint32());
          break;
        case 3:
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
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? RelationshipWriteRequestMetadata.fromJSON(object.metadata) : undefined,
      tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [],
    };
  },

  toJSON(message: RelationshipWriteRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
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
    message.tenantId = object.tenantId ?? "";
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
  return { tenantId: "", metadata: undefined, filter: undefined, pageSize: 0, continuousToken: "" };
}

export const RelationshipReadRequest = {
  encode(message: RelationshipReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      RelationshipReadRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      TupleFilter.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).uint32(message.pageSize);
    }
    if (message.continuousToken !== "") {
      writer.uint32(42).string(message.continuousToken);
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
          message.tenantId = reader.string();
          break;
        case 2:
          message.metadata = RelationshipReadRequestMetadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.filter = TupleFilter.decode(reader, reader.uint32());
          break;
        case 4:
          message.pageSize = reader.uint32();
          break;
        case 5:
          message.continuousToken = reader.string();
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
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? RelationshipReadRequestMetadata.fromJSON(object.metadata) : undefined,
      filter: isSet(object.filter) ? TupleFilter.fromJSON(object.filter) : undefined,
      pageSize: isSet(object.page_size) ? Number(object.page_size) : 0,
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: RelationshipReadRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata ? RelationshipReadRequestMetadata.toJSON(message.metadata) : undefined);
    message.filter !== undefined && (obj.filter = message.filter ? TupleFilter.toJSON(message.filter) : undefined);
    message.pageSize !== undefined && (obj.page_size = Math.round(message.pageSize));
    message.continuousToken !== undefined && (obj.continuous_token = message.continuousToken);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipReadRequest>): RelationshipReadRequest {
    const message = createBaseRelationshipReadRequest();
    message.tenantId = object.tenantId ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? RelationshipReadRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? TupleFilter.fromPartial(object.filter)
      : undefined;
    message.pageSize = object.pageSize ?? 0;
    message.continuousToken = object.continuousToken ?? "";
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
  return { tuples: [], continuousToken: "" };
}

export const RelationshipReadResponse = {
  encode(message: RelationshipReadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tuples) {
      Tuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.continuousToken !== "") {
      writer.uint32(18).string(message.continuousToken);
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
        case 2:
          message.continuousToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RelationshipReadResponse {
    return {
      tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [],
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: RelationshipReadResponse): unknown {
    const obj: any = {};
    if (message.tuples) {
      obj.tuples = message.tuples.map((e) => e ? Tuple.toJSON(e) : undefined);
    } else {
      obj.tuples = [];
    }
    message.continuousToken !== undefined && (obj.continuous_token = message.continuousToken);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipReadResponse>): RelationshipReadResponse {
    const message = createBaseRelationshipReadResponse();
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

function createBaseRelationshipDeleteRequest(): RelationshipDeleteRequest {
  return { tenantId: "", filter: undefined };
}

export const RelationshipDeleteRequest = {
  encode(message: RelationshipDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.filter !== undefined) {
      TupleFilter.encode(message.filter, writer.uint32(18).fork()).ldelim();
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
          message.tenantId = reader.string();
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

  fromJSON(object: any): RelationshipDeleteRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      filter: isSet(object.filter) ? TupleFilter.fromJSON(object.filter) : undefined,
    };
  },

  toJSON(message: RelationshipDeleteRequest): unknown {
    const obj: any = {};
    message.tenantId !== undefined && (obj.tenant_id = message.tenantId);
    message.filter !== undefined && (obj.filter = message.filter ? TupleFilter.toJSON(message.filter) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RelationshipDeleteRequest>): RelationshipDeleteRequest {
    const message = createBaseRelationshipDeleteRequest();
    message.tenantId = object.tenantId ?? "";
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

function createBaseTenantCreateRequest(): TenantCreateRequest {
  return { id: "", name: "" };
}

export const TenantCreateRequest = {
  encode(message: TenantCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TenantCreateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TenantCreateRequest {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: TenantCreateRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<TenantCreateRequest>): TenantCreateRequest {
    const message = createBaseTenantCreateRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseTenantCreateResponse(): TenantCreateResponse {
  return { tenant: undefined };
}

export const TenantCreateResponse = {
  encode(message: TenantCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenant !== undefined) {
      Tenant.encode(message.tenant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TenantCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenant = Tenant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TenantCreateResponse {
    return { tenant: isSet(object.tenant) ? Tenant.fromJSON(object.tenant) : undefined };
  },

  toJSON(message: TenantCreateResponse): unknown {
    const obj: any = {};
    message.tenant !== undefined && (obj.tenant = message.tenant ? Tenant.toJSON(message.tenant) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TenantCreateResponse>): TenantCreateResponse {
    const message = createBaseTenantCreateResponse();
    message.tenant = (object.tenant !== undefined && object.tenant !== null)
      ? Tenant.fromPartial(object.tenant)
      : undefined;
    return message;
  },
};

function createBaseTenantDeleteRequest(): TenantDeleteRequest {
  return { id: "" };
}

export const TenantDeleteRequest = {
  encode(message: TenantDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TenantDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TenantDeleteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: TenantDeleteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<TenantDeleteRequest>): TenantDeleteRequest {
    const message = createBaseTenantDeleteRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseTenantDeleteResponse(): TenantDeleteResponse {
  return { tenant: undefined };
}

export const TenantDeleteResponse = {
  encode(message: TenantDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenant !== undefined) {
      Tenant.encode(message.tenant, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TenantDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenant = Tenant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TenantDeleteResponse {
    return { tenant: isSet(object.tenant) ? Tenant.fromJSON(object.tenant) : undefined };
  },

  toJSON(message: TenantDeleteResponse): unknown {
    const obj: any = {};
    message.tenant !== undefined && (obj.tenant = message.tenant ? Tenant.toJSON(message.tenant) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TenantDeleteResponse>): TenantDeleteResponse {
    const message = createBaseTenantDeleteResponse();
    message.tenant = (object.tenant !== undefined && object.tenant !== null)
      ? Tenant.fromPartial(object.tenant)
      : undefined;
    return message;
  },
};

function createBaseTenantListRequest(): TenantListRequest {
  return { pageSize: 0, continuousToken: "" };
}

export const TenantListRequest = {
  encode(message: TenantListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageSize !== 0) {
      writer.uint32(8).uint32(message.pageSize);
    }
    if (message.continuousToken !== "") {
      writer.uint32(18).string(message.continuousToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TenantListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageSize = reader.uint32();
          break;
        case 2:
          message.continuousToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TenantListRequest {
    return {
      pageSize: isSet(object.page_size) ? Number(object.page_size) : 0,
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: TenantListRequest): unknown {
    const obj: any = {};
    message.pageSize !== undefined && (obj.page_size = Math.round(message.pageSize));
    message.continuousToken !== undefined && (obj.continuous_token = message.continuousToken);
    return obj;
  },

  fromPartial(object: DeepPartial<TenantListRequest>): TenantListRequest {
    const message = createBaseTenantListRequest();
    message.pageSize = object.pageSize ?? 0;
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

function createBaseTenantListResponse(): TenantListResponse {
  return { tenants: [], continuousToken: "" };
}

export const TenantListResponse = {
  encode(message: TenantListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tenants) {
      Tenant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.continuousToken !== "") {
      writer.uint32(18).string(message.continuousToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TenantListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tenants.push(Tenant.decode(reader, reader.uint32()));
          break;
        case 2:
          message.continuousToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TenantListResponse {
    return {
      tenants: Array.isArray(object?.tenants) ? object.tenants.map((e: any) => Tenant.fromJSON(e)) : [],
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: TenantListResponse): unknown {
    const obj: any = {};
    if (message.tenants) {
      obj.tenants = message.tenants.map((e) => e ? Tenant.toJSON(e) : undefined);
    } else {
      obj.tenants = [];
    }
    message.continuousToken !== undefined && (obj.continuous_token = message.continuousToken);
    return obj;
  },

  fromPartial(object: DeepPartial<TenantListResponse>): TenantListResponse {
    const message = createBaseTenantListResponse();
    message.tenants = object.tenants?.map((e) => Tenant.fromPartial(e)) || [];
    message.continuousToken = object.continuousToken ?? "";
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
    lookupSubject: {
      name: "LookupSubject",
      requestType: PermissionLookupSubjectRequest,
      requestStream: false,
      responseType: PermissionLookupSubjectResponse,
      responseStream: false,
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
  lookupEntity(
    request: PermissionLookupEntityRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionLookupEntityResponse>>;
  lookupEntityStream(
    request: PermissionLookupEntityRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<PermissionLookupEntityStreamResponse>>;
  lookupSubject(
    request: PermissionLookupSubjectRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionLookupSubjectResponse>>;
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
  lookupEntity(
    request: DeepPartial<PermissionLookupEntityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionLookupEntityResponse>;
  lookupEntityStream(
    request: DeepPartial<PermissionLookupEntityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<PermissionLookupEntityStreamResponse>;
  lookupSubject(
    request: DeepPartial<PermissionLookupSubjectRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionLookupSubjectResponse>;
}

/** Watch */
export type WatchDefinition = typeof WatchDefinition;
export const WatchDefinition = {
  name: "Watch",
  fullName: "base.v1.Watch",
  methods: {
    watch: {
      name: "Watch",
      requestType: WatchRequest,
      requestStream: false,
      responseType: WatchResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface WatchServiceImplementation<CallContextExt = {}> {
  watch(
    request: WatchRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<WatchResponse>>;
}

export interface WatchClient<CallOptionsExt = {}> {
  watch(request: DeepPartial<WatchRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<WatchResponse>;
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

export type TenancyDefinition = typeof TenancyDefinition;
export const TenancyDefinition = {
  name: "Tenancy",
  fullName: "base.v1.Tenancy",
  methods: {
    create: {
      name: "Create",
      requestType: TenantCreateRequest,
      requestStream: false,
      responseType: TenantCreateResponse,
      responseStream: false,
      options: {},
    },
    delete: {
      name: "Delete",
      requestType: TenantDeleteRequest,
      requestStream: false,
      responseType: TenantDeleteResponse,
      responseStream: false,
      options: {},
    },
    list: {
      name: "List",
      requestType: TenantListRequest,
      requestStream: false,
      responseType: TenantListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface TenancyServiceImplementation<CallContextExt = {}> {
  create(
    request: TenantCreateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TenantCreateResponse>>;
  delete(
    request: TenantDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TenantDeleteResponse>>;
  list(request: TenantListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TenantListResponse>>;
}

export interface TenancyClient<CallOptionsExt = {}> {
  create(
    request: DeepPartial<TenantCreateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TenantCreateResponse>;
  delete(
    request: DeepPartial<TenantDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TenantDeleteResponse>;
  list(request: DeepPartial<TenantListRequest>, options?: CallOptions & CallOptionsExt): Promise<TenantListResponse>;
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
