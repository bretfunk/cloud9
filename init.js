// copy and paste this text into your cloud9 init file to regain some of your vim bindings
//
// You can access plugins via the 'services' global variable
/*global services, plugin*/

// to load plugins use
// services.pluginManager.loadPackage([
//     "https://<user>.github.io/<project>/build/package.<name>.js",
//     "~/.c9/plugins/<name>/package.json",
// ]);

require(["plugins/c9.ide.ace.keymaps/vim/keymap"], function(vim) {
    vim.map("jj", "<Esc>", "insert")
});
