interface Objective {
    name: string;
    completed: boolean;
    tutorial_link: string;
}

interface Level {
    name: string;
    completed: boolean;
    objectives: Objective[]
}

export type {Objective, Level};
