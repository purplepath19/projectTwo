import BoredAPI from "../components/BoredAPI";
import CatAPI from "../components/CatAPI";
import GuardianAPI from "../components/GuardianAPI";
import UserAdmin from "../components/UserAdmin";


export const apiMap = {
    cat: {
        component: CatAPI,
        title: "Welcome to the Cat API.",
        description: "Random cat photos for a mood boost",
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
        title: "Welcome to The Guardian API!",
        description: "",
        label: "Guardian"
    },


}
