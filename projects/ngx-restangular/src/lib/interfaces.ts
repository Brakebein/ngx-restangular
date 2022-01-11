import { Observable } from 'rxjs';
import { IRestangularFields } from './restangular-fields';

export interface RestProvider {
  setBaseUrl(newBaseUrl: string): RestProvider;
  setSelfLinkAbsoluteUrl(value): void;
  setExtraFields(newExtraFields: any): RestProvider;
  setDefaultHttpFields(values: {[key: string]: any}): RestProvider;
  setPlainByDefault(value: boolean): RestProvider;
  setEncodeIds(encode: boolean): RestProvider;
  setDefaultRequestParams(param1: string | string[] | {[key: string]: string}, param2?: {[key: string]: string}): RestProvider;
  setDefaultHeaders(headers: {[key: string]: string}): RestProvider;
  setDefaultResponseMethod(method: any): RestProvider;
  setMethodOverriders(values: string[]): RestProvider;
  setJsonp(active: any): RestProvider;
  setUrlCreator(name: any): RestProvider;
  setRestangularFields(resFields: {[P in keyof IRestangularFields]?: IRestangularFields[P]}): RestProvider;
  setUseCannonicalId(value: boolean): RestProvider;
  addResponseInterceptor(extractor: (data: any, operation: string, what: string, url: string, response: any) => any): RestProvider;
  addErrorInterceptor(interceptor: (response: any, subject: any, responseHandler: (res: any) => void) => boolean): RestProvider;
  addRequestInterceptor(interceptor: (element: any, operation: string, path: string, url: string) => any): RestProvider;
  addFullRequestInterceptor(interceptor: (
    element: any, operation: string, path: string, url: string, headers: any, params: any, httpConfig: any
  ) => {headers?: any, params?: any, element?: any, httpConfig?: any}): RestProvider;
  setOnBeforeElemRestangularized(post: any): RestProvider;
  setRestangularizePromiseInterceptor(interceptor: any): RestProvider;
  setOnElemRestangularized(post: (element: any, isCollection: boolean, what: string, Restangular: any) => any): RestProvider;
  setParentless(values: any): RestProvider;
  setRequestSuffix(newSuffix: string): RestProvider;
  addElementTransformer(type: string, secondArg: any, thirdArg: any): RestProvider;
  extendCollection(route: string, fn: (collection: any) => any): RestProvider;
  extendModel(route: string, fn: (model: any) => any): RestProvider;
  setTransformOnlyServerElements(active: boolean): void;
  setFullResponse(full: boolean): RestProvider;
}

interface RestCustom {
  customGET<T = unknown>(path: string, params?: any, headers?: {[key: string]: string}): Observable<RestElement<T>>;
  customGETLIST<T = unknown>(path: string, params?: any, headers?: {[key: string]: string}): Observable<RestCollection<T>>;
  customDELETE(path: string, params?: any, headers?: {[key: string]: string}): Observable<any>;
  customPATCH<T = unknown>(elem?: any, path?: string, params?: any, headers?: {[key: string]: string}): Observable<RestElement<T>>;
  customPOST<T = unknown>(elem?: any, path?: string, params?: any, headers?: {[key: string]: string}): Observable<RestElement<T>>;
  customPUT<T = unknown>(elem?: any, path?: string, params?: any, headers?: {[key: string]: string}): Observable<RestElement<T>>;
  customOperation(operation: string, path: string, params?: any, headers?: {[key: string]: string}): Observable<any>;
  addRestangularMethod(name: string, operation: string, path?: string, params?: any, headers?: {[key: string]: string}, elem?: any): void;
}

interface RestObject extends RestCustom {
  one<T = unknown>(route: string, id?: number | string): RestElement<T>;
  all<T = unknown>(route: string): RestCollection<T>;
  several<T = unknown>(route: string, ...id: (number | string)[]): RestCollection<T>;
  oneUrl<T = unknown>(route: string, url: string): RestElement<T>;
  allUrl<T = unknown>(route: string, url: string): RestCollection<T>;
  copy<T>(fromElement: T): T;
  restangularizeElement<T = unknown>(parent: any, element: any, route: string, collection?: any, reqParams?: any): RestElement<T>;
  restangularizeCollection<T = unknown>(parent: any, element: any, route: string): RestCollection<T>;
  head(queryParams?: any, headers?: {[key: string]: string}): Observable<any>;
  trace(queryParams?: any, headers?: {[key: string]: string}): Observable<any>;
  options(queryParams?: any, headers?: {[key: string]: string}): Observable<any>;
  getRestangularUrl(): string;
  getRequestedUrl(): string;
}

interface IElement<T> extends RestObject {
  get(queryParams?: any, headers?: {[key: string]: string}): Observable<RestElement<T>>;
  getList<P = unknown>(subElement: string, queryParams?: any, headers?: {[key: string]: string}): Observable<RestCollection<P>>;
  put(queryParams?: any, headers?: {[key: string]: string}): Observable<RestElement<T>>;
  post<P = unknown>(
    subElement: string, elementToPost: any, queryParams?: any, headers?: {[key: string]: string}
  ): Observable<RestElement<P>>;
  patch<P = unknown>(object?: any, queryParams?: any, headers?: {[key: string]: string}): Observable<RestElement<P>>;
  remove(queryParams?: any, headers?: {[key: string]: string}): Observable<any>;
  clone(): RestElement<T>;
  plain(): T;
  getParentList(): RestCollection<T> | undefined;
}

export type RestElement<T = unknown> = T & IElement<T>;

interface ICollection<T> extends RestObject {
  getList(queryParams?: any, headers?: {[key: string]: string}): Observable<RestCollection<T>>;
  get(id: number | string): Observable<RestElement<T>>;
  post<P = unknown>(elementToPost: any, queryParams?: any, headers?: {[key: string]: string}): Observable<RestElement<P>>;
  clone(): RestCollection<T>;
  plain(): T[];
}

export type RestCollection<T = unknown> = Array<RestElement<T>> & ICollection<T>;
