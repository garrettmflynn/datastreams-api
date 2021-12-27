const randomUUID = () => {

    // Use Crypto API
    if (window.crypto) return window.crypto.randomUUID()

    // Or Generate our UUID
    else return Math.floor(Math.random()+Math.random()*Math.random()*10000000000000000)
}

export default randomUUID