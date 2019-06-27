import * as vscode from 'vscode';

function commentLine() {
  vscode.commands.executeCommand('editor.action.addCommentLine');
}

export async function activate(context: vscode.ExtensionContext) {
  
  // compile
  const command = 'move.compile';
	context.subscriptions.push(vscode.commands.registerCommand(command, () => {
    // terminal.sendText("echo 'Hello world!'");
    // `bin/mac/compiler file`
    commentLine();
	}));
}

export async function deactivated() {
}

