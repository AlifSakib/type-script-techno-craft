// Author : AlifSakib
// Desc : Generic Function

function genericFunction<T , U>(argument: T): T[] {
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}

var arrayFromString = genericFunction<string, undefined>("beep");

console.log(arrayFromString[0]); // "beep"

// Type Argument Inference

function identity<T>(argument: T): T {
    return argument;
}

// Spread Operator

const actors = "Marlon Brando";

const actorInfo = {
    name: "Marlon Brando",
    age: 80,
    country: "USA"
}

interface ActorInfo<T,U,Z> {
    name: T;
    age: U;
    country: Z;
}

const addActorInfo = <T, U>(actor: T, info: ActorInfo<string, number, string>) => {
    return {
        ...actor,
        ...info
    }
}

const actorWithInfo = addActorInfo(actors, actorInfo);
