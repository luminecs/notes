终端输入 `nvim`，再输入 `:Tutor <Enter>`，跳转到 neovim 教程。 

> `<>` 表示按键

首先需要切换到英文输入法，且关闭 `Caps-Lock`。

切换方向：左下上右 -> hjkl，四个方向键同样可以使用，但是使用 `hjkl` 移动速度更快。

`<Esc>`：切换到 `Normal mode`。

u: redo

链接处回车或者输入 `K` 即可跳转至指定位置。

输入 `:q <Enter>`：关闭当前窗口。

输入 `:q! <Enter>`：强制关闭当前窗口，不保留任何修改。

输入 `:qa! <Enter>`：强制关闭所有窗口，不保留任何修改。

输入 `:help <Enter>`：打开帮助文档。

<hr>

`Normal mode` 下

Press `x` to delete the  character under the cursor.

Press `i` to insert text.

> 如何在插入模式执行正常模式的命令？

Press `A` to append text。

Use `:wq <Enter>` to write a file and quit。

Use `nvim FILENAME` to new or open a file.

Use `<Esc> :q! <Enter>` to trash all changes and exit Neovim.

Use `<Esc> :wq <Enter>` to save the changes and exit Neovim.

Type `dw` to delete a word. 删除单词字符范围`[光标所在位置, 光表所在单词与后面紧邻单词之间的空字符串(如果有特殊符号则到特殊符号)]`。

Type `d$` to delete to the end of the line.

## On Operators and Motions



