const Projects = [{
        username: "Dessie",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg",
        name: "Carlos henrique",
        deadline: "2 days later",
        progress: 90,
        color: "pink"
    },
    {
        username: "Jakayla",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg",
        name: "Ricardo Robson",
        deadline: "1 weeks later",
        progress: 70,
        color: "success"
    },
    {
        username: "Damenleeturks",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/damenleeturks/128.jpg",
        name: "luiz felipe",
        deadline: "2 Month later",
        progress: 30,
        color: "teal"
    },
    {
        username: "Caspergrl",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/caspergrl/128.jpg",
        name: "Thiago melo",
        deadline: "half year later",
        progress: 15,
        color: "grey"
    }
]

const getProject = limit => {
    return limit ? Projects.slice(0, limit) : Projects
}

export { Projects, getProject }