/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

import { parseJSONSchema } from '../JSONSchema';

describe('parseJSONSchema', () => {
  const errors = [
    null,
    {},
    {
      properties: { foo: null }
    },
    {
      properties: {
        foo: {
          type: 'email',
          title: ''
        }
      }
    },
    {
      properties: {
        foo: {
          type: 'string',
          title: 1
        }
      }
    }
  ];

  errors.forEach((it) => {
    const input = JSON.stringify(it);
    test(`should be invalid "${input}"`, () => {
      expect(() => parseJSONSchema(input)).toThrowErrorMatchingSnapshot();
    });
  });

  const ok = [
    {
      properties: {
        foo: { type: 'string', title: 'foo' }
      }
    },
    {
      properties: {
        foo: { type: 'number', title: 'foo' }
      }
    },
    {
      properties: {
        foo: { type: 'integer', title: 'foo' }
      }
    },
    {
      properties: {
        foo: { type: 'boolean', title: 'foo' }
      }
    }
  ];

  ok.forEach((it) => {
    const input = JSON.stringify(it);
    test(`should be valid "${input}"`, () => {
      expect(parseJSONSchema(input)).toEqual(it);
    });
  });
});
