import sortDataArray from './components/catalog/sort-data-array.js'
import filterDataArray from './components/catalog/filter-data-array.js'
import filterGoodsOfDay from './components/slider/filter-goods-of-day.js';

export default async function getProducts() {
    const url = './data/data.json';

    const products = {
        dataArray: await fetch(url)
            .then((response) => response.json())
            .catch(console.error),

        sortDataArray() {
            sortDataArray(this.dataArray)
        },

        filterDataArray() {
            this.dataArray = filterDataArray(this.dataArray)
        },
 
        filterGoodsOfDay() {
            this.dataArray = filterGoodsOfDay(this.dataArray)
        },
    }

return products
}