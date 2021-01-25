export const ANIMALS: string[];

export type AnimalsParams = {
  type?: string;
  breed?: string;
  size?: string;
  gender?: string;
  age?: string;
  color?: string;
  coat?: string;
  status?: string;
  name?: string;
  organization?: string;
  location?: string;
  distance?: string;
  sort?: string;
  page?: number;
  limit?: number;
};

export type OrganizationParams = {
  name?: string;
  location?: string;
  distance?: string;
  state?: string;
  country?: string;
  query?: string;
  sort?: string;
  limit?: number;
  page?: number;
};

export interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
}

export interface Animal {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: Breeds;
  colors: Colors;
  age: string;
  gender: string;
  size: string;
  coat: string;
  attributes: Attributes;
  environment: Environment;
  tags: string[];
  name: string;
  description: string;
  photos: Photo[];
  status: string;
  published_at: string;
  contact: Contact;
  _links: Links;
}
export interface Breeds {
  primary: string;
  secondary: string | null;
  mixed: boolean;
  unknown: boolean;
}
export interface Colors {
  primary: string;
  secondary: string | null;
  tertiary: string | null;
}
export interface Attributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean | null;
  special_needs: boolean;
  shots_current: boolean;
}
export interface Environment {
  children: boolean;
  dogs: boolean;
  cats: boolean;
}
export interface Contact {
  email: string;
  phone: string | null;
  address: Address;
}
export interface Address {
  address1: string | null;
  address2: string | null;
  city: string;
  state: string;
  postcode: string;
  country: string;
}
export interface Links {
  self: Link;
  type: Link;
  organization: Link;
}
export interface Link {
  href: string;
}

export interface TypesResponse {
  types: AnimalType[] | null;
}
export interface AnimalType {
  name: string;
  coats: string[];
  colors: string[];
  genders: string[];
  _links: Links;
}
export interface BreedLinks {
  self: SimpleLink;
  breeds: SimpleLink;
}
export interface SimpleLink {
  href: string;
}

export interface BreedsResponse {
  breeds: BreedsEntity[];
}
export interface BreedsEntity {
  name: string;
  _links: BreedsLinks;
}
export interface BreedsLinks {
  type: SimpleLink;
}

export interface OrganizationsResponse {
  organizations: Organization[];
  pagination: Pagination;
}

export interface Organization {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  address: Address;
  hours: Hours;
  url: string;
  website: string | null;
  mission_statement: string | null;
  adoption: Adoption;
  social_media: SocialMedia;
  photos: Photo[];
  _links: OrganizationsLinks;
}

export interface Hours {
  monday: string | null;
  tuesday: string | null;
  wednesday: string | null;
  thursday: string | null;
  friday: string | null;
  saturday: string | null;
  sunday: string | null;
}
export interface Adoption {
  policy: string | null;
  url: string | null;
}

export interface SocialMedia {
  facebook: string | null;
  twitter: string | null;
  youtube: string | null;
  instagram: string | null;
  pinterest: string | null;
}

export interface OrganizationsLinks {
  self: SimpleLink;
  animals: SimpleLink;
}

export interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: PaginationLinks;
}
export interface PaginationLinks {
  next: SimpleLink;
}

export interface AnimalsResponse {
  animals: Animal[];
  pagination: Pagination;
}

export interface AnimalResponse {
  animal: Animal;
}

export interface TypeResponse {
  type: AnimalType;
}

export interface OrganizationResponse {
  organization: Organization;
}

declare module PfClient {
  export function animals(params?: AnimalsParams): Promise<AnimalsResponse>;
  export function animal(id: number): Promise<AnimalResponse>;
  export function types(): Promise<TypesResponse>;
  export function type(type: string): Promise<TypeResponse>;
  export function breeds(type: string): Promise<BreedsResponse>;
  export function organizations(
    params?: OrganizationParams
  ): Promise<OrganizationsResponse>;
  export function organization(id: string): Promise<OrganizationResponse>;
  export function requestLink(
    link: string
  ): Promise<
    | AnimalsResponse
    | AnimalResponse
    | TypesResponse
    | TypeResponse
    | BreedsResponse
    | OrganizationsResponse
    | OrganizationResponse
  >;
}

export default PfClient;
