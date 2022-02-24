require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million provide gesture local forget twin'; 
let testAccounts = [
"0x970e39cc6e30f7a62dbd7e590e78c6fbcecc816c7b2f80a401cf197973be71ef",
"0x4df98a8b6aa970b783df824264aee87dc3c25cbdfe00cdbdb382b7f9656fad73",
"0x9d1f620b816336d984c4048ae549160b5854a3d6429f6e1829d19c262e12f514",
"0xd13a2a460dd2e94eb0969ca5f343f0b0f0628c72b0627ad93e7ec4a68acf9394",
"0xb05db646e838dc4d28f17440f181c6f46b3e33a710e809647d3d5c61036adcdb",
"0xec455c025797382d55cde702acfb326ad4001377880641bd0d731791149fbb9d",
"0x3ca2f0443433bd819d7f6a07e7381fb2397b5eabcbf9f7c7e634e4f7e9fc97df",
"0x5eb238e61f0b3a3b97a0d4bd3b0026ad7f3595a5462399b80aedbbbf33d5ff16",
"0x86f75cea005f8412181fcb7906cdf1c7dcc93a2a1d1ce81bab3167f96705236c",
"0x88d12d2c6cbfa966916b732a2364f65402f401ff487a386eaafebcfbaa01ac35"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


