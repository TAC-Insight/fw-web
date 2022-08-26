/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentModel = {
    documentKey?: number;
    documentType: string;
    documentTypeKey?: number;
    title: string;
    description?: string | null;
    filename: string;
    mimeType: string;
    documentData?: string | null;
};
