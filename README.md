# Libra's `Move` Language Snippets

[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/sdkbox/vscode-libra-move/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/sdkbox/vscode-libra-move.svg)](https://github.com/sdkbox/vscode-libra-move/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/sdkbox/vscode-libra-move.svg)](https://github.com/sdkbox/vscode-libra-move/pulls/)

https://marketplace.visualstudio.com/items?itemName=SDKBox.vscode-libra-move

- [Libra](https://libra.org): A simple global currency and financial infrastructure that empowers billions of people.
- [Move Language](https://developers.libra.org/docs/crates/move-language):Move is a new programming language developed to provide a safe and
  programmable foundation for the Libra Blockchain.
- [SDKBOX](https://www.sdkbox.com/): SDKBOX IS THE BRIDGE BETWEEN APPS AND SERVICES. SDKBOX helps you manage everything about using third party SDKs in mobile applications: rapidly select, integrate, verify, and update live servies from top suppliers.

## Features
- Code snippets
- Syntax highlighting

## API

[Modules](https://github.com/libra/libra/tree/master/language/stdlib/modules)

- `Hash`
- `LibraAccount` : The module for the account resource that governs every Libra account
- `LibraCoin`
- `Signature`
- `ValidatorSet`
- `libra.scripts` : [Transaction Scripts](https://github.com/libra/libra/tree/master/language/stdlib/transaction_scripts)

###### Snippets:

![snippets](https://raw.githubusercontent.com/sdkbox/vscode-libra-move/master/images/move-snippets.gif)

###### Move Commands:
1. Move - Compile current file (only works on macOS)

    The Compiler has been modified to support `--stdlib-root` argument. Detail with [PR](https://github.com/libra/libra/pull/237)
    ![snippets](https://raw.githubusercontent.com/sdkbox/vscode-libra-move/master/images/move-compile.gif)

## Contact

- Twitter: [@sdkbox][https://twitter.com/sdkbox]
- Email: fishwarter@gmail.com

## License

[MIT](./LICENSE)

## Test

```
npm install
npm run compile
```
