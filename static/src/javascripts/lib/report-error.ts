

/*
   Report errors to Sentry with optional tags metadata
   We optionally re-throw the error to halt execution and to ensure the error is
   still logged to the console via browsers built-in logging for uncaught
   exceptions. This is optional because sometimes we log errors for tracking
   user data.
*/

import raven from "lib/raven";

export type ReportedError = Error & {
  reported?: boolean;
};

export type ErrorLogger = (err: ReportedError, tags: Object, shouldThrow?: boolean) => void;

const reportError: ErrorLogger = (err: ReportedError, tags: Object, shouldThrow = true): void => {
  raven.captureException(err, { tags });
  if (shouldThrow) {
    // Flag to ensure it is not reported to Sentry again via global handlers
    const error = err;
    error.reported = true;
    throw error;
  }
};

export default reportError;