require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note soap coconut grace lonely equal gasp'; 
let testAccounts = [
"0xc908696de23fdbbf7d7c228dcf14c46e960acf079675eb5d0445b34f3a097f06",
"0x31738f7d7fdec7b71623c272d9eb08ce135e7f258e8d93e8f4f56d27f4f78d82",
"0x3916097be49f65d8d25fafce533bcba388c646828614354291fa2dc09c66731e",
"0x3f3ba9adf8f318ade72f05ddc68bc2a84fa11dca958bb86fbbad5f1d9339bfd6",
"0xab4134fbb8f1b7acf6582f82c3103305ff92e4d2463641655d9a61ede4705b5a",
"0x42a576c072b53009361b562c6c9f5a0ac2798e87fefc3a533577eea3abe161f5",
"0xe03f1462e8eb7efe1524a41cf1d656c533980d2f68ae2f3cd2a36f3954605dc0",
"0xaa13ad67ff536d8937601d95db10d2e8812dbb270177bfa553dad804f3101991",
"0xf272f61950f7cbd00e526508c96ed4bcc5fbac0171cfd596ae537fdfa8169349",
"0xf4548b978e75ec5aa52ead8cd8abb23ef61e2ba3c3a23f0f04ac8759a5b97a0b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

