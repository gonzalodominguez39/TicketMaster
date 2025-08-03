export interface Welcome {
    _embedded: WelcomeEmbedded;
    page:      Page;
}

export interface WelcomeEmbedded {
    events: Event[];
}

export interface Event {
    name:            string;
    type:            EventType;
    id:              string;
    test:            boolean;
    url:             string;
    locale:          Locale;
    images:          Image[];
    sales:           Sales;
    dates:           Dates;
    classifications: Classification[];
    promoter:        Promoter;
    promoters:       Promoter[];
    info?:           string;
    pleaseNote:      string;
    priceRanges:     PriceRange[];
    seatmap?:        Seatmap;
    accessibility:   Accessibility;
    ticketLimit:     TicketLimit;
    ageRestrictions: AgeRestrictions;
    ticketing:       Ticketing;
    _links:          EventLinks;
    _embedded:       EventEmbedded;
}

export interface EventEmbedded {
    venues:       Venue[];
    attractions?: Attraction[];
}

export interface Attraction {
    name:            string;
    type:            AttractionType;
    id:              string;
    test:            boolean;
    url:             string;
    locale:          Locale;
    externalLinks?:  ExternalLinks;
    aliases?:        string[];
    images:          Image[];
    classifications: Classification[];
    upcomingEvents:  AttractionUpcomingEvents;
    _links:          AttractionLinks;
}

export interface AttractionLinks {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Classification {
    primary:  boolean;
    segment:  Genre;
    genre:    Genre;
    subGenre: Genre;
    type:     Genre;
    subType:  Genre;
    family:   boolean;
}

export interface Genre {
    id:   string;
    name: string;
}

export interface ExternalLinks {
    youtube?:     Facebook[];
    twitter?:     Facebook[];
    lastfm?:      Facebook[];
    facebook?:    Facebook[];
    wiki?:        Facebook[];
    instagram?:   Facebook[];
    musicbrainz?: Musicbrainz[];
    homepage?:    Facebook[];
    itunes?:      Facebook[];
    spotify?:     Facebook[];
}

export interface Facebook {
    url: string;
}

export interface Musicbrainz {
    id: string;
}

export interface Image {
    ratio?:   Ratio;
    url:      string;
    width:    number;
    height:   number;
    fallback: boolean;
}

export enum Ratio {
    The16_9 = "16_9",
    The1_1 = "1_1",
    The3_2 = "3_2",
    The4_3 = "4_3",
}

export type Locale = string;

export enum AttractionType {
    Attraction = "attraction",
}

export interface AttractionUpcomingEvents {
    moshtix?:     number;
    ticketmaster: number;
    "mfx-de"?:    number;
    _total:       number;
    _filtered:    number;
}

export interface Venue {
    name:                     string;
    type:                     VenueType;
    id:                       string;
    test:                     boolean;
    url:                      string;
    locale:                   Locale;
    postalCode:               string;
    timezone:                 Timezone;
    city:                     City;
    state:                    State;
    country:                  Country;
    address:                  Address;
    location:                 Location;
    markets:                  Genre[];
    dmas:                     DMA[];
    upcomingEvents:           VenueUpcomingEvents;
    ada?:                     Ada;
    _links:                   AttractionLinks;
    images?:                  Image[];
    boxOfficeInfo?:           BoxOfficeInfo;
    parkingDetail?:           string;
    accessibleSeatingDetail?: string;
    generalInfo?:             GeneralInfo;
}

export interface Ada {
    adaPhones:     string;
    adaCustomCopy: string;
    adaHours:      string;
}

export interface Address {
    line1:  string;
    line2?: string;
}

export interface BoxOfficeInfo {
    phoneNumberDetail?:     string;
    openHoursDetail?:       string;
    acceptedPaymentDetail?: string;
    willCallDetail:         string;
}

export interface City {
    name: string;
}

export interface Country {
    name:        CountryName;
    countryCode: CountryCode;
}

export type CountryCode = string;

export type CountryName = string;

export interface DMA {
    id: number;
}

export interface GeneralInfo {
    generalRule?: string;
    childRule?:   string;
}

export interface Location {
    longitude: string;
    latitude:  string;
}

export interface State {
    name:      StateName;
    stateCode: StateCode;
}

export type StateName = string;

export type StateCode = string;

export type Timezone = string;

export enum VenueType {
    Venue = "venue",
}

export interface VenueUpcomingEvents {
    ticketmaster: number;
    _total:       number;
    _filtered:    number;
}

export interface EventLinks {
    self:         Self;
    attractions?: Self[];
    venues:       Self[];
}

export interface Accessibility {
    info?:        string;
    ticketLimit?: number;
}

export interface AgeRestrictions {
    legalAgeEnforced: boolean;
}

export interface Dates {
    start:             Start;
    timezone:          Timezone;
    status:            Status;
    spanMultipleDays:  boolean;
    initialStartDate?: InitialStartDate;
}

export interface InitialStartDate {
    localDate: string;
    localTime: string;
    dateTime:  string;
}

export interface Start {
    localDate:      string;
    localTime:      string;
    dateTime:       string;
    dateTBD:        boolean;
    dateTBA:        boolean;
    timeTBA:        boolean;
    noSpecificTime: boolean;
}

export interface Status {
    code: Code;
}

export type Code = string;

export interface PriceRange {
    type:     PriceRangeType;
    currency: Currency;
    min:      number;
    max:      number;
}

export enum Currency {
    Mxn = "MXN",
    Usd = "USD",
}

export enum PriceRangeType {
    Standard = "standard",
}

export interface Promoter {
    id:          string;
    name:        PromoterName;
    description: Description;
}

export type Description = string;

export type PromoterName = string;

export interface Sales {
    public:    Public;
    presales?: Presale[];
}

export interface Presale {
    startDateTime: string;
    endDateTime:   string;
    name:          string;
}

export interface Public {
    startDateTime: string;
    startTBD:      boolean;
    startTBA:      boolean;
    endDateTime:   string;
}

export interface Seatmap {
    staticUrl: string;
}

export interface TicketLimit {
    info: string;
}

export interface Ticketing {
    safeTix:              AllInclusivePricing;
    allInclusivePricing?: AllInclusivePricing;
}

export interface AllInclusivePricing {
    enabled: boolean;
}
export type EventType = "event" | "concert" | "festival" | string;

export interface Page {
    size:          number;
    totalElements: number;
    totalPages:    number;
    number:        number;
}
