import csv, os

stages = []
objectives = []

with open('utils/SwimEnglandStages.csv', 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    raw_data = []

    for line in csv_reader:
        raw_data.append(line)

    stages = raw_data[0]

    previous_stage = stages[0]

    for stage in stages:
        if stage == '':
            stages[stages.index(stage)] = previous_stage
        else:
            previous_stage = stage

    objectives = raw_data[1]

    for objective in objectives:
        objectives[objectives.index(objective)] = objective.replace('\n', ' ')

import tabulate

table = []
for i in range(len(stages)):
    table.append([stages[i], objectives[i]])

print(tabulate.tabulate(table, headers=['Stage', 'Objective']))


output_data = {}

for i in range(len(stages)):
    if stages[i] not in output_data:
        output_data[stages[i]] = []

    output_data[stages[i]].append(objectives[i])

print(output_data)

# interface Objective {
#     name: string;
# completed: boolean;
# }
#
# interface Level {
#     name: string;
# completed: boolean;
# objectives: Objective[]
# }

with open('src/data/stages.ts', 'w') as file:
    file.write('export const stages = [\n')

    for stage in output_data:
        file.write('    {\n')
        file.write(f'        name: "{stage}",\n')
        file.write('        completed: false,\n')
        file.write('        objectives: [\n')

        for objective in output_data[stage]:
            file.write('            {\n')
            file.write(f'                name: "{objective}",\n')
            file.write('                completed: false,\n')
            file.write('                tutorial_link: "https://www.youtube.com/embed/A59iid-HvxQ?si=KFDcaS2DPIPvtyxz",\n')
            file.write('            },\n')

        file.write('        ]\n')
        file.write('    },\n')

    file.write(']\n')

os.makedirs('src/data', exist_ok=True)
