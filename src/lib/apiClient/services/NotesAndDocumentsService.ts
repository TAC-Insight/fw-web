/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_NoteDoc_Models_DocumentModel } from '../models/FWT_NoteDoc_Models_DocumentModel';
import type { FWT_NoteDoc_Models_NoteModel } from '../models/FWT_NoteDoc_Models_NoteModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotesAndDocumentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets documents related to specified entity
     * @returns FWT_NoteDoc_Models_DocumentModel Success
     * @throws ApiError
     */
    public getDocuments({
documentType,
documentTypeKey,
}: {
/**
 * Entity (Order, Customer, etc)
 */
documentType?: string,
/**
 * Key of the entity the document is for (eg order key, custome key etc)
 */
documentTypeKey?: number,
}): CancelablePromise<Array<FWT_NoteDoc_Models_DocumentModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/document',
            query: {
                'documentType': documentType,
                'documentTypeKey': documentTypeKey,
            },
        });
    }

    /**
     * Creates a new document or updates an existing document
     * To create a new document, set the document key to zero.  To update an existing document, set the document key to that document's key
     * @returns FWT_NoteDoc_Models_DocumentModel Success
     * @throws ApiError
     */
    public saveDocument({
requestBody,
}: {
requestBody?: FWT_NoteDoc_Models_DocumentModel,
}): CancelablePromise<FWT_NoteDoc_Models_DocumentModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/document',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a document by key
     * @returns FWT_NoteDoc_Models_DocumentModel Success
     * @throws ApiError
     */
    public getDocumentByKey({
documentKey,
}: {
documentKey: number,
}): CancelablePromise<FWT_NoteDoc_Models_DocumentModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/document/{documentKey}',
            path: {
                'documentKey': documentKey,
            },
        });
    }

    /**
     * Deletes a document by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteDocument({
documentKey,
}: {
documentKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/document/{documentKey}',
            path: {
                'documentKey': documentKey,
            },
        });
    }

    /**
     * Gets valid document Types
     * @returns string Success
     * @throws ApiError
     */
    public getDocumentTypes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/document/type',
        });
    }

    /**
     * Gets notes related to specified entity
     * @returns FWT_NoteDoc_Models_NoteModel Success
     * @throws ApiError
     */
    public getNotes({
noteType,
noteTypeKey,
}: {
/**
 * Entity (Customer, Request, etc)
 */
noteType?: string,
/**
 * Key of the entity the note is for (eg order key, custome key etc)
 */
noteTypeKey?: number,
}): CancelablePromise<Array<FWT_NoteDoc_Models_NoteModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/note',
            query: {
                'noteType': noteType,
                'noteTypeKey': noteTypeKey,
            },
        });
    }

    /**
     * Creates a new note or updates an existing note
     * To create a new note, set the note key to zero.  To update an existing note, set the note key to that note's key
     * @returns FWT_NoteDoc_Models_NoteModel Success
     * @throws ApiError
     */
    public saveNote({
requestBody,
}: {
requestBody?: FWT_NoteDoc_Models_NoteModel,
}): CancelablePromise<FWT_NoteDoc_Models_NoteModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/note',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets a note by key
     * @returns FWT_NoteDoc_Models_NoteModel Success
     * @throws ApiError
     */
    public getNoteByKey({
noteKey,
}: {
noteKey: number,
}): CancelablePromise<FWT_NoteDoc_Models_NoteModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/note/{noteKey}',
            path: {
                'noteKey': noteKey,
            },
        });
    }

    /**
     * Deletes a note by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteNote({
noteKey,
}: {
noteKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/note/{noteKey}',
            path: {
                'noteKey': noteKey,
            },
        });
    }

    /**
     * Gets valid note Types
     * @returns string Success
     * @throws ApiError
     */
    public getNoteTypes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/note/type',
        });
    }

}
