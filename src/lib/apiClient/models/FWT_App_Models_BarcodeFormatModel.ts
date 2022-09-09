/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_App_Models_BarcodeFieldModel } from './FWT_App_Models_BarcodeFieldModel';

export type FWT_App_Models_BarcodeFormatModel = {
    readonly formatName?: string | null;
    readonly regexMatch?: string | null;
    readonly regexSplit?: string | null;
    readonly fieldCount?: number;
    readonly regexPosition?: number | null;
    readonly regexReplace?: string | null;
    readonly barcodeFields?: Array<FWT_App_Models_BarcodeFieldModel> | null;
};
