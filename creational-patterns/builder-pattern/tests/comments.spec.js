import {describe, it, expect} from '@jest/globals';
import { comments } from "../connect-to-database";

describe("Test for the comments builder pattern", () => {
    it("should return exactly 10 items from the database", () => {
        expect(comments.length).toEqual(10);
    });
});