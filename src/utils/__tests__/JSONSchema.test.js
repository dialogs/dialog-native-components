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
          type: 'email'
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
  })
});
