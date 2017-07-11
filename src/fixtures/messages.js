/*
 * Copyright 2017 dialog LLC <info@dlg.im>
 */
/* eslint-disable */

const senders = [
  {
    avatar: 'https://avatars1.githubusercontent.com/u/3505878',
    placeholder: 'red',
    title: 'Nikita 🤷',
    userName: 'gusnkt',
    peer: {
      id: 1643224499,
      type: 'user'
    }
  },
  {
    avatar: 'https://avatars1.githubusercontent.com/u/930121',
    placeholder: 'purple',
    title: 'Oleg Shilov',
    userName: 'olegshilov',
    peer: {
      id: 1709029441,
      type: 'user'
    }
  }
];

module.exports = [
  {
    sender: senders[0],
    rid: Math.random(),
    date: '20:30',
    fullDate: new Date(),
    state: 'read',
    content: {
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum viverra, eleifend ante nec, porta enim.'
    }
  },
  {
    sender: senders[0],
    rid: Math.random(),
    date: '20:20',
    fullDate: new Date(),
    state: 'error',
    content: {
      type: 'text',
      text: 'Quisque sollicitudin purus eget dui imperdiet, sed imperdiet dui mollis.'
    }
  },
  {
    sender: senders[1],
    rid: Math.random(),
    date: '20:31',
    fullDate: new Date(),
    state: 'pending',
    content: {
      type: 'text',
      text: 'Donec iaculis augue eu blandit scelerisque.'
    }
  },
  {
    sender: senders[1],
    rid: Math.random(),
    date: '4:20',
    fullDate: new Date(),
    state: 'sent',
    content: {
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
  {
    sender: senders[0],
    rid: Math.random(),
    date: '12:32',
    fullDate: new Date(),
    state: 'received',
    content: {
      type: 'text',
      text: 'Suspendisse sodales purus tellus, non sollicitudin dolor consectetur vel. Sed non facilisis ex. Pellentesque eu urna ac quam eleifend tristique ut at est. Aliquam condimentum nec quam congue imperdiet.'
    }
  }
];
