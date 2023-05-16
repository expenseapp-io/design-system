import { describe, expect, it } from "vitest";
import { format } from "../format";

describe("utils / format", () => {
	it("should return formatted date", () => {
		const result = format();

		expect(result).toBe("formatted date");
	});
});
