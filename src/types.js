import type { Peer } from '@dlghq/dialog-types';

export type DiscoverCard = {
  avatar: ?string,
  title: string,
  shortname?: string,
  description?: string,
  members?: number,
  creator?: string,
  peer: Peer,
}
