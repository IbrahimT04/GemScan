import Gemstone from "../types/gemstone";
import Result from "../types/result";
import Expert from "./expert";

export default class AIExpert implements Expert{
    async identify(gemstoneDescription:Gemstone):Promise<Result>{
        return new Result();
    };
}