/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** KURS 2-TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsTwoWeeks) */
export type EditionsTwoWeeks = Entry & {
  __typename?: 'EditionsTwoWeeks';
  contentfulMetadata: ContentfulMetadata;
  edycjaDo?: Maybe<Scalars['DateTime']['output']>;
  edycjaOd?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<EditionsTwoWeeksLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  wolneMiejsca?: Maybe<Scalars['String']['output']>;
};


/** KURS 2-TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsTwoWeeks) */
export type EditionsTwoWeeksEdycjaDoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS 2-TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsTwoWeeks) */
export type EditionsTwoWeeksEdycjaOdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS 2-TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsTwoWeeks) */
export type EditionsTwoWeeksLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** KURS 2-TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsTwoWeeks) */
export type EditionsTwoWeeksTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS 2-TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsTwoWeeks) */
export type EditionsTwoWeeksWolneMiejscaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditionsTwoWeeksCollection = {
  __typename?: 'EditionsTwoWeeksCollection';
  items: Array<Maybe<EditionsTwoWeeks>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditionsTwoWeeksFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditionsTwoWeeksFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditionsTwoWeeksFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  edycjaDo?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  edycjaDo_gt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_gte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  edycjaDo_lt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_lte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_not?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  edycjaOd?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  edycjaOd_gt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_gte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  edycjaOd_lt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_lte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_not?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolneMiejsca?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_contains?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wolneMiejsca_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolneMiejsca_not?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_not_contains?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditionsTwoWeeksLinkingCollections = {
  __typename?: 'EditionsTwoWeeksLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EditionsTwoWeeksLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditionsTwoWeeksOrder {
  EdycjaDoAsc = 'edycjaDo_ASC',
  EdycjaDoDesc = 'edycjaDo_DESC',
  EdycjaOdAsc = 'edycjaOd_ASC',
  EdycjaOdDesc = 'edycjaOd_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WolneMiejscaAsc = 'wolneMiejsca_ASC',
  WolneMiejscaDesc = 'wolneMiejsca_DESC'
}

/** KURS TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeek) */
export type EditionsWeek = Entry & {
  __typename?: 'EditionsWeek';
  contentfulMetadata: ContentfulMetadata;
  edycjaDo?: Maybe<Scalars['DateTime']['output']>;
  edycjaOd?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<EditionsWeekLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  wolneMiejsca?: Maybe<Scalars['String']['output']>;
};


/** KURS TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeek) */
export type EditionsWeekEdycjaDoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeek) */
export type EditionsWeekEdycjaOdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeek) */
export type EditionsWeekLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** KURS TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeek) */
export type EditionsWeekTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS TYGODNIOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeek) */
export type EditionsWeekWolneMiejscaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditionsWeekCollection = {
  __typename?: 'EditionsWeekCollection';
  items: Array<Maybe<EditionsWeek>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditionsWeekFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditionsWeekFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditionsWeekFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  edycjaDo?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  edycjaDo_gt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_gte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  edycjaDo_lt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_lte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_not?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaDo_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  edycjaOd?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  edycjaOd_gt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_gte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  edycjaOd_lt?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_lte?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_not?: InputMaybe<Scalars['DateTime']['input']>;
  edycjaOd_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolneMiejsca?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_contains?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wolneMiejsca_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolneMiejsca_not?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_not_contains?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditionsWeekLinkingCollections = {
  __typename?: 'EditionsWeekLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EditionsWeekLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditionsWeekOrder {
  EdycjaDoAsc = 'edycjaDo_ASC',
  EdycjaDoDesc = 'edycjaDo_DESC',
  EdycjaOdAsc = 'edycjaOd_ASC',
  EdycjaOdDesc = 'edycjaOd_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WolneMiejscaAsc = 'wolneMiejsca_ASC',
  WolneMiejscaDesc = 'wolneMiejsca_DESC'
}

/** KURS WEEKENDOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeekend) */
export type EditionsWeekend = Entry & {
  __typename?: 'EditionsWeekend';
  contentfulMetadata: ContentfulMetadata;
  datyKursow?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EditionsWeekendLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  wolneMiejsca?: Maybe<Scalars['String']['output']>;
};


/** KURS WEEKENDOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeekend) */
export type EditionsWeekendDatyKursowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS WEEKENDOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeekend) */
export type EditionsWeekendLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** KURS WEEKENDOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeekend) */
export type EditionsWeekendTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** KURS WEEKENDOWY [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/editionsWeekend) */
export type EditionsWeekendWolneMiejscaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditionsWeekendCollection = {
  __typename?: 'EditionsWeekendCollection';
  items: Array<Maybe<EditionsWeekend>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditionsWeekendFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditionsWeekendFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditionsWeekendFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datyKursow?: InputMaybe<Scalars['String']['input']>;
  datyKursow_contains?: InputMaybe<Scalars['String']['input']>;
  datyKursow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datyKursow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  datyKursow_not?: InputMaybe<Scalars['String']['input']>;
  datyKursow_not_contains?: InputMaybe<Scalars['String']['input']>;
  datyKursow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolneMiejsca?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_contains?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_exists?: InputMaybe<Scalars['Boolean']['input']>;
  wolneMiejsca_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wolneMiejsca_not?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_not_contains?: InputMaybe<Scalars['String']['input']>;
  wolneMiejsca_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditionsWeekendLinkingCollections = {
  __typename?: 'EditionsWeekendLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EditionsWeekendLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditionsWeekendOrder {
  DatyKursowAsc = 'datyKursow_ASC',
  DatyKursowDesc = 'datyKursow_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WolneMiejscaAsc = 'wolneMiejsca_ASC',
  WolneMiejscaDesc = 'wolneMiejsca_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Cena [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/price) */
export type Price = Entry & {
  __typename?: 'Price';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PriceLinkingCollections>;
  price?: Maybe<Scalars['Float']['output']>;
  sys: Sys;
};


/** Cena [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/price) */
export type PriceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Cena [See type definition](https://app.contentful.com/spaces/yzzhlc8m0xfb/content_types/price) */
export type PricePriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PriceCollection = {
  __typename?: 'PriceCollection';
  items: Array<Maybe<Price>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PriceFilter = {
  AND?: InputMaybe<Array<InputMaybe<PriceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PriceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PriceLinkingCollections = {
  __typename?: 'PriceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PriceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PriceOrder {
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  editionsTwoWeeks?: Maybe<EditionsTwoWeeks>;
  editionsTwoWeeksCollection?: Maybe<EditionsTwoWeeksCollection>;
  editionsWeek?: Maybe<EditionsWeek>;
  editionsWeekCollection?: Maybe<EditionsWeekCollection>;
  editionsWeekend?: Maybe<EditionsWeekend>;
  editionsWeekendCollection?: Maybe<EditionsWeekendCollection>;
  entryCollection?: Maybe<EntryCollection>;
  price?: Maybe<Price>;
  priceCollection?: Maybe<PriceCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEditionsTwoWeeksArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditionsTwoWeeksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditionsTwoWeeksOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditionsTwoWeeksFilter>;
};


export type QueryEditionsWeekArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditionsWeekCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditionsWeekOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditionsWeekFilter>;
};


export type QueryEditionsWeekendArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditionsWeekendCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditionsWeekendOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditionsWeekendFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPriceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPriceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PriceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PriceFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type KursDwutygodniowyQueryVariables = Exact<{ [key: string]: never; }>;


export type KursDwutygodniowyQuery = { __typename?: 'Query', editionsTwoWeeksCollection?: { __typename?: 'EditionsTwoWeeksCollection', items: Array<{ __typename?: 'EditionsTwoWeeks', title?: string | null, edycjaOd?: any | null, edycjaDo?: any | null, wolneMiejsca?: string | null } | null> } | null };

export type KursTygodniowyQueryVariables = Exact<{ [key: string]: never; }>;


export type KursTygodniowyQuery = { __typename?: 'Query', editionsWeekCollection?: { __typename?: 'EditionsWeekCollection', items: Array<{ __typename?: 'EditionsWeek', title?: string | null, edycjaOd?: any | null, edycjaDo?: any | null, wolneMiejsca?: string | null } | null> } | null };

export type KursWeekendowyQueryVariables = Exact<{ [key: string]: never; }>;


export type KursWeekendowyQuery = { __typename?: 'Query', editionsWeekendCollection?: { __typename?: 'EditionsWeekendCollection', items: Array<{ __typename?: 'EditionsWeekend', title?: string | null, wolneMiejsca?: string | null, datyKursow?: string | null } | null> } | null };

export type CenaQueryVariables = Exact<{ [key: string]: never; }>;


export type CenaQuery = { __typename?: 'Query', priceCollection?: { __typename?: 'PriceCollection', items: Array<{ __typename?: 'Price', price?: number | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };


export const KursDwutygodniowyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KursDwutygodniowy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editionsTwoWeeksCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"edycjaOd"}},{"kind":"Field","name":{"kind":"Name","value":"edycjaDo"}},{"kind":"Field","name":{"kind":"Name","value":"wolneMiejsca"}}]}}]}}]}}]} as unknown as DocumentNode<KursDwutygodniowyQuery, KursDwutygodniowyQueryVariables>;
export const KursTygodniowyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KursTygodniowy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editionsWeekCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"edycjaOd"}},{"kind":"Field","name":{"kind":"Name","value":"edycjaDo"}},{"kind":"Field","name":{"kind":"Name","value":"wolneMiejsca"}}]}}]}}]}}]} as unknown as DocumentNode<KursTygodniowyQuery, KursTygodniowyQueryVariables>;
export const KursWeekendowyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KursWeekendowy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editionsWeekendCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"wolneMiejsca"}},{"kind":"Field","name":{"kind":"Name","value":"datyKursow"}}]}}]}}]}}]} as unknown as DocumentNode<KursWeekendowyQuery, KursWeekendowyQueryVariables>;
export const CenaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Cena"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priceCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CenaQuery, CenaQueryVariables>;