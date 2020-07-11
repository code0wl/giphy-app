import { defer } from 'rxjs';

export const asyncData = <T>(data: T) => defer(() => Promise.resolve(data));
export const asyncError = <T>(errorObject: T) =>
  defer(() => Promise.reject(errorObject));
