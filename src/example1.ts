// Inializing Role Enum Type: Covered in First Module
enum Role {
    DEVELOPER,
    DESIGNER,
    PROJECT_MANAGER,
    BOARD_MEMBER,
    VICE_PRESIDENT,
    PRESIDENT
}

// Initializing an object type
type Person = {
  name: string;
  year: number;
  role: Role;
};

// Initializing Object
let newMember: Person = {name: "Chris", year: 1, role: Role.DEVELOPER};

// Object Deconstruction (Not Utilized Much)
// const {year, role} = newMember;

// Updating newMember
newMember = {...newMember, ...{year: 2, role: Role.BOARD_MEMBER}};

// Can be president method utilizing tuples
const isAlumni = (person: Person): [boolean, number] => {
    if(person.year > 4) {
        return [true, 0];
    } else {
        return [false, 4 - person.year];
    }
}

// Tuple / Array Deconstruction
const [alumniStatus, yearsUntilAlumni] = isAlumni(newMember);

// Here are some more examples of array deconstruction you can play around with
// const [alumniStatus] = isAlumni(newMember);
// const [, yearsUntilAlumni] = isAlumni(newMember);

// Console.log output
console.log(`Codelab Member ${newMember.name} is ${alumniStatus ? "not" : ""} an Alumni`);
console.log(`Codelab Member ${newMember.name} has ${yearsUntilAlumni} until they are an Alumni`);

// Tuple / Array Expansion
let codelabMembers: Person[] = [];
codelabMembers = [...codelabMembers, newMember];