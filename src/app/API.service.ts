/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateEventInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  keywords?: Array<string | null> | null;
  visibility: Visibility;
  eventCreatorId: string;
};

export enum Visibility {
  public = "public",
  private = "private"
}

export type UpdateEventInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  keywords?: Array<string | null> | null;
  visibility?: Visibility | null;
  eventCreatorId?: string | null;
};

export type DeleteEventInput = {
  id?: string | null;
};

export type CreateStuffInput = {
  id?: string | null;
  name: string;
  quantityRequired?: number | null;
  unit?: string | null;
};

export type UpdateStuffInput = {
  id: string;
  name?: string | null;
  quantityRequired?: number | null;
  unit?: string | null;
};

export type DeleteStuffInput = {
  id?: string | null;
};

export type CreateBringerInput = {
  id?: string | null;
  quantity: number;
};

export type UpdateBringerInput = {
  id: string;
  quantity?: number | null;
};

export type DeleteBringerInput = {
  id?: string | null;
};

export type CreateLocationProposalInput = {
  id?: string | null;
  locationProposalEventId: string;
};

export type UpdateLocationProposalInput = {
  id: string;
  locationProposalEventId?: string | null;
};

export type DeleteLocationProposalInput = {
  id?: string | null;
};

export type CreateTimeProposalInput = {
  id?: string | null;
  proposedTime: string;
  timeProposalEventId: string;
};

export type UpdateTimeProposalInput = {
  id: string;
  proposedTime?: string | null;
  timeProposalEventId?: string | null;
};

export type DeleteTimeProposalInput = {
  id?: string | null;
};

export type CreateVoteInput = {
  id?: string | null;
  value?: string | null;
};

export type UpdateVoteInput = {
  id: string;
  value?: string | null;
};

export type DeleteVoteInput = {
  id?: string | null;
};

export type CreateEventUsersInput = {
  id?: string | null;
  eventUsersEventId: string;
  eventUsersUserId: string;
};

export type UpdateEventUsersInput = {
  id: string;
  eventUsersEventId?: string | null;
  eventUsersUserId?: string | null;
};

export type DeleteEventUsersInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  gender?: string | null;
  phoneNumber?: string | null;
  birthDate?: string | null;
  language: string;
};

export type UpdateUserInput = {
  id: string;
  userIdCognitoPool?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  gender?: string | null;
  phoneNumber?: string | null;
  birthDate?: string | null;
  language?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateLocationInput = {
  id?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  address?: string | null;
  number?: number | null;
  zipcode?: number | null;
  city?: string | null;
  country?: string | null;
};

export type UpdateLocationInput = {
  id: string;
  latitude?: string | null;
  longitude?: string | null;
  address?: string | null;
  number?: number | null;
  zipcode?: number | null;
  city?: string | null;
  country?: string | null;
};

export type DeleteLocationInput = {
  id?: string | null;
};

export type CreateDocumentInput = {
  id?: string | null;
  name?: string | null;
  owner?: string | null;
  visibility?: Visibility | null;
  file?: S3ObjectInput | null;
  createdAt?: string | null;
};

export type S3ObjectInput = {
  bucket: string;
  key: string;
  region: string;
  filename?: string | null;
};

export type UpdateDocumentInput = {
  id: string;
  name?: string | null;
  owner?: string | null;
  visibility?: Visibility | null;
  file?: S3ObjectInput | null;
  createdAt?: string | null;
};

export type DeleteDocumentInput = {
  id?: string | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  startDate?: ModelStringFilterInput | null;
  endDate?: ModelStringFilterInput | null;
  keywords?: ModelStringFilterInput | null;
  visibility?: ModelVisibilityFilterInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelVisibilityFilterInput = {
  eq?: Visibility | null;
  ne?: Visibility | null;
};

export type ModelStuffFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  quantityRequired?: ModelIntFilterInput | null;
  unit?: ModelStringFilterInput | null;
  and?: Array<ModelStuffFilterInput | null> | null;
  or?: Array<ModelStuffFilterInput | null> | null;
  not?: ModelStuffFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBringerFilterInput = {
  id?: ModelIDFilterInput | null;
  quantity?: ModelIntFilterInput | null;
  and?: Array<ModelBringerFilterInput | null> | null;
  or?: Array<ModelBringerFilterInput | null> | null;
  not?: ModelBringerFilterInput | null;
};

export type ModelLocationProposalFilterInput = {
  id?: ModelIDFilterInput | null;
  and?: Array<ModelLocationProposalFilterInput | null> | null;
  or?: Array<ModelLocationProposalFilterInput | null> | null;
  not?: ModelLocationProposalFilterInput | null;
};

export type ModelTimeProposalFilterInput = {
  id?: ModelIDFilterInput | null;
  proposedTime?: ModelStringFilterInput | null;
  and?: Array<ModelTimeProposalFilterInput | null> | null;
  or?: Array<ModelTimeProposalFilterInput | null> | null;
  not?: ModelTimeProposalFilterInput | null;
};

export type ModelVoteFilterInput = {
  id?: ModelIDFilterInput | null;
  value?: ModelStringFilterInput | null;
  and?: Array<ModelVoteFilterInput | null> | null;
  or?: Array<ModelVoteFilterInput | null> | null;
  not?: ModelVoteFilterInput | null;
};

export type ModelEventUsersFilterInput = {
  id?: ModelIDFilterInput | null;
  and?: Array<ModelEventUsersFilterInput | null> | null;
  or?: Array<ModelEventUsersFilterInput | null> | null;
  not?: ModelEventUsersFilterInput | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  userIdCognitoPool?: ModelStringFilterInput | null;
  firstName?: ModelStringFilterInput | null;
  lastName?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  gender?: ModelStringFilterInput | null;
  phoneNumber?: ModelStringFilterInput | null;
  birthDate?: ModelStringFilterInput | null;
  language?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelLocationFilterInput = {
  id?: ModelIDFilterInput | null;
  latitude?: ModelStringFilterInput | null;
  longitude?: ModelStringFilterInput | null;
  address?: ModelStringFilterInput | null;
  number?: ModelIntFilterInput | null;
  zipcode?: ModelIntFilterInput | null;
  city?: ModelStringFilterInput | null;
  country?: ModelStringFilterInput | null;
  and?: Array<ModelLocationFilterInput | null> | null;
  or?: Array<ModelLocationFilterInput | null> | null;
  not?: ModelLocationFilterInput | null;
};

export type ModelDocumentFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  owner?: ModelStringFilterInput | null;
  visibility?: ModelVisibilityFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  and?: Array<ModelDocumentFilterInput | null> | null;
  or?: Array<ModelDocumentFilterInput | null> | null;
  not?: ModelDocumentFilterInput | null;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  title: string;
  description: string | null;
  coverImage: {
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null;
  eventLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  startDate: string | null;
  endDate: string | null;
  timeProposals: {
    __typename: "ModelTimeProposalConnection";
    items: Array<{
      __typename: "TimeProposal";
      id: string;
      proposedTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  locationProposals: {
    __typename: "ModelLocationProposalConnection";
    items: Array<{
      __typename: "LocationProposal";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  guests: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  creator: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  keywords: Array<string | null> | null;
  visibility: Visibility;
  stuffs: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  documents: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  title: string;
  description: string | null;
  coverImage: {
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null;
  eventLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  startDate: string | null;
  endDate: string | null;
  timeProposals: {
    __typename: "ModelTimeProposalConnection";
    items: Array<{
      __typename: "TimeProposal";
      id: string;
      proposedTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  locationProposals: {
    __typename: "ModelLocationProposalConnection";
    items: Array<{
      __typename: "LocationProposal";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  guests: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  creator: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  keywords: Array<string | null> | null;
  visibility: Visibility;
  stuffs: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  documents: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  title: string;
  description: string | null;
  coverImage: {
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null;
  eventLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  startDate: string | null;
  endDate: string | null;
  timeProposals: {
    __typename: "ModelTimeProposalConnection";
    items: Array<{
      __typename: "TimeProposal";
      id: string;
      proposedTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  locationProposals: {
    __typename: "ModelLocationProposalConnection";
    items: Array<{
      __typename: "LocationProposal";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  guests: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  creator: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  keywords: Array<string | null> | null;
  visibility: Visibility;
  stuffs: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  documents: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
};

export type CreateStuffMutation = {
  __typename: "Stuff";
  id: string;
  name: string;
  quantityRequired: number | null;
  unit: string | null;
  bringers: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
};

export type UpdateStuffMutation = {
  __typename: "Stuff";
  id: string;
  name: string;
  quantityRequired: number | null;
  unit: string | null;
  bringers: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
};

export type DeleteStuffMutation = {
  __typename: "Stuff";
  id: string;
  name: string;
  quantityRequired: number | null;
  unit: string | null;
  bringers: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
};

export type CreateBringerMutation = {
  __typename: "Bringer";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  quantity: number;
};

export type UpdateBringerMutation = {
  __typename: "Bringer";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  quantity: number;
};

export type DeleteBringerMutation = {
  __typename: "Bringer";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  quantity: number;
};

export type CreateLocationProposalMutation = {
  __typename: "LocationProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  };
};

export type UpdateLocationProposalMutation = {
  __typename: "LocationProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  };
};

export type DeleteLocationProposalMutation = {
  __typename: "LocationProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  };
};

export type CreateTimeProposalMutation = {
  __typename: "TimeProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedTime: string;
};

export type UpdateTimeProposalMutation = {
  __typename: "TimeProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedTime: string;
};

export type DeleteTimeProposalMutation = {
  __typename: "TimeProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedTime: string;
};

export type CreateVoteMutation = {
  __typename: "Vote";
  id: string;
  value: string | null;
  userId: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateVoteMutation = {
  __typename: "Vote";
  id: string;
  value: string | null;
  userId: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteVoteMutation = {
  __typename: "Vote";
  id: string;
  value: string | null;
  userId: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateEventUsersMutation = {
  __typename: "EventUsers";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
};

export type UpdateEventUsersMutation = {
  __typename: "EventUsers";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
};

export type DeleteEventUsersMutation = {
  __typename: "EventUsers";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  gender: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  language: string;
  favoriteLocations: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  events: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownEvents: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  gender: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  language: string;
  favoriteLocations: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  events: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownEvents: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  gender: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  language: string;
  favoriteLocations: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  events: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownEvents: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateLocationMutation = {
  __typename: "Location";
  id: string;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  number: number | null;
  zipcode: number | null;
  city: string | null;
  country: string | null;
};

export type UpdateLocationMutation = {
  __typename: "Location";
  id: string;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  number: number | null;
  zipcode: number | null;
  city: string | null;
  country: string | null;
};

export type DeleteLocationMutation = {
  __typename: "Location";
  id: string;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  number: number | null;
  zipcode: number | null;
  city: string | null;
  country: string | null;
};

export type CreateDocumentMutation = {
  __typename: "Document";
  id: string;
  name: string | null;
  owner: string | null;
  visibility: Visibility | null;
  file: {
    __typename: "S3Object";
    bucket: string;
    key: string;
    region: string;
    filename: string | null;
  } | null;
  createdAt: string | null;
};

export type UpdateDocumentMutation = {
  __typename: "Document";
  id: string;
  name: string | null;
  owner: string | null;
  visibility: Visibility | null;
  file: {
    __typename: "S3Object";
    bucket: string;
    key: string;
    region: string;
    filename: string | null;
  } | null;
  createdAt: string | null;
};

export type DeleteDocumentMutation = {
  __typename: "Document";
  id: string;
  name: string | null;
  owner: string | null;
  visibility: Visibility | null;
  file: {
    __typename: "S3Object";
    bucket: string;
    key: string;
    region: string;
    filename: string | null;
  } | null;
  createdAt: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  title: string;
  description: string | null;
  coverImage: {
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null;
  eventLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  startDate: string | null;
  endDate: string | null;
  timeProposals: {
    __typename: "ModelTimeProposalConnection";
    items: Array<{
      __typename: "TimeProposal";
      id: string;
      proposedTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  locationProposals: {
    __typename: "ModelLocationProposalConnection";
    items: Array<{
      __typename: "LocationProposal";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  guests: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  creator: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  keywords: Array<string | null> | null;
  visibility: Visibility;
  stuffs: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  documents: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetStuffQuery = {
  __typename: "Stuff";
  id: string;
  name: string;
  quantityRequired: number | null;
  unit: string | null;
  bringers: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
};

export type ListStuffsQuery = {
  __typename: "ModelStuffConnection";
  items: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetBringerQuery = {
  __typename: "Bringer";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  quantity: number;
};

export type ListBringersQuery = {
  __typename: "ModelBringerConnection";
  items: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
  nextToken: string | null;
};

export type GetLocationProposalQuery = {
  __typename: "LocationProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  };
};

export type ListLocationProposalsQuery = {
  __typename: "ModelLocationProposalConnection";
  items: Array<{
    __typename: "LocationProposal";
    id: string;
    event: {
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    };
    proposedLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    };
  } | null> | null;
  nextToken: string | null;
};

export type GetTimeProposalQuery = {
  __typename: "TimeProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedTime: string;
};

export type ListTimeProposalsQuery = {
  __typename: "ModelTimeProposalConnection";
  items: Array<{
    __typename: "TimeProposal";
    id: string;
    event: {
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    };
    proposedTime: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetVoteQuery = {
  __typename: "Vote";
  id: string;
  value: string | null;
  userId: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListVotesQuery = {
  __typename: "ModelVoteConnection";
  items: Array<{
    __typename: "Vote";
    id: string;
    value: string | null;
    userId: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetEventUsersQuery = {
  __typename: "EventUsers";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
};

export type ListEventUserssQuery = {
  __typename: "ModelEventUsersConnection";
  items: Array<{
    __typename: "EventUsers";
    id: string;
    event: {
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    };
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  gender: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  language: string;
  favoriteLocations: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  events: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownEvents: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetLocationQuery = {
  __typename: "Location";
  id: string;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  number: number | null;
  zipcode: number | null;
  city: string | null;
  country: string | null;
};

export type ListLocationsQuery = {
  __typename: "ModelLocationConnection";
  items: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetDocumentQuery = {
  __typename: "Document";
  id: string;
  name: string | null;
  owner: string | null;
  visibility: Visibility | null;
  file: {
    __typename: "S3Object";
    bucket: string;
    key: string;
    region: string;
    filename: string | null;
  } | null;
  createdAt: string | null;
};

export type ListDocumentsQuery = {
  __typename: "ModelDocumentConnection";
  items: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  title: string;
  description: string | null;
  coverImage: {
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null;
  eventLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  startDate: string | null;
  endDate: string | null;
  timeProposals: {
    __typename: "ModelTimeProposalConnection";
    items: Array<{
      __typename: "TimeProposal";
      id: string;
      proposedTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  locationProposals: {
    __typename: "ModelLocationProposalConnection";
    items: Array<{
      __typename: "LocationProposal";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  guests: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  creator: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  keywords: Array<string | null> | null;
  visibility: Visibility;
  stuffs: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  documents: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  title: string;
  description: string | null;
  coverImage: {
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null;
  eventLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  startDate: string | null;
  endDate: string | null;
  timeProposals: {
    __typename: "ModelTimeProposalConnection";
    items: Array<{
      __typename: "TimeProposal";
      id: string;
      proposedTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  locationProposals: {
    __typename: "ModelLocationProposalConnection";
    items: Array<{
      __typename: "LocationProposal";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  guests: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  creator: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  keywords: Array<string | null> | null;
  visibility: Visibility;
  stuffs: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  documents: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  title: string;
  description: string | null;
  coverImage: {
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null;
  eventLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  startDate: string | null;
  endDate: string | null;
  timeProposals: {
    __typename: "ModelTimeProposalConnection";
    items: Array<{
      __typename: "TimeProposal";
      id: string;
      proposedTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  locationProposals: {
    __typename: "ModelLocationProposalConnection";
    items: Array<{
      __typename: "LocationProposal";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  guests: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  creator: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  keywords: Array<string | null> | null;
  visibility: Visibility;
  stuffs: Array<{
    __typename: "Stuff";
    id: string;
    name: string;
    quantityRequired: number | null;
    unit: string | null;
    bringers: Array<{
      __typename: "Bringer";
      id: string;
      quantity: number;
    } | null> | null;
  } | null> | null;
  documents: Array<{
    __typename: "Document";
    id: string;
    name: string | null;
    owner: string | null;
    visibility: Visibility | null;
    file: {
      __typename: "S3Object";
      bucket: string;
      key: string;
      region: string;
      filename: string | null;
    } | null;
    createdAt: string | null;
  } | null> | null;
};

export type OnCreateStuffSubscription = {
  __typename: "Stuff";
  id: string;
  name: string;
  quantityRequired: number | null;
  unit: string | null;
  bringers: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
};

export type OnUpdateStuffSubscription = {
  __typename: "Stuff";
  id: string;
  name: string;
  quantityRequired: number | null;
  unit: string | null;
  bringers: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
};

export type OnDeleteStuffSubscription = {
  __typename: "Stuff";
  id: string;
  name: string;
  quantityRequired: number | null;
  unit: string | null;
  bringers: Array<{
    __typename: "Bringer";
    id: string;
    user: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    quantity: number;
  } | null> | null;
};

export type OnCreateBringerSubscription = {
  __typename: "Bringer";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  quantity: number;
};

export type OnUpdateBringerSubscription = {
  __typename: "Bringer";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  quantity: number;
};

export type OnDeleteBringerSubscription = {
  __typename: "Bringer";
  id: string;
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
  quantity: number;
};

export type OnCreateLocationProposalSubscription = {
  __typename: "LocationProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  };
};

export type OnUpdateLocationProposalSubscription = {
  __typename: "LocationProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  };
};

export type OnDeleteLocationProposalSubscription = {
  __typename: "LocationProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedLocation: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  };
};

export type OnCreateTimeProposalSubscription = {
  __typename: "TimeProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedTime: string;
};

export type OnUpdateTimeProposalSubscription = {
  __typename: "TimeProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedTime: string;
};

export type OnDeleteTimeProposalSubscription = {
  __typename: "TimeProposal";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  proposedTime: string;
};

export type OnCreateVoteSubscription = {
  __typename: "Vote";
  id: string;
  value: string | null;
  userId: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateVoteSubscription = {
  __typename: "Vote";
  id: string;
  value: string | null;
  userId: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteVoteSubscription = {
  __typename: "Vote";
  id: string;
  value: string | null;
  userId: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateEventUsersSubscription = {
  __typename: "EventUsers";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnUpdateEventUsersSubscription = {
  __typename: "EventUsers";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnDeleteEventUsersSubscription = {
  __typename: "EventUsers";
  id: string;
  event: {
    __typename: "Event";
    id: string;
    title: string;
    description: string | null;
    coverImage: {
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null;
    eventLocation: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    startDate: string | null;
    endDate: string | null;
    timeProposals: {
      __typename: "ModelTimeProposalConnection";
      nextToken: string | null;
    } | null;
    locationProposals: {
      __typename: "ModelLocationProposalConnection";
      nextToken: string | null;
    } | null;
    guests: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    creator: {
      __typename: "User";
      id: string;
      userIdCognitoPool: string;
      firstName: string;
      lastName: string;
      email: string;
      gender: string | null;
      phoneNumber: string | null;
      birthDate: string | null;
      language: string;
    };
    keywords: Array<string | null> | null;
    visibility: Visibility;
    stuffs: Array<{
      __typename: "Stuff";
      id: string;
      name: string;
      quantityRequired: number | null;
      unit: string | null;
    } | null> | null;
    documents: Array<{
      __typename: "Document";
      id: string;
      name: string | null;
      owner: string | null;
      visibility: Visibility | null;
      createdAt: string | null;
    } | null> | null;
  };
  user: {
    __typename: "User";
    id: string;
    userIdCognitoPool: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null;
    gender: string | null;
    phoneNumber: string | null;
    birthDate: string | null;
    language: string;
    favoriteLocations: Array<{
      __typename: "Location";
      id: string;
      latitude: string | null;
      longitude: string | null;
      address: string | null;
      number: number | null;
      zipcode: number | null;
      city: string | null;
      country: string | null;
    } | null> | null;
    events: {
      __typename: "ModelEventUsersConnection";
      nextToken: string | null;
    } | null;
    ownEvents: {
      __typename: "ModelEventConnection";
      nextToken: string | null;
    } | null;
  };
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  gender: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  language: string;
  favoriteLocations: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  events: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownEvents: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  gender: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  language: string;
  favoriteLocations: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  events: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownEvents: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  userIdCognitoPool: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null;
  gender: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
  language: string;
  favoriteLocations: Array<{
    __typename: "Location";
    id: string;
    latitude: string | null;
    longitude: string | null;
    address: string | null;
    number: number | null;
    zipcode: number | null;
    city: string | null;
    country: string | null;
  } | null> | null;
  events: {
    __typename: "ModelEventUsersConnection";
    items: Array<{
      __typename: "EventUsers";
      id: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  ownEvents: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      id: string;
      title: string;
      description: string | null;
      startDate: string | null;
      endDate: string | null;
      keywords: Array<string | null> | null;
      visibility: Visibility;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateLocationSubscription = {
  __typename: "Location";
  id: string;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  number: number | null;
  zipcode: number | null;
  city: string | null;
  country: string | null;
};

export type OnUpdateLocationSubscription = {
  __typename: "Location";
  id: string;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  number: number | null;
  zipcode: number | null;
  city: string | null;
  country: string | null;
};

export type OnDeleteLocationSubscription = {
  __typename: "Location";
  id: string;
  latitude: string | null;
  longitude: string | null;
  address: string | null;
  number: number | null;
  zipcode: number | null;
  city: string | null;
  country: string | null;
};

export type OnCreateDocumentSubscription = {
  __typename: "Document";
  id: string;
  name: string | null;
  owner: string | null;
  visibility: Visibility | null;
  file: {
    __typename: "S3Object";
    bucket: string;
    key: string;
    region: string;
    filename: string | null;
  } | null;
  createdAt: string | null;
};

export type OnUpdateDocumentSubscription = {
  __typename: "Document";
  id: string;
  name: string | null;
  owner: string | null;
  visibility: Visibility | null;
  file: {
    __typename: "S3Object";
    bucket: string;
    key: string;
    region: string;
    filename: string | null;
  } | null;
  createdAt: string | null;
};

export type OnDeleteDocumentSubscription = {
  __typename: "Document";
  id: string;
  name: string | null;
  owner: string | null;
  visibility: Visibility | null;
  file: {
    __typename: "S3Object";
    bucket: string;
    key: string;
    region: string;
    filename: string | null;
  } | null;
  createdAt: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEvent(input: CreateEventInput): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!) {
        createEvent(input: $input) {
          __typename
          id
          title
          description
          coverImage {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          eventLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          startDate
          endDate
          timeProposals {
            __typename
            items {
              __typename
              id
              proposedTime
            }
            nextToken
          }
          locationProposals {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          guests {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          creator {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          keywords
          visibility
          stuffs {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          documents {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(input: UpdateEventInput): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!) {
        updateEvent(input: $input) {
          __typename
          id
          title
          description
          coverImage {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          eventLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          startDate
          endDate
          timeProposals {
            __typename
            items {
              __typename
              id
              proposedTime
            }
            nextToken
          }
          locationProposals {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          guests {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          creator {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          keywords
          visibility
          stuffs {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          documents {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(input: DeleteEventInput): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!) {
        deleteEvent(input: $input) {
          __typename
          id
          title
          description
          coverImage {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          eventLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          startDate
          endDate
          timeProposals {
            __typename
            items {
              __typename
              id
              proposedTime
            }
            nextToken
          }
          locationProposals {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          guests {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          creator {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          keywords
          visibility
          stuffs {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          documents {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async CreateStuff(input: CreateStuffInput): Promise<CreateStuffMutation> {
    const statement = `mutation CreateStuff($input: CreateStuffInput!) {
        createStuff(input: $input) {
          __typename
          id
          name
          quantityRequired
          unit
          bringers {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStuffMutation>response.data.createStuff;
  }
  async UpdateStuff(input: UpdateStuffInput): Promise<UpdateStuffMutation> {
    const statement = `mutation UpdateStuff($input: UpdateStuffInput!) {
        updateStuff(input: $input) {
          __typename
          id
          name
          quantityRequired
          unit
          bringers {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStuffMutation>response.data.updateStuff;
  }
  async DeleteStuff(input: DeleteStuffInput): Promise<DeleteStuffMutation> {
    const statement = `mutation DeleteStuff($input: DeleteStuffInput!) {
        deleteStuff(input: $input) {
          __typename
          id
          name
          quantityRequired
          unit
          bringers {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStuffMutation>response.data.deleteStuff;
  }
  async CreateBringer(
    input: CreateBringerInput
  ): Promise<CreateBringerMutation> {
    const statement = `mutation CreateBringer($input: CreateBringerInput!) {
        createBringer(input: $input) {
          __typename
          id
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          quantity
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBringerMutation>response.data.createBringer;
  }
  async UpdateBringer(
    input: UpdateBringerInput
  ): Promise<UpdateBringerMutation> {
    const statement = `mutation UpdateBringer($input: UpdateBringerInput!) {
        updateBringer(input: $input) {
          __typename
          id
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          quantity
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBringerMutation>response.data.updateBringer;
  }
  async DeleteBringer(
    input: DeleteBringerInput
  ): Promise<DeleteBringerMutation> {
    const statement = `mutation DeleteBringer($input: DeleteBringerInput!) {
        deleteBringer(input: $input) {
          __typename
          id
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          quantity
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBringerMutation>response.data.deleteBringer;
  }
  async CreateLocationProposal(
    input: CreateLocationProposalInput
  ): Promise<CreateLocationProposalMutation> {
    const statement = `mutation CreateLocationProposal($input: CreateLocationProposalInput!) {
        createLocationProposal(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationProposalMutation>response.data.createLocationProposal;
  }
  async UpdateLocationProposal(
    input: UpdateLocationProposalInput
  ): Promise<UpdateLocationProposalMutation> {
    const statement = `mutation UpdateLocationProposal($input: UpdateLocationProposalInput!) {
        updateLocationProposal(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationProposalMutation>response.data.updateLocationProposal;
  }
  async DeleteLocationProposal(
    input: DeleteLocationProposalInput
  ): Promise<DeleteLocationProposalMutation> {
    const statement = `mutation DeleteLocationProposal($input: DeleteLocationProposalInput!) {
        deleteLocationProposal(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationProposalMutation>response.data.deleteLocationProposal;
  }
  async CreateTimeProposal(
    input: CreateTimeProposalInput
  ): Promise<CreateTimeProposalMutation> {
    const statement = `mutation CreateTimeProposal($input: CreateTimeProposalInput!) {
        createTimeProposal(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTimeProposalMutation>response.data.createTimeProposal;
  }
  async UpdateTimeProposal(
    input: UpdateTimeProposalInput
  ): Promise<UpdateTimeProposalMutation> {
    const statement = `mutation UpdateTimeProposal($input: UpdateTimeProposalInput!) {
        updateTimeProposal(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTimeProposalMutation>response.data.updateTimeProposal;
  }
  async DeleteTimeProposal(
    input: DeleteTimeProposalInput
  ): Promise<DeleteTimeProposalMutation> {
    const statement = `mutation DeleteTimeProposal($input: DeleteTimeProposalInput!) {
        deleteTimeProposal(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTimeProposalMutation>response.data.deleteTimeProposal;
  }
  async CreateVote(input: CreateVoteInput): Promise<CreateVoteMutation> {
    const statement = `mutation CreateVote($input: CreateVoteInput!) {
        createVote(input: $input) {
          __typename
          id
          value
          userId {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVoteMutation>response.data.createVote;
  }
  async UpdateVote(input: UpdateVoteInput): Promise<UpdateVoteMutation> {
    const statement = `mutation UpdateVote($input: UpdateVoteInput!) {
        updateVote(input: $input) {
          __typename
          id
          value
          userId {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVoteMutation>response.data.updateVote;
  }
  async DeleteVote(input: DeleteVoteInput): Promise<DeleteVoteMutation> {
    const statement = `mutation DeleteVote($input: DeleteVoteInput!) {
        deleteVote(input: $input) {
          __typename
          id
          value
          userId {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVoteMutation>response.data.deleteVote;
  }
  async CreateEventUsers(
    input: CreateEventUsersInput
  ): Promise<CreateEventUsersMutation> {
    const statement = `mutation CreateEventUsers($input: CreateEventUsersInput!) {
        createEventUsers(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventUsersMutation>response.data.createEventUsers;
  }
  async UpdateEventUsers(
    input: UpdateEventUsersInput
  ): Promise<UpdateEventUsersMutation> {
    const statement = `mutation UpdateEventUsers($input: UpdateEventUsersInput!) {
        updateEventUsers(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventUsersMutation>response.data.updateEventUsers;
  }
  async DeleteEventUsers(
    input: DeleteEventUsersInput
  ): Promise<DeleteEventUsersMutation> {
    const statement = `mutation DeleteEventUsers($input: DeleteEventUsersInput!) {
        deleteEventUsers(input: $input) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventUsersMutation>response.data.deleteEventUsers;
  }
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          userIdCognitoPool
          firstName
          lastName
          email
          address {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          gender
          phoneNumber
          birthDate
          language
          favoriteLocations {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          events {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          ownEvents {
            __typename
            items {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          userIdCognitoPool
          firstName
          lastName
          email
          address {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          gender
          phoneNumber
          birthDate
          language
          favoriteLocations {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          events {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          ownEvents {
            __typename
            items {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          userIdCognitoPool
          firstName
          lastName
          email
          address {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          gender
          phoneNumber
          birthDate
          language
          favoriteLocations {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          events {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          ownEvents {
            __typename
            items {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateLocation(
    input: CreateLocationInput
  ): Promise<CreateLocationMutation> {
    const statement = `mutation CreateLocation($input: CreateLocationInput!) {
        createLocation(input: $input) {
          __typename
          id
          latitude
          longitude
          address
          number
          zipcode
          city
          country
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLocationMutation>response.data.createLocation;
  }
  async UpdateLocation(
    input: UpdateLocationInput
  ): Promise<UpdateLocationMutation> {
    const statement = `mutation UpdateLocation($input: UpdateLocationInput!) {
        updateLocation(input: $input) {
          __typename
          id
          latitude
          longitude
          address
          number
          zipcode
          city
          country
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLocationMutation>response.data.updateLocation;
  }
  async DeleteLocation(
    input: DeleteLocationInput
  ): Promise<DeleteLocationMutation> {
    const statement = `mutation DeleteLocation($input: DeleteLocationInput!) {
        deleteLocation(input: $input) {
          __typename
          id
          latitude
          longitude
          address
          number
          zipcode
          city
          country
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLocationMutation>response.data.deleteLocation;
  }
  async CreateDocument(
    input: CreateDocumentInput
  ): Promise<CreateDocumentMutation> {
    const statement = `mutation CreateDocument($input: CreateDocumentInput!) {
        createDocument(input: $input) {
          __typename
          id
          name
          owner
          visibility
          file {
            __typename
            bucket
            key
            region
            filename
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDocumentMutation>response.data.createDocument;
  }
  async UpdateDocument(
    input: UpdateDocumentInput
  ): Promise<UpdateDocumentMutation> {
    const statement = `mutation UpdateDocument($input: UpdateDocumentInput!) {
        updateDocument(input: $input) {
          __typename
          id
          name
          owner
          visibility
          file {
            __typename
            bucket
            key
            region
            filename
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDocumentMutation>response.data.updateDocument;
  }
  async DeleteDocument(
    input: DeleteDocumentInput
  ): Promise<DeleteDocumentMutation> {
    const statement = `mutation DeleteDocument($input: DeleteDocumentInput!) {
        deleteDocument(input: $input) {
          __typename
          id
          name
          owner
          visibility
          file {
            __typename
            bucket
            key
            region
            filename
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDocumentMutation>response.data.deleteDocument;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          title
          description
          coverImage {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          eventLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          startDate
          endDate
          timeProposals {
            __typename
            items {
              __typename
              id
              proposedTime
            }
            nextToken
          }
          locationProposals {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          guests {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          creator {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          keywords
          visibility
          stuffs {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          documents {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetStuff(id: string): Promise<GetStuffQuery> {
    const statement = `query GetStuff($id: ID!) {
        getStuff(id: $id) {
          __typename
          id
          name
          quantityRequired
          unit
          bringers {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStuffQuery>response.data.getStuff;
  }
  async ListStuffs(
    filter?: ModelStuffFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStuffsQuery> {
    const statement = `query ListStuffs($filter: ModelStuffFilterInput, $limit: Int, $nextToken: String) {
        listStuffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStuffsQuery>response.data.listStuffs;
  }
  async GetBringer(id: string): Promise<GetBringerQuery> {
    const statement = `query GetBringer($id: ID!) {
        getBringer(id: $id) {
          __typename
          id
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          quantity
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBringerQuery>response.data.getBringer;
  }
  async ListBringers(
    filter?: ModelBringerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBringersQuery> {
    const statement = `query ListBringers($filter: ModelBringerFilterInput, $limit: Int, $nextToken: String) {
        listBringers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBringersQuery>response.data.listBringers;
  }
  async GetLocationProposal(id: string): Promise<GetLocationProposalQuery> {
    const statement = `query GetLocationProposal($id: ID!) {
        getLocationProposal(id: $id) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationProposalQuery>response.data.getLocationProposal;
  }
  async ListLocationProposals(
    filter?: ModelLocationProposalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationProposalsQuery> {
    const statement = `query ListLocationProposals($filter: ModelLocationProposalFilterInput, $limit: Int, $nextToken: String) {
        listLocationProposals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            event {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            proposedLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationProposalsQuery>response.data.listLocationProposals;
  }
  async GetTimeProposal(id: string): Promise<GetTimeProposalQuery> {
    const statement = `query GetTimeProposal($id: ID!) {
        getTimeProposal(id: $id) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedTime
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTimeProposalQuery>response.data.getTimeProposal;
  }
  async ListTimeProposals(
    filter?: ModelTimeProposalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTimeProposalsQuery> {
    const statement = `query ListTimeProposals($filter: ModelTimeProposalFilterInput, $limit: Int, $nextToken: String) {
        listTimeProposals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            event {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            proposedTime
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTimeProposalsQuery>response.data.listTimeProposals;
  }
  async GetVote(id: string): Promise<GetVoteQuery> {
    const statement = `query GetVote($id: ID!) {
        getVote(id: $id) {
          __typename
          id
          value
          userId {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVoteQuery>response.data.getVote;
  }
  async ListVotes(
    filter?: ModelVoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVotesQuery> {
    const statement = `query ListVotes($filter: ModelVoteFilterInput, $limit: Int, $nextToken: String) {
        listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            value
            userId {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotesQuery>response.data.listVotes;
  }
  async GetEventUsers(id: string): Promise<GetEventUsersQuery> {
    const statement = `query GetEventUsers($id: ID!) {
        getEventUsers(id: $id) {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventUsersQuery>response.data.getEventUsers;
  }
  async ListEventUserss(
    filter?: ModelEventUsersFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventUserssQuery> {
    const statement = `query ListEventUserss($filter: ModelEventUsersFilterInput, $limit: Int, $nextToken: String) {
        listEventUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            event {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventUserssQuery>response.data.listEventUserss;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          userIdCognitoPool
          firstName
          lastName
          email
          address {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          gender
          phoneNumber
          birthDate
          language
          favoriteLocations {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          events {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          ownEvents {
            __typename
            items {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetLocation(id: string): Promise<GetLocationQuery> {
    const statement = `query GetLocation($id: ID!) {
        getLocation(id: $id) {
          __typename
          id
          latitude
          longitude
          address
          number
          zipcode
          city
          country
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLocationQuery>response.data.getLocation;
  }
  async ListLocations(
    filter?: ModelLocationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLocationsQuery> {
    const statement = `query ListLocations($filter: ModelLocationFilterInput, $limit: Int, $nextToken: String) {
        listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLocationsQuery>response.data.listLocations;
  }
  async GetDocument(id: string): Promise<GetDocumentQuery> {
    const statement = `query GetDocument($id: ID!) {
        getDocument(id: $id) {
          __typename
          id
          name
          owner
          visibility
          file {
            __typename
            bucket
            key
            region
            filename
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDocumentQuery>response.data.getDocument;
  }
  async ListDocuments(
    filter?: ModelDocumentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDocumentsQuery> {
    const statement = `query ListDocuments($filter: ModelDocumentFilterInput, $limit: Int, $nextToken: String) {
        listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDocumentsQuery>response.data.listDocuments;
  }
  OnCreateEventListener: Observable<OnCreateEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          id
          title
          description
          coverImage {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          eventLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          startDate
          endDate
          timeProposals {
            __typename
            items {
              __typename
              id
              proposedTime
            }
            nextToken
          }
          locationProposals {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          guests {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          creator {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          keywords
          visibility
          stuffs {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          documents {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
        }
      }`
    )
  ) as Observable<OnCreateEventSubscription>;

  OnUpdateEventListener: Observable<OnUpdateEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          id
          title
          description
          coverImage {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          eventLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          startDate
          endDate
          timeProposals {
            __typename
            items {
              __typename
              id
              proposedTime
            }
            nextToken
          }
          locationProposals {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          guests {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          creator {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          keywords
          visibility
          stuffs {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          documents {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
        }
      }`
    )
  ) as Observable<OnUpdateEventSubscription>;

  OnDeleteEventListener: Observable<OnDeleteEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          id
          title
          description
          coverImage {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
          eventLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          startDate
          endDate
          timeProposals {
            __typename
            items {
              __typename
              id
              proposedTime
            }
            nextToken
          }
          locationProposals {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          guests {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          creator {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          keywords
          visibility
          stuffs {
            __typename
            id
            name
            quantityRequired
            unit
            bringers {
              __typename
              id
              quantity
            }
          }
          documents {
            __typename
            id
            name
            owner
            visibility
            file {
              __typename
              bucket
              key
              region
              filename
            }
            createdAt
          }
        }
      }`
    )
  ) as Observable<OnDeleteEventSubscription>;

  OnCreateStuffListener: Observable<OnCreateStuffSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStuff {
        onCreateStuff {
          __typename
          id
          name
          quantityRequired
          unit
          bringers {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
        }
      }`
    )
  ) as Observable<OnCreateStuffSubscription>;

  OnUpdateStuffListener: Observable<OnUpdateStuffSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStuff {
        onUpdateStuff {
          __typename
          id
          name
          quantityRequired
          unit
          bringers {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
        }
      }`
    )
  ) as Observable<OnUpdateStuffSubscription>;

  OnDeleteStuffListener: Observable<OnDeleteStuffSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStuff {
        onDeleteStuff {
          __typename
          id
          name
          quantityRequired
          unit
          bringers {
            __typename
            id
            user {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            quantity
          }
        }
      }`
    )
  ) as Observable<OnDeleteStuffSubscription>;

  OnCreateBringerListener: Observable<
    OnCreateBringerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBringer {
        onCreateBringer {
          __typename
          id
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          quantity
        }
      }`
    )
  ) as Observable<OnCreateBringerSubscription>;

  OnUpdateBringerListener: Observable<
    OnUpdateBringerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBringer {
        onUpdateBringer {
          __typename
          id
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          quantity
        }
      }`
    )
  ) as Observable<OnUpdateBringerSubscription>;

  OnDeleteBringerListener: Observable<
    OnDeleteBringerSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBringer {
        onDeleteBringer {
          __typename
          id
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
          quantity
        }
      }`
    )
  ) as Observable<OnDeleteBringerSubscription>;

  OnCreateLocationProposalListener: Observable<
    OnCreateLocationProposalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocationProposal {
        onCreateLocationProposal {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
        }
      }`
    )
  ) as Observable<OnCreateLocationProposalSubscription>;

  OnUpdateLocationProposalListener: Observable<
    OnUpdateLocationProposalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocationProposal {
        onUpdateLocationProposal {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
        }
      }`
    )
  ) as Observable<OnUpdateLocationProposalSubscription>;

  OnDeleteLocationProposalListener: Observable<
    OnDeleteLocationProposalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocationProposal {
        onDeleteLocationProposal {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedLocation {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
        }
      }`
    )
  ) as Observable<OnDeleteLocationProposalSubscription>;

  OnCreateTimeProposalListener: Observable<
    OnCreateTimeProposalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTimeProposal {
        onCreateTimeProposal {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedTime
        }
      }`
    )
  ) as Observable<OnCreateTimeProposalSubscription>;

  OnUpdateTimeProposalListener: Observable<
    OnUpdateTimeProposalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTimeProposal {
        onUpdateTimeProposal {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedTime
        }
      }`
    )
  ) as Observable<OnUpdateTimeProposalSubscription>;

  OnDeleteTimeProposalListener: Observable<
    OnDeleteTimeProposalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTimeProposal {
        onDeleteTimeProposal {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          proposedTime
        }
      }`
    )
  ) as Observable<OnDeleteTimeProposalSubscription>;

  OnCreateVoteListener: Observable<OnCreateVoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateVote {
        onCreateVote {
          __typename
          id
          value
          userId {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateVoteSubscription>;

  OnUpdateVoteListener: Observable<OnUpdateVoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVote {
        onUpdateVote {
          __typename
          id
          value
          userId {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateVoteSubscription>;

  OnDeleteVoteListener: Observable<OnDeleteVoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVote {
        onDeleteVote {
          __typename
          id
          value
          userId {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteVoteSubscription>;

  OnCreateEventUsersListener: Observable<
    OnCreateEventUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEventUsers {
        onCreateEventUsers {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateEventUsersSubscription>;

  OnUpdateEventUsersListener: Observable<
    OnUpdateEventUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEventUsers {
        onUpdateEventUsers {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateEventUsersSubscription>;

  OnDeleteEventUsersListener: Observable<
    OnDeleteEventUsersSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEventUsers {
        onDeleteEventUsers {
          __typename
          id
          event {
            __typename
            id
            title
            description
            coverImage {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
            eventLocation {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            startDate
            endDate
            timeProposals {
              __typename
              nextToken
            }
            locationProposals {
              __typename
              nextToken
            }
            guests {
              __typename
              nextToken
            }
            creator {
              __typename
              id
              userIdCognitoPool
              firstName
              lastName
              email
              gender
              phoneNumber
              birthDate
              language
            }
            keywords
            visibility
            stuffs {
              __typename
              id
              name
              quantityRequired
              unit
            }
            documents {
              __typename
              id
              name
              owner
              visibility
              createdAt
            }
          }
          user {
            __typename
            id
            userIdCognitoPool
            firstName
            lastName
            email
            address {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            gender
            phoneNumber
            birthDate
            language
            favoriteLocations {
              __typename
              id
              latitude
              longitude
              address
              number
              zipcode
              city
              country
            }
            events {
              __typename
              nextToken
            }
            ownEvents {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteEventUsersSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          userIdCognitoPool
          firstName
          lastName
          email
          address {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          gender
          phoneNumber
          birthDate
          language
          favoriteLocations {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          events {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          ownEvents {
            __typename
            items {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          userIdCognitoPool
          firstName
          lastName
          email
          address {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          gender
          phoneNumber
          birthDate
          language
          favoriteLocations {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          events {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          ownEvents {
            __typename
            items {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          userIdCognitoPool
          firstName
          lastName
          email
          address {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          gender
          phoneNumber
          birthDate
          language
          favoriteLocations {
            __typename
            id
            latitude
            longitude
            address
            number
            zipcode
            city
            country
          }
          events {
            __typename
            items {
              __typename
              id
            }
            nextToken
          }
          ownEvents {
            __typename
            items {
              __typename
              id
              title
              description
              startDate
              endDate
              keywords
              visibility
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateLocationListener: Observable<
    OnCreateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLocation {
        onCreateLocation {
          __typename
          id
          latitude
          longitude
          address
          number
          zipcode
          city
          country
        }
      }`
    )
  ) as Observable<OnCreateLocationSubscription>;

  OnUpdateLocationListener: Observable<
    OnUpdateLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLocation {
        onUpdateLocation {
          __typename
          id
          latitude
          longitude
          address
          number
          zipcode
          city
          country
        }
      }`
    )
  ) as Observable<OnUpdateLocationSubscription>;

  OnDeleteLocationListener: Observable<
    OnDeleteLocationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLocation {
        onDeleteLocation {
          __typename
          id
          latitude
          longitude
          address
          number
          zipcode
          city
          country
        }
      }`
    )
  ) as Observable<OnDeleteLocationSubscription>;

  OnCreateDocumentListener: Observable<
    OnCreateDocumentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDocument {
        onCreateDocument {
          __typename
          id
          name
          owner
          visibility
          file {
            __typename
            bucket
            key
            region
            filename
          }
          createdAt
        }
      }`
    )
  ) as Observable<OnCreateDocumentSubscription>;

  OnUpdateDocumentListener: Observable<
    OnUpdateDocumentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDocument {
        onUpdateDocument {
          __typename
          id
          name
          owner
          visibility
          file {
            __typename
            bucket
            key
            region
            filename
          }
          createdAt
        }
      }`
    )
  ) as Observable<OnUpdateDocumentSubscription>;

  OnDeleteDocumentListener: Observable<
    OnDeleteDocumentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDocument {
        onDeleteDocument {
          __typename
          id
          name
          owner
          visibility
          file {
            __typename
            bucket
            key
            region
            filename
          }
          createdAt
        }
      }`
    )
  ) as Observable<OnDeleteDocumentSubscription>;
}
