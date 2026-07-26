import { faBoxArchive, faClipboardList, faCircle } from '@fortawesome/free-solid-svg-icons';

const product = {
    labels : "Product",
    icon : {faBoxArchive},
    list : [
        {
            labels: "product",
            icon : {faBoxArchive}
        }
    ]
}
const order = {
    labels : "Order",
    icon : "faBoxArchive",
    list : [
        {
            labels: "product",
            icon : {faBoxArchive}
        }
    ]
}

export const sidebarDropdownArray = [product,order]
