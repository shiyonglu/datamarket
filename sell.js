var statusBar = document.getElementById('statusBar')
var connectWallet = document.getElementById('connectWallet')
var showAccount = document.getElementById('showAccount')
var showBalance = document.getElementById('showBalance')
var showLastDatasetID = document.getElementById('showLastDatasetID')
var assignDatasetID = document.getElementById('assignDatasetID')
var price_datasetID = document.getElementById('price_datasetID')
var newPrice = document.getElementById('newPrice')
var insertprice = document.getElementById('insertprice')
var meta_datasetID = document.getElementById('meta_datasetID')
var meta_key = document.getElementById('meta_key')
var meta_value = document.getElementById('meta_value')
var insertMetadata = document.getElementById('insertMetadata')
var delegate_datasetID = document.getElementById('delegate_datasetID')
var delegate_address = document.getElementById('delegate_address')
var assignDelegate = document.getElementById('assignDelegate')
var account 
var balance
var contractABI = [{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"delegate","type":"address"}],"name":"assignDatasetDelegate","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"key","type":"string"}],"name":"queryAccountInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"rawAmt","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"assignDatasetId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"newOwner","type":"address"}],"name":"sellDataset","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buyDatagold","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"rawAmt","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"newPrice","type":"uint256"}],"name":"insertPrice","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"newOwner","type":"address"}],"name":"transferDatasetOwner","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"key","type":"string"},{"name":"value","type":"string"}],"name":"insertAccountInfo","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastDatasetId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"datasetId","type":"uint256"}],"name":"getDatasetOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"key","type":"string"},{"name":"value","type":"string"}],"name":"insertMetadata","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"datasetId","type":"uint256"}],"name":"queryPrice","outputs":[{"name":"priceOfData","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"rawAmt","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"key","type":"string"}],"name":"queryMetadata","outputs":[{"name":"value","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"inAmt","type":"uint256"},{"indexed":false,"name":"outAmt","type":"uint256"}],"name":"BuyDatagold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":true,"name":"key","type":"string"},{"indexed":false,"name":"value","type":"string"}],"name":"InsertMetadata","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"InsertPrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":true,"name":"account","type":"address"}],"name":"AssignDatasetId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"TransferDatasetOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":true,"name":"key","type":"string"},{"indexed":false,"name":"value","type":"string"}],"name":"InsertAccountInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"rawAmt","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"rawAmt","type":"uint256"}],"name":"Approval","type":"event"}]
var contractAddress = '0xa3A9aA529Ae21B1A19faD3A463962242bfc20842'
var contract
var firstDatasetID = 1000000001

window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        contract = new web3.eth.Contract(contractABI,  contractAddress)
        var lastDatasetID = await contract.methods.lastDatasetId().call()
        //console.log(lastDatasetID)
        showLastDatasetID.value = lastDatasetID
    }
})

connectWallet.addEventListener('click', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            account = accounts[0]
            statusBar.innerHTML = ('Wallet connected!')
            sessionStorage.setItem("connected", "true");
            balance = await web3.eth.getBalance(account)
            contract = new web3.eth.Contract(contractABI,  contractAddress)

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + web3.utils.fromWei(balance, 'ether') + ' ETH'
            showBalance.style.visibility = "visible"
        } catch (error) {
            statusBar.innerHTML = ('User denied account access', error)
        }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    else {
        statusBar.innerHTML = ("Non-Ethereum browser detected. Please consider trying <a href='https://metamask.io/download' target='window'>MetaMask</a>!")
    }
})

assignDatasetID.addEventListener('click', async() => {
    if (sessionStorage.getItem("connected") !== "true"){
        window.alert("Please connect to your Web3 provider!");
    } 
    else{
        try{
            var response = await contract.methods.assignDatasetId().send({
                from: window.web3.currentProvider.selectedAddress,
                to: contractAddress,
                gasLimit: web3.utils.toHex(5000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
            })
            console.log(response)
            var lastDatasetID = await contract.methods.lastDatasetId().call()
            window.alert("Transaction success, your dataset ID is " + lastDatasetID)
            showLastDatasetID.value = lastDatasetID
            price_datasetID.value = lastDatasetID
            meta_datasetID.value = lastDatasetID
            delegate_datasetID.value = lastDatasetID
        } 
        catch (error) {
            statusBar.innerHTML = error
        }
    }
})

insertprice.addEventListener('click', async() =>{
    if (price_datasetID.value=="" || newPrice.value==""){
        window.alert("Dataset ID or New Price is empty!");
    }
    else if (sessionStorage.getItem("connected") !== "true") {
        window.alert("Please connect to your Web3 provider!");
    } 
    else {
        var owner = await contract.methods.getDatasetOwner(price_datasetID.value).call() 
        if (owner !== account) {
             window.alert("Only the dataset owner can call this function!");
        }
        else {
            try{
                var price = web3.utils.toWei(newPrice.value, 'ether')
                var response = await contract.methods.insertPrice(price_datasetID.value, price).send({
                    from: window.web3.currentProvider.selectedAddress,
                    to: contractAddress,
                    gasLimit: web3.utils.toHex(5000000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
                })
                console.log(response)
                window.alert("Transaction success!");
            } 
            catch (error) {
                statusBar.innerHTML = error
            }
        }
    }
})

insertMetadata.addEventListener('click', async() =>{
    if (meta_datasetID.value=="" || meta_value.value==""){
        window.alert("Dataset ID or value is empty!")
    }
    else if (sessionStorage.getItem("connected") !== "true"){
        window.alert("Please connect to your Web3 provider!");
    }
    else{
        var owner = await contract.methods.getDatasetOwner(meta_datasetID.value).call()
        if (owner !== account) {
            window.alert("Only the dataset owner can call this function!");
        }
        else{
            try{
                var response = await contract.methods.insertMetadata(meta_datasetID.value, meta_key.value, meta_value.value).send({
                    from: window.web3.currentProvider.selectedAddress,
                    to: contractAddress,
                    gasLimit: web3.utils.toHex(5000000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
                })
                console.log(response)
                window.alert("Transaction success!");
            }
            catch (error) {
                statusBar.innerHTML = error
            }
        }
    }
})

assignDelegate.addEventListener('click', async() =>{
    if (delegate_datasetID.value=="" || delegate_address.value==""){
        window.alert("Dataset ID or delegate address is empty!")
    }
    else if (sessionStorage.getItem("connected") !== "true"){
        window.alert("Please connect to your Web3 provider!");
    }
    else{
        var owner = await contract.methods.getDatasetOwner(delegate_datasetID.value).call()
        if (owner !== account) {
            window.alert("Only the dataset owner can call this function!");
        }
        else{
            try{
                var response = await contract.methods.assignDatasetDelegate(delegate_datasetID.value, delegate_address.value).send({
                    from: window.web3.currentProvider.selectedAddress,
                    to: contractAddress,
                    gasLimit: web3.utils.toHex(5000000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
                })
                console.log(response)
                window.alert("Transaction success!");
            }
            catch (error) {
                statusBar.innerHTML = error
            }
        }
    }
})
