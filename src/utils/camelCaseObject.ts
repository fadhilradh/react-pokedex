import humps from "lodash-humps-ts";

export const camelCaseObject = (object: object) => humps(object);
