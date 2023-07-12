import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { property, query, queryAsync } from "lit/decorators.js";
import {
  debounceTime,
  filter,
  fromEvent,
  map,
  Subscription,
  switchMap,
  tap,
} from "rxjs";
import style from "./locationSearch.styles.scss";
import "@material/mwc-textfield";
import { TextField } from "@material/mwc-textfield";
import "@material/mwc-menu";
import { AsyncController } from "../utils/async_controller";
import { locationSearch } from "../utils/http_requests";
import { repeat } from "lit/directives/repeat.js";
import "@material/mwc-textfield";
import "@material/mwc-menu";
import { Menu } from "@material/mwc-menu";
import { Location } from "../models/location";

@customElement("location-search")
export class LocationSearch extends LitElement {
  @queryAsync("#textfield")
  textField: Promise<TextField> | undefined;

  @query("#menu")
  menu: Menu | undefined;

  @property()
  set title(title: string) {
    this.textField?.then((field) => (field.value = title));
  }

  static styles = [style];

  locationData: AsyncController<Location[]> | undefined;
  clickSubscription: Subscription | undefined;

  constructor() {
    super();
    this.textField?.then((textField) => {
      if (this.menu) {
        this.menu.anchor = textField;
        this.menu.defaultFocus = "NONE";
      }
      const locations$ = fromEvent(textField, "input").pipe(
        debounceTime(400),
        map(() => textField.value),
        filter((value) => value?.length > 1),
        switchMap((value) => locationSearch(value, 10, 0)),
        map((locationResponse) => locationResponse.navn),
        tap((names) => {
          if (this.menu && names.length > 0) {
            this.menu.open = true;
          }
        })
      );

      this.clickSubscription = fromEvent(window, "click").subscribe(() => {
        if (this.menu?.open) {
          this.menu.open = false;
        }
      });

      this.locationData = new AsyncController(this, locations$);
    });
  }

  disconnectedCallback(): void {
    this.clickSubscription?.unsubscribe();
  }

  render(): TemplateResult {
    return html`
      <div class="search-wrapper">
        <mwc-textfield
          id="textfield"
          label="Lokasjon"
          placeholder="Skriv inn en lokasjon..."
          outlined
        ></mwc-textfield>

        <mwc-menu fixed corner="BOTTOM_LEFT" activatable id="menu">
          ${this.locationData?.value ? this.makeListItems() : ""}
        </mwc-menu>
      </div>
    `;
  }

  private makeListItems() {
    return html`${repeat(
      this.locationData?.value as Location[],
      (loc) => loc.stedsnummer,
      (loc) => this.renderLocation(loc)
    )}`;
  }

  private renderLocation(loc: Location): TemplateResult {
    return html`<mwc-list-item
      @click="${(e: Event) => this.onLocationClick(loc, e)}"
    >
      <p>
        <b>${loc.stedsnavn[0].skrivemåte}</b> <br />
        ${loc.kommuner[0].kommunenavn}, ${loc.fylker[0].fylkesnavn}
      </p>
    </mwc-list-item>`;
  }

  private onLocationClick(loc: Location, event: Event) {
    event.stopPropagation();
    this.dispatchEvent(
      new CustomEvent("location-selected", {
        detail: loc,
      })
    );
  }
}
