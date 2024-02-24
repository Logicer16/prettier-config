/**
 * @file Merges two objects together.
 */

/**
 * A reimplementation of `Object.entries()` with correct typing.
 * @param object The object to get the entries of.
 * @returns An array of key-value pairs. Conforms to the output of `Object.entries()`.
 */
function getTypedObjectEntries<
  T extends Record<K, T[K]>,
  K extends string & keyof T
>(object: T): [K, T[K]][] {
  // Guaranteed by spec. Included types are poor.
  // type-coverage:ignore-next-line
  const keys = Object.keys(object) as K[];
  return keys.map((key) => {
    return [key, object[key]];
  });
}

/**
 * Checks if the parameter is the actual array type.
 * @param array The parameter to check the type of.
 * @returns True if the parameter is the actual array type, otherwise false.
 */
function isArray(array: unknown): array is unknown[] {
  return Array.isArray(array);
}

/**
 * Checks if the parameter is the actual object type.
 * @param object The parameter to check the type of.
 * @returns True if the parameter is the actual object type, otherwise false.
 */
function isObject(object: unknown): object is Record<string, unknown> {
  return typeof object === "object" && object !== null;
}

/**
 * Merges two objects together, recursively merging arrays and objects, and overriding all other values with those in which appear later.
 * @param object The first object to merge. At least one object must be passed to the function.
 * @param objects The other objects to merge.
 * @returns A merged object.
 */
export function mergeObjects<
  T extends Record<string, T[K]>,
  K extends string & keyof T
>(object: T, ...objects: T[]): T {
  const result: Record<string, unknown> = object;

  for (const object of objects.slice(1)) {
    for (const [key, newValue] of getTypedObjectEntries(object)) {
      const oldValue = result[key];
      if (isArray(oldValue) && isArray(newValue)) {
        result[key] = [...oldValue, ...newValue];
      } else if (isObject(oldValue) && isObject(newValue)) {
        result[key] = mergeObjects<Record<string, unknown>, string>(
          oldValue,
          newValue
        );
      } else result[key] = newValue;
    }
  }

  // Typescript cannot handle this level of abstraction with generics.
  // type-coverage:ignore-next-line
  return result as T;
}
