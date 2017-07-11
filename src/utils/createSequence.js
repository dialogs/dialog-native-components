/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

function createSequence() {
  let start = 0;

  return {
    next(): string {
      return String(start++);
    }
  };
}

export default createSequence;
