import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerShortUrls = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShortUrls, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly originalUrl: string;
  readonly shortUrl: string;
  readonly clicks: number;
  readonly lastClickDate?: string | null;
  readonly createdOnDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyShortUrls = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ShortUrls, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly originalUrl: string;
  readonly shortUrl: string;
  readonly clicks: number;
  readonly lastClickDate?: string | null;
  readonly createdOnDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ShortUrls = LazyLoading extends LazyLoadingDisabled ? EagerShortUrls : LazyShortUrls

export declare const ShortUrls: (new (init: ModelInit<ShortUrls>) => ShortUrls) & {
  copyOf(source: ShortUrls, mutator: (draft: MutableModel<ShortUrls>) => MutableModel<ShortUrls> | void): ShortUrls;
}