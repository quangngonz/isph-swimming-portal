interface Objective {
    name: string;
    completed: boolean;
}

interface Level {
    name: string;
    completed: boolean;
    objectives: Objective[]
}

export type {Objective, Level};
