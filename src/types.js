/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

import type { Peer, User, UserOnline } from '@dlghq/dialog-types';

export type Field<T> = {
  value: T,
  pending: boolean,
  error: ?(string | Error)
};

export type Location = {
  latitude: number,
  longitude: number
};

export type Discover = {
  data: Field<DiscoverCard[]>,
  onGoToCard: (card: DiscoverCard) => mixed
};

export type DiscoverCard = {
  type: 'channel' | 'group' | 'user' | 'bot',
  avatar: ?string,
  title: string,
  shortname?: string,
  description?: string,
  members?: number,
  creator?: string,
  peer: Peer
};

export type ScheduleEvent = {
  title: string,
  time: string,
  description: ?string,
  address: ?string,
  location: ?Location,
  onNavRequest: (location: Location) => mixed
};

export type ScheduleDay = {
  title: string,
  date: string,
  events: ScheduleEvent[]
};

export type ScheduleDayProps = ScheduleDay & {
  onNavRequest: (location: Location) => mixed
};

export type ScheduleProps = {
  data: Field<ScheduleDay[]>,
  hidePastSchedule: boolean,
  onNavRequest: (location: Location) => mixed
};

// Sights
export type SightsItem = {
  id: number,
  title: string,
  address: string,
  image: string,
  description: string,
  location?: ?Location
};

export type SightsProps = {
  data: Field<SightsItem[]>,
  onNavRequest: (location: Location) => mixed
};

export type SightsItemProps = {
  sight: SightsItem,
  isOpen: boolean,
  onCardPress: (id: number) => mixed,
  onNavRequest: (location: Location) => mixed
};

export type ContactsProps = {
  data: Field<ContactsItem[]>,
  onChatRequest: (phone: string) => mixed
};

export type ContactsItem = {
  id: number,
  title: string,
  position: string,
  region: string,
  photo: string,
  phone?: ?string
};

export type ContactsItemProps = {
  contact: ContactsItem,
  isOpen: boolean,
  onCardPress: (id: number) => mixed,
  onChatRequest: (phone: string) => mixed
};

export type Theme =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export type Color = {
  [key: string]: string
};

export type Padding = {
  [key: string]: number
};

export type Gradient = [string, string];

// TODO: describe all types
export type DialpadContact = {
  id: string,
  uid: number,
  title: string,
  avatar: ?string,
  phone: string,
  selection?: [number, number]
};

export type DialpadContactProps = {
  contact: DialpadContact,
  onPress: (contact: DialpadContact) => mixed
};

export type InputState = {
  value: string,
  selection?: ?Selection
};

export type DialpadProps = {
  inputState: InputState,
  contacts: Field<DialpadContact[]>,
  onChange: (inputState: InputState) => mixed,
  onCallRequest: (phone: string) => mixed
};

export type Selection = {
  start: number,
  end: number
};

// CustomForms
export type CustomFormProperty = {
  type: 'integer' | 'string' | 'boolean',
  title: string
};

export type CustomFormValue = boolean | string | number;

export type CustomFormValues = {
  [key: string]: CustomFormValue
};

export type CustomForm = {
  schema: {
    properties: {
      [key: string]: CustomFormProperty
    }
  },
  value: CustomFormValues
};

export type CustomFormProps = CustomForm & {
  onChange: (value: CustomFormValues) => mixed
};

export type ThemeOverride = {
  color: Color,
  padding: Padding,
  gradient: Gradient
};

export type StyleOverride = {
  [key: string]: Object
};

export type Profile = {
  profile: User & {
    online: UserOnline
  },
  custom: CustomForm,
  isNotificationsEnabled: boolean,
  isFavourite: boolean
};

export type ProfileActions = {
  isNotificationsEnabled: boolean,
  isFavourite: boolean,
  onNotificationsChange: (isNotificationsEnabled: boolean) => mixed,
  onFavouriteToggle: () => mixed,
  onUserBlock: () => mixed
};

export type ProfileProps = {
  data: Field<Profile>,
  onNotificationsChange: (isNotificationsEnabled: boolean) => mixed,
  onFavouriteToggle: () => mixed,
  onUserBlock: () => mixed,
  onMessagePress: () => mixed,
  onCallPress: () => mixed
};

export type UserProfileProps = {
  data: Field<Profile>,
  onAvatarChange: () => mixed,
  onCustomInfoChange: (value: CustomFormValues) => mixed
};

export type UserProfileActions = {};
