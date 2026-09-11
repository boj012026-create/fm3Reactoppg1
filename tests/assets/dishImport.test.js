import {describe, it, expect} from 'vitest';
import dishes from '/src/assets/dishes.js';

describe("Import dishes from assets", () => {
    it("Dishes is an Array", () => {
    expect(dishes).toBeInstanceOf(Array);
    });
    it("Dishes has more than zero elements", () => {
    expect(dishes.length).toBeGreaterThan(0);
    });
});
