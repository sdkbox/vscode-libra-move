import * as vscode from 'vscode';
import * as path from "path";

function getTerminal(): vscode.Terminal {
  let length = (<any>vscode.window).terminals.length;
  if (length > 0) {
    return (<any>vscode.window).activeTerminal;
  } else {
    let terminal = (<any>vscode.window).createTerminal();
    terminal.show();
    return terminal;
  }
}

function compileMove() {
  if (process.platform != 'darwin') {
    vscode.window.showErrorMessage("Only support macOS currently!");
    return;
  }

  let ext = vscode.extensions.getExtension('SDKBox.vscode-libra-move');
  let compilerPath = path.join((<any>ext).extensionPath, 'bin', 'mac', 'compiler');
  let stdlibRoot = path.join((<any>ext).extensionPath, 'bin', 'stdlib');
  let cmd = `${compilerPath} --stdlib-root ${stdlibRoot} ${(<any>vscode.window).activeTextEditor.document.fileName}`;
  getTerminal().sendText(cmd);
    // console.log(__dirname);
}

export async function activate(context: vscode.ExtensionContext) {
  
  // compile
  const command = 'move.compile';
	context.subscriptions.push(vscode.commands.registerCommand(command, compileMove));
}

export async function deactivated() {
}

