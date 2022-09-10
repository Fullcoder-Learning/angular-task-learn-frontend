export interface Task {
    name: string,
    description: string
}

// añadir un nuevo interface con todos los datos de la tarea:
export interface TaskData {
    _id: string,
    is_complete: boolean,
    date_finish: Date,
    date_created: Date,
    name: string,
    description: string,
    owner: string
}