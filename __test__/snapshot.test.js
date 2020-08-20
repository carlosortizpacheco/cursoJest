import { getCharacter } from "../snapshot"
import rick from "../rick.json"

describe('Trabajando con instantaneas', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot()
    });
    test("siempre fallara el snapshot", () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
        }
        expect(user).toMatchSnapshot();
    });
    test("Permitimos una excepcion", () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: 'Carlos Ortiz'
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        });
    });
});



