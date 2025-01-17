export interface IRestangularFields {
  id: string;
  route: string;
  parentResource: string;
  restangularCollection: string;
  cannonicalId: string;
  etag: string;
  selfLink: string;
  get: string;
  getList: string;
  put: string;
  post: string;
  remove: string;
  head: string;
  trace: string;
  options: string;
  patch: string;
  getRestangularUrl: string;
  getRequestedUrl: string;
  putElement: string;
  addRestangularMethod: string;
  getParentList: string;
  clone: string;
  ids: string;
  httpConfig: string;
  reqParams: string;
  one: string;
  all: string;
  several: string;
  oneUrl: string;
  allUrl: string;
  customPUT: string;
  customPATCH: string;
  customPOST: string;
  customDELETE: string;
  customGET: string;
  customGETLIST: string;
  customOperation: string;
  doPUT: string;
  doPATCH: string;
  doPOST: string;
  doDELETE: string;
  doGET: string;
  doGETLIST: string;
  fromServer: string;
  withConfig: string;
  withHttpConfig: string;
  singleOne: string;
  plain: string;
  save: string;
  restangularized: string;
}

export const RestangularFields: IRestangularFields = {
  id: 'id',
  route: 'route',
  parentResource: 'parentResource',
  restangularCollection: 'restangularCollection',
  cannonicalId: '__cannonicalId',
  etag: 'restangularEtag',
  selfLink: 'href',
  get: 'get',
  getList: 'getList',
  put: 'put',
  post: 'post',
  remove: 'remove',
  head: 'head',
  trace: 'trace',
  options: 'options',
  patch: 'patch',
  getRestangularUrl: 'getRestangularUrl',
  getRequestedUrl: 'getRequestedUrl',
  putElement: 'putElement',
  addRestangularMethod: 'addRestangularMethod',
  getParentList: 'getParentList',
  clone: 'clone',
  ids: 'ids',
  httpConfig: '_$httpConfig',
  reqParams: 'reqParams',
  one: 'one',
  all: 'all',
  several: 'several',
  oneUrl: 'oneUrl',
  allUrl: 'allUrl',
  customPUT: 'customPUT',
  customPATCH: 'customPATCH',
  customPOST: 'customPOST',
  customDELETE: 'customDELETE',
  customGET: 'customGET',
  customGETLIST: 'customGETLIST',
  customOperation: 'customOperation',
  doPUT: 'doPUT',
  doPATCH: 'doPATCH',
  doPOST: 'doPOST',
  doDELETE: 'doDELETE',
  doGET: 'doGET',
  doGETLIST: 'doGETLIST',
  fromServer: 'fromServer',
  withConfig: 'withConfig',
  withHttpConfig: 'withHttpConfig',
  singleOne: 'singleOne',
  plain: 'plain',
  save: 'save',
  restangularized: 'restangularized'
};
