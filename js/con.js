/**
 * @fileoverview Exports for conn-ydn-db module.
 */

goog.require('ydn.db');
goog.require('ydn.db.con.Storage');
goog.require('goog.async.Deferred');



goog.exportSymbol('ydn.db.con.Storage', ydn.db.con.Storage);

goog.exportProperty(goog.async.Deferred.prototype, 'done',
  goog.async.Deferred.prototype.addCallback);
goog.exportProperty(goog.async.Deferred.prototype, 'fail',
  goog.async.Deferred.prototype.addErrback);
goog.exportProperty(goog.async.Deferred.prototype, 'then',
  goog.async.Deferred.prototype.addCallbacks);


goog.exportProperty(ydn.db.con.Storage.prototype, 'type',
  ydn.db.con.Storage.prototype.type);
goog.exportProperty(ydn.db.con.Storage.prototype, 'setName',
  ydn.db.con.Storage.prototype.setName);
goog.exportProperty(ydn.db.con.Storage.prototype, 'getSchema',
  ydn.db.con.Storage.prototype.getSchema);
goog.exportProperty(ydn.db.con.Storage.prototype, 'transaction',
  ydn.db.con.Storage.prototype.transaction);
goog.exportProperty(ydn.db.con.Storage.prototype, 'close',
  ydn.db.con.Storage.prototype.close);
goog.exportProperty(ydn.db.con.Storage.prototype, 'isReady',
  ydn.db.con.Storage.prototype.isReady);
// for hacker only. This method should not document this, since this will change
// transaction state.
goog.exportProperty(ydn.db.con.Storage.prototype, 'db',
  ydn.db.con.Storage.prototype.getDbInstance);


goog.exportSymbol('ydn.db.deleteDatabase', ydn.db.deleteDatabase);


