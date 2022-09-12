/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NoteModel = {
    noteKey?: number;
    noteType: string;
    noteTypeKey: number;
    enteredBy: string;
    enteredDateTime: string;
    regarding?: string | null;
    note: string;
};
