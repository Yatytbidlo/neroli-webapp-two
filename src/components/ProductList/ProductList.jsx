import React, {useState} from 'react';
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css"
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', img:'https://static.tildacdn.com/tild3066-3362-4165-a561-373931373038/IMG_8272_1_1_1.png', title: 'Пробник Neroli', price: 7500, description: '40 пшиков на 7 дней'},
    {id: '2', img:'https://static.tildacdn.com/tild3336-6664-4333-a165-323562336134/IMG_8264_1_2_1.png', title: 'Neroli 30мл', price: 35000, description: '120 пшиков на 60 дней +в подарок новинка пробник "Grape"'},
    {id: '3',  img:'https://static.tildacdn.com/tild3336-6664-4333-a165-323562336134/IMG_8264_1_2_1.png', title: 'Neroli 50мл', price: 75000, description: '200 пшиков на 100 дней +в подарок новинка пробник "Grape"'}
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {

    const [addedItems, setAddedItems] = useState([])
    const {tg, queryId} = useTelegram()

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        const {tg} = useTelegram()
        let newItems = []

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить за ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
            <h3 className={'delivery'}>Доставка бесплатная!</h3>
        </div>
    );
};

export default ProductList;