/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CheckedExpr } from "../../google/api/expr/v1alpha1/checked";
import { Any } from "../../google/protobuf/any";
import { Struct } from "../../google/protobuf/struct";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "base.v1";

/** Enumerates results of a check operation. */
export enum CheckResult {
  /** CHECK_RESULT_UNSPECIFIED - Not specified check result. This is the default value. */
  CHECK_RESULT_UNSPECIFIED = 0,
  /** CHECK_RESULT_ALLOWED - Represents a successful check (the check allowed the operation). */
  CHECK_RESULT_ALLOWED = 1,
  /** CHECK_RESULT_DENIED - Represents a failed check (the check denied the operation). */
  CHECK_RESULT_DENIED = 2,
  UNRECOGNIZED = -1,
}

export function checkResultFromJSON(object: any): CheckResult {
  switch (object) {
    case 0:
    case "CHECK_RESULT_UNSPECIFIED":
      return CheckResult.CHECK_RESULT_UNSPECIFIED;
    case 1:
    case "CHECK_RESULT_ALLOWED":
      return CheckResult.CHECK_RESULT_ALLOWED;
    case 2:
    case "CHECK_RESULT_DENIED":
      return CheckResult.CHECK_RESULT_DENIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckResult.UNRECOGNIZED;
  }
}

export function checkResultToJSON(object: CheckResult): string {
  switch (object) {
    case CheckResult.CHECK_RESULT_UNSPECIFIED:
      return "CHECK_RESULT_UNSPECIFIED";
    case CheckResult.CHECK_RESULT_ALLOWED:
      return "CHECK_RESULT_ALLOWED";
    case CheckResult.CHECK_RESULT_DENIED:
      return "CHECK_RESULT_DENIED";
    case CheckResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Enumerates the types of attribute. */
export enum AttributeType {
  /** ATTRIBUTE_TYPE_UNSPECIFIED - Not specified attribute type. This is the default value. */
  ATTRIBUTE_TYPE_UNSPECIFIED = 0,
  /** ATTRIBUTE_TYPE_BOOLEAN - A boolean attribute type. */
  ATTRIBUTE_TYPE_BOOLEAN = 1,
  /** ATTRIBUTE_TYPE_BOOLEAN_ARRAY - A boolean array attribute type. */
  ATTRIBUTE_TYPE_BOOLEAN_ARRAY = 2,
  /** ATTRIBUTE_TYPE_STRING - A string attribute type. */
  ATTRIBUTE_TYPE_STRING = 3,
  /** ATTRIBUTE_TYPE_STRING_ARRAY - A string array attribute type. */
  ATTRIBUTE_TYPE_STRING_ARRAY = 4,
  /** ATTRIBUTE_TYPE_INTEGER - An integer attribute type. */
  ATTRIBUTE_TYPE_INTEGER = 5,
  /** ATTRIBUTE_TYPE_INTEGER_ARRAY - An integer array attribute type. */
  ATTRIBUTE_TYPE_INTEGER_ARRAY = 6,
  /** ATTRIBUTE_TYPE_DOUBLE - A double attribute type. */
  ATTRIBUTE_TYPE_DOUBLE = 7,
  /** ATTRIBUTE_TYPE_DOUBLE_ARRAY - A double array attribute type. */
  ATTRIBUTE_TYPE_DOUBLE_ARRAY = 8,
  UNRECOGNIZED = -1,
}

export function attributeTypeFromJSON(object: any): AttributeType {
  switch (object) {
    case 0:
    case "ATTRIBUTE_TYPE_UNSPECIFIED":
      return AttributeType.ATTRIBUTE_TYPE_UNSPECIFIED;
    case 1:
    case "ATTRIBUTE_TYPE_BOOLEAN":
      return AttributeType.ATTRIBUTE_TYPE_BOOLEAN;
    case 2:
    case "ATTRIBUTE_TYPE_BOOLEAN_ARRAY":
      return AttributeType.ATTRIBUTE_TYPE_BOOLEAN_ARRAY;
    case 3:
    case "ATTRIBUTE_TYPE_STRING":
      return AttributeType.ATTRIBUTE_TYPE_STRING;
    case 4:
    case "ATTRIBUTE_TYPE_STRING_ARRAY":
      return AttributeType.ATTRIBUTE_TYPE_STRING_ARRAY;
    case 5:
    case "ATTRIBUTE_TYPE_INTEGER":
      return AttributeType.ATTRIBUTE_TYPE_INTEGER;
    case 6:
    case "ATTRIBUTE_TYPE_INTEGER_ARRAY":
      return AttributeType.ATTRIBUTE_TYPE_INTEGER_ARRAY;
    case 7:
    case "ATTRIBUTE_TYPE_DOUBLE":
      return AttributeType.ATTRIBUTE_TYPE_DOUBLE;
    case 8:
    case "ATTRIBUTE_TYPE_DOUBLE_ARRAY":
      return AttributeType.ATTRIBUTE_TYPE_DOUBLE_ARRAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttributeType.UNRECOGNIZED;
  }
}

export function attributeTypeToJSON(object: AttributeType): string {
  switch (object) {
    case AttributeType.ATTRIBUTE_TYPE_UNSPECIFIED:
      return "ATTRIBUTE_TYPE_UNSPECIFIED";
    case AttributeType.ATTRIBUTE_TYPE_BOOLEAN:
      return "ATTRIBUTE_TYPE_BOOLEAN";
    case AttributeType.ATTRIBUTE_TYPE_BOOLEAN_ARRAY:
      return "ATTRIBUTE_TYPE_BOOLEAN_ARRAY";
    case AttributeType.ATTRIBUTE_TYPE_STRING:
      return "ATTRIBUTE_TYPE_STRING";
    case AttributeType.ATTRIBUTE_TYPE_STRING_ARRAY:
      return "ATTRIBUTE_TYPE_STRING_ARRAY";
    case AttributeType.ATTRIBUTE_TYPE_INTEGER:
      return "ATTRIBUTE_TYPE_INTEGER";
    case AttributeType.ATTRIBUTE_TYPE_INTEGER_ARRAY:
      return "ATTRIBUTE_TYPE_INTEGER_ARRAY";
    case AttributeType.ATTRIBUTE_TYPE_DOUBLE:
      return "ATTRIBUTE_TYPE_DOUBLE";
    case AttributeType.ATTRIBUTE_TYPE_DOUBLE_ARRAY:
      return "ATTRIBUTE_TYPE_DOUBLE_ARRAY";
    case AttributeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Context encapsulates the information related to a single operation,
 * including the tuples involved and the associated attributes.
 */
export interface Context {
  /** A repeated field of tuples involved in the operation. */
  tuples: Tuple[];
  /** A repeated field of attributes associated with the operation. */
  attributes: Attribute[];
  /** Additional data associated with the context. */
  data: { [key: string]: any } | undefined;
}

/** Child represents a node in the permission tree. */
export interface Child {
  type?: { $case: "leaf"; leaf: Leaf } | { $case: "rewrite"; rewrite: Rewrite } | undefined;
}

/** Leaf represents a leaf node in the permission tree. */
export interface Leaf {
  type?:
    | { $case: "computedUserSet"; computedUserSet: ComputedUserSet }
    | { $case: "tupleToUserSet"; tupleToUserSet: TupleToUserSet }
    | { $case: "computedAttribute"; computedAttribute: ComputedAttribute }
    | { $case: "call"; call: Call }
    | undefined;
}

/**
 * The Rewrite message represents a specific rewrite operation.
 * This operation could be one of the following: union, intersection, or exclusion.
 */
export interface Rewrite {
  /** The type of rewrite operation to be performed. */
  rewriteOperation: Rewrite_Operation;
  /** A list of children that are operated upon by the rewrite operation. */
  children: Child[];
}

/**
 * Operation enum includes potential rewrite operations.
 * OPERATION_UNION: Represents a union operation.
 * OPERATION_INTERSECTION: Represents an intersection operation.
 * OPERATION_EXCLUSION: Represents an exclusion operation.
 */
export enum Rewrite_Operation {
  /** OPERATION_UNSPECIFIED - Default, unspecified operation. */
  OPERATION_UNSPECIFIED = 0,
  /** OPERATION_UNION - Represents a union operation. */
  OPERATION_UNION = 1,
  /** OPERATION_INTERSECTION - Represents an intersection operation. */
  OPERATION_INTERSECTION = 2,
  /** OPERATION_EXCLUSION - Represents an exclusion operation. */
  OPERATION_EXCLUSION = 3,
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
    case 3:
    case "OPERATION_EXCLUSION":
      return Rewrite_Operation.OPERATION_EXCLUSION;
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
    case Rewrite_Operation.OPERATION_EXCLUSION:
      return "OPERATION_EXCLUSION";
    case Rewrite_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The SchemaDefinition message provides definitions for entities and rules,
 * and includes references to clarify whether a name refers to an entity or a rule.
 */
export interface SchemaDefinition {
  /** Map of entity definitions. The key is the entity name, and the value is the corresponding EntityDefinition. */
  entityDefinitions: { [key: string]: EntityDefinition };
  /** Map of rule definitions. The key is the rule name, and the value is the corresponding RuleDefinition. */
  ruleDefinitions: { [key: string]: RuleDefinition };
  /** Map of references to signify whether a string refers to an entity or a rule. */
  references: { [key: string]: SchemaDefinition_Reference };
}

/** The Reference enum helps distinguish whether a name corresponds to an entity or a rule. */
export enum SchemaDefinition_Reference {
  /** REFERENCE_UNSPECIFIED - Default, unspecified reference. */
  REFERENCE_UNSPECIFIED = 0,
  /** REFERENCE_ENTITY - Indicates that the name refers to an entity. */
  REFERENCE_ENTITY = 1,
  /** REFERENCE_RULE - Indicates that the name refers to a rule. */
  REFERENCE_RULE = 2,
  UNRECOGNIZED = -1,
}

export function schemaDefinition_ReferenceFromJSON(object: any): SchemaDefinition_Reference {
  switch (object) {
    case 0:
    case "REFERENCE_UNSPECIFIED":
      return SchemaDefinition_Reference.REFERENCE_UNSPECIFIED;
    case 1:
    case "REFERENCE_ENTITY":
      return SchemaDefinition_Reference.REFERENCE_ENTITY;
    case 2:
    case "REFERENCE_RULE":
      return SchemaDefinition_Reference.REFERENCE_RULE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SchemaDefinition_Reference.UNRECOGNIZED;
  }
}

export function schemaDefinition_ReferenceToJSON(object: SchemaDefinition_Reference): string {
  switch (object) {
    case SchemaDefinition_Reference.REFERENCE_UNSPECIFIED:
      return "REFERENCE_UNSPECIFIED";
    case SchemaDefinition_Reference.REFERENCE_ENTITY:
      return "REFERENCE_ENTITY";
    case SchemaDefinition_Reference.REFERENCE_RULE:
      return "REFERENCE_RULE";
    case SchemaDefinition_Reference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SchemaDefinition_EntityDefinitionsEntry {
  key: string;
  value: EntityDefinition | undefined;
}

export interface SchemaDefinition_RuleDefinitionsEntry {
  key: string;
  value: RuleDefinition | undefined;
}

export interface SchemaDefinition_ReferencesEntry {
  key: string;
  value: SchemaDefinition_Reference;
}

/** The EntityDefinition message provides detailed information about a specific entity. */
export interface EntityDefinition {
  /** The name of the entity, which follows a specific string pattern and has a maximum byte size. */
  name: string;
  /** Map of relation definitions within this entity. The key is the relation name, and the value is the RelationDefinition. */
  relations: { [key: string]: RelationDefinition };
  /** Map of permission definitions within this entity. The key is the permission name, and the value is the PermissionDefinition. */
  permissions: { [key: string]: PermissionDefinition };
  /** Map of attribute definitions within this entity. The key is the attribute name, and the value is the AttributeDefinition. */
  attributes: { [key: string]: AttributeDefinition };
  /** Map of references indicating whether a string pertains to a relation, permission, or attribute. */
  references: { [key: string]: EntityDefinition_Reference };
}

/** The Reference enum specifies whether a name pertains to a relation, permission, or attribute. */
export enum EntityDefinition_Reference {
  /** REFERENCE_UNSPECIFIED - Default, unspecified reference. */
  REFERENCE_UNSPECIFIED = 0,
  /** REFERENCE_RELATION - Indicates that the name refers to a relation. */
  REFERENCE_RELATION = 1,
  /** REFERENCE_PERMISSION - Indicates that the name refers to a permission. */
  REFERENCE_PERMISSION = 2,
  /** REFERENCE_ATTRIBUTE - Indicates that the name refers to an attribute. */
  REFERENCE_ATTRIBUTE = 3,
  UNRECOGNIZED = -1,
}

export function entityDefinition_ReferenceFromJSON(object: any): EntityDefinition_Reference {
  switch (object) {
    case 0:
    case "REFERENCE_UNSPECIFIED":
      return EntityDefinition_Reference.REFERENCE_UNSPECIFIED;
    case 1:
    case "REFERENCE_RELATION":
      return EntityDefinition_Reference.REFERENCE_RELATION;
    case 2:
    case "REFERENCE_PERMISSION":
      return EntityDefinition_Reference.REFERENCE_PERMISSION;
    case 3:
    case "REFERENCE_ATTRIBUTE":
      return EntityDefinition_Reference.REFERENCE_ATTRIBUTE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EntityDefinition_Reference.UNRECOGNIZED;
  }
}

export function entityDefinition_ReferenceToJSON(object: EntityDefinition_Reference): string {
  switch (object) {
    case EntityDefinition_Reference.REFERENCE_UNSPECIFIED:
      return "REFERENCE_UNSPECIFIED";
    case EntityDefinition_Reference.REFERENCE_RELATION:
      return "REFERENCE_RELATION";
    case EntityDefinition_Reference.REFERENCE_PERMISSION:
      return "REFERENCE_PERMISSION";
    case EntityDefinition_Reference.REFERENCE_ATTRIBUTE:
      return "REFERENCE_ATTRIBUTE";
    case EntityDefinition_Reference.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EntityDefinition_RelationsEntry {
  key: string;
  value: RelationDefinition | undefined;
}

export interface EntityDefinition_PermissionsEntry {
  key: string;
  value: PermissionDefinition | undefined;
}

export interface EntityDefinition_AttributesEntry {
  key: string;
  value: AttributeDefinition | undefined;
}

export interface EntityDefinition_ReferencesEntry {
  key: string;
  value: EntityDefinition_Reference;
}

/** The RuleDefinition message provides detailed information about a specific rule. */
export interface RuleDefinition {
  /** The name of the rule, which follows a specific string pattern and has a maximum byte size. */
  name: string;
  /** Map of arguments for this rule. The key is the attribute name, and the value is the AttributeType. */
  arguments: { [key: string]: AttributeType };
  /** The expression for this rule in the form of a google.api.expr.v1alpha1.CheckedExpr. */
  expression: CheckedExpr | undefined;
}

export interface RuleDefinition_ArgumentsEntry {
  key: string;
  value: AttributeType;
}

/** The AttributeDefinition message provides detailed information about a specific attribute. */
export interface AttributeDefinition {
  /** The name of the attribute, which follows a specific string pattern and has a maximum byte size. */
  name: string;
  /** The type of the attribute. */
  type: AttributeType;
}

/** The RelationDefinition message provides detailed information about a specific relation. */
export interface RelationDefinition {
  /** The name of the relation, which follows a specific string pattern and has a maximum byte size. */
  name: string;
  /** A list of references to other relations. */
  relationReferences: RelationReference[];
}

/** The PermissionDefinition message provides detailed information about a specific permission. */
export interface PermissionDefinition {
  /** The name of the permission, which follows a specific string pattern and has a maximum byte size. */
  name: string;
  /** The child related to this permission. */
  child: Child | undefined;
}

/** The RelationReference message provides a reference to a specific relation. */
export interface RelationReference {
  /** The type of the referenced entity, which follows a specific string pattern and has a maximum byte size. */
  type: string;
  /** The name of the referenced relation, which follows a specific string pattern and has a maximum byte size. */
  relation: string;
}

/** Argument defines the type of argument in a Call. It can be either a ComputedAttribute or a ContextAttribute. */
export interface Argument {
  type?: { $case: "computedAttribute"; computedAttribute: ComputedAttribute } | {
    $case: "contextAttribute";
    contextAttribute: ContextAttribute;
  } | undefined;
}

/** Call represents a call to a rule. It includes the name of the rule and the arguments passed to it. */
export interface Call {
  /** Name of the rule */
  ruleName: string;
  /** Arguments passed to the rule */
  arguments: Argument[];
}

/** ComputedAttribute defines a computed attribute which includes its name. */
export interface ComputedAttribute {
  /** Name of the computed attribute */
  name: string;
}

/** ContextAttribute defines a context attribute which includes its name. */
export interface ContextAttribute {
  /** Name of the context attribute */
  name: string;
}

/** ComputedUserSet defines a set of computed users which includes the relation name. */
export interface ComputedUserSet {
  /** Relation name */
  relation: string;
}

/** TupleToUserSet defines a mapping from tuple sets to computed user sets. */
export interface TupleToUserSet {
  /** The tuple set */
  tupleSet:
    | TupleSet
    | undefined;
  /** The computed user set */
  computed: ComputedUserSet | undefined;
}

/** TupleSet represents a set of tuples associated with a specific relation. */
export interface TupleSet {
  relation: string;
}

/** Tuple is a structure that includes an entity, a relation, and a subject. */
export interface Tuple {
  entity: Entity | undefined;
  relation: string;
  subject: Subject | undefined;
}

/** Attribute represents an attribute of an entity with a specific type and value. */
export interface Attribute {
  entity:
    | Entity
    | undefined;
  /** Name of the attribute */
  attribute: string;
  value: Any | undefined;
}

/** Tuples is a collection of tuples. */
export interface Tuples {
  tuples: Tuple[];
}

/** Attributes is a collection of attributes. */
export interface Attributes {
  attributes: Attribute[];
}

/** Entity represents an entity with a type and an identifier. */
export interface Entity {
  type: string;
  id: string;
}

/** EntityAndRelation represents an entity along with a relation. */
export interface EntityAndRelation {
  entity: Entity | undefined;
  relation: string;
}

/** Subject represents an entity subject with a type, an identifier, and a relation. */
export interface Subject {
  type: string;
  id: string;
  relation: string;
}

/** AttributeFilter is used to filter attributes based on the entity and attribute names. */
export interface AttributeFilter {
  entity:
    | EntityFilter
    | undefined;
  /** Names of the attributes to be filtered */
  attributes: string[];
}

/** TupleFilter is used to filter tuples based on the entity, relation and the subject. */
export interface TupleFilter {
  entity: EntityFilter | undefined;
  relation: string;
  /** The subject filter */
  subject: SubjectFilter | undefined;
}

/** EntityFilter is used to filter entities based on the type and ids. */
export interface EntityFilter {
  /** Type of the entity */
  type: string;
  /** List of entity IDs */
  ids: string[];
}

/** SubjectFilter is used to filter subjects based on the type, ids and relation. */
export interface SubjectFilter {
  /** Type of the subject */
  type: string;
  /** List of subject IDs */
  ids: string[];
  relation: string;
}

/** ExpandTreeNode represents a node in an expansion tree with a specific operation and its children. */
export interface ExpandTreeNode {
  /** Operation to be applied on this tree node */
  operation: ExpandTreeNode_Operation;
  /** The children of this tree node */
  children: Expand[];
}

/** Operation is an enum representing the type of operation to be applied on the tree node. */
export enum ExpandTreeNode_Operation {
  OPERATION_UNSPECIFIED = 0,
  OPERATION_UNION = 1,
  OPERATION_INTERSECTION = 2,
  OPERATION_EXCLUSION = 3,
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
    case 3:
    case "OPERATION_EXCLUSION":
      return ExpandTreeNode_Operation.OPERATION_EXCLUSION;
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
    case ExpandTreeNode_Operation.OPERATION_EXCLUSION:
      return "OPERATION_EXCLUSION";
    case ExpandTreeNode_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Expand is used to define a hierarchical structure for permissions.
 * It has an entity, permission, and arguments. The node can be either another hierarchical structure or a set of subjects.
 */
export interface Expand {
  /** entity is the entity for which the hierarchical structure is defined. */
  entity:
    | Entity
    | undefined;
  /** permission is the permission applied to the entity. */
  permission: string;
  /** arguments are the additional information or context used to evaluate permissions. */
  arguments: Argument[];
  node?: { $case: "expand"; expand: ExpandTreeNode } | { $case: "leaf"; leaf: ExpandLeaf } | undefined;
}

/** ExpandLeaf is the leaf node of an Expand tree and can be either a set of Subjects or a set of Values. */
export interface ExpandLeaf {
  type?: { $case: "subjects"; subjects: Subjects } | { $case: "values"; values: Values } | {
    $case: "value";
    value: Any;
  } | undefined;
}

export interface Values {
  values: { [key: string]: Any };
}

export interface Values_ValuesEntry {
  key: string;
  value: Any | undefined;
}

/** Subjects holds a repeated field of Subject type. */
export interface Subjects {
  /** A list of subjects. */
  subjects: Subject[];
}

/** Tenant represents a tenant with an id, a name, and a timestamp indicating when it was created. */
export interface Tenant {
  /** The ID of the tenant. */
  id: string;
  /** The name of the tenant. */
  name: string;
  /** The time at which the tenant was created. */
  createdAt: Date | undefined;
}

/** DataChanges represent changes in data with a snap token and a list of data change objects. */
export interface DataChanges {
  /** The snapshot token. */
  snapToken: string;
  /** The list of data changes. */
  dataChanges: DataChange[];
}

/** DataChange represents a single change in data, with an operation type and the actual change which could be a tuple or an attribute. */
export interface DataChange {
  /** The operation type. */
  operation: DataChange_Operation;
  type?: { $case: "tuple"; tuple: Tuple } | { $case: "attribute"; attribute: Attribute } | undefined;
}

export enum DataChange_Operation {
  /** OPERATION_UNSPECIFIED - Default operation, not specified. */
  OPERATION_UNSPECIFIED = 0,
  /** OPERATION_CREATE - Creation operation. */
  OPERATION_CREATE = 1,
  /** OPERATION_DELETE - Deletion operation. */
  OPERATION_DELETE = 2,
  UNRECOGNIZED = -1,
}

export function dataChange_OperationFromJSON(object: any): DataChange_Operation {
  switch (object) {
    case 0:
    case "OPERATION_UNSPECIFIED":
      return DataChange_Operation.OPERATION_UNSPECIFIED;
    case 1:
    case "OPERATION_CREATE":
      return DataChange_Operation.OPERATION_CREATE;
    case 2:
    case "OPERATION_DELETE":
      return DataChange_Operation.OPERATION_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataChange_Operation.UNRECOGNIZED;
  }
}

export function dataChange_OperationToJSON(object: DataChange_Operation): string {
  switch (object) {
    case DataChange_Operation.OPERATION_UNSPECIFIED:
      return "OPERATION_UNSPECIFIED";
    case DataChange_Operation.OPERATION_CREATE:
      return "OPERATION_CREATE";
    case DataChange_Operation.OPERATION_DELETE:
      return "OPERATION_DELETE";
    case DataChange_Operation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Wrapper for a single string value. */
export interface StringValue {
  /** The string value. */
  data: string;
}

/** Wrapper for a single integer value. */
export interface IntegerValue {
  /** The integer value. */
  data: number;
}

/** Wrapper for a single double precision floating point value. */
export interface DoubleValue {
  /** The double value. */
  data: number;
}

/** Wrapper for a single boolean value. */
export interface BooleanValue {
  /** The boolean value. */
  data: boolean;
}

/** Wrapper for an array of strings. */
export interface StringArrayValue {
  /** The array of strings. */
  data: string[];
}

/** Wrapper for an array of integers. */
export interface IntegerArrayValue {
  /** The array of integers. */
  data: number[];
}

/** Wrapper for an array of double precision floating point values. */
export interface DoubleArrayValue {
  /** The array of doubles. */
  data: number[];
}

/** Wrapper for an array of booleans. */
export interface BooleanArrayValue {
  /** The array of booleans. */
  data: boolean[];
}

function createBaseContext(): Context {
  return { tuples: [], attributes: [], data: undefined };
}

export const Context = {
  encode(message: Context, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tuples) {
      Tuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Struct.encode(Struct.wrap(message.data), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Context {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();
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

          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Context {
    return {
      tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [],
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
      data: isObject(object.data) ? object.data : undefined,
    };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};
    if (message.tuples?.length) {
      obj.tuples = message.tuples.map((e) => Tuple.toJSON(e));
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<Context>): Context {
    return Context.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Context>): Context {
    const message = createBaseContext();
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
    message.data = object.data ?? undefined;
    return message;
  },
};

function createBaseChild(): Child {
  return { type: undefined };
}

export const Child = {
  encode(message: Child, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.type?.$case) {
      case "leaf":
        Leaf.encode(message.type.leaf, writer.uint32(10).fork()).ldelim();
        break;
      case "rewrite":
        Rewrite.encode(message.type.rewrite, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Child {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = { $case: "leaf", leaf: Leaf.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = { $case: "rewrite", rewrite: Rewrite.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.type?.$case === "leaf") {
      obj.leaf = Leaf.toJSON(message.type.leaf);
    }
    if (message.type?.$case === "rewrite") {
      obj.rewrite = Rewrite.toJSON(message.type.rewrite);
    }
    return obj;
  },

  create(base?: DeepPartial<Child>): Child {
    return Child.fromPartial(base ?? {});
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
  return { type: undefined };
}

export const Leaf = {
  encode(message: Leaf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.type?.$case) {
      case "computedUserSet":
        ComputedUserSet.encode(message.type.computedUserSet, writer.uint32(10).fork()).ldelim();
        break;
      case "tupleToUserSet":
        TupleToUserSet.encode(message.type.tupleToUserSet, writer.uint32(18).fork()).ldelim();
        break;
      case "computedAttribute":
        ComputedAttribute.encode(message.type.computedAttribute, writer.uint32(26).fork()).ldelim();
        break;
      case "call":
        Call.encode(message.type.call, writer.uint32(34).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Leaf {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = { $case: "computedUserSet", computedUserSet: ComputedUserSet.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = { $case: "tupleToUserSet", tupleToUserSet: TupleToUserSet.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = {
            $case: "computedAttribute",
            computedAttribute: ComputedAttribute.decode(reader, reader.uint32()),
          };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.type = { $case: "call", call: Call.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Leaf {
    return {
      type: isSet(object.computedUserSet)
        ? { $case: "computedUserSet", computedUserSet: ComputedUserSet.fromJSON(object.computedUserSet) }
        : isSet(object.tupleToUserSet)
        ? { $case: "tupleToUserSet", tupleToUserSet: TupleToUserSet.fromJSON(object.tupleToUserSet) }
        : isSet(object.computedAttribute)
        ? { $case: "computedAttribute", computedAttribute: ComputedAttribute.fromJSON(object.computedAttribute) }
        : isSet(object.call)
        ? { $case: "call", call: Call.fromJSON(object.call) }
        : undefined,
    };
  },

  toJSON(message: Leaf): unknown {
    const obj: any = {};
    if (message.type?.$case === "computedUserSet") {
      obj.computedUserSet = ComputedUserSet.toJSON(message.type.computedUserSet);
    }
    if (message.type?.$case === "tupleToUserSet") {
      obj.tupleToUserSet = TupleToUserSet.toJSON(message.type.tupleToUserSet);
    }
    if (message.type?.$case === "computedAttribute") {
      obj.computedAttribute = ComputedAttribute.toJSON(message.type.computedAttribute);
    }
    if (message.type?.$case === "call") {
      obj.call = Call.toJSON(message.type.call);
    }
    return obj;
  },

  create(base?: DeepPartial<Leaf>): Leaf {
    return Leaf.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Leaf>): Leaf {
    const message = createBaseLeaf();
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
    if (
      object.type?.$case === "computedAttribute" &&
      object.type?.computedAttribute !== undefined &&
      object.type?.computedAttribute !== null
    ) {
      message.type = {
        $case: "computedAttribute",
        computedAttribute: ComputedAttribute.fromPartial(object.type.computedAttribute),
      };
    }
    if (object.type?.$case === "call" && object.type?.call !== undefined && object.type?.call !== null) {
      message.type = { $case: "call", call: Call.fromPartial(object.type.call) };
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewrite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rewriteOperation = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.children.push(Child.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.rewriteOperation !== 0) {
      obj.rewriteOperation = rewrite_OperationToJSON(message.rewriteOperation);
    }
    if (message.children?.length) {
      obj.children = message.children.map((e) => Child.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Rewrite>): Rewrite {
    return Rewrite.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Rewrite>): Rewrite {
    const message = createBaseRewrite();
    message.rewriteOperation = object.rewriteOperation ?? 0;
    message.children = object.children?.map((e) => Child.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSchemaDefinition(): SchemaDefinition {
  return { entityDefinitions: {}, ruleDefinitions: {}, references: {} };
}

export const SchemaDefinition = {
  encode(message: SchemaDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.entityDefinitions).forEach(([key, value]) => {
      SchemaDefinition_EntityDefinitionsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    Object.entries(message.ruleDefinitions).forEach(([key, value]) => {
      SchemaDefinition_RuleDefinitionsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.references).forEach(([key, value]) => {
      SchemaDefinition_ReferencesEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SchemaDefinition_EntityDefinitionsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.entityDefinitions[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = SchemaDefinition_RuleDefinitionsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.ruleDefinitions[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = SchemaDefinition_ReferencesEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.references[entry3.key] = entry3.value;
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

  fromJSON(object: any): SchemaDefinition {
    return {
      entityDefinitions: isObject(object.entityDefinitions)
        ? Object.entries(object.entityDefinitions).reduce<{ [key: string]: EntityDefinition }>((acc, [key, value]) => {
          acc[key] = EntityDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      ruleDefinitions: isObject(object.ruleDefinitions)
        ? Object.entries(object.ruleDefinitions).reduce<{ [key: string]: RuleDefinition }>((acc, [key, value]) => {
          acc[key] = RuleDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      references: isObject(object.references)
        ? Object.entries(object.references).reduce<{ [key: string]: SchemaDefinition_Reference }>(
          (acc, [key, value]) => {
            acc[key] = schemaDefinition_ReferenceFromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: SchemaDefinition): unknown {
    const obj: any = {};
    if (message.entityDefinitions) {
      const entries = Object.entries(message.entityDefinitions);
      if (entries.length > 0) {
        obj.entityDefinitions = {};
        entries.forEach(([k, v]) => {
          obj.entityDefinitions[k] = EntityDefinition.toJSON(v);
        });
      }
    }
    if (message.ruleDefinitions) {
      const entries = Object.entries(message.ruleDefinitions);
      if (entries.length > 0) {
        obj.ruleDefinitions = {};
        entries.forEach(([k, v]) => {
          obj.ruleDefinitions[k] = RuleDefinition.toJSON(v);
        });
      }
    }
    if (message.references) {
      const entries = Object.entries(message.references);
      if (entries.length > 0) {
        obj.references = {};
        entries.forEach(([k, v]) => {
          obj.references[k] = schemaDefinition_ReferenceToJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaDefinition>): SchemaDefinition {
    return SchemaDefinition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaDefinition>): SchemaDefinition {
    const message = createBaseSchemaDefinition();
    message.entityDefinitions = Object.entries(object.entityDefinitions ?? {}).reduce<
      { [key: string]: EntityDefinition }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = EntityDefinition.fromPartial(value);
      }
      return acc;
    }, {});
    message.ruleDefinitions = Object.entries(object.ruleDefinitions ?? {}).reduce<{ [key: string]: RuleDefinition }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = RuleDefinition.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.references = Object.entries(object.references ?? {}).reduce<{ [key: string]: SchemaDefinition_Reference }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value as SchemaDefinition_Reference;
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseSchemaDefinition_EntityDefinitionsEntry(): SchemaDefinition_EntityDefinitionsEntry {
  return { key: "", value: undefined };
}

export const SchemaDefinition_EntityDefinitionsEntry = {
  encode(message: SchemaDefinition_EntityDefinitionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      EntityDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaDefinition_EntityDefinitionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaDefinition_EntityDefinitionsEntry();
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

          message.value = EntityDefinition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaDefinition_EntityDefinitionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? EntityDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SchemaDefinition_EntityDefinitionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = EntityDefinition.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaDefinition_EntityDefinitionsEntry>): SchemaDefinition_EntityDefinitionsEntry {
    return SchemaDefinition_EntityDefinitionsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaDefinition_EntityDefinitionsEntry>): SchemaDefinition_EntityDefinitionsEntry {
    const message = createBaseSchemaDefinition_EntityDefinitionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? EntityDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSchemaDefinition_RuleDefinitionsEntry(): SchemaDefinition_RuleDefinitionsEntry {
  return { key: "", value: undefined };
}

export const SchemaDefinition_RuleDefinitionsEntry = {
  encode(message: SchemaDefinition_RuleDefinitionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      RuleDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaDefinition_RuleDefinitionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaDefinition_RuleDefinitionsEntry();
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

          message.value = RuleDefinition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SchemaDefinition_RuleDefinitionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? RuleDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SchemaDefinition_RuleDefinitionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = RuleDefinition.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaDefinition_RuleDefinitionsEntry>): SchemaDefinition_RuleDefinitionsEntry {
    return SchemaDefinition_RuleDefinitionsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaDefinition_RuleDefinitionsEntry>): SchemaDefinition_RuleDefinitionsEntry {
    const message = createBaseSchemaDefinition_RuleDefinitionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? RuleDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseSchemaDefinition_ReferencesEntry(): SchemaDefinition_ReferencesEntry {
  return { key: "", value: 0 };
}

export const SchemaDefinition_ReferencesEntry = {
  encode(message: SchemaDefinition_ReferencesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SchemaDefinition_ReferencesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchemaDefinition_ReferencesEntry();
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

  fromJSON(object: any): SchemaDefinition_ReferencesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? schemaDefinition_ReferenceFromJSON(object.value) : 0,
    };
  },

  toJSON(message: SchemaDefinition_ReferencesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = schemaDefinition_ReferenceToJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<SchemaDefinition_ReferencesEntry>): SchemaDefinition_ReferencesEntry {
    return SchemaDefinition_ReferencesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SchemaDefinition_ReferencesEntry>): SchemaDefinition_ReferencesEntry {
    const message = createBaseSchemaDefinition_ReferencesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEntityDefinition(): EntityDefinition {
  return { name: "", relations: {}, permissions: {}, attributes: {}, references: {} };
}

export const EntityDefinition = {
  encode(message: EntityDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    Object.entries(message.relations).forEach(([key, value]) => {
      EntityDefinition_RelationsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    Object.entries(message.permissions).forEach(([key, value]) => {
      EntityDefinition_PermissionsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    Object.entries(message.attributes).forEach(([key, value]) => {
      EntityDefinition_AttributesEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    Object.entries(message.references).forEach(([key, value]) => {
      EntityDefinition_ReferencesEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = EntityDefinition_RelationsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.relations[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = EntityDefinition_PermissionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.permissions[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = EntityDefinition_AttributesEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.attributes[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = EntityDefinition_ReferencesEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.references[entry5.key] = entry5.value;
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

  fromJSON(object: any): EntityDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      relations: isObject(object.relations)
        ? Object.entries(object.relations).reduce<{ [key: string]: RelationDefinition }>((acc, [key, value]) => {
          acc[key] = RelationDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      permissions: isObject(object.permissions)
        ? Object.entries(object.permissions).reduce<{ [key: string]: PermissionDefinition }>((acc, [key, value]) => {
          acc[key] = PermissionDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      attributes: isObject(object.attributes)
        ? Object.entries(object.attributes).reduce<{ [key: string]: AttributeDefinition }>((acc, [key, value]) => {
          acc[key] = AttributeDefinition.fromJSON(value);
          return acc;
        }, {})
        : {},
      references: isObject(object.references)
        ? Object.entries(object.references).reduce<{ [key: string]: EntityDefinition_Reference }>(
          (acc, [key, value]) => {
            acc[key] = entityDefinition_ReferenceFromJSON(value);
            return acc;
          },
          {},
        )
        : {},
    };
  },

  toJSON(message: EntityDefinition): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.relations) {
      const entries = Object.entries(message.relations);
      if (entries.length > 0) {
        obj.relations = {};
        entries.forEach(([k, v]) => {
          obj.relations[k] = RelationDefinition.toJSON(v);
        });
      }
    }
    if (message.permissions) {
      const entries = Object.entries(message.permissions);
      if (entries.length > 0) {
        obj.permissions = {};
        entries.forEach(([k, v]) => {
          obj.permissions[k] = PermissionDefinition.toJSON(v);
        });
      }
    }
    if (message.attributes) {
      const entries = Object.entries(message.attributes);
      if (entries.length > 0) {
        obj.attributes = {};
        entries.forEach(([k, v]) => {
          obj.attributes[k] = AttributeDefinition.toJSON(v);
        });
      }
    }
    if (message.references) {
      const entries = Object.entries(message.references);
      if (entries.length > 0) {
        obj.references = {};
        entries.forEach(([k, v]) => {
          obj.references[k] = entityDefinition_ReferenceToJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<EntityDefinition>): EntityDefinition {
    return EntityDefinition.fromPartial(base ?? {});
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
    message.permissions = Object.entries(object.permissions ?? {}).reduce<{ [key: string]: PermissionDefinition }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = PermissionDefinition.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.attributes = Object.entries(object.attributes ?? {}).reduce<{ [key: string]: AttributeDefinition }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = AttributeDefinition.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.references = Object.entries(object.references ?? {}).reduce<{ [key: string]: EntityDefinition_Reference }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value as EntityDefinition_Reference;
        }
        return acc;
      },
      {},
    );
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_RelationsEntry();
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

          message.value = RelationDefinition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = RelationDefinition.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<EntityDefinition_RelationsEntry>): EntityDefinition_RelationsEntry {
    return EntityDefinition_RelationsEntry.fromPartial(base ?? {});
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

function createBaseEntityDefinition_PermissionsEntry(): EntityDefinition_PermissionsEntry {
  return { key: "", value: undefined };
}

export const EntityDefinition_PermissionsEntry = {
  encode(message: EntityDefinition_PermissionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      PermissionDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition_PermissionsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_PermissionsEntry();
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

          message.value = PermissionDefinition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityDefinition_PermissionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? PermissionDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EntityDefinition_PermissionsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = PermissionDefinition.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<EntityDefinition_PermissionsEntry>): EntityDefinition_PermissionsEntry {
    return EntityDefinition_PermissionsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EntityDefinition_PermissionsEntry>): EntityDefinition_PermissionsEntry {
    const message = createBaseEntityDefinition_PermissionsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? PermissionDefinition.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseEntityDefinition_AttributesEntry(): EntityDefinition_AttributesEntry {
  return { key: "", value: undefined };
}

export const EntityDefinition_AttributesEntry = {
  encode(message: EntityDefinition_AttributesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AttributeDefinition.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityDefinition_AttributesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_AttributesEntry();
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

          message.value = AttributeDefinition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityDefinition_AttributesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AttributeDefinition.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: EntityDefinition_AttributesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = AttributeDefinition.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<EntityDefinition_AttributesEntry>): EntityDefinition_AttributesEntry {
    return EntityDefinition_AttributesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EntityDefinition_AttributesEntry>): EntityDefinition_AttributesEntry {
    const message = createBaseEntityDefinition_AttributesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? AttributeDefinition.fromPartial(object.value)
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityDefinition_ReferencesEntry();
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

  fromJSON(object: any): EntityDefinition_ReferencesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? entityDefinition_ReferenceFromJSON(object.value) : 0,
    };
  },

  toJSON(message: EntityDefinition_ReferencesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = entityDefinition_ReferenceToJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<EntityDefinition_ReferencesEntry>): EntityDefinition_ReferencesEntry {
    return EntityDefinition_ReferencesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EntityDefinition_ReferencesEntry>): EntityDefinition_ReferencesEntry {
    const message = createBaseEntityDefinition_ReferencesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseRuleDefinition(): RuleDefinition {
  return { name: "", arguments: {}, expression: undefined };
}

export const RuleDefinition = {
  encode(message: RuleDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    Object.entries(message.arguments).forEach(([key, value]) => {
      RuleDefinition_ArgumentsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    if (message.expression !== undefined) {
      CheckedExpr.encode(message.expression, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuleDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuleDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = RuleDefinition_ArgumentsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.arguments[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.expression = CheckedExpr.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RuleDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      arguments: isObject(object.arguments)
        ? Object.entries(object.arguments).reduce<{ [key: string]: AttributeType }>((acc, [key, value]) => {
          acc[key] = attributeTypeFromJSON(value);
          return acc;
        }, {})
        : {},
      expression: isSet(object.expression) ? CheckedExpr.fromJSON(object.expression) : undefined,
    };
  },

  toJSON(message: RuleDefinition): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.arguments) {
      const entries = Object.entries(message.arguments);
      if (entries.length > 0) {
        obj.arguments = {};
        entries.forEach(([k, v]) => {
          obj.arguments[k] = attributeTypeToJSON(v);
        });
      }
    }
    if (message.expression !== undefined) {
      obj.expression = CheckedExpr.toJSON(message.expression);
    }
    return obj;
  },

  create(base?: DeepPartial<RuleDefinition>): RuleDefinition {
    return RuleDefinition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RuleDefinition>): RuleDefinition {
    const message = createBaseRuleDefinition();
    message.name = object.name ?? "";
    message.arguments = Object.entries(object.arguments ?? {}).reduce<{ [key: string]: AttributeType }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = value as AttributeType;
        }
        return acc;
      },
      {},
    );
    message.expression = (object.expression !== undefined && object.expression !== null)
      ? CheckedExpr.fromPartial(object.expression)
      : undefined;
    return message;
  },
};

function createBaseRuleDefinition_ArgumentsEntry(): RuleDefinition_ArgumentsEntry {
  return { key: "", value: 0 };
}

export const RuleDefinition_ArgumentsEntry = {
  encode(message: RuleDefinition_ArgumentsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RuleDefinition_ArgumentsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRuleDefinition_ArgumentsEntry();
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

  fromJSON(object: any): RuleDefinition_ArgumentsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? attributeTypeFromJSON(object.value) : 0,
    };
  },

  toJSON(message: RuleDefinition_ArgumentsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = attributeTypeToJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<RuleDefinition_ArgumentsEntry>): RuleDefinition_ArgumentsEntry {
    return RuleDefinition_ArgumentsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RuleDefinition_ArgumentsEntry>): RuleDefinition_ArgumentsEntry {
    const message = createBaseRuleDefinition_ArgumentsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseAttributeDefinition(): AttributeDefinition {
  return { name: "", type: 0 };
}

export const AttributeDefinition = {
  encode(message: AttributeDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? attributeTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: AttributeDefinition): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = attributeTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<AttributeDefinition>): AttributeDefinition {
    return AttributeDefinition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttributeDefinition>): AttributeDefinition {
    const message = createBaseAttributeDefinition();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseRelationDefinition(): RelationDefinition {
  return { name: "", relationReferences: [] };
}

export const RelationDefinition = {
  encode(message: RelationDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.relationReferences) {
      RelationReference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relationReferences.push(RelationReference.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelationDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      relationReferences: Array.isArray(object?.relationReferences)
        ? object.relationReferences.map((e: any) => RelationReference.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RelationDefinition): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.relationReferences?.length) {
      obj.relationReferences = message.relationReferences.map((e) => RelationReference.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<RelationDefinition>): RelationDefinition {
    return RelationDefinition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RelationDefinition>): RelationDefinition {
    const message = createBaseRelationDefinition();
    message.name = object.name ?? "";
    message.relationReferences = object.relationReferences?.map((e) => RelationReference.fromPartial(e)) || [];
    return message;
  },
};

function createBasePermissionDefinition(): PermissionDefinition {
  return { name: "", child: undefined };
}

export const PermissionDefinition = {
  encode(message: PermissionDefinition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.child !== undefined) {
      Child.encode(message.child, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermissionDefinition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermissionDefinition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.child = Child.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PermissionDefinition {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      child: isSet(object.child) ? Child.fromJSON(object.child) : undefined,
    };
  },

  toJSON(message: PermissionDefinition): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.child !== undefined) {
      obj.child = Child.toJSON(message.child);
    }
    return obj;
  },

  create(base?: DeepPartial<PermissionDefinition>): PermissionDefinition {
    return PermissionDefinition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PermissionDefinition>): PermissionDefinition {
    const message = createBasePermissionDefinition();
    message.name = object.name ?? "";
    message.child = (object.child !== undefined && object.child !== null) ? Child.fromPartial(object.child) : undefined;
    return message;
  },
};

function createBaseRelationReference(): RelationReference {
  return { type: "", relation: "" };
}

export const RelationReference = {
  encode(message: RelationReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.relation !== "") {
      writer.uint32(18).string(message.relation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RelationReference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelationReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RelationReference {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      relation: isSet(object.relation) ? String(object.relation) : "",
    };
  },

  toJSON(message: RelationReference): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    return obj;
  },

  create(base?: DeepPartial<RelationReference>): RelationReference {
    return RelationReference.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RelationReference>): RelationReference {
    const message = createBaseRelationReference();
    message.type = object.type ?? "";
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseArgument(): Argument {
  return { type: undefined };
}

export const Argument = {
  encode(message: Argument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.type?.$case) {
      case "computedAttribute":
        ComputedAttribute.encode(message.type.computedAttribute, writer.uint32(10).fork()).ldelim();
        break;
      case "contextAttribute":
        ContextAttribute.encode(message.type.contextAttribute, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Argument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArgument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = {
            $case: "computedAttribute",
            computedAttribute: ComputedAttribute.decode(reader, reader.uint32()),
          };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = {
            $case: "contextAttribute",
            contextAttribute: ContextAttribute.decode(reader, reader.uint32()),
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

  fromJSON(object: any): Argument {
    return {
      type: isSet(object.computedAttribute)
        ? { $case: "computedAttribute", computedAttribute: ComputedAttribute.fromJSON(object.computedAttribute) }
        : isSet(object.contextAttribute)
        ? { $case: "contextAttribute", contextAttribute: ContextAttribute.fromJSON(object.contextAttribute) }
        : undefined,
    };
  },

  toJSON(message: Argument): unknown {
    const obj: any = {};
    if (message.type?.$case === "computedAttribute") {
      obj.computedAttribute = ComputedAttribute.toJSON(message.type.computedAttribute);
    }
    if (message.type?.$case === "contextAttribute") {
      obj.contextAttribute = ContextAttribute.toJSON(message.type.contextAttribute);
    }
    return obj;
  },

  create(base?: DeepPartial<Argument>): Argument {
    return Argument.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Argument>): Argument {
    const message = createBaseArgument();
    if (
      object.type?.$case === "computedAttribute" &&
      object.type?.computedAttribute !== undefined &&
      object.type?.computedAttribute !== null
    ) {
      message.type = {
        $case: "computedAttribute",
        computedAttribute: ComputedAttribute.fromPartial(object.type.computedAttribute),
      };
    }
    if (
      object.type?.$case === "contextAttribute" &&
      object.type?.contextAttribute !== undefined &&
      object.type?.contextAttribute !== null
    ) {
      message.type = {
        $case: "contextAttribute",
        contextAttribute: ContextAttribute.fromPartial(object.type.contextAttribute),
      };
    }
    return message;
  },
};

function createBaseCall(): Call {
  return { ruleName: "", arguments: [] };
}

export const Call = {
  encode(message: Call, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ruleName !== "") {
      writer.uint32(10).string(message.ruleName);
    }
    for (const v of message.arguments) {
      Argument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Call {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ruleName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Call {
    return {
      ruleName: isSet(object.ruleName) ? String(object.ruleName) : "",
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => Argument.fromJSON(e)) : [],
    };
  },

  toJSON(message: Call): unknown {
    const obj: any = {};
    if (message.ruleName !== "") {
      obj.ruleName = message.ruleName;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Argument.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Call>): Call {
    return Call.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Call>): Call {
    const message = createBaseCall();
    message.ruleName = object.ruleName ?? "";
    message.arguments = object.arguments?.map((e) => Argument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseComputedAttribute(): ComputedAttribute {
  return { name: "" };
}

export const ComputedAttribute = {
  encode(message: ComputedAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComputedAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComputedAttribute();
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

  fromJSON(object: any): ComputedAttribute {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ComputedAttribute): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<ComputedAttribute>): ComputedAttribute {
    return ComputedAttribute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ComputedAttribute>): ComputedAttribute {
    const message = createBaseComputedAttribute();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseContextAttribute(): ContextAttribute {
  return { name: "" };
}

export const ContextAttribute = {
  encode(message: ContextAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContextAttribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextAttribute();
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

  fromJSON(object: any): ContextAttribute {
    return { name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: ContextAttribute): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<ContextAttribute>): ContextAttribute {
    return ContextAttribute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContextAttribute>): ContextAttribute {
    const message = createBaseContextAttribute();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComputedUserSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ComputedUserSet {
    return { relation: isSet(object.relation) ? String(object.relation) : "" };
  },

  toJSON(message: ComputedUserSet): unknown {
    const obj: any = {};
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    return obj;
  },

  create(base?: DeepPartial<ComputedUserSet>): ComputedUserSet {
    return ComputedUserSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ComputedUserSet>): ComputedUserSet {
    const message = createBaseComputedUserSet();
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleToUserSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tupleSet = TupleSet.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.computed = ComputedUserSet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.tupleSet !== undefined) {
      obj.tupleSet = TupleSet.toJSON(message.tupleSet);
    }
    if (message.computed !== undefined) {
      obj.computed = ComputedUserSet.toJSON(message.computed);
    }
    return obj;
  },

  create(base?: DeepPartial<TupleToUserSet>): TupleToUserSet {
    return TupleToUserSet.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.relation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TupleSet {
    return { relation: isSet(object.relation) ? String(object.relation) : "" };
  },

  toJSON(message: TupleSet): unknown {
    const obj: any = {};
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    return obj;
  },

  create(base?: DeepPartial<TupleSet>): TupleSet {
    return TupleSet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TupleSet>): TupleSet {
    const message = createBaseTupleSet();
    message.relation = object.relation ?? "";
    return message;
  },
};

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relation = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = Subject.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    if (message.subject !== undefined) {
      obj.subject = Subject.toJSON(message.subject);
    }
    return obj;
  },

  create(base?: DeepPartial<Tuple>): Tuple {
    return Tuple.fromPartial(base ?? {});
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

function createBaseAttribute(): Attribute {
  return { entity: undefined, attribute: "", value: undefined };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    if (message.attribute !== "") {
      writer.uint32(18).string(message.attribute);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attribute = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      attribute: isSet(object.attribute) ? String(object.attribute) : "",
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.attribute !== "") {
      obj.attribute = message.attribute;
    }
    if (message.value !== undefined) {
      obj.value = Any.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<Attribute>): Attribute {
    return Attribute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.attribute = object.attribute ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Any.fromPartial(object.value) : undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTuples();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): Tuples {
    return { tuples: Array.isArray(object?.tuples) ? object.tuples.map((e: any) => Tuple.fromJSON(e)) : [] };
  },

  toJSON(message: Tuples): unknown {
    const obj: any = {};
    if (message.tuples?.length) {
      obj.tuples = message.tuples.map((e) => Tuple.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Tuples>): Tuples {
    return Tuples.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Tuples>): Tuples {
    const message = createBaseTuples();
    message.tuples = object.tuples?.map((e) => Tuple.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAttributes(): Attributes {
  return { attributes: [] };
}

export const Attributes = {
  encode(message: Attributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attributes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): Attributes {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : [],
    };
  },

  toJSON(message: Attributes): unknown {
    const obj: any = {};
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => Attribute.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Attributes>): Attributes {
    return Attributes.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Attributes>): Attributes {
    const message = createBaseAttributes();
    message.attributes = object.attributes?.map((e) => Attribute.fromPartial(e)) || [];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): Entity {
    return { type: isSet(object.type) ? String(object.type) : "", id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: Entity): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<Entity>): Entity {
    return Entity.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityAndRelation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    return obj;
  },

  create(base?: DeepPartial<EntityAndRelation>): EntityAndRelation {
    return EntityAndRelation.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    return obj;
  },

  create(base?: DeepPartial<Subject>): Subject {
    return Subject.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Subject>): Subject {
    const message = createBaseSubject();
    message.type = object.type ?? "";
    message.id = object.id ?? "";
    message.relation = object.relation ?? "";
    return message;
  },
};

function createBaseAttributeFilter(): AttributeFilter {
  return { entity: undefined, attributes: [] };
}

export const AttributeFilter = {
  encode(message: AttributeFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      EntityFilter.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = EntityFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeFilter {
    return {
      entity: isSet(object.entity) ? EntityFilter.fromJSON(object.entity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AttributeFilter): unknown {
    const obj: any = {};
    if (message.entity !== undefined) {
      obj.entity = EntityFilter.toJSON(message.entity);
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes;
    }
    return obj;
  },

  create(base?: DeepPartial<AttributeFilter>): AttributeFilter {
    return AttributeFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttributeFilter>): AttributeFilter {
    const message = createBaseAttributeFilter();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? EntityFilter.fromPartial(object.entity)
      : undefined;
    message.attributes = object.attributes?.map((e) => e) || [];
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTupleFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = EntityFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.relation = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subject = SubjectFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.entity !== undefined) {
      obj.entity = EntityFilter.toJSON(message.entity);
    }
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    if (message.subject !== undefined) {
      obj.subject = SubjectFilter.toJSON(message.subject);
    }
    return obj;
  },

  create(base?: DeepPartial<TupleFilter>): TupleFilter {
    return TupleFilter.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ids.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.ids?.length) {
      obj.ids = message.ids;
    }
    return obj;
  },

  create(base?: DeepPartial<EntityFilter>): EntityFilter {
    return EntityFilter.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubjectFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ids.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.relation = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.ids?.length) {
      obj.ids = message.ids;
    }
    if (message.relation !== "") {
      obj.relation = message.relation;
    }
    return obj;
  },

  create(base?: DeepPartial<SubjectFilter>): SubjectFilter {
    return SubjectFilter.fromPartial(base ?? {});
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpandTreeNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.children.push(Expand.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    if (message.operation !== 0) {
      obj.operation = expandTreeNode_OperationToJSON(message.operation);
    }
    if (message.children?.length) {
      obj.children = message.children.map((e) => Expand.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ExpandTreeNode>): ExpandTreeNode {
    return ExpandTreeNode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExpandTreeNode>): ExpandTreeNode {
    const message = createBaseExpandTreeNode();
    message.operation = object.operation ?? 0;
    message.children = object.children?.map((e) => Expand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExpand(): Expand {
  return { entity: undefined, permission: "", arguments: [], node: undefined };
}

export const Expand = {
  encode(message: Expand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== undefined) {
      Entity.encode(message.entity, writer.uint32(10).fork()).ldelim();
    }
    if (message.permission !== "") {
      writer.uint32(18).string(message.permission);
    }
    for (const v of message.arguments) {
      Argument.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    switch (message.node?.$case) {
      case "expand":
        ExpandTreeNode.encode(message.node.expand, writer.uint32(34).fork()).ldelim();
        break;
      case "leaf":
        ExpandLeaf.encode(message.node.leaf, writer.uint32(42).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Expand {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = Entity.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.permission = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.arguments.push(Argument.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.node = { $case: "expand", expand: ExpandTreeNode.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.node = { $case: "leaf", leaf: ExpandLeaf.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Expand {
    return {
      entity: isSet(object.entity) ? Entity.fromJSON(object.entity) : undefined,
      permission: isSet(object.permission) ? String(object.permission) : "",
      arguments: Array.isArray(object?.arguments) ? object.arguments.map((e: any) => Argument.fromJSON(e)) : [],
      node: isSet(object.expand)
        ? { $case: "expand", expand: ExpandTreeNode.fromJSON(object.expand) }
        : isSet(object.leaf)
        ? { $case: "leaf", leaf: ExpandLeaf.fromJSON(object.leaf) }
        : undefined,
    };
  },

  toJSON(message: Expand): unknown {
    const obj: any = {};
    if (message.entity !== undefined) {
      obj.entity = Entity.toJSON(message.entity);
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    if (message.arguments?.length) {
      obj.arguments = message.arguments.map((e) => Argument.toJSON(e));
    }
    if (message.node?.$case === "expand") {
      obj.expand = ExpandTreeNode.toJSON(message.node.expand);
    }
    if (message.node?.$case === "leaf") {
      obj.leaf = ExpandLeaf.toJSON(message.node.leaf);
    }
    return obj;
  },

  create(base?: DeepPartial<Expand>): Expand {
    return Expand.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Expand>): Expand {
    const message = createBaseExpand();
    message.entity = (object.entity !== undefined && object.entity !== null)
      ? Entity.fromPartial(object.entity)
      : undefined;
    message.permission = object.permission ?? "";
    message.arguments = object.arguments?.map((e) => Argument.fromPartial(e)) || [];
    if (object.node?.$case === "expand" && object.node?.expand !== undefined && object.node?.expand !== null) {
      message.node = { $case: "expand", expand: ExpandTreeNode.fromPartial(object.node.expand) };
    }
    if (object.node?.$case === "leaf" && object.node?.leaf !== undefined && object.node?.leaf !== null) {
      message.node = { $case: "leaf", leaf: ExpandLeaf.fromPartial(object.node.leaf) };
    }
    return message;
  },
};

function createBaseExpandLeaf(): ExpandLeaf {
  return { type: undefined };
}

export const ExpandLeaf = {
  encode(message: ExpandLeaf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.type?.$case) {
      case "subjects":
        Subjects.encode(message.type.subjects, writer.uint32(10).fork()).ldelim();
        break;
      case "values":
        Values.encode(message.type.values, writer.uint32(18).fork()).ldelim();
        break;
      case "value":
        Any.encode(message.type.value, writer.uint32(26).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExpandLeaf {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpandLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = { $case: "subjects", subjects: Subjects.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = { $case: "values", values: Values.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = { $case: "value", value: Any.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExpandLeaf {
    return {
      type: isSet(object.subjects)
        ? { $case: "subjects", subjects: Subjects.fromJSON(object.subjects) }
        : isSet(object.values)
        ? { $case: "values", values: Values.fromJSON(object.values) }
        : isSet(object.value)
        ? { $case: "value", value: Any.fromJSON(object.value) }
        : undefined,
    };
  },

  toJSON(message: ExpandLeaf): unknown {
    const obj: any = {};
    if (message.type?.$case === "subjects") {
      obj.subjects = Subjects.toJSON(message.type.subjects);
    }
    if (message.type?.$case === "values") {
      obj.values = Values.toJSON(message.type.values);
    }
    if (message.type?.$case === "value") {
      obj.value = Any.toJSON(message.type.value);
    }
    return obj;
  },

  create(base?: DeepPartial<ExpandLeaf>): ExpandLeaf {
    return ExpandLeaf.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ExpandLeaf>): ExpandLeaf {
    const message = createBaseExpandLeaf();
    if (object.type?.$case === "subjects" && object.type?.subjects !== undefined && object.type?.subjects !== null) {
      message.type = { $case: "subjects", subjects: Subjects.fromPartial(object.type.subjects) };
    }
    if (object.type?.$case === "values" && object.type?.values !== undefined && object.type?.values !== null) {
      message.type = { $case: "values", values: Values.fromPartial(object.type.values) };
    }
    if (object.type?.$case === "value" && object.type?.value !== undefined && object.type?.value !== null) {
      message.type = { $case: "value", value: Any.fromPartial(object.type.value) };
    }
    return message;
  },
};

function createBaseValues(): Values {
  return { values: {} };
}

export const Values = {
  encode(message: Values, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.values).forEach(([key, value]) => {
      Values_ValuesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Values {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValues();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Values_ValuesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.values[entry1.key] = entry1.value;
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

  fromJSON(object: any): Values {
    return {
      values: isObject(object.values)
        ? Object.entries(object.values).reduce<{ [key: string]: Any }>((acc, [key, value]) => {
          acc[key] = Any.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Values): unknown {
    const obj: any = {};
    if (message.values) {
      const entries = Object.entries(message.values);
      if (entries.length > 0) {
        obj.values = {};
        entries.forEach(([k, v]) => {
          obj.values[k] = Any.toJSON(v);
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<Values>): Values {
    return Values.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Values>): Values {
    const message = createBaseValues();
    message.values = Object.entries(object.values ?? {}).reduce<{ [key: string]: Any }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Any.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseValues_ValuesEntry(): Values_ValuesEntry {
  return { key: "", value: undefined };
}

export const Values_ValuesEntry = {
  encode(message: Values_ValuesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Values_ValuesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValues_ValuesEntry();
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

          message.value = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Values_ValuesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Values_ValuesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Any.toJSON(message.value);
    }
    return obj;
  },

  create(base?: DeepPartial<Values_ValuesEntry>): Values_ValuesEntry {
    return Values_ValuesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Values_ValuesEntry>): Values_ValuesEntry {
    const message = createBaseValues_ValuesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Any.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseSubjects(): Subjects {
  return { subjects: [] };
}

export const Subjects = {
  encode(message: Subjects, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subjects) {
      Subject.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subjects {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubjects();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subjects.push(Subject.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Subjects {
    return { subjects: Array.isArray(object?.subjects) ? object.subjects.map((e: any) => Subject.fromJSON(e)) : [] };
  },

  toJSON(message: Subjects): unknown {
    const obj: any = {};
    if (message.subjects?.length) {
      obj.subjects = message.subjects.map((e) => Subject.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Subjects>): Subjects {
    return Subjects.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Subjects>): Subjects {
    const message = createBaseSubjects();
    message.subjects = object.subjects?.map((e) => Subject.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTenant(): Tenant {
  return { id: "", name: "", createdAt: undefined };
}

export const Tenant = {
  encode(message: Tenant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tenant {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTenant();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tenant {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      createdAt: isSet(object.created_at) ? fromJsonTimestamp(object.created_at) : undefined,
    };
  },

  toJSON(message: Tenant): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.createdAt !== undefined) {
      obj.created_at = message.createdAt.toISOString();
    }
    return obj;
  },

  create(base?: DeepPartial<Tenant>): Tenant {
    return Tenant.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Tenant>): Tenant {
    const message = createBaseTenant();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

function createBaseDataChanges(): DataChanges {
  return { snapToken: "", dataChanges: [] };
}

export const DataChanges = {
  encode(message: DataChanges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapToken !== "") {
      writer.uint32(10).string(message.snapToken);
    }
    for (const v of message.dataChanges) {
      DataChange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataChanges {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataChanges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.snapToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataChanges.push(DataChange.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataChanges {
    return {
      snapToken: isSet(object.snap_token) ? String(object.snap_token) : "",
      dataChanges: Array.isArray(object?.data_changes)
        ? object.data_changes.map((e: any) => DataChange.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DataChanges): unknown {
    const obj: any = {};
    if (message.snapToken !== "") {
      obj.snap_token = message.snapToken;
    }
    if (message.dataChanges?.length) {
      obj.data_changes = message.dataChanges.map((e) => DataChange.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<DataChanges>): DataChanges {
    return DataChanges.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataChanges>): DataChanges {
    const message = createBaseDataChanges();
    message.snapToken = object.snapToken ?? "";
    message.dataChanges = object.dataChanges?.map((e) => DataChange.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataChange(): DataChange {
  return { operation: 0, type: undefined };
}

export const DataChange = {
  encode(message: DataChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    switch (message.type?.$case) {
      case "tuple":
        Tuple.encode(message.type.tuple, writer.uint32(18).fork()).ldelim();
        break;
      case "attribute":
        Attribute.encode(message.type.attribute, writer.uint32(26).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataChange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = { $case: "tuple", tuple: Tuple.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = { $case: "attribute", attribute: Attribute.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataChange {
    return {
      operation: isSet(object.operation) ? dataChange_OperationFromJSON(object.operation) : 0,
      type: isSet(object.tuple)
        ? { $case: "tuple", tuple: Tuple.fromJSON(object.tuple) }
        : isSet(object.attribute)
        ? { $case: "attribute", attribute: Attribute.fromJSON(object.attribute) }
        : undefined,
    };
  },

  toJSON(message: DataChange): unknown {
    const obj: any = {};
    if (message.operation !== 0) {
      obj.operation = dataChange_OperationToJSON(message.operation);
    }
    if (message.type?.$case === "tuple") {
      obj.tuple = Tuple.toJSON(message.type.tuple);
    }
    if (message.type?.$case === "attribute") {
      obj.attribute = Attribute.toJSON(message.type.attribute);
    }
    return obj;
  },

  create(base?: DeepPartial<DataChange>): DataChange {
    return DataChange.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataChange>): DataChange {
    const message = createBaseDataChange();
    message.operation = object.operation ?? 0;
    if (object.type?.$case === "tuple" && object.type?.tuple !== undefined && object.type?.tuple !== null) {
      message.type = { $case: "tuple", tuple: Tuple.fromPartial(object.type.tuple) };
    }
    if (object.type?.$case === "attribute" && object.type?.attribute !== undefined && object.type?.attribute !== null) {
      message.type = { $case: "attribute", attribute: Attribute.fromPartial(object.type.attribute) };
    }
    return message;
  },
};

function createBaseStringValue(): StringValue {
  return { data: "" };
}

export const StringValue = {
  encode(message: StringValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringValue {
    return { data: isSet(object.data) ? String(object.data) : "" };
  },

  toJSON(message: StringValue): unknown {
    const obj: any = {};
    if (message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<StringValue>): StringValue {
    return StringValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StringValue>): StringValue {
    const message = createBaseStringValue();
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseIntegerValue(): IntegerValue {
  return { data: 0 };
}

export const IntegerValue = {
  encode(message: IntegerValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== 0) {
      writer.uint32(8).int32(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntegerValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntegerValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.data = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntegerValue {
    return { data: isSet(object.data) ? Number(object.data) : 0 };
  },

  toJSON(message: IntegerValue): unknown {
    const obj: any = {};
    if (message.data !== 0) {
      obj.data = Math.round(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<IntegerValue>): IntegerValue {
    return IntegerValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IntegerValue>): IntegerValue {
    const message = createBaseIntegerValue();
    message.data = object.data ?? 0;
    return message;
  },
};

function createBaseDoubleValue(): DoubleValue {
  return { data: 0 };
}

export const DoubleValue = {
  encode(message: DoubleValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== 0) {
      writer.uint32(9).double(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.data = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DoubleValue {
    return { data: isSet(object.data) ? Number(object.data) : 0 };
  },

  toJSON(message: DoubleValue): unknown {
    const obj: any = {};
    if (message.data !== 0) {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<DoubleValue>): DoubleValue {
    return DoubleValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DoubleValue>): DoubleValue {
    const message = createBaseDoubleValue();
    message.data = object.data ?? 0;
    return message;
  },
};

function createBaseBooleanValue(): BooleanValue {
  return { data: false };
}

export const BooleanValue = {
  encode(message: BooleanValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data === true) {
      writer.uint32(8).bool(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BooleanValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBooleanValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.data = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BooleanValue {
    return { data: isSet(object.data) ? Boolean(object.data) : false };
  },

  toJSON(message: BooleanValue): unknown {
    const obj: any = {};
    if (message.data === true) {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<BooleanValue>): BooleanValue {
    return BooleanValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BooleanValue>): BooleanValue {
    const message = createBaseBooleanValue();
    message.data = object.data ?? false;
    return message;
  },
};

function createBaseStringArrayValue(): StringArrayValue {
  return { data: [] };
}

export const StringArrayValue = {
  encode(message: StringArrayValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringArrayValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringArrayValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringArrayValue {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => String(e)) : [] };
  },

  toJSON(message: StringArrayValue): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<StringArrayValue>): StringArrayValue {
    return StringArrayValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StringArrayValue>): StringArrayValue {
    const message = createBaseStringArrayValue();
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseIntegerArrayValue(): IntegerArrayValue {
  return { data: [] };
}

export const IntegerArrayValue = {
  encode(message: IntegerArrayValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.data) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IntegerArrayValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntegerArrayValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.data.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.data.push(reader.int32());
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

  fromJSON(object: any): IntegerArrayValue {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: IntegerArrayValue): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<IntegerArrayValue>): IntegerArrayValue {
    return IntegerArrayValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IntegerArrayValue>): IntegerArrayValue {
    const message = createBaseIntegerArrayValue();
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseDoubleArrayValue(): DoubleArrayValue {
  return { data: [] };
}

export const DoubleArrayValue = {
  encode(message: DoubleArrayValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.data) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleArrayValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleArrayValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 9) {
            message.data.push(reader.double());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.data.push(reader.double());
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

  fromJSON(object: any): DoubleArrayValue {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: DoubleArrayValue): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<DoubleArrayValue>): DoubleArrayValue {
    return DoubleArrayValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DoubleArrayValue>): DoubleArrayValue {
    const message = createBaseDoubleArrayValue();
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseBooleanArrayValue(): BooleanArrayValue {
  return { data: [] };
}

export const BooleanArrayValue = {
  encode(message: BooleanArrayValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.data) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BooleanArrayValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBooleanArrayValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.data.push(reader.bool());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.data.push(reader.bool());
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

  fromJSON(object: any): BooleanArrayValue {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => Boolean(e)) : [] };
  },

  toJSON(message: BooleanArrayValue): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data;
    }
    return obj;
  },

  create(base?: DeepPartial<BooleanArrayValue>): BooleanArrayValue {
    return BooleanArrayValue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BooleanArrayValue>): BooleanArrayValue {
    const message = createBaseBooleanArrayValue();
    message.data = object.data?.map((e) => e) || [];
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
