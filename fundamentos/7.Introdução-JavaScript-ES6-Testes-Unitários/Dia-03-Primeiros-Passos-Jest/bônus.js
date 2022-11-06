// Dados
const professionalBoard = [
    {
        id: '8579-6',
        firstName: 'Ana',
        lastName: 'Gates',
        specialities: ['UX', 'Design'],
    },
    {
        id: '5569-4',
        firstName: 'George',
        lastName: 'Jobs',
        specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
        id: '4456-4',
        firstName: 'Leila',
        lastName: 'Zuckerberg',
        specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
        id: '1256-4',
        firstName: 'Linda',
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
        id: '9852-2-2',
        firstName: 'Jeff',
        lastName: 'Cook',
        specialities: ['Ruby', 'SQL'],
    },
    {
        id: '4678-2',
        firstName: 'Paul',
        lastName: 'Dodds',
        specialities: ['Backend'],
    },
];

// Pesquisa
// exercise-bonus.test.js

const searchEmployee = require('./exercise-bonus');

describe('Testa a função searchEmployee', () => {
    it('Testa se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
        const actual = searchEmployee('1256-4', 'firstName');
        const expected = 'Linda';

        expect(actual).toBe(expected);
    });
    it('Testa se searchEmployee(id, "lastName") retorna o segundo nome do usuário da id consultada', () => {
        const actual = searchEmployee('1256-4', 'lastName');
        const expected = 'Bezos';

        expect(actual).toBe(expected);
    });
    it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
        const actual = searchEmployee('1256-4', 'specialities');
        expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
    });
    it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
        expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
    });
    it('Testa a mensagem do erro para ID inexistente', () => {
        expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
    });
    it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
        expect(() => { searchEmployee() }).toThrow();
    });
    it('Testa a mensagem do erro para informação inexistente', () => {
        expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
    });
});

//IMPLEMENTO:
// exercise-bonus.js

const searchEmployee = (id, detail) => {
    let employee = '';

    for (let index = 0; index < professionalBoard.length; index += 1) {
        const currentEmployee = professionalBoard[index];

        if (currentEmployee.id === id) {
            employee = currentEmployee;
        }
    }

    if (!employee) {
        throw new Error("ID não identificada");
    }

    if (!employee[detail]) {
        throw new Error("Informação indisponível");
    }

    return employee[detail];
};

module.exports = searchEmployee;