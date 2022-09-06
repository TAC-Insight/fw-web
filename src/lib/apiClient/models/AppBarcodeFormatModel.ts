/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AppBarcodeFieldModel } from './AppBarcodeFieldModel';

export type AppBarcodeFormatModel = {
    readonly formatName?: string | null;
    readonly regexMatch?: string | null;
    readonly regexSplit?: string | null;
    readonly fieldCount?: number;
    readonly regexPosition?: number | null;
    readonly regexReplace?: string | null;
    readonly barcodeFields?: Array<AppBarcodeFieldModel> | null;
};
