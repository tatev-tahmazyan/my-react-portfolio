export const formDataAddTask = [
    {
        name: "title",
        label: "Title"
    },
    {

        name: "description",
        label: "Description"
    },
    {
        name: "attachedTo",
        label: "Attached To"
    }
];


export const formValuesAddTask = {
    title: {
        touched: false,
        value: "",
        error: null
    },
    description: {
        touched: false,
        value: "",
        error: null
    },
    attachedTo: {
        touched: false,
        value: "",
        error: null
    }
}