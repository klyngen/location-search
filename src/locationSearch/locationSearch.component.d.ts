import { LitElement, TemplateResult } from "lit";
import { Subscription } from "rxjs";
import "@material/mwc-textfield";
import { TextField } from "@material/mwc-textfield";
import "@material/mwc-menu";
import { AsyncController } from "../utils/async_controller";
import "@material/mwc-textfield";
import "@material/mwc-menu";
import { Menu } from "@material/mwc-menu";
import { Location } from "../models/location";
export declare class LocationSearch extends LitElement {
    textField: Promise<TextField> | undefined;
    menu: Menu | undefined;
    set title(title: string);
    static styles: import("lit").CSSResult[];
    locationData: AsyncController<Location[]> | undefined;
    clickSubscription: Subscription | undefined;
    constructor();
    disconnectedCallback(): void;
    render(): TemplateResult;
    private makeListItems;
    private renderLocation;
    private onLocationClick;
}
