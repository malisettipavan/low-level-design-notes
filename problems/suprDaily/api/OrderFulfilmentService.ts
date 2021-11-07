import { OrderRequest } from "../common/types";

interface OrderFulfilmentService {
    canFulfilOrder(orderRequest : OrderRequest) : Promise<boolean>;
    reserveOrder(orderRequest : OrderRequest) : Promise<void>;
}

export {OrderFulfilmentService};