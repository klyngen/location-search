import { Observable } from "rxjs";
import { LocationResponse } from "../models/location";
export declare const locationSearch: (text: string, pageSize: number, page: number) => Observable<LocationResponse>;
