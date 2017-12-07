module.exports = {
  id: 6428,
  name: 'Steve Rodgers 🦐',
  nick: 'rodgers',
  about:
    'Steve Rogers was a scrawny fine arts student growing up during the Great Depression. His alcoholic father died when Steve was a child, and his mother passed away from pneumonia after he graduated high school.',
  avatar: null,
  bigAvatar: null,
  placeholder: 'red',
  phones: [
    {
      number: '+1 234 567 89 00',
      title: 'Mobile phone'
    }
  ],
  emails: [
    {
      email: 'cap@america.com',
      title: 'Home email'
    }
  ],
  online: {
    message: '3 minutes ago'
  },
  isNotificationsEnabled: false,
  isFavourite: true,
  custom: {
    schema: require('./cutomProfileSchema.json'),
    value: {
      lastName: 'Rodgers 🦐',
      age: 97,
      bio: 'Roundhouse kicking asses since 1940',
      password: 'noneed',
      done: true,
      telephone: '+1 234 567 89 00'
    }
  }
};
