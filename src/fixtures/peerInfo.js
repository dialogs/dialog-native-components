/* eslint-disable */
const group = {
  avatar: 'https://avatars2.githubusercontent.com/u/19669610',
  title: 'Dialog',
  placeholder: 'blue',
  type: 'group',
  about: 'Dialog is a handy and feature rich enterprise multi-device messenger available for server or cloud – Slack-like, but not Slack-limited.',
  peer: {
    id: 10101,
    type: 'group'
  }
};

const channel = {
  avatar: 'https://kirsan-bucket-v2.s3.amazonaws.com/file_-786945829827428356/large-avatar.jpg?AWSAccessKeyId=AKIAJO2IR4MGVQPE6NBQ&Expires=1499352244&Signature=rODpazSBmNweJZsb%2FUrI5jke1JY%3D',
  title: 'Kirsan newsKirsan newsKirsan news',
  placeholder: 'yellow',
  type: 'channel',
  about: 'Posts from the RSS feed on the official site of FIDE President Kirsan Ilyumzhinov www.kirsan.today.',
  userName: 'kirsan_news_eng',
  peer: {
    id: 111,
    type: 'group'
  }
};

const user = {
  avatar: 'https://avatars1.githubusercontent.com/u/930121',
  title: 'Oleg Shilov',
  placeholder: 'lblue',
  type: 'user',
  userName: 'olegshilov',
  about: 'front-end @ dialog',
  peer: {
    id: 1709029441,
    type: 'user'
  }
};

const bot = {
  avatar: null,
  title: 'Security Bot',
  placeholder: 'red',
  type: 'bot',
  userName: 'security_bot',
  about: 'The security bot sees a world where you\'re not afraid of opening the wrong link. This security integration works silently in the background alerting users when a malicious or unwanted link has been detected in a public channel.',
  peer: {
    id: 12239,
    type: 'user'
  }
};

module.exports = {
  user,
  group,
  channel,
  bot
};
