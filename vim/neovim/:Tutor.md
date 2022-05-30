终端输入 `nvim`，再输入 `:Tutor <Enter>`，跳转到 neovim 教程。 

> `<>` 表示按键

首先需要切换到英文输入法，且关闭 `Caps-Lock`。

切换方向：左下上右 -> hjkl，四个方向键同样可以使用，但是使用 `hjkl` 移动速度更快。`5j`向下移动五行，`5k`向上移动五行。

`<Esc>`：切换到 `Normal mode`。

u: redo

链接处回车或者输入 `K` 即可跳转至指定位置。

输入 `:q <Enter>`：关闭当前窗口。

输入 `:q! <Enter>`：强制关闭当前窗口，不保留任何修改。

输入 `:qa! <Enter>`：强制关闭所有窗口，不保留任何修改。

输入 `:help <Enter>`：打开帮助文档。

<hr>

`Normal mode` 下

Press `x` to delete the character under the cursor.

Press `i` to insert text.

> 如何在插入模式执行正常模式的命令？

Press `A` to append text to the end of the line。

Use `:wq <Enter>` to write a file and quit。

Use `nvim FILENAME` to new or open a file.

Use `<Esc> :q! <Enter>` to trash all changes and exit Neovim.

Use `<Esc> :wq <Enter>` to save the changes and exit Neovim.

Type `dw` to delete a word, until the start of the next word, excluding its first character.

Type `d$` to delete to the end of the line, including the last character.

Type `de` to delete to the end of the current word, including the last character.

Type `dd` to delete a whole line.

Type `2dd` to delete two lines.

Type `2w` to skip 2 words.

Type `d2w` to delete 2 words.

Type `2b` to skip 2 words backward.

Press `u` to undo the last commands, `U` to fix a whole line (undo all the changes on a line).

Use `<C-r>` to undo the undo's.

> todo: type `<C-r>` (Control + R) a few times to redo the commands.

Use `0` to move to the start of the line.

Use `$` to move to the end of the line.

Type `p` to put previously deleted text after the cursor. 

Type `P` to put previously deleted text before the cursor. 

Type `rx` to replace the character at the cursor with x.

Type `ce` to change until the end of a word.

The change operator is used with the same motions as delete, such as `cw` (word) and `c$` (end of line).

Type `<C-g>` to show your location in a file and the file status. 

Type `G` to move to the bottom of the file.

Type `gg` to move to the start of the file.

Type `line number + G` to move to the given line.

Type `/` followed by a phrase to search for the phrase. Then press `<Enter>`.

To search for the same phrase again, simple type `n`. 

To search for the same phrase in the opposite direction, type `N`.

To search for a phrase in the backward direction, use `?` instead of `/`.

Type `%` to find a matching ), ], or }.

Type `:s/old/new/` to substitute first "new" for "old" in a line.

Type `:s/old/new/g` to substitute "new" for "old" in a line, globally.

To change every occurrence of a character string between two lines, type `:#,#s/old/new/g` where # are line numbers of the range of lines where the substitute is to be done (i.e., 1,3 means from line 1 to line 3, inclusive)

Type `:%s/old/new/g` to change every occurrence in the whole file.

Type `:%s/old/new/gc` to find every occurrence in the whole file, with a prompt whether to substitute or not.

Press `<C-o>` takes you back to older positions, `<C-i>` to newer positions.

Type `:!` followed by an external command to execute that command.
- `:!ls`
- `:!rm FILENAME`

To save the changes made to the text, type `:w` FILENAME.

Press `v` starts `Visual selection`. You can move the cursor around to make the selection bigger or smaller. Then you can use an operator to do something with the text. For example, `d` deletes the text.

To save part of the file, type `v` motion `:w` FILENAME for selecting text to write.(with hjkj)

`v` -> hjkl -> `:'<,'>w TEST`: Neovim will write the selected lines to the file TEST.

To retrieve the contents of a file, type `:r` FILENAME. The file you retrieve is placed below the cursor line.

Type `:r !ls` to read the output of the `ls` command and puts it below the cursor.

Type `o` to open a line below the cursor and place you in Insert mode.

Type `O` to open a line above the cursor and place you in Insert mode.

Type `a` to insert text after the cursor.

> Note: `a`, `i`, and `A` all go to the same Insert mode, the only difference is 
> where the characters are inserted.

Type a capital `R` to replace more than one character. (Replace mode)

> Note: Replace mode is like Insert mode, 
> but every typed character replaces an existing character.

Use the `y` (yank) operator to copy text and `p` (put) to put it.

> Note: you can use `y` as an operator: `yw` yanks one word.
> Note: you can use `P` to put before the cursor, rather than after.

Set an option so search and substitute commands ignore case.

Set the `ic` (Ignore case) option by entering: `:set ic`.

Set the `hlsearch` and `incsearch` options: `:set hls is`.
- `is` `incsearch`: show partial matches for a search phrase.
- `hls` `hlsearch`: highlight all matching phrases.

To disable ignoring case enter: `:set noic`.

> Note: Prepend `no` to switch an option off.

To invert the value of a setting, prepend it with `inv`: `:set invic`.

To remove the highlighting of matches enter: `:nohlsearch`.

If you want to ignore case fo just one search command, use `\c` in the phrase: `/ignore\c <Enter>`.

Use the online help system.
- press the `<F1>` key
- type `:help`

Type `<C-w>` to jump from on window to another.

Type `:q` to close the current help window.

`:help TOPIC`:

```shell
:help w
:help c_CTRL-D
:help insert-index
:help user-manual
```

config file: `init.vim` or `init.lua`.

```shell
:call mkdir(stdpath('config'), 'p')
:exe 'edit' stdpath('config').'/init.vim'
```

For more information type `:help init.vim`.

<hr>

Command line completion with `<C-d>` and `<Tab>`.

To be able to see what mode you are in, type `:set showmode`.

