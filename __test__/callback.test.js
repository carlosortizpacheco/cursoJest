import { callbackHell } from "../callback"

describe("Probando un callback", () => {
    test("Callback", done => {
        function otherCallback(data) {
            expect(data).toBe("hola javascripters")
            done();
        };
        callbackHell(otherCallback);
    });
})