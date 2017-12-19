/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */

import { insertText, handleBackspace } from '../inputState';

describe('insertText', () => {
  test('insertText without selection', () => {
    expect(insertText({ value: '' }, '1')).toEqual({ value: '1' });
    expect(insertText({ value: '123' }, '0')).toEqual({ value: '1230' });
  });

  test('insertText with focus', () => {
    expect(
      insertText({ value: '123', selection: { start: 0, end: 0 } }, '0')
    ).toEqual({ value: '0123', selection: { start: 1, end: 1 } });

    expect(
      insertText({ value: '123', selection: { start: 1, end: 1 } }, '0')
    ).toEqual({ value: '1023', selection: { start: 2, end: 2 } });

    expect(
      insertText({ value: '123', selection: { start: 3, end: 3 } }, '0')
    ).toEqual({ value: '1230', selection: { start: 4, end: 4 } });
  });

  test('insertText with selection', () => {
    expect(
      insertText({ value: '1221', selection: { start: 1, end: 3 } }, '0')
    ).toEqual({ value: '101', selection: { start: 2, end: 2 } });
  });
});

describe('handleBackspace', () => {
  test('handleBackspace without selection', () => {
    expect(handleBackspace({ value: '' })).toEqual({ value: '' });
    expect(
      handleBackspace({ value: '123' })
    ).toEqual({ value: '12', selection: { start: 2, end: 2 } });
  });

  test('handleBackspace with empty selection', () => {
    expect(
      handleBackspace({ value: '', selection: { start: 0, end: 0 } })
    ).toEqual({ value: '', selection: { start: 0, end: 0 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 0, end: 0 } })
    ).toEqual({ value: '123', selection: { start: 0, end: 0 } });
  });


  test('handleBackspace with focus', () => {
    expect(
      handleBackspace({ value: '123', selection: { start: 1, end: 1 } })
    ).toEqual({ value: '23', selection: { start: 0, end: 0 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 2, end: 2 } })
    ).toEqual({ value: '13', selection: { start: 1, end: 1 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 3, end: 3 } })
    ).toEqual({ value: '12', selection: { start: 2, end: 2 } });
  });

  test('handleBackspace with selection', () => {
    expect(
      handleBackspace({ value: '123', selection: { start: 0, end: 1 } })
    ).toEqual({ value: '23', selection: { start: 0, end: 0 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 0, end: 2 } })
    ).toEqual({ value: '3', selection: { start: 0, end: 0 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 0, end: 3 } })
    ).toEqual({ value: '', selection: { start: 0, end: 0 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 1, end: 2 } })
    ).toEqual({ value: '13', selection: { start: 1, end: 1 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 1, end: 3 } })
    ).toEqual({ value: '1', selection: { start: 1, end: 1 } });

    expect(
      handleBackspace({ value: '123', selection: { start: 2, end: 3 } })
    ).toEqual({ value: '12', selection: { start: 2, end: 2 } });
  });
});
