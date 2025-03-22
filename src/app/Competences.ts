export class Competences {
    private _domaine: string;
    private _imgSrc: string;
    private _description: string;
    private _logiciels: [string,string,string,string];

    constructor(domaine: string, imgSrc: string, description: string, logiciels:[string,string,string,string]) {
        this._domaine = domaine;
        this._imgSrc = imgSrc;
        this._description = description;
        this._logiciels = logiciels;
    }

    public getDomaine():string {
        return this._domaine;
    }
    public getImgSrc():string {
        return this._imgSrc;
    }
    public getDescription():string {
        return this._description;
    }
    public getlogiciels():[string,string,string,string] {
        return this._logiciels;
    }


    public getFullInfosPersonne():string {
        return `${this._domaine} ${this._imgSrc} ${this._description} ${this._logiciels}`;
    }
}