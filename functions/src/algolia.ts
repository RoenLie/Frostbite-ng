import * as functions from "firebase-functions";
// ----------------------------------------------------------------------------

import algoliasearch from "algoliasearch";

const env = functions.config();
const APP_ID = env.algolia.appid;
const ADMIN_KEY = env.algolia.apikey;

const client = algoliasearch(APP_ID, ADMIN_KEY);

const index = client.initIndex("suggestions");

exports.indexSuggestion = functions
    .region("europe-west2")
    .firestore
    .document("suggestions/{suggestionId}")
    .onWrite(async (change, context) => {
      const before = change.before.data();
      const after = change.after.data();

      const onCreate = !!(!before && after);
      const onUpdate = !!(before && after);
      const onDelete = !!(before && !after);

      if (onDelete) {
        console.log("deleting");

        const objectId = change.before.id;
        try {
          const response = await index.deleteObject(objectId);
          console.log(response);
          return true;
        } catch (error) {
          console.error(error);
        }
      }

      if (onCreate || onUpdate) {
        console.log("creating/updating");

        const objectID = change.after.id;
        const data = change.after.data();

        const recordData = [{
          objectID,
          ...data,
        }];

        try {
          const response = await index.saveObjects(recordData, {
            autoGenerateObjectIDIfNotExist: true,
          });
          console.log(response);

          return true;
        } catch (error) {
          console.error(error);
        }
      }

      return false;
    });
