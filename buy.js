var statusBar = document.getElementById('statusBar')
var connectWallet = document.getElementById('connectWallet')
var showAccount = document.getElementById('showAccount')
var showBalance = document.getElementById('showBalance')
var currentDataset = document.getElementById('currentDataset')
var currentTitle = document.getElementById('currentTitle')
var currentPrice = document.getElementById('currentPrice')
var currentStatus = document.getElementById('currentStatus')
var currentOwner = document.getElementById('currentOwner')
var datasetInfoList = document.getElementById('datasetInfoList')
var ownerInfoList = document.getElementById('ownerInfoList')
var loader = document.getElementById('loader')
var finishLoding = document.getElementById('finishLoding')
var purchaseDataset = document.getElementById('purchaseDataset')

var account 
var ethBalance
var dgcBalance
var contractABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"datasetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AssignDatasetId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"listingID","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"datasetID","type":"uint256"},{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"datasetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"TransferDatasetOwner","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"}],"name":"getDatasetOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingDatasetID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"insertAccountInfo","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"firstname","type":"string"},{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"organization","type":"string"},{"internalType":"string","name":"street1","type":"string"},{"internalType":"string","name":"street2","type":"string"},{"internalType":"string","name":"city","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"province","type":"string"},{"internalType":"string","name":"zip","type":"string"},{"internalType":"string","name":"country","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"fax","type":"string"},{"internalType":"string","name":"website","type":"string"}],"name":"insertAccountProfile","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"insertMetadata","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastDatasetId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastListingID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetID","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"listForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"purchaseDataset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"key","type":"string"}],"name":"queryAccountInfo","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"queryMetadata","outputs":[{"internalType":"string","name":"value","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"queryPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contributor","type":"string"},{"internalType":"string","name":"coverage","type":"string"},{"internalType":"string","name":"creator","type":"string"},{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"format","type":"string"},{"internalType":"string","name":"identifier","type":"string"},{"internalType":"string","name":"language","type":"string"},{"internalType":"string","name":"publisher","type":"string"},{"internalType":"string","name":"relation","type":"string"},{"internalType":"string","name":"rights","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"subject","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"dtype","type":"string"}],"name":"registerDatasetProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferDatasetOwner","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"unlistFromSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
var contractAddress = '0xAaD5dC6860deC75BA775837f83d533782aF72E0c'
var contract

var firstDatasetID = 1000000001
var firstListingID = 1000000001
const datasetProfile = ["contributor", "coverage", "creator", "date", "description", "format",  "identifier", "language", "publisher", "relation", "rights", "source", "subject", "title", "dtype"]
const accountProfile = ["firstname", "lastname", "organization", "street1", "street2", "city", "state", "province", "zip", "country", "email", "phone", "fax", "website"]

var urlParams = new URLSearchParams(window.location.search)
var listingID = urlParams.get('listingID')
var datasetID = urlParams.get('datasetID')
var title = urlParams.get('title')
var owner = urlParams.get('owner')
var price = urlParams.get('price')
var status = urlParams.get('status')
var readDatasetProfile = []
var readAccountProfile = []

window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        var accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            account = accounts[0]
            statusBar.innerHTML = ('<b>Wallet connected!</b>')
            sessionStorage.setItem("connected", "true");
            ethBalance = await web3.eth.getBalance(account)
            contract = new web3.eth.Contract(contractABI,  contractAddress)
            dgcBalance = await contract.methods.balanceOf(account).call()

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + parseFloat(web3.utils.fromWei(ethBalance, 'ether')).toFixed(4) + ' ETH, ' + web3.utils.fromWei(dgcBalance, 'ether') + ' DGC'
            showBalance.style.visibility = "visible"
        } else {
            sessionStorage.setItem("connected", "false");
        }

        contract = new web3.eth.Contract(contractABI,  contractAddress)
        for (var i = 0; i < datasetProfile.length; i++){
            var item = await contract.methods.queryMetadata(datasetID, datasetProfile[i]).call()
            if (item =="") {
                item = "none"
            }
            readDatasetProfile.push(item)
        }
        for (var i = 0; i < accountProfile.length; i++){
            var item = await contract.methods.queryAccountInfo(owner, accountProfile[i]).call()
            if (item =="") {
                item = "none"
            }
            readAccountProfile.push(item)
        }
    }

    // show query strings second 
    currentDataset.innerHTML = datasetID
    currentTitle.innerHTML = title
    currentOwner.innerHTML = owner
    currentPrice.innerHTML = "DGC " + price
    if (status == "1") {
        currentStatus.innerHTML = "For sale"
    }
    else if (status == "2"){
        currentStatus.innerHTML = "Sold"
        purchaseDataset.style.display = "none";
    }
    else if (status == "3"){
        currentStatus.innerHTML = "Not for sale"
        purchaseDataset.style.display = "none"
    }

    // show read info third
    for (var i = 0; i < datasetProfile.length; i++){
        var item = document.createElement('li')
        item.appendChild(document.createTextNode(datasetProfile[i] + ": " + readDatasetProfile[i]))
        datasetInfoList.appendChild(item)
    }
    var item1 = document.createElement('li');
    item1.appendChild(document.createTextNode("Name" + ": " + readAccountProfile[0] + " " +readAccountProfile[1]))
    ownerInfoList.appendChild(item1)
    var item2 = document.createElement('li');
    item2.appendChild(document.createTextNode("Organization" + ": " + readAccountProfile[2]))
    ownerInfoList.appendChild(item2)
    var item3 = document.createElement('li');
    item3.appendChild(document.createTextNode("Email" + ": " + readAccountProfile[10]))
    ownerInfoList.appendChild(item3)
    var item4 = document.createElement('li');
    item4.appendChild(document.createTextNode("Phone" + ": " + readAccountProfile[11]))
    ownerInfoList.appendChild(item4)

    // change display
    finishLoding.style.display = "block"
    loader.style.display = "none"
})

connectWallet.addEventListener('click', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            account = accounts[0]
            statusBar.innerHTML = ('<b>Wallet connected!</b>')
            sessionStorage.setItem("connected", "true");
            ethBalance = await web3.eth.getBalance(account)
            contract = new web3.eth.Contract(contractABI,  contractAddress)
            dgcBalance = await contract.methods.balanceOf(account).call()

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + parseFloat(web3.utils.fromWei(ethBalance, 'ether')).toFixed(4) + ' ETH, ' + web3.utils.fromWei(dgcBalance, 'ether') + ' DGC'
            showBalance.style.visibility = "visible"
        } catch (error) {
            statusBar.innerHTML = error.message
        }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    else {
        statusBar.innerHTML = ("Non-Ethereum browser detected. Please consider trying <a href='https://metamask.io/download' target='window'>MetaMask</a>!")
    }
})

purchaseDataset.addEventListener('click', async () => {
    if (sessionStorage.getItem("connected") !== "true"){
        window.alert("Please connect to your Web3 provider!");
    }
    else{
        // owner verification in case of hacking
        var ownerVerify = await contract.methods.getListingOwner(listingID).call()
        if (ownerVerify !== owner) {
            window.alert("Owner verification error!");
        }
        else if (parseFloat(web3.utils.fromWei(dgcBalance, 'ether')) < parseFloat(price)) {
            window.alert("DGC balance is not enough!"); // compare DAT balance
        }
        else {
            try{
                var response = await contract.methods.purchaseDataset(listingID).send({
                    from: window.web3.currentProvider.selectedAddress,
                    to: contractAddress,
                    gasLimit: web3.utils.toHex(5000000),
                    gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
                })
                console.log(response)
                window.alert("Transaction success!");
                window.location.href='index.html'
            }
            catch (error) {
                statusBar.innerHTML = error.message
            }
        }
    }
})