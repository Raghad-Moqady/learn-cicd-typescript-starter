 import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {

  test("returns null if no authorization header", () => {
    const headers = {};
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if wrong format", () => {
    const headers = {
      authorization: "Bearer 123"
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null if missing key", () => {
    const headers = {
      authorization: "ApiKey"
    };
    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns api key if correct", () => {
    const headers = {
      authorization: "ApiKey 123456"
    };
    expect(getAPIKey(headers)).toBe("123456");
  });

});