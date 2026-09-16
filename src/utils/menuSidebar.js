import { faBoxArchive,faBoxesPacking, faClipboardList, faCircle, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const product = 
    {
    labels : "Product",
    icon : faBoxArchive,
    list : [
        {
            labels: "Product",
            path : "product",
            icon : faBoxArchive
        },
        {
            labels: "Variant",
            path : "product varian",
            icon : faBoxOpen
        }
    ]
}

const order = {
    labels : "Order",
    icon : faBoxesPacking,
    list : [
        {
            labels: "order",
            icon : faBoxesPacking
        }
    ]
}

export const sidebarDropdownArray = {product,order}
