import { useParams } from "react-router-dom";
import { apiMap } from "../utils/apiMapper";

export const ApiLanding = () => {
    const { api } = useParams();
    const ApiComponent = apiMap[api].component;

    return (
        <div>
            <h1>{apiMap[api].title}</h1>
            <p>{apiMap[api].description}</p>
            <ApiComponent />
        </div>
    )
}; 
