/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import forIn from 'lodash/forIn';
import isPlainObject from 'lodash/isPlainObject';

export type JSONSchemaProperty = {
  type: 'string' | 'number' | 'integer' | 'boolean',
  title: string
};

export type JSONSchema = {
  properties: {
    [name: string]: JSONSchemaProperty
  }
};

export type JSONValue = {
  [key: string]: mixed
};

export function parseJSONSchema(text: string): JSONSchema {
  const object = JSON.parse(text);
  if (!isPlainObject(object)) {
    throw new Error('Schema is not a plain object');
  }

  if (!isPlainObject(object.properties)) {
    throw new Error('Schema properties is not a plain object');
  }

  const properties = {};
  forIn(object.properties, (value: mixed, key: string) => {
    if (typeof value !== 'object' || !value) {
      throw new Error(`Schema property "${key}" is not a plain object`);
    }

    const { type, title } = value;
    if (
      type !== 'string' &&
      type !== 'number' &&
      type !== 'integer' &&
      type !== 'boolean'
    ) {
      throw new Error(`Schema property "${key}" has unsupported type`);
    }

    if (typeof title !== 'string') {
      throw new Error(`Schema property "${key}" title is not a string"`);
    }

    properties[key] = { type, title };
  });

  return { properties };
}

export function safelyParseJSONSchema(text: string, onError?: (error: Error) => void): ?JSONSchema {
  try {
    return parseJSONSchema(text);
  } catch (e) {
    if (onError) {
      onError(e);
    }

    return null;
  }
}

export function safelyParseJSON(text: string, onError?: (error: Error) => void): ?JSONSchema {
  try {
    return JSON.parse(text);
  } catch (e) {
    if (onError) {
      onError(e);
    }

    return null;
  }
}
