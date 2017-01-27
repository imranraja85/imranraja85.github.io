---
layout: post
title:  "Processes (WIP)"
date:   2017-01-26 12:53:41 -0500
categories: processes general WIP
---

Notes based on the book [Working with UNIX Processes](http://www.jstorimer.com/products/working-with-unix-processes)

The kernal sits on top of your hardware.

It's a middleman for any interactions that need to happen with your hardware.

Programs are not allowed direct access to the kernel.

Communication is done via system calls.

Userland is where your programs run. If you want to do anything interesting
with your program, you'll prob want to involve the kernel via system calls.

System calls allow your program (userspace program) to interact with your
hardware through the kernel.

Process have file descriptors.

Anytime you open a resource in a running process it is assigned a file
descriptor number. File descriptors are not shared across processes; they
live and die with the process they are bound to.

File descriptor numbers are assigned the lowest unused value.

File descriptors keep track of open resources only.

File descriptors are at the core of networking programming using sockets,
pipes, etc. and also as the core of any file system operators.


Every process inherits environment variables from its parent. This would explain
why setting env vars in your bash profile are picked up by rails apps when
you do ENV['SOMEVAR']
