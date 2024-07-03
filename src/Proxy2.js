let rubleBanknotes = [50, 100, 200, 500, 1000, 5000];

const {proxy: banknoteDispatch, revoke} = Proxy.revocable(rubleBanknotes, {
    set(target, prop, value) {
        if (typeof value !== 'number') {
            return false;
        } else {
            target[prop] = value;
            return true; 
        }
    },
    get(target, prop) {
        const newProp = Number(prop) < 0 ? eval(target.length + prop) - 1 : prop;
        if (newProp in target) {
            return target[newProp]
        } else {
            return target[0]
        }
    },
    has(target, prop) {
        if (target[prop] >= 500) {
            return true
        } else return false
        
    }
});


try {
    banknoteDispatch.push(10000);
    banknoteDispatch.push('aboba'); 
} catch (e) {
    console.log(e)
}

console.log(banknoteDispatch)
console.log(banknoteDispatch[-2])
console.log(banknoteDispatch[9999])
console.log(Reflect.has(banknoteDispatch, 0))
console.log(Reflect.has(banknoteDispatch, banknoteDispatch.length - 1))

revoke()

console.log(banknoteDispatch)

