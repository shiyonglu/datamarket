var statusBar = document.getElementById('statusBar')
var connectWallet = document.getElementById('connectWallet')
var showAccount = document.getElementById('showAccount')
var showBalance = document.getElementById('showBalance')

var dgcAmt = document.getElementById('dgcAmt')
var swapDGCforDAT = document.getElementById('swapDGCforDAT')
var datAmt = document.getElementById('datAmt')
var swapDATforDGC = document.getElementById('swapDATforDGC')


var account 
var ethBalance
var dgcBalance
var datBalance
var contractABI = [{"inputs":[{"internalType":"address","name":"DATcontract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"datasetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"AssignDatasetId","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"listingID","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"datasetID","type":"uint256"},{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"Sold","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"datasetId","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"TransferDatasetOwner","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"}],"name":"getDatasetOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingDatasetID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"getListingStatus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"insertAccountInfo","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"firstname","type":"string"},{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"organization","type":"string"},{"internalType":"string","name":"street1","type":"string"},{"internalType":"string","name":"street2","type":"string"},{"internalType":"string","name":"city","type":"string"},{"internalType":"string","name":"state","type":"string"},{"internalType":"string","name":"province","type":"string"},{"internalType":"string","name":"zip","type":"string"},{"internalType":"string","name":"country","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"fax","type":"string"},{"internalType":"string","name":"website","type":"string"}],"name":"insertAccountProfile","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"insertMetadata","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastDatasetId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastListingID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetID","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"listForSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"purchaseDataset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"string","name":"key","type":"string"}],"name":"queryAccountInfo","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"queryMetadata","outputs":[{"internalType":"string","name":"value","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"queryPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contributor","type":"string"},{"internalType":"string","name":"coverage","type":"string"},{"internalType":"string","name":"creator","type":"string"},{"internalType":"string","name":"date","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"string","name":"format","type":"string"},{"internalType":"string","name":"identifier","type":"string"},{"internalType":"string","name":"language","type":"string"},{"internalType":"string","name":"publisher","type":"string"},{"internalType":"string","name":"relation","type":"string"},{"internalType":"string","name":"rights","type":"string"},{"internalType":"string","name":"source","type":"string"},{"internalType":"string","name":"subject","type":"string"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"dtype","type":"string"}],"name":"registerDatasetProfile","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datAmt","type":"uint256"}],"name":"swapDATForDGC","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"dgcAmt","type":"uint256"}],"name":"swapDGCForDAT","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"datasetId","type":"uint256"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferDatasetOwner","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"listingID","type":"uint256"}],"name":"unlistFromSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
var contractAddress = '0xDB14E0b98991811671B116335dCA29B6eC671F4C'
var contract
var DATContractABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"inAmt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"outAmt","type":"uint256"}],"name":"BuyDCT","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buyDAT","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"rawAmt","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
var DATContractAddress = '0x1617C9526F2B954f94Cd4dc312AAA23C1fe89CBE'
var DATContract 

var firstDatasetID = 1000000001
var firstListingID = 1000000001

window.addEventListener('load', async () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var info = this.nextElementSibling;
        if (info.style.display === "block") {
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    });
    }

    refreshAccount()
})

async function refreshAccount(){
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        var accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            account = accounts[0]
            statusBar.innerHTML = ('<b>Wallet connected!</b>')
            sessionStorage.setItem("connected", "true");
            ethBalance = await web3.eth.getBalance(account)
            contract = new web3.eth.Contract(contractABI, contractAddress)
            dgcBalance = await contract.methods.balanceOf(account).call()

            DATContract = new web3.eth.Contract(DATContractABI, DATContractAddress)
            datBalance = await DATContract.methods.balanceOf(account).call()

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + parseFloat(web3.utils.fromWei(ethBalance, 'ether')).toFixed(4) + ' ETH, ' + web3.utils.fromWei(dgcBalance, 'ether') + ' DGC, ' + web3.utils.fromWei(datBalance, 'ether') + ' DAT'
            showBalance.style.visibility = "visible"
        } else {
            sessionStorage.setItem("connected", "false");
        }
    }
}

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

            DATContract = new web3.eth.Contract(DATContractABI, DATContractAddress)
            datBalance = await DATContract.methods.balanceOf(account).call()

            showAccount.innerHTML = "Current account: "+account
            showAccount.style.visibility = "visible"
            showBalance.innerHTML = "Balance: " + parseFloat(web3.utils.fromWei(ethBalance, 'ether')).toFixed(4) + ' ETH, ' + web3.utils.fromWei(dgcBalance, 'ether') + ' DGC, ' + web3.utils.fromWei(datBalance, 'ether') + ' DAT'
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

swapDGCforDAT.addEventListener('click', async() =>{
    if (dgcAmt.value==""){
        window.alert("DGC amount is empty!");
    }
    else if (sessionStorage.getItem("connected") !== "true") {
        window.alert("Please connect to your Web3 provider!");
    } 
    else if (parseFloat(dgcAmt.value) > parseFloat(web3.utils.fromWei(dgcBalance, 'ether'))){
        window.alert("You do not have enough DGC balance for this swap!");
    }
    else {
        try{
            var amt = web3.utils.toWei(dgcAmt.value, 'ether')
            var response = await contract.methods.swapDGCForDAT(amt).send({
                from: window.web3.currentProvider.selectedAddress,
                to: contractAddress,
                gasLimit: web3.utils.toHex(5000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
            })
            console.log(response)
            window.alert("Transaction success!");
            refreshAccount()
            } 
        catch (error) {
            statusBar.innerHTML = error.message
        }
    }
})

swapDATforDGC.addEventListener('click', async() =>{
    if (datAmt.value==""){
        window.alert("DAT amount is empty!");
    }
    else if (sessionStorage.getItem("connected") !== "true") {
        window.alert("Please connect to your Web3 provider!");
    } 
    else if (parseFloat(datAmt.value) > parseFloat(web3.utils.fromWei(datBalance, 'ether'))){
        window.alert("You do not have enough DAT balance for this swap!");
    }
    else {
        try{
            var amt = web3.utils.toWei(datAmt.value, 'ether')
            var spender = await DATContract.methods.approve(contractAddress, amt).send({
                from: window.web3.currentProvider.selectedAddress,
                to: DATContractAddress,
                gasLimit: web3.utils.toHex(200000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('5', 'gwei'))
            })

            var response = await contract.methods.swapDATForDGC(amt).send({
                from: window.web3.currentProvider.selectedAddress,
                to: contractAddress,
                gasLimit: web3.utils.toHex(5000000),
                gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei'))
            })
            console.log(response)
            window.alert("Transaction success!");
            refreshAccount()
            } 
        catch (error) {
            statusBar.innerHTML = error.message
        }
    }
})

