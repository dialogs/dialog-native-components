/*
 * @flow
 */

import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import withContext from '../hoc/context';
import DiscoverPreview from './DiscoverPreview';
import SchedulePreview from './SchedulePreview';
import SightsPreview from './SightsPreview';
import ContactsPreview from './ContactsPreview';
import ProfilePreview from './ProfilePreview';
import UserProfilePreview from './UserProfilePreview';
import DialpadPreview from './DialpadPreview';

const theme = {
  color: {
    primary: '#4E0D9A',
    danger: '#e22d44'
  },
  padding: {},
  gradient: ['#79149A', '#400B9A']
};
const style = {};
const locale = 'ru';
const messages = {
  ru: {
    'Button.get_direction': 'Проложить маршрут',
    'Button.open_chat': 'Открыть чат',
    'Error.nothing_found': 'Ничего не найдено',
    'Yes': 'Да',
    'No': 'Нет',
    'Profile.about': 'О себе',
    'Profile.about_add_button': 'Добавить описание',
    'Profile.nick': 'Никнейм',
    'Profile.nick_add_button': 'Выберите никнейм',
    'Profile.nick_hint':
      'Вы можете выбрать никнейм, чтобы другие люди могли найти вас, не зная номер вашего телефона.',
    'Profile.phone': 'Телефон',
    'Profile.email': 'E-mail'
  },
  en: {
    'Button.get_direction': 'Get directions',
    'Button.open_chat': 'Open chat',
    'Error.nothing_found': 'Nothing found',
    'Yes': 'Yes',
    'No': 'No',
    'Profile.about': 'About',
    'Profile.about_add_button': 'Describe yourself',
    'Profile.nick': 'Nickname',
    'Profile.nick_add_button': 'Choose a nickname',
    'Profile.nick_hint':
      'You can choose a nickname, so other people will be able to find you by this nickname and contact you without knowing your phone number.',
    'Profile.phone': 'Phone',
    'Profile.email': 'E-mail'
  }
};
const globalValues = {};

const tabs = {
  // Dialpad: {
  //   screen: withContext(
  //     DialpadPreview,
  //     theme,
  //     style,
  //     locale,
  //     messages,
  //     globalValues
  //   )
  // },
  User: {
    screen: withContext(
      UserProfilePreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Profile: {
    screen: withContext(
      ProfilePreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Discover: {
    screen: withContext(
      DiscoverPreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Schedule: {
    screen: withContext(
      SchedulePreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Sights: {
    screen: withContext(
      SightsPreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  },
  Contacts: {
    screen: withContext(
      ContactsPreview,
      theme,
      style,
      locale,
      messages,
      globalValues
    )
  }
};
const tabOptions = {
  lazy: true,
  animationEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
    style: {
      backgroundColor: theme.color.primary
    },
    indicatorStyle: {
      backgroundColor: '#fff'
    }
  }
};

AppRegistry.registerComponent('DialogComponents', () =>
  TabNavigator(tabs, tabOptions)
);

AppRegistry.registerComponent('DialogComponents', () =>
  withContext(UserProfilePreview, theme, style, locale, messages, globalValues)
);
