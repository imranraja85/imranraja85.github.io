---
layout: post
title:  "Mesos Frameworks (WIP)"
date:   2017-01-26 12:53:41 -0500
categories: mesos frameworks orchestration
---

# Mesos Schedulers & Frameworks

A scheduler, which interacts directly with Mesos masters, has 4 responsbilities:

1) Launch tasks on the received offers
2) Handle status updates from those tasks, particularly to respond to task failures and crashes
3) Persist state and manage failovers in order to be highly available
4) interact with clients, users or other systems

Some of these responsibles can be handled by the Mesos API others have to be built.

Mesos frameworks are distributed systems that use Mesos to receive cluster resources.

_Framework_ any application that registers with mesos and runs on top of the mesos cluster. The framework
scheduler includes the logic for accepting or declining resource offers. If accepted, the scheduler is
responsible for launching the executors on the slaves which in turn launches the frameworks' tasks

You need a way to serve up the custom executor code so mesos can use it:
 * http
 * network file system
 * distributed file system
 * from the slaves local file system / mount point

There are two components of a framework:

a) Scheduler: registers with mesos master and implements the logic required for accepting or declining
resource offers from the master and deciding which tasks will use which resources

b) Executor: registers with mesos slave and implements the logic of managing a tasks lifecycle. including
launching and killing the task and providing status updates. when a process first starts, the executor sends
an update that the task is running; when it exits, the executor sends an update that the task has finished
or failed.


# Why write a framework?
If you're trying to write a new mesos native app, port an existing services to mesos, or if the app
requires specialized scheduling logic.

# Marathon

# Service Discovery and Routing
Because services can run anywhere in teh cluster and on any port (usually) finding distributed services
is a little more difficult than traditional deployments. Two popular tools are HAProxy and Mesos-DNS

Mesos-dns: a stateless DNS service for mesos clusters. it allows apps and services to find other apps 
and services by using a predictable naming convention and name lookup using A and SRV records for running tasks.
It works directly with mesos which allows apps to communicate across different frameworks.
