import BoredAPI from "../components/BoredAPI";
import CatAPI from "../components/CatAPI";
import GuardianAPI from "../components/GuardianAPI";


export const apiMap = {
    cat: {
        component: CatAPI,
        title: "Welcome to the Cat API.",
        description: "Random cat photos on click!",
        label: "Cat"
    },
    bored: {
        component: BoredAPI,
        title: "Welcome to the Bored API.",
        description: "Random things to do when you get bored.",
        label: "Bored"
    },
    guardian: {
        component: GuardianAPI,
        title: "Welcome to the Guardian API.",
        description: "Random coffe things.",
        label: "Coffee"
    },
}
