import { User } from '../userModel/user';
import { Order } from '../orderModel/order';
import { Product } from '../productModel/Product';
import { Option } from '../optionModel/Option';
import { Supplier } from '../supplierModel/Supplier';

export class FullOrder {

    constructor(
        private user: User,
        private order: Order,
        private product: Product,
        private supplier: Supplier,
        private confirmed:boolean,
    ) { }
    
    public getUser(): User{
        return this.user;
    }
    public setUset(userIn:User): void{
        this.user = userIn;
    }
    public getOrder(): Order{
        return this.order;
    }
    public setOrder(orderIn:Order): void{
        this.order = orderIn;
    }
    public getProduct(): Product{
        return this.product;
    }
    public setProduct(productIn:Product): void{
        this.product = productIn;
    }
    public getSupplier(): Supplier{
        return this.supplier;
    }
    public setSupplier(supplierIn: Supplier): void{
        this.supplier = supplierIn;
    }
    public isConfirmed(): boolean{
        return this.confirmed;
    }
    public setConfirmStatus(confirmed:boolean): void{
        this.confirmed = confirmed;
    }
    public getSelectedOptions(): Option[]{
        return this.order.optionIds.map(id => this.product.options.find(option => option.id === id));
    }

    public getOrderProductWithOptions(): string{
        let orderDescription: string = this.product.getName();
        if (this.getSelectedOptions().length > 0) {
            this.getSelectedOptions().forEach(option => orderDescription += ` +${option.nom}`);
        }
        return orderDescription;
    }
    
    public getTotalPrice(): number{
        let total: number = this.product.price;
        this.getSelectedOptions().forEach(option => {
            total += option.surcout;
        });
        return total;
    }
}
