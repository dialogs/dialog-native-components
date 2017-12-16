/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

export type Selection = {
  start: number,
  end: number
};

export type InputState = {
  value: string,
  selection?: ?Selection
};

export function replaceText(value: string): InputState {
  return {
    value,
    selection: { start: value.length, end: value.length }
  };
}

export function insertText(state: InputState, text: string): InputState {
  const { value, selection } = state;
  if (selection) {
    const { start, end } = selection;

    const nextValue = value.slice(0, start) + text + value.slice(end);
    const nextSelectionStart = start + text.length;

    return {
      value: nextValue,
      selection: {
        start: nextSelectionStart,
        end: nextSelectionStart
      }
    };
  }

  return {
    value: value + text
  }
}

export function handleBackspace(state: InputState): InputState {
  const { value, selection } = state;
  if (selection) {
    const { start, end } = selection;

    if (start === end) {
      if (start === 0) {
        return state;
      }

      const nextSelectionStart = Math.max(0, start - 1);
      return {
        value: value.slice(0, start - 1) + value.slice(start),
        selection: {
          start: nextSelectionStart,
          end: nextSelectionStart
        }
      };
    }

    const nextSelectionStart = Math.max(0, start);
    return {
      value: value.slice(0, start) + value.slice(end),
      selection: {
        start: nextSelectionStart,
        end: nextSelectionStart
      }
    };
  }

  return {
    value: value.slice(0, -1)
  };
}
