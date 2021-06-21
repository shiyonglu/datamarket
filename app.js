var statusBar = document.getElementById('statusBar')
var connectWallet = document.getElementById('connectWallet')
var showAccount = document.getElementById('showAccount')
var showBalance = document.getElementById('showBalance')
var datasetTable = document.getElementById('datasetTable')
var account 
var balance
var contractABI = [{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"delegate","type":"address"}],"name":"assignDatasetDelegate","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"},{"name":"key","type":"string"}],"name":"queryAccountInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"rawAmt","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"assignDatasetId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"newOwner","type":"address"}],"name":"sellDataset","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"buyDatagold","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"rawAmt","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"newPrice","type":"uint256"}],"name":"insertPrice","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"newOwner","type":"address"}],"name":"transferDatasetOwner","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"key","type":"string"},{"name":"value","type":"string"}],"name":"insertAccountInfo","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastDatasetId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"datasetId","type":"uint256"}],"name":"getDatasetOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"key","type":"string"},{"name":"value","type":"string"}],"name":"insertMetadata","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"datasetId","type":"uint256"}],"name":"queryPrice","outputs":[{"name":"priceOfData","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeSub","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"rawAmt","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeDiv","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeMul","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"name":"safeAdd","outputs":[{"name":"c","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"datasetId","type":"uint256"},{"name":"key","type":"string"}],"name":"queryMetadata","outputs":[{"name":"value","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"inAmt","type":"uint256"},{"indexed":false,"name":"outAmt","type":"uint256"}],"name":"BuyDatagold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":true,"name":"key","type":"string"},{"indexed":false,"name":"value","type":"string"}],"name":"InsertMetadata","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"InsertPrice","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":true,"name":"account","type":"address"}],"name":"AssignDatasetId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"datasetId","type":"uint256"},{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"TransferDatasetOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":true,"name":"key","type":"string"},{"indexed":false,"name":"value","type":"string"}],"name":"InsertAccountInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"rawAmt","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"rawAmt","type":"uint256"}],"name":"Approval","type":"event"}]
var contractAddress = '0xa3A9aA529Ae21B1A19faD3A463962242bfc20842'
var contract
var firstDatasetID = 1000000001
var connected = false

window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        contract = new web3.eth.Contract(contractABI,  contractAddress)
        var lastDatasetID = await contract.methods.lastDatasetId().call()
        //console.log(lastDatasetID)
        generateDatasetTable(firstDatasetID, lastDatasetID)
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
            connected = true
            balance = await web3.eth.getBalance(account)
            contract = new web3.eth.Contract(contractABI,  contractAddress)

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + web3.utils.fromWei(balance, 'ether') + ' ETH'
            showBalance.style.visibility = "visible"
        } 
        catch (error) {
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

async function generateDatasetTable(start, end){
    for (i=start; i<=end; i++){
        var tr = datasetTable.insertRow()
        var td1 = tr.insertCell()
        td1.appendChild(document.createTextNode(i));
        var td2 = tr.insertCell()
        var owner = await contract.methods.getDatasetOwner(i).call()
        //console.log(owner)
        td2.appendChild(document.createTextNode(owner));
        var td3 = tr.insertCell()
        var price = await contract.methods.queryPrice(i).call()
        price = web3.utils.fromWei(price, 'ether')
        td3.appendChild(document.createTextNode(price));
        var td4 = tr.insertCell()
        td4.appendChild(document.createTextNode('None'));
    }
}