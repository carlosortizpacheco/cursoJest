const { TestScheduler } = require("jest")

describe("comparadores comunes",()=>{
    const user = {
        name:"carlos",
        lastname:"pacheco"
    }

    const user2 = {
        name:"carlos",
        lastname:"pacheco"
    }

    const user3 = {
        name: "pedrito"
    }

    test("igualdad de elementos",()=>{
        expect(user).toEqual(user2)
    });
    test("no son exactamente iguales",()=>{
        expect(user).not.toEqual(user3)
    });

})