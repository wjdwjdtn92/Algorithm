// 메뉴만 -> 아이스
// 아무거나 => 아아 => anything
// 아메리카노 4500 라테 5000

// 아이스핫이 의미 없음;

function solution(order) {
    const price = {
        "americano": 4500,
        "cafelatte": 5000,
        "anything": 4500,
    }
    
    return order.reduce((acc, menu) => {
        const currentPrice = price[menu.replace(/(ice|hot)/g, '')];
        
        return acc + currentPrice;
    }, 0)
}