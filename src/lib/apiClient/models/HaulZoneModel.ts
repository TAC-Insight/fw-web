/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type HaulZoneModel = {
    haulZoneKey?: number;
    locationKey?: number;
    name: string;
    description?: string | null;
    freightType: string;
    freightRate: number;
    haulerRate: number;
    active?: boolean;
    readonly locationDisplay?: string | null;
};
