/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

type Contact = {
  phone: string
};

type Selection = {
  selection: [number, number]
};

function filterContacts<T: Contact>(query: string, contacts: Array<T>): Array<T & Selection> {
  const regexp = new RegExp(
    query
      .replace(/[^\d]/g, '')
      .replace(/(\d)/g, '$1[-+ ()]*')
  );

  return contacts.reduce((filtered, contact) => {
    const match = regexp.exec(contact.phone);

    if (match) {
      filtered.push({
        ...contact,
        selection: [match.index, match.index + match[0].length]
      });
    }

    return filtered;
  }, []);
}

export default filterContacts;
