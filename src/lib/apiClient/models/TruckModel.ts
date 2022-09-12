/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TruckModel = {
    truckKey?: number;
    haulerKey?: number;
    truckID: string;
    autoIDNum?: number | null;
    driverName?: string | null;
    driverEmail?: string | null;
    smsNumber?: string | null;
    licenseNum?: string | null;
    volumeCapacity?: number | null;
    weightCapacity?: number | null;
    tareWeight: number;
    active: boolean;
    insuranceExpirationDate?: string | null;
    licenseExpirationDate?: string | null;
    assignedOrderProductKey?: number | null;
    lastLoadDate?: string | null;
    truckUDF1?: string | null;
    truckUDF2?: string | null;
    truckUDF3?: string | null;
    hasSMS?: boolean | null;
    hasApp?: boolean | null;
    devicePIN?: string | null;
    truckTypeKey?: number | null;
    enableDispatching?: boolean | null;
    ticketNotification?: boolean | null;
    modifiedDate: string;
    readonly haulerDisplay?: string | null;
    readonly truckTypeDisplay?: string | null;
};
