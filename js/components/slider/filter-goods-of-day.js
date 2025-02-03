export default function filterGoodsOfDay(array) {

    array = array.filter(

        (productData) => {
            if (productData.goodsOfDay) return true
        })

    return array
}
