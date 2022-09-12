/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BarcodeFieldModel } from './BarcodeFieldModel';

export type BarcodeFormatModel = {
    readonly formatName?: string | null;
    readonly regexMatch?: string | null;
    readonly regexSplit?: string | null;
    readonly fieldCount?: number;
    readonly regexPosition?: number | null;
    readonly regexReplace?: string | null;
    readonly barcodeFields?: Array<BarcodeFieldModel> | null;
};
