---
tags: [Getting started]
title: Getting Started
description: Getting started guide
---

Get started with **Swirl easily** in just 5 minutes.

## Installation

Check out the [installation](installation) page for more options of downloading. Here only linux is shown.

Assuming you are using a debian based distro use apt to install it:

```shell
sudo apt install Swirl
```

It will install Swirl on your system.

It will contain the Swirl compiler and the standard libraries.

## Compile a file

create a file for compiling it. Use your preferred editor.

```shell
nano main.sw
```

Then paste the following in the file or write your own

```lc title="main.lc"
print("Hello World!, I am learning Swirl")
```

now compile the file

```shell
swirl main.sw
```

It will make a binary called **main** in the current folder. Run it using `./main`.

It should output `Hello World!, I am learning Swirl`.

Congrats you have made your first Swirl app.
