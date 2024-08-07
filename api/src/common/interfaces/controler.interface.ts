import { ControllerRoute } from "../types/route.type";

export abstract class AbstractController {
    abstract routes(): ControllerRoute[];
}