/* eslint-disable require-jsdoc */
import * as functions from "firebase-functions";
let adminInitialized = false;

async function initAdmin() {
  const admin = await import("firebase-admin");
  if (!adminInitialized) {
    admin.initializeApp();
    adminInitialized = true;
  }
  return admin;
}

// ----------------------------------------------------------------------------

exports.userCreated = functions
    .region("europe-west2")
    .auth.user()
    .onCreate(async (user) => {
      const admin = await initAdmin();

      try {
        const col = admin.firestore().collection("users");

        const schema = await col.doc("!schema").get();

        if (!schema) console.error("Could not find schema for user document.");

        const userDoc = schema.data() || {};

        userDoc.name = user.displayName || "";
        userDoc.email = user.email || "";
        userDoc.emailVerified = user.emailVerified || "";
        userDoc.phoneNumber = user.phoneNumber || "";

        await col.doc(user.uid).set(userDoc);

        console.log(`User generated for ${user.email}`);
      } catch (err) {
        console.error(err);
      }

      return null;
    });

// ----------------------------------------------------------------------------

exports.userDeleted = functions
    .region("europe-west2")
    .auth.user()
    .onDelete(async (user) => {
      const admin = await initAdmin();

      try {
        const col = admin.firestore().collection("users");

        await col.doc(user.uid).delete();

        console.log(
            `User document deleted for email: ${user.email}, uid: ${user.uid}`
        );
      } catch (err) {
        console.error(
            `Could not delete user document for user: ${user.uid}`,
            err
        );
      }

      return null;
    });

// ----------------------------------------------------------------------------
