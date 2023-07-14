export interface Representasjonspunkt {
    øst: number;
    nord: number;
    koordsys: number;
}
export interface Fylker {
    fylkesnavn: string;
    fylkesnummer: string;
}
export interface Kommuner {
    kommunenummer: string;
    kommunenavn: string;
}
export interface Location {
    stedsnavn: Stedsnavn[];
    navneobjekttype: string;
    stedsnummer: number;
    stedstatus: string;
    representasjonspunkt: Representasjonspunkt;
    fylker: Fylker[];
    kommuner: Kommuner[];
    oppdateringsdato: Date;
}
export interface Stedsnavn {
    skrivemåte: string;
    skrivemåtestatus: string;
    navnestatus: string;
    språk: string;
    stedsnavnnummer: number;
}
export interface Representasjonspunkt {
    øst: number;
    nord: number;
    koordsys: number;
}
export interface Fylker {
    fylkesnummer: string;
    fylkesnavn: string;
}
export interface Kommuner {
    kommunenavn: string;
    kommunenummer: string;
}
export interface LocationResponse {
    navn: Location[];
}
