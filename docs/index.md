---
sidebar_position: 1
slug: /
tags: [Getting started]
title: Getting started
description: Documentation for Lambda Code programming language
---
:::caution
This is just a dummy documentation.
:::
## Lambda Code

Get started with **Lambda Code in less than 3 minutes**.

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [GCC compiler](https://gcc.gnu.org/)

## Clone the repository

Clone the github repository to your pc using git:

```bash
git clone https://github.com/LC-Lang/Lambda-Code
```
It will create a folder on your pc called Lambda-Code. `cd` into the folder.

## Building the compiler

First `cd` into the core folder:
```bash
cd core
```
Build the compiler using gcc:
```bash
g++ lcc.cpp -o lcc
```
It will create a binary in the core folder called **lcc**.
Now run the compiler using `./lcc` command. It will show the help message.

## Compiling a file
Give the compiler a file name to compile.
```bash
./lcc main.lc
```
It will make a binary called **main** in the current folder. Go ahead and run it `./main`