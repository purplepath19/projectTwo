import BoredAPI from "../components/BoredAPI";
import CatAPI from "../components/CatAPI";

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
    }
}
