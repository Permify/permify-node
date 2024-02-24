/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import {
  Argument,
  Attribute,
  AttributeFilter,
  CheckResult,
  checkResultFromJSON,
  checkResultToJSON,
  Context,
  DataBundle,
  DataChanges,
  Entity,
  Expand,
  RelationReference,
  SchemaDefinition as SchemaDefinition1,
  Subject,
  Tenant,
  Tuple,
  TupleFilter,
} from "./base";

export const protobufPackage = "base.v1";

/** PermissionCheckRequest is the request message for the Check method in the Permission service. */
export interface PermissionCheckRequest {
  /** Identifier of the tenant, required, and must match the pattern "[a-zA-Z0-9-,]+", max 64 bytes. */
  tenantId: string;
  /** Metadata associated with this request, required. */
  metadata:
    | PermissionCheckRequestMetadata
    | undefined;
  /** Entity on which the permission needs to be checked, required. */
  entity:
    | Entity
    | undefined;
  /** Name of the permission or relation, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes. */
  permission: string;
  /** Subject for which the permission needs to be checked, required. */
  subject:
    | Subject
    | undefined;
  /** Context associated with this request. */
  context:
    | Context
    | undefined;
  /** Additional arguments associated with this request. */
  arguments: Argument[];
}

/** PermissionCheckRequestMetadata is the metadata associated with a PermissionCheckRequest. */
export interface PermissionCheckRequestMetadata {
  /** Version of the schema. */
  schemaVersion: string;
  /** Token associated with the snap. */
  snapToken: string;
  /** Depth of the check, must be greater than or equal to 3. */
  depth: number;
}

/** PermissionCheckResponse is the response message for the Check method in the Permission service. */
export interface PermissionCheckResponse {
  /** Result of the permission check. */
  can: CheckResult;
  /** Metadata associated with this response. */
  metadata: PermissionCheckResponseMetadata | undefined;
}

/** PermissionCheckResponseMetadata is the metadata associated with a PermissionCheckResponse. */
export interface PermissionCheckResponseMetadata {
  /** The count of the checks performed. */
  checkCount: number;
}

/** PermissionExpandRequest is the request message for the Expand method in the Permission service. */
export interface PermissionExpandRequest {
  /** Identifier of the tenant, required, and must match the pattern "[a-zA-Z0-9-,]+", max 64 bytes. */
  tenantId: string;
  /** Metadata associated with this request, required. */
  metadata:
    | PermissionExpandRequestMetadata
    | undefined;
  /** Entity on which the permission needs to be expanded, required. */
  entity:
    | Entity
    | undefined;
  /** Name of the permission to be expanded, not required, must start with a letter and can include alphanumeric and underscore, max 64 bytes. */
  permission: string;
  /** Context associated with this request. */
  context:
    | Context
    | undefined;
  /** Additional arguments associated with this request. */
  arguments: Argument[];
}

/** PermissionExpandRequestMetadata is the metadata associated with a PermissionExpandRequest. */
export interface PermissionExpandRequestMetadata {
  /** Version of the schema. */
  schemaVersion: string;
  /** Token associated with the snap. */
  snapToken: string;
}

/** PermissionExpandResponse is the response message for the Expand method in the Permission service. */
export interface PermissionExpandResponse {
  /** Expansion tree. */
  tree: Expand | undefined;
}

/** PermissionLookupEntityRequest is the request message for the LookupEntity method in the Permission service. */
export interface PermissionLookupEntityRequest {
  /** Identifier of the tenant, required, and must match the pattern "[a-zA-Z0-9-,]+", max 64 bytes. */
  tenantId: string;
  /** Metadata associated with this request, required. */
  metadata:
    | PermissionLookupEntityRequestMetadata
    | undefined;
  /** Type of the entity to lookup, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes. */
  entityType: string;
  /** Name of the permission to check, required, must start with a letter and can include alphanumeric and underscore, max 64 bytes. */
  permission: string;
  /** Subject for which to check the permission, required. */
  subject:
    | Subject
    | undefined;
  /** Context associated with this request. */
  context: Context | undefined;
}

/** PermissionLookupEntityRequestMetadata is the metadata associated with a PermissionLookupEntityRequest. */
export interface PermissionLookupEntityRequestMetadata {
  /** Version of the schema. */
  schemaVersion: string;
  /** Token associated with the snap. */
  snapToken: string;
  /** Depth of lookup, required, must be greater or equal to 3. */
  depth: number;
}

/** PermissionLookupEntityResponse is the response message for the LookupEntity method in the Permission service. */
export interface PermissionLookupEntityResponse {
  /** List of identifiers for entities that match the lookup. */
  entityIds: string[];
}

/** PermissionLookupEntityStreamResponse is the response message for the LookupEntityStream method in the Permission service. */
export interface PermissionLookupEntityStreamResponse {
  /** Identifier for an entity that matches the lookup. */
  entityId: string;
}

/** PermissionEntityFilterRequest is the request message for the LookupEntityStream method in the Permission service. */
export interface PermissionEntityFilterRequest {
  /** Identifier of the tenant, required, and must match the pattern "[a-zA-Z0-9-,]+", max 64 bytes. */
  tenantId: string;
  /** Metadata associated with this request, required. */
  metadata:
    | PermissionEntityFilterRequestMetadata
    | undefined;
  /** Reference to the entity to filter. */
  entityReference:
    | RelationReference
    | undefined;
  /** Subject for which to check the permission. */
  subject:
    | Subject
    | undefined;
  /** Context associated with this request. */
  context: Context | undefined;
}

/** PermissionEntityFilterRequestMetadata is the metadata associated with a PermissionEntityFilterRequest. */
export interface PermissionEntityFilterRequestMetadata {
  /** Version of the schema. */
  schemaVersion: string;
  /** Token associated with the snap. */
  snapToken: string;
  /** Depth of lookup, required, must be greater or equal to 3. */
  depth: number;
}

/** PermissionLookupSubjectRequest is the request message for the LookupSubject method in the Permission service. */
export interface PermissionLookupSubjectRequest {
  /** Identifier of the tenant, required, and must match the pattern "[a-zA-Z0-9-,]+", max 64 bytes. */
  tenantId: string;
  /** Metadata associated with this request, required. */
  metadata:
    | PermissionLookupSubjectRequestMetadata
    | undefined;
  /** Entity for which to check the permission, required. */
  entity:
    | Entity
    | undefined;
  /** Permission to be checked, can be a permission or relation. Required, and must match the pattern "^([a-zA-Z][a-zA-Z0-9_]{1,62}[a-zA-Z0-9])$", max 64 bytes. */
  permission: string;
  /** Reference to the subject to lookup. */
  subjectReference:
    | RelationReference
    | undefined;
  /** Context associated with this request. */
  context: Context | undefined;
}

/** PermissionLookupSubjectRequestMetadata is the metadata associated with a PermissionLookupSubjectRequest. */
export interface PermissionLookupSubjectRequestMetadata {
  /** Version of the schema. */
  schemaVersion: string;
  /** Token associated with the snap. */
  snapToken: string;
  /** Depth of the check, must be greater than or equal to 3. */
  depth: number;
}

/** PermissionLookupSubjectResponse is the response message for the LookupSubject method in the Permission service. */
export interface PermissionLookupSubjectResponse {
  /** List of identifiers for subjects that match the lookup. */
  subjectIds: string[];
}

/** PermissionSubjectPermissionRequest is the request message for the SubjectPermission method in the Permission service. */
export interface PermissionSubjectPermissionRequest {
  /** Identifier of the tenant, required, and must match the pattern "[a-zA-Z0-9-,]+", max 64 bytes. */
  tenantId: string;
  /** Metadata associated with this request, required. */
  metadata:
    | PermissionSubjectPermissionRequestMetadata
    | undefined;
  /** Entity for which to check the permission, required. */
  entity:
    | Entity
    | undefined;
  /** Subject for which to check the permission, required. */
  subject:
    | Subject
    | undefined;
  /** Context associated with this request. */
  context: Context | undefined;
}

/** PermissionSubjectPermissionRequestMetadata is the metadata associated with a PermissionSubjectPermissionRequest. */
export interface PermissionSubjectPermissionRequestMetadata {
  /** Version of the schema. */
  schemaVersion: string;
  /** Token associated with the snap. */
  snapToken: string;
  /** Whether to only check permissions. */
  onlyPermission: boolean;
  /** Depth of the check, must be greater than or equal to 3. */
  depth: number;
}

/** PermissionSubjectPermissionResponse is the response message for the SubjectPermission method in the Permission service. */
export interface PermissionSubjectPermissionResponse {
  /** Map of results for each permission check. */
  results: { [key: string]: CheckResult };
}

export interface PermissionSubjectPermissionResponse_ResultsEntry {
  key: string;
  value: CheckResult;
}

/**
 * WatchRequest is the request message for the Watch RPC. It contains the
 * details needed to establish a watch stream.
 */
export interface WatchRequest {
  /** Identifier of the tenant, required, and must match the pattern "[a-zA-Z0-9-,]+", max 64 bytes. */
  tenantId: string;
  /** Snap token to be used for watching. */
  snapToken: string;
}

/**
 * WatchResponse is the response message for the Watch RPC. It contains the
 * changes in the data that are being watched.
 */
export interface WatchResponse {
  /** Changes in the data. */
  changes: DataChanges | undefined;
}

/**
 * SchemaWriteRequest is the request message for the Write method in the Schema service.
 * It contains tenant_id and the schema to be written.
 */
export interface SchemaWriteRequest {
  /**
   * tenant_id is a string that identifies the tenant. It must match the pattern "[a-zA-Z0-9-,]+",
   * be a maximum of 64 bytes, and must not be empty.
   */
  tenantId: string;
  /** schema is the string representation of the schema to be written. */
  schema: string;
}

/**
 * SchemaWriteResponse is the response message for the Write method in the Schema service.
 * It returns the version of the written schema.
 */
export interface SchemaWriteResponse {
  /** schema_version is the string that identifies the version of the written schema. */
  schemaVersion: string;
}

/**
 * SchemaReadRequest is the request message for the Read method in the Schema service.
 * It contains tenant_id and metadata about the schema to be read.
 */
export interface SchemaReadRequest {
  /**
   * tenant_id is a string that identifies the tenant. It must match the pattern "[a-zA-Z0-9-,]+",
   * be a maximum of 64 bytes, and must not be empty.
   */
  tenantId: string;
  /** metadata is the additional information needed for the Read request. */
  metadata: SchemaReadRequestMetadata | undefined;
}

/**
 * SchemaReadRequestMetadata provides additional information for the Schema Read request.
 * It contains schema_version to specify which version of the schema should be read.
 */
export interface SchemaReadRequestMetadata {
  /** schema_version is the string that identifies the version of the schema to be read. */
  schemaVersion: string;
}

/**
 * SchemaReadResponse is the response message for the Read method in the Schema service.
 * It returns the requested schema.
 */
export interface SchemaReadResponse {
  /** schema is the SchemaDefinition that represents the read schema. */
  schema: SchemaDefinition1 | undefined;
}

/**
 * SchemaListRequest is the request message for the List method in the Schema service.
 * It contains tenant_id for which the schemas are to be listed.
 */
export interface SchemaListRequest {
  /**
   * tenant_id is a string that identifies the tenant. It must match the pattern "[a-zA-Z0-9-,]+",
   * be a maximum of 64 bytes, and must not be empty.
   */
  tenantId: string;
  /**
   * page_size is the number of tenants to be returned in the response.
   * The value should be between 1 and 100.
   */
  pageSize: number;
  /**
   * continuous_token is an optional parameter used for pagination.
   * It should be the value received in the previous response.
   */
  continuousToken: string;
}

/**
 * SchemaListResponse is the response message for the List method in the Schema service.
 * It returns a paginated list of schemas
 */
export interface SchemaListResponse {
  /** head of the schemas is the latest version available for the tenant */
  head: string;
  /** list of schema versions with creation timestamps */
  schemas: SchemaList[];
  /** continuous_token is a string that can be used to paginate and retrieve the next set of results. */
  continuousToken: string;
}

/** SchemaList provides a list of schema versions with their corresponding creation timestamps */
export interface SchemaList {
  version: string;
  createdAt: string;
}

/**
 * DataWriteRequest defines the structure of a request for writing data.
 * It contains the necessary information such as tenant_id, metadata,
 * tuples and attributes for the write operation.
 */
export interface DataWriteRequest {
  /** tenant_id represents the unique identifier of the tenant for which data is written. */
  tenantId: string;
  /** metadata holds additional data related to the request. */
  metadata:
    | DataWriteRequestMetadata
    | undefined;
  /** tuples contains the list of tuples (entity-relation-entity triples) that need to be written. */
  tuples: Tuple[];
  /** attributes contains the list of attributes (entity-attribute-value triples) that need to be written. */
  attributes: Attribute[];
}

/**
 * DataWriteRequestMetadata defines the structure of metadata for a write request.
 * It includes the schema version of the data to be written.
 */
export interface DataWriteRequestMetadata {
  /** schema_version represents the version of the schema for the data being written. */
  schemaVersion: string;
}

/**
 * DataWriteResponse defines the structure of the response after writing data.
 * It contains the snap_token generated after the write operation.
 */
export interface DataWriteResponse {
  /** snap_token is the token generated after the data write operation, representing a snapshot of the data. */
  snapToken: string;
}

/** Represents a request to write relationship data. */
export interface RelationshipWriteRequest {
  /** Unique identifier for the tenant with specific constraints. */
  tenantId: string;
  /** Metadata for the request. It's required. */
  metadata:
    | RelationshipWriteRequestMetadata
    | undefined;
  /** List of tuples for the request. Must have between 1 and 100 items. */
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

/**
 * RelationshipReadRequest defines the structure of a request for reading relationships.
 * It contains the necessary information such as tenant_id, metadata, and filter for the read operation.
 */
export interface RelationshipReadRequest {
  /** tenant_id represents the unique identifier of the tenant for which relationships are read. */
  tenantId: string;
  /** metadata holds additional data related to the request. */
  metadata:
    | RelationshipReadRequestMetadata
    | undefined;
  /** filter is used to specify criteria for the data that needs to be read. */
  filter:
    | TupleFilter
    | undefined;
  /**
   * page_size specifies the number of results to return in a single page.
   * If more results are available, a continuous_token is included in the response.
   */
  pageSize: number;
  /** continuous_token is used in case of paginated reads to get the next page of results. */
  continuousToken: string;
}

/**
 * RelationshipReadRequestMetadata defines the structure of the metadata for a read request focused on relationships.
 * It includes the snap_token associated with a particular state of the database.
 */
export interface RelationshipReadRequestMetadata {
  /** snap_token represents a specific state or "snapshot" of the database. */
  snapToken: string;
}

/**
 * RelationshipReadResponse defines the structure of the response after reading relationships.
 * It includes the tuples representing the relationships and a continuous token for handling result pagination.
 */
export interface RelationshipReadResponse {
  /** tuples is a list of the relationships retrieved in the read operation, represented as entity-relation-entity triples. */
  tuples: Tuple[];
  /** continuous_token is used in the case of paginated reads to retrieve the next page of results. */
  continuousToken: string;
}

/**
 * AttributeReadRequest defines the structure of a request for reading attributes.
 * It includes the tenant_id, metadata, attribute filter, page size for pagination, and a continuous token for multi-page results.
 */
export interface AttributeReadRequest {
  /** tenant_id represents the unique identifier of the tenant from which the attributes are being read. */
  tenantId: string;
  /** metadata holds additional information related to the request. */
  metadata:
    | AttributeReadRequestMetadata
    | undefined;
  /** filter specifies the criteria used to select the attributes that should be returned. */
  filter:
    | AttributeFilter
    | undefined;
  /**
   * page_size specifies the number of results to return in a single page.
   * If more results are available, a continuous_token is included in the response.
   */
  pageSize: number;
  /** continuous_token is used in case of paginated reads to get the next page of results. */
  continuousToken: string;
}

/**
 * AttributeReadRequestMetadata defines the structure for the metadata of an attribute read request.
 * It includes the snap_token associated with a particular state of the database.
 */
export interface AttributeReadRequestMetadata {
  /** snap_token represents a specific state or "snapshot" of the database. */
  snapToken: string;
}

/**
 * AttributeReadResponse defines the structure of the response to an attribute read request.
 * It includes the attributes retrieved and a continuous token for handling result pagination.
 */
export interface AttributeReadResponse {
  /** attributes is a list of the attributes retrieved in the read operation. */
  attributes: Attribute[];
  /** continuous_token is used in the case of paginated reads to retrieve the next page of results. */
  continuousToken: string;
}

/**
 * DataDeleteRequest defines the structure of a request to delete data.
 * It includes the tenant_id and filters for selecting tuples and attributes to be deleted.
 */
export interface DataDeleteRequest {
  /** tenant_id represents the unique identifier of the tenant from which the data will be deleted. */
  tenantId: string;
  /** tuple_filter specifies the criteria used to select the tuples that should be deleted. */
  tupleFilter:
    | TupleFilter
    | undefined;
  /** attribute_filter specifies the criteria used to select the attributes that should be deleted. */
  attributeFilter: AttributeFilter | undefined;
}

/**
 * DataDeleteResponse defines the structure of the response to a data delete request.
 * It includes a snap_token representing the state of the database after the deletion.
 */
export interface DataDeleteResponse {
  /** snap_token represents the state of the database after the requested deletions. */
  snapToken: string;
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

/**
 * BundleRunRequest is used to request the execution of a bundle.
 * It includes tenant_id, the name of the bundle, and additional arguments for execution.
 */
export interface BundleRunRequest {
  tenantId: string;
  /** Name of the bundle to be executed. */
  name: string;
  /** Additional key-value pairs for execution arguments. */
  arguments: { [key: string]: string };
}

export interface BundleRunRequest_ArgumentsEntry {
  key: string;
  value: string;
}

/**
 * BundleRunResponse is the response for a BundleRunRequest.
 * It includes a snap_token, which may be used for tracking the execution or its results.
 */
export interface BundleRunResponse {
  /** Token related to the bundle execution. */
  snapToken: string;
}

/**
 * BundleWriteRequest is used to request the writing of a bundle.
 * It contains the tenant_id to identify the tenant and the Bundles object.
 */
export interface BundleWriteRequest {
  tenantId: string;
  /** Contains the bundle data to be written. */
  bundles: DataBundle[];
}

/**
 * BundleWriteResponse is the response for a BundleWriteRequest.
 * It includes a name which could be used as an identifier or acknowledgment.
 */
export interface BundleWriteResponse {
  /** Identifier or acknowledgment of the written bundle. */
  names: string[];
}

export interface BundleReadRequest {
  tenantId: string;
  name: string;
}

export interface BundleReadResponse {
  bundle: DataBundle | undefined;
}

/**
 * BundleDeleteRequest is used to request the deletion of a bundle.
 * It contains the tenant_id to specify the tenant and the name of the bundle to be deleted.
 */
export interface BundleDeleteRequest {
  tenantId: string;
  /** Name of the bundle to be deleted. */
  name: string;
}

export interface BundleDeleteResponse {
  name: string;
}

/** TenantCreateRequest is the message used for the request to create a tenant. */
export interface TenantCreateRequest {
  /** id is a unique identifier for the tenant. */
  id: string;
  /** name is the name of the tenant. */
  name: string;
}

/** TenantCreateResponse is the message returned from the request to create a tenant. */
export interface TenantCreateResponse {
  /** tenant is the created tenant information. */
  tenant: Tenant | undefined;
}

/** TenantDeleteRequest is the message used for the request to delete a tenant. */
export interface TenantDeleteRequest {
  /** id is the unique identifier of the tenant to be deleted. */
  id: string;
}

/** TenantDeleteResponse is the message returned from the request to delete a tenant. */
export interface TenantDeleteResponse {
  /** tenant is the tenant information that was deleted. */
  tenant: Tenant | undefined;
}

/** TenantListRequest is the message used for the request to list all tenants. */
export interface TenantListRequest {
  /**
   * page_size is the number of tenants to be returned in the response.
   * The value should be between 1 and 100.
   */
  pageSize: number;
  /**
   * continuous_token is an optional parameter used for pagination.
   * It should be the value received in the previous response.
   */
  continuousToken: string;
}

/** TenantListResponse is the message returned from the request to list all tenants. */
export interface TenantListResponse {
  /** tenants is a list of tenants. */
  tenants: Tenant[];
  /** continuous_token is a string that can be used to paginate and retrieve the next set of results. */
  continuousToken: string;
}

function createBasePermissionCheckRequest(): PermissionCheckRequest {
  return {
    tenantId: "",
    metadata: undefined,
    entity: undefined,
    permission: "",
    subject: undefined,
    context: undefined,
    arguments: [],
  };
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
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.arguments) {
      Argument.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionCheckRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = PermissionCheckRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permission = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.arguments.push(Argument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => Argument.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionCheckRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = PermissionCheckRequestMetadata.toJSON(message.metadata);
    }
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    if (message.subject !== undefined) {
      obj.subject = Subject.toJSON(message.subject);
    }
    if (message.context !== undefined) {
      obj.context = Context.toJSON(message.context);
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Argument.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionCheckRequest>): PermissionCheckRequest {
    return PermissionCheckRequest.fromPartial(base ?? {});
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
    message.context = (object.context !== undefined && object.context !== null)
      ? Context.fromPartial(object.context)
      : undefined;
    message.arguments = object.arguments?.map((e) => Argument.fromPartial(e)) || [];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.depth = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionCheckRequestMetadata>): PermissionCheckRequestMetadata {
    return PermissionCheckRequestMetadata.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.can = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = PermissionCheckResponseMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCheckResponse {
    return {
      can: isSet(object.can) ? checkResultFromJSON(object.can) : 0,
      metadata: isSet(object.metadata) ? PermissionCheckResponseMetadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: PermissionCheckResponse): unknown {
    const obj: any = {};
    if (message.can !== 0) {
      obj.can = checkResultToJSON(message.can);
    }
    if (message.metadata !== undefined) {
      obj.metadata = PermissionCheckResponseMetadata.toJSON(message.metadata);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionCheckResponse>): PermissionCheckResponse {
    return PermissionCheckResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionCheckResponseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.checkCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionCheckResponseMetadata {
    return { checkCount: isSet(object.check_count) ? Number(object.check_count) : 0 };
  },

  toJSON(message: PermissionCheckResponseMetadata): unknown {
    const obj: any = {};
    if (message.checkCount !== 0) {
      obj.check_count = Math.round(message.checkCount);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionCheckResponseMetadata>): PermissionCheckResponseMetadata {
    return PermissionCheckResponseMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionCheckResponseMetadata>): PermissionCheckResponseMetadata {
    const message = createBasePermissionCheckResponseMetadata();
    message.checkCount = object.checkCount ?? 0;
    return message;
  },
};

function createBasePermissionExpandRequest(): PermissionExpandRequest {
  return { tenantId: "", metadata: undefined, entity: undefined, permission: "", context: undefined, arguments: [] };
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
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.arguments) {
      Argument.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionExpandRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionExpandRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = PermissionExpandRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permission = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.arguments.push(Argument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionExpandRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? PermissionExpandRequestMetadata.fromJSON(object.metadata) : undefined,
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      permission: isSet(object.permission) ? String(object.permission) : "",
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => Argument.fromJSON(e)) : [],
    };
  },

  toJSON(message: PermissionExpandRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = PermissionExpandRequestMetadata.toJSON(message.metadata);
    }
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    if (message.context !== undefined) {
      obj.context = Context.toJSON(message.context);
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Argument.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionExpandRequest>): PermissionExpandRequest {
    return PermissionExpandRequest.fromPartial(base ?? {});
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
    message.context = (object.context !== undefined && object.context !== null)
      ? Context.fromPartial(object.context)
      : undefined;
    message.arguments = object.arguments?.map((e) => Argument.fromPartial(e)) || [];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionExpandRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionExpandRequestMetadata>): PermissionExpandRequestMetadata {
    return PermissionExpandRequestMetadata.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionExpandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tree = Expand.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionExpandResponse {
    return { tree: isSet(object.tree) ? Expand.fromJSON(object.tree) : undefined };
  },

  toJSON(message: PermissionExpandResponse): unknown {
    const obj: any = {};
    if (message.tree !== undefined) {
      obj.tree = Expand.toJSON(message.tree);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionExpandResponse>): PermissionExpandResponse {
    return PermissionExpandResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionExpandResponse>): PermissionExpandResponse {
    const message = createBasePermissionExpandResponse();
    message.tree = (object.tree !== undefined && object.tree !== null) ? Expand.fromPartial(object.tree) : undefined;
    return message;
  },
};

function createBasePermissionLookupEntityRequest(): PermissionLookupEntityRequest {
  return { tenantId: "", metadata: undefined, entityType: "", permission: "", subject: undefined, context: undefined };
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
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupEntityRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = PermissionLookupEntityRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entityType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permission = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
    };
  },

  toJSON(message: PermissionLookupEntityRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = PermissionLookupEntityRequestMetadata.toJSON(message.metadata);
    }
    if (message.entityType !== "") {
      obj.entity_type = message.entityType;
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    if (message.subject !== undefined) {
      obj.subject = Subject.toJSON(message.subject);
    }
    if (message.context !== undefined) {
      obj.context = Context.toJSON(message.context);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionLookupEntityRequest>): PermissionLookupEntityRequest {
    return PermissionLookupEntityRequest.fromPartial(base ?? {});
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
    message.context = (object.context !== undefined && object.context !== null)
      ? Context.fromPartial(object.context)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.depth = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionLookupEntityRequestMetadata>): PermissionLookupEntityRequestMetadata {
    return PermissionLookupEntityRequestMetadata.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entityIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupEntityResponse {
    return { entityIds: Array.isArray(object?.entity_ids) ? object.entity_ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: PermissionLookupEntityResponse): unknown {
    const obj: any = {};
    if (message.entityIds?.length) {
      obj.entity_ids = message.entityIds;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionLookupEntityResponse>): PermissionLookupEntityResponse {
    return PermissionLookupEntityResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupEntityStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entityId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupEntityStreamResponse {
    return { entityId: isSet(object.entity_id) ? String(object.entity_id) : "" };
  },

  toJSON(message: PermissionLookupEntityStreamResponse): unknown {
    const obj: any = {};
    if (message.entityId !== "") {
      obj.entity_id = message.entityId;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionLookupEntityStreamResponse>): PermissionLookupEntityStreamResponse {
    return PermissionLookupEntityStreamResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionLookupEntityStreamResponse>): PermissionLookupEntityStreamResponse {
    const message = createBasePermissionLookupEntityStreamResponse();
    message.entityId = object.entityId ?? "";
    return message;
  },
};

function createBasePermissionEntityFilterRequest(): PermissionEntityFilterRequest {
  return { tenantId: "", metadata: undefined, entityReference: undefined, subject: undefined, context: undefined };
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
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionEntityFilterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionEntityFilterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = PermissionEntityFilterRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entityReference = RelationReference.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionEntityFilterRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? PermissionEntityFilterRequestMetadata.fromJSON(object.metadata) : undefined,
      entityReference: isSet(object.entity_reference) ? RelationReference.fromJSON(object.entity_reference) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
    };
  },

  toJSON(message: PermissionEntityFilterRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = PermissionEntityFilterRequestMetadata.toJSON(message.metadata);
    }
    if (message.entityReference !== undefined) {
      obj.entity_reference = RelationReference.toJSON(message.entityReference);
    }
    if (message.subject !== undefined) {
      obj.subject = Subject.toJSON(message.subject);
    }
    if (message.context !== undefined) {
      obj.context = Context.toJSON(message.context);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionEntityFilterRequest>): PermissionEntityFilterRequest {
    return PermissionEntityFilterRequest.fromPartial(base ?? {});
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
    message.context = (object.context !== undefined && object.context !== null)
      ? Context.fromPartial(object.context)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionEntityFilterRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.depth = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionEntityFilterRequestMetadata>): PermissionEntityFilterRequestMetadata {
    return PermissionEntityFilterRequestMetadata.fromPartial(base ?? {});
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
  return {
    tenantId: "",
    metadata: undefined,
    entity: undefined,
    permission: "",
    subjectReference: undefined,
    context: undefined,
  };
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
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSubjectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSubjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = PermissionLookupSubjectRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permission = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subjectReference = RelationReference.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
    };
  },

  toJSON(message: PermissionLookupSubjectRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = PermissionLookupSubjectRequestMetadata.toJSON(message.metadata);
    }
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    if (message.subjectReference !== undefined) {
      obj.subject_reference = RelationReference.toJSON(message.subjectReference);
    }
    if (message.context !== undefined) {
      obj.context = Context.toJSON(message.context);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionLookupSubjectRequest>): PermissionLookupSubjectRequest {
    return PermissionLookupSubjectRequest.fromPartial(base ?? {});
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
    message.context = (object.context !== undefined && object.context !== null)
      ? Context.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBasePermissionLookupSubjectRequestMetadata(): PermissionLookupSubjectRequestMetadata {
  return { schemaVersion: "", snapToken: "", depth: 0 };
}

export const PermissionLookupSubjectRequestMetadata = {
  encode(message: PermissionLookupSubjectRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionLookupSubjectRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSubjectRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.depth = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupSubjectRequestMetadata {
    return {
      schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: PermissionLookupSubjectRequestMetadata): unknown {
    const obj: any = {};
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionLookupSubjectRequestMetadata>): PermissionLookupSubjectRequestMetadata {
    return PermissionLookupSubjectRequestMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionLookupSubjectRequestMetadata>): PermissionLookupSubjectRequestMetadata {
    const message = createBasePermissionLookupSubjectRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
    message.depth = object.depth ?? 0;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionLookupSubjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjectIds.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionLookupSubjectResponse {
    return { subjectIds: Array.isArray(object?.subject_ids) ? object.subject_ids.map((e: any) => String(e)) : [] };
  },

  toJSON(message: PermissionLookupSubjectResponse): unknown {
    const obj: any = {};
    if (message.subjectIds?.length) {
      obj.subject_ids = message.subjectIds;
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionLookupSubjectResponse>): PermissionLookupSubjectResponse {
    return PermissionLookupSubjectResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionLookupSubjectResponse>): PermissionLookupSubjectResponse {
    const message = createBasePermissionLookupSubjectResponse();
    message.subjectIds = object.subjectIds?.map((e) => e) || [];
    return message;
  },
};

function createBasePermissionSubjectPermissionRequest(): PermissionSubjectPermissionRequest {
  return { tenantId: "", metadata: undefined, entity: undefined, subject: undefined, context: undefined };
}

export const PermissionSubjectPermissionRequest = {
  encode(message: PermissionSubjectPermissionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      PermissionSubjectPermissionRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(26).fork()).ldelim();
    }
    if (message.subject !== undefined) {
      Subject.encode(message.subject, writer.uint32(34).fork()).ldelim();
    }
    if (message.context !== undefined) {
      Context.encode(message.context, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionSubjectPermissionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionSubjectPermissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = PermissionSubjectPermissionRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.context = Context.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionSubjectPermissionRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata)
        ? PermissionSubjectPermissionRequestMetadata.fromJSON(object.metadata)
        : undefined,
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      subject: isSet(object.subject) ? Subject.fromJSON(object.subject) : undefined,
      context: isSet(object.context) ? Context.fromJSON(object.context) : undefined,
    };
  },

  toJSON(message: PermissionSubjectPermissionRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = PermissionSubjectPermissionRequestMetadata.toJSON(message.metadata);
    }
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.subject !== undefined) {
      obj.subject = Subject.toJSON(message.subject);
    }
    if (message.context !== undefined) {
      obj.context = Context.toJSON(message.context);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionSubjectPermissionRequest>): PermissionSubjectPermissionRequest {
    return PermissionSubjectPermissionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionSubjectPermissionRequest>): PermissionSubjectPermissionRequest {
    const message = createBasePermissionSubjectPermissionRequest();
    message.tenantId = object.tenantId ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? PermissionSubjectPermissionRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Subject.fromPartial(object.subject)
      : undefined;
    message.context = (object.context !== undefined && object.context !== null)
      ? Context.fromPartial(object.context)
      : undefined;
    return message;
  },
};

function createBasePermissionSubjectPermissionRequestMetadata(): PermissionSubjectPermissionRequestMetadata {
  return { schemaVersion: "", snapToken: "", onlyPermission: false, depth: 0 };
}

export const PermissionSubjectPermissionRequestMetadata = {
  encode(message: PermissionSubjectPermissionRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    if (message.snapToken !== "") {
      writer.uint32(18).string(message.snapToken);
    }
    if (message.onlyPermission === true) {
      writer.uint32(24).bool(message.onlyPermission);
    }
    if (message.depth !== 0) {
      writer.uint32(32).int32(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionSubjectPermissionRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionSubjectPermissionRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapToken = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.onlyPermission = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.depth = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionSubjectPermissionRequestMetadata {
    return {
      schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "",
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
      onlyPermission: isSet(object.only_permission) ? Boolean(object.only_permission) : false,
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: PermissionSubjectPermissionRequestMetadata): unknown {
    const obj: any = {};
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    if (message.onlyPermission === true) {
      obj.only_permission = message.onlyPermission;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionSubjectPermissionRequestMetadata>): PermissionSubjectPermissionRequestMetadata {
    return PermissionSubjectPermissionRequestMetadata.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<PermissionSubjectPermissionRequestMetadata>,
  ): PermissionSubjectPermissionRequestMetadata {
    const message = createBasePermissionSubjectPermissionRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    message.snapToken = object.snapToken ?? "";
    message.onlyPermission = object.onlyPermission ?? false;
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBasePermissionSubjectPermissionResponse(): PermissionSubjectPermissionResponse {
  return { results: {} };
}

export const PermissionSubjectPermissionResponse = {
  encode(message: PermissionSubjectPermissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.results).forEach(([key, value]) => {
      PermissionSubjectPermissionResponse_ResultsEntry.encode({ key: key as any, value }, writer.uint32(10).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionSubjectPermissionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionSubjectPermissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = PermissionSubjectPermissionResponse_ResultsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.results[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionSubjectPermissionResponse {
    return {
      results: isObject(object.results)
        ? Object.entries(object.results).reduce<{ [key: string]: CheckResult }>((acc, [key, value]) => {
          acc[key] = checkResultFromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PermissionSubjectPermissionResponse): unknown {
    const obj: any = {};
    if (message.results) {
      const entries = Object.entries(message.results);
      if (entries.length > 0) {
        obj.results = {};
        entries.forEach(([k, v]) => {
          obj.results[k] = checkResultToJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionSubjectPermissionResponse>): PermissionSubjectPermissionResponse {
    return PermissionSubjectPermissionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionSubjectPermissionResponse>): PermissionSubjectPermissionResponse {
    const message = createBasePermissionSubjectPermissionResponse();
    message.results = Object.entries(object.results ?? {}).reduce<{ [key: string]: CheckResult }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value as CheckResult;
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePermissionSubjectPermissionResponse_ResultsEntry(): PermissionSubjectPermissionResponse_ResultsEntry {
  return { key: "", value: 0 };
}

export const PermissionSubjectPermissionResponse_ResultsEntry = {
  encode(
    message: PermissionSubjectPermissionResponse_ResultsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionSubjectPermissionResponse_ResultsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionSubjectPermissionResponse_ResultsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.value = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionSubjectPermissionResponse_ResultsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? checkResultFromJSON(object.value) : 0,
    };
  },

  toJSON(message: PermissionSubjectPermissionResponse_ResultsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = checkResultToJSON(message.value);
    }
    return obj;
  },

  create(
    base?: DeepPartial<PermissionSubjectPermissionResponse_ResultsEntry>,
  ): PermissionSubjectPermissionResponse_ResultsEntry {
    return PermissionSubjectPermissionResponse_ResultsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<PermissionSubjectPermissionResponse_ResultsEntry>,
  ): PermissionSubjectPermissionResponse_ResultsEntry {
    const message = createBasePermissionSubjectPermissionResponse_ResultsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<WatchRequest>): WatchRequest {
    return WatchRequest.fromPartial(base ?? {});
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
      DataChanges.encode(message.changes, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WatchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.changes = DataChanges.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WatchResponse {
    return { changes: isSet(object.changes) ? DataChanges.fromJSON(object.changes) : undefined };
  },

  toJSON(message: WatchResponse): unknown {
    const obj: any = {};
    if (message.changes !== undefined) {
      obj.changes = DataChanges.toJSON(message.changes);
    }
    return obj;
  },

  create(base?: DeepPartial<WatchResponse>): WatchResponse {
    return WatchResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WatchResponse>): WatchResponse {
    const message = createBaseWatchResponse();
    message.changes = (object.changes !== undefined && object.changes !== null)
      ? DataChanges.fromPartial(object.changes)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaWriteRequest>): SchemaWriteRequest {
    return SchemaWriteRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaWriteResponse {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: SchemaWriteResponse): unknown {
    const obj: any = {};
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaWriteResponse>): SchemaWriteResponse {
    return SchemaWriteResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = SchemaReadRequestMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = SchemaReadRequestMetadata.toJSON(message.metadata);
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaReadRequest>): SchemaReadRequest {
    return SchemaReadRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaReadRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaReadRequestMetadata {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: SchemaReadRequestMetadata): unknown {
    const obj: any = {};
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaReadRequestMetadata>): SchemaReadRequestMetadata {
    return SchemaReadRequestMetadata.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaReadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schema = SchemaDefinition1.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaReadResponse {
    return { schema: isSet(object.schema) ? SchemaDefinition1.fromJSON(object.schema) : undefined };
  },

  toJSON(message: SchemaReadResponse): unknown {
    const obj: any = {};
    if (message.schema !== undefined) {
      obj.schema = SchemaDefinition1.toJSON(message.schema);
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaReadResponse>): SchemaReadResponse {
    return SchemaReadResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaReadResponse>): SchemaReadResponse {
    const message = createBaseSchemaReadResponse();
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? SchemaDefinition1.fromPartial(object.schema)
      : undefined;
    return message;
  },
};

function createBaseSchemaListRequest(): SchemaListRequest {
  return { tenantId: "", pageSize: 0, continuousToken: "" };
}

export const SchemaListRequest = {
  encode(message: SchemaListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).uint32(message.pageSize);
    }
    if (message.continuousToken !== "") {
      writer.uint32(26).string(message.continuousToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pageSize = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaListRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      pageSize: isSet(object.page_size) ? Number(object.page_size) : 0,
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: SchemaListRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.pageSize !== 0) {
      obj.page_size = Math.round(message.pageSize);
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaListRequest>): SchemaListRequest {
    return SchemaListRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaListRequest>): SchemaListRequest {
    const message = createBaseSchemaListRequest();
    message.tenantId = object.tenantId ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

function createBaseSchemaListResponse(): SchemaListResponse {
  return { head: "", schemas: [], continuousToken: "" };
}

export const SchemaListResponse = {
  encode(message: SchemaListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.head !== "") {
      writer.uint32(10).string(message.head);
    }
    for (const v of message.schemas) {
      SchemaList.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.continuousToken !== "") {
      writer.uint32(26).string(message.continuousToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.head = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schemas.push(SchemaList.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaListResponse {
    return {
      head: isSet(object.head) ? String(object.head) : "",
      schemas: Array.isArray(object?.schemas) ? object.schemas.map((e: any) => SchemaList.fromJSON(e)) : [],
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: SchemaListResponse): unknown {
    const obj: any = {};
    if (message.head !== "") {
      obj.head = message.head;
    }
    if (message.schemas?.length) {
      obj.schemas = message.schemas.map((e) => SchemaList.toJSON(e));
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaListResponse>): SchemaListResponse {
    return SchemaListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaListResponse>): SchemaListResponse {
    const message = createBaseSchemaListResponse();
    message.head = object.head ?? "";
    message.schemas = object.schemas?.map((e) => SchemaList.fromPartial(e)) || [];
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

function createBaseSchemaList(): SchemaList {
  return { version: "", createdAt: "" };
}

export const SchemaList = {
  encode(message: SchemaList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.createdAt !== "") {
      writer.uint32(18).string(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdAt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaList {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      createdAt: isSet(object.created_at) ? String(object.created_at) : "",
    };
  },

  toJSON(message: SchemaList): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.createdAt !== "") {
      obj.created_at = message.createdAt;
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaList>): SchemaList {
    return SchemaList.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaList>): SchemaList {
    const message = createBaseSchemaList();
    message.version = object.version ?? "";
    message.createdAt = object.createdAt ?? "";
    return message;
  },
};

function createBaseDataWriteRequest(): DataWriteRequest {
  return { tenantId: "", metadata: undefined, tuples: [], attributes: [] };
}

export const DataWriteRequest = {
  encode(message: DataWriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      DataWriteRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tuples) {
      Tuple.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataWriteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = DataWriteRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tuples.push(Tuple.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataWriteRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? DataWriteRequestMetadata.fromJSON(object.metadata) : undefined,
      tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [],
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: DataWriteRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = DataWriteRequestMetadata.toJSON(message.metadata);
    }
    if (message.tuples?.length) {
      obj.tuples = message.tuples.map((e) => Tuple.toJSON(e));
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DataWriteRequest>): DataWriteRequest {
    return DataWriteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataWriteRequest>): DataWriteRequest {
    const message = createBaseDataWriteRequest();
    message.tenantId = object.tenantId ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? DataWriteRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataWriteRequestMetadata(): DataWriteRequestMetadata {
  return { schemaVersion: "" };
}

export const DataWriteRequestMetadata = {
  encode(message: DataWriteRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schemaVersion !== "") {
      writer.uint32(10).string(message.schemaVersion);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataWriteRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataWriteRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataWriteRequestMetadata {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: DataWriteRequestMetadata): unknown {
    const obj: any = {};
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<DataWriteRequestMetadata>): DataWriteRequestMetadata {
    return DataWriteRequestMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataWriteRequestMetadata>): DataWriteRequestMetadata {
    const message = createBaseDataWriteRequestMetadata();
    message.schemaVersion = object.schemaVersion ?? "";
    return message;
  },
};

function createBaseDataWriteResponse(): DataWriteResponse {
  return { snapToken: "" };
}

export const DataWriteResponse = {
  encode(message: DataWriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataWriteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataWriteResponse {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: DataWriteResponse): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<DataWriteResponse>): DataWriteResponse {
    return DataWriteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataWriteResponse>): DataWriteResponse {
    const message = createBaseDataWriteResponse();
    message.snapToken = object.snapToken ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = RelationshipWriteRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tuples.push(Tuple.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = RelationshipWriteRequestMetadata.toJSON(message.metadata);
    }
    if (message.tuples?.length) {
      obj.tuples = message.tuples.map((e) => Tuple.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipWriteRequest>): RelationshipWriteRequest {
    return RelationshipWriteRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipWriteRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaVersion = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelationshipWriteRequestMetadata {
    return { schemaVersion: isSet(object.schema_version) ? String(object.schema_version) : "" };
  },

  toJSON(message: RelationshipWriteRequestMetadata): unknown {
    const obj: any = {};
    if (message.schemaVersion !== "") {
      obj.schema_version = message.schemaVersion;
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipWriteRequestMetadata>): RelationshipWriteRequestMetadata {
    return RelationshipWriteRequestMetadata.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelationshipWriteResponse {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: RelationshipWriteResponse): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipWriteResponse>): RelationshipWriteResponse {
    return RelationshipWriteResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = RelationshipReadRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = TupleFilter.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageSize = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = RelationshipReadRequestMetadata.toJSON(message.metadata);
    }
    if (message.filter !== undefined) {
      obj.filter = TupleFilter.toJSON(message.filter);
    }
    if (message.pageSize !== 0) {
      obj.page_size = Math.round(message.pageSize);
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipReadRequest>): RelationshipReadRequest {
    return RelationshipReadRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipReadRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelationshipReadRequestMetadata {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: RelationshipReadRequestMetadata): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipReadRequestMetadata>): RelationshipReadRequestMetadata {
    return RelationshipReadRequestMetadata.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipReadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tuples.push(Tuple.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tuples?.length) {
      obj.tuples = message.tuples.map((e) => Tuple.toJSON(e));
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipReadResponse>): RelationshipReadResponse {
    return RelationshipReadResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RelationshipReadResponse>): RelationshipReadResponse {
    const message = createBaseRelationshipReadResponse();
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

function createBaseAttributeReadRequest(): AttributeReadRequest {
  return { tenantId: "", metadata: undefined, filter: undefined, pageSize: 0, continuousToken: "" };
}

export const AttributeReadRequest = {
  encode(message: AttributeReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.metadata !== undefined) {
      AttributeReadRequestMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.filter !== undefined) {
      AttributeFilter.encode(message.filter, writer.uint32(26).fork()).ldelim();
    }
    if (message.pageSize !== 0) {
      writer.uint32(32).uint32(message.pageSize);
    }
    if (message.continuousToken !== "") {
      writer.uint32(42).string(message.continuousToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeReadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = AttributeReadRequestMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filter = AttributeFilter.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pageSize = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeReadRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      metadata: isSet(object.metadata) ? AttributeReadRequestMetadata.fromJSON(object.metadata) : undefined,
      filter: isSet(object.filter) ? AttributeFilter.fromJSON(object.filter) : undefined,
      pageSize: isSet(object.page_size) ? Number(object.page_size) : 0,
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: AttributeReadRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.metadata !== undefined) {
      obj.metadata = AttributeReadRequestMetadata.toJSON(message.metadata);
    }
    if (message.filter !== undefined) {
      obj.filter = AttributeFilter.toJSON(message.filter);
    }
    if (message.pageSize !== 0) {
      obj.page_size = Math.round(message.pageSize);
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<AttributeReadRequest>): AttributeReadRequest {
    return AttributeReadRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttributeReadRequest>): AttributeReadRequest {
    const message = createBaseAttributeReadRequest();
    message.tenantId = object.tenantId ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? AttributeReadRequestMetadata.fromPartial(object.metadata)
      : undefined;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? AttributeFilter.fromPartial(object.filter)
      : undefined;
    message.pageSize = object.pageSize ?? 0;
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

function createBaseAttributeReadRequestMetadata(): AttributeReadRequestMetadata {
  return { snapToken: "" };
}

export const AttributeReadRequestMetadata = {
  encode(message: AttributeReadRequestMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeReadRequestMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeReadRequestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeReadRequestMetadata {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: AttributeReadRequestMetadata): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<AttributeReadRequestMetadata>): AttributeReadRequestMetadata {
    return AttributeReadRequestMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttributeReadRequestMetadata>): AttributeReadRequestMetadata {
    const message = createBaseAttributeReadRequestMetadata();
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBaseAttributeReadResponse(): AttributeReadResponse {
  return { attributes: [], continuousToken: "" };
}

export const AttributeReadResponse = {
  encode(message: AttributeReadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.continuousToken !== "") {
      writer.uint32(18).string(message.continuousToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeReadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeReadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeReadResponse {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      continuousToken: isSet(object.continuous_token) ? String(object.continuous_token) : "",
    };
  },

  toJSON(message: AttributeReadResponse): unknown {
    const obj: any = {};
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<AttributeReadResponse>): AttributeReadResponse {
    return AttributeReadResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttributeReadResponse>): AttributeReadResponse {
    const message = createBaseAttributeReadResponse();
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

function createBaseDataDeleteRequest(): DataDeleteRequest {
  return { tenantId: "", tupleFilter: undefined, attributeFilter: undefined };
}

export const DataDeleteRequest = {
  encode(message: DataDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.tupleFilter !== undefined) {
      TupleFilter.encode(message.tupleFilter, writer.uint32(18).fork()).ldelim();
    }
    if (message.attributeFilter !== undefined) {
      AttributeFilter.encode(message.attributeFilter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tupleFilter = TupleFilter.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attributeFilter = AttributeFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataDeleteRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      tupleFilter: isSet(object.tuple_filter) ? TupleFilter.fromJSON(object.tuple_filter) : undefined,
      attributeFilter: isSet(object.attribute_filter) ? AttributeFilter.fromJSON(object.attribute_filter) : undefined,
    };
  },

  toJSON(message: DataDeleteRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.tupleFilter !== undefined) {
      obj.tuple_filter = TupleFilter.toJSON(message.tupleFilter);
    }
    if (message.attributeFilter !== undefined) {
      obj.attribute_filter = AttributeFilter.toJSON(message.attributeFilter);
    }
    return obj;
  },

  create(base?: DeepPartial<DataDeleteRequest>): DataDeleteRequest {
    return DataDeleteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataDeleteRequest>): DataDeleteRequest {
    const message = createBaseDataDeleteRequest();
    message.tenantId = object.tenantId ?? "";
    message.tupleFilter = (object.tupleFilter !== undefined && object.tupleFilter !== null)
      ? TupleFilter.fromPartial(object.tupleFilter)
      : undefined;
    message.attributeFilter = (object.attributeFilter !== undefined && object.attributeFilter !== null)
      ? AttributeFilter.fromPartial(object.attributeFilter)
      : undefined;
    return message;
  },
};

function createBaseDataDeleteResponse(): DataDeleteResponse {
  return { snapToken: "" };
}

export const DataDeleteResponse = {
  encode(message: DataDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataDeleteResponse {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: DataDeleteResponse): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<DataDeleteResponse>): DataDeleteResponse {
    return DataDeleteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataDeleteResponse>): DataDeleteResponse {
    const message = createBaseDataDeleteResponse();
    message.snapToken = object.snapToken ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filter = TupleFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.filter !== undefined) {
      obj.filter = TupleFilter.toJSON(message.filter);
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipDeleteRequest>): RelationshipDeleteRequest {
    return RelationshipDeleteRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationshipDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelationshipDeleteResponse {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: RelationshipDeleteResponse): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<RelationshipDeleteResponse>): RelationshipDeleteResponse {
    return RelationshipDeleteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RelationshipDeleteResponse>): RelationshipDeleteResponse {
    const message = createBaseRelationshipDeleteResponse();
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBaseBundleRunRequest(): BundleRunRequest {
  return { tenantId: "", name: "", arguments: {} };
}

export const BundleRunRequest = {
  encode(message: BundleRunRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    Object.entries(message.arguments).forEach(([key, value]) => {
      BundleRunRequest_ArgumentsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleRunRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleRunRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = BundleRunRequest_ArgumentsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.arguments[entry3.key] = entry3.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleRunRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      arguments: isObject(object.arguments)
        ? Object.entries(object.arguments).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: BundleRunRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.arguments) {
      const entries = Object.entries(message.arguments);
      if (entries.length > 0) {
        obj.arguments = {};
        entries.forEach(([k, v]) => {
          obj.arguments[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<BundleRunRequest>): BundleRunRequest {
    return BundleRunRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleRunRequest>): BundleRunRequest {
    const message = createBaseBundleRunRequest();
    message.tenantId = object.tenantId ?? "";
    message.name = object.name ?? "";
    message.arguments = Object.entries(object.arguments ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseBundleRunRequest_ArgumentsEntry(): BundleRunRequest_ArgumentsEntry {
  return { key: "", value: "" };
}

export const BundleRunRequest_ArgumentsEntry = {
  encode(message: BundleRunRequest_ArgumentsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleRunRequest_ArgumentsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleRunRequest_ArgumentsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleRunRequest_ArgumentsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: BundleRunRequest_ArgumentsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<BundleRunRequest_ArgumentsEntry>): BundleRunRequest_ArgumentsEntry {
    return BundleRunRequest_ArgumentsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleRunRequest_ArgumentsEntry>): BundleRunRequest_ArgumentsEntry {
    const message = createBaseBundleRunRequest_ArgumentsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseBundleRunResponse(): BundleRunResponse {
  return { snapToken: "" };
}

export const BundleRunResponse = {
  encode(message: BundleRunResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleRunResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleRunResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleRunResponse {
    return { snapToken: isSet(object.snap_token) ? String(object.snap_token) : "" };
  },

  toJSON(message: BundleRunResponse): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    return obj;
  },

  create(base?: DeepPartial<BundleRunResponse>): BundleRunResponse {
    return BundleRunResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleRunResponse>): BundleRunResponse {
    const message = createBaseBundleRunResponse();
    message.snapToken = object.snapToken ?? "";
    return message;
  },
};

function createBaseBundleWriteRequest(): BundleWriteRequest {
  return { tenantId: "", bundles: [] };
}

export const BundleWriteRequest = {
  encode(message: BundleWriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    for (const v of message.bundles) {
      DataBundle.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleWriteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleWriteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bundles.push(DataBundle.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleWriteRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      bundles: Array.isArray(object?.bundles) ? object.bundles.map((e: any) => DataBundle.fromJSON(e)) : [],
    };
  },

  toJSON(message: BundleWriteRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.bundles?.length) {
      obj.bundles = message.bundles.map((e) => DataBundle.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<BundleWriteRequest>): BundleWriteRequest {
    return BundleWriteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleWriteRequest>): BundleWriteRequest {
    const message = createBaseBundleWriteRequest();
    message.tenantId = object.tenantId ?? "";
    message.bundles = object.bundles?.map((e) => DataBundle.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBundleWriteResponse(): BundleWriteResponse {
  return { names: [] };
}

export const BundleWriteResponse = {
  encode(message: BundleWriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.names) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleWriteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleWriteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.names.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleWriteResponse {
    return { names: Array.isArray(object?.names) ? object.names.map((e: any) => String(e)) : [] };
  },

  toJSON(message: BundleWriteResponse): unknown {
    const obj: any = {};
    if (message.names?.length) {
      obj.names = message.names;
    }
    return obj;
  },

  create(base?: DeepPartial<BundleWriteResponse>): BundleWriteResponse {
    return BundleWriteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleWriteResponse>): BundleWriteResponse {
    const message = createBaseBundleWriteResponse();
    message.names = object.names?.map((e) => e) || [];
    return message;
  },
};

function createBaseBundleReadRequest(): BundleReadRequest {
  return { tenantId: "", name: "" };
}

export const BundleReadRequest = {
  encode(message: BundleReadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleReadRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleReadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): BundleReadRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: BundleReadRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<BundleReadRequest>): BundleReadRequest {
    return BundleReadRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleReadRequest>): BundleReadRequest {
    const message = createBaseBundleReadRequest();
    message.tenantId = object.tenantId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseBundleReadResponse(): BundleReadResponse {
  return { bundle: undefined };
}

export const BundleReadResponse = {
  encode(message: BundleReadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bundle !== undefined) {
      DataBundle.encode(message.bundle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleReadResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleReadResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bundle = DataBundle.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BundleReadResponse {
    return { bundle: isSet(object.bundle) ? DataBundle.fromJSON(object.bundle) : undefined };
  },

  toJSON(message: BundleReadResponse): unknown {
    const obj: any = {};
    if (message.bundle !== undefined) {
      obj.bundle = DataBundle.toJSON(message.bundle);
    }
    return obj;
  },

  create(base?: DeepPartial<BundleReadResponse>): BundleReadResponse {
    return BundleReadResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleReadResponse>): BundleReadResponse {
    const message = createBaseBundleReadResponse();
    message.bundle = (object.bundle !== undefined && object.bundle !== null)
      ? DataBundle.fromPartial(object.bundle)
      : undefined;
    return message;
  },
};

function createBaseBundleDeleteRequest(): BundleDeleteRequest {
  return { tenantId: "", name: "" };
}

export const BundleDeleteRequest = {
  encode(message: BundleDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): BundleDeleteRequest {
    return {
      tenantId: isSet(object.tenant_id) ? String(object.tenant_id) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: BundleDeleteRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenant_id = message.tenantId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<BundleDeleteRequest>): BundleDeleteRequest {
    return BundleDeleteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleDeleteRequest>): BundleDeleteRequest {
    const message = createBaseBundleDeleteRequest();
    message.tenantId = object.tenantId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseBundleDeleteResponse(): BundleDeleteResponse {
  return { name: "" };
}

export const BundleDeleteResponse = {
  encode(message: BundleDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleDeleteResponse();
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

  fromJSON(object: any): BundleDeleteResponse {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: BundleDeleteResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<BundleDeleteResponse>): BundleDeleteResponse {
    return BundleDeleteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BundleDeleteResponse>): BundleDeleteResponse {
    const message = createBaseBundleDeleteResponse();
    message.name = object.name ?? "";
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantCreateRequest();
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
          if (tag !== 18) {
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

  fromJSON(object: any): TenantCreateRequest {
    return { id: isSet(object.id) ? String(object.id) : "", name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: TenantCreateRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<TenantCreateRequest>): TenantCreateRequest {
    return TenantCreateRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenant = Tenant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TenantCreateResponse {
    return { tenant: isSet(object.tenant) ? Tenant.fromJSON(object.tenant) : undefined };
  },

  toJSON(message: TenantCreateResponse): unknown {
    const obj: any = {};
    if (message.tenant !== undefined) {
      obj.tenant = Tenant.toJSON(message.tenant);
    }
    return obj;
  },

  create(base?: DeepPartial<TenantCreateResponse>): TenantCreateResponse {
    return TenantCreateResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TenantDeleteRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: TenantDeleteRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<TenantDeleteRequest>): TenantDeleteRequest {
    return TenantDeleteRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenant = Tenant.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TenantDeleteResponse {
    return { tenant: isSet(object.tenant) ? Tenant.fromJSON(object.tenant) : undefined };
  },

  toJSON(message: TenantDeleteResponse): unknown {
    const obj: any = {};
    if (message.tenant !== undefined) {
      obj.tenant = Tenant.toJSON(message.tenant);
    }
    return obj;
  },

  create(base?: DeepPartial<TenantDeleteResponse>): TenantDeleteResponse {
    return TenantDeleteResponse.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pageSize = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.pageSize !== 0) {
      obj.page_size = Math.round(message.pageSize);
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<TenantListRequest>): TenantListRequest {
    return TenantListRequest.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenantListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenants.push(Tenant.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.continuousToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tenants?.length) {
      obj.tenants = message.tenants.map((e) => Tenant.toJSON(e));
    }
    if (message.continuousToken !== "") {
      obj.continuous_token = message.continuousToken;
    }
    return obj;
  },

  create(base?: DeepPartial<TenantListResponse>): TenantListResponse {
    return TenantListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TenantListResponse>): TenantListResponse {
    const message = createBaseTenantListResponse();
    message.tenants = object.tenants?.map((e) => Tenant.fromPartial(e)) || [];
    message.continuousToken = object.continuousToken ?? "";
    return message;
  },
};

/** Permission service contains methods to interact with permissions. */
export type PermissionDefinition = typeof PermissionDefinition;
export const PermissionDefinition = {
  name: "Permission",
  fullName: "base.v1.Permission",
  methods: {
    /**
     * Check method receives a PermissionCheckRequest and returns a PermissionCheckResponse.
     * It is used to determine whether a specific user has permission to perform an action on a resource.
     * For example, "Can the user 1 push to repository 1?"
     */
    check: {
      name: "Check",
      requestType: PermissionCheckRequest,
      requestStream: false,
      responseType: PermissionCheckResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              131,
              1,
              10,
              10,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              18,
              98,
              84,
              104,
              105,
              115,
              32,
              109,
              101,
              116,
              104,
              111,
              100,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              115,
              32,
              97,
              32,
              100,
              101,
              99,
              105,
              115,
              105,
              111,
              110,
              32,
              97,
              98,
              111,
              117,
              116,
              32,
              119,
              104,
              101,
              116,
              104,
              101,
              114,
              32,
              117,
              115,
              101,
              114,
              32,
              99,
              97,
              110,
              32,
              112,
              101,
              114,
              102,
              111,
              114,
              109,
              32,
              97,
              110,
              32,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              32,
              111,
              110,
              32,
              97,
              32,
              99,
              101,
              114,
              116,
              97,
              105,
              110,
              32,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              46,
              42,
              17,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              46,
              99,
              104,
              101,
              99,
              107,
            ]),
          ],
          578365826: [
            Buffer.from([
              46,
              58,
              1,
              42,
              34,
              41,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              47,
              99,
              104,
              101,
              99,
              107,
            ]),
          ],
        },
      },
    },
    /**
     * Expand method receives a PermissionExpandRequest and returns a PermissionExpandResponse.
     * It expands relationships according to the schema provided.
     */
    expand: {
      name: "Expand",
      requestType: PermissionExpandRequest,
      requestStream: false,
      responseType: PermissionExpandResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              74,
              10,
              10,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              18,
              40,
              101,
              120,
              112,
              97,
              110,
              100,
              32,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              32,
              97,
              99,
              99,
              111,
              114,
              100,
              105,
              110,
              103,
              32,
              116,
              111,
              32,
              115,
              99,
              104,
              101,
              109,
              97,
              42,
              18,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              46,
              101,
              120,
              112,
              97,
              110,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              47,
              58,
              1,
              42,
              34,
              42,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              47,
              101,
              120,
              112,
              97,
              110,
              100,
            ]),
          ],
        },
      },
    },
    /**
     * LookupEntity method receives a PermissionLookupEntityRequest and returns a PermissionLookupEntityResponse.
     * It is used to retrieve an entity by its identifier.
     */
    lookupEntity: {
      name: "LookupEntity",
      requestType: PermissionLookupEntityRequest,
      requestStream: false,
      responseType: PermissionLookupEntityResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              77,
              10,
              10,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              18,
              37,
              82,
              101,
              116,
              114,
              105,
              101,
              118,
              101,
              32,
              97,
              110,
              32,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              98,
              121,
              32,
              105,
              116,
              115,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              102,
              105,
              101,
              114,
              46,
              42,
              24,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              46,
              108,
              111,
              111,
              107,
              117,
              112,
              69,
              110,
              116,
              105,
              116,
              121,
            ]),
          ],
          578365826: [
            Buffer.from([
              54,
              58,
              1,
              42,
              34,
              49,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              47,
              108,
              111,
              111,
              107,
              117,
              112,
              45,
              101,
              110,
              116,
              105,
              116,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * LookupEntityStream method receives a PermissionLookupEntityRequest and streams a series of PermissionLookupEntityStreamResponse messages.
     * It is used to retrieve entities by their identifiers in a streaming fashion.
     */
    lookupEntityStream: {
      name: "LookupEntityStream",
      requestType: PermissionLookupEntityRequest,
      requestStream: false,
      responseType: PermissionLookupEntityStreamResponse,
      responseStream: true,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              83,
              10,
              10,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              18,
              37,
              83,
              116,
              114,
              101,
              97,
              109,
              32,
              101,
              110,
              116,
              105,
              116,
              105,
              101,
              115,
              32,
              98,
              121,
              32,
              116,
              104,
              101,
              105,
              114,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              102,
              105,
              101,
              114,
              115,
              46,
              42,
              30,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              46,
              108,
              111,
              111,
              107,
              117,
              112,
              69,
              110,
              116,
              105,
              116,
              121,
              83,
              116,
              114,
              101,
              97,
              109,
            ]),
          ],
          578365826: [
            Buffer.from([
              61,
              58,
              1,
              42,
              34,
              56,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              47,
              108,
              111,
              111,
              107,
              117,
              112,
              45,
              101,
              110,
              116,
              105,
              116,
              121,
              45,
              115,
              116,
              114,
              101,
              97,
              109,
            ]),
          ],
        },
      },
    },
    /**
     * LookupSubject method receives a PermissionLookupSubjectRequest and returns a PermissionLookupSubjectResponse.
     * It is used to retrieve a subject by its identifier.
     */
    lookupSubject: {
      name: "LookupSubject",
      requestType: PermissionLookupSubjectRequest,
      requestStream: false,
      responseType: PermissionLookupSubjectResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              78,
              10,
              10,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              18,
              37,
              82,
              101,
              116,
              114,
              105,
              101,
              118,
              101,
              32,
              97,
              32,
              115,
              117,
              98,
              106,
              101,
              99,
              116,
              32,
              98,
              121,
              32,
              105,
              116,
              115,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              102,
              105,
              101,
              114,
              46,
              42,
              25,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              46,
              108,
              111,
              111,
              107,
              117,
              112,
              83,
              117,
              98,
              106,
              101,
              99,
              116,
            ]),
          ],
          578365826: [
            Buffer.from([
              55,
              58,
              1,
              42,
              34,
              50,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              47,
              108,
              111,
              111,
              107,
              117,
              112,
              45,
              115,
              117,
              98,
              106,
              101,
              99,
              116,
            ]),
          ],
        },
      },
    },
    /**
     * SubjectPermission method receives a PermissionSubjectPermissionRequest and returns a PermissionSubjectPermissionResponse.
     * It is used to retrieve permissions related to a specific subject.
     */
    subjectPermission: {
      name: "SubjectPermission",
      requestType: PermissionSubjectPermissionRequest,
      requestStream: false,
      responseType: PermissionSubjectPermissionResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              96,
              10,
              10,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              18,
              51,
              82,
              101,
              116,
              114,
              105,
              101,
              118,
              101,
              32,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              32,
              114,
              101,
              108,
              97,
              116,
              101,
              100,
              32,
              116,
              111,
              32,
              97,
              32,
              115,
              112,
              101,
              99,
              105,
              102,
              105,
              99,
              32,
              115,
              117,
              98,
              106,
              101,
              99,
              116,
              46,
              42,
              29,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              46,
              115,
              117,
              98,
              106,
              101,
              99,
              116,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
            ]),
          ],
          578365826: [
            Buffer.from([
              59,
              58,
              1,
              42,
              34,
              54,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
              47,
              115,
              117,
              98,
              106,
              101,
              99,
              116,
              45,
              112,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface PermissionServiceImplementation<CallContextExt = {}> {
  /**
   * Check method receives a PermissionCheckRequest and returns a PermissionCheckResponse.
   * It is used to determine whether a specific user has permission to perform an action on a resource.
   * For example, "Can the user 1 push to repository 1?"
   */
  check(
    request: PermissionCheckRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionCheckResponse>>;
  /**
   * Expand method receives a PermissionExpandRequest and returns a PermissionExpandResponse.
   * It expands relationships according to the schema provided.
   */
  expand(
    request: PermissionExpandRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionExpandResponse>>;
  /**
   * LookupEntity method receives a PermissionLookupEntityRequest and returns a PermissionLookupEntityResponse.
   * It is used to retrieve an entity by its identifier.
   */
  lookupEntity(
    request: PermissionLookupEntityRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionLookupEntityResponse>>;
  /**
   * LookupEntityStream method receives a PermissionLookupEntityRequest and streams a series of PermissionLookupEntityStreamResponse messages.
   * It is used to retrieve entities by their identifiers in a streaming fashion.
   */
  lookupEntityStream(
    request: PermissionLookupEntityRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<PermissionLookupEntityStreamResponse>>;
  /**
   * LookupSubject method receives a PermissionLookupSubjectRequest and returns a PermissionLookupSubjectResponse.
   * It is used to retrieve a subject by its identifier.
   */
  lookupSubject(
    request: PermissionLookupSubjectRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionLookupSubjectResponse>>;
  /**
   * SubjectPermission method receives a PermissionSubjectPermissionRequest and returns a PermissionSubjectPermissionResponse.
   * It is used to retrieve permissions related to a specific subject.
   */
  subjectPermission(
    request: PermissionSubjectPermissionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PermissionSubjectPermissionResponse>>;
}

export interface PermissionClient<CallOptionsExt = {}> {
  /**
   * Check method receives a PermissionCheckRequest and returns a PermissionCheckResponse.
   * It is used to determine whether a specific user has permission to perform an action on a resource.
   * For example, "Can the user 1 push to repository 1?"
   */
  check(
    request: DeepPartial<PermissionCheckRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionCheckResponse>;
  /**
   * Expand method receives a PermissionExpandRequest and returns a PermissionExpandResponse.
   * It expands relationships according to the schema provided.
   */
  expand(
    request: DeepPartial<PermissionExpandRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionExpandResponse>;
  /**
   * LookupEntity method receives a PermissionLookupEntityRequest and returns a PermissionLookupEntityResponse.
   * It is used to retrieve an entity by its identifier.
   */
  lookupEntity(
    request: DeepPartial<PermissionLookupEntityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionLookupEntityResponse>;
  /**
   * LookupEntityStream method receives a PermissionLookupEntityRequest and streams a series of PermissionLookupEntityStreamResponse messages.
   * It is used to retrieve entities by their identifiers in a streaming fashion.
   */
  lookupEntityStream(
    request: DeepPartial<PermissionLookupEntityRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<PermissionLookupEntityStreamResponse>;
  /**
   * LookupSubject method receives a PermissionLookupSubjectRequest and returns a PermissionLookupSubjectResponse.
   * It is used to retrieve a subject by its identifier.
   */
  lookupSubject(
    request: DeepPartial<PermissionLookupSubjectRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionLookupSubjectResponse>;
  /**
   * SubjectPermission method receives a PermissionSubjectPermissionRequest and returns a PermissionSubjectPermissionResponse.
   * It is used to retrieve permissions related to a specific subject.
   */
  subjectPermission(
    request: DeepPartial<PermissionSubjectPermissionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PermissionSubjectPermissionResponse>;
}

/**
 * Watch is the main RPC in the Watch service. It establishes a stream between
 * the client and the server. The server pushes data changes into this stream
 * and the client can read those in real time.
 */
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
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([20, 10, 5, 87, 97, 116, 99, 104, 42, 11, 119, 97, 116, 99, 104, 46, 119, 97, 116, 99, 104]),
          ],
          578365826: [
            Buffer.from([
              34,
              58,
              1,
              42,
              34,
              29,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              119,
              97,
              116,
              99,
              104,
            ]),
          ],
        },
      },
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

/** The Schema service definition. */
export type SchemaDefinition = typeof SchemaDefinition;
export const SchemaDefinition = {
  name: "Schema",
  fullName: "base.v1.Schema",
  methods: {
    /** Write is an RPC that allows you to write your authorization model. */
    write: {
      name: "Write",
      requestType: SchemaWriteRequest,
      requestStream: false,
      responseType: SchemaWriteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              55,
              10,
              6,
              83,
              99,
              104,
              101,
              109,
              97,
              18,
              30,
              119,
              114,
              105,
              116,
              101,
              32,
              121,
              111,
              117,
              114,
              32,
              97,
              117,
              116,
              104,
              111,
              114,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              32,
              109,
              111,
              100,
              101,
              108,
              42,
              13,
              115,
              99,
              104,
              101,
              109,
              97,
              115,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              42,
              58,
              1,
              42,
              34,
              37,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              115,
              99,
              104,
              101,
              109,
              97,
              115,
              47,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** Read is an RPC that allows you to read your authorization model. */
    read: {
      name: "Read",
      requestType: SchemaReadRequest,
      requestStream: false,
      responseType: SchemaReadResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              53,
              10,
              6,
              83,
              99,
              104,
              101,
              109,
              97,
              18,
              29,
              114,
              101,
              97,
              100,
              32,
              121,
              111,
              117,
              114,
              32,
              97,
              117,
              116,
              104,
              111,
              114,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              32,
              109,
              111,
              100,
              101,
              108,
              42,
              12,
              115,
              99,
              104,
              101,
              109,
              97,
              115,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              115,
              99,
              104,
              101,
              109,
              97,
              115,
              47,
              114,
              101,
              97,
              100,
            ]),
          ],
        },
      },
    },
    /** List is an RPC that allows you to list all authorization models. */
    list: {
      name: "List",
      requestType: SchemaListRequest,
      requestStream: false,
      responseType: SchemaListResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              53,
              10,
              6,
              83,
              99,
              104,
              101,
              109,
              97,
              18,
              29,
              108,
              105,
              115,
              116,
              32,
              97,
              108,
              108,
              32,
              97,
              117,
              116,
              104,
              111,
              114,
              105,
              122,
              97,
              116,
              105,
              111,
              110,
              32,
              109,
              111,
              100,
              101,
              108,
              115,
              42,
              12,
              115,
              99,
              104,
              101,
              109,
              97,
              115,
              46,
              108,
              105,
              115,
              116,
            ]),
          ],
          578365826: [
            Buffer.from([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              115,
              99,
              104,
              101,
              109,
              97,
              115,
              47,
              108,
              105,
              115,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface SchemaServiceImplementation<CallContextExt = {}> {
  /** Write is an RPC that allows you to write your authorization model. */
  write(request: SchemaWriteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SchemaWriteResponse>>;
  /** Read is an RPC that allows you to read your authorization model. */
  read(request: SchemaReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SchemaReadResponse>>;
  /** List is an RPC that allows you to list all authorization models. */
  list(request: SchemaListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SchemaListResponse>>;
}

export interface SchemaClient<CallOptionsExt = {}> {
  /** Write is an RPC that allows you to write your authorization model. */
  write(request: DeepPartial<SchemaWriteRequest>, options?: CallOptions & CallOptionsExt): Promise<SchemaWriteResponse>;
  /** Read is an RPC that allows you to read your authorization model. */
  read(request: DeepPartial<SchemaReadRequest>, options?: CallOptions & CallOptionsExt): Promise<SchemaReadResponse>;
  /** List is an RPC that allows you to list all authorization models. */
  list(request: DeepPartial<SchemaListRequest>, options?: CallOptions & CallOptionsExt): Promise<SchemaListResponse>;
}

/** The Data service provides RPC methods for managing data in the context of relationships and attributes. */
export type DataDefinition = typeof DataDefinition;
export const DataDefinition = {
  name: "Data",
  fullName: "base.v1.Data",
  methods: {
    /** The Write RPC method creates a new relation tuple. */
    write: {
      name: "Write",
      requestType: DataWriteRequest,
      requestStream: false,
      responseType: DataWriteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              31,
              10,
              4,
              68,
              97,
              116,
              97,
              18,
              11,
              99,
              114,
              101,
              97,
              116,
              101,
              32,
              100,
              97,
              116,
              97,
              42,
              10,
              100,
              97,
              116,
              97,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              39,
              58,
              1,
              42,
              34,
              34,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              100,
              97,
              116,
              97,
              47,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** RPC method to write relationships for a tenant. This can be accessed via a POST request to the given HTTP path. It's tagged under "Data" in OpenAPI documentation. */
    writeRelationships: {
      name: "WriteRelationships",
      requestType: RelationshipWriteRequest,
      requestStream: false,
      responseType: RelationshipWriteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              53,
              10,
              4,
              68,
              97,
              116,
              97,
              18,
              24,
              99,
              114,
              101,
              97,
              116,
              101,
              32,
              110,
              101,
              119,
              32,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              42,
              19,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              48,
              58,
              1,
              42,
              34,
              43,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              47,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** The ReadRelationships RPC method reads relation tuple(s). */
    readRelationships: {
      name: "ReadRelationships",
      requestType: RelationshipReadRequest,
      requestStream: false,
      responseType: RelationshipReadResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              55,
              10,
              4,
              68,
              97,
              116,
              97,
              18,
              22,
              114,
              101,
              97,
              100,
              32,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              32,
              116,
              117,
              112,
              108,
              101,
              40,
              115,
              41,
              42,
              23,
              100,
              97,
              116,
              97,
              46,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              52,
              58,
              1,
              42,
              34,
              47,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              100,
              97,
              116,
              97,
              47,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              47,
              114,
              101,
              97,
              100,
            ]),
          ],
        },
      },
    },
    /** The ReadAttributes RPC method reads attribute(s) of a relation. */
    readAttributes: {
      name: "ReadAttributes",
      requestType: AttributeReadRequest,
      requestStream: false,
      responseType: AttributeReadResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              47,
              10,
              4,
              68,
              97,
              116,
              97,
              18,
              17,
              114,
              101,
              97,
              100,
              32,
              97,
              116,
              116,
              114,
              105,
              98,
              117,
              116,
              101,
              40,
              115,
              41,
              42,
              20,
              100,
              97,
              116,
              97,
              46,
              97,
              116,
              116,
              114,
              105,
              98,
              117,
              116,
              101,
              115,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              49,
              58,
              1,
              42,
              34,
              44,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              100,
              97,
              116,
              97,
              47,
              97,
              116,
              116,
              114,
              105,
              98,
              117,
              116,
              101,
              115,
              47,
              114,
              101,
              97,
              100,
            ]),
          ],
        },
      },
    },
    /** The Delete RPC method deletes a relation tuple. */
    delete: {
      name: "Delete",
      requestType: DataDeleteRequest,
      requestStream: false,
      responseType: DataDeleteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              32,
              10,
              4,
              68,
              97,
              116,
              97,
              18,
              11,
              100,
              101,
              108,
              101,
              116,
              101,
              32,
              100,
              97,
              116,
              97,
              42,
              11,
              100,
              97,
              116,
              97,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              100,
              97,
              116,
              97,
              47,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** RPC method to delete relationships for a tenant, accessed via a POST request to the specified path, tagged as "Data" in OpenAPI documentation. */
    deleteRelationships: {
      name: "DeleteRelationships",
      requestType: RelationshipDeleteRequest,
      requestStream: false,
      responseType: RelationshipDeleteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              50,
              10,
              4,
              68,
              97,
              116,
              97,
              18,
              20,
              100,
              101,
              108,
              101,
              116,
              101,
              32,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              42,
              20,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              49,
              58,
              1,
              42,
              34,
              44,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              114,
              101,
              108,
              97,
              116,
              105,
              111,
              110,
              115,
              104,
              105,
              112,
              115,
              47,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** Executes or runs a specific bundle. This method is useful for processing or triggering actions based on the bundle's data. */
    runBundle: {
      name: "RunBundle",
      requestType: BundleRunRequest,
      requestStream: false,
      responseType: BundleRunResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              30,
              10,
              4,
              68,
              97,
              116,
              97,
              18,
              10,
              114,
              117,
              110,
              32,
              98,
              117,
              110,
              100,
              108,
              101,
              42,
              10,
              98,
              117,
              110,
              100,
              108,
              101,
              46,
              114,
              117,
              110,
            ]),
          ],
          578365826: [
            Buffer.from([
              44,
              58,
              1,
              42,
              34,
              39,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              100,
              97,
              116,
              97,
              47,
              114,
              117,
              110,
              45,
              98,
              117,
              110,
              100,
              108,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface DataServiceImplementation<CallContextExt = {}> {
  /** The Write RPC method creates a new relation tuple. */
  write(request: DataWriteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DataWriteResponse>>;
  /** RPC method to write relationships for a tenant. This can be accessed via a POST request to the given HTTP path. It's tagged under "Data" in OpenAPI documentation. */
  writeRelationships(
    request: RelationshipWriteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RelationshipWriteResponse>>;
  /** The ReadRelationships RPC method reads relation tuple(s). */
  readRelationships(
    request: RelationshipReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RelationshipReadResponse>>;
  /** The ReadAttributes RPC method reads attribute(s) of a relation. */
  readAttributes(
    request: AttributeReadRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AttributeReadResponse>>;
  /** The Delete RPC method deletes a relation tuple. */
  delete(request: DataDeleteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DataDeleteResponse>>;
  /** RPC method to delete relationships for a tenant, accessed via a POST request to the specified path, tagged as "Data" in OpenAPI documentation. */
  deleteRelationships(
    request: RelationshipDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RelationshipDeleteResponse>>;
  /** Executes or runs a specific bundle. This method is useful for processing or triggering actions based on the bundle's data. */
  runBundle(request: BundleRunRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BundleRunResponse>>;
}

export interface DataClient<CallOptionsExt = {}> {
  /** The Write RPC method creates a new relation tuple. */
  write(request: DeepPartial<DataWriteRequest>, options?: CallOptions & CallOptionsExt): Promise<DataWriteResponse>;
  /** RPC method to write relationships for a tenant. This can be accessed via a POST request to the given HTTP path. It's tagged under "Data" in OpenAPI documentation. */
  writeRelationships(
    request: DeepPartial<RelationshipWriteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RelationshipWriteResponse>;
  /** The ReadRelationships RPC method reads relation tuple(s). */
  readRelationships(
    request: DeepPartial<RelationshipReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RelationshipReadResponse>;
  /** The ReadAttributes RPC method reads attribute(s) of a relation. */
  readAttributes(
    request: DeepPartial<AttributeReadRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AttributeReadResponse>;
  /** The Delete RPC method deletes a relation tuple. */
  delete(request: DeepPartial<DataDeleteRequest>, options?: CallOptions & CallOptionsExt): Promise<DataDeleteResponse>;
  /** RPC method to delete relationships for a tenant, accessed via a POST request to the specified path, tagged as "Data" in OpenAPI documentation. */
  deleteRelationships(
    request: DeepPartial<RelationshipDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RelationshipDeleteResponse>;
  /** Executes or runs a specific bundle. This method is useful for processing or triggering actions based on the bundle's data. */
  runBundle(request: DeepPartial<BundleRunRequest>, options?: CallOptions & CallOptionsExt): Promise<BundleRunResponse>;
}

export type BundleDefinition = typeof BundleDefinition;
export const BundleDefinition = {
  name: "Bundle",
  fullName: "base.v1.Bundle",
  methods: {
    /** Writes a bundle of data for a specific operation. This is a general purpose method to handle writing data bundles. */
    write: {
      name: "Write",
      requestType: BundleWriteRequest,
      requestStream: false,
      responseType: BundleWriteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              36,
              10,
              6,
              66,
              117,
              110,
              100,
              108,
              101,
              18,
              12,
              119,
              114,
              105,
              116,
              101,
              32,
              98,
              117,
              110,
              100,
              108,
              101,
              42,
              12,
              98,
              117,
              110,
              100,
              108,
              101,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              98,
              117,
              110,
              100,
              108,
              101,
              47,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /** Reads a data bundle based on a specified request. This method is tailored for retrieving data bundles. */
    read: {
      name: "Read",
      requestType: BundleReadRequest,
      requestStream: false,
      responseType: BundleReadResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              34,
              10,
              6,
              66,
              117,
              110,
              100,
              108,
              101,
              18,
              11,
              114,
              101,
              97,
              100,
              32,
              98,
              117,
              110,
              100,
              108,
              101,
              42,
              11,
              98,
              117,
              110,
              100,
              108,
              101,
              46,
              114,
              101,
              97,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              98,
              117,
              110,
              100,
              108,
              101,
              47,
              114,
              101,
              97,
              100,
            ]),
          ],
        },
      },
    },
    /** Deletes a specific data bundle. This method is used to remove existing bundles from the system. */
    delete: {
      name: "Delete",
      requestType: BundleDeleteRequest,
      requestStream: false,
      responseType: BundleDeleteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              38,
              10,
              6,
              66,
              117,
              110,
              100,
              108,
              101,
              18,
              13,
              100,
              101,
              108,
              101,
              116,
              101,
              32,
              98,
              117,
              110,
              100,
              108,
              101,
              42,
              13,
              98,
              117,
              110,
              100,
              108,
              101,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              42,
              58,
              1,
              42,
              34,
              37,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              123,
              116,
              101,
              110,
              97,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              98,
              117,
              110,
              100,
              108,
              101,
              47,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface BundleServiceImplementation<CallContextExt = {}> {
  /** Writes a bundle of data for a specific operation. This is a general purpose method to handle writing data bundles. */
  write(request: BundleWriteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BundleWriteResponse>>;
  /** Reads a data bundle based on a specified request. This method is tailored for retrieving data bundles. */
  read(request: BundleReadRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BundleReadResponse>>;
  /** Deletes a specific data bundle. This method is used to remove existing bundles from the system. */
  delete(
    request: BundleDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<BundleDeleteResponse>>;
}

export interface BundleClient<CallOptionsExt = {}> {
  /** Writes a bundle of data for a specific operation. This is a general purpose method to handle writing data bundles. */
  write(request: DeepPartial<BundleWriteRequest>, options?: CallOptions & CallOptionsExt): Promise<BundleWriteResponse>;
  /** Reads a data bundle based on a specified request. This method is tailored for retrieving data bundles. */
  read(request: DeepPartial<BundleReadRequest>, options?: CallOptions & CallOptionsExt): Promise<BundleReadResponse>;
  /** Deletes a specific data bundle. This method is used to remove existing bundles from the system. */
  delete(
    request: DeepPartial<BundleDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<BundleDeleteResponse>;
}

export type TenancyDefinition = typeof TenancyDefinition;
export const TenancyDefinition = {
  name: "Tenancy",
  fullName: "base.v1.Tenancy",
  methods: {
    /**
     * Create is a unary RPC to create a new tenant.
     * It requires a TenantCreateRequest and returns a TenantCreateResponse.
     */
    create: {
      name: "Create",
      requestType: TenantCreateRequest,
      requestStream: false,
      responseType: TenantCreateResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              44,
              10,
              7,
              84,
              101,
              110,
              97,
              110,
              99,
              121,
              18,
              17,
              99,
              114,
              101,
              97,
              116,
              101,
              32,
              110,
              101,
              119,
              32,
              116,
              101,
              110,
              97,
              110,
              116,
              42,
              14,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              46,
              99,
              114,
              101,
              97,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              23,
              58,
              1,
              42,
              34,
              18,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              99,
              114,
              101,
              97,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Delete is a unary RPC to delete an existing tenant.
     * It requires a TenantDeleteRequest and returns a TenantDeleteResponse.
     */
    delete: {
      name: "Delete",
      requestType: TenantDeleteRequest,
      requestStream: false,
      responseType: TenantDeleteResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              40,
              10,
              7,
              84,
              101,
              110,
              97,
              110,
              99,
              121,
              18,
              13,
              100,
              101,
              108,
              101,
              116,
              101,
              32,
              116,
              101,
              110,
              97,
              110,
              116,
              42,
              14,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              46,
              100,
              101,
              108,
              101,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([18, 42, 16, 47, 118, 49, 47, 116, 101, 110, 97, 110, 116, 115, 47, 123, 105, 100, 125]),
          ],
        },
      },
    },
    /**
     * List is a unary RPC to get a list of all tenants.
     * It requires a TenantListRequest and returns a TenantListResponse.
     */
    list: {
      name: "List",
      requestType: TenantListRequest,
      requestStream: false,
      responseType: TenantListResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              37,
              10,
              7,
              84,
              101,
              110,
              97,
              110,
              99,
              121,
              18,
              12,
              108,
              105,
              115,
              116,
              32,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              42,
              12,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              46,
              108,
              105,
              115,
              116,
            ]),
          ],
          578365826: [
            Buffer.from([
              21,
              58,
              1,
              42,
              34,
              16,
              47,
              118,
              49,
              47,
              116,
              101,
              110,
              97,
              110,
              116,
              115,
              47,
              108,
              105,
              115,
              116,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface TenancyServiceImplementation<CallContextExt = {}> {
  /**
   * Create is a unary RPC to create a new tenant.
   * It requires a TenantCreateRequest and returns a TenantCreateResponse.
   */
  create(
    request: TenantCreateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TenantCreateResponse>>;
  /**
   * Delete is a unary RPC to delete an existing tenant.
   * It requires a TenantDeleteRequest and returns a TenantDeleteResponse.
   */
  delete(
    request: TenantDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TenantDeleteResponse>>;
  /**
   * List is a unary RPC to get a list of all tenants.
   * It requires a TenantListRequest and returns a TenantListResponse.
   */
  list(request: TenantListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TenantListResponse>>;
}

export interface TenancyClient<CallOptionsExt = {}> {
  /**
   * Create is a unary RPC to create a new tenant.
   * It requires a TenantCreateRequest and returns a TenantCreateResponse.
   */
  create(
    request: DeepPartial<TenantCreateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TenantCreateResponse>;
  /**
   * Delete is a unary RPC to delete an existing tenant.
   * It requires a TenantDeleteRequest and returns a TenantDeleteResponse.
   */
  delete(
    request: DeepPartial<TenantDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TenantDeleteResponse>;
  /**
   * List is a unary RPC to get a list of all tenants.
   * It requires a TenantListRequest and returns a TenantListResponse.
   */
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
