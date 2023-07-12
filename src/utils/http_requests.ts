import { Observable, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import { LocationResponse } from "../models/location";

export const locationSearch = (
  text: string,
  pageSize: number,
  page: number
): Observable<LocationResponse> => {
  return ajax<LocationResponse>({
    url: `https://ws.geonorge.no/stedsnavn/v1/sted?sok=${text}&fuzzy=true&utkoordsys=4258&treffPerSide=${pageSize}&side=${
      page + 1
    }`,
    crossDomain: true,
    method: "GET",
  }).pipe(map((item) => item.response));
};
