import type { Peer } from '@dlghq/dialog-types';

export type Field<T> = {
  value: T,
  pending: boolean,
  error: ?(string | Error)
};

export type Discover = {
  data: Field<DiscoverCard[]>,
  onGoToCard: (card: DiscoverCard) => mixed
};

export type DiscoverCard = {
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
  locale: string,
  onNavRequest: (location: Location) => mixed
};

export type ScheduleDay = {
  title: string,
  events: ScheduleEvent[]
};

export type ScheduleDayProps = ScheduleDay & {
  locale: string,
  onNavRequest: (location: Location) => mixed
};

export type ScheduleProps = {
  data: Field<ScheduleDay[]>,
  locale: string,
  onNavRequest: (location: Location) => mixed
};

// TODO: describe all types
export type ContactsProps = {};

export type ContactsItem = {};

export type Selection = {
  start: number,
  end: number
};
