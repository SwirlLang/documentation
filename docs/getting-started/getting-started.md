---
tags: [Getting started]
title: Getting Started
description: Documentation for Lambda Code programming language
---

Get started with **Lambda Code easily**.

## Installation

Check out the [installation](installation) page for more options of downloading. Here only linux is shown.

Assuming you are using a debian based distro use apt to install it:

```shell
sudo apt install lambda-code
```

It will install Lambda Code on your system.

It will contain the LPM package manager, the compiler and the standard libraries.

## Compile a file

create a file for compiling it. Use your preferred editor.

```shell
nano main.lc
```
Then paste the following in the file
```lc title="main.lc"
print("Hello World!, I am learning Lambda Code")
```

now compile the file

```shell
lcc main.lc
```

It will make a binary called **main** in the current folder. Run it using `./main`.

Congrats you have made your first Lambda Code app.
