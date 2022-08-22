/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomerContactModel = {
    contactKey?: number;
    customerKey?: number;
    name: string;
    email?: string | null;
    mobilePhone?: string | null;
    emailInvoice: boolean;
    textInvoice: boolean;
    emailStatement: boolean;
    textStatement: boolean;
    emailTicket: boolean;
    textTicket: boolean;
};
